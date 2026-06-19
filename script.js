// ============================================================
// Este arquivo lê o objeto DADOS (definido em dados.js) e monta
// a página. Não precisa editar nada aqui para customizar um
// cliente — edite só o dados.js.
// ============================================================

function corVar(nome) {
    const mapa = { algodao: 'var(--algodao)', manteiga: 'var(--manteiga)', menta: 'var(--menta)' };
    return mapa[nome] || 'var(--creme)';
}

// ---- Capa / Hero ----
document.getElementById('capa-titulo-texto').textContent = DADOS.capaTitulo;
document.getElementById('capa-dica-texto').textContent = DADOS.capaDica;
document.getElementById('hero-eyebrow').textContent = DADOS.heroEyebrow;
document.getElementById('hero-subtitulo').textContent = DADOS.heroSubtitulo;
document.getElementById('hero-texto').textContent = DADOS.heroTexto;

(function montarTituloHero() {
    const palavras = DADOS.heroTitulo.trim().split(' ');
    const ultima = palavras.pop();
    const heroTitulo = document.getElementById('hero-titulo');
    heroTitulo.textContent = '';
    heroTitulo.append(palavras.length ? palavras.join(' ') + ' ' : '');
    const em = document.createElement('em');
    em.textContent = ultima;
    heroTitulo.appendChild(em);
})();

// ---- Bilhetes ----
(function montarBilhetes() {
    const container = document.getElementById('mural-bilhetes');
    DADOS.bilhetes.forEach(b => {
        const div = document.createElement('div');
        div.className = 'bilhete';
        div.style.setProperty('--cor', corVar(b.cor));
        div.style.setProperty('--tilt', `${b.tilt || 0}deg`);
        div.innerHTML = `<p>${b.texto}</p><span class="bilhete-rabisco">${b.rabisco}</span>`;
        container.appendChild(div);
    });
})();

// ---- Mural de fotos ----
(function montarFotos() {
    const container = document.getElementById('mural-fotos');
    DADOS.fotos.forEach(f => {
        const div = document.createElement('div');
        div.className = 'foto' + (f.tamanho && f.tamanho !== 'normal' ? ` foto--${f.tamanho}` : '');

        const conteudoFoto = f.arquivo
            ? `<div class="foto-recorte"><img src="imagens/${f.arquivo}" alt="${f.legenda}"></div>`
            : `<div class="foto-placeholder"><svg class="icon" aria-hidden="true"><use href="#icon-camera"/></svg><span>${f.legenda}</span></div>`;

        div.innerHTML = `
            <div class="foto-moldura">${conteudoFoto}</div>
            ${f.arquivo ? `<p>${f.legenda}</p>` : ''}
        `;
        container.appendChild(div);
    });
})();

// ---- Varal de motivos ----
(function montarMotivos() {
    const container = document.getElementById('varal-coracoes');
    const cores = ['algodao', 'menta', 'manteiga'];
    DADOS.motivos.forEach((m, i) => {
        const div = document.createElement('div');
        div.className = 'varal-coracao';
        div.style.setProperty('--cor', corVar(cores[i % cores.length]));
        div.innerHTML = `
            <svg class="icon" aria-hidden="true"><use href="#icon-heart"/></svg>
            <h3>${m.titulo}</h3>
            <p>${m.texto}</p>
        `;
        container.appendChild(div);
    });
})();

// ---- Raspadinhas ----
const surpresasEmbaralhadas = [...DADOS.surpresas].sort(() => Math.random() - 0.5);

