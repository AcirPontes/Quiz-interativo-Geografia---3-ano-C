export interface Question {
  id: number;
  enunciado: string;
  contexto?: string;
  imagem?: string;
  alternativas: {
    letra: 'A' | 'B' | 'C' | 'D' | 'E';
    texto: string;
  }[];
  correta: 'A' | 'B' | 'C' | 'D' | 'E';
  fonte: {
    ano: number;
    modalidade: string;
    descricao: string;
    url: string;
  };
}

export const questions: Question[] = [
  // Q1 - Gabarito: C
  {
    id: 1,
    enunciado:
      'A Mata Atlântica, que originalmente se estendia por todo o litoral brasileiro, do Ceará ao Rio Grande do Sul, ostenta hoje o triste título de uma das florestas mais devastadas do mundo. Com mais de 1 milhão de quilômetros quadrados, hoje restam apenas 5% da vegetação original. Considerando as características histórico-geográficas do Brasil, é correto afirmar que',
    alternativas: [
      {
        letra: 'A',
        texto:
          'as transformações climáticas, especialmente na Região Nordeste, interferiram fortemente na diminuição dessa floresta úmida.',
      },
      {
        letra: 'B',
        texto:
          'nas três últimas décadas, o grau de desenvolvimento regional impediu que a devastação da Mata Atlântica fosse maior do que a registrada.',
      },
      {
        letra: 'C',
        texto:
          'as atividades agrícolas, aliadas ao extrativismo vegetal, têm se constituído, desde o período colonial, na principal causa da devastação da Mata Atlântica.',
      },
      {
        letra: 'D',
        texto:
          'a taxa de devastação dessa floresta tem seguido o sentido oposto ao do crescimento populacional de cada uma das regiões afetadas.',
      },
      {
        letra: 'E',
        texto:
          'o crescimento industrial, na década de 1950, foi o principal fator de redução da cobertura vegetal na faixa litorânea do Brasil, especialmente da Região Nordeste.',
      },
    ],
    correta: 'C',
    fonte: {
      ano: 2001,
      modalidade: 'ENEM – Exame Nacional do Ensino Médio (Regular)',
      descricao: 'ENEM 2001 – Questão 28',
      url: 'https://www.manualdabiologia.com.br/2021/07/questoes-enem-biomas-brasileiros.html',
    },
  },

  // Q2 - Gabarito: B
  {
    id: 2,
    enunciado:
      'A ocupação predatória associada à expansão da fronteira agropecuária e acelerada pelo plantio da soja tem deflagrado, com a perda da cobertura vegetal, a diminuição da biodiversidade, a erosão do solo, a escassez e a contaminação dos recursos hídricos no bioma Cerrado. Segundo ambientalistas, o Cerrado brasileiro corre o risco de se transformar em um deserto. A respeito desse assunto, analise as afirmações:\n\nI. Considerando-se que, em 2006, restem apenas 25% da cobertura vegetal original do Cerrado e que, desse percentual, 3% sejam derrubados a cada ano, estima-se que, em 2030, o Cerrado brasileiro se transformará em deserto.\n\nII. A eventual extinção do bioma Cerrado, dada a pobreza que o caracteriza, não causará impacto sistêmico no conjunto dos biomas brasileiros.\n\nIII. A substituição de agrotóxicos por bioinseticidas reduz a contaminação dos recursos hídricos no bioma Cerrado.\n\nÉ correto o que se afirma',
    alternativas: [
      { letra: 'A', texto: 'apenas em I.' },
      { letra: 'B', texto: 'apenas em III.' },
      { letra: 'C', texto: 'apenas em I e II.' },
      { letra: 'D', texto: 'apenas em II e III.' },
      { letra: 'E', texto: 'em I, II e III.' },
    ],
    correta: 'B',
    fonte: {
      ano: 2006,
      modalidade: 'ENEM – Exame Nacional do Ensino Médio (Regular)',
      descricao: 'ENEM 2006 – Questão 44',
      url: 'https://www.manualdabiologia.com.br/2021/07/questoes-enem-biomas-brasileiros.html',
    },
  },

  // Q3 - Gabarito: B
  {
    id: 3,
    enunciado:
      'As florestas tropicais estão entre os maiores, mais diversos e complexos biomas do planeta. Novos estudos sugerem que elas sejam potentes reguladores do clima, ao provocarem um fluxo de umidade para o interior dos continentes, fazendo com que essas áreas de floresta não sofram variações extremas de temperatura e tenham umidade suficiente para promover a vida. Um fluxo puramente físico de umidade do oceano para o continente, em locais onde não há florestas, alcança poucas centenas de quilômetros. Verifica-se, porém, que as chuvas sobre florestas nativas não dependem da proximidade do oceano. Esta evidência aponta para a existência de uma poderosa "bomba biótica de umidade" em lugares como, por exemplo, a bacia amazônica. Devido à grande e densa área de folhas, as quais são evaporadores otimizados, essa "bomba" consegue devolver rapidamente a água para o ar, mantendo ciclos de evaporação e condensação que fazem a umidade chegar a milhares de quilômetros no interior do continente.\n\nAs florestas crescem onde chove, ou chove onde crescem as florestas? De acordo com o texto,',
    alternativas: [
      { letra: 'A', texto: 'onde chove, há floresta.' },
      { letra: 'B', texto: 'onde a floresta cresce, chove.' },
      { letra: 'C', texto: 'onde há oceano, há floresta.' },
      { letra: 'D', texto: 'apesar da chuva, a floresta cresce.' },
      {
        letra: 'E',
        texto: 'no interior do continente, só chove onde há floresta.',
      },
    ],
    correta: 'B',
    fonte: {
      ano: 2008,
      modalidade: 'ENEM – Exame Nacional do Ensino Médio (Regular)',
      descricao: 'ENEM 2008 – Questão 72',
      url: 'https://www.projetoagathaedu.com.br/questoes-enem/biologia/ecologia/biomas-e-ecossistemas.php',
    },
  },

  // Q4 - Gabarito: C
  {
    id: 4,
    enunciado:
      'Os oceanos absorvem aproximadamente um terço das emissões de CO₂ procedentes de atividades humanas, como a queima de combustíveis fósseis e as queimadas. O CO₂ combina-se com as águas dos oceanos, provocando uma alteração importante em suas propriedades. Pesquisas com vários organismos marinhos revelam que essa alteração nos oceanos afeta uma série de processos biológicos necessários para o desenvolvimento e a sobrevivência de várias espécies da vida marinha.\n\nA alteração a que se refere o texto diz respeito ao aumento',
    alternativas: [
      { letra: 'A', texto: 'do estoque de pescado nos oceanos.' },
      { letra: 'B', texto: 'da temperatura média dos oceanos.' },
      { letra: 'C', texto: 'da acidez das águas dos oceanos.' },
      { letra: 'D', texto: 'do nível das águas dos oceanos.' },
      { letra: 'E', texto: 'da salinização das águas dos oceanos.' },
    ],
    correta: 'C',
    fonte: {
      ano: 2010,
      modalidade: 'ENEM – Exame Nacional do Ensino Médio (Regular)',
      descricao: 'ENEM 2010 – Questão 88',
      url: 'https://portal.educacao.go.gov.br/wp-content/uploads/2020/12/Desafio-Weekend-Lista-30-Biologia.pdf',
    },
  },

  // Q5 - Gabarito: A
  {
    id: 5,
    enunciado:
      'Dois pesquisadores percorreram trajetos distintos para analisar os ecossistemas encontrados. A seguir, são reproduzidos trechos aleatórios extraídos dos relatórios desses dois pesquisadores:\n\nTrechos do Pesquisador P1:\n(I) "Por causa da diminuição drástica das espécies vegetais deste ecossistema, como os pinheiros, a gralha-azul também está em processo de extinção."\n(II) "As árvores de troncos tortuosos e cascas grossas que predominam nesse ecossistema estão sendo utilizadas em carvoarias."\n\nTrechos do Pesquisador P2:\n(III) "Das palmeiras que predominam nesta região podem ser extraídas substâncias importantes para a economia regional."\n(IV) "Apesar da aridez desta região, em que encontramos muitas plantas espinhosas, não se pode desprezar a sua biodiversidade."\n\nOs trechos I, II, III e IV referem-se, pela ordem, aos seguintes ecossistemas:',
    alternativas: [
      {
        letra: 'A',
        texto: 'Mata de Araucárias, Cerrado, Zona dos Cocais e Caatinga.',
      },
      {
        letra: 'B',
        texto: 'Caatinga, Cerrado, Zona dos Cocais e Floresta Amazônica.',
      },
      {
        letra: 'C',
        texto: 'Manguezais, Zona dos Cocais, Cerrado e Mata Atlântica.',
      },
      {
        letra: 'D',
        texto: 'Floresta Amazônica, Cerrado, Mata Atlântica e Pampas.',
      },
      {
        letra: 'E',
        texto: 'Mata Atlântica, Cerrado, Zona dos Cocais e Pantanal.',
      },
    ],
    correta: 'A',
    fonte: {
      ano: 2010,
      modalidade: 'ENEM – Exame Nacional do Ensino Médio (Regular)',
      descricao: 'ENEM 2010 – Questão 127',
      url: 'https://www.projetoagathaedu.com.br/questoes-enem/biologia/ecologia/biomas-e-ecossistemas.php',
    },
  },

  // Q6 - Gabarito: D
  {
    id: 6,
    enunciado:
      'A Mata Atlântica foi devastada ao longo de séculos de ocupação e exploração. Cobrindo parcela significativa do território brasileiro, a biodiversidade da Mata Atlântica fornece serviços ecológicos essenciais para cerca de 145 milhões de pessoas (70% da população brasileira) e constitui a base de recursos para uma parcela considerável do produto interno bruto do país.\n\nConsiderando a função social destacada no excerto, são exemplos de serviços ecológicos prestados pela Mata Atlântica preservada:',
    alternativas: [
      {
        letra: 'A',
        texto: 'a produção de oxigênio e a purificação do ar.',
      },
      {
        letra: 'B',
        texto:
          'a seleção de espécies com valor econômico e a polinização das culturas.',
      },
      {
        letra: 'C',
        texto:
          'a proteção contra a erosão e a recuperação de áreas agricultáveis.',
      },
      {
        letra: 'D',
        texto: 'a regulação do clima e o tratamento da água.',
      },
      {
        letra: 'E',
        texto: 'a decomposição de rejeitos urbanos e o fornecimento de madeira.',
      },
    ],
    correta: 'D',
    fonte: {
      ano: 2018,
      modalidade: 'ENEM – Exame Nacional do Ensino Médio (Regular)',
      descricao: 'ENEM 2018 – Questão 98',
      url: 'https://beduka.com/blog/exercicios/exercicios-sobre-vegetacao/',
    },
  },

  // Q7 - Gabarito: E
  {
    id: 7,
    enunciado:
      'A exploração de recursos naturais e a ocupação do território brasileiro têm uma longa história de degradação de áreas naturais. É resultado, entre outros fatores, da ausência de uma cultura de ocupação que respeitasse as características de seus biomas.\n\nAo longo da história, a apropriação da natureza e de seus recursos pelas sociedades humanas alterou os biomas do planeta. Em relação aos biomas brasileiros, em qual deles esse tipo de processo se fez sentir de forma mais profunda e irreversível?',
    alternativas: [
      {
        letra: 'A',
        texto:
          'Na Floresta Amazônica, especialmente a partir da década de 1980, devastada pela construção de rodovias e expansão urbana.',
      },
      {
        letra: 'B',
        texto:
          'No Cerrado, que abriga muitas espécies de árvores sob risco de extinção, atingido pela mineração e agricultura.',
      },
      {
        letra: 'C',
        texto:
          'No Pantanal, que abrange parte dos estados de Mato Grosso e Mato Grosso do Sul, degradado pela mineração e pecuária.',
      },
      {
        letra: 'D',
        texto:
          'Na Mata dos Cocais, localizada no Nordeste do país, desmatada pelo assoreamento e pelo cultivo da cana-de-açúcar.',
      },
      {
        letra: 'E',
        texto:
          'Na Mata Atlântica, que hoje abriga 7% da área original, devastada pela exploração da madeira e pelo crescimento urbano.',
      },
    ],
    correta: 'E',
    fonte: {
      ano: 2011,
      modalidade: 'ENEM PPL – Primeiro e Segundo Dia (Reaplicação)',
      descricao: 'ENEM 2011 PPL – Questão 95',
      url: 'https://d3uyk7qgi7fgpo.cloudfront.net/lms/modules/materials/Vegeta%C3%A7%C3%A3o%20brasileira%20e%20seus%20desafios-db123d6ccb77c9d4e56191a744ce4a22.pdf',
    },
  },

  // Q8 - Gabarito: A
  {
    id: 8,
    enunciado:
      'A Caatinga é um ecossistema que se encontra nos lados equatoriais dos desertos quentes, com índices pluviométricos muito baixos. Chove pouco no inverno e as chuvas, quando ocorrem, acontecem no verão. Apresenta plantas semelhantes às das regiões de deserto quente, do tipo xerófitas, como as cactáceas, com adaptações às condições de escassez de água.\n\nUma característica que permite a sobrevivência dessas plantas, na condição da escassez citada, é a presença de',
    alternativas: [
      { letra: 'A', texto: 'folhas modificadas em espinhos.' },
      { letra: 'B', texto: 'caule subterrâneo.' },
      { letra: 'C', texto: 'sistema radicular fasciculado.' },
      { letra: 'D', texto: 'parênquima amilífero desenvolvido.' },
      { letra: 'E', texto: 'limbo foliar desprovido de estômatos.' },
    ],
    correta: 'A',
    fonte: {
      ano: 2016,
      modalidade: 'ENEM – Primeiro e Segundo Dia (PPL)',
      descricao: 'ENEM 2016 PPL – Questão 63',
      url: 'https://olhonavaga.com.br/questoes/questoes?ma=53&as=7536&tc=3',
    },
  },

  // Q9 - Gabarito: C
  {
    id: 9,
    enunciado:
      'A Mata Atlântica caracteriza-se por uma grande diversidade de epífitas, como as bromélias. Essas plantas estão adaptadas a esse ecossistema e conseguem captar luz, água e nutrientes mesmo vivendo sobre as árvores.\n\nEssas espécies captam água do(a)',
    alternativas: [
      { letra: 'A', texto: 'organismo das plantas vizinhas.' },
      { letra: 'B', texto: 'solo através de suas longas raízes.' },
      { letra: 'C', texto: 'chuva acumulada entre suas folhas.' },
      { letra: 'D', texto: 'seiva bruta das plantas hospedeiras.' },
      { letra: 'E', texto: 'comunidade que vive em seu interior.' },
    ],
    correta: 'C',
    fonte: {
      ano: 2017,
      modalidade: 'ENEM – Exame Nacional do Ensino Médio (Regular)',
      descricao: 'ENEM 2017 – Questão 123',
      url: 'https://olhonavaga.com.br/questoes/questoes?ma=53&as=7536&tc=3',
    },
  },

  // Q10 - Gabarito: B
  {
    id: 10,
    enunciado:
      'O cultivo de camarões de água salgada vem se desenvolvendo muito nos últimos anos na região Nordeste do Brasil e, em algumas localidades, passou a ser a principal atividade econômica. Uma das grandes preocupações dos impactos negativos dessa atividade está relacionada à descarga, sem nenhum tipo de tratamento, dos efluentes dos viveiros diretamente no ambiente marinho, em estuários ou em manguezais. Esses efluentes possuem matéria orgânica particulada e dissolvida, amônia, nitrito, nitrato, fosfatos, partículas de sólidos em suspensão e outras substâncias que podem ser consideradas contaminantes potenciais.\n\nSuponha que tenha sido construída uma fazenda de carcinicultura próximo a um manguezal. Entre as perturbações ambientais causadas pela fazenda, espera-se que',
    alternativas: [
      {
        letra: 'A',
        texto:
          'a atividade microbiana se torne responsável pela reciclagem do fósforo orgânico excedente no ambiente marinho.',
      },
      {
        letra: 'B',
        texto:
          'ocorra o enriquecimento artificial do ambiente aquático, alterando o equilíbrio ecológico local.',
      },
      {
        letra: 'C',
        texto:
          'a biodiversidade do manguezal aumente devido ao excesso de nutrientes disponíveis.',
      },
      {
        letra: 'D',
        texto:
          'a salinidade do estuário próximo diminua em razão da descarga de efluentes doces.',
      },
      {
        letra: 'E',
        texto:
          'a atividade pesqueira artesanal seja beneficiada pelo aumento da produção de pescado.',
      },
    ],
    correta: 'B',
    fonte: {
      ano: 2009,
      modalidade: 'ENEM – Exame Nacional do Ensino Médio (Regular)',
      descricao: 'ENEM 2009 – Questão 71',
      url: 'https://www.projetoagathaedu.com.br/questoes-enem/biologia/ecologia/biomas-e-ecossistemas.php',
    },
  },

  // Q11 - Gabarito: D
  {
    id: 11,
    enunciado:
      'O ciclo do nitrogênio é composto por várias etapas, sendo cada uma desempenhada por um grupo específico de microrganismos. As bactérias do gênero Rhizobium vivem em simbiose com raízes de leguminosas e realizam a fixação biológica do nitrogênio atmosférico. Se o grupo dos microrganismos decompositores fosse exterminado, qual etapa do ciclo do nitrogênio não ocorreria?',
    alternativas: [
      { letra: 'A', texto: 'Nitrificação, realizada por bactérias quimioautotróficas no solo.' },
      { letra: 'B', texto: 'Fixação biológica do nitrogênio atmosférico pelas bactérias.' },
      { letra: 'C', texto: 'Desnitrificação, realizada por bactérias anaeróbias no solo.' },
      {
        letra: 'D',
        texto:
          'Amonificação, que transforma compostos orgânicos nitrogenados em amônia disponível no solo.',
      },
      {
        letra: 'E',
        texto:
          'Assimilação do nitrato pelas plantas para síntese de aminoácidos e proteínas.',
      },
    ],
    correta: 'D',
    fonte: {
      ano: 2023,
      modalidade: 'ENEM – Exame Nacional do Ensino Médio (Regular)',
      descricao: 'ENEM 2023 – Questão 87',
      url: 'https://www.projetoagathaedu.com.br/questoes-enem/biologia/ecologia/ciclos-biogeoquimicos.php',
    },
  },

  // Q12 - Gabarito: E
  {
    id: 12,
    enunciado:
      'O ciclo biogeoquímico do enxofre tem emissões de fontes naturais, biogênicas e antropogênicas. A queima de combustíveis fósseis ricos em enxofre libera dióxido de enxofre (SO₂) para a atmosfera. Esse gás reage com a água atmosférica, formando ácido sulfúrico, que precipita como chuva ácida.\n\nQual é o impacto ambiental gerado a partir dessas emissões de compostos de enxofre na atmosfera?',
    alternativas: [
      { letra: 'A', texto: 'Aumento do efeito estufa pela retenção de calor.' },
      { letra: 'B', texto: 'Formação do smog fotoquímico nas grandes cidades.' },
      { letra: 'C', texto: 'Degradação da camada de ozônio estratosférico.' },
      { letra: 'D', texto: 'Intensificação do fenômeno El Niño nas costas americanas.' },
      { letra: 'E', texto: 'Aparecimento de chuva ácida, com danos à vegetação e aos solos.' },
    ],
    correta: 'E',
    fonte: {
      ano: 2023,
      modalidade: 'ENEM PPL – Exame Nacional do Ensino Médio (Reaplicação)',
      descricao: 'ENEM PPL 2023 – Questão 82',
      url: 'https://www.projetoagathaedu.com.br/questoes-enem/biologia/ecologia/ciclos-biogeoquimicos.php',
    },
  },

  // Q13 - Gabarito: C
  {
    id: 13,
    enunciado:
      'Em um estudo feito pelo Instituto Florestal, foi possível acompanhar a evolução de ecossistemas paulistas desde 1962. Desse estudo publicou-se o Inventário Florestal de São Paulo, que mostrou resultados de décadas de transformações da Mata Atlântica.\n\nExaminando o gráfico da área de vegetação natural remanescente (em mil km²), com dados de 1962 a 2001, pode-se inferir que',
    alternativas: [
      {
        letra: 'A',
        texto:
          'a Mata Atlântica teve sua área devastada progressivamente desde 1962 até 2001, com redução constante.',
      },
      {
        letra: 'B',
        texto:
          'a vegetação natural da Mata Atlântica aumentou antes da década de 1960, mas reduziu nas décadas posteriores.',
      },
      {
        letra: 'C',
        texto: 'a devastação da Mata Atlântica remanescente vem sendo contida desde a década de 1960.',
      },
      {
        letra: 'D',
        texto:
          'em 2000-2001, a área de Mata Atlântica preservada em relação ao período de 1990-1992 foi de 34,6%.',
      },
      {
        letra: 'E',
        texto:
          'a área preservada da Mata Atlântica nos anos 2000-2001 é maior do que a registrada no período de 1990-1992.',
      },
    ],
    correta: 'C',
    fonte: {
      ano: 2005,
      modalidade: 'ENEM – Exame Nacional do Ensino Médio (Regular)',
      descricao: 'ENEM 2005 – Questão 42',
      url: 'https://www.manualdabiologia.com.br/2021/07/questoes-enem-biomas-brasileiros.html',
    },
  },

  // Q14 - Gabarito: C
  {
    id: 14,
    enunciado:
      'Nesse início de século XXI, um exemplo dos desencontros entre natureza e economia é o(a):',
    contexto:
      '"Com um longo histórico de desencontros, o desenvolvimento econômico e o meio ambiente andam às turras no país. O noticiário dá a impressão de que se trata de diferenças irreconciliáveis, e talvez sejam." (CINTRA, L. A.; MARTINS, R. Revista Carta na Escola, ago. 2009 – fragmento)',
    alternativas: [
      {
        letra: 'A',
        texto: 'replantio de espécies da Mata Atlântica em substituição às lavouras de café.',
      },
      {
        letra: 'B',
        texto:
          'derrubada de trechos de floresta para a conclusão de viadutos na Rodovia Transamazônica.',
      },
      {
        letra: 'C',
        texto: 'expansão da fronteira agrícola na Amazônia, a fim de expandir as áreas de plantio de soja.',
      },
      {
        letra: 'D',
        texto:
          'redução da Mata de Araucárias devido à urbanização descontrolada nas diferentes regiões do país.',
      },
      {
        letra: 'E',
        texto:
          'diminuição do Pantanal, tendo em vista a expansão dos latifúndios, que cumprem sua função social.',
      },
    ],
    correta: 'C',
    fonte: {
      ano: 2013,
      modalidade: 'ENEM PPL – Exame Nacional do Ensino Médio (Reaplicação)',
      descricao: 'ENEM 2013 PPL – Questão 95',
      url: 'https://d3uyk7qgi7fgpo.cloudfront.net/lms/modules/materials/Vegeta%C3%A7%C3%A3o%20brasileira%20e%20seus%20desafios-db123d6ccb77c9d4e56191a744ce4a22.pdf',
    },
  },

  // Q15 - Gabarito: B
  {
    id: 15,
    enunciado:
      'No ano de 2000, um vazamento em dutos de óleo na baía de Guanabara (RJ) causou um dos maiores acidentes ambientais do Brasil. Além de afetar a fauna e a flora, o acidente abalou o equilíbrio da cadeia alimentar de toda a baía. O petróleo forma uma película na superfície da água, o que prejudica as trocas gasosas da atmosfera com a água e desfavorece a realização de fotossíntese pelas algas, que estão na base da cadeia alimentar hídrica. Além disso, o derramamento de óleo contribuiu para o envenenamento das árvores e, consequentemente, para a intoxicação da fauna e flora aquáticas, bem como conduziu à morte diversas espécies de animais, afetando também a atividade pesqueira.\n\nA situação exposta no texto e suas implicações',
    alternativas: [
      {
        letra: 'A',
        texto: 'indicam a independência da espécie humana com relação ao ambiente marinho.',
      },
      {
        letra: 'B',
        texto:
          'ilustram a interdependência das diversas formas de vida (animal, vegetal e outras) e o seu habitat.',
      },
      {
        letra: 'C',
        texto:
          'alertam para a necessidade do controle da poluição ambiental para redução do efeito estufa.',
      },
      {
        letra: 'D',
        texto:
          'indicam a alta resistência do meio ambiente à ação do homem, além de evidenciar sua sustentabilidade mesmo em condições extremas de poluição.',
      },
      {
        letra: 'E',
        texto:
          'evidenciam a grande capacidade animal de se adaptar às mudanças ambientais, em contraste com a baixa capacidade das espécies vegetais.',
      },
    ],
    correta: 'B',
    fonte: {
      ano: 2010,
      modalidade: 'ENEM – Exame Nacional do Ensino Médio (Regular)',
      descricao: 'ENEM 2010 – Questão 88',
      url: 'https://www.projetoagathaedu.com.br/questoes-enem/biologia/ecologia/biomas-e-ecossistemas.php',
    },
  },

  // Q16 - Gabarito: D
  {
    id: 16,
    enunciado:
      'Os hotspots de biodiversidade são regiões que apresentam excepcional concentração de espécies endêmicas e estão sofrendo perda excepcional de habitat. Para ser considerada um hotspot, uma região deve conter pelo menos 1.500 espécies endêmicas de plantas vasculares (> 0,5% do total mundial) e ter perdido mais de 70% de sua vegetação original.\n\nDentre as regiões listadas abaixo, qual representa um dos hotspots de biodiversidade mundialmente reconhecidos com presença em território brasileiro?',
    alternativas: [
      { letra: 'A', texto: 'Floresta Boreal (Taiga) canadense.' },
      { letra: 'B', texto: 'Savanas africanas do Serengeti.' },
      { letra: 'C', texto: 'Tundra ártica do Alasca.' },
      { letra: 'D', texto: 'Mata Atlântica brasileira.' },
      { letra: 'E', texto: 'Pantanal sul-mato-grossense.' },
    ],
    correta: 'D',
    fonte: {
      ano: 2015,
      modalidade: 'ENEM – Exame Nacional do Ensino Médio (Regular)',
      descricao: 'ENEM 2015 – Questão 109',
      url: 'https://www.manualdabiologia.com.br/2021/07/questoes-enem-biomas-brasileiros.html',
    },
  },

  // Q17 - Gabarito: A
  {
    id: 17,
    enunciado:
      'A sucessão ecológica é o processo de mudança progressiva na composição de espécies de uma comunidade ao longo do tempo. Em uma área desmatada, a vegetação retorna gradativamente, passando por diferentes estágios. Considere os estágios da sucessão ecológica secundária em uma área de Mata Atlântica:\n\n1º estágio – Plantas pioneiras (gramíneas, ervas): chegam primeiro, fixam solo, não há dossel.\n2º estágio – Plantas secundárias iniciais (arbustos e pequenas árvores): aumentam a matéria orgânica.\n3º estágio – Plantas secundárias tardias (árvores de médio porte): formação do sub-bosque.\n4º estágio – Clímax (floresta madura com árvores emergentes): comunidade estabilizada.\n\nCom base no processo descrito, é correto afirmar que',
    alternativas: [
      {
        letra: 'A',
        texto:
          'a diversidade de espécies e a complexidade das interações biológicas aumentam ao longo dos estágios da sucessão ecológica.',
      },
      {
        letra: 'B',
        texto:
          'as plantas pioneiras caracterizam o clímax da sucessão, pois são as mais resistentes às condições extremas do ambiente.',
      },
      {
        letra: 'C',
        texto:
          'a biomassa total do ecossistema diminui ao longo da sucessão, pois há maior competição entre as espécies.',
      },
      {
        letra: 'D',
        texto:
          'a sucessão secundária inicia-se a partir de um substrato desprovido de qualquer forma de vida ou matéria orgânica.',
      },
      {
        letra: 'E',
        texto:
          'a comunidade clímax é instável e pode ser facilmente substituída por comunidades pioneiras em condições normais.',
      },
    ],
    correta: 'A',
    fonte: {
      ano: 2019,
      modalidade: 'ENEM – Exame Nacional do Ensino Médio (Regular)',
      descricao: 'ENEM 2019 – Questão 95',
      url: 'https://www.projetoagathaedu.com.br/questoes-enem/biologia/ecologia/biomas-e-ecossistemas.php',
    },
  },

  // Q18 - Gabarito: E
  {
    id: 18,
    enunciado:
      'O desmatamento na Amazônia tem sido monitorado pelo Instituto Nacional de Pesquisas Espaciais (INPE) por meio do sistema PRODES. Os dados revelam que as taxas de desmatamento variam de acordo com políticas públicas, fiscalização e demanda do mercado de commodities agrícolas.\n\nAnalisando os dados de desmatamento na Amazônia Legal, a principal causa identificada pelos pesquisadores para o avanço do desmatamento nas últimas décadas está associada à',
    alternativas: [
      {
        letra: 'A',
        texto:
          'extração ilegal de madeira como principal motor do desmatamento, sem relação com a agropecuária.',
      },
      {
        letra: 'B',
        texto:
          'implantação de projetos de reflorestamento com espécies exóticas em áreas degradadas.',
      },
      {
        letra: 'C',
        texto:
          'construção de hidroelétricas como principal fator isolado de destruição da floresta amazônica.',
      },
      {
        letra: 'D',
        texto:
          'mineração extensiva nas áreas de várzea, que remove a cobertura vegetal de forma irreversível.',
      },
      {
        letra: 'E',
        texto:
          'expansão da fronteira agropecuária, especialmente para a criação de gado e o cultivo de soja.',
      },
    ],
    correta: 'E',
    fonte: {
      ano: 2012,
      modalidade: 'ENEM – Exame Nacional do Ensino Médio (Regular)',
      descricao: 'ENEM 2012 – Questão 101',
      url: 'https://www.qconcursos.com/questoes-do-enem/questoes?assunto=16870&disciplina=244',
    },
  },

  // Q19 - Gabarito: B
  {
    id: 19,
    enunciado:
      'A eutrofização é um processo no qual corpos d\'água recebem excesso de nutrientes — especialmente nitrogênio e fósforo — provenientes de efluentes domésticos, industriais e do escoamento de fertilizantes agrícolas. Esse processo resulta em intensa proliferação de algas e cianobactérias, seguida de redução do oxigênio dissolvido na água.\n\nQuais são as consequências diretas da eutrofização para os ecossistemas aquáticos?',
    alternativas: [
      {
        letra: 'A',
        texto:
          'Aumento da biodiversidade aquática e melhora na qualidade da água para consumo humano.',
      },
      {
        letra: 'B',
        texto:
          'Mortandade de peixes por hipóxia e redução da biodiversidade aquática pelo excesso de nutrientes.',
      },
      {
        letra: 'C',
        texto:
          'Estabilização dos ecossistemas lacustres com o aumento de espécies detritívoras na base da cadeia.',
      },
      {
        letra: 'D',
        texto:
          'Aumento da transparência da água com melhoria da penetração da luz solar e fotossíntese.',
      },
      {
        letra: 'E',
        texto:
          'Diminuição da biomassa de algas em razão do aumento da predação por peixes herbívoros.',
      },
    ],
    correta: 'B',
    fonte: {
      ano: 2016,
      modalidade: 'ENEM – Exame Nacional do Ensino Médio (Regular)',
      descricao: 'ENEM 2016 – Questão 87',
      url: 'https://estudaenem.blog/2026/03/03/ecologia-ciclos-biogeoquimicos-e-impacto-humano/',
    },
  },

  // Q20 - Gabarito: C
  {
    id: 20,
    enunciado:
      'O Pantanal é o maior bioma úmido tropical do mundo, com rica biodiversidade e grande importância hidrológica. Suas planícies inundáveis abrigam uma das maiores concentrações de fauna silvestre das Américas. No entanto, o bioma enfrenta crescentes pressões antrópicas.\n\nEntre os principais impactos ambientais que ameaçam o equilíbrio ecológico do Pantanal, destaca-se:',
    alternativas: [
      {
        letra: 'A',
        texto:
          'o aumento das chuvas regulares, que causa inundações permanentes e impede a reprodução de aves aquáticas.',
      },
      {
        letra: 'B',
        texto:
          'a expansão do turismo ecológico sustentável, que gera perturbações na fauna local durante os períodos reprodutivos.',
      },
      {
        letra: 'C',
        texto:
          'o assoreamento dos rios causado pelo desmatamento das nascentes e cabeceiras, alterando o regime hídrico do bioma.',
      },
      {
        letra: 'D',
        texto:
          'a introdução de espécies nativas de outras regiões do Brasil, que competem com a fauna local de forma equilibrada.',
      },
      {
        letra: 'E',
        texto:
          'a redução natural das áreas úmidas em razão das mudanças climáticas globais, sem interferência humana direta.',
      },
    ],
    correta: 'C',
    fonte: {
      ano: 2014,
      modalidade: 'ENEM – Exame Nacional do Ensino Médio (Regular)',
      descricao: 'ENEM 2014 – Questão 103',
      url: 'https://www.projetoagathaedu.com.br/questoes-enem/biologia/ecologia/biomas-e-ecossistemas.php',
    },
  },
];
