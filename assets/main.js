// Animação de fade-in com IntersectionObserver e stagger
function setupScrollAnimations() {
    const elements = document.querySelectorAll('.fade-scroll');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                const delay = entry.target.dataset.delay || 0;
                setTimeout(() => {
                    entry.target.classList.add('in-view');
                }, Number(delay));
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -10% 0px' });

    elements.forEach((el, i) => {
        el.style.willChange = 'opacity, transform';
        if (!el.dataset.delay) {
            el.dataset.delay = String(i * 100);
        }
        observer.observe(el);
    });
}
window.addEventListener('DOMContentLoaded', setupScrollAnimations);

// Smooth scroll para navegação
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        const target = href && document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
  });
});

// Menu responsivo (hamburger) + overlay + ESC + bloqueio de scroll
window.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.mobile-menu-btn');
    const nav = document.getElementById('primary-navigation');
    const overlay = document.getElementById('menu-overlay');
    const body = document.body;
    if (!btn || !nav || !overlay) return;

    function setMenu(open) {
        nav.classList.toggle('is-open', open);
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
        overlay.classList.toggle('is-visible', open);
        overlay.hidden = !open;
        body.classList.toggle('no-scroll', open);
    }

    btn.addEventListener('click', () => setMenu(!nav.classList.contains('is-open')));
    overlay.addEventListener('click', () => setMenu(false));
    nav.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener('click', () => setMenu(false)));
    window.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });
});

// ==================================================================
// Carregar projetos (Versão Dinâmica - Via API do GitHub)
// ==================================================================
async function fetchGitHubProjects() {
    const username = 'thekallum';
    const container = document.getElementById('projects-container');

    // Nomes dos repositórios que você deseja ESCONDER do site
    const blacklist = ['thekallum', 'github-stats-transparent']; 

    try {
        // Busca os repositórios ordenados por data de atualização (mais recentes primeiro)
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&direction=desc`);
        
        if (!response.ok) {
            throw new Error(`Erro na API do GitHub: ${response.status}`);
        }

        const data = await response.json();

        // Filtra os repositórios (remove os que estão na blacklist)
        const projects = data.filter(repo => {
            // Se quiser esconder forks (projetos que você copiou), descomente a linha abaixo:
            if (repo.fork) return false;
            
            return !blacklist.includes(repo.name);
        });

        if (projects.length === 0) {
            container.innerHTML = '<p style="text-align:center;color:#888;">Nenhum projeto encontrado.</p>';
            return;
        }

        // Renderiza o HTML
        container.innerHTML = projects.map((repo, i) => `
            <div class="project-card fade-scroll" data-delay="${i * 100}">
                <div class="project-image">
                    <i class="fas fa-code"></i>
                </div>
                <div class="project-content">
                    <h3>${repo.name}</h3>
                    <p>${repo.description || 'Projeto desenvolvido com dedicação.'}</p>
                    <div class="project-tech">
                        ${repo.language ? `<span class="tech-badge">${repo.language}</span>` : ''}
                        <span class="tech-badge"><i class="fas fa-star"></i> ${repo.stargazers_count}</span>
                        <span class="tech-badge"><i class="fas fa-code-branch"></i> ${repo.forks_count}</span>
                    </div>
                    <div class="project-links">
                        <a href="${repo.html_url}" target="_blank" class="project-link">
                            <i class="fab fa-github"></i> Código
                        </a>
                        ${repo.homepage ? `<a href="${repo.homepage}" target="_blank" class="project-link"><i class="fas fa-external-link-alt"></i> Demo</a>` : ''}
                    </div>
                </div>
            </div>
        `).join('');

        // Reconfigurar observador de animação para os novos elementos criados
        setupScrollAnimations();

    } catch (error) {
        console.error("Erro ao carregar projetos:", error);
        container.innerHTML = `<p style="text-align:center;color:#888;">Não foi possível carregar os projetos no momento.</p>`;
    }
}
// Esta linha é importante, não a apague!
window.addEventListener('DOMContentLoaded', fetchGitHubProjects);


// Tema claro/escuro com persistência
window.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.theme-toggle');
  const icon = btn && btn.querySelector('i');
  const root = document.documentElement;
  const saved = localStorage.getItem('theme');
  if (saved === 'dark' || (!saved && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    root.setAttribute('data-theme', 'dark');
  }
  updateIcon();

  function updateIcon() {
    if (!icon) return;
    const dark = root.getAttribute('data-theme') === 'dark';
    icon.classList.toggle('fa-moon', !dark);
    icon.classList.toggle('fa-sun', dark);
  }

  btn && btn.addEventListener('click', () => {
    const dark = root.getAttribute('data-theme') === 'dark';
    const next = dark ? 'light' : 'dark';
    if (next === 'light') root.removeAttribute('data-theme'); else root.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', next);
    updateIcon();
  });
});
