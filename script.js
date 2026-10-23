/* built by siddharth • Interactive 3D Spatial Portfolio Edition */

// CONTACT EMAIL — single place to change the contact email.
const CONTACT_EMAIL = "pattnaiksiddharth1@gmail.com";

const DIALOGS = {
    work: ["Power BI Dashboards & Case Studies", "Explore my interactive Power BI reporting suites and end-to-end analytical case studies covering Marketing ROI, Retention Cohorts, Smart City Transit Demand, and Retail Pricing Elasticity."],
    about: ["About Siddharth", "I'm Siddharth — a Data & Business Analyst, Vibe Coder, and Full-Stack Builder. I turn raw data into actionable insights, ideas into products, and complex problems into smart, user-focused solutions."],
    process: ["My Process", "I turn business challenges into data-driven solutions. From analyzing data and uncovering actionable insights to identifying opportunities, designing user-focused products, and building full-stack applications, I combine analytical thinking with hands-on development to turn ideas into impactful, real-world solutions."],
    approach: ["What I Do", "I transform data into actionable insights, business challenges into strategic solutions, and ideas into functional digital products. From data analytics and business intelligence to product thinking and full-stack development, I combine analytical skills, creativity, and AI-powered coding to build solutions that deliver real value."]
};

document.querySelectorAll("[data-contact]").forEach(a => { a.href = "mailto:" + CONTACT_EMAIL; });
document.querySelectorAll("[data-email-text]").forEach(a => { a.textContent = CONTACT_EMAIL; });

/* Sound Toggle Control */
const soundToggleBtn = document.getElementById("soundToggleBtn");
const soundToggleText = document.getElementById("soundToggleText");
if (soundToggleBtn && typeof window.togglePortfolioSound === "function") {
    soundToggleBtn.addEventListener("click", () => {
        const isOn = window.togglePortfolioSound();
        soundToggleBtn.classList.toggle("is-muted", !isOn);
        if (soundToggleText) soundToggleText.textContent = isOn ? "SFX ON" : "SFX OFF";
        if (isOn && typeof window.playMechanicalThock === "function") {
            window.playMechanicalThock(1.1);
        }
    });
}

/* Dialogs */
const dlg = document.getElementById("info");
const dialogProjectsBtn = document.getElementById("dialogProjectsBtn");
const dialogKeyBadge = document.getElementById("dialogKeyBadge");
let trigger = null;

function openKeyDialog(btn) {
    if (!dlg) return;
    const dialogKey = btn.dataset.dialog;
    const keyChar = btn.dataset.keyChar || dialogKey.toUpperCase();
    const [title, text] = DIALOGS[dialogKey] || ["Info", ""];
    document.getElementById("info-title").textContent = title;
    document.getElementById("info-text").textContent = text;
    if (dialogKeyBadge) {
        dialogKeyBadge.textContent = `3D KEY // [ ${keyChar} ] • ${dialogKey.toUpperCase()}`;
    }
    if (dialogProjectsBtn) {
        dialogProjectsBtn.style.display = dialogKey === "work" ? "inline-flex" : "none";
    }
    if (typeof window.playMechanicalThock === "function") {
        window.playMechanicalThock(1.0);
    }
    trigger = btn;
    dlg.showModal();
    update();
}

document.querySelectorAll("[data-dialog]").forEach(btn => {
    btn.addEventListener("click", () => openKeyDialog(btn));
});

const infoCloseBtn = document.getElementById("info-close");
if (infoCloseBtn && dlg) {
    infoCloseBtn.addEventListener("click", () => dlg.close());
    dlg.addEventListener("close", () => { if (trigger) trigger.focus(); trigger = null; update(); });
    dlg.addEventListener("click", (e) => {
        if (e.target === dlg) dlg.close();
    });
}

/* Physical Keyboard Typing Support (Press P-O-R-T-F-O-L-I-O or Enter) */
window.addEventListener("keydown", (e) => {
    if (e.target.matches("input, textarea") || (dlg && dlg.open)) return;
    const projectModal = document.getElementById("projectViewerModal");
    if (projectModal && projectModal.open) return;

    const pressed = e.key.toUpperCase();
    const matchingKeys = [...document.querySelectorAll(`.key[data-key-char="${pressed}"]`)];
    if (matchingKeys.length > 0) {
        const chosen = matchingKeys[0];
        chosen.classList.add("is-pressed");
        if (typeof window.playMechanicalThock === "function") {
            window.playMechanicalThock(0.95);
        }
        setTimeout(() => chosen.classList.remove("is-pressed"), 220);
        if (chosen.dataset.dialog) {
            openKeyDialog(chosen);
        }
    }
});

/* Keyboard scale: <= 1 and <= container width / 940 */
const wrap = document.getElementById("kbWrap");
function fit() {
    if (!wrap) return;
    const s = Math.min(1, wrap.clientWidth / 940);
    wrap.style.setProperty("--s", s);
    wrap.style.height = Math.ceil(350 * s) + 28 + "px";
}
if (wrap) {
    new ResizeObserver(fit).observe(wrap);
    fit();
}

