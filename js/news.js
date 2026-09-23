/**
 * GATEWAY SCHOOL COMPLEX — NEWS & EVENTS INTERACTION
 * 
 * Manages news listing, category filtering, instant live search,
 * and the demonstration article reader modal.
 */

document.addEventListener('DOMContentLoaded', () => {
  initNewsPage();
});

let currentNewsList = [];

function initNewsPage() {
  const container = document.getElementById('newsGridContainer');
  const filterContainer = document.getElementById('newsFilters');
  const searchInput = document.getElementById('newsSearchInput');

  if (!container || !window.SchoolData || !window.SchoolData.newsAndEvents) return;

  currentNewsList = [...window.SchoolData.newsAndEvents];

  renderNewsGrid(currentNewsList);

  // Category Filtering
  if (filterContainer) {
    const buttons = filterContainer.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        applyNewsFilters();
      });
    });
  }

  // Live Keyword Search
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      applyNewsFilters();
    });
  }

  initArticleModal();
}

function applyNewsFilters() {
  const activeBtn = document.querySelector('#newsFilters .filter-btn.active');
  const searchInput = document.getElementById('newsSearchInput');
  const category = activeBtn ? activeBtn.getAttribute('data-category') : 'all';
  const query = searchInput ? searchInput.value.toLowerCase().trim() : '';

  let filtered = [...window.SchoolData.newsAndEvents];

  if (category && category !== 'all') {
    filtered = filtered.filter(item => 
      item.category.toLowerCase().includes(category.toLowerCase()) || 
      item.type.toLowerCase() === category.toLowerCase()
    );
  }

  if (query) {
    filtered = filtered.filter(item => 
      item.title.toLowerCase().includes(query) ||
      item.excerpt.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query)
    );
  }

  renderNewsGrid(filtered);
}

function renderNewsGrid(items) {
  const container = document.getElementById('newsGridContainer');
  if (!container) return;

  if (items.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--color-text-muted);">
        <p style="font-size: 1.2rem; font-weight:600; margin-bottom: 0.5rem; color:var(--color-primary-dark);">No articles or events matched your query.</p>
        <span style="font-size: 0.9rem;">Try clearing your search term or switching to another category.</span>
      </div>
    `;
    return;
  }

  container.innerHTML = items.map(item => `
    <article class="news-card">
      <div class="news-image-wrap">
        <img src="${item.image}" alt="${item.title}" loading="lazy">
        <span class="news-category">${item.category}</span>
      </div>
      <div class="news-card-body">
        <div class="news-meta">
          <svg style="width:14px;height:14px;color:var(--color-accent);" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          <span>${item.date}</span>
          <span>•</span>
          <span class="placeholder-tag" style="margin-left:0;">Demonstration</span>
        </div>
        <h3>${item.title}</h3>
        <p>${item.excerpt}</p>
        <div class="news-card-action">
          <button type="button" class="btn btn-outline-primary btn-sm read-article-btn" data-id="${item.id}">
            Read More
            <span class="btn-icon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </span>
          </button>
        </div>
      </div>
    </article>
  `).join('');

  // Attach event listener to Read More buttons
  container.querySelectorAll('.read-article-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const articleId = btn.getAttribute('data-id');
      const article = window.SchoolData.newsAndEvents.find(n => n.id === articleId);
      if (article) {
        openArticleModal(article);
      }
    });
  });
}

/* --------------------------------------------------------------------------
   Article Reader Modal
   -------------------------------------------------------------------------- */
function initArticleModal() {
  let modal = document.getElementById('articleModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'articleModal';
    modal.className = 'modal-overlay';
    modal.innerHTML = `
      <div class="modal-dialog modal-dialog-large" role="dialog" aria-modal="true" aria-labelledby="articleModalTitle">
        <div class="modal-header">
          <div>
            <span id="articleModalCategory" class="eyebrow" style="margin-bottom:0.25rem;">Category</span>
            <h3 class="modal-title" id="articleModalTitle">Article Title</h3>
          </div>
          <button type="button" class="modal-close-btn" id="closeArticleModal" aria-label="Close article">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </button>
        </div>
        <div class="modal-body" style="padding-top:1.25rem;">
          <div style="margin-bottom:1.25rem; border-radius:var(--radius-md); overflow:hidden; max-height:300px;">
            <img id="articleModalImg" src="" alt="" style="width:100%; height:100%; object-fit:cover;">
          </div>
          <div id="articleModalMeta" style="font-size:0.85rem; color:var(--color-text-muted); margin-bottom:1.25rem; display:flex; align-items:center; gap:0.5rem;">
            <!-- Meta injected here -->
          </div>
          <div id="articleModalContent" style="font-size:1rem; line-height:1.7; color:var(--color-text-main);">
            <!-- Content injected here -->
          </div>
        </div>
        <div class="modal-footer" style="justify-content:space-between; align-items:center;">
          <span style="font-size:0.8rem; color:var(--color-text-muted);">Gateway School Complex News MVP</span>
          <button type="button" class="btn btn-primary btn-sm" id="btnArticleClose">Close Article</button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    document.getElementById('closeArticleModal').onclick = closeArticleModal;
    document.getElementById('btnArticleClose').onclick = closeArticleModal;

    modal.onclick = (e) => {
      if (e.target === modal) closeArticleModal();
    };

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeArticleModal();
      }
    });
  }
}

function openArticleModal(article) {
  const modal = document.getElementById('articleModal');
  if (!modal) return;

  document.getElementById('articleModalTitle').textContent = article.title;
  document.getElementById('articleModalCategory').textContent = article.category;
  document.getElementById('articleModalImg').src = article.image;
  document.getElementById('articleModalImg').alt = article.title;
  document.getElementById('articleModalMeta').innerHTML = `
    <span><strong>Date:</strong> ${article.date}</span>
    <span>•</span>
    <span><strong>Type:</strong> ${article.type.toUpperCase()}</span>
    <span class="placeholder-tag">Prototype Demonstration</span>
  `;
  document.getElementById('articleModalContent').innerHTML = article.content;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeArticleModal() {
  const modal = document.getElementById('articleModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}
