import { useState, useEffect, useRef, useCallback } from 'react';
import { questions } from './data/questions';

/* ──────────────────────────────────────────────
   TYPES
────────────────────────────────────────────── */
type Letra = 'A' | 'B' | 'C' | 'D' | 'E';
type QuizPhase = 'intro' | 'quiz' | 'result';

interface TimerState {
  remaining: number;   // segundos restantes
  running: boolean;
  guessed: boolean;    // true = chute automático
}

/* ──────────────────────────────────────────────
   CONSTANTS
────────────────────────────────────────────── */
const TOTAL_TIME = 180; // 3 minutos por questão
const TOTAL_Q = questions.length;

/* ──────────────────────────────────────────────
   HELPERS
────────────────────────────────────────────── */
const fmt = (s: number) => {
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
};

const randomLetra = (): Letra => {
  const opts: Letra[] = ['A', 'B', 'C', 'D', 'E'];
  return opts[Math.floor(Math.random() * opts.length)];
};

/* colour per time */
const timerColor = (s: number) => {
  if (s > 90) return '#00ff88';
  if (s > 45) return '#fbbf24';
  return '#ef4444';
};

/* ──────────────────────────────────────────────
   SUB-COMPONENTS
────────────────────────────────────────────── */

/* Header ---------------------------------------- */
function Header() {
  return (
    <header className="quiz-header">
      <div className="header-bg-image" aria-hidden="true" />
      <div className="header-top-bar">
        <div className="header-chip">🌍 BIOSFERA</div>
        <div className="header-chip">📚 GEOGRAFIA</div>
        <div className="header-chip">🏫 3º ANO C – INFORMÁTICA</div>
        <div className="header-chip" style={{ marginLeft: 'auto' }}>✦ ENEM 2001–2023</div>
      </div>
      <div className="header-main">
        <div className="header-group-badge">
          <span className="group-icon">⚡</span>
          <span>Grupo Buffado de Geografia</span>
        </div>
        <h1 className="header-title">
          Biosfera: interação e<br />dinâmica do planeta
        </h1>
        <p className="header-subtitle">Quiz Interativo – 20 Questões ENEM</p>
      </div>
      <div className="header-meta">
        <div className="meta-block">
          <span className="meta-label">Integrantes</span>
          <span className="meta-value">Acir Sálvio · Eliseu Alexandre · João Vitor · Vânderi Luan</span>
        </div>
        <div className="meta-divider" />
        <div className="meta-block">
          <span className="meta-label">Série / Turma / Curso</span>
          <span className="meta-value">3º Ano C – Informática</span>
        </div>
        <div className="meta-divider" />
        <div className="meta-block">
          <span className="meta-label">Disciplina</span>
          <span className="meta-value">Geografia</span>
        </div>
        <div className="meta-divider" />
        <div className="meta-block">
          <span className="meta-label">Professor</span>
          <span className="meta-value">Marcelo Ramão</span>
        </div>
      </div>
    </header>
  );
}

/* Intro Screen ---------------------------------- */
function IntroScreen({ onStart }: { onStart: () => void }) {
  return (
    <div className="intro-screen">
      <div className="intro-card">
        <div className="intro-icon">🌿</div>
        <h2 className="intro-heading">Bem-vindo ao Quiz da Biosfera</h2>
        <p className="intro-desc">
          Você responderá <strong>20 questões objetivas</strong> do ENEM sobre
          Biosfera, Biomas, Ciclos Biogeoquímicos e Impactos Ambientais.
        </p>
        <div className="intro-rules">
          <div className="rule-item">
            <span className="rule-icon">⏱️</span>
            <span>Cada questão possui <strong>3 minutos</strong> individuais</span>
          </div>
          <div className="rule-item">
            <span className="rule-icon">🔀</span>
            <span>Navegação <strong>não-sequencial</strong> entre questões</span>
          </div>
          <div className="rule-item">
            <span className="rule-icon">🎲</span>
            <span>Tempo esgotado = <strong>chute automático</strong></span>
          </div>
          <div className="rule-item">
            <span className="rule-icon">▶️</span>
            <span>Cronômetros correm em <strong>paralelo</strong></span>
          </div>
          <div className="rule-item">
            <span className="rule-icon">📊</span>
            <span>Gabarito exibido somente ao <strong>término</strong></span>
          </div>
        </div>
        <button className="btn-start" onClick={onStart}>
          <span>Iniciar Quiz</span>
          <span className="btn-arrow">→</span>
        </button>
      </div>
    </div>
  );
}

/* Circular Timer -------------------------------- */
function CircularTimer({ remaining, total = TOTAL_TIME, size = 64 }: {
  remaining: number;
  total?: number;
  size?: number;
}) {
  const radius = (size - 8) / 2;
  const circ = 2 * Math.PI * radius;
  const progress = remaining / total;
  const dashoffset = circ * (1 - progress);
  const color = timerColor(remaining);

  return (
    <svg width={size} height={size} className="circ-timer" style={{ transform: 'rotate(-90deg)' }}>
      <circle cx={size / 2} cy={size / 2} r={radius} stroke="#1e293b" strokeWidth={6} fill="none" />
      <circle
        cx={size / 2} cy={size / 2} r={radius}
        stroke={color} strokeWidth={6} fill="none"
        strokeDasharray={circ}
        strokeDashoffset={dashoffset}
        strokeLinecap="round"
        style={{ transition: 'stroke-dashoffset 1s linear, stroke 0.3s' }}
      />
      <text
        x={size / 2} y={size / 2 + 1}
        textAnchor="middle" dominantBaseline="middle"
        fill={color} fontSize={size < 50 ? 9 : 11} fontWeight="bold"
        style={{ transform: `rotate(90deg) translate(0px, -${size}px)`, fontFamily: 'monospace' }}
      >
        {fmt(remaining)}
      </text>
    </svg>
  );
}

/* Global HUD Timer ------------------------------ */
function GlobalHud({
  firstStarted,
  timers,
}: {
  firstStarted: number | null;
  timers: TimerState[];
}) {
  const t = firstStarted !== null ? timers[firstStarted] : null;
  const label = firstStarted !== null ? `Q${firstStarted + 1}` : '—';
  const remaining = t ? t.remaining : TOTAL_TIME;

  return (
    <div className="global-hud">
      <div className="hud-inner">
        <div className="hud-label">⏳ Cronômetro {label}</div>
        <CircularTimer remaining={remaining} size={72} />
        <div className="hud-subtext">
          {t?.guessed ? '⚠️ Respondida automaticamente' : t?.running ? '▶ Em andamento' : '✔ Respondida'}
        </div>
      </div>
    </div>
  );
}

/* Nav Grid -------------------------------------- */
function NavGrid({
  current,
  answers,
  timers,
  onSelect,
}: {
  current: number;
  answers: (Letra | null)[];
  timers: TimerState[];
  onSelect: (i: number) => void;
}) {
  return (
    <div className="nav-grid-wrap">
      <p className="nav-title">Questões</p>
      <div className="nav-grid">
        {questions.map((_, i) => {
          const answered = answers[i] !== null;
          const active = i === current;
          const guessed = timers[i].guessed;
          const running = timers[i].running && !answered;
          return (
            <button
              key={i}
              className={`nav-btn ${active ? 'nav-active' : ''} ${answered && !active ? (guessed ? 'nav-guessed' : 'nav-answered') : ''} ${running && !active ? 'nav-running' : ''}`}
              onClick={() => onSelect(i)}
              title={`Questão ${i + 1} – ${answered ? (guessed ? 'Chute automático' : 'Respondida') : 'Sem resposta'}`}
            >
              <span>{i + 1}</span>
              {running && (
                <span className="nav-dot" />
              )}
            </button>
          );
        })}
      </div>
      <div className="nav-legend">
        <span className="leg-item"><span className="leg-dot leg-active" />Atual</span>
        <span className="leg-item"><span className="leg-dot leg-answered" />Respondida</span>
        <span className="leg-item"><span className="leg-dot leg-guessed" />Chute</span>
        <span className="leg-item"><span className="leg-dot leg-running" />Correndo</span>
      </div>
    </div>
  );
}