/* Automatic key sequence */
const kb = document.getElementById("kb");
let update = function () {};
if (kb) {
    const keys = [...kb.querySelectorAll(".key")]; // DOM order = P O R T F O L I O Enter
    const reduce = matchMedia("(prefers-reduced-motion: reduce)");
    let idx = 0, timer = 0, hold = 0, hovering = false, focused = false;

    function stop() {
        clearTimeout(timer); clearTimeout(hold);
        keys.forEach(k => k.classList.remove("is-auto"));
    }
    function step() {
        const k = keys[idx];
        if (!k) return;
        k.classList.add("is-auto");
        hold = setTimeout(() => k.classList.remove("is-auto"), 240);
        idx = (idx + 1) % keys.length;
        timer = setTimeout(step, idx === 0 ? 1500 : 340);
    }
    update = function () {
        stop();
        if (!hovering && !focused && (!dlg || !dlg.open) && !document.hidden && !reduce.matches) {
            timer = setTimeout(step, 300);
        }
    };
    kb.addEventListener("pointerenter", () => { hovering = true; update(); });
    kb.addEventListener("pointerleave", () => { hovering = false; update(); });
    kb.addEventListener("focusin", e => { focused = e.target.matches(":focus-visible"); update(); });
    kb.addEventListener("focusout", () => { focused = false; update(); });
    document.addEventListener("visibilitychange", update);
    reduce.addEventListener("change", update);
    update();
}

/* Marquee: two identical groups, animate exactly one group width (-50%) at ~50px/s */
const track = document.getElementById("track");
if (track) {
    function buildMarquee() {
        const [g1, g2] = track.querySelectorAll(".group");
        if (!g1 || !g2) return;
        const proto = g1.firstElementChild;
        if (!proto) return;
        g1.replaceChildren(proto); g2.replaceChildren();
        const w = proto.getBoundingClientRect().width || 1;
        const n = Math.max(1, Math.ceil((window.innerWidth + 1) / w));
        for (let i = 1; i < n; i++) g1.appendChild(proto.cloneNode(true));
        g2.append(...[...g1.children].map(c => c.cloneNode(true)));
        track.style.setProperty("--dur", (g1.getBoundingClientRect().width / 50).toFixed(2) + "s");
    }
    let rt = 0;
    window.addEventListener("resize", () => { clearTimeout(rt); rt = setTimeout(buildMarquee, 150); });
    buildMarquee();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { buildMarquee(); fit(); });
}

/* Featured Dashboards Interactive Navigation & High-Res Cover Injection */
function initFeaturedDashboards() {
    const projects = (window.PROJECTS_DATA && Array.isArray(window.PROJECTS_DATA)) ? window.PROJECTS_DATA : [];
    const count = projects.length || 4;
    const btnCta = document.getElementById("btnViewAllProjects");
    if (btnCta) {
        const span = btnCta.querySelector("span");
        if (span) {
            span.innerHTML = `Explore All ${count} Case Studies &amp; Simulators &rarr;`;
        }
    }

    // Hydrate high-res SVG dashboard covers onto home preview cards
    projects.forEach(p => {
        const imgEl = document.getElementById(`homeCover-${p.id}`);
        if (imgEl && p.coverImage) {
            imgEl.src = p.coverImage;
        }
    });

    // Quick 3D Modal Inspect buttons right on the homepage
    document.querySelectorAll("[data-quick-viewer]").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const pid = btn.dataset.quickViewer;
            if (typeof window.playMechanicalThock === "function") {
                window.playMechanicalThock(1.15);
            }
            if (typeof window.openProjectViewer === "function") {
                window.openProjectViewer(pid, 0);
            }
        });
    });

    // Direct card action: open interactive choice exploration modal asking how user wants to explore
    document.querySelectorAll(".preview-card, .data-eng-card").forEach(card => {
        const pid = card.dataset.projectId;

        const handleCardClick = (e) => {
            // Ignore if user clicked a direct link or quick-view button
            if (
                e.target.closest(".preview-pdf-link-btn") ||
                e.target.classList.contains("preview-pdf-link-btn") ||
                e.target.closest(".preview-quickview-btn") ||
                e.target.classList.contains("preview-quickview-btn")
            ) {
                return;
            }

            if (typeof window.playMechanicalThock === "function") {
                window.playMechanicalThock(1.05);
            }

            if (pid && typeof window.openProjectChoiceModal === "function") {
                window.openProjectChoiceModal(pid);
            } else if (typeof window.openProjectViewer === "function") {
                window.openProjectViewer(pid, 0);
            }
        };

        card.addEventListener("click", handleCardClick);
        card.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleCardClick(e);
            }
        });
    });

    // Explicit choice trigger buttons
    document.querySelectorAll("[data-choice-trigger]").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const pid = btn.dataset.choiceTrigger;
            if (typeof window.playMechanicalThock === "function") {
                window.playMechanicalThock(1.1);
            }
            if (pid && typeof window.openProjectChoiceModal === "function") {
                window.openProjectChoiceModal(pid);
            }
        });
    });

    document.querySelectorAll(".preview-pdf-link-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
        });
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initFeaturedDashboards);
} else {
    initFeaturedDashboards();
}
