/**
 * GATEWAY SCHOOL COMPLEX — MAIN INTERACTIVE SCRIPT
 * 
 * Handles sticky navigation, mobile drawer menu, accordions,
 * form validation & simulated submission modals, toast notifications,
 * and SVG icon / crest rendering across all pages.
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileDrawer();
  initAccordions();
  initForms();
  initScrollAnimations();
  initSchoolCrests();
});

/* --------------------------------------------------------------------------
   Sticky Header & Active Link
   -------------------------------------------------------------------------- */
function initNavbar() {
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  // Highlight active link based on current page
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

/* --------------------------------------------------------------------------
   Mobile Navigation Drawer
   -------------------------------------------------------------------------- */
function initMobileDrawer() {
  const toggleBtn = document.querySelector('.menu-toggle');
  const drawer = document.querySelector('.mobile-drawer');
  const overlay = document.querySelector('.mobile-nav-overlay');
  const closeBtn = document.querySelector('.drawer-close');
  const drawerLinks = document.querySelectorAll('.mobile-nav-link, .mobile-drawer .btn');

  if (!toggleBtn || !drawer || !overlay) return;

  function openDrawer() {
    drawer.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    toggleBtn.setAttribute('aria-expanded', 'true');
    if (closeBtn) closeBtn.focus();
  }

  function closeDrawer() {
    drawer.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    toggleBtn.setAttribute('aria-expanded', 'false');
  }

  toggleBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  overlay.addEventListener('click', closeDrawer);

  drawerLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('active')) {
      closeDrawer();
    }
  });
}

/* --------------------------------------------------------------------------
   Accordions
   -------------------------------------------------------------------------- */
function initAccordions() {
  const headers = document.querySelectorAll('.accordion-header');
  headers.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const isOpen = item.classList.contains('active');

      // Close other accordion items in the same container
      const container = item.closest('.accordion');
      if (container) {
        container.querySelectorAll('.accordion-item').forEach(other => {
          if (other !== item) {
            other.classList.remove('active');
            const otherHeader = other.querySelector('.accordion-header');
            if (otherHeader) otherHeader.setAttribute('aria-expanded', 'false');
          }
        });
      }

      if (isOpen) {
        item.classList.remove('active');
        header.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('active');
        header.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/* --------------------------------------------------------------------------
   Interactive Form Validation & Simulated Submission
   -------------------------------------------------------------------------- */
function initForms() {
  // General Contact Form
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (validateForm(contactForm)) {
        simulateFormSubmission(contactForm, 'Enquiry Received!', 
          'Thank you for contacting Gateway School Complex. Since this is an MVP prototype, your message has been simulated. In the production deployment, this will connect to the official school office.');
      }
    });
  }

  // Admissions Enquiry Form
  const admissionForm = document.getElementById('admissionEnquiryForm');
  if (admissionForm) {
    admissionForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (validateForm(admissionForm)) {
        const studentName = admissionForm.querySelector('#studentName')?.value || 'Student';
        const gradeLevel = admissionForm.querySelector('#gradeLevel')?.value || 'Elementary/JHS';
        const refId = 'GSC-' + Math.floor(100000 + Math.random() * 900000);

        showSubmissionModal({
          title: 'Admission Enquiry Submitted!',
          message: `Thank you for your interest in Gateway School Complex. We have received your preliminary application enquiry for <strong>${studentName}</strong> (${gradeLevel}).`,
          refNumber: refId,
          note: 'This is a functional demonstration prototype. In the live website, the school admissions office will automatically receive this record and follow up with official documentation details.'
        });
        admissionForm.reset();
      }
    });
  }
}

function validateForm(form) {
  let isValid = true;
  const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');

  inputs.forEach(input => {
    input.classList.remove('is-invalid');
    const val = input.value.trim();

    if (!val) {
      input.classList.add('is-invalid');
      isValid = false;
    } else if (input.type === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(val)) {
        input.classList.add('is-invalid');
        isValid = false;
      }
    } else if (input.type === 'tel') {
      // Basic sanity check for telephone numbers
      if (val.length < 7) {
        input.classList.add('is-invalid');
        isValid = false;
      }
    }

    input.addEventListener('input', () => {
      input.classList.remove('is-invalid');
    }, { once: true });
  });

  if (!isValid) {
    showToast('Please check all highlighted fields and try again.', 'error');
  }

  return isValid;
}

