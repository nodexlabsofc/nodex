/**
 * Catálogo de soluções por nicho (/catalogo).
 *
 * Fonte: playbook comercial do vault (Setores/Comercial/Prospecção/
 * catalogo-solucoes-por-nicho.md), reescrito no tom do site. Sem números de
 * resultado e sem os temas que a orientação de copy tira do site (voz, solar).
 */

export type Grupo =
  | "Saúde"
  | "Jurídico e contábil"
  | "Comércio"
  | "Serviços"
  | "Imóveis e obras"
  | "Indústria e logística"
  | "Pessoas e educação"
  | "Turismo e hospitalidade";

export const GRUPOS: Grupo[] = [
  "Saúde",
  "Jurídico e contábil",
  "Comércio",
  "Serviços",
  "Imóveis e obras",
  "Indústria e logística",
  "Pessoas e educação",
  "Turismo e hospitalidade",
];

export type Nicho = {
  slug: string;
  nome: string;
  grupo: Grupo;
  dor: string;
  agentes: string[];
  sistema: string;
  automacoes: string[];
  primeiraEntrega: string;
  caseHref?: string;
};

/** Soluções que entram em quase qualquer operação. */
export const TRANSVERSAIS = [
  {
    titulo: "Atendente no WhatsApp",
    texto:
      "Responde dúvida frequente, passa preço e horário, coleta dados e chama uma pessoa quando precisa.",
  },
  {
    titulo: "Agenda que se confirma",
    texto:
      "Agenda, confirma, lembra e remarca. A recepção para de viver no telefone.",
  },
  {
    titulo: "Lead qualificado no CRM",
    texto:
      "O agente faz as perguntas, registra no CRM, muda o status e avisa o vendedor.",
  },
  {
    titulo: "Cobrança sem constrangimento",
    texto:
      "Lembrete antes do vencimento, cobrança depois, segunda via e baixa no sistema.",
  },
  {
    titulo: "Assessor do dono",
    texto:
      "Resumo do dia, agenda e pendências pelo WhatsApp. Pergunta em português, resposta com o dado.",
  },
  {
    titulo: "Pergunte ao seu sistema",
    texto:
      "“Quais clientes não compram há 60 dias?” O agente consulta a base e responde.",
  },
  {
    titulo: "Base de conhecimento interna",
    texto:
      "Manual, contrato, procedimento. A equipe pergunta e o agente responde citando o documento.",
  },
  {
    titulo: "Leitura de documentos",
    texto: "PDF, nota, boleto, contrato. Vira dado no sistema, sem digitação.",
  },
  {
    titulo: "Ata de reunião",
    texto:
      "Resume, lista decisões e responsáveis e cria as tarefas no sistema.",
  },
  {
    titulo: "Monitor que avisa",
    texto:
      "Roda todo dia sozinho e avisa quando algo muda: preço, publicação, avaliação, prazo.",
  },
  {
    titulo: "Relatório que chega pronto",
    texto:
      "Indicadores do negócio todo dia ou toda semana, sem ninguém montar planilha.",
  },
  {
    titulo: "Dados pessoais protegidos",
    texto:
      "Filtro que tira dado pessoal antes do texto ir para a IA. Pensado para a LGPD.",
  },
];

