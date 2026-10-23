/* projects.js - Interactive 3D Controller for Power BI Project Showcase + Live DAX Simulators */

(function () {
  "use strict";

  const SVG_ICONS = {
    powerbi: `<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14.5l-2.5-3.5L7 17.5H4.5l4-5.5-3.8-5h2.6l2.2 3.3 2.2-3.3h2.6l-3.8 5 4 5.5H12zM20 17h-4.5v-2H20v2zm0-4h-4.5v-2H20v2zm0-4h-4.5V7H20v2z"/></svg>`,
    excel: `<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14.5l-2.5-3.5L7 17.5H4.5l4-5.5-3.8-5h2.6l2.2 3.3 2.2-3.3h2.6l-3.8 5 4 5.5H12zM20 17h-4.5v-2H20v2zm0-4h-4.5v-2H20v2zm0-4h-4.5V7H20v2z"/></svg>`,
    powerquery: `<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.5h-2v-2h2zm0-4h-2V7h2z"/></svg>`,
    python: `<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M11.9 2c-3.8 0-6.2 1.7-6.2 4.4v2.2h6.3v.9H3.7C2 9.5 1 11.2 1 13.6c0 2.5 1.4 4.3 3.6 4.3h2v-2.8c0-2.3 2-4.1 4.3-4.1h6.2v-.8c0-2.7-2.4-4.2-5.2-4.2zm-1.8 1.9c.5 0 1 .4 1 1s-.5 1-1 1-1-.4-1-1 .5-1 1-1zm2 18.1c3.8 0 6.2-1.7 6.2-4.4v-2.2h-6.3v-.9h8.3c1.7 0 2.7-1.7 2.7-4.1 0-2.5-1.4-4.3-3.6-4.3h-2v2.8c0 2.3-2 4.1-4.3 4.1H6.6v.8c0 2.7 2.4 4.2 5.2 4.2zm1.8-1.9c-.5 0-1-.4-1-1s.5-1 1-1 1 .4 1 1-.5 1-1 1z"/></svg>`,
    gdrive: `<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M8.2 2l-6.2 10.7 4 6.9 6.2-10.7L8.2 2zm7.6 0H8.2l6.2 10.7h7.6L15.8 2zm6.2 11.3l-3.8 6.7H3.8L7.6 13.3h14.4z"/></svg>`,
    daxstudio: `<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>`,
    map: `<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M20.5 3l-6 2.25L8.5 3 2 5.25V21l6.5-2.25 6 2.25 6-2.25V3zM8 5.4l5 1.88v11.32l-5-1.88V5.4z"/></svg>`,
    code: `<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>`,
    database: `<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 2C6.48 2 2 3.79 2 6v12c0 2.21 4.48 4 10 4s10-1.79 10-4V6c0-2.21-4.48-4-10-4zm0 2c4.42 0 8 1.34 8 2s-3.58 2-8 2-8-1.34-8-2 3.58-2 8-2zm8 8c0 .66-3.58 2-8 2s-8-1.34-8-2V8.9c1.92 1.3 5.03 2.1 8 2.1s6.08-.8 8-2.1V12zm0 6c0 .66-3.58 2-8 2s-8-1.34-8-2v-3.1c1.92 1.3 5.03 2.1 8 2.1s6.08-.8 8-2.1V18z"/></svg>`,
    schema: `<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 2L9 7h6l-3-5zm0 15l3 5H9l3-5zm9-6l-5-3v6l5-3zm-18 0l5 3V8L3 11z"/></svg>`,
    etl: `<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M19 8l-4 4h3c0 3.31-2.69 6-6 6a5.87 5.87 0 0 1-2.8-.7l-1.46 1.46A7.93 7.93 0 0 0 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46A7.93 7.93 0 0 0 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z"/></svg>`,
    sliders: `<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"/></svg>`,
    trending: `<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/></svg>`,
    calendar: `<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10z"/></svg>`,
    funnel: `<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"/></svg>`,
    search: `<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>`,
    github: `<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>`,
    youtube: `<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`
  };

  function getIcon(name) {
    return SVG_ICONS[name] || SVG_ICONS.code;
  }

  function getProjectsData() {
    return window.PROJECTS_DATA || (typeof PROJECTS_DATA !== "undefined" ? PROJECTS_DATA : []);
  }

  const container = document.getElementById("projectsContainer");
  const scrollProgressBar = document.getElementById("scrollProgressBar");
  const overviewToolsWrap = document.getElementById("overviewToolsWrap");
  const overviewTechWrap = document.getElementById("overviewTechWrap");

  function renderSkillsOverview(projects) {
    if (!overviewToolsWrap || !overviewTechWrap || !projects) return;

    const seenTools = new Set();
    const uniqueTools = [];
    projects.forEach(p => {
      (p.tools || []).forEach(t => {
        if (!seenTools.has(t.name)) {
          seenTools.add(t.name);
          uniqueTools.push(t);
        }
      });
    });

    const seenTech = new Set();
    const uniqueTech = [];
    projects.forEach(p => {
      (p.technologies || []).forEach(t => {
        if (!seenTech.has(t.name)) {
          seenTech.add(t.name);
          uniqueTech.push(t);
        }
      });
    });

    overviewToolsWrap.innerHTML = uniqueTools.map((t, i) => `
      <span class="chip-tool" style="animation-delay: ${(i * 0.04).toFixed(2)}s;">
        <span class="chip-icon">${getIcon(t.icon)}</span>
        <span>${t.name}</span>
      </span>
    `).join("");

    overviewTechWrap.innerHTML = uniqueTech.map((t, i) => `
      <span class="chip-tech" style="animation-delay: ${(i * 0.04).toFixed(2)}s;">
        <span class="chip-icon">${getIcon(t.icon)}</span>
        <span>${t.name}</span>
      </span>
    `).join("");
  }

  function renderProjects() {
    const projects = getProjectsData();
    if (!container || !projects || !projects.length) return;

    container.innerHTML = "";

    const grid = document.createElement("div");
    grid.className = "projects-grid";
    container.appendChild(grid);

    projects.forEach((project, idx) => {
      const block = document.createElement("article");
      block.className = "project-block";
      block.id = `project-${project.id}`;
      block.dataset.projectId = project.id;
      block.dataset.index = idx + 1;
      block.dataset.tilt3d = "true";
      block.dataset.maxTilt = "3.5";

      const isLastOdd = (idx === projects.length - 1) && (projects.length % 2 !== 0);
      if (isLastOdd) {
        block.classList.add("is-last-odd");
      }

      const hasStreamlit = !!project.streamlitLink;
      const count = project.screenshots.length;
      const bentoVariant = count >= 9 ? "bento-9" : (count >= 5 ? "bento-5" : (count === 4 ? "bento-4" : "bento-3"));

      // Key Insights HTML
      const insightsHtml = project.insights && project.insights.length > 0
        ? `
          <div class="insights-row">
            ${project.insights.map(item => `
              <div class="insight-card">
                <div class="insight-number">
                  <span class="count-prefix">${item.prefix || ""}</span>
                  <span class="count-val" data-target="${item.value}">${item.value}</span>
                  <span class="count-suffix">${item.suffix || ""}</span>
                </div>
                <div class="insight-label">${item.label}</div>
              </div>
            `).join("")}
          </div>
        `
        : "";

      // Interactive DAX What-If Simulator Widget
      let simulatorHtml = "";
      if (project.simulator) {
        const sim = project.simulator;
        const initOutputs = sim.compute(sim.defaultVal);
        simulatorHtml = `
          <div class="dax-simulator-box" data-sim-project="${project.id}">
            <div class="dax-sim-header">
              <span class="dax-sim-badge">🎛️ Interactive DAX What-If Parameter</span>
              <span class="dax-sim-val-pill" id="simVal-${project.id}">${sim.defaultVal > 0 ? "+" + sim.defaultVal : sim.defaultVal}%</span>
            </div>
            <label class="dax-sim-label" for="simRange-${project.id}">${sim.paramLabel}</label>
            <input type="range"
                   class="dax-sim-slider"
                   id="simRange-${project.id}"
                   min="${sim.min}"
                   max="${sim.max}"
                   step="${sim.step}"
                   value="${sim.defaultVal}"
                   data-project-id="${project.id}">
            <div class="dax-sim-outputs" id="simOutputs-${project.id}">
              ${initOutputs.map(o => `
                <div class="dax-sim-kpi">
                  <span class="dax-sim-kpi-val">${o.val}</span>
                  <span class="dax-sim-kpi-label">${o.label}</span>
                </div>
              `).join("")}
            </div>
          </div>
        `;
      }

      const liveAppBadge = hasStreamlit
        ? `<span class="live-app-badge" aria-label="Live interactive app available">
            <span class="live-app-dot"></span>Live Streamlit App ⚡
           </span>`
        : "";

      // Screenshots Bento HTML
      const screenshotsHtml = `
        <div class="gallery-section-wrapper">
          <div class="gallery-label">
            <span>Power BI Interactive Dashboard Pages (${count})</span>
            <span class="hint">Click any page to inspect in 3D Modal ↗</span>
          </div>
          <div class="bento-grid ${bentoVariant}">
            ${project.screenshots.map((shot, sIdx) => {
              const safeUrl = (u) => (u && !u.startsWith("data:") && !u.startsWith("http")) ? encodeURI(u) : (u || "");
              const primarySrc = safeUrl(shot.src);
              const fallbackSrc = safeUrl(shot.fallbackSrc || shot.src);
              const headingText = (shot.heading || shot.title || "").replace(/"/g, '&quot;');
              const safeTitle = (project.title || "").replace(/"/g, '&quot;');
              return `
                <div class="bento-item">
                  <div class="bento-card"
                       data-project-id="${project.id}"
                       data-page-idx="${sIdx}"
                       data-has-streamlit="${hasStreamlit}"
                       role="button"
                       tabindex="0"
                       title="Click to view all pages &amp; headings for ${safeTitle}"
                       aria-label="Click to view ${headingText} for ${safeTitle}">
                    <div class="bento-card-heading-bar">
                      <span class="bento-heading-tag">${headingText}</span>
                    </div>
                    <img src="${primarySrc}"
                         onerror="this.onerror=null; if('${fallbackSrc}' && this.src !== '${fallbackSrc}') { this.src='${fallbackSrc}'; }"
                         alt="${safeTitle} - ${headingText}"
                         class="bento-img"
                         loading="lazy"
                         decoding="async">
                    <div class="bento-overlay">
                      <div class="bento-top-badge" style="margin-top: 28px;">${headingText}</div>
                      <div class="bento-bottom-info">
                        <div class="bento-caption-text">
                          <p class="bento-caption-title">${headingText}</p>
                          <p class="bento-caption-sub">${shot.caption || ""}</p>
                        </div>
                        <span class="bento-action-badge">
                          Inspect Page ↗
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              `;
            }).join("")}
          </div>
        </div>
      `;

      // Tools Used HTML
      const toolsHtml = project.tools && project.tools.length > 0
        ? `
          <div class="skills-column">
            <span class="skills-label label-tools">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/></svg>
              Tools Used
            </span>
            <div class="chips-wrap">
              ${project.tools.map((t, ti) => `
                <span class="chip-tool" style="animation-delay: ${(ti * 0.05).toFixed(2)}s;">
                  <span class="chip-icon">${getIcon(t.icon)}</span>
                  <span>${t.name}</span>
                </span>
              `).join("")}
            </div>
          </div>
        `
        : "";

      // Technologies Used HTML
      const techHtml = project.technologies && project.technologies.length > 0
        ? `
          <div class="skills-column">
            <span class="skills-label label-tech">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              Technologies &amp; Skills
            </span>
            <div class="chips-wrap">
              ${project.technologies.map((t, ti) => `
                <span class="chip-tech" style="animation-delay: ${(ti * 0.05).toFixed(2)}s;">
                  <span class="chip-icon">${getIcon(t.icon)}</span>
                  <span>${t.name}</span>
                </span>
              `).join("")}
            </div>
          </div>
        `
        : "";

      // CTA bar
      const isDataEng = project.category && project.category.includes("Engineering");
      const reportLabel = isDataEng ? "Project Report 📄" : "View PDF Report ↗";
      const galleryLabel = isDataEng ? `Inspect All ${count} Snapshots ↗` : `All ${count} Pages Gallery ↗`;

      const ctaHtml = `
        <div class="block-cta-bar">
          <div style="display: flex; gap: 10px; align-items: center; flex-wrap: wrap;">
            <button type="button" class="btn-report-pdf js-choice-trigger"
                    data-project-id="${project.id}"
                    style="cursor: pointer; border: none;"
                    aria-label="View exploration options for ${project.title}">
              <span>Explore Options</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="3" y1="9" x2="21" y2="9"></line>
                <line x1="9" y1="21" x2="9" y2="9"></line>
              </svg>
            </button>
            ${project.githubLink ? `
              <a href="${project.githubLink}"
                 target="_blank"
                 rel="noopener noreferrer"
                 class="preview-pdf-link-btn preview-github-btn"
                 style="font-size: 13px; font-weight: 700; padding: 10px 16px; background: rgba(56, 189, 248, 0.14); border-radius: 999px; border: 1px solid rgba(56, 189, 248, 0.5); text-decoration: none; color: #38BDF8; display: inline-flex; align-items: center; gap: 6px;"
                 aria-label="Open GitHub repository for ${project.title}">
                <span>GitHub Repo ↗</span>
              </a>
            ` : ""}
            ${project.youtubeLink ? `
              <a href="${project.youtubeLink}"
                 target="_blank"
                 rel="noopener noreferrer"
                 class="preview-pdf-link-btn preview-youtube-btn"
                 style="font-size: 13px; font-weight: 700; padding: 10px 16px; background: rgba(255, 68, 68, 0.14); border-radius: 999px; border: 1px solid rgba(255, 68, 68, 0.5); text-decoration: none; color: #FF5E5E; display: inline-flex; align-items: center; gap: 6px;"
                 aria-label="Watch YouTube video for ${project.title}">
                <span>YouTube ▶</span>
              </a>
            ` : ""}
            ${project.streamlitLink ? `
              <a href="${project.streamlitLink}"
                 target="_blank"
                 rel="noopener noreferrer"
                 class="preview-pdf-link-btn preview-streamlit-btn"
                 style="font-size: 13px; font-weight: 700; padding: 10px 16px; background: rgba(255, 45, 149, 0.14); border-radius: 999px; border: 1px solid rgba(255, 45, 149, 0.5); text-decoration: none; color: #FF2D95; display: inline-flex; align-items: center; gap: 6px;"
                 aria-label="Open live Streamlit app for ${project.title}">
                <span>Live App ⚡</span>
              </a>
            ` : ""}
            ${project.pdfLink ? `
              <a href="${project.pdfLink}"
                 target="_blank"
                 rel="noopener noreferrer"
                 class="preview-pdf-link-btn"
                 style="font-size: 13px; font-weight: 700; padding: 10px 16px; background: rgba(0, 123, 167, 0.14); border-radius: 999px; border: 1px solid rgba(0, 176, 235, 0.45); text-decoration: none; color: var(--accent-cyan); display: inline-flex; align-items: center; gap: 6px;"
                 aria-label="Open report for ${project.title}">
                <span>${reportLabel}</span>
              </a>
            ` : ""}
            <button type="button" class="preview-pdf-link-btn"
                    onclick="openProjectViewer('${project.id}', 0)"
                    style="font-size: 13px; font-weight: 700; padding: 10px 16px; background: rgba(0, 123, 167, 0.14); border-radius: 999px; border: 1px solid rgba(0, 176, 235, 0.45); cursor: pointer; color: var(--accent-cyan); display: inline-flex; align-items: center; gap: 6px;">
              <span>${galleryLabel}</span>
            </button>
          </div>
          <span class="cta-note">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" style="color:var(--accent-cyan)"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h2v-6h-2v6zm0-8h2V7h-2v2z"/></svg>
            ${isDataEng ? "Includes complete architecture diagrams, Unity Catalog layout, and Medallion ETL scripts" : "Includes full DAX measures, Star Schema data model, and executive recommendations"}
          </span>
        </div>
      `;

      block.innerHTML = `
        <a id="project-${idx + 1}" style="position: relative; top: -80px; display: block; visibility: hidden;" aria-hidden="true"></a>
        <div class="block-header">
          <div class="block-meta">
            <span class="project-index-badge">CASE STUDY 0${idx + 1}</span>
            <span class="category-badge">${project.category || "Power BI Analytics"}</span>
            ${liveAppBadge}
          </div>
          <h2 class="block-title">${project.title}</h2>
          <div class="block-subtitle">${project.subtitle}</div>
          <p class="block-description">${project.description}</p>
        </div>

        ${insightsHtml}

        ${simulatorHtml}

        ${screenshotsHtml}

        <div class="skills-dual-grid">
          ${toolsHtml}
          ${techHtml}
        </div>

        ${ctaHtml}
      `;

      grid.appendChild(block);
    });

    initClickHandlers();
    initSimulators();
    initIntersectionObserver();
    if (typeof window.bind3DTiltCards === "function") {
      window.bind3DTiltCards();
    }
  }

  // ─── Interactive DAX What-If Sliders ───────────────────────────────────────
  function initSimulators() {
    const projects = getProjectsData();
    document.querySelectorAll(".dax-sim-slider").forEach(slider => {
      slider.addEventListener("input", (e) => {
        const pid = e.target.dataset.projectId;
        const val = parseFloat(e.target.value);
        const project = projects.find(p => p.id === pid);
        if (!project || !project.simulator) return;

        const pill = document.getElementById(`simVal-${pid}`);
        if (pill) {
          pill.textContent = (val > 0 ? "+" + val : val) + "%";
        }

        const outputsWrap = document.getElementById(`simOutputs-${pid}`);
        if (outputsWrap) {
          const computed = project.simulator.compute(val);
          outputsWrap.innerHTML = computed.map(o => `
            <div class="dax-sim-kpi">
              <span class="dax-sim-kpi-val">${o.val}</span>
              <span class="dax-sim-kpi-label">${o.label}</span>
            </div>
          `).join("");
        }
      });
    });
  }

  // ─── Streamlit Choice Modal Delegation ────────────────────────────────────────
  function openStreamlitModal(projectId) {
    if (typeof window.openProjectChoiceModal === "function") {
      window.openProjectChoiceModal(projectId);
    } else if (typeof window.openProjectViewer === "function") {
      window.openProjectViewer(projectId, 0);
    }
  }

  window.openStreamlitModal = openStreamlitModal;

  function initClickHandlers() {
    const cards = document.querySelectorAll(".bento-card");
    cards.forEach(card => {
      const openAction = () => {
        const projectId = card.dataset.projectId;
        const pageIdx = parseInt(card.dataset.pageIdx || "0", 10);
        if (projectId && typeof window.openProjectViewer === "function") {
          window.openProjectViewer(projectId, pageIdx);
        }
      };

      card.addEventListener("click", openAction);
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openAction();
        }
      });
    });

    const choiceTriggers = document.querySelectorAll(".js-choice-trigger, .js-streamlit-trigger");
    choiceTriggers.forEach(btn => {
      btn.addEventListener("click", () => {
        if (typeof window.openProjectChoiceModal === "function") {
          window.openProjectChoiceModal(btn.dataset.projectId);
        } else {
          openStreamlitModal(btn.dataset.projectId);
        }
      });
    });
  }

  function initIntersectionObserver() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.querySelectorAll(".project-block, .skills-overview-card").forEach(el => {
        el.classList.add("is-visible");
      });
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.06 });

    document.querySelectorAll(".project-block, .skills-overview-card").forEach(el => {
      observer.observe(el);
    });
  }

  function handleHashScroll() {
    const hash = window.location.hash;
    if (!hash) return;

    const clean = hash.replace("#", "");
    const target = document.getElementById(clean) ||
                   document.getElementById(`project-${clean}`) ||
                   document.querySelector(`[data-project-id="${clean}"]`);

    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 200);
    }
  }

  function initScrollProgress() {
    if (!scrollProgressBar) return;
    window.addEventListener("scroll", () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      scrollProgressBar.style.width = `${progress}%`;
    }, { passive: true });
  }

  function init() {
    const projects = getProjectsData();
    renderSkillsOverview(projects);
    renderProjects();
    initScrollProgress();
    handleHashScroll();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  window.addEventListener("hashchange", handleHashScroll);
})();