/* Question Card --------------------------------- */
function QuestionCard({
  question,
  index,
  answer,
  timer,
  onAnswer,
}: {
  question: (typeof questions)[0];
  index: number;
  answer: Letra | null;
  timer: TimerState;
  onAnswer: (l: Letra) => void;
}) {
  const color = timerColor(timer.remaining);
  const locked = answer !== null;

  return (
    <div className="q-card">
      {/* Question header */}
      <div className="q-header">
        <div className="q-num-badge">
          <span className="q-num-label">Questão</span>
          <span className="q-num">{index + 1}</span>
          <span className="q-total">/ {TOTAL_Q}</span>
        </div>
        <div className="q-timer-wrap">
          <CircularTimer remaining={timer.remaining} size={56} />
          <span className="q-fonte-badge">{question.fonte.ano} · {question.fonte.modalidade.split('–')[0].trim()}</span>
        </div>
      </div>

      {/* Enunciado */}
      {question.contexto && (
        <div className="q-contexto">
          <span className="q-ctx-label">📄 Contexto</span>
          <p>{question.contexto}</p>
        </div>
      )}
      <div className="q-enunciado">
        {question.enunciado.split('\n').map((line, li) =>
          line.trim() ? <p key={li}>{line}</p> : <br key={li} />
        )}
      </div>

      {/* Timer bar */}
      <div className="q-timer-bar-wrap">
        <div
          className="q-timer-bar-fill"
          style={{
            width: `${(timer.remaining / TOTAL_TIME) * 100}%`,
            background: color,
            boxShadow: `0 0 8px ${color}`,
          }}
        />
      </div>

      {/* Alternatives */}
      <div className="q-alts">
        {question.alternativas.map((alt) => {
          const sel = answer === alt.letra;
          // isCorrect is only shown after quiz ends, not during
          return (
            <button
              key={alt.letra}
              className={`alt-btn
                ${sel && locked ? (timer.guessed ? 'alt-guessed' : 'alt-selected') : ''}
                ${!locked ? 'alt-hoverable' : ''}
                ${locked ? 'alt-locked' : ''}
              `}
              onClick={() => !locked && onAnswer(alt.letra)}
              disabled={locked}
            >
              <span className="alt-letter">{alt.letra}</span>
              <span className="alt-text">{alt.texto}</span>
              {sel && locked && timer.guessed && (
                <span className="alt-tag alt-tag-guess">🎲 Chute</span>
              )}
              {sel && locked && !timer.guessed && (
                <span className="alt-tag alt-tag-ok">✔ Selecionada</span>
              )}
            </button>
          );
        })}
      </div>

      {locked && (
        <div className="q-locked-notice">
          {timer.guessed
            ? '⚠️ Tempo esgotado — alternativa selecionada automaticamente.'
            : '✔ Resposta registrada. Você pode navegar para outras questões.'}
        </div>
      )}
    </div>
  );
}

