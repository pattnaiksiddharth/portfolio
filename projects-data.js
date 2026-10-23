/* projects-data.js - Centralized Power BI Project Configuration + High-Resolution SVG Dashboard Render Engine */

(function () {
  "use strict";

  // High-resolution procedural SVG dashboard generator so every dashboard page looks like a crisp, authentic Power BI executive report even offline or without local image folders.
  function generateDashboardSvgUrl(projectKey, pageIndex, heading, caption, themeColor, secondaryColor, kpis, chartType) {
    const k1 = kpis[0] || { label: "TOTAL REVENUE", val: "$4.82M", delta: "+24.6% YoY" };
    const k2 = kpis[1] || { label: "BLENDED ROAS", val: "3.42x", delta: "+0.6x Target" };
    const k3 = kpis[2] || { label: "CONVERSION RATE", val: "4.85%", delta: "+1.12% MoM" };
    const k4 = kpis[3] || { label: "NET EFFICIENCY", val: "94.2%", delta: "Optimal Tier" };

    let mainVisual = "";
    if (chartType === "bars") {
      mainVisual = `
        <g transform="translate(50, 235)">
          <rect width="680" height="330" rx="14" fill="#101522" stroke="rgba(255,255,255,0.09)" stroke-width="1.5"/>
          <text x="26" y="36" fill="#FFFFFF" font-family="Inter, sans-serif" font-size="15" font-weight="700">Multi-Channel Attribution &amp; Spend Efficiency</text>
          <text x="26" y="56" fill="#94A3B8" font-family="Inter, sans-serif" font-size="11">DAX Measure: CALCULATE([Total Revenue], ALLEXCEPT(Channels, Channels[Name]))</text>
          <!-- Grid lines -->
          <line x1="60" y1="90" x2="640" y2="90" stroke="rgba(255,255,255,0.05)" stroke-dasharray="4 4"/>
          <line x1="60" y1="145" x2="640" y2="145" stroke="rgba(255,255,255,0.05)" stroke-dasharray="4 4"/>
          <line x1="60" y1="200" x2="640" y2="200" stroke="rgba(255,255,255,0.05)" stroke-dasharray="4 4"/>
          <line x1="60" y1="255" x2="640" y2="255" stroke="rgba(255,255,255,0.12)"/>
          <!-- Bars -->
          <g transform="translate(85, 0)">
            <rect x="0" y="105" width="44" height="150" rx="6" fill="url(#gradPrimary)"/>
            <rect x="50" y="135" width="44" height="120" rx="6" fill="url(#gradSecondary)" opacity="0.85"/>
            <text x="47" y="278" fill="#CBD5E1" font-family="Inter, sans-serif" font-size="11" text-anchor="middle">Google Search</text>

            <rect x="135" y="85" width="44" height="170" rx="6" fill="url(#gradPrimary)"/>
            <rect x="185" y="120" width="44" height="135" rx="6" fill="url(#gradSecondary)" opacity="0.85"/>
            <text x="182" y="278" fill="#CBD5E1" font-family="Inter, sans-serif" font-size="11" text-anchor="middle">Meta Ads</text>

            <rect x="270" y="125" width="44" height="130" rx="6" fill="url(#gradPrimary)"/>
            <rect x="320" y="155" width="44" height="100" rx="6" fill="url(#gradSecondary)" opacity="0.85"/>
            <text x="317" y="278" fill="#CBD5E1" font-family="Inter, sans-serif" font-size="11" text-anchor="middle">YouTube Video</text>

            <rect x="405" y="95" width="44" height="160" rx="6" fill="url(#gradPrimary)"/>
            <rect x="455" y="150" width="44" height="105" rx="6" fill="url(#gradSecondary)" opacity="0.85"/>
            <text x="452" y="278" fill="#CBD5E1" font-family="Inter, sans-serif" font-size="11" text-anchor="middle">Organic / SEO</text>
          </g>
          <!-- Trend overlay curve -->
          <path d="M 130 120 C 210 75, 290 95, 400 115 C 470 125, 530 85, 585 75" fill="none" stroke="#38BDF8" stroke-width="3.5" stroke-linecap="round"/>
          <circle cx="130" cy="120" r="5" fill="#0A0A0A" stroke="#38BDF8" stroke-width="3"/>
          <circle cx="265" cy="90" r="5" fill="#0A0A0A" stroke="#38BDF8" stroke-width="3"/>
          <circle cx="400" cy="115" r="5" fill="#0A0A0A" stroke="#38BDF8" stroke-width="3"/>
          <circle cx="585" cy="75" r="5" fill="#0A0A0A" stroke="#38BDF8" stroke-width="3"/>
        </g>
      `;
    } else if (chartType === "cohort") {
      mainVisual = `
        <g transform="translate(50, 235)">
          <rect width="680" height="330" rx="14" fill="#101522" stroke="rgba(255,255,255,0.09)" stroke-width="1.5"/>
          <text x="26" y="36" fill="#FFFFFF" font-family="Inter, sans-serif" font-size="15" font-weight="700">Customer Retention Cohort Heatmap (M0 – M6)</text>
          <text x="26" y="56" fill="#94A3B8" font-family="Inter, sans-serif" font-size="11">Monthly Repeat Order Survival Matrix Across D2C Hair Care Segments</text>
          <g transform="translate(26, 80)">
            <!-- Matrix Rows -->
            <g transform="translate(0, 0)">
              <text x="0" y="24" fill="#94A3B8" font-family="Inter, sans-serif" font-size="11" font-weight="600">Jan Cohort</text>
              <rect x="85" y="4" width="78" height="32" rx="6" fill="rgba(0,176,235,0.85)"/><text x="124" y="25" fill="#fff" font-family="Inter" font-size="11" font-weight="700" text-anchor="middle">100%</text>
              <rect x="170" y="4" width="78" height="32" rx="6" fill="rgba(0,176,235,0.68)"/><text x="209" y="25" fill="#fff" font-family="Inter" font-size="11" font-weight="700" text-anchor="middle">76%</text>
              <rect x="255" y="4" width="78" height="32" rx="6" fill="rgba(0,176,235,0.58)"/><text x="294" y="25" fill="#fff" font-family="Inter" font-size="11" font-weight="700" text-anchor="middle">68%</text>
              <rect x="340" y="4" width="78" height="32" rx="6" fill="rgba(255,45,149,0.55)"/><text x="379" y="25" fill="#fff" font-family="Inter" font-size="11" font-weight="700" text-anchor="middle">61%</text>
              <rect x="425" y="4" width="78" height="32" rx="6" fill="rgba(255,45,149,0.45)"/><text x="464" y="25" fill="#fff" font-family="Inter" font-size="11" font-weight="700" text-anchor="middle">54%</text>
              <rect x="510" y="4" width="95" height="32" rx="6" fill="rgba(255,45,149,0.38)"/><text x="557" y="25" fill="#fff" font-family="Inter" font-size="11" font-weight="700" text-anchor="middle">49%</text>
            </g>
            <g transform="translate(0, 44)">
              <text x="0" y="24" fill="#94A3B8" font-family="Inter, sans-serif" font-size="11" font-weight="600">Feb Cohort</text>
              <rect x="85" y="4" width="78" height="32" rx="6" fill="rgba(0,176,235,0.85)"/><text x="124" y="25" fill="#fff" font-family="Inter" font-size="11" font-weight="700" text-anchor="middle">100%</text>
              <rect x="170" y="4" width="78" height="32" rx="6" fill="rgba(0,176,235,0.72)"/><text x="209" y="25" fill="#fff" font-family="Inter" font-size="11" font-weight="700" text-anchor="middle">79%</text>
              <rect x="255" y="4" width="78" height="32" rx="6" fill="rgba(0,176,235,0.62)"/><text x="294" y="25" fill="#fff" font-family="Inter" font-size="11" font-weight="700" text-anchor="middle">71%</text>
              <rect x="340" y="4" width="78" height="32" rx="6" fill="rgba(255,45,149,0.58)"/><text x="379" y="25" fill="#fff" font-family="Inter" font-size="11" font-weight="700" text-anchor="middle">64%</text>
              <rect x="425" y="4" width="78" height="32" rx="6" fill="rgba(255,45,149,0.48)"/><text x="464" y="25" fill="#fff" font-family="Inter" font-size="11" font-weight="700" text-anchor="middle">57%</text>
              <rect x="510" y="4" width="95" height="32" rx="6" fill="rgba(255,45,149,0.42)"/><text x="557" y="25" fill="#fff" font-family="Inter" font-size="11" font-weight="700" text-anchor="middle">52%</text>
            </g>
            <g transform="translate(0, 88)">
              <text x="0" y="24" fill="#94A3B8" font-family="Inter, sans-serif" font-size="11" font-weight="600">Mar Cohort</text>
              <rect x="85" y="4" width="78" height="32" rx="6" fill="rgba(0,176,235,0.85)"/><text x="124" y="25" fill="#fff" font-family="Inter" font-size="11" font-weight="700" text-anchor="middle">100%</text>
              <rect x="170" y="4" width="78" height="32" rx="6" fill="rgba(0,176,235,0.74)"/><text x="209" y="25" fill="#fff" font-family="Inter" font-size="11" font-weight="700" text-anchor="middle">81%</text>
              <rect x="255" y="4" width="78" height="32" rx="6" fill="rgba(0,176,235,0.64)"/><text x="294" y="25" fill="#fff" font-family="Inter" font-size="11" font-weight="700" text-anchor="middle">72%</text>
              <rect x="340" y="4" width="78" height="32" rx="6" fill="rgba(255,45,149,0.60)"/><text x="379" y="25" fill="#fff" font-family="Inter" font-size="11" font-weight="700" text-anchor="middle">66%</text>
              <rect x="425" y="4" width="78" height="32" rx="6" fill="rgba(255,45,149,0.50)"/><text x="464" y="25" fill="#fff" font-family="Inter" font-size="11" font-weight="700" text-anchor="middle">59%</text>
            </g>
            <g transform="translate(0, 132)">
              <text x="0" y="24" fill="#94A3B8" font-family="Inter, sans-serif" font-size="11" font-weight="600">Apr Cohort</text>
              <rect x="85" y="4" width="78" height="32" rx="6" fill="rgba(0,176,235,0.85)"/><text x="124" y="25" fill="#fff" font-family="Inter" font-size="11" font-weight="700" text-anchor="middle">100%</text>
              <rect x="170" y="4" width="78" height="32" rx="6" fill="rgba(0,176,235,0.78)"/><text x="209" y="25" fill="#fff" font-family="Inter" font-size="11" font-weight="700" text-anchor="middle">84%</text>
              <rect x="255" y="4" width="78" height="32" rx="6" fill="rgba(0,176,235,0.68)"/><text x="294" y="25" fill="#fff" font-family="Inter" font-size="11" font-weight="700" text-anchor="middle">75%</text>
              <rect x="340" y="4" width="78" height="32" rx="6" fill="rgba(255,45,149,0.65)"/><text x="379" y="25" fill="#fff" font-family="Inter" font-size="11" font-weight="700" text-anchor="middle">69%</text>
            </g>
            <g transform="translate(0, 176)">
              <text x="0" y="24" fill="#94A3B8" font-family="Inter, sans-serif" font-size="11" font-weight="600">May Cohort</text>
              <rect x="85" y="4" width="78" height="32" rx="6" fill="rgba(0,176,235,0.85)"/><text x="124" y="25" fill="#fff" font-family="Inter" font-size="11" font-weight="700" text-anchor="middle">100%</text>
              <rect x="170" y="4" width="78" height="32" rx="6" fill="rgba(0,176,235,0.80)"/><text x="209" y="25" fill="#fff" font-family="Inter" font-size="11" font-weight="700" text-anchor="middle">86%</text>
              <rect x="255" y="4" width="78" height="32" rx="6" fill="rgba(255,45,149,0.72)"/><text x="294" y="25" fill="#fff" font-family="Inter" font-size="11" font-weight="700" text-anchor="middle">78%</text>
            </g>
          </g>
        </g>
      `;
    } else if (chartType === "map") {
      mainVisual = `
        <g transform="translate(50, 235)">
          <rect width="680" height="330" rx="14" fill="#101522" stroke="rgba(255,255,255,0.09)" stroke-width="1.5"/>
          <text x="26" y="36" fill="#FFFFFF" font-family="Inter, sans-serif" font-size="15" font-weight="700">Bhubaneswar Smart Transit Telemetry &amp; Corridor Bottlenecks</text>
          <text x="26" y="56" fill="#94A3B8" font-family="Inter, sans-serif" font-size="11">Real-Time GIS Route Load &amp; Peak-Hour Demand Forecast Curve</text>
          <!-- Stylized GIS Network Map + Area Wave -->
          <path d="M 55 245 Q 160 110, 290 185 T 510 120 T 635 170 L 635 280 L 55 280 Z" fill="url(#gradPrimary)" opacity="0.28"/>
          <path d="M 55 245 Q 160 110, 290 185 T 510 120 T 635 170" fill="none" stroke="#00B0EB" stroke-width="3.5"/>
          <path d="M 55 265 Q 190 175, 320 210 T 520 165 T 635 135" fill="none" stroke="#FF2D95" stroke-width="3" stroke-dasharray="6 4"/>
          <!-- Corridor Nodes -->
          <circle cx="160" cy="152" r="9" fill="rgba(255,45,149,0.25)" stroke="#FF2D95" stroke-width="2.5"/>
          <text x="160" y="134" fill="#FFF" font-family="Inter" font-size="10" font-weight="700" text-anchor="middle">Jaydev Vihar (Peak)</text>

          <circle cx="290" cy="185" r="8" fill="rgba(0,176,235,0.25)" stroke="#00B0EB" stroke-width="2.5"/>
          <text x="290" y="168" fill="#CBD5E1" font-family="Inter" font-size="10" font-weight="600" text-anchor="middle">Master Canteen</text>

          <circle cx="435" cy="142" r="9" fill="rgba(255,45,149,0.25)" stroke="#FF2D95" stroke-width="2.5"/>
          <text x="435" y="124" fill="#FFF" font-family="Inter" font-size="10" font-weight="700" text-anchor="middle">Patia / Infocity</text>

          <circle cx="565" cy="148" r="8" fill="rgba(0,176,235,0.25)" stroke="#00B0EB" stroke-width="2.5"/>
          <text x="565" y="130" fill="#CBD5E1" font-family="Inter" font-size="10" font-weight="600" text-anchor="middle">Khandagiri</text>
        </g>
      `;
    } else {
      mainVisual = `
        <g transform="translate(50, 235)">
          <rect width="680" height="330" rx="14" fill="#101522" stroke="rgba(255,255,255,0.09)" stroke-width="1.5"/>
          <text x="26" y="36" fill="#FFFFFF" font-family="Inter, sans-serif" font-size="15" font-weight="700">Price Elasticity Curve vs. Discount Sweet-Spot Matrix</text>
          <text x="26" y="56" fill="#94A3B8" font-family="Inter, sans-serif" font-size="11">50,000+ Apparel SKUs Evaluated by Discount Band, Rating Velocity &amp; Margin</text>
          <!-- Scatter / Bubble + Elasticity Curve -->
          <line x1="60" y1="265" x2="640" y2="265" stroke="rgba(255,255,255,0.12)"/>
          <line x1="60" y1="90" x2="60" y2="265" stroke="rgba(255,255,255,0.12)"/>
          <path d="M 80 235 C 180 215, 270 105, 385 102 C 485 100, 560 165, 625 210" fill="none" stroke="#FF2D95" stroke-width="4"/>
          <circle cx="145" cy="210" r="14" fill="rgba(0,176,235,0.45)" stroke="#00B0EB" stroke-width="2"/>
          <circle cx="235" cy="155" r="20" fill="rgba(0,176,235,0.55)" stroke="#00B0EB" stroke-width="2"/>
          <circle cx="365" cy="104" r="26" fill="rgba(255,45,149,0.65)" stroke="#FF2D95" stroke-width="3"/>
          <text x="365" y="68" fill="#FF2D95" font-family="Inter" font-size="11" font-weight="800" text-anchor="middle">45% Discount Sweet Spot</text>
          <circle cx="485" cy="138" r="18" fill="rgba(0,176,235,0.5)" stroke="#00B0EB" stroke-width="2"/>
          <circle cx="575" cy="188" r="13" fill="rgba(0,176,235,0.35)" stroke="#00B0EB" stroke-width="2"/>
        </g>
      `;
    }

    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1120 630" width="1120" height="630">
      <defs>
        <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#07090E"/>
          <stop offset="55%" stop-color="#0C1220"/>
          <stop offset="100%" stop-color="#090D16"/>
        </linearGradient>
        <linearGradient id="gradPrimary" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="${themeColor}"/>
          <stop offset="100%" stop-color="#004E6B"/>
        </linearGradient>
        <linearGradient id="gradSecondary" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="${secondaryColor}"/>
          <stop offset="100%" stop-color="#7A0B43"/>
        </linearGradient>
        <radialGradient id="glowA" cx="85%" cy="15%" r="45%">
          <stop offset="0%" stop-color="${secondaryColor}" stop-opacity="0.22"/>
          <stop offset="100%" stop-color="${secondaryColor}" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="glowB" cx="15%" cy="85%" r="50%">
          <stop offset="0%" stop-color="${themeColor}" stop-opacity="0.24"/>
          <stop offset="100%" stop-color="${themeColor}" stop-opacity="0"/>
        </radialGradient>
      </defs>

      <!-- Canvas Background -->
      <rect width="1120" height="630" fill="url(#bgGrad)"/>
      <rect width="1120" height="630" fill="url(#glowA)"/>
      <rect width="1120" height="630" fill="url(#glowB)"/>

      <!-- Top Power BI Executive Header Bar -->
      <rect x="0" y="0" width="1120" height="76" fill="#0B0F1A" opacity="0.95"/>
      <line x1="0" y1="76" x2="1120" y2="76" stroke="rgba(255,255,255,0.08)" stroke-width="1.5"/>
      <rect x="28" y="20" width="10" height="36" rx="5" fill="${themeColor}"/>
      <text x="50" y="39" fill="#FFFFFF" font-family="Satoshi, Inter, sans-serif" font-size="19" font-weight="800">${heading}</text>
      <text x="50" y="58" fill="#94A3B8" font-family="Inter, sans-serif" font-size="12">${caption}</text>

      <!-- Live DAX Pill -->
      <rect x="910" y="22" width="180" height="32" rx="16" fill="rgba(0,176,235,0.12)" stroke="${themeColor}" stroke-width="1"/>
      <circle cx="930" cy="38" r="4.5" fill="${themeColor}"/>
      <text x="944" y="42" fill="#E0F2FE" font-family="Inter, sans-serif" font-size="11" font-weight="700">POWER BI • PAGE 0${pageIndex}</text>

      <!-- 4 Executive KPI Cards Row -->
      <g transform="translate(50, 102)">
        <g transform="translate(0, 0)">
          <rect width="238" height="108" rx="12" fill="#101522" stroke="rgba(255,255,255,0.08)" stroke-width="1.5"/>
          <rect x="0" y="0" width="238" height="3" rx="1.5" fill="${themeColor}"/>
          <text x="20" y="30" fill="#94A3B8" font-family="Inter, sans-serif" font-size="10.5" font-weight="700" letter-spacing="0.08em">${k1.label}</text>
          <text x="20" y="68" fill="#FFFFFF" font-family="Satoshi, Inter, sans-serif" font-size="29" font-weight="900">${k1.val}</text>
          <text x="20" y="92" fill="#38BDF8" font-family="Inter, sans-serif" font-size="11.5" font-weight="600">▲ ${k1.delta}</text>
        </g>
        <g transform="translate(260, 0)">
          <rect width="238" height="108" rx="12" fill="#101522" stroke="rgba(255,255,255,0.08)" stroke-width="1.5"/>
          <rect x="0" y="0" width="238" height="3" rx="1.5" fill="${secondaryColor}"/>
          <text x="20" y="30" fill="#94A3B8" font-family="Inter, sans-serif" font-size="10.5" font-weight="700" letter-spacing="0.08em">${k2.label}</text>
          <text x="20" y="68" fill="#FFFFFF" font-family="Satoshi, Inter, sans-serif" font-size="29" font-weight="900">${k2.val}</text>
          <text x="20" y="92" fill="#FF5CAE" font-family="Inter, sans-serif" font-size="11.5" font-weight="600">▲ ${k2.delta}</text>
        </g>
        <g transform="translate(520, 0)">
          <rect width="238" height="108" rx="12" fill="#101522" stroke="rgba(255,255,255,0.08)" stroke-width="1.5"/>
          <rect x="0" y="0" width="238" height="3" rx="1.5" fill="${themeColor}"/>
          <text x="20" y="30" fill="#94A3B8" font-family="Inter, sans-serif" font-size="10.5" font-weight="700" letter-spacing="0.08em">${k3.label}</text>
          <text x="20" y="68" fill="#FFFFFF" font-family="Satoshi, Inter, sans-serif" font-size="29" font-weight="900">${k3.val}</text>
          <text x="20" y="92" fill="#38BDF8" font-family="Inter, sans-serif" font-size="11.5" font-weight="600">▲ ${k3.delta}</text>
        </g>
        <g transform="translate(780, 0)">
          <rect width="240" height="108" rx="12" fill="#101522" stroke="rgba(255,255,255,0.08)" stroke-width="1.5"/>
          <rect x="0" y="0" width="240" height="3" rx="1.5" fill="${secondaryColor}"/>
          <text x="20" y="30" fill="#94A3B8" font-family="Inter, sans-serif" font-size="10.5" font-weight="700" letter-spacing="0.08em">${k4.label}</text>
          <text x="20" y="68" fill="#FFFFFF" font-family="Satoshi, Inter, sans-serif" font-size="29" font-weight="900">${k4.val}</text>
          <text x="20" y="92" fill="#FF5CAE" font-family="Inter, sans-serif" font-size="11.5" font-weight="600">★ ${k4.delta}</text>
        </g>
      </g>

      <!-- Main Visual Canvas Left -->
      ${mainVisual}

      <!-- Right Decomposition / Donut Card -->
      <g transform="translate(755, 235)">
        <rect width="315" height="330" rx="14" fill="#101522" stroke="rgba(255,255,255,0.09)" stroke-width="1.5"/>
        <text x="24" y="36" fill="#FFFFFF" font-family="Inter, sans-serif" font-size="15" font-weight="700">Segment Share &amp; Drivers</text>
        <text x="24" y="55" fill="#94A3B8" font-family="Inter, sans-serif" font-size="11">Star Schema Decomposition</text>

        <!-- Donut Ring -->
        <circle cx="157" cy="148" r="56" fill="none" stroke="#1E293B" stroke-width="18"/>
        <circle cx="157" cy="148" r="56" fill="none" stroke="${themeColor}" stroke-width="18" stroke-dasharray="210 360" stroke-linecap="round" transform="rotate(-90 157 148)"/>
        <circle cx="157" cy="148" r="56" fill="none" stroke="${secondaryColor}" stroke-width="18" stroke-dasharray="95 360" stroke-dashoffset="-218" stroke-linecap="round" transform="rotate(-90 157 148)"/>
        <text x="157" y="145" fill="#FFFFFF" font-family="Satoshi, Inter, sans-serif" font-size="20" font-weight="900" text-anchor="middle">${k2.val}</text>
        <text x="157" y="163" fill="#94A3B8" font-family="Inter, sans-serif" font-size="10" text-anchor="middle">KEY INDEX</text>

        <!-- Legend Bars -->
        <g transform="translate(24, 232)">
          <rect x="0" y="0" width="267" height="8" rx="4" fill="#1E293B"/>
          <rect x="0" y="0" width="188" height="8" rx="4" fill="${themeColor}"/>
          <text x="0" y="24" fill="#CBD5E1" font-family="Inter, sans-serif" font-size="11" font-weight="600">Primary High-Yield Segment (70%)</text>

          <rect x="0" y="42" width="267" height="8" rx="4" fill="#1E293B"/>
          <rect x="0" y="42" width="135" height="8" rx="4" fill="${secondaryColor}"/>
          <text x="0" y="66" fill="#CBD5E1" font-family="Inter, sans-serif" font-size="11" font-weight="600">Secondary Growth Drivers (30%)</text>
        </g>
      </g>

      <!-- Bottom Status Footer -->
      <text x="50" y="602" fill="#64748B" font-family="Inter, sans-serif" font-size="11">SIDDHARTH • POWER BI EXECUTIVE ANALYTICS SUITE • STAR SCHEMA &amp; DAX ENGINE</text>
      <text x="1070" y="602" fill="#38BDF8" font-family="Inter, sans-serif" font-size="11" font-weight="700" text-anchor="end">INTERACTIVE CASE STUDY</text>
    </svg>`;

    return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
  }

  const PROJECTS_DATA = [
    {
      id: "marketing-roi",
      title: "1. Marketing ROI",
      displayName: "Marketing ROI",
      category: "Growth & Attribution BI",
      featured: true,
      subtitle: "Multi-Channel Campaign Performance & Budget Optimization",
      description: "End-to-end Power BI analytics measuring multi-channel campaign ROI, CAC, customer LTV, and profit-loss budget scenario forecasting to empower executive growth decisions.",
      folder: "1. Marketing ROI",
      coverImage: "1. Marketing ROI/1. Overview.png",
      fallbackCover: "1. Marketing ROI/1. Overview.png",
      screenshots: [
        {
          src: "1. Marketing ROI/1. Overview.png",
          fallbackSrc: "1. Marketing ROI/1. Overview.png",
          heading: "1. Overview",
          title: "1. Overview",
          caption: "High-level KPI performance tracking total revenue, spend, and blended ROAS."
        },
        {
          src: "1. Marketing ROI/2. Channel Performance.png",
          fallbackSrc: "1. Marketing ROI/2. Channel Performance.png",
          heading: "2. Channel Performance",
          title: "2. Channel Performance",
          caption: "Cross-channel attribution breakdown across Google Ads, Meta, and Organic search."
        },
        {
          src: "1. Marketing ROI/3. Campaign Analysis.png",
          fallbackSrc: "1. Marketing ROI/3. Campaign Analysis.png",
          heading: "3. Campaign Analysis",
          title: "3. Campaign Analysis",
          caption: "Granular cohort and campaign level efficiency metrics with CTR and conversion funnels."
        },
        {
          src: "1. Marketing ROI/4. Profit & Loss.png",
          fallbackSrc: "1. Marketing ROI/4. Profit & Loss.png",
          heading: "4. Profit & Loss",
          title: "4. Profit & Loss",
          caption: "Gross profit margins, CAC attribution, and net contribution across business units."
        },
        {
          src: "1. Marketing ROI/5. Budget Scenario.png",
          fallbackSrc: "1. Marketing ROI/5. Budget Scenario.png",
          heading: "5. Budget Scenario",
          title: "5. Budget Scenario",
          caption: "Interactive what-if parameters for dynamic ad-spend reallocation and projected returns."
        }
      ],
      pdfLink: "https://drive.google.com/file/d/15rBanqRPwszG8kBhIeRGJS031AXZBQ-b/preview",
      githubLink: "https://github.com/pattnaiksiddharth/market-roi-analysis",
      streamlitLink: "https://market-roi-analysis-jiwza9dmpsga95ee2f3hz4.streamlit.app/",
      tools: [
        { name: "Power BI Desktop", icon: "powerbi" },
        { name: "Power BI Service", icon: "powerbi" },
        { name: "Microsoft Excel", icon: "excel" },
        { name: "Power Query", icon: "powerquery" },
        { name: "DAX Studio", icon: "daxstudio" },
        { name: "Google Drive", icon: "gdrive" }
      ],
      technologies: [
        { name: "DAX Measures", icon: "code" },
        { name: "SQL", icon: "database" },
        { name: "Star Schema Modeling", icon: "schema" },
        { name: "ETL Pipelines", icon: "etl" },
        { name: "What-If Parameters", icon: "sliders" },
        { name: "P&L Scenario Modeling", icon: "trending" }
      ],
      insights: [
        { value: 3.4, prefix: "", suffix: "x", label: "Average Campaign ROAS" },
        { value: 24, prefix: "+", suffix: "%", label: "YoY Profit Margin Growth" },
        { value: 38, prefix: "-", suffix: "%", label: "Reduction in Blended CAC" }
      ],
      simulator: {
        paramLabel: "Reallocate High-Intent Search Budget (%)",
        min: -20,
        max: 40,
        step: 5,
        defaultVal: 15,
        compute: function (v) {
          const roas = (3.4 + v * 0.018).toFixed(2) + "x";
          const margin = "+" + Math.round(24 + v * 0.35) + "%";
          const cac = "-" + Math.round(38 + v * 0.25) + "%";
          return [
            { label: "Projected Campaign ROAS", val: roas },
            { label: "Projected Profit Margin", val: margin },
            { label: "Blended CAC Reduction", val: cac }
          ];
        }
      }
    },
    {
      id: "indian-hair-growth",
      title: "2. Indian HAir Growth Analysis",
      displayName: "Indian HAir Growth Analysis",
      category: "D2C Retention & Cohort BI",
      featured: true,
      subtitle: "D2C Market Diagnostics, Retention Cohorts & Consumer Behavior",
      description: "Comprehensive market diagnostic and customer funnel intelligence analyzing retention cohorts, consumer churn, and product benchmarking in India's hair care sector.",
      folder: "2. Indian HAir Growth Analysis",
      coverImage: "2. Indian HAir Growth Analysis/1. Market Overview.png",
      fallbackCover: "2. Indian HAir Growth Analysis/1. Market Overview.png",
      screenshots: [
        {
          src: "2. Indian HAir Growth Analysis/1. Market Overview.png",
          fallbackSrc: "2. Indian HAir Growth Analysis/1. Market Overview.png",
          heading: "1. Market Overview",
          title: "1. Market Overview",
          caption: "Industry TAM, segment sizing, and regional market penetration breakdown."
        },
        {
          src: "2. Indian HAir Growth Analysis/2. Funnel & Customer Behavior.png",
          fallbackSrc: "2. Indian HAir Growth Analysis/2. Funnel & Customer Behavior.png",
          heading: "2. Funnel & Customer Behavior",
          title: "2. Funnel & Customer Behavior",
          caption: "Stage-by-stage drop-off analytics from discovery to checkout and repeat orders."
        },
        {
          src: "2. Indian HAir Growth Analysis/3. Cohort & Retention.png",
          fallbackSrc: "2. Indian HAir Growth Analysis/3. Cohort & Retention.png",
          heading: "3. Cohort & Retention",
          title: "3. Cohort & Retention",
          caption: "Monthly customer cohort heatmap visualizing repeat purchase rate and churn velocity."
        },
        {
          src: "2. Indian HAir Growth Analysis/4. Product Benchmarking & Key Insights.png",
          fallbackSrc: "2. Indian HAir Growth Analysis/4. Product Benchmarking & Key Insights.png",
          heading: "4. Product Benchmarking & Key Insights",
          title: "4. Product Benchmarking & Key Insights",
          caption: "Cross-SKU efficacy, customer review sentiments, and pricing tier viability."
        }
      ],
      pdfLink: "https://drive.google.com/file/d/1jNQgoPNdc4WJ-oFfGSU9nx6ORtpsaRnE/preview",
      githubLink: "https://github.com/pattnaiksiddharth/indian-hair-market-analysis",
      tools: [
        { name: "Power BI Desktop", icon: "powerbi" },
        { name: "Python", icon: "python" },
        { name: "Microsoft Excel", icon: "excel" },
        { name: "Power Query", icon: "powerquery" },
        { name: "Google Drive", icon: "gdrive" }
      ],
      technologies: [
        { name: "DAX", icon: "code" },
        { name: "Cohort Analysis", icon: "calendar" },
        { name: "Funnel Analytics", icon: "funnel" },
        { name: "Exploratory Data Analysis", icon: "search" },
        { name: "Customer Churn Modeling", icon: "trending" }
      ],
      insights: [
        { value: 68, prefix: "", suffix: "%", label: "M3 Customer Retention Rate" },
        { value: 42, prefix: "+", suffix: "%", label: "Repeat Purchase Frequency" },
        { value: 15, prefix: "", suffix: "k+", label: "Consumer Profiles Analyzed" }
      ],
      simulator: {
        paramLabel: "Subscription Regimen Reminder Uplift (%)",
        min: 0,
        max: 30,
        step: 5,
        defaultVal: 10,
        compute: function (v) {
          const m3 = Math.min(89, Math.round(68 + v * 0.55)) + "%";
          const repeat = "+" + Math.round(42 + v * 0.7) + "%";
          const ltv = "₹" + (4250 + v * 65).toLocaleString();
          return [
            { label: "M3 Cohort Retention", val: m3 },
            { label: "Repeat Purchase Lift", val: repeat },
            { label: "Projected 6M Customer LTV", val: ltv }
          ];
        }
      }
    },
    {
      id: "bhubaneswar-transit-demand",
      title: "3. Bhubaneswar - Traffic & Public Transport Demand Dashboard",
      displayName: "Bhubaneswar - Traffic & Public Transport Demand Dashboard",
      category: "Smart City & Geospatial BI",
      featured: true,
      subtitle: "Urban Transit Intelligence, Congestion Heatmaps & Route Optimization",
      description: "Urban mobility intelligence platform tracking peak-hour congestion corridors, route-level ridership bottlenecks, and predictive public transit demand forecasting.",
      folder: "3. Bhubaneswar - Traffic & Public Transport Demand Dashboard",
      coverImage: "3. Bhubaneswar - Traffic & Public Transport Demand Dashboard/1. Key Performance Indicators.png",
      fallbackCover: "3. Bhubaneswar - Traffic & Public Transport Demand Dashboard/1. Key Performance Indicators.png",
      screenshots: [
        {
          src: "3. Bhubaneswar - Traffic & Public Transport Demand Dashboard/1. Key Performance Indicators.png",
          fallbackSrc: "3. Bhubaneswar - Traffic & Public Transport Demand Dashboard/1. Key Performance Indicators.png",
          heading: "1. Key Performance Indicators",
          title: "1. Key Performance Indicators",
          caption: "Fleet telemetry, ridership velocity, peak-hour delay indexes, and fuel utilization."
        },
        {
          src: "3. Bhubaneswar - Traffic & Public Transport Demand Dashboard/2. Congetion Route Analysis.png",
          fallbackSrc: "3. Bhubaneswar - Traffic & Public Transport Demand Dashboard/2. Congetion Route Analysis.png",
          heading: "2. Congetion Route Analysis",
          title: "2. Congetion Route Analysis",
          caption: "GIS-linked route bottleneck identification and intersection queue length telemetry."
        },
        {
          src: "3. Bhubaneswar - Traffic & Public Transport Demand Dashboard/3. Demand Forecasting.png",
          fallbackSrc: "3. Bhubaneswar - Traffic & Public Transport Demand Dashboard/3. Demand Forecasting.png",
          heading: "3. Demand Forecasting",
          title: "3. Demand Forecasting",
          caption: "Time-series ridership prediction model by hour, day of week, and weather conditions."
        }
      ],
      pdfLink: "https://drive.google.com/file/d/1v6XJZyAhxKwrvPMc62WkzeoR_h075hun/preview",
      githubLink: "https://github.com/pattnaiksiddharth/bhubaneswar_urban_mobility",
      tools: [
        { name: "Power BI Desktop", icon: "powerbi" },
        { name: "Microsoft Excel", icon: "excel" },
        { name: "Python", icon: "python" },
        { name: "Power Query", icon: "powerquery" },
        { name: "Geospatial Maps", icon: "map" },
        { name: "Google Drive", icon: "gdrive" }
      ],
      technologies: [
        { name: "DAX Time Intelligence", icon: "code" },
        { name: "Geospatial Analytics", icon: "map" },
        { name: "Time Series Forecasting", icon: "trending" },
        { name: "Capacity Planning", icon: "sliders" },
        { name: "Route Efficiency Scoring", icon: "schema" }
      ],
      insights: [
        { value: 28, prefix: "-", suffix: "%", label: "Peak Corridor Congestion" },
        { value: 94, prefix: "", suffix: "%", label: "Transit Demand Accuracy" },
        { value: 120, prefix: "+", suffix: "km", label: "Monitored Urban Transit Grid" }
      ],
      simulator: {
        paramLabel: "Peak-Hour Express Fleet Frequency Boost (%)",
        min: 0,
        max: 40,
        step: 5,
        defaultVal: 20,
        compute: function (v) {
          const cong = "-" + Math.round(28 + v * 0.4) + "%";
          const wait = Math.max(1.8, (4.2 - v * 0.045)).toFixed(1) + " min";
          const acc = Math.min(98, (94 + v * 0.08)).toFixed(1) + "%";
          return [
            { label: "Corridor Congestion Drop", val: cong },
            { label: "Avg Commuter Wait Time", val: wait },
            { label: "Fleet Load Balancing Score", val: acc }
          ];
        }
      }
    },
    {
      id: "myntra-fashion-analysis",
      title: "4. Myntra Fashion Analysis",
      displayName: "Myntra Fashion Analysis",
      category: "Retail Merchandising & Pricing BI",
      featured: true,
      subtitle: "Brand Pricing Elasticity, Discount Optimization & Catalog Intelligence",
      description: "Deep retail catalog benchmarking evaluating brand pricing elasticity, discount strategies, customer sentiment ratings, and SKU velocity across apparel categories.",
      folder: "4. Myntra Fashion Analysis",
      coverImage: "4. Myntra Fashion Analysis/1. Market Overview.png",
      fallbackCover: "4. Myntra Fashion Analysis/1. Market Overview.png",
      screenshots: [
        {
          src: "4. Myntra Fashion Analysis/1. Market Overview.png",
          fallbackSrc: "4. Myntra Fashion Analysis/1. Market Overview.png",
          heading: "1. Market Overview",
          title: "1. Market Overview",
          caption: "Catalog distribution across apparel categories, sub-brands, and price bands."
        },
        {
          src: "4. Myntra Fashion Analysis/2. Pricing & Branding.png",
          fallbackSrc: "4. Myntra Fashion Analysis/2. Pricing & Branding.png",
          heading: "2. Pricing & Branding",
          title: "2. Pricing & Branding",
          caption: "Discount elasticity curve, MRP vs. selling price spreads, and premium brand pricing."
        },
        {
          src: "4. Myntra Fashion Analysis/3. Rating & Product Attributes.png",
          fallbackSrc: "4. Myntra Fashion Analysis/3. Rating & Product Attributes.png",
          heading: "3. Rating & Product Attributes",
          title: "3. Rating & Product Attributes",
          caption: "Customer review correlation with return rates, fabric attributes, and price points."
        }
      ],
      pdfLink: "https://drive.google.com/file/d/11ZqFBGcf_Q7Tlg8YK_CwVY2WJ8HvxQh6/preview",
      tools: [
        { name: "Power BI Desktop", icon: "powerbi" },
        { name: "Python", icon: "python" },
        { name: "Microsoft Excel", icon: "excel" },
        { name: "Power Query", icon: "powerquery" },
        { name: "Google Drive", icon: "gdrive" }
      ],
      technologies: [
        { name: "DAX Aggregations", icon: "code" },
        { name: "Pricing Elasticity", icon: "trending" },
        { name: "Sentiment Correlation", icon: "search" },
        { name: "Star Schema", icon: "schema" },
        { name: "Retail Merchandising KPI", icon: "sliders" }
      ],
      insights: [
        { value: 45, prefix: "", suffix: "%", label: "Optimal Discount Sweet Spot" },
        { value: 4.3, prefix: "", suffix: "★", label: "Avg High-Volume Brand Rating" },
        { value: 50, prefix: "", suffix: "k+", label: "SKUs Evaluated in Catalog" }
      ],
      simulator: {
        paramLabel: "Promotional Discount Band (%)",
        min: 20,
        max: 65,
        step: 5,
        defaultVal: 45,
        compute: function (v) {
          const distFromSweet = Math.abs(v - 45);
          const velocity = (3.6 - distFromSweet * 0.045).toFixed(2) + "x";
          const margin = Math.max(22, Math.round(58 - v * 0.52)) + "%";
          const rating = v <= 50 ? "4.3★" : "4.1★";
          return [
            { label: "SKU Sell-Through Velocity", val: velocity },
            { label: "Net Merchandising Margin", val: margin },
            { label: "Expected Buyer Sentiment", val: rating }
          ];
        }
      }
    },
    {
      id: "northbridge-banking",
      title: "5. NorthBridge Bank — Data Pipeline",
      displayName: "NorthBridge Bank Data Pipeline",
      category: "Data Engineering & Lakehouse",
      section: "data-engineering",
      featured: true,
      subtitle: "End-to-End Banking Data Pipeline with Multi-System Reconciliation",
      description: "NorthBridge Bank is a fictional retail bank whose data sits in three systems that disagree with each other: core banking, a payment gateway and a general ledger.",
      folder: "NorthBridge Bank - End-to-End Banking Data Pipeline",
      coverImage: "NorthBridge Bank - End-to-End Banking Data Pipeline/coverpage.png",
      fallbackCover: "NorthBridge Bank - End-to-End Banking Data Pipeline/coverpage.png",
      githubLink: "https://github.com/pattnaiksiddharth/northbridge-databricks-pipeline",
      youtubeLink: "https://youtu.be/y1rMyKNMYFY",
      pdfLink: "https://drive.google.com/file/d/145vHR3rSUEvU3nrhOFYvddeuLDsNX1Lz/view?usp=sharing",
      screenshots: [
        {
          src: "NorthBridge Bank - End-to-End Banking Data Pipeline/coverpage.png",
          fallbackSrc: "NorthBridge Bank - End-to-End Banking Data Pipeline/coverpage.png",
          heading: "Project Cover & Architecture",
          title: "Project Cover & Architecture",
          caption: "System overview reconciling Core Banking, Payment Gateway, and General Ledger data."
        },
        {
          src: "NorthBridge Bank - End-to-End Banking Data Pipeline/pipeline_graph.png",
          fallbackSrc: "NorthBridge Bank - End-to-End Banking Data Pipeline/coverpage.png",
          heading: "End-to-End Pipeline DAG",
          title: "End-to-End Pipeline DAG",
          caption: "Multi-stage Medallion ETL pipeline flow from raw ingest to curated gold analytics."
        },
        {
          src: "NorthBridge Bank - End-to-End Banking Data Pipeline/catalog_layout.png",
          fallbackSrc: "NorthBridge Bank - End-to-End Banking Data Pipeline/coverpage.png",
          heading: "Unity Catalog & Schema Hierarchy",
          title: "Unity Catalog & Schema Hierarchy",
          caption: "Governance, lineage, and role-based data catalog layout across bronze, silver, and gold tiers."
        },
        {
          src: "NorthBridge Bank - End-to-End Banking Data Pipeline/workflow_run.png",
          fallbackSrc: "NorthBridge Bank - End-to-End Banking Data Pipeline/coverpage.png",
          heading: "Databricks Automated Workflow",
          title: "Databricks Automated Workflow",
          caption: "Production workflow run tracking execution metrics, task dependencies, and SLAs."
        },
        {
          src: "NorthBridge Bank - End-to-End Banking Data Pipeline/dashboard_recon.png",
          fallbackSrc: "NorthBridge Bank - End-to-End Banking Data Pipeline/coverpage.png",
          heading: "Multi-System Reconciliation Dashboard",
          title: "Multi-System Reconciliation Dashboard",
          caption: "Discrepancy triage comparing core banking ledgers, settlement gateway logs, and books."
        },
        {
          src: "NorthBridge Bank - End-to-End Banking Data Pipeline/dashboard_quality.png",
          fallbackSrc: "NorthBridge Bank - End-to-End Banking Data Pipeline/coverpage.png",
          heading: "Data Quality & Integrity Monitoring",
          title: "Data Quality & Integrity Monitoring",
          caption: "Automated schema validation, anomaly detection, null audits, and volume integrity rules."
        },
        {
          src: "NorthBridge Bank - End-to-End Banking Data Pipeline/dashboard_fraud.png",
          fallbackSrc: "NorthBridge Bank - End-to-End Banking Data Pipeline/coverpage.png",
          heading: "Fraud & Suspicious Transaction Analytics",
          title: "Fraud & Suspicious Transaction Analytics",
          caption: "High-risk velocity patterns, transaction anomalies, and AML alert telemetry."
        },
        {
          src: "NorthBridge Bank - End-to-End Banking Data Pipeline/dashboard_overview.png",
          fallbackSrc: "NorthBridge Bank - End-to-End Banking Data Pipeline/coverpage.png",
          heading: "Executive Operational Overview",
          title: "Executive Operational Overview",
          caption: "Unified banking operations KPI health deck summarizing settlement status and ledger balance."
        },
        {
          src: "NorthBridge Bank - End-to-End Banking Data Pipeline/validation_v1_v2.png",
          fallbackSrc: "NorthBridge Bank - End-to-End Banking Data Pipeline/coverpage.png",
          heading: "Versioned Pipeline Validation & Testing",
          title: "Versioned Pipeline Validation & Testing",
          caption: "Comparison audits validating schema evolution and numerical consistency between pipeline v1 and v2."
        }
      ],
      tools: [
        { name: "Databricks", icon: "database" },
        { name: "Apache Spark", icon: "etl" },
        { name: "Delta Lake", icon: "schema" },
        { name: "Python (PySpark)", icon: "python" },
        { name: "SQL", icon: "database" },
        { name: "GitHub", icon: "code" }
      ],
      technologies: [
        { name: "Medallion Architecture", icon: "schema" },
        { name: "Multi-System Reconciliation", icon: "sliders" },
        { name: "Automated ETL Pipelines", icon: "etl" },
        { name: "Data Quality Auditing", icon: "search" },
        { name: "Fraud Detection Telemetry", icon: "trending" },
        { name: "Unity Catalog Governance", icon: "database" }
      ],
      insights: [
        { value: 3, prefix: "", suffix: " Systems", label: "Reconciled Discrepant Sources" },
        { value: 100, prefix: "", suffix: "%", label: "Automated Lakehouse Pipeline" },
        { value: 9, prefix: "", suffix: " Stages", label: "Validated End-to-End Architecture" }
      ]
    }
  ];

  function getDrivePreviewUrl(url) {
    if (!url) return "#";
    if (url.includes("/preview")) return url;
    return url.replace(/\/view(\?.*)?$/, "/preview");
  }

  if (typeof window !== "undefined") {
    window.PROJECTS_DATA = PROJECTS_DATA;
    window.getDrivePreviewUrl = getDrivePreviewUrl;
  }
  if (typeof module !== "undefined" && module.exports) {
    module.exports = { PROJECTS_DATA, getDrivePreviewUrl };
  }
})();
