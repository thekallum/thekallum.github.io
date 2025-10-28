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
// Carregar projetos (Versão Otimizada - Sem API)
// ==================================================================
function fetchGitHubProjects() {
    
    // O JSON que você forneceu, com os repositórios indesejados removidos.
    const localRepoData = [
      {
        "id": 1085031280,
        "node_id": "R_kgDOQKxDcA",
        "name": "thekallum.github.io",
        "full_name": "thekallum/thekallum.github.io",
        "private": false,
        "owner": {
          "login": "thekallum",
          "id": 60241683,
          "node_id": "MDQ6VXNlcjYwMjQxNjgz",
          "avatar_url": "https://avatars.githubusercontent.com/u/60241683?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/thekallum",
          "html_url": "https://github.com/thekallum",
          "followers_url": "https://api.github.com/users/thekallum/followers",
          "following_url": "https://api.github.com/users/thekallum/following{/other_user}",
          "gists_url": "https://api.github.com/users/thekallum/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/thekallum/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/thekallum/subscriptions",
          "organizations_url": "https://api.github.com/users/thekallum/orgs",
          "repos_url": "https://api.github.com/users/thekallum/repos",
          "events_url": "https://api.github.com/users/thekallum/events{/privacy}",
          "received_events_url": "https://api.github.com/users/thekallum/received_events",
          "type": "User",
          "user_view_type": "public",
          "site_admin": false
        },
        "html_url": "https://github.com/thekallum/thekallum.github.io",
        "description": "Meu portfólio como desenvolvedor",
        "fork": false,
        "url": "https://api.github.com/repos/thekallum/thekallum.github.io",
        "forks_url": "https://api.github.com/repos/thekallum/thekallum.github.io/forks",
        "keys_url": "https://api.github.com/repos/thekallum/thekallum.github.io/keys{/key_id}",
        "collaborators_url": "https://api.github.com/repos/thekallum/thekallum.github.io/collaborators{/collaborator}",
        "teams_url": "https://api.github.com/repos/thekallum/thekallum.github.io/teams",
        "hooks_url": "https://api.github.com/repos/thekallum/thekallum.github.io/hooks",
        "issue_events_url": "https://api.github.com/repos/thekallum/thekallum.github.io/issues/events{/number}",
        "events_url": "https://api.github.com/repos/thekallum/thekallum.github.io/events",
        "assignees_url": "https://api.github.com/repos/thekallum/thekallum.github.io/assignees{/user}",
        "branches_url": "https://api.github.com/repos/thekallum/thekallum.github.io/branches{/branch}",
        "tags_url": "https://api.github.com/repos/thekallum/thekallum.github.io/tags",
        "blobs_url": "https://api.github.com/repos/thekallum/thekallum.github.io/git/blobs{/sha}",
        "git_tags_url": "https://api.github.com/repos/thekallum/thekallum.github.io/git/tags{/sha}",
        "git_refs_url": "https://api.github.com/repos/thekallum/thekallum.github.io/git/refs{/sha}",
        "trees_url": "https://api.github.com/repos/thekallum/thekallum.github.io/git/trees{/sha}",
        "statuses_url": "https://api.github.com/repos/thekallum/thekallum.github.io/statuses/{sha}",
        "languages_url": "https://api.github.com/repos/thekallum/thekallum.github.io/languages",
        "stargazers_url": "https://api.github.com/repos/thekallum/thekallum.github.io/stargazers",
        "contributors_url": "https://api.github.com/repos/thekallum/thekallum.github.io/contributors",
        "subscribers_url": "https://api.github.com/repos/thekallum/thekallum.github.io/subscribers",
        "subscription_url": "https://api.github.com/repos/thekallum/thekallum.github.io/subscription",
        "commits_url": "https://api.github.com/repos/thekallum/thekallum.github.io/commits{/sha}",
        "git_commits_url": "https://api.github.com/repos/thekallum/thekallum.github.io/git/commits{/sha}",
        "comments_url": "https://api.github.com/repos/thekallum/thekallum.github.io/comments{/number}",
        "issue_comment_url": "https://api.github.com/repos/thekallum/thekallum.github.io/issues/comments{/number}",
        "contents_url": "https://api.github.com/repos/thekallum/thekallum.github.io/contents/{+path}",
        "compare_url": "https://api.github.com/repos/thekallum/thekallum.github.io/compare/{base}...{head}",
        "merges_url": "https://api.github.com/repos/thekallum/thekallum.github.io/merges",
        "archive_url": "https://api.github.com/repos/thekallum/thekallum.github.io/{archive_format}{/ref}",
        "downloads_url": "https://api.github.com/repos/thekallum/thekallum.github.io/downloads",
        "issues_url": "https://api.github.com/repos/thekallum/thekallum.github.io/issues{/number}",
        "pulls_url": "https://api.github.com/repos/thekallum/thekallum.github.io/pulls{/number}",
        "milestones_url": "https://api.github.com/repos/thekallum/thekallum.github.io/milestones{/number}",
        "notifications_url": "https://api.github.com/repos/thekallum/thekallum.github.io/notifications{?since,all,participating}",
        "labels_url": "https://api.github.com/repos/thekallum/thekallum.github.io/labels{/name}",
        "releases_url": "https://api.github.com/repos/thekallum/thekallum.github.io/releases{/id}",
        "deployments_url": "https://api.github.com/repos/thekallum/thekallum.github.io/deployments",
        "created_at": "2025-10-28T13:49:37Z",
        "updated_at": "2025-10-28T13:49:41Z",
        "pushed_at": "2025-10-28T13:49:37Z",
        "git_url": "git://github.com/thekallum/thekallum.github.io.git",
        "ssh_url": "git@github.com:thekallum/thekallum.github.io.git",
        "clone_url": "https://github.com/thekallum/thekallum.github.io.git",
        "svn_url": "https://github.com/thekallum/thekallum.github.io",
        "homepage": null,
        "size": 0,
        "stargazers_count": 0,
        "watchers_count": 0,
        "language": null,
        "has_issues": true,
        "has_projects": true,
        "has_downloads": true,
        "has_wiki": true,
        "has_pages": true,
        "has_discussions": false,
        "forks_count": 0,
        "mirror_url": null,
        "archived": false,
        "disabled": false,
        "open_issues_count": 0,
        "license": null,
        "allow_forking": true,
        "is_template": false,
        "web_commit_signoff_required": false,
        "topics": [],
        "visibility": "public",
        "forks": 0,
        "open_issues": 0,
        "watchers": 0,
        "default_branch": "main"
      },
      {
        "id": 1083305896,
        "node_id": "R_kgDOQJHvqA",
        "name": "astro-site",
        "full_name": "thekallum/astro-site",
        "private": false,
        "owner": {
          "login": "thekallum",
          "id": 60241683,
          "node_id": "MDQ6VXNlcjYwMjQxNjgz",
          "avatar_url": "https://avatars.githubusercontent.com/u/60241683?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/thekallum",
          "html_url": "https://github.com/thekallum",
          "followers_url": "https://api.github.com/users/thekallum/followers",
          "following_url": "https://api.github.com/users/thekallum/following{/other_user}",
          "gists_url": "https://api.github.com/users/thekallum/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/thekallum/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/thekallum/subscriptions",
          "organizations_url": "https://api.github.com/users/thekallum/orgs",
          "repos_url": "https://api.github.com/users/thekallum/repos",
          "events_url": "https://api.github.com/users/thekallum/events{/privacy}",
          "received_events_url": "https://api.github.com/users/thekallum/received_events",
          "type": "User",
          "user_view_type": "public",
          "site_admin": false
        },
        "html_url": "https://github.com/thekallum/astro-site",
        "description": null,
        "fork": false,
        "url": "https://api.github.com/repos/thekallum/astro-site",
        "forks_url": "https://api.github.com/repos/thekallum/astro-site/forks",
        "keys_url": "https://api.github.com/repos/thekallum/astro-site/keys{/key_id}",
        "collaborators_url": "https://api.github.com/repos/thekallum/astro-site/collaborators{/collaborator}",
        "teams_url": "https://api.github.com/repos/thekallum/astro-site/teams",
        "hooks_url": "https://api.github.com/repos/thekallum/astro-site/hooks",
        "issue_events_url": "https://api.github.com/repos/thekallum/astro-site/issues/events{/number}",
        "events_url": "https://api.github.com/repos/thekallum/astro-site/events",
        "assignees_url": "https://api.github.com/repos/thekallum/astro-site/assignees{/user}",
        "branches_url": "https://api.github.com/repos/thekallum/astro-site/branches{/branch}",
        "tags_url": "https://api.github.com/repos/thekallum/astro-site/tags",
        "blobs_url": "https://api.github.com/repos/thekallum/astro-site/git/blobs{/sha}",
        "git_tags_url": "https://api.github.com/repos/thekallum/astro-site/git/tags{/sha}",
        "git_refs_url": "https://api.github.com/repos/thekallum/astro-site/git/refs{/sha}",
        "trees_url": "https://api.github.com/repos/thekallum/astro-site/git/trees{/sha}",
        "statuses_url": "https://api.github.com/repos/thekallum/astro-site/statuses/{sha}",
        "languages_url": "https://api.github.com/repos/thekallum/astro-site/languages",
        "stargazers_url": "https://api.github.com/repos/thekallum/astro-site/stargazers",
        "contributors_url": "https://api.github.com/repos/thekallum/astro-site/contributors",
        "subscribers_url": "https://api.github.com/repos/thekallum/astro-site/subscribers",
        "subscription_url": "https://api.github.com/repos/thekallum/astro-site/subscription",
        "commits_url": "https://api.github.com/repos/thekallum/astro-site/commits{/sha}",
        "git_commits_url": "https://api.github.com/repos/thekallum/astro-site/git/commits{/sha}",
        "comments_url": "https://api.github.com/repos/thekallum/astro-site/comments{/number}",
        "issue_comment_url": "https://api.github.com/repos/thekallum/astro-site/issues/comments{/number}",
        "contents_url": "https://api.github.com/repos/thekallum/astro-site/contents/{+path}",
        "compare_url": "https://api.github.com/repos/thekallum/astro-site/compare/{base}...{head}",
        "merges_url": "https://api.github.com/repos/thekallum/astro-site/merges",
        "archive_url": "https://api.github.com/repos/thekallum/astro-site/{archive_format}{/ref}",
        "downloads_url": "https://api.github.com/repos/thekallum/astro-site/downloads",
        "issues_url": "https://api.github.com/repos/thekallum/astro-site/issues{/number}",
        "pulls_url": "https://api.github.com/repos/thekallum/astro-site/pulls{/number}",
        "milestones_url": "https://api.github.com/repos/thekallum/astro-site/milestones{/number}",
        "notifications_url": "https://api.github.com/repos/thekallum/astro-site/notifications{?since,all,participating}",
        "labels_url": "https://api.github.com/repos/thekallum/astro-site/labels{/name}",
        "releases_url": "https://api.github.com/repos/thekallum/astro-site/releases{/id}",
        "deployments_url": "https://api.github.com/repos/thekallum/astro-site/deployments",
        "created_at": "2025-10-25T18:46:08Z",
        "updated_at": "2025-10-25T18:48:08Z",
        "pushed_at": "2025-10-25T18:48:05Z",
        "git_url": "git://github.com/thekallum/astro-site.git",
        "ssh_url": "git@github.com:thekallum/astro-site.git",
        "clone_url": "https://github.com/thekallum/astro-site.git",
        "svn_url": "https://github.com/thekallum/astro-site",
        "homepage": null,
        "size": 749,
        "stargazers_count": 0,
        "watchers_count": 0,
        "language": "HTML",
        "has_issues": true,
        "has_projects": true,
        "has_downloads": true,
        "has_wiki": true,
        "has_pages": false,
        "has_discussions": false,
        "forks_count": 0,
        "mirror_url": null,
        "archived": false,
        "disabled": false,
        "open_issues_count": 0,
        "license": null,
        "allow_forking": true,
        "is_template": false,
        "web_commit_signoff_required": false,
        "topics": [],
        "visibility": "public",
        "forks": 0,
        "open_issues": 0,
        "watchers": 0,
        "default_branch": "main"
      },
      {
        "id": 298100142,
        "node_id": "MDEwOlJlcG9zaXRvcnkyOTgxMDAxNDI=",
        "name": "thekallum",
        "full_name": "thekallum/thekallum",
        "private": false,
        "owner": {
          "login": "thekallum",
          "id": 60241683,
          "node_id": "MDQ6VXNlcjYwMjQxNjgz",
          "avatar_url": "https://avatars.githubusercontent.com/u/60241683?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/thekallum",
          "html_url": "https://github.com/thekallum",
          "followers_url": "https://api.github.com/users/thekallum/followers",
          "following_url": "https://api.github.com/users/thekallum/following{/other_user}",
          "gists_url": "https://api.github.com/users/thekallum/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/thekallum/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/thekallum/subscriptions",
          "organizations_url": "https://api.github.com/users/thekallum/orgs",
          "repos_url": "https://api.github.com/users/thekallum/repos",
          "events_url": "https://api.github.com/users/thekallum/events{/privacy}",
          "received_events_url": "https://api.github.com/users/thekallum/received_events",
          "type": "User",
          "user_view_type": "public",
          "site_admin": false
        },
        "html_url": "https://github.com/thekallum/thekallum",
        "description": null,
        "fork": false,
        "url": "https://api.github.com/repos/thekallum/thekallum",
        "forks_url": "https://api.github.com/repos/thekallum/thekallum/forks",
        "keys_url": "https://api.github.com/repos/thekallum/thekallum/keys{/key_id}",
        "collaborators_url": "https://api.github.com/repos/thekallum/thekallum/collaborators{/collaborator}",
        "teams_url": "https://api.github.com/repos/thekallum/thekallum/teams",
        "hooks_url": "https://api.github.com/repos/thekallum/thekallum/hooks",
        "issue_events_url": "https://api.github.com/repos/thekallum/thekallum/issues/events{/number}",
        "events_url": "https://api.github.com/repos/thekallum/thekallum/events",
        "assignees_url": "https://api.github.com/repos/thekallum/thekallum/assignees{/user}",
        "branches_url": "https://api.github.com/repos/thekallum/thekallum/branches{/branch}",
        "tags_url": "https://api.github.com/repos/thekallum/thekallum/tags",
        "blobs_url": "https://api.github.com/repos/thekallum/thekallum/git/blobs{/sha}",
        "git_tags_url": "https://api.github.com/repos/thekallum/thekallum/git/tags{/sha}",
        "git_refs_url": "https://api.github.com/repos/thekallum/thekallum/git/refs{/sha}",
        "trees_url": "https://api.github.com/repos/thekallum/thekallum/git/trees{/sha}",
        "statuses_url": "https://api.github.com/repos/thekallum/thekallum/statuses/{sha}",
        "languages_url": "https://api.github.com/repos/thekallum/thekallum/languages",
        "stargazers_url": "https://api.github.com/repos/thekallum/thekallum/stargazers",
        "contributors_url": "https://api.github.com/repos/thekallum/thekallum/contributors",
        "subscribers_url": "https://api.github.com/repos/thekallum/thekallum/subscribers",
        "subscription_url": "https://api.github.com/repos/thekallum/thekallum/subscription",
        "commits_url": "https://api.github.com/repos/thekallum/thekallum/commits{/sha}",
        "git_commits_url": "https://api.github.com/repos/thekallum/thekallum/git/commits{/sha}",
        "comments_url": "https://api.github.com/repos/thekallum/thekallum/comments{/number}",
        "issue_comment_url": "https://api.github.com/repos/thekallum/thekallum/issues/comments{/number}",
        "contents_url": "https://api.github.com/repos/thekallum/thekallum/contents/{+path}",
        "compare_url": "https://api.github.com/repos/thekallum/thekallum/compare/{base}...{head}",
        "merges_url": "https://api.github.com/repos/thekallum/thekallum/merges",
        "archive_url": "https://api.github.com/repos/thekallum/thekallum/{archive_format}{/ref}",
        "downloads_url": "https://api.github.com/repos/thekallum/thekallum/downloads",
        "issues_url": "https://api.github.com/repos/thekallum/thekallum/issues{/number}",
        "pulls_url": "https://api.github.com/repos/thekallum/thekallum/pulls{/number}",
        "milestones_url": "https://api.github.com/repos/thekallum/thekallum/milestones{/number}",
        "notifications_url": "https://api.github.com/repos/thekallum/thekallum/notifications{?since,all,participating}",
        "labels_url": "https://api.github.com/repos/thekallum/thekallum/labels{/name}",
        "releases_url": "https://api.github.com/repos/thekallum/thekallum/releases{/id}",
        "deployments_url": "https://api.github.com/repos/thekallum/thekallum/deployments",
        "created_at": "2020-09-23T21:37:14Z",
        "updated_at": "2025-10-17T17:22:36Z",
        "pushed_at": "2025-10-17T17:22:33Z",
        "git_url": "git://github.com/thekallum/thekallum.git",
        "ssh_url": "git@github.com:thekallum/thekallum.git",
        "clone_url": "https://github.com/thekallum/thekallum.git",
        "svn_url": "https://github.com/thekallum/thekallum",
        "homepage": null,
        "size": 32,
        "stargazers_count": 0,
        "watchers_count": 0,
        "language": null,
        "has_issues": true,
        "has_projects": true,
        "has_downloads": true,
        "has_wiki": true,
        "has_pages": false,
        "has_discussions": false,
        "forks_count": 0,
        "mirror_url": null,
        "archived": false,
        "disabled": false,
        "open_issues_count": 0,
        "license": null,
        "allow_forking": true,
        "is_template": false,
        "web_commit_signoff_required": false,
        "topics": [],
        "visibility": "public",
        "forks": 0,
        "open_issues": 0,
        "watchers": 0,
        "default_branch": "master"
      },
      {
        "id": 432569846,
        "node_id": "R_kgDOGch99g",
        "name": "traducoes",
        "full_name": "thekallum/traducoes",
        "private": false,
        "owner": {
          "login": "thekallum",
          "id": 60241683,
          "node_id": "MDQ6VXNlcjYwMjQxNjgz",
          "avatar_url": "https://avatars.githubusercontent.com/u/60241683?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/thekallum",
          "html_url": "https://github.com/thekallum",
          "followers_url": "https://api.github.com/users/thekallum/followers",
          "following_url": "https://api.github.com/users/thekallum/following{/other_user}",
          "gists_url": "https://api.github.com/users/thekallum/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/thekallum/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/thekallum/subscriptions",
          "organizations_url": "https://api.github.com/users/thekallum/orgs",
          "repos_url": "https://api.github.com/users/thekallum/repos",
          "events_url": "https://api.github.com/users/thekallum/events{/privacy}",
          "received_events_url": "https://api.github.com/users/thekallum/received_events",
          "type": "User",
          "user_view_type": "public",
          "site_admin": false
        },
        "html_url": "https://github.com/thekallum/traducoes",
        "description": "Traduções do Site e Bot da Discloud",
        "fork": true,
        "url": "https://api.github.com/repos/thekallum/traducoes",
        "forks_url": "https://api.github.com/repos/thekallum/traducoes/forks",
        "keys_url": "https://api.github.com/repos/thekallum/traducoes/keys{/key_id}",
        "collaborators_url": "https://api.github.com/repos/thekallum/traducoes/collaborators{/collaborator}",
        "teams_url": "https://api.github.com/repos/thekallum/traducoes/teams",
        "hooks_url": "https://api.github.com/repos/thekallum/traducoes/hooks",
        "issue_events_url": "https://api.github.com/repos/thekallum/traducoes/issues/events{/number}",
        "events_url": "https://api.github.com/repos/thekallum/traducoes/events",
        "assignees_url": "https://api.github.com/repos/thekallum/traducoes/assignees{/user}",
        "branches_url": "https://api.github.com/repos/thekallum/traducoes/branches{/branch}",
        "tags_url": "https://api.github.com/repos/thekallum/traducoes/tags",
        "blobs_url": "https://api.github.com/repos/thekallum/traducoes/git/blobs{/sha}",
        "git_tags_url": "https://api.github.com/repos/thekallum/traducoes/git/tags{/sha}",
        "git_refs_url": "https://api.github.com/repos/thekallum/traducoes/git/refs{/sha}",
        "trees_url": "https://api.github.com/repos/thekallum/traducoes/git/trees{/sha}",
        "statuses_url": "https://api.github.com/repos/thekallum/traducoes/statuses/{sha}",
        "languages_url": "https://api.github.com/repos/thekallum/traducoes/languages",
        "stargazers_url": "https://api.github.com/repos/thekallum/traducoes/stargazers",
        "contributors_url": "https://api.github.com/repos/thekallum/traducoes/contributors",
        "subscribers_url": "https://api.github.com/repos/thekallum/traducoes/subscribers",
        "subscription_url": "https://api.github.com/repos/thekallum/traducoes/subscription",
        "commits_url": "https://api.github.com/repos/thekallum/traducoes/commits{/sha}",
        "git_commits_url": "https://api.github.com/repos/thekallum/traducoes/git/commits{/sha}",
        "comments_url": "https://api.github.com/repos/thekallum/traducoes/comments{/number}",
        "issue_comment_url": "https://api.github.com/repos/thekallum/traducoes/issues/comments{/number}",
        "contents_url": "https://api.github.com/repos/thekallum/traducoes/contents/{+path}",
        "compare_url": "https://api.github.com/repos/thekallum/traducoes/compare/{base}...{head}",
        "merges_url": "https://api.github.com/repos/thekallum/traducoes/merges",
        "archive_url": "https://api.github.com/repos/thekallum/traducoes/{archive_format}{/ref}",
        "downloads_url": "https://api.github.com/repos/thekallum/traducoes/downloads",
        "issues_url": "https://api.github.com/repos/thekallum/traducoes/issues{/number}",
        "pulls_url": "https://api.github.com/repos/thekallum/traducoes/pulls{/number}",
        "milestones_url": "https://api.github.com/repos/thekallum/traducoes/milestones{/number}",
        "notifications_url": "https://api.github.com/repos/thekallum/traducoes/notifications{?since,all,participating}",
        "labels_url": "https://api.github.com/repos/thekallum/traducoes/labels{/name}",
        "releases_url": "https://api.github.com/repos/thekallum/traducoes/releases{/id}",
        "deployments_url": "https://api.github.com/repos/thekallum/traducoes/deployments",
        "created_at": "2021-11-27T22:44:26Z",
        "updated_at": "2021-11-27T22:44:27Z",
        "pushed_at": "2022-07-30T02:00:10Z",
        "git_url": "git://github.com/thekallum/traducoes.git",
        "ssh_url": "git@github.com:thekallum/traducoes.git",
        "clone_url": "https://github.com/thekallum/traducoes.git",
        "svn_url": "https://github.com/thekallum/traducoes",
        "homepage": "https://discloudbot.com/",
        "size": 207,
        "stargazers_count": 0,
        "watchers_count": 0,
        "language": null,
        "has_issues": false,
        "has_projects": true,
        "has_downloads": true,
        "has_wiki": true,
        "has_pages": false,
        "has_discussions": false,
        "forks_count": 0,
        "mirror_url": null,
        "archived": false,
        "disabled": false,
        "open_issues_count": 0,
        "license": null,
        "allow_forking": true,
        "is_template": false,
        "web_commit_signoff_required": false,
        "topics": [],
        "visibility": "public",
        "forks": 0,
        "open_issues": 0,
        "watchers": 0,
        "default_branch": "master"
      }
      // Repositórios "mapa_da_violencia" e "staralien" foram removidos daqui
    ];

    const container = document.getElementById('projects-container');

    // Se a lista estiver vazia (porque não colou nada), mostra o erro.
    if (!localRepoData || localRepoData.length === 0) {
        container.innerHTML = '<p style="text-align:center;color:#888;">Nenhum projeto encontrado. Verifique os dados no main.js.</p>';
        return;
    }

    // O resto do código é igual, mas usa a variável "localRepoData"
    try {
        container.innerHTML = localRepoData.map((repo, i) => `
            <div class="project-card fade-scroll" data-delay="${i*120}">
                <div class="project-image">
                    <i class="fas fa-code"></i> </div>
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

        // Reconfigurar observador para os novos elementos inseridos
        setupScrollAnimations();
        
    } catch (error) {
        console.error("Erro ao renderizar projetos locais:", error);
        container.innerHTML = `<p style="text-align:center;color:#888;">Erro ao exibir os projetos.</p>`;
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