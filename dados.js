// ============================================================
// DADOS DO CLIENTE — é só isso que muda em cada venda.
// Edite os valores abaixo, troque as fotos na pasta /imagens
// e a música em /musica. Não precisa tocar em mais nada.
// ============================================================

const DADOS = {
  // ---- Capa / abertura ----
  capaTitulo: "Para você",
  capaDica: "toque para entrar",

  // ---- Hero (primeira página) ----
  heroEyebrow: "Para peru, com amor",
  heroTitulo: "Te amo", // a última palavra do título fica destacada em rosa
  heroSubtitulo: "Uma declaração especial para você",
  heroTexto:
    "Escreva aqui um parágrafo contando por que criou esse site — o que essa pessoa significa pra você, o que ela faz pelo seu dia. Esse é o primeiro texto que ela vai ler, então vale a pena ser bem pessoal.",

  // ---- Bilhetes (recados curtos, tipo post-it) ----
  // cor: "algodao" (rosa), "manteiga" (amarelo) ou "menta" (verde)
  bilhetes: [
    {
      texto:
        "Escreva aqui uma mensagem carinhosa — algo que você diria todos os dias.",
      rabisco: "todos os dias",
      cor: "algodao",
      tilt: -4,
    },
    {
      texto:
        "Escreva aqui outra mensagem — pode ser sobre um motivo específico de gratidão.",
      rabisco: "todas as horas",
      cor: "menta",
      tilt: 3,
    },
    {
      texto:
        "Escreva aqui uma mensagem sobre o que essa pessoa representa na sua vida.",
      rabisco: "para sempre",
      cor: "manteiga",
      tilt: -2,
    },
    {
      texto:
        "Escreva aqui uma última mensagem — pode fechar com algo bem afetivo.",
      rabisco: "eternidade",
      cor: "algodao",
      tilt: 4,
    },
  ],

  // ---- Mural de fotos ----
  // tamanho: "normal", "grande" (2x2), "larga" (2x1, use só para foto na horizontal)
  // ou "alta" (1x2, use só para foto na vertical)
  // Troque os arquivos em /imagens e ajuste o campo "arquivo" (deixe vazio para mostrar o placeholder)
  fotos: [
    { arquivo: "", legenda: "Foto sua e do seu mozão aqui", tamanho: "grande" },
    { arquivo: "", legenda: "Foto sua e do seu mozão aqui", tamanho: "normal" },
    { arquivo: "", legenda: "Foto sua e do seu mozão aqui", tamanho: "normal" },
    {
      arquivo: "",
      legenda: "Foto sua e do seu mozão aqui (use uma foto vertical)",
      tamanho: "alta",
    },
    { arquivo: "", legenda: "Foto sua e do seu mozão aqui", tamanho: "normal" },
    {
      arquivo: "",
      legenda: "Foto sua e do seu mozão aqui (use uma foto horizontal)",
      tamanho: "larga",
    },
    { arquivo: "", legenda: "Foto sua e do seu mozão aqui", tamanho: "normal" },
    { arquivo: "", legenda: "Foto sua e do seu mozão aqui", tamanho: "normal" },
  ],

  // ---- Varal de motivos ----
  motivos: [
    {
      titulo: "Motivo 1",
      texto: "Conte aqui um motivo pelo qual você ama essa pessoa.",
    },
    {
      titulo: "Motivo 2",
      texto:
        "Pode ser algo simples do dia a dia, tipo um jeito de falar ou de rir.",
    },
    {
      titulo: "Motivo 3",
      texto: "Ou algo mais profundo, como um valor que essa pessoa tem.",
    },
    {
      titulo: "Motivo 4",
      texto: "Quanto mais específico e pessoal, melhor fica.",
    },
    {
      titulo: "Motivo 5",
      texto: "Edite ou remova este card se quiser menos motivos.",
    },
    { titulo: "Motivo 6", texto: "Ou adicione mais — não tem limite." },
    {
      titulo: "Motivo 7",
      texto: "Capriche nos detalhes que só você sabe sobre essa pessoa.",
    },
    {
      titulo: "Motivo 8",
      texto: "Esse é o último, mas pode adicionar quantos quiser na lista.",
    },
  ],

  // ---- Raspadinhas (a surpresa final) ----
  surpresas: [
    "hey brother",
    "Escreva aqui uma frase surpresa 2",
    "Escreva aqui uma frase surpresa 3",
    "Escreva aqui uma frase surpresa 4",
    "Escreva aqui uma frase surpresa 5",
    "Escreva aqui uma frase surpresa 6",
  ],

  // ---- Música de fundo ----
  // Coloque o arquivo .mp3 em /musica e escreva o nome aqui. Deixe "" para não ter música.
  musica: "",
};
