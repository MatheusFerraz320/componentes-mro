export const site = {
  brand: "Pioneira Rolamentos",
  brandShort: "Pioneira",
  url: "/",
  title: "Componentes MRO para Manutenção Industrial | Pioneira Rolamentos",
  description:
    "Mancais, acoplamentos, retentores, vedações, buchas e acessórios para manutenção e reposição industrial. Envie referência, foto, medida ou aplicação e solicite sua cotação.",
  region: "Campinas e região",
  phone: "(19) 3555-0000",
  whatsapp: "(19) 99999-0000",
  email: "comercial@pioneirarolamentos.com.br",
  hours: "Seg – Sex · 8h às 17h30",
  cnpj: "00.000.000/0001-00",
};

export const nav = [
  { label: "Produtos", href: "#produtos" },
  { label: "Aplicações", href: "#aplicacoes" },
  { label: "Solução", href: "#solucao" },
  { label: "Segmentos", href: "#segmentos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Contato", href: "#orcamento" },
];

export const hero = {
  kicker: "PIONEIRA ROLAMENTOS · COMPONENTES PARA MANUTENÇÃO",
  title: "COMPONENTES MRO PARA MANUTENÇÃO INDUSTRIAL",
  subtitle:
    "Mancais, acoplamentos, retentores, vedações, buchas e acessórios para necessidades de manutenção e reposição industrial.",
  text: "Envie sua referência, foto, medida ou aplicação para consultar o componente adequado à sua necessidade.",
  points: [
    "Componentes para manutenção industrial",
    "Identificação por referência ou aplicação",
    "Atendimento comercial B2B",
  ],
  ctaPrimary: { label: "SOLICITE SUA COTAÇÃO", href: "#orcamento" },
  ctaSecondary: { label: "IDENTIFIQUE SEU COMPONENTE", href: "#suporte" },
};

export const products = [
  {
    id: "mancais",
    slug: "mancais",
    title: "Mancais Industriais",
    desc: "Componentes para suporte, fixação e aplicação de rolamentos em máquinas e equipamentos industriais.",
    tipos: [
      "Mancais pedestal",
      "Mancais flangeados",
      "Mancais bipartidos",
      "Caixas para rolamentos",
    ],
    marca: "ROLMAX",
    marcas: null,
    cta: "COTAR MANCAIS",
    asset: "mancal",
  },
  {
    id: "acoplamentos",
    slug: "acoplamentos",
    title: "Acoplamentos Industriais",
    desc: "Componentes destinados à transmissão de movimento entre motores, bombas, redutores e outros equipamentos.",
    tipos: [
      "Acoplamentos de engrenagem",
      "Acoplamentos de grade",
      "Acoplamentos elásticos",
      "Acoplamentos de lâminas",
      "Acoplamentos de pinos",
    ],
    marca: null,
    marcas: ["VULKAN", "TECNON"],
    cta: "COTAR ACOPLAMENTOS",
    asset: "acoplamento",
  },
  {
    id: "retentores",
    slug: "retentores",
    title: "Retentores e Vedações Industriais",
    desc: "Componentes destinados a diferentes necessidades de vedação em máquinas e equipamentos.",
    tipos: ["Retentores", "Gaxetas", "Anéis raspadores", "V-Rings"],
    marca: null,
    marcas: null,
    cta: "COTAR RETENTORES",
    asset: "retentor",
  },
  {
    id: "buchas",
    slug: "buchas",
    title: "Buchas e Acessórios para Rolamentos",
    desc: "Componentes utilizados em operações de fixação, montagem e desmontagem.",
    tipos: [
      "Buchas de fixação",
      "Buchas de desmontagem",
      "Porcas",
      "Arruelas",
      "Acessórios de montagem",
    ],
    marca: null,
    marcas: null,
    cta: "CONSULTAR ACESSÓRIOS",
    asset: "bucha",
  },
];