/* Result Screen --------------------------------- */
function ResultScreen({
  answers,
  timers,
  onRestart,
}: {
  answers: (Letra | null)[];
  timers: TimerState[];
  onRestart: () => void;
}) {
  let correct = 0;
  let guessed = 0;
  let unanswered = 0;

  answers.forEach((a, i) => {
    if (a === null) { unanswered++; return; }
    if (a === questions[i].correta) correct++;
    if (timers[i].guessed) guessed++;
  });

  const score = Math.round((correct / TOTAL_Q) * 100);
  const grade =
    score >= 90 ? { label: 'Excelente!', color: '#00ff88', icon: '🏆' } :
    score >= 70 ? { label: 'Muito Bom!', color: '#22d3ee', icon: '🎉' } :
    score >= 50 ? { label: 'Regular', color: '#fbbf24', icon: '📚' } :
    { label: 'Precisa Estudar Mais', color: '#ef4444', icon: '💪' };

  return (
    <div className="result-screen">
      <div className="result-card">
        <div className="result-icon">{grade.icon}</div>
        <h2 className="result-heading" style={{ color: grade.color }}>{grade.label}</h2>
        <div className="result-score-wrap">
          <svg width={140} height={140} style={{ transform: 'rotate(-90deg)' }}>
            <circle cx={70} cy={70} r={60} stroke="#1e293b" strokeWidth={10} fill="none" />
            <circle cx={70} cy={70} r={60} stroke={grade.color} strokeWidth={10} fill="none"
              strokeDasharray={2 * Math.PI * 60}
              strokeDashoffset={2 * Math.PI * 60 * (1 - score / 100)}
              strokeLinecap="round" style={{ transition: 'stroke-dashoffset 1.5s ease' }} />
          </svg>
          <div className="result-score-text">
            <span className="result-pct" style={{ color: grade.color }}>{score}%</span>
            <span className="result-fraction">{correct}/{TOTAL_Q}</span>
          </div>
        </div>

        <div className="result-stats">
          <div className="stat-box stat-correct">
            <span className="stat-n">{correct}</span>
            <span className="stat-label">Acertos</span>
          </div>
          <div className="stat-box stat-wrong">
            <span className="stat-n">{answers.filter((a, i) => a !== null && a !== questions[i].correta).length}</span>
            <span className="stat-label">Erros</span>
          </div>
          <div className="stat-box stat-guess">
            <span className="stat-n">{guessed}</span>
            <span className="stat-label">Chutes</span>
          </div>
          <div className="stat-box stat-blank">
            <span className="stat-n">{unanswered}</span>
            <span className="stat-label">Sem Resp.</span>
          </div>
        </div>

        {/* Gabarito completo */}
        <div className="gabarito-section">
          <h3 className="gabarito-title">📋 Gabarito Completo</h3>
          <div className="gabarito-grid">
            {questions.map((q, i) => {
              const ua = answers[i];
              const hit = ua === q.correta;
              const gss = timers[i].guessed;
              return (
                <div key={i} className={`gab-item ${ua === null ? 'gab-blank' : hit ? 'gab-hit' : 'gab-miss'}`}>
                  <div className="gab-top">
                    <span className="gab-qn">Q{i + 1}</span>
                    <span className={`gab-status ${ua === null ? '' : hit ? 'gab-status-hit' : 'gab-status-miss'}`}>
                      {ua === null ? '—' : hit ? '✔' : '✘'}
                    </span>
                    {gss && <span className="gab-guess-tag">🎲</span>}
                  </div>
                  <div className="gab-answers">
                    <span className="gab-label-sm">Sua resp.:</span>
                    <span className={`gab-letter ${ua === null ? 'gab-null' : hit ? 'gab-hit-let' : 'gab-miss-let'}`}>
                      {ua ?? '—'}
                    </span>
                    <span className="gab-label-sm">Correta:</span>
                    <span className="gab-correct-let">{q.correta}</span>
                  </div>
                  <div className="gab-year">{q.fonte.ano}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Fontes */}
        <div className="fontes-section">
          <h3 className="fontes-title">🔗 Fontes das Questões</h3>
          <ol className="fontes-list">
            {questions.map((q, i) => (
              <li key={i} className="fonte-item">
                <span className="fonte-num">Q{i + 1}.</span>
                <span className="fonte-desc">{q.fonte.descricao} — </span>
                <a href={q.fonte.url} target="_blank" rel="noopener noreferrer" className="fonte-link">
                  Acessar fonte ↗
                </a>
              </li>
            ))}
          </ol>
        </div>

        <button className="btn-restart" onClick={onRestart}>
          🔄 Reiniciar Quiz
        </button>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────
   MAIN APP
────────────────────────────────────────────── */
export default function App() {
  const [phase, setPhase] = useState<QuizPhase>('intro');
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<(Letra | null)[]>(Array(TOTAL_Q).fill(null));
  const [timers, setTimers] = useState<TimerState[]>(
    Array(TOTAL_Q).fill(null).map(() => ({ remaining: TOTAL_TIME, running: false, guessed: false }))
  );
  const [firstStarted, setFirstStarted] = useState<number | null>(null);

  /* tick ref to avoid stale closure */
  const timersRef = useRef(timers);
  timersRef.current = timers;
  const answersRef = useRef(answers);
  answersRef.current = answers;

  /* Global tick – 1 Hz */
  useEffect(() => {
    if (phase !== 'quiz') return;
    const id = setInterval(() => {
      setTimers((prev) => {
        const next = prev.map((t, i) => {
          if (!t.running || answersRef.current[i] !== null) return t;
          const newRem = t.remaining - 1;
          if (newRem <= 0) {
            // Auto-guess
            const guess = randomLetra();
            setAnswers((a) => {
              const na = [...a];
              if (na[i] === null) na[i] = guess;
              return na;
            });
            return { ...t, remaining: 0, running: false, guessed: true };
          }
          return { ...t, remaining: newRem };
        });
        return next;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [phase]);

  /* Start timer for a question when navigated to */
  const handleSelectQ = useCallback((i: number) => {
    setCurrentQ(i);
    setTimers((prev) => {
      const next = [...prev];
      if (answersRef.current[i] === null && !next[i].running && next[i].remaining > 0) {
        next[i] = { ...next[i], running: true };
      }
      return next;
    });
    setFirstStarted((prev) => {
      if (prev === null) return i;
      return prev;
    });
  }, []);

  const handleStart = () => {
    setPhase('quiz');
    handleSelectQ(0);
  };

  const handleAnswer = (letra: Letra) => {
    setAnswers((prev) => {
      const na = [...prev];
      na[currentQ] = letra;
      return na;
    });
    setTimers((prev) => {
      const next = [...prev];
      next[currentQ] = { ...next[currentQ], running: false };
      return next;
    });
  };

  const handleFinish = () => setPhase('result');

  const handleRestart = () => {
    setPhase('intro');
    setCurrentQ(0);
    setAnswers(Array(TOTAL_Q).fill(null));
    setTimers(Array(TOTAL_Q).fill(null).map(() => ({ remaining: TOTAL_TIME, running: false, guessed: false })));
    setFirstStarted(null);
  };

  const allAnswered = answers.every((a) => a !== null);

  return (
    <div className="app-root">
      <Header />

      {phase === 'intro' && <IntroScreen onStart={handleStart} />}

      {phase === 'quiz' && (
        <div className="quiz-layout">
          {/* Sidebar */}
          <aside className="sidebar">
            <GlobalHud firstStarted={firstStarted} timers={timers} />
            <NavGrid current={currentQ} answers={answers} timers={timers} onSelect={handleSelectQ} />
            <div className="sidebar-finish">
              <div className="finish-progress">
                <div className="finish-bar" style={{ width: `${(answers.filter(Boolean).length / TOTAL_Q) * 100}%` }} />
              </div>
              <p className="finish-count">{answers.filter(Boolean).length} / {TOTAL_Q} respondidas</p>
              <button
                className={`btn-finish ${allAnswered ? 'btn-finish-ready' : ''}`}
                onClick={handleFinish}
              >
                {allAnswered ? '🏁 Ver Resultado' : '⏭ Finalizar Agora'}
              </button>
            </div>
          </aside>

          {/* Main */}
          <main className="quiz-main">
            <QuestionCard
              question={questions[currentQ]}
              index={currentQ}
              answer={answers[currentQ]}
              timer={timers[currentQ]}
              onAnswer={handleAnswer}
            />
            <div className="q-nav-arrows">
              <button
                className="arrow-btn"
                onClick={() => handleSelectQ(Math.max(0, currentQ - 1))}
                disabled={currentQ === 0}
              >
                ← Anterior
              </button>
              <span className="arrow-info">
                {currentQ + 1} / {TOTAL_Q}
              </span>
              <button
                className="arrow-btn"
                onClick={() => handleSelectQ(Math.min(TOTAL_Q - 1, currentQ + 1))}
                disabled={currentQ === TOTAL_Q - 1}
              >
                Próxima →
              </button>
            </div>
          </main>
        </div>
      )}

      {phase === 'result' && (
        <ResultScreen answers={answers} timers={timers} onRestart={handleRestart} />
      )}

      <footer className="quiz-footer">
        <p>🤖 Desenvolvido com auxílio de Inteligência Artificial &nbsp;|&nbsp; Grupo Buffado de Geografia &nbsp;|&nbsp; 3º ano C – Informática</p>
      </footer>
    </div>
  );
}