function simulateFormSubmission(form, title, message) {
  const submitBtn = form.querySelector('button[type="submit"]');
  const originalText = submitBtn ? submitBtn.innerHTML : 'Submit';

  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg class="spinner" style="width:18px;height:18px;animation:spin 1s linear infinite;margin-right:8px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
        <path d="M12 2a10 10 0 0 1 10 10" stroke-linecap="round"></path>
      </svg>
      Sending...
    `;
  }

  setTimeout(() => {
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
    }
    showSubmissionModal({
      title: title,
      message: message,
      refNumber: 'MSG-' + Math.floor(100000 + Math.random() * 900000),
      note: 'Gateway School Complex Demonstration Prototype'
    });
    form.reset();
  }, 900);
}

/* --------------------------------------------------------------------------
   Modal Alert / Confirmation
   -------------------------------------------------------------------------- */
function showSubmissionModal({ title, message, refNumber, note }) {
  let modalOverlay = document.getElementById('submissionModal');
  if (!modalOverlay) {
    modalOverlay = document.createElement('div');
    modalOverlay.id = 'submissionModal';
    modalOverlay.className = 'modal-overlay';
    document.body.appendChild(modalOverlay);
  }

  modalOverlay.innerHTML = `
    <div class="modal-dialog" role="dialog" aria-modal="true" aria-labelledby="modalConfirmTitle">
      <div class="modal-header">
        <h3 class="modal-title" id="modalConfirmTitle" style="color:var(--color-primary-dark); display:flex; align-items:center; gap:8px;">
          <svg style="width:24px;height:24px;color:var(--color-success);" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          ${title}
        </h3>
        <button type="button" class="modal-close-btn" id="closeConfirmModal" aria-label="Close modal">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
        </button>
      </div>
      <div class="modal-body">
        <p style="font-size:1.05rem; line-height:1.6; margin-bottom:1.25rem;">${message}</p>
        
        <div style="background-color:var(--color-bg-alt); border:1px solid var(--color-border); border-radius:var(--radius-md); padding:1rem 1.25rem; margin-bottom:1.25rem;">
          <div style="font-size:0.8rem; text-transform:uppercase; letter-spacing:0.05em; color:var(--color-text-muted); margin-bottom:0.25rem;">Reference Code</div>
          <div style="font-family:monospace; font-size:1.2rem; font-weight:700; color:var(--color-primary);">${refNumber}</div>
        </div>

        <div style="font-size:0.85rem; color:var(--color-text-muted); background-color:var(--color-accent-soft); padding:0.75rem 1rem; border-radius:var(--radius-sm); border-left:3px solid var(--color-accent);">
          <strong>Prototype Note:</strong> ${note}
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" id="btnConfirmOk">Understood & Close</button>
      </div>
    </div>
  `;

  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';

  const closeBtn = document.getElementById('closeConfirmModal');
  const okBtn = document.getElementById('btnConfirmOk');

  function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.onclick = closeModal;
  if (okBtn) okBtn.onclick = closeModal;
  modalOverlay.onclick = (e) => {
    if (e.target === modalOverlay) closeModal();
  };
}

/* --------------------------------------------------------------------------
   Toast Notifications
   -------------------------------------------------------------------------- */
function showToast(message, type = 'info') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  if (type === 'error') {
    toast.style.borderLeftColor = 'var(--color-danger)';
  } else if (type === 'success') {
    toast.style.borderLeftColor = 'var(--color-success)';
  }

  toast.innerHTML = `
    <span>${message}</span>
  `;

  container.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

/* --------------------------------------------------------------------------
   Subtle Scroll Reveal Animation
   -------------------------------------------------------------------------- */
function initScrollAnimations() {
  if (!('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-up');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.card, .trust-card, .program-card, .feature-card, .step-card, .value-item').forEach(el => {
    observer.observe(el);
  });
}

/* --------------------------------------------------------------------------
   Universal School Crest & Brand Emblem Injector
   Ensures vector-crisp, elegant crest rendering on all pages
   -------------------------------------------------------------------------- */
function initSchoolCrests() {
  const crestSvg = `
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;">
      <!-- Outer Shield / Circle with Navy & Gold rim -->
      <circle cx="50" cy="50" r="46" fill="#1A365D" stroke="#D97706" stroke-width="3"/>
      <circle cx="50" cy="50" r="41" fill="#0F233D" stroke="rgba(245, 158, 11, 0.4)" stroke-width="1"/>
      
      <!-- Academic Star of Excellence -->
      <polygon points="50,16 53,24 61,24 55,29 57,37 50,32 43,37 45,29 39,24 47,24" fill="#F59E0B"/>
      
      <!-- Architectural Gateway Arch -->
      <path d="M30 76 V50 C30 38.95 38.95 30 50 30 C61.05 30 70 38.95 70 50 V76" stroke="#FEF3C7" stroke-width="3" stroke-linecap="round" fill="none"/>
      
      <!-- Arch Pillar Details -->
      <line x1="28" y1="76" x2="34" y2="76" stroke="#D97706" stroke-width="3"/>
      <line x1="66" y1="76" x2="72" y2="76" stroke="#D97706" stroke-width="3"/>
      <line x1="28" y1="50" x2="34" y2="50" stroke="#D97706" stroke-width="2"/>
      <line x1="66" y1="50" x2="72" y2="50" stroke="#D97706" stroke-width="2"/>

      <!-- Open Book of Knowledge in Archway -->
      <path d="M50 63 C45 61 38 61 36 63 V74 C38 72 45 72 50 74 C55 72 62 72 64 74 V63 C62 61 55 61 50 63 Z" fill="#FFFFFF"/>
      <line x1="50" y1="63" x2="50" y2="74" stroke="#1A365D" stroke-width="1.5"/>

      <!-- Gateway Rays of Knowledge -->
      <line x1="50" y1="42" x2="50" y2="47" stroke="#F59E0B" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="42" y1="45" x2="45" y2="49" stroke="#F59E0B" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="58" y1="45" x2="55" y2="49" stroke="#F59E0B" stroke-width="1.5" stroke-linecap="round"/>

      <!-- Lower Ribbon / Base with GSC letters -->
      <path d="M26 84 C38 88 62 88 74 84 L71 79 C61 82 39 82 29 79 Z" fill="#D97706"/>
      <text x="50" y="84.5" fill="#0F233D" font-size="5.5" font-family="'Outfit', sans-serif" font-weight="900" text-anchor="middle" letter-spacing="0.5">G. S. C.</text>
    </svg>
  `;

  document.querySelectorAll('.school-crest-svg').forEach(el => {
    el.innerHTML = crestSvg;
  });
}
