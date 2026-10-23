# Siddharth — Interactive 3D Spatial Portfolio & Power BI Showcase

developed by siddharth

Siddharth's interactive 3D portfolio (`index.html` and `projects.html`) combining a real-time **Three.js WebGL Spatial Data Cosmos**, a **3D Isometric Mechanical Keyboard** spelling `PORTFOLIO`, **3D Holographic Tilt Cards**, and **Interactive DAX What-If Parameter Simulators** across all 4 Power BI case studies.

**Personal use only. Not for sale.**

---

## ✨ Key 3D & Interactive Features Completed

1. **Real-Time WebGL 3D Spatial Data Cosmos (`js/scene3d.js`)**:
   - Powered by Three.js with automatic 2D Canvas fallback.
   - Renders a 260-node Star Schema particle constellation in Cerulean (`#00B0EB`) and Neon Rose (`#FF2D95`), rotating wireframe icosahedrons/octahedrons, a 3D analytical bar cluster in deep space, and a perspective floor grid that reacts to pointer movement and scroll depth.

2. **3D Isometric Mechanical Keyboard Rig (`index.html`, `style.css`, `js/scene3d.js`)**:
   - Extruded aluminum keyboard deck (`SIDDHARTH // ANALYTICS-MK1`) with neon underglow, corner hardware screws, and multi-layered 3D keycaps spelling `P-O-R-T-F-O-L-I-O` + `LET'S TALK`.
   - **3D Gimbal Camera Switcher**: Toggle between *Isometric 3D*, *Deep Sculpt*, and *Top-Down* camera perspectives, plus live pointer-reactive 3D gimbal tilt.
   - **Physical Keyboard Typing & Web Audio Synthesizer**: Press `P`, `O`, `R`, `T`, `F`, `L`, `I`, or `Enter` on your physical keyboard (or click any key) to depress the 3D keycap and hear a synthesized mechanical key switch sound (`SFX ON / OFF` toggle in header).

3. **3D Holographic Tilt & Glare Cards (`[data-tilt-3d]`)**:
   - Every dashboard card, metric card, competence layer card, and internship card responds to cursor position with 3D perspective rotation (`rotateX`, `rotateY`) and a dynamic radial specular glare overlay.

4. **High-Resolution Procedural Power BI Dashboard Render Engine (`projects-data.js`)**:
   - All 15 dashboard pages across the 4 case studies render crisp, executive-grade Power BI vector dashboards (complete with DAX formulas, KPI cards, multi-channel attribution bars, M0–M6 cohort heatmaps, Bhubaneswar GIS route telemetry, and Myntra price elasticity curves).

5. **Interactive DAX What-If Simulators (`projects.html`, `projects.js`)**:
   - Each of the 4 case studies on `projects.html` features a live interactive DAX What-If slider that recalculates projected business KPIs in real time:
     - **1. Marketing ROI**: Reallocate High-Intent Search Budget (%) → updates Projected Campaign ROAS, Profit Margin, and Blended CAC Reduction. Includes direct launcher for the **Live Streamlit App** (`https://market-roi-analysis-jiwza9dmpsga95ee2f3hz4.streamlit.app/`) and Google Drive PDF report.
     - **2. Indian Hair Growth Analysis**: Subscription Regimen Reminder Uplift (%) → updates M3 Cohort Retention, Repeat Purchase Lift, and 6M Customer LTV.
     - **3. Bhubaneswar Traffic & Public Transport Demand**: Peak-Hour Express Fleet Frequency Boost (%) → updates Corridor Congestion Drop, Avg Commuter Wait Time, and Fleet Load Balancing Score.
     - **4. Myntra Fashion Analysis**: Promotional Discount Band (%) → updates SKU Sell-Through Velocity, Net Merchandising Margin, and Expected Buyer Sentiment around the 45% sweet spot.

6. **3D Multi-Page Dashboard Inspector Modal (`project-viewer.js`)**:
   - Click **3D Quick Inspect** on the homepage or any Bento dashboard page on `projects.html` to open the full-screen multi-page inspector with quick-jump navigation pills and direct PDF / Streamlit launchers.

---

## 📂 Project Entry Paths & Structure

- `index.html` — Main 3D Portfolio homepage (Hero 3D Mechanical Keyboard, Executive Telemetry Strip, Featured Dashboards 3D Showcase, Spatial Competence Cube, Internship at Techsofin / Let's DriEV, Contact & Social links).
- `projects.html` — Dedicated 3D Power BI Case Studies & Interactive Simulators page (3D Competence Matrix, Quick-Jump Case Study Bar, 2×2 3D Project Grid with live DAX What-If sliders and Bento galleries).
- `js/scene3d.js` — Three.js WebGL Data Cosmos, 3D Keyboard Gimbal controller, Universal 3D Card Tilt & Glare physics, and Web Audio mechanical key synthesizer.
- `projects-data.js` — Centralized configuration for all 4 Power BI projects, DAX simulator models, and procedural high-resolution SVG dashboard generator.
- `project-viewer.js` — Full-resolution multi-page modal viewer with page jump pills.
- `script.js` — Homepage controller, `CONTACT_EMAIL` configuration (`pattnaiksiddharth1@gmail.com`), key dialogs, physical keyboard listener, and marquee builder.
- `projects.js` — Projects page renderer, DAX What-If slider engine, and Streamlit/PDF choice modal.
- `style.css` & `projects.css` — Unified Jet Black (`#07080C`), Cerulean (`#00B0EB` / `#007BA7`), and Neon Rose (`#FF2D95`) 3D glassmorphism styling.

---

## 🚀 Run Locally

Open `index.html` directly in a browser or serve the folder locally:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.