function criarRaspadinhas() {
    const container = document.getElementById('raspadinhas');

    surpresasEmbaralhadas.forEach((texto, i) => {
        const card = document.createElement('div');
        card.className = 'raspadinha';
        card.innerHTML = `
            <div class="raspadinha-texto">${texto}</div>
            <canvas width="170" height="170"></canvas>
            <span class="raspadinha-dica">raspe aqui</span>
        `;
        container.appendChild(card);

        const canvas = card.querySelector('canvas');
        const dica = card.querySelector('.raspadinha-dica');
        const ctx = canvas.getContext('2d');

        const cores = ['#ffd3e2', '#fff1c2', '#cdeede'];
        ctx.fillStyle = cores[i % cores.length];
        ctx.beginPath();
        ctx.arc(85, 85, 85, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#4a2e44';
        ctx.font = '700 16px Quicksand';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('♥', 85, 85);

        let raspando = false;
        let revelado = false;

        function raspar(x, y) {
            ctx.globalCompositeOperation = 'destination-out';
            ctx.beginPath();
            ctx.arc(x, y, 16, 0, Math.PI * 2);
            ctx.fill();
        }

        function posicaoRelativa(evento) {
            const rect = canvas.getBoundingClientRect();
            return {
                x: ((evento.clientX - rect.left) / rect.width) * canvas.width,
                y: ((evento.clientY - rect.top) / rect.height) * canvas.height
            };
        }

        function verificarRevelado() {
            if (revelado) return;
            const dados = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
            let transparentes = 0;
            for (let p = 3; p < dados.length; p += 4) {
                if (dados[p] === 0) transparentes++;
            }
            const proporcao = transparentes / (canvas.width * canvas.height);
            if (proporcao > 0.5) {
                revelado = true;
                canvas.style.transition = 'opacity 0.4s ease';
                canvas.style.opacity = '0';
                dica.style.display = 'none';
                setTimeout(() => canvas.remove(), 400);
            }
        }

        canvas.addEventListener('pointerdown', (e) => {
            raspando = true;
            dica.style.display = 'none';
            const { x, y } = posicaoRelativa(e);
            raspar(x, y);
        });

        canvas.addEventListener('pointermove', (e) => {
            if (!raspando) return;
            const { x, y } = posicaoRelativa(e);
            raspar(x, y);
            verificarRevelado();
        });

        canvas.addEventListener('pointerup', () => {
            raspando = false;
            verificarRevelado();
        });

        canvas.addEventListener('pointerleave', () => {
            raspando = false;
        });
    });
}

criarRaspadinhas();

// ---- Lightbox - abrir foto em tela cheia ----
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');

document.querySelectorAll('.foto').forEach(item => {
    item.addEventListener('click', function() {
        const img = this.querySelector('img');
        if (!img) return; // placeholder sem foto ainda: não abre lightbox
        const caption = this.querySelector('p').textContent;

        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightboxCaption.textContent = caption;
        lightbox.classList.add('active');
        history.pushState({ lightboxAberto: true }, '');
    });
});

function fecharLightbox() {
    lightbox.classList.remove('active');
    if (history.state && history.state.lightboxAberto) {
        history.back();
    }
}

// No celular, o botão "voltar" só fecha a foto em vez de sair do site
window.addEventListener('popstate', function() {
    lightbox.classList.remove('active');
});

lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) {
        fecharLightbox();
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        fecharLightbox();
    }
});

// ---- Música de fundo ----
const bgMusic = document.getElementById('bg-music');
const musicToggle = document.getElementById('music-toggle');

if (DADOS.musica) {
    bgMusic.src = `musica/${DADOS.musica}`;
} else {
    musicToggle.classList.add('sem-musica');
}

function atualizarBotaoMusica() {
    if (bgMusic.paused) {
        musicToggle.classList.remove('playing');
        musicToggle.classList.add('paused');
    } else {
        musicToggle.classList.remove('paused');
        musicToggle.classList.add('playing');
    }
}

musicToggle.addEventListener('click', function(e) {
    e.stopPropagation();
    if (bgMusic.paused) {
        bgMusic.play().then(atualizarBotaoMusica).catch(() => {});
    } else {
        bgMusic.pause();
        atualizarBotaoMusica();
    }
});

// ---- Tela de abertura: o toque pra entrar também libera a música ----
const capaToque = document.getElementById('capa-toque');

capaToque.addEventListener('click', function() {
    capaToque.classList.add('escondida');
    if (DADOS.musica) {
        bgMusic.play().then(atualizarBotaoMusica).catch(() => atualizarBotaoMusica());
    }
});
