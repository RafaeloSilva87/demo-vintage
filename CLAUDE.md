# Módulo de Venda — Site Romântico Personalizado

## O que é este projeto

Template de site romântico **data-driven** — todo o conteúdo vem de `dados.js`. Para cada cliente novo, você só edita esse arquivo, coloca as fotos e publica. Não precisa tocar em `index.html`, `styles.css` ou `script.js`.

**Demo público:** https://rafaelosilva87.github.io/site-surpresa-demo/

---

## Estrutura de arquivos

```
Modulo venda/
├── index.html           — markup genérico (não editar)
├── dados.js             — ⭐ ÚNICO arquivo que muda por cliente
├── script.js            — lê DADOS e monta o DOM (não editar)
├── styles.css           — visual kawaii (não editar)
├── imagens/             — fotos do cliente (vazia no template)
├── musica/              — música do cliente (vazia no template)
│
├── COMO-CUSTOMIZAR.md   — guia de uso por cliente (NÃO publicar no GitHub)
├── gerar_pix.py         — ⚠️ SENSÍVEL: tem CPF — NÃO publicar nunca
├── publicar-cliente.ps1 — script de publicação automática (NÃO publicar)
└── pix-*.png            — QR codes gerados localmente (NÃO publicar)
```

**`.gitignore` protege:**
```
pix-*.png
gerar_pix.py
publicar-cliente.ps1
COMO-CUSTOMIZAR.md
```

---

## Estrutura do `dados.js`

```js
const DADOS = {
  // Tela de abertura
  capaTitulo: "Para você",
  capaDica: "toque para entrar",

  // Primeira seção
  heroEyebrow: "Para [nome], com amor",
  heroTitulo: "Te amo",          // a ÚLTIMA palavra fica em rosa automaticamente
  heroSubtitulo: "Uma declaração especial para você",
  heroTexto: "Texto longo de abertura...",

  // 4 post-its coloridos
  // cor: "algodao" (rosa) | "manteiga" (amarelo) | "menta" (verde)
  // tilt: graus de inclinação (positivo = direita, negativo = esquerda)
  bilhetes: [
    { texto: "...", rabisco: "todos os dias", cor: "algodao", tilt: -4 },
    { texto: "...", rabisco: "todas as horas", cor: "menta",    tilt: 3  },
    { texto: "...", rabisco: "para sempre",    cor: "manteiga", tilt: -2 },
    { texto: "...", rabisco: "eternidade",     cor: "algodao",  tilt: 4  },
  ],

  // 8 fotos no mural
  // arquivo: nome do arquivo em /imagens (ex: "foto1.jpg"), ou "" para placeholder
  // tamanho: "normal" | "grande" (2×2) | "larga" (2×1, só horizontal) | "alta" (1×2, só vertical)
  fotos: [
    { arquivo: "", legenda: "Foto sua e do seu mozão aqui", tamanho: "grande" },
    { arquivo: "", legenda: "...", tamanho: "normal" },
    // ... 8 itens no total
  ],

  // 8 coraçõezinhos pendurados no varal
  motivos: [
    { titulo: "Motivo 1", texto: "..." },
    // ... 8 itens no total
  ],

  // 6 mensagens reveladas nas raspadinhas (ordem embaralhada no load)
  surpresas: [
    "Frase surpresa 1",
    // ... 6 itens no total
  ],

  // Nome do .mp3 em /musica, ou "" para ocultar o botão de música
  musica: "",
};
```

---

## Como funciona o `script.js`

- **`corVar(nome)`** — converte nome de cor para variável CSS:
  ```js
  { algodao: 'var(--algodao)', manteiga: 'var(--manteiga)', menta: 'var(--menta)' }
  ```
- **Título Hero** — quebra `heroTitulo` em palavras, envolve a última em `<em>` (cor rosa)
- **Bilhetes** — monta `div.bilhete` com CSS custom props `--cor` e `--tilt`
- **Mural de fotos** — se `arquivo` estiver vazio, renderiza `.foto-placeholder` com ícone de câmera
- **Raspadinhas** — Canvas API, `globalCompositeOperation: 'destination-out'`, revela ao raspar 50% da área
- **Lightbox** — só abre se o slot tiver `<img>` (`if (!img) return`)
- **Música** — oculta o botão se `DADOS.musica === ""`; o toque na capa de abertura libera o autoplay

---

## Bugs já corrigidos (não reverter)

| Problema | Solução |
|---|---|
| Coração ♥ (pin) cortado nas fotos | `overflow:hidden` só no `.foto-recorte`, não no `.foto-moldura` |
| Tela de abertura não cobria o celular | `top:0; left:0; right:0; bottom:0; width:100vw; height:100vh` (não `inset:0`) |
| Botão de música sobrepondo as fitas laterais | No mobile: `left:14px; right:auto; bottom:18px` |
| Botão "voltar" no celular fechava o site | `history.pushState({lightboxAberto:true}, '')` ao abrir lightbox + listener `popstate` para fechar |
| Corações ambiente sumiram no desktop | `prefers-reduced-motion`: ficam fixos com `opacity:0.3` (não removidos) |
| Foto vertical em slot horizontal (larga) | Usar `tamanho:"alta"` para fotos retrato, `"larga"` só para fotos paisagem |

---

## Fluxo para cada cliente novo

1. **Copiar** a pasta `Modulo venda` inteira com novo nome (ex: `cliente-joao-maria`)
2. **Editar** só o `dados.js` da cópia — textos, nomes, bilhetes, motivos, surpresas
3. **Colocar fotos** em `imagens/` e preencher os campos `arquivo` no `dados.js`
4. **(Opcional)** Colocar música em `musica/` e preencher `DADOS.musica`
5. **Publicar:**
   ```powershell
   .\publicar-cliente.ps1 -PastaCliente "C:\caminho\cliente-joao-maria" -NomeRepo "site-joao-maria"
   ```
   O script faz: git init → commit → gh repo create --public --push → ativa Pages → imprime o link

---

## Variáveis CSS principais (styles.css)

```css
--linho:     #fdeef0  /* fundo geral */
--algodao:   #ffd3e2  /* rosa — bilhetes */
--manteiga:  #fff1c2  /* amarelo — bilhetes */
--menta:     #cdeede  /* verde — bilhetes */
--framboesa: #ff5c8a  /* destaque / botões */
--ameixa:    #4a2e44  /* texto principal */
--creme:     #fffaf6  /* fundo cards */
```
Fontes: `Itim` (títulos/display), `Quicksand` (corpo do texto)

---

## Como rodar localmente

```
python -m http.server 8890 -b 127.0.0.1
# acessar http://localhost:8890
```
Usar `python` (não `python3`) — esta máquina tem dois interpreters; `python` = Python 3.11 com as libs instaladas.

---

## Arquivos sensíveis — NUNCA publicar

| Arquivo | Por quê |
|---|---|
| `gerar_pix.py` | Contém CPF 43454889820 hardcoded |
| `pix-*.png` | QR codes vinculados ao CPF |
| `publicar-cliente.ps1` | Script interno de operação |
| `COMO-CUSTOMIZAR.md` | Guia operacional interno |

Todos estão no `.gitignore` deste projeto.