export const support = {
  kicker: "APOIO TÉCNICO",
  title: "NÃO SABE QUAL COMPONENTE PRECISA?",
  text: "Envie os dados disponíveis da máquina ou do componente para direcionar a identificação.",
  items: [
    { label: "Referência", icon: "hash" },
    { label: "Fabricante", icon: "building" },
    { label: "Foto", icon: "camera" },
    { label: "Medidas", icon: "ruler" },
    { label: "Equipamento", icon: "factory" },
    { label: "Aplicação", icon: "target" },
    { label: "Quantidade necessária", icon: "box" },
  ],
  cta: { label: "ENVIAR DADOS DO COMPONENTE", href: "#orcamento" },
};

export const applications = [
  {
    title: "Motores Elétricos",
    desc: "Mancais, acoplamentos e componentes relacionados à manutenção de conjuntos motorizados.",
    asset: "motor",
  },
  {
    title: "Bombas",
    desc: "Componentes aplicados à transmissão, suporte e vedação.",
    asset: "bomba",
  },
  {
    title: "Redutores",
    desc: "Rolamentos, mancais, acoplamentos, retentores e acessórios.",
    asset: "redutor",
  },
  {
    title: "Transportadores",
    desc: "Componentes de suporte e transmissão utilizados em sistemas industriais.",
    asset: "transportador",
  },
  {
    title: "Britadores e Moinhos",
    desc: "Soluções para aplicações industriais que exigem componentes de manutenção.",
    asset: "britador",
  },
  {
    title: "Máquinas e Equipamentos",
    desc: "Componentes para reposição em diferentes configurações industriais.",
    asset: "maquina",
  },
];

export const solution = {
  kicker: "CROSS-SELL",
  title: "COMPONENTES PARA DIFERENTES NECESSIDADES DE MANUTENÇÃO",
  steps: [
    "ROLAMENTOS",
    "MANCAIS",
    "ACOPLAMENTOS",
    "VEDAÇÕES",
    "BUCHAS E ACESSÓRIOS",
  ],
  text: "A necessidade de manutenção nem sempre termina no rolamento. A Pioneira reúne diferentes componentes relacionados à manutenção industrial, permitindo consultar mais itens da aplicação em um mesmo atendimento.",
};

export const segments = [
  { label: "Indústria Alimentícia", icon: "leaf" },
  { label: "Cerâmica", icon: "grid" },
  { label: "Usinagem", icon: "wrench" },
  { label: "Mineração", icon: "mountain" },
  { label: "Papel e Celulose", icon: "file" },
  { label: "Siderurgia", icon: "flame" },
  { label: "Automação Industrial", icon: "chip" },
  { label: "Outras Indústrias", icon: "dots" },
];

export const features = [
  {
    title: "Conhecimento Técnico",
    sub: "IDENTIFICAÇÃO DE COMPONENTES",
    desc: "Envie referência, medida, foto ou aplicação para auxiliar na identificação.",
    icon: "search",
  },
  {
    title: "Aplicação",
    sub: "APOIO NA ESPECIFICAÇÃO",
    desc: "Atendimento voltado à necessidade apresentada pela manutenção.",
    icon: "target",
  },
  {
    title: "Portfólio",
    sub: "COMPONENTES PARA MRO",
    desc: "Rolamentos e diferentes componentes complementares para aplicações industriais.",
    icon: "layers",
  },
  {
    title: "Atendimento",
    sub: "FOCO EM EMPRESAS",
    desc: "Relacionamento comercial direcionado a Manutenção, PCM, Engenharia e Compras.",
    icon: "chat",
  },
  {
    title: "Região",
    sub: "CAMPINAS E REGIÃO",
    desc: "Presença regional e atuação comercial voltada ao mercado industrial.",
    icon: "pin",
  },
];

export const finalCta = {
  kicker: "ATENDIMENTO COMERCIAL B2B",
  title: "PRECISA DE UM COMPONENTE PARA MANUTENÇÃO?",
  text: "Envie referência, foto, medida ou aplicação e solicite atendimento comercial.",
  cta: { label: "SOLICITAR COTAÇÃO", href: "#orcamento" },
};

export type FormField = {
  name: string;
  label: string;
  required?: boolean;
  type: "text" | "email" | "tel" | "number" | "select" | "textarea" | "file";
  placeholder?: string;
  options?: string[];
  span?: "full" | "half";
  hint?: string;
};

