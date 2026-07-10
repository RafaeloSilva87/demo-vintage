// ============================================================
// DADOS DO CLIENTE — é só isso que muda em cada venda.
// Edite os valores abaixo, troque as fotos na pasta /imagens
// e a música em /musica. Não precisa tocar em mais nada.
// (Este demo de vitrine usa ilustrações embutidas em base64 no
// lugar das fotos — num site real entram as fotos do casal.)
// ============================================================

const DADOS = {
  // ---- Capa / abertura ----
  capaTitulo: "Para você",
  capaDica: "toque para entrar",

  // ---- Hero (primeira página) ----
  heroEyebrow: "Para a Bia, com amor",
  heroTitulo: "Você é meu lugar favorito", // a última palavra do título fica destacada
  heroSubtitulo: "Uma declaração especial, feita só pra você",
  heroTexto:
    "Fiz esse cantinho da internet só nosso pra guardar o que eu sinto por você. Cada bilhete, cada foto e cada surpresa aqui dentro é um pedacinho da nossa história — role devagar, sem pressa, que o melhor fica pro final.",

  // ---- Bilhetes (recados curtos, tipo post-it) ----
  // cor: "algodao" (rosa), "manteiga" (amarelo) ou "menta" (verde)
  bilhetes: [
    {
      texto:
        "Obrigado por transformar até os dias comuns em dias favoritos. Com você, segunda-feira também vale a pena.",
      rabisco: "todos os dias",
      cor: "algodao",
      tilt: -4,
    },
    {
      texto:
        "Sabe aquela vontade de contar tudo pra alguém primeiro? Pois é. Você virou minha pessoa favorita do mundo.",
      rabisco: "todas as horas",
      cor: "menta",
      tilt: 3,
    },
    {
      texto:
        "Eu te escolheria de novo em qualquer vida, em qualquer cidade, em qualquer versão da nossa história.",
      rabisco: "para sempre",
      cor: "manteiga",
      tilt: -2,
    },
    {
      texto:
        "Que a gente continue rindo das mesmas bobagens até ficarmos velhinhos brigando pelo controle da TV.",
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
    { arquivo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA4MDAgODAwJz48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9J2cnIHgxPScwJyB5MT0nMCcgeDI9JzAnIHkyPScxJz48c3RvcCBvZmZzZXQ9JzAnIHN0b3AtY29sb3I9JyNlZmUwYzUnLz48c3RvcCBvZmZzZXQ9JzEnIHN0b3AtY29sb3I9JyNmNWVhZDgnLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0nODAwJyBoZWlnaHQ9JzgwMCcgZmlsbD0ndXJsKCNnKScvPjxjaXJjbGUgY3g9JzEyMCcgY3k9JzEzMCcgcj0nMjYnIGZpbGw9JyNkM2I5OGEnIG9wYWNpdHk9JzAuMzUnLz48Y2lyY2xlIGN4PSc2OTAnIGN5PScxMTAnIHI9JzE4JyBmaWxsPScjZDNiOThhJyBvcGFjaXR5PScwLjM1Jy8+PGNpcmNsZSBjeD0nOTAnIGN5PSc2NjAnIHI9JzIwJyBmaWxsPScjZDNiOThhJyBvcGFjaXR5PScwLjM1Jy8+PGNpcmNsZSBjeD0nNzEwJyBjeT0nNjQwJyByPSczMCcgZmlsbD0nI2QzYjk4YScgb3BhY2l0eT0nMC4zNScvPjxjaXJjbGUgY3g9JzQwMCcgY3k9JzgwJyByPScxMicgZmlsbD0nI2QzYjk4YScgb3BhY2l0eT0nMC4zNScvPjxwYXRoIGQ9J001MCw4OCBDNTAsODggMTAsNTUgMTAsMzIgQzEwLDE3IDI2LDcgNDEsMTIgQzQ2LjUsMTQgNTAsMjAgNTAsMjAgQzUwLDIwIDUzLjUsMTQgNTksMTIgQzc0LDcgOTAsMTcgOTAsMzIgQzkwLDU1IDUwLDg4IDUwLDg4IFonIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDE5MCwyMzApIHNjYWxlKDMuNCknIGZpbGw9JyNkM2I5OGEnIG9wYWNpdHk9JzAuOScvPjxwYXRoIGQ9J001MCw4OCBDNTAsODggMTAsNTUgMTAsMzIgQzEwLDE3IDI2LDcgNDEsMTIgQzQ2LjUsMTQgNTAsMjAgNTAsMjAgQzUwLDIwIDUzLjUsMTQgNTksMTIgQzc0LDcgOTAsMTcgOTAsMzIgQzkwLDU1IDUwLDg4IDUwLDg4IFonIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDMxMCwyNzApIHNjYWxlKDMuNCknIGZpbGw9JyM4YjFhMmYnIG9wYWNpdHk9JzEnLz48cGF0aCBkPSdNNTAsODggQzUwLDg4IDEwLDU1IDEwLDMyIEMxMCwxNyAyNiw3IDQxLDEyIEM0Ni41LDE0IDUwLDIwIDUwLDIwIEM1MCwyMCA1My41LDE0IDU5LDEyIEM3NCw3IDkwLDE3IDkwLDMyIEM5MCw1NSA1MCw4OCA1MCw4OCBaJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSg1NTUsMTkwKSBzY2FsZSgwLjkpJyBmaWxsPScjOGIxYTJmJyBvcGFjaXR5PScwLjcnLz48cGF0aCBkPSdNNTAsODggQzUwLDg4IDEwLDU1IDEwLDMyIEMxMCwxNyAyNiw3IDQxLDEyIEM0Ni41LDE0IDUwLDIwIDUwLDIwIEM1MCwyMCA1My41LDE0IDU5LDEyIEM3NCw3IDkwLDE3IDkwLDMyIEM5MCw1NSA1MCw4OCA1MCw4OCBaJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgxNDAsNDgwKSBzY2FsZSgwLjcpJyBmaWxsPScjOGIxYTJmJyBvcGFjaXR5PScwLjUnLz48L3N2Zz4=", legenda: "a gente, sempre", tamanho: "grande" },
    { arquivo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA0MDAgNDAwJz48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9J2cnIHgxPScwJyB5MT0nMCcgeDI9JzAnIHkyPScxJz48c3RvcCBvZmZzZXQ9JzAnIHN0b3AtY29sb3I9JyNlZmUwYzUnLz48c3RvcCBvZmZzZXQ9JzEnIHN0b3AtY29sb3I9JyNmNWVhZDgnLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0nNDAwJyBoZWlnaHQ9JzQwMCcgZmlsbD0ndXJsKCNnKScvPjxyZWN0IHg9Jzk1JyB5PScxODUnIHdpZHRoPSc5NScgaGVpZ2h0PSc4NScgcng9JzE2JyBmaWxsPScjOGIxYTJmJy8+PHBhdGggZD0nTTE5MCwyMDUgaDE4IGEyMiwyMiAwIDAgMSAwLDQ0IGgtMTgnIGZpbGw9J25vbmUnIHN0cm9rZT0nIzhiMWEyZicgc3Ryb2tlLXdpZHRoPScxMScvPjxyZWN0IHg9Jzg3JyB5PScyNzAnIHdpZHRoPScxMTEnIGhlaWdodD0nMTMnIHJ4PSc2JyBmaWxsPScjM2QyMzE0JyBvcGFjaXR5PScwLjUnLz48cmVjdCB4PScyMjUnIHk9JzE4NScgd2lkdGg9Jzk1JyBoZWlnaHQ9Jzg1JyByeD0nMTYnIGZpbGw9JyM4YjFhMmYnLz48cGF0aCBkPSdNMzIwLDIwNSBoMTggYTIyLDIyIDAgMCAxIDAsNDQgaC0xOCcgZmlsbD0nbm9uZScgc3Ryb2tlPScjOGIxYTJmJyBzdHJva2Utd2lkdGg9JzExJy8+PHJlY3QgeD0nMjE3JyB5PScyNzAnIHdpZHRoPScxMTEnIGhlaWdodD0nMTMnIHJ4PSc2JyBmaWxsPScjM2QyMzE0JyBvcGFjaXR5PScwLjUnLz48cGF0aCBkPSdNNTAsODggQzUwLDg4IDEwLDU1IDEwLDMyIEMxMCwxNyAyNiw3IDQxLDEyIEM0Ni41LDE0IDUwLDIwIDUwLDIwIEM1MCwyMCA1My41LDE0IDU5LDEyIEM3NCw3IDkwLDE3IDkwLDMyIEM5MCw1NSA1MCw4OCA1MCw4OCBaJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgxMjAsOTApIHNjYWxlKDAuNTUpJyBmaWxsPScjZDNiOThhJyBvcGFjaXR5PScxJy8+PHBhdGggZD0nTTUwLDg4IEM1MCw4OCAxMCw1NSAxMCwzMiBDMTAsMTcgMjYsNyA0MSwxMiBDNDYuNSwxNCA1MCwyMCA1MCwyMCBDNTAsMjAgNTMuNSwxNCA1OSwxMiBDNzQsNyA5MCwxNyA5MCwzMiBDOTAsNTUgNTAsODggNTAsODggWicgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMjUwLDcwKSBzY2FsZSgwLjc1KScgZmlsbD0nIzhiMWEyZicgb3BhY2l0eT0nMC44NScvPjwvc3ZnPg==", legenda: "nosso primeiro café", tamanho: "normal" },
    { arquivo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA0MDAgNDAwJz48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9J2cnIHgxPScwJyB5MT0nMCcgeDI9JzAnIHkyPScxJz48c3RvcCBvZmZzZXQ9JzAnIHN0b3AtY29sb3I9JyNlZmUwYzUnLz48c3RvcCBvZmZzZXQ9JzEnIHN0b3AtY29sb3I9JyNmNWVhZDgnLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0nNDAwJyBoZWlnaHQ9JzQwMCcgZmlsbD0ndXJsKCNnKScvPjxyZWN0IHg9JzYwJyB5PScxMjAnIHdpZHRoPScyODAnIGhlaWdodD0nMTkwJyByeD0nMTQnIGZpbGw9JyNkM2I5OGEnLz48cGF0aCBkPSdNNjAsMTQwIEwyMDAsMjQwIEwzNDAsMTQwJyBmaWxsPSdub25lJyBzdHJva2U9JyMzZDIzMTQnIHN0cm9rZS13aWR0aD0nOScgb3BhY2l0eT0nMC41NScvPjxyZWN0IHg9JzYwJyB5PScxMjAnIHdpZHRoPScyODAnIGhlaWdodD0nMTkwJyByeD0nMTQnIGZpbGw9J25vbmUnIHN0cm9rZT0nIzNkMjMxNCcgc3Ryb2tlLXdpZHRoPSc2JyBvcGFjaXR5PScwLjM1Jy8+PHBhdGggZD0nTTUwLDg4IEM1MCw4OCAxMCw1NSAxMCwzMiBDMTAsMTcgMjYsNyA0MSwxMiBDNDYuNSwxNCA1MCwyMCA1MCwyMCBDNTAsMjAgNTMuNSwxNCA1OSwxMiBDNzQsNyA5MCwxNyA5MCwzMiBDOTAsNTUgNTAsODggNTAsODggWicgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMTY4LDE5MCkgc2NhbGUoMC42NSknIGZpbGw9JyM4YjFhMmYnIG9wYWNpdHk9JzEnLz48L3N2Zz4=", legenda: "a carta que virou site", tamanho: "normal" },
    { arquivo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA0MDAgODAwJz48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9J2cnIHgxPScwJyB5MT0nMCcgeDI9JzAnIHkyPScxJz48c3RvcCBvZmZzZXQ9JzAnIHN0b3AtY29sb3I9JyNlZmUwYzUnLz48c3RvcCBvZmZzZXQ9JzEnIHN0b3AtY29sb3I9JyNmNWVhZDgnLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0nNDAwJyBoZWlnaHQ9JzgwMCcgZmlsbD0ndXJsKCNnKScvPjxjaXJjbGUgY3g9JzIxMCcgY3k9JzIxMCcgcj0nMTA1JyBmaWxsPScjOGIxYTJmJy8+PGNpcmNsZSBjeD0nMjU1JyBjeT0nMTg1JyByPSc5NScgZmlsbD0ndXJsKCNnKScvPjxjaXJjbGUgY3g9JzgwJyBjeT0nMTIwJyByPSc1JyBmaWxsPScjOGIxYTJmJyBvcGFjaXR5PScwLjgnLz48Y2lyY2xlIGN4PSczMzAnIGN5PSc5MCcgcj0nNCcgZmlsbD0nIzhiMWEyZicgb3BhY2l0eT0nMC44Jy8+PGNpcmNsZSBjeD0nNjAnIGN5PSczMzAnIHI9JzQnIGZpbGw9JyM4YjFhMmYnIG9wYWNpdHk9JzAuOCcvPjxjaXJjbGUgY3g9JzM0MCcgY3k9JzMwMCcgcj0nNicgZmlsbD0nIzhiMWEyZicgb3BhY2l0eT0nMC44Jy8+PGNpcmNsZSBjeD0nMTIwJyBjeT0nNDMwJyByPSczJyBmaWxsPScjOGIxYTJmJyBvcGFjaXR5PScwLjgnLz48Y2lyY2xlIGN4PSczMDAnIGN5PSc0ODAnIHI9JzQnIGZpbGw9JyM4YjFhMmYnIG9wYWNpdHk9JzAuOCcvPjxjaXJjbGUgY3g9JzkwJyBjeT0nNTYwJyByPSc1JyBmaWxsPScjOGIxYTJmJyBvcGFjaXR5PScwLjgnLz48Y2lyY2xlIGN4PSczMzAnIGN5PSc2MjAnIHI9JzMnIGZpbGw9JyM4YjFhMmYnIG9wYWNpdHk9JzAuOCcvPjxwYXRoIGQ9J001MCw4OCBDNTAsODggMTAsNTUgMTAsMzIgQzEwLDE3IDI2LDcgNDEsMTIgQzQ2LjUsMTQgNTAsMjAgNTAsMjAgQzUwLDIwIDUzLjUsMTQgNTksMTIgQzc0LDcgOTAsMTcgOTAsMzIgQzkwLDU1IDUwLDg4IDUwLDg4IFonIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDE1MCw1MjApIHNjYWxlKDAuNSknIGZpbGw9JyNkM2I5OGEnIG9wYWNpdHk9JzEnLz48cGF0aCBkPSdNNTAsODggQzUwLDg4IDEwLDU1IDEwLDMyIEMxMCwxNyAyNiw3IDQxLDEyIEM0Ni41LDE0IDUwLDIwIDUwLDIwIEM1MCwyMCA1My41LDE0IDU5LDEyIEM3NCw3IDkwLDE3IDkwLDMyIEM5MCw1NSA1MCw4OCA1MCw4OCBaJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgyMzAsNjIwKSBzY2FsZSgwLjcpJyBmaWxsPScjOGIxYTJmJyBvcGFjaXR5PScwLjg1Jy8+PHBhdGggZD0nTTUwLDg4IEM1MCw4OCAxMCw1NSAxMCwzMiBDMTAsMTcgMjYsNyA0MSwxMiBDNDYuNSwxNCA1MCwyMCA1MCwyMCBDNTAsMjAgNTMuNSwxNCA1OSwxMiBDNzQsNyA5MCwxNyA5MCwzMiBDOTAsNTUgNTAsODggNTAsODggWicgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMTEwLDY4MCkgc2NhbGUoMC40KScgZmlsbD0nIzhiMWEyZicgb3BhY2l0eT0nMC41Jy8+PC9zdmc+", legenda: "a lua daquela noite", tamanho: "alta" },
    { arquivo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA0MDAgNDAwJz48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9J2cnIHgxPScwJyB5MT0nMCcgeDI9JzAnIHkyPScxJz48c3RvcCBvZmZzZXQ9JzAnIHN0b3AtY29sb3I9JyNlZmUwYzUnLz48c3RvcCBvZmZzZXQ9JzEnIHN0b3AtY29sb3I9JyNmNWVhZDgnLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0nNDAwJyBoZWlnaHQ9JzQwMCcgZmlsbD0ndXJsKCNnKScvPjxlbGxpcHNlIGN4PScyMDAnIGN5PScxNDAnIHJ4PSc0NCcgcnk9JzY4JyBmaWxsPScjOGIxYTJmJyBvcGFjaXR5PScwLjknIHRyYW5zZm9ybT0ncm90YXRlKDAgMjAwIDIwMCknLz48ZWxsaXBzZSBjeD0nMjAwJyBjeT0nMTQwJyByeD0nNDQnIHJ5PSc2OCcgZmlsbD0nIzhiMWEyZicgb3BhY2l0eT0nMC45JyB0cmFuc2Zvcm09J3JvdGF0ZSg3MiAyMDAgMjAwKScvPjxlbGxpcHNlIGN4PScyMDAnIGN5PScxNDAnIHJ4PSc0NCcgcnk9JzY4JyBmaWxsPScjOGIxYTJmJyBvcGFjaXR5PScwLjknIHRyYW5zZm9ybT0ncm90YXRlKDE0NCAyMDAgMjAwKScvPjxlbGxpcHNlIGN4PScyMDAnIGN5PScxNDAnIHJ4PSc0NCcgcnk9JzY4JyBmaWxsPScjOGIxYTJmJyBvcGFjaXR5PScwLjknIHRyYW5zZm9ybT0ncm90YXRlKDIxNiAyMDAgMjAwKScvPjxlbGxpcHNlIGN4PScyMDAnIGN5PScxNDAnIHJ4PSc0NCcgcnk9JzY4JyBmaWxsPScjOGIxYTJmJyBvcGFjaXR5PScwLjknIHRyYW5zZm9ybT0ncm90YXRlKDI4OCAyMDAgMjAwKScvPjxjaXJjbGUgY3g9JzIwMCcgY3k9JzIwMCcgcj0nMzgnIGZpbGw9JyNkM2I5OGEnLz48cGF0aCBkPSdNNTAsODggQzUwLDg4IDEwLDU1IDEwLDMyIEMxMCwxNyAyNiw3IDQxLDEyIEM0Ni41LDE0IDUwLDIwIDUwLDIwIEM1MCwyMCA1My41LDE0IDU5LDEyIEM3NCw3IDkwLDE3IDkwLDMyIEM5MCw1NSA1MCw4OCA1MCw4OCBaJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgzMTUsNjApIHNjYWxlKDAuMzUpJyBmaWxsPScjOGIxYTJmJyBvcGFjaXR5PScwLjYnLz48L3N2Zz4=", legenda: "a flor que você me deu", tamanho: "normal" },
    { arquivo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA4MDAgNDAwJz48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9J2cnIHgxPScwJyB5MT0nMCcgeDI9JzAnIHkyPScxJz48c3RvcCBvZmZzZXQ9JzAnIHN0b3AtY29sb3I9JyNlZmUwYzUnLz48c3RvcCBvZmZzZXQ9JzEnIHN0b3AtY29sb3I9JyNmNWVhZDgnLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0nODAwJyBoZWlnaHQ9JzQwMCcgZmlsbD0ndXJsKCNnKScvPjxjaXJjbGUgY3g9JzQwMCcgY3k9JzI2NScgcj0nMTE1JyBmaWxsPScjOGIxYTJmJy8+PHJlY3QgeD0nMCcgeT0nMjY1JyB3aWR0aD0nODAwJyBoZWlnaHQ9JzEzNScgZmlsbD0nI2Y1ZWFkOCcvPjxyZWN0IHg9JzAnIHk9JzI2Micgd2lkdGg9JzgwMCcgaGVpZ2h0PSc3JyByeD0nMycgZmlsbD0nIzNkMjMxNCcgb3BhY2l0eT0nMC40Jy8+PHBhdGggZD0nTTE1MCwxNDAgcTIyLC0yMCA0NCwwIE02MjAsMTEwIHEyMiwtMjAgNDQsMCcgc3Ryb2tlPScjM2QyMzE0JyBzdHJva2Utd2lkdGg9JzcnIGZpbGw9J25vbmUnIG9wYWNpdHk9JzAuNTUnIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcvPjxwYXRoIGQ9J001MCw4OCBDNTAsODggMTAsNTUgMTAsMzIgQzEwLDE3IDI2LDcgNDEsMTIgQzQ2LjUsMTQgNTAsMjAgNTAsMjAgQzUwLDIwIDUzLjUsMTQgNTksMTIgQzc0LDcgOTAsMTcgOTAsMzIgQzkwLDU1IDUwLDg4IDUwLDg4IFonIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDU1NSwyODUpIHNjYWxlKDAuNTUpJyBmaWxsPScjOGIxYTJmJyBvcGFjaXR5PScwLjcnLz48cGF0aCBkPSdNNTAsODggQzUwLDg4IDEwLDU1IDEwLDMyIEMxMCwxNyAyNiw3IDQxLDEyIEM0Ni41LDE0IDUwLDIwIDUwLDIwIEM1MCwyMCA1My41LDE0IDU5LDEyIEM3NCw3IDkwLDE3IDkwLDMyIEM5MCw1NSA1MCw4OCA1MCw4OCBaJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgxOTUsMzAwKSBzY2FsZSgwLjQpJyBmaWxsPScjZDNiOThhJyBvcGFjaXR5PScwLjknLz48L3N2Zz4=", legenda: "aquele pôr do sol juntos", tamanho: "larga" },
    { arquivo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA0MDAgNDAwJz48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9J2cnIHgxPScwJyB5MT0nMCcgeDI9JzAnIHkyPScxJz48c3RvcCBvZmZzZXQ9JzAnIHN0b3AtY29sb3I9JyNlZmUwYzUnLz48c3RvcCBvZmZzZXQ9JzEnIHN0b3AtY29sb3I9JyNmNWVhZDgnLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0nNDAwJyBoZWlnaHQ9JzQwMCcgZmlsbD0ndXJsKCNnKScvPjxwYXRoIGQ9J00xNTAsMjkwIFYxMjAgbDEzMCwtMjggVjI2MicgZmlsbD0nbm9uZScgc3Ryb2tlPScjOGIxYTJmJyBzdHJva2Utd2lkdGg9JzEzJyBzdHJva2UtbGluZWNhcD0ncm91bmQnLz48ZWxsaXBzZSBjeD0nMTI1JyBjeT0nMjkyJyByeD0nMzQnIHJ5PScyNicgZmlsbD0nIzhiMWEyZicvPjxlbGxpcHNlIGN4PScyNTUnIGN5PScyNjQnIHJ4PSczNCcgcnk9JzI2JyBmaWxsPScjOGIxYTJmJy8+PHBhdGggZD0nTTUwLDg4IEM1MCw4OCAxMCw1NSAxMCwzMiBDMTAsMTcgMjYsNyA0MSwxMiBDNDYuNSwxNCA1MCwyMCA1MCwyMCBDNTAsMjAgNTMuNSwxNCA1OSwxMiBDNzQsNyA5MCwxNyA5MCwzMiBDOTAsNTUgNTAsODggNTAsODggWicgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMjkwLDkwKSBzY2FsZSgwLjUpJyBmaWxsPScjZDNiOThhJyBvcGFjaXR5PScxJy8+PHBhdGggZD0nTTUwLDg4IEM1MCw4OCAxMCw1NSAxMCwzMiBDMTAsMTcgMjYsNyA0MSwxMiBDNDYuNSwxNCA1MCwyMCA1MCwyMCBDNTAsMjAgNTMuNSwxNCA1OSwxMiBDNzQsNyA5MCwxNyA5MCwzMiBDOTAsNTUgNTAsODggNTAsODggWicgdHJhbnNmb3JtPSd0cmFuc2xhdGUoNzAsNzApIHNjYWxlKDAuMzUpJyBmaWxsPScjOGIxYTJmJyBvcGFjaXR5PScwLjYnLz48L3N2Zz4=", legenda: "a trilha sonora de nós dois", tamanho: "normal" },
    { arquivo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA4MDAgNDAwJz48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9J2cnIHgxPScwJyB5MT0nMCcgeDI9JzAnIHkyPScxJz48c3RvcCBvZmZzZXQ9JzAnIHN0b3AtY29sb3I9JyNlZmUwYzUnLz48c3RvcCBvZmZzZXQ9JzEnIHN0b3AtY29sb3I9JyNmNWVhZDgnLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0nODAwJyBoZWlnaHQ9JzQwMCcgZmlsbD0ndXJsKCNnKScvPjxwYXRoIGQ9J000MDAsMzAwIEwyOTUsMjE1IEwyNTUsMTQwIEwzMDAsODAgTDM2NSw5NSBMNDAwLDE0MCBMNDM1LDk1IEw1MDAsODAgTDU0NSwxNDAgTDUwNSwyMTUgWicgZmlsbD0nbm9uZScgc3Ryb2tlPScjZDNiOThhJyBzdHJva2Utd2lkdGg9JzQnIG9wYWNpdHk9JzAuOScvPjxjaXJjbGUgY3g9JzQwMCcgY3k9JzMwMCcgcj0nMTAnIGZpbGw9JyM4YjFhMmYnLz48Y2lyY2xlIGN4PScyOTUnIGN5PScyMTUnIHI9JzEwJyBmaWxsPScjOGIxYTJmJy8+PGNpcmNsZSBjeD0nMjU1JyBjeT0nMTQwJyByPScxMCcgZmlsbD0nIzhiMWEyZicvPjxjaXJjbGUgY3g9JzMwMCcgY3k9JzgwJyByPScxMCcgZmlsbD0nIzhiMWEyZicvPjxjaXJjbGUgY3g9JzM2NScgY3k9Jzk1JyByPScxMCcgZmlsbD0nIzhiMWEyZicvPjxjaXJjbGUgY3g9JzQwMCcgY3k9JzE0MCcgcj0nMTAnIGZpbGw9JyM4YjFhMmYnLz48Y2lyY2xlIGN4PSc0MzUnIGN5PSc5NScgcj0nMTAnIGZpbGw9JyM4YjFhMmYnLz48Y2lyY2xlIGN4PSc1MDAnIGN5PSc4MCcgcj0nMTAnIGZpbGw9JyM4YjFhMmYnLz48Y2lyY2xlIGN4PSc1NDUnIGN5PScxNDAnIHI9JzEwJyBmaWxsPScjOGIxYTJmJy8+PGNpcmNsZSBjeD0nNTA1JyBjeT0nMjE1JyByPScxMCcgZmlsbD0nIzhiMWEyZicvPjxjaXJjbGUgY3g9JzEwNScgY3k9JzkwJyByPSc0JyBmaWxsPScjOGIxYTJmJyBvcGFjaXR5PScwLjU1Jy8+PGNpcmNsZSBjeD0nNzAwJyBjeT0nMzIwJyByPSc1JyBmaWxsPScjOGIxYTJmJyBvcGFjaXR5PScwLjU1Jy8+PGNpcmNsZSBjeD0nNjcwJyBjeT0nNzUnIHI9JzQnIGZpbGw9JyM4YjFhMmYnIG9wYWNpdHk9JzAuNTUnLz48Y2lyY2xlIGN4PScxMzAnIGN5PSczMjAnIHI9JzUnIGZpbGw9JyM4YjFhMmYnIG9wYWNpdHk9JzAuNTUnLz48Y2lyY2xlIGN4PSc3NjAnIGN5PScxNjAnIHI9JzMnIGZpbGw9JyM4YjFhMmYnIG9wYWNpdHk9JzAuNTUnLz48Y2lyY2xlIGN4PSc2MCcgY3k9JzIwMCcgcj0nMycgZmlsbD0nIzhiMWEyZicgb3BhY2l0eT0nMC41NScvPjwvc3ZnPg==", legenda: "nossas estrelas", tamanho: "larga" },
  ],

  // ---- Varal de motivos ----
  motivos: [
    { titulo: "Seu sorriso", texto: "Porque ele desarma qualquer dia ruim em dois segundos." },
    { titulo: "Seu abraço", texto: "O único lugar do mundo onde o tempo passa devagar." },
    { titulo: "Sua risada", texto: "A minha música favorita não toca no rádio." },
    { titulo: "Seu jeito", texto: "De cuidar de todo mundo sem perceber que é a pessoa mais incrível da sala." },
    { titulo: "Nossas conversas", texto: "As de madrugada, que começam em nada e terminam em tudo." },
    { titulo: "Sua coragem", texto: "Você enfrenta o mundo de um jeito que me inspira a ser melhor." },
    { titulo: "Nosso café", texto: "Porque até o silêncio com você tem gosto de lugar certo." },
    { titulo: "O futuro", texto: "A única coisa que eu não consigo imaginar sem você dentro." },
  ],

  // ---- Raspadinhas (a surpresa final) ----
  surpresas: [
    "Você é a melhor parte de todos os meus dias 💕",
    "Vale um jantar à luz de velas — resgate quando quiser 🍝",
    "Te amo mais que ontem e menos que amanhã",
    "Vale 10 minutos de abraço apertado, sem soltar 🤗",
    "Você fica ainda mais linda quando ri do nada",
    "A última: eu já era seu antes mesmo de você saber ❤️",
  ],

  // ---- Música de fundo ----
  // Coloque o arquivo .mp3 em /musica e escreva o nome aqui. Deixe "" para não ter música.
  musica: "",

  // Apenas para este demo de vitrine: mantém as raspadinhas em ordem fixa (1 a 6),
  // em vez de embaralhadas. Sites de clientes reais (gerados pelo painel) não têm
  // esse campo, então continuam embaralhando normalmente.
  _semEmbaralhar: true,
};
