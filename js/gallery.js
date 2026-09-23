/**
 * GATEWAY SCHOOL COMPLEX — GALLERY SYSTEM & LIGHTBOX
 * 
 * Manages category filtering, dynamic image grid rendering,
 * and high-resolution fullscreen lightbox with next/prev cycling.
 */

document.addEventListener('DOMContentLoaded', () => {
  initGallery();
});

let currentGalleryList = [];
let activeLightboxIndex = 0;

function initGallery() {
  const grid = document.getElementById('galleryGrid');
  const filterContainer = document.getElementById('galleryFilters');
  if (!grid || !window.SchoolData || !window.SchoolData.gallery) return;

  currentGalleryList = [...window.SchoolData.gallery];

  // Render initial grid
  renderGalleryGrid(currentGalleryList);

  // Set up filter buttons
  if (filterContainer) {
    const buttons = filterContainer.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const category = btn.getAttribute('data-category');
        if (category === 'all' || !category) {
          currentGalleryList = [...window.SchoolData.gallery];
        } else {
          currentGalleryList = window.SchoolData.gallery.filter(item => 
            item.category.toLowerCase() === category.toLowerCase()
          );
        }

        renderGalleryGrid(currentGalleryList);
      });
    });
  }

  // Initialize Lightbox Modal
  initLightbox();
}

function renderGalleryGrid(items) {
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;

  if (items.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--color-text-muted);">
        <p style="font-size: 1.1rem; margin-bottom: 0.5rem;">No photographs found in this category.</p>
        <span style="font-size: 0.85rem;">Select another category or view all gallery images.</span>
      </div>
    `;
    return;
  }

  grid.innerHTML = items.map((item, index) => `
    <div class="gallery-item" data-index="${index}" tabindex="0" role="button" aria-label="View photo: ${item.title}">
      <img src="${item.image}" alt="${item.title}" loading="lazy">
      <div class="gallery-item-info">
        <p>${item.category}</p>
        <h4>${item.title}</h4>
      </div>
    </div>
  `).join('');

  // Attach click events
  grid.querySelectorAll('.gallery-item').forEach(el => {
    el.addEventListener('click', () => {
      const idx = parseInt(el.getAttribute('data-index'), 10);
      openLightbox(idx);
    });

    el.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const idx = parseInt(el.getAttribute('data-index'), 10);
        openLightbox(idx);
      }
    });
  });
}

/* --------------------------------------------------------------------------
   Lightbox System
   -------------------------------------------------------------------------- */
function initLightbox() {
  let lightbox = document.getElementById('galleryLightbox');
  if (!lightbox) {
    lightbox = document.createElement('div');
    lightbox.id = 'galleryLightbox';
    lightbox.className = 'modal-overlay';
    lightbox.innerHTML = `
      <div class="modal-dialog lightbox-dialog" role="dialog" aria-modal="true" aria-label="Photo Lightbox">
        <div class="lightbox-content">
          <button type="button" class="modal-close-btn" id="lightboxCloseBtn" aria-label="Close Lightbox" style="position:absolute; top:-40px; right:0; color:#fff; background:rgba(0,0,0,0.5); border-radius:50%; width:36px; height:36px;">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </button>
          
          <button type="button" class="lightbox-nav-btn lightbox-nav-prev" id="lightboxPrevBtn" aria-label="Previous photo">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="width:24px;height:24px;"><path d="M15 18l-6-6 6-6"/></svg>
          </button>

          <button type="button" class="lightbox-nav-btn lightbox-nav-next" id="lightboxNextBtn" aria-label="Next photo">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="width:24px;height:24px;"><path d="M9 18l6-6-6-6"/></svg>
          </button>

          <div class="lightbox-image-wrap">
            <img id="lightboxImg" src="" alt="Enlarged view">
          </div>

          <div class="lightbox-info">
            <div>
              <h4 id="lightboxTitle">Image Title</h4>
              <p id="lightboxCaption">Image Caption</p>
            </div>
            <div id="lightboxCategory" style="font-size:0.75rem; text-transform:uppercase; background:var(--color-accent); color:#fff; padding:4px 10px; border-radius:var(--radius-full); font-weight:700; white-space:nowrap;">
              Category
            </div>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(lightbox);

    document.getElementById('lightboxCloseBtn').onclick = closeLightbox;
    document.getElementById('lightboxPrevBtn').onclick = prevLightboxImage;
    document.getElementById('lightboxNextBtn').onclick = nextLightboxImage;

    lightbox.onclick = (e) => {
      if (e.target === lightbox) closeLightbox();
    };

    document.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('active')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevLightboxImage();
      if (e.key === 'ArrowRight') nextLightboxImage();
    });
  }
}

function openLightbox(index) {
  if (!currentGalleryList || currentGalleryList.length === 0) return;
  activeLightboxIndex = (index + currentGalleryList.length) % currentGalleryList.length;

  const item = currentGalleryList[activeLightboxIndex];
  const lightbox = document.getElementById('galleryLightbox');
  const img = document.getElementById('lightboxImg');
  const title = document.getElementById('lightboxTitle');
  const caption = document.getElementById('lightboxCaption');
  const category = document.getElementById('lightboxCategory');

  img.src = item.image;
  img.alt = item.title;
  title.textContent = item.title;
  caption.textContent = item.caption;
  category.textContent = item.category;

  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lightbox = document.getElementById('galleryLightbox');
  if (lightbox) {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function prevLightboxImage() {
  openLightbox(activeLightboxIndex - 1);
}

function nextLightboxImage() {
  openLightbox(activeLightboxIndex + 1);
}
