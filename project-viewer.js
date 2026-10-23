/* project-viewer.js - Interactive 3D Project Showcase Modal & Project Choice Exploration Modal */

function safeMediaUrl(url) {
  if (!url) return "";
  if (url.startsWith("data:") || url.startsWith("http://") || url.startsWith("https://")) return url;
  return encodeURI(url);
}

function openProjectViewer(projectId, targetPageIdx = 0) {
  const data = window.PROJECTS_DATA || (typeof PROJECTS_DATA !== "undefined" ? PROJECTS_DATA : []);
  if (!data || !data.length) return;
  const project = data.find(p => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById("projectViewerModal");
  if (!modal) return;

  // Prevent DOMException if modal is already open
  if (modal.open) {
    try { modal.close(); } catch (err) {}
  }

  const titleEl = document.getElementById("modalProjectTitle");
  const subtitleEl = document.getElementById("modalProjectSubtitle");
  const pdfBtn = document.getElementById("modalPdfBtn");
  const pillsNav = document.getElementById("modalNavPills");
  const pagesContainer = document.getElementById("modalPagesScroll");

  if (titleEl) titleEl.textContent = project.title;
  if (subtitleEl) subtitleEl.textContent = project.subtitle || project.description;
  if (pdfBtn) {
    pdfBtn.href = project.pdfLink || "#";
    const isEng = project.category && project.category.includes("Engineering");
    pdfBtn.innerHTML = `<span>${isEng ? "Open Project Report ↗" : "Open Full PDF Report ↗"}</span>`;
    pdfBtn.setAttribute("aria-label", `Open report for ${project.title}`);
  }

  // Inject or update GitHub / YouTube buttons in modal header actions
  const headerActions = modal.querySelector(".modal-header-actions");
  if (headerActions) {
    headerActions.querySelectorAll(".modal-dynamic-action-btn").forEach(el => el.remove());

    if (project.githubLink) {
      const ghBtn = document.createElement("a");
      ghBtn.href = project.githubLink;
      ghBtn.target = "_blank";
      ghBtn.rel = "noopener noreferrer";
      ghBtn.className = "modal-btn-pdf modal-dynamic-action-btn preview-github-btn";
      ghBtn.style.cssText = "background: rgba(56, 189, 248, 0.14); border-color: rgba(56, 189, 248, 0.5); color: #38BDF8;";
      ghBtn.innerHTML = `<span>GitHub Repo ↗</span>`;
      ghBtn.setAttribute("aria-label", `Open GitHub repository for ${project.title}`);
      headerActions.insertBefore(ghBtn, pdfBtn);
    }

    if (project.youtubeLink) {
      const ytBtn = document.createElement("a");
      ytBtn.href = project.youtubeLink;
      ytBtn.target = "_blank";
      ytBtn.rel = "noopener noreferrer";
      ytBtn.className = "modal-btn-pdf modal-dynamic-action-btn preview-youtube-btn";
      ytBtn.style.cssText = "background: rgba(255, 68, 68, 0.14); border-color: rgba(255, 68, 68, 0.5); color: #FF5E5E;";
      ytBtn.innerHTML = `<span>YouTube ▶</span>`;
      ytBtn.setAttribute("aria-label", `Watch YouTube walkthrough for ${project.title}`);
      headerActions.insertBefore(ytBtn, pdfBtn);
    }
  }

  // Build quick jump pills
  if (pillsNav && project.screenshots) {
    pillsNav.innerHTML = project.screenshots.map((s, idx) => `
      <button type="button" class="modal-nav-pill ${idx === targetPageIdx ? 'active' : ''}" data-target-idx="${idx}">
        ${s.heading || s.title}
      </button>
    `).join("");

    const pills = pillsNav.querySelectorAll(".modal-nav-pill");
    pills.forEach((pill) => {
      pill.addEventListener("click", () => {
        pills.forEach(p => p.classList.remove("active"));
        pill.classList.add("active");
        const targetIdx = pill.dataset.targetIdx;
        const targetPage = document.getElementById(`modal-page-${targetIdx}`);
        if (targetPage) {
          targetPage.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });
  }

  // Build full pages list with headings and high-res visuals
  if (pagesContainer && project.screenshots) {
    pagesContainer.scrollTop = 0;
    const isDataEng = project.category && project.category.includes("Engineering");
    const techSubTag = isDataEng
      ? "Data Engineering Lakehouse • Databricks &amp; Delta Lake"
      : "Power BI Executive Dashboard • Star Schema &amp; DAX";

    pagesContainer.innerHTML = project.screenshots.map((s, idx) => {
      const primarySrc = safeMediaUrl(s.src);
      const fallbackSrc = safeMediaUrl(s.fallbackSrc || s.src);
      const heading = s.heading || s.title || `Snapshot ${idx + 1}`;
      const safeHeading = heading.replace(/"/g, "&quot;");
      const safeTitle = (project.title || "").replace(/"/g, "&quot;");

      return `
        <section class="modal-page-block" id="modal-page-${idx}">
          <div class="modal-page-header">
            <h3 class="modal-page-heading">
              <span class="modal-page-badge">Snapshot ${idx + 1} of ${project.screenshots.length}</span>
              <span>${heading}</span>
            </h3>
            <div style="display:flex; gap:8px; flex-wrap:wrap; align-items:center;">
              ${project.githubLink ? `
                <a href="${project.githubLink}" target="_blank" rel="noopener noreferrer" class="preview-pdf-link-btn preview-github-btn" title="Open GitHub Repository">
                  GitHub ↗
                </a>
              ` : ""}
              ${project.youtubeLink ? `
                <a href="${project.youtubeLink}" target="_blank" rel="noopener noreferrer" class="preview-pdf-link-btn preview-youtube-btn" title="Watch YouTube Video Walkthrough">
                  YouTube ▶
                </a>
              ` : ""}
              ${project.streamlitLink ? `
                <a href="${project.streamlitLink}" target="_blank" rel="noopener noreferrer" class="preview-pdf-link-btn preview-streamlit-btn" title="Open Live Interactive Streamlit App">
                  Live Streamlit App ⚡
                </a>
              ` : ""}
              ${project.pdfLink ? `
                <a href="${project.pdfLink}" target="_blank" rel="noopener noreferrer" class="preview-pdf-link-btn" title="Open Report">
                  ${isDataEng ? "Project Report 📄" : "Open PDF Report ↗"}
                </a>
              ` : ""}
            </div>
          </div>
          <div class="modal-page-img-wrap">
            <img src="${primarySrc}"
                 onerror="this.onerror=null; if('${fallbackSrc}' && this.src !== '${fallbackSrc}') { this.src='${fallbackSrc}'; }"
                 alt="${safeTitle} - ${safeHeading}"
                 class="modal-page-img"
                 loading="eager"
                 decoding="async">
          </div>
          <div class="modal-page-caption">
            <span>${s.caption || ""}</span>
            <span style="font-size: 11px; color: var(--accent-cyan, #00B0EB); font-weight: 700;">${techSubTag}</span>
          </div>
        </section>
      `;
    }).join("");

    // Synchronize active nav pill as user scrolls through snapshots
    let scrollDebounce;
    pagesContainer.onscroll = () => {
      clearTimeout(scrollDebounce);
      scrollDebounce = setTimeout(() => {
        const blocks = pagesContainer.querySelectorAll(".modal-page-block");
        if (!blocks.length) return;
        const containerTop = pagesContainer.getBoundingClientRect().top;
        let activeIdx = 0;
        blocks.forEach((block, bIdx) => {
          const rect = block.getBoundingClientRect();
          if (rect.top - containerTop <= 160) {
            activeIdx = bIdx;
          }
        });
        const pills = pillsNav ? pillsNav.querySelectorAll(".modal-nav-pill") : [];
        pills.forEach((p, pIdx) => {
          if (pIdx === activeIdx) {
            p.classList.add("active");
          } else {
            p.classList.remove("active");
          }
        });
      }, 40);
    };
  }

  modal.showModal();

  if (targetPageIdx > 0) {
    setTimeout(() => {
      const targetPage = document.getElementById(`modal-page-${targetPageIdx}`);
      if (targetPage) {
        targetPage.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 150);
  }
}

// ─── Interactive Project Exploration Choice Modal ────────────────────────────
function openProjectChoiceModal(projectId) {
  const data = window.PROJECTS_DATA || (typeof PROJECTS_DATA !== "undefined" ? PROJECTS_DATA : []);
  if (!data || !data.length) return;
  const project = data.find(p => p.id === projectId);
  if (!project) return;

  const existing = document.getElementById("projectChoiceModal") || document.getElementById("streamlitChoiceModal");
  if (existing) existing.remove();

  const overlay = document.createElement("div");
  overlay.id = "projectChoiceModal";
  overlay.className = "stl-overlay";
  overlay.setAttribute("role", "dialog");
  overlay.setAttribute("aria-modal", "true");
  overlay.setAttribute("aria-labelledby", "choiceModalTitle");
  overlay.setAttribute("aria-describedby", "choiceModalSubtitle");

  const isDataEng = project.category && project.category.includes("Engineering");
  const reportLabel = isDataEng ? "Read Project Report" : "Read the PDF Report";
  const reportDesc = isDataEng
    ? "Comprehensive architecture write-up, data flows, and discrepancy reconciliation methodology"
    : "Detailed write-up with screenshots, DAX models, methodology and insights";
  const snapshotCount = project.screenshots ? project.screenshots.length : 0;

  overlay.innerHTML = `
    <div class="stl-card" role="document">
      <button class="stl-close-btn" id="choiceCloseBtn" aria-label="Close dialog">✕</button>
      <p class="stl-eyebrow">Choose How To Explore</p>
      <h2 class="stl-title" id="choiceModalTitle">How would you like to explore this project?</h2>
      <p class="stl-subtitle" id="choiceModalSubtitle">${project.title}</p>

      <div class="stl-options">
        ${project.githubLink ? `
          <button class="stl-option-card stl-option-card--github" id="choiceGithubBtn" aria-label="Open GitHub repository for ${project.title}">
            <span class="stl-option-icon">🐙</span>
            <div class="stl-option-body">
              <span class="stl-option-title">Open GitHub Repository</span>
              <span class="stl-option-desc">Inspect complete source code, SQL models, notebooks, and repository documentation</span>
            </div>
            <span class="stl-option-arrow">↗</span>
          </button>
        ` : ""}

        ${project.youtubeLink ? `
          <button class="stl-option-card stl-option-card--youtube" id="choiceYoutubeBtn" aria-label="Watch YouTube walkthrough for ${project.title}">
            <span class="stl-option-icon">▶️</span>
            <div class="stl-option-body">
              <span class="stl-option-title">Watch Video Walkthrough</span>
              <span class="stl-option-desc">Full video presentation demonstrating pipeline architecture and live execution</span>
            </div>
            <span class="stl-option-arrow">↗</span>
          </button>
        ` : ""}

        ${project.pdfLink ? `
          <button class="stl-option-card" id="choicePdfBtn" aria-label="Read report for ${project.title}">
            <span class="stl-option-icon">📄</span>
            <div class="stl-option-body">
              <span class="stl-option-title">${reportLabel}</span>
              <span class="stl-option-desc">${reportDesc}</span>
            </div>
            <span class="stl-option-arrow">↗</span>
          </button>
        ` : ""}

        ${project.streamlitLink ? `
          <button class="stl-option-card stl-option-card--streamlit" id="choiceAppBtn" aria-label="Open live Streamlit app for ${project.title}">
            <span class="stl-option-icon">⚡</span>
            <div class="stl-option-body">
              <span class="stl-option-title">Open Live Streamlit App</span>
              <span class="stl-option-desc">Interactive dashboard, filter parameters, and explore the data live</span>
            </div>
            <span class="stl-option-arrow">↗</span>
          </button>
        ` : ""}

        <button class="stl-option-card" id="choiceGalleryBtn" aria-label="Inspect all visual snapshots for ${project.title}">
          <span class="stl-option-icon">🖼️</span>
          <div class="stl-option-body">
            <span class="stl-option-title">Inspect ${snapshotCount} Visual Snapshots in 3D Modal</span>
            <span class="stl-option-desc">High-resolution interactive gallery with section headings and key telemetry</span>
          </div>
          <span class="stl-option-arrow">↗</span>
        </button>
      </div>

      <div class="stl-footer">
        <button class="stl-gallery-link" id="choiceBottomGalleryBtn" aria-label="Quick open all snapshots in 3D Modal">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>
          Quick Open All ${snapshotCount} Snapshots
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      overlay.classList.add("stl-overlay--open");
    });
  });

  const firstFocusable = overlay.querySelector(".stl-close-btn");
  if (firstFocusable) firstFocusable.focus();

  function closeModal() {
    overlay.classList.remove("stl-overlay--open");
    setTimeout(() => overlay.remove(), 220);
  }

  const closeBtn = document.getElementById("choiceCloseBtn");
  if (closeBtn) closeBtn.addEventListener("click", closeModal);

  const ghBtn = document.getElementById("choiceGithubBtn");
  if (ghBtn && project.githubLink) {
    ghBtn.addEventListener("click", () => {
      window.open(project.githubLink, "_blank", "noopener,noreferrer");
      closeModal();
    });
  }

  const ytBtn = document.getElementById("choiceYoutubeBtn");
  if (ytBtn && project.youtubeLink) {
    ytBtn.addEventListener("click", () => {
      window.open(project.youtubeLink, "_blank", "noopener,noreferrer");
      closeModal();
    });
  }

  const pdfBtnEl = document.getElementById("choicePdfBtn");
  if (pdfBtnEl && project.pdfLink) {
    pdfBtnEl.addEventListener("click", () => {
      window.open(project.pdfLink, "_blank", "noopener,noreferrer");
      closeModal();
    });
  }

  const appBtn = document.getElementById("choiceAppBtn");
  if (appBtn && project.streamlitLink) {
    appBtn.addEventListener("click", () => {
      window.open(project.streamlitLink, "_blank", "noopener,noreferrer");
      closeModal();
    });
  }

  // Immediate, seamless transition to 3D Modal without delay or race condition
  const handleOpen3DModal = () => {
    overlay.remove();
    openProjectViewer(project.id, 0);
  };

  const galleryBtn = document.getElementById("choiceGalleryBtn");
  if (galleryBtn) {
    galleryBtn.addEventListener("click", handleOpen3DModal);
  }

  const bottomGalleryBtn = document.getElementById("choiceBottomGalleryBtn");
  if (bottomGalleryBtn) {
    bottomGalleryBtn.addEventListener("click", handleOpen3DModal);
  }

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });

  const escHandler = (e) => {
    if (e.key === "Escape") {
      closeModal();
      window.removeEventListener("keydown", escHandler);
    }
  };
  window.addEventListener("keydown", escHandler);
}

window.openProjectViewer = openProjectViewer;
window.openProjectChoiceModal = openProjectChoiceModal;
window.openStreamlitModal = openProjectChoiceModal; // backward-compatibility alias

// Bind modal events
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("projectViewerModal");
  const closeBtn = document.getElementById("modalCloseBtn");
  if (closeBtn && modal) {
    closeBtn.addEventListener("click", () => modal.close());
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.close();
    });
  }
});