export const NICHOS: Nicho[] = [
  {
    slug: "advocacia",
    nome: "Advocacia",
    grupo: "Jurídico e contábil",
    dor: "Andamento de processo conferido à mão, prazo que escapa e cliente perguntando “como está meu processo?”.",
    agentes: [
      "Consulta os processos aguardando resposta, atualiza o status e avisa o advogado quando algo muda.",
      "Acompanha as publicações e intimações em nome dos advogados do escritório.",
      "Responde o cliente com o último andamento em linguagem simples.",
      "Faz a triagem de casos novos: fatos, área, urgência e documentos.",
      "Lê contratos e destaca cláusulas de risco para revisão do advogado.",
    ],
    sistema:
      "Gestão jurídica com carteira de processos, prazos, audiências, honorários e portal do cliente.",
    automacoes: [
      "Alerta de prazo no WhatsApp",
      "Pasta do cliente criada sozinha",
      "Cobrança de honorários recorrentes",
      "Documentos gerados a partir de perguntas guiadas",
    ],
    primeiraEntrega: "Monitor processual com aviso por WhatsApp.",
  },
  {
    slug: "contabilidade",
    nome: "Contabilidade",
    grupo: "Jurídico e contábil",
    dor: "Cliente que manda documento atrasado e bagunçado, e a mesma dúvida todo mês.",
    agentes: [
      "Cobra os documentos do mês de cada cliente e organiza nas pastas certas.",
      "Lê notas e extratos, classifica e deixa pré-conciliado.",
      "Responde “quando vence meu DAS?” e envia a guia.",
      "Confere as notas emitidas contra o CNPJ com o que o cliente mandou.",
    ],
    sistema:
      "Portal do cliente com checklist mensal por empresa e painel de pendências do escritório.",
    automacoes: [
      "Envio de guias com lembrete de vencimento",
      "Aviso de certidão vencendo",
      "Relatório gerencial mensal para o cliente",
    ],
    primeiraEntrega: "Coletor de documentos com envio automático de guias.",
  },
  {
    slug: "odontologia",
    nome: "Odontologia",
    grupo: "Saúde",
    dor: "Falta em cima da hora, recepção presa no WhatsApp e orçamento de tratamento que não fecha.",
    agentes: [
      "Agenda, confirma, remarca e encaixa a partir da lista de espera.",
      "Retoma o paciente que recebeu o plano de tratamento e não fechou.",
      "Envia orientação pós-procedimento e chama o dentista se houver sinal de alerta.",
      "Chama para limpeza e revisão no tempo certo.",
    ],
    sistema:
      "Agenda por cadeira, prontuário, odontograma, planos de tratamento e financeiro com comissão por dentista.",
    automacoes: [
      "Lembrete na véspera e no dia",
      "Pedido de avaliação no Google",
      "Aviso de parcela em atraso",
      "Produção por profissional",
    ],
    primeiraEntrega: "Recepcionista no WhatsApp com confirmação de consulta.",
  },
  {
    slug: "clinicas",
    nome: "Clínicas, estética e fisioterapia",
    grupo: "Saúde",
    dor: "Agenda com vários profissionais, salas e convênios, e pacote de sessões difícil de controlar.",
    agentes: [
      "Agenda cruzando profissional, sala, convênio e procedimento.",
      "Envia preparo e documentos e confirma que o paciente leu.",
      "Apresenta protocolos de estética e controla as sessões restantes.",
      "Confere guias de convênio antes do envio e aponta motivo de glosa.",
      "Recebe o exame pelo WhatsApp e anexa na ficha certa.",
    ],
    sistema:
      "Agenda, prontuário, controle de pacotes, faturamento de convênio e estoque de insumos.",
    automacoes: [
      "Confirmação e lista de espera",
      "Aviso de sessão vencendo",
      "Reposição de insumo",
    ],
    primeiraEntrega: "Agendamento com confirmação e controle de pacotes.",
  },
  {
    slug: "psicologia",
    nome: "Psicologia e terapias",
    grupo: "Saúde",
    dor: "Agenda semanal recorrente, cobrança de sessão e falta sem aviso.",
    agentes: [
      "Agenda e remarca sessões recorrentes.",
      "Faz a cobrança com cuidado e envia o recibo.",
    ],
    sistema:
      "Agenda recorrente, pagamento por sessão e por pacote, prontuário com sigilo.",
    automacoes: [
      "Recibo para reembolso do convênio",
      "Relatório mensal de atendimentos",
    ],
    primeiraEntrega: "Agenda recorrente com cobrança automática.",
  },
  {
    slug: "pet",
    nome: "Pet shops e veterinárias",
    grupo: "Saúde",
    dor: "Banho, tosa e consulta marcados no WhatsApp, e vacina que vence sem ninguém avisar.",
    agentes: [
      "Agenda banho, tosa e consulta.",
      "Lembra vacina e vermífugo pelo calendário do pet.",
      "Avisa o tutor quando o pet está pronto.",
    ],
    sistema:
      "Ficha do pet com histórico e vacinas, agenda, pacotes de banho e estoque.",
    automacoes: ["Calendário de vacinas", "Recompra de ração pelo ciclo"],
    primeiraEntrega: "Agenda com lembrete de vacinas.",
  },
  {
    slug: "ecommerce",
    nome: "E-commerce",
    grupo: "Comércio",
    dor: "“Cadê meu pedido?” o dia inteiro, troca, devolução e estoque desencontrado entre canais.",
    agentes: [
      "Responde status, rastreio, troca e devolução integrado à plataforma.",
      "Ajuda a escolher produto e recupera carrinho com conversa.",
      "Lê avaliações e aponta o problema que se repete.",
      "Acompanha o preço dos mesmos produtos na concorrência.",
    ],
    sistema:
      "Painel único de pedidos e estoque entre loja própria e marketplaces, com gestão de trocas.",
    automacoes: [
      "Estoque baixo vira pedido ao fornecedor",
      "Nota, etiqueta e aviso ao cliente",
      "Recompra pelo ciclo do produto",
    ],
    primeiraEntrega: "Atendente de pedidos integrado à loja.",
  },
  {
    slug: "varejo",
    nome: "Varejo físico",
    grupo: "Comércio",
    dor: "Pedido de orçamento no WhatsApp que ninguém consegue responder rápido.",
    agentes: [
      "Responde se tem o produto e quanto custa, consultando o estoque.",
      "Monta orçamento a partir da lista do cliente, até de foto de lista escrita à mão.",
      "Reserva para retirada.",
    ],
    sistema:
      "Orçamento integrado ao estoque, crediário próprio e histórico do cliente.",
    automacoes: [
      "Promoção pelo histórico de compra",
      "Aviso de produto encomendado",
      "Cobrança do crediário",
    ],
    primeiraEntrega: "Orçamento automático pelo WhatsApp.",
  },
  {
    slug: "restaurantes",
    nome: "Restaurantes e delivery",
    grupo: "Comércio",
    dor: "Pedido perdido no WhatsApp e comissão de app em pedido que podia vir direto.",
    agentes: [
      "Recebe o pedido com cardápio, adicionais e taxa por bairro.",
      "Faz reservas e responde horário e cardápio do dia.",
    ],
    sistema:
      "Pedidos e cozinha, ficha técnica com custo por prato, estoque e validade.",
    automacoes: [
      "Avaliação depois da entrega",
      "Reativação de cliente sumido",
      "Insumo baixo vira pedido",
    ],
    primeiraEntrega: "Pedido direto pelo WhatsApp.",
  },
  {
    slug: "servicos-em-campo",
    nome: "Serviços em campo",
    grupo: "Serviços",
    dor: "Agenda do técnico no papel e nenhuma prova de que o serviço foi feito.",
    agentes: [
      "Faz orçamento a partir de fotos e medidas.",
      "Agenda conforme rota e disponibilidade do técnico.",
      "Chama o cliente para a manutenção preventiva.",
    ],
    sistema:
      "Ordens de serviço, agenda da equipe, app do técnico com fotos e assinatura, financeiro e comissão.",
    automacoes: [
      "“Técnico a caminho” com previsão",
      "Relatório com fotos para o cliente",
      "Cobrança pós-serviço",
    ],
    primeiraEntrega: "OS, agenda e app do técnico.",
    caseHref: "/cases/cleanox",
  },
  {
    slug: "oficinas",
    nome: "Oficinas e auto centers",
    grupo: "Serviços",
    dor: "Telefone tocando para saber se o carro está pronto.",
    agentes: [
      "Atualiza o cliente sobre o status do carro.",
      "Envia orçamento com fotos da peça e pede aprovação.",
      "Lembra revisão e troca de óleo por quilometragem ou tempo.",
    ],
    sistema:
      "OS da oficina, histórico por placa, estoque de peças e aprovação de orçamento online.",
    automacoes: [
      "Aviso de carro pronto",
      "Pós-serviço com avaliação",
      "Lembrete de revisão",
    ],
    primeiraEntrega: "Status do carro e aprovação de orçamento pelo WhatsApp.",
  },
  {
    slug: "saloes",
    nome: "Salões e barbearias",
    grupo: "Serviços",
    dor: "O dia inteiro no WhatsApp marcando horário.",
    agentes: [
      "Agenda e encaixa por profissional.",
      "Chama o cliente de volta no ciclo certo.",
    ],
    sistema:
      "Agenda, comandas, comissão por profissional, pacotes e assinaturas.",
    automacoes: ["Lembrete", "Avaliação", "Cliente sumido"],
    primeiraEntrega: "Agenda pelo WhatsApp com lembrete.",
  },
  {
    slug: "agencias",
    nome: "Agências de marketing",
    grupo: "Serviços",
    dor: "Horas montando relatório e caçando aprovação de peça.",
    agentes: [
      "Gera o relatório de campanha explicado para o cliente.",
      "Aprova peças com o cliente pelo WhatsApp.",
      "Faz o onboarding de cliente novo: acessos e briefing.",
    ],
    sistema: "Demandas e aprovações, portal do cliente e horas por conta.",
    automacoes: ["Relatório mensal automático", "Alerta de verba acabando"],
    primeiraEntrega: "Relatório de campanha automático.",
  },
  {
    slug: "seguros",
    nome: "Corretoras de seguros",
    grupo: "Serviços",
    dor: "Renovação perdida por falta de contato a tempo.",
    agentes: [
      "Faz a cotação inicial coletando os dados.",
      "Lembra renovações com antecedência.",
      "Abre o sinistro coletando relato, fotos e documentos.",
    ],
    sistema:
      "Carteira de apólices, funil de renovação e comissão por seguradora.",
    automacoes: ["Aviso de vencimento de apólice", "Cobrança de parcela"],
    primeiraEntrega: "Funil de renovação com lembrete automático.",
  },
  {
    slug: "condominios",
    nome: "Condomínios e administradoras",
    grupo: "Imóveis e obras",
    dor: "Síndico respondendo morador o dia todo.",
    agentes: [
      "Responde segunda via, regras e reserva de área comum.",
      "Registra ocorrências e avisa encomendas da portaria.",
    ],
    sistema: "Portal do condomínio, reservas, ocorrências e assembleias.",
    automacoes: ["Cobrança de inadimplência", "Comunicado por bloco"],
    primeiraEntrega: "Atendente do morador no WhatsApp.",
  },
  {
    slug: "imobiliarias",
    nome: "Imobiliárias",
    grupo: "Imóveis e obras",
    dor: "Lead de portal que ninguém responde rápido e visita mal organizada.",
    agentes: [
      "Responde o lead em segundos, entende o perfil e sugere imóveis da carteira.",
      "Agenda visitas cruzando a agenda do corretor.",
      "Confere a documentação do locatário e aponta o que falta.",
      "Sugere a faixa de preço comparando anúncios parecidos.",
      "Escreve o anúncio a partir das fotos e da ficha.",
    ],
    sistema:
      "CRM imobiliário com carteira, funil por corretor e gestão de locação.",
    automacoes: [
      "Distribuição de leads",
      "Aviso de reajuste anual",
      "Repasse ao proprietário",
    ],
    primeiraEntrega: "Agente que responde e qualifica os leads dos portais.",
  },
  {
    slug: "construcao",
    nome: "Construção, engenharia e arquitetura",
    grupo: "Imóveis e obras",
    dor: "O escritório não sabe o que aconteceu na obra hoje.",
    agentes: [
      "Registra o diário de obra a partir do áudio do mestre.",
      "Cota com fornecedores e monta o comparativo.",
      "Informa ao cliente o andamento da obra.",
    ],
    sistema:
      "Gestão de obras: cronograma, medições, compras, custo x orçado e portal do cliente.",
    automacoes: [
      "Relatório semanal com fotos",
      "Alerta de estouro de orçamento",
    ],
    primeiraEntrega: "Diário de obra por áudio com relatório semanal.",
  },
  {
    slug: "logistica",
    nome: "Logística e transporte",
    grupo: "Indústria e logística",
    dor: "Gente só respondendo “onde está minha carga?”.",
    agentes: [
      "Cota frete pelo WhatsApp.",
      "Informa rastreio e status da carga.",
      "Lê canhoto, CT-e e nota e dá baixa sozinho.",
      "Sugere rota e carga de cada veículo.",
    ],
    sistema: "Coletas e entregas, roteirização e controle de frota.",
    automacoes: [
      "Aviso de ocorrência",
      "Comprovante de entrega",
      "Manutenção preventiva da frota",
    ],
    primeiraEntrega: "Rastreio automático para o cliente.",
  },
  {
    slug: "industria",
    nome: "Indústria e distribuição",
    grupo: "Indústria e logística",
    dor: "Pedido de representante chegando por mensagem e sendo redigitado.",
    agentes: [
      "Recebe o pedido pelo WhatsApp e lança no sistema.",
      "Faz o pós-venda B2B pelo ciclo de compra do cliente.",
      "Avisa parada ou desvio de qualidade na linha.",
    ],
    sistema:
      "Força de vendas, pedidos, acompanhamento de produção e qualidade.",
    automacoes: [
      "Previsão de reposição",
      "Alerta de cliente que parou de comprar",
      "Relatório por representante",
    ],
    primeiraEntrega: "Pedido do representante direto no sistema.",
  },
  {
    slug: "agro",
    nome: "Agro",
    grupo: "Indústria e logística",
    dor: "Aplicação por talhão registrada de memória.",
    agentes: [
      "Registra o caderno de campo a partir do áudio do produtor.",
      "Atende a revenda: disponibilidade, preço e pedido.",
      "Avisa clima e pragas da região.",
    ],
    sistema: "Talhões e safras, custo por hectare e estoque de insumos.",
    automacoes: ["Lembrete de aplicação e carência", "Relatório de safra"],
    primeiraEntrega: "Caderno de campo por áudio.",
  },
  {
    slug: "rh",
    nome: "RH e recrutamento",
    grupo: "Pessoas e educação",
    dor: "Centenas de currículos por vaga e ninguém para ler todos.",
    agentes: [
      "Faz a triagem de currículos contra a vaga, com justificativa.",
      "Faz a primeira entrevista com perguntas padronizadas.",
      "Agenda entrevistas e coleta documentos da admissão.",
      "Responde dúvidas do colaborador com base nas políticas da empresa.",
    ],
    sistema:
      "Banco de talentos, funil de vagas, admissão digital e onboarding.",
    automacoes: ["Aviso de fim de experiência", "Controle de férias"],
    primeiraEntrega: "Triagem de currículos com ranking por vaga.",
  },
  {
    slug: "educacao",
    nome: "Escolas e cursos",
    grupo: "Pessoas e educação",
    dor: "Contato de matrícula sem resposta e secretaria sobrecarregada.",
    agentes: [
      "Atende a matrícula, qualifica e faz o follow-up.",
      "Secretaria virtual: boletos, declarações e calendário.",
      "Tutor que responde dúvidas sobre o conteúdo do curso.",
    ],
    sistema: "Gestão acadêmica, área do aluno e financeiro de mensalidades.",
    automacoes: [
      "Aviso de falta aos responsáveis",
      "Cobrança de mensalidade",
      "Rematrícula",
    ],
    primeiraEntrega: "Atendimento de matrícula no WhatsApp.",
  },
  {
    slug: "academias",
    nome: "Academias e estúdios",
    grupo: "Pessoas e educação",
    dor: "Aluno que para de vir e só é percebido quando cancela.",
    agentes: [
      "Responde planos e agenda aula experimental.",
      "Chama de volta o aluno que parou de treinar.",
      "Cobra mensalidade em atraso.",
    ],
    sistema: "Alunos, planos, check-in, turmas e inadimplência.",
    automacoes: [
      "Plano vencendo",
      "Aluno sem treinar há X dias",
      "Aniversário",
    ],
    primeiraEntrega: "Reativação automática de alunos.",
  },
  {
    slug: "hotelaria",
    nome: "Hotéis e pousadas",
    grupo: "Turismo e hospitalidade",
    dor: "Reserva que podia vir direto pagando comissão de plataforma.",
    agentes: [
      "Responde disponibilidade e preço e faz a reserva com sinal.",
      "Concierge da estadia: check-in, Wi-Fi e passeios.",
      "Pede avaliação no fim da estadia.",
    ],
    sistema: "Mapa de reservas entre canais, check-in digital e governança.",
    automacoes: [
      "Mensagens antes, durante e depois",
      "Aviso de limpeza no checkout",
    ],
    primeiraEntrega: "Reserva direta pelo WhatsApp.",
  },
  {
    slug: "turismo",
    nome: "Agências de turismo",
    grupo: "Turismo e hospitalidade",
    dor: "Horas montando cada orçamento de roteiro.",
    agentes: [
      "Monta roteiro pelo perfil e orçamento do cliente.",
      "Responde dúvidas da viagem: documentos, horários e voucher.",
    ],
    sistema: "Reservas, pagamentos parcelados e documentos dos passageiros.",
    automacoes: [
      "Lembrete de check-in e documentos",
      "Monitor de preço de passagem",
    ],
    primeiraEntrega: "Orçamento de roteiro automático.",
  },
];