export const form: {
  kicker: string;
  title: string;
  intro: string;
  steps: string[];
  cta: string;
  note: string;
  fields: FormField[];
} = {
  kicker: "COTAÇÃO E SUPORTE",
  title: "SOLICITE SUA COTAÇÃO",
  intro:
    "Preencha os dados do componente ou da aplicação para receber o atendimento comercial. Caso não saiba a referência, envie foto, medidas ou a aplicação da máquina.",
  steps: [
    "Você envia os dados ou a referência do componente",
    "Nossa equipe identifica e especifica a solução",
    "Você recebe a cotação com prazo e condições",
  ],
  fields: [
    {
      name: "empresa",
      label: "Empresa",
      required: true,
      type: "text",
      placeholder: "Nome da empresa",
      span: "half",
    },
    {
      name: "nome",
      label: "Nome",
      required: true,
      type: "text",
      placeholder: "Seu nome",
      span: "half",
    },
    {
      name: "cargo",
      label: "Cargo / Área",
      type: "text",
      placeholder: "Ex.: Manutenção, PCM, Compras",
      span: "half",
    },
    {
      name: "telefone",
      label: "Telefone / WhatsApp",
      required: true,
      type: "tel",
      placeholder: "(00) 00000-0000",
      span: "half",
    },
    {
      name: "email",
      label: "E-mail corporativo",
      required: true,
      type: "email",
      placeholder: "voce@empresa.com.br",
      span: "half",
    },
    {
      name: "cidade",
      label: "Cidade / Estado",
      required: true,
      type: "text",
      placeholder: "Cidade / UF",
      span: "half",
    },
    {
      name: "produto",
      label: "Produto de interesse",
      required: true,
      type: "select",
      span: "half",
      options: [
        "Mancal",
        "Acoplamento",
        "Retentor",
        "Vedação",
        "Bucha",
        "Acessório para rolamento",
        "Outro componente",
        "Não sei identificar",
      ],
    },
    {
      name: "necessidade",
      label: "Qual sua necessidade?",
      required: true,
      type: "select",
      span: "half",
      options: [
        "Cotação",
        "Reposição",
        "Identificação do componente",
        "Consulta de aplicação",
        "Outro",
      ],
    },
    {
      name: "equipamento",
      label: "Equipamento / Aplicação",
      type: "text",
      placeholder: "Ex.: Bomba centrífuga, motor elétrico",
      span: "full",
    },
    {
      name: "marca",
      label: "Marca / Fabricante",
      type: "text",
      placeholder: "Ex.: ROLMAX, VULKAN, TECNON",
      span: "full",
    },
    {
      name: "referencia",
      label: "Referência / Código",
      type: "text",
      placeholder: "Código gravado no componente",
      span: "full",
    },
    {
      name: "medidas",
      label: "Medidas",
      type: "text",
      placeholder: "Diâmetro, eixo, rosca ou outras medidas",
      span: "full",
    },
    {
      name: "quantidade",
      label: "Quantidade",
      type: "number",
      placeholder: "0",
      span: "half",
    },
    {
      name: "foto",
      label: "Anexar foto",
      type: "file",
      span: "half",
      hint: "PNG, JPG ou PDF · até 5 MB",
    },
    {
      name: "mensagem",
      label: "Mensagem",
      type: "textarea",
      placeholder: "Descreva o componente ou o problema da aplicação",
      span: "full",
    },
  ],
  cta: "SOLICITAR COTAÇÃO",
  note: "Atendimento destinado a empresas e aplicações industriais.",
};

export const socials = [
  { label: "LinkedIn", icon: "linkedin", href: "#" },
  { label: "Instagram", icon: "instagram", href: "#" },
  { label: "WhatsApp", icon: "whatsapp", href: "#" },
];

export const assetPaths: Record<string, string | null> = {
  hero: null,
  mancal: null,
  acoplamento: null,
  retentor: null,
  bucha: null,
  motor: null,
  bomba: null,
  redutor: null,
  transportador: null,
  britador: null,
  maquina: null,
  mao: null,
};
