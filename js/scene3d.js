/* js/scene3d.js - Interactive 3D Spatial Data Cosmos, 3D Tilt Physics & Mechanical Key Audio Engine */

(function () {
  "use strict";

  // ─── 1. Tactile Mechanical Key Sound Synthesizer (Web Audio API) ──────────
  let audioCtx = null;
  let soundEnabled = true;

  function initAudioContext() {
    if (!audioCtx && (window.AudioContext || window.webkitAudioContext)) {
      try {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      } catch (e) {
        audioCtx = null;
      }
    }
    if (audioCtx && audioCtx.state === "suspended") {
      audioCtx.resume().catch(() => {});
    }
  }

  function playMechanicalThock(pitchBoost) {
    if (!soundEnabled) return;
    initAudioContext();
    if (!audioCtx) return;

    try {
      const now = audioCtx.currentTime;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      const filter = audioCtx.createBiquadFilter();

      osc.type = "triangle";
      const baseFreq = 135 * (pitchBoost || 1);
      osc.frequency.setValueAtTime(baseFreq, now);
      osc.frequency.exponentialRampToValueAtTime(42, now + 0.055);

      filter.type = "lowpass";
      filter.frequency.setValueAtTime(950, now);

      gain.gain.setValueAtTime(0.16, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.065);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start(now);
      osc.stop(now + 0.068);
    } catch (e) {
      // Ignore audio errors when autoplay is restricted
    }
  }

  window.playMechanicalThock = playMechanicalThock;
  window.togglePortfolioSound = function () {
    soundEnabled = !soundEnabled;
    return soundEnabled;
  };

  // ─── 2. Universal 3D Holographic Card Tilt & Glare Engine ────────────────
  function bind3DTiltCards(selector) {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const elements = document.querySelectorAll(selector || "[data-tilt-3d], .preview-card, .intern-card, .project-block, .skills-overview-card, .metric-3d-card");
    elements.forEach((card) => {
      if (card.dataset.tiltBound === "true") return;
      card.dataset.tiltBound = "true";

      // Ensure glare layer exists
      let glare = card.querySelector(".card-3d-glare");
      if (!glare) {
        glare = document.createElement("div");
        glare.className = "card-3d-glare";
        glare.setAttribute("aria-hidden", "true");
        card.appendChild(glare);
      }

      const maxTilt = parseFloat(card.dataset.maxTilt || "7.5");

      card.addEventListener("pointermove", (e) => {
        if (e.pointerType === "touch") return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const pctX = (x / rect.width) - 0.5;
        const pctY = (y / rect.height) - 0.5;

        const rotateY = (pctX * maxTilt * 2).toFixed(2);
        const rotateX = (-pctY * maxTilt * 2).toFixed(2);

        card.style.setProperty("--rx", `${rotateX}deg`);
        card.style.setProperty("--ry", `${rotateY}deg`);
        card.style.setProperty("--gx", `${(pctX + 0.5) * 100}%`);
        card.style.setProperty("--gy", `${(pctY + 0.5) * 100}%`);
        card.classList.add("is-tilting");
      });

      card.addEventListener("pointerleave", () => {
        card.style.setProperty("--rx", "0deg");
        card.style.setProperty("--ry", "0deg");
        card.classList.remove("is-tilting");
      });
    });
  }

  window.bind3DTiltCards = bind3DTiltCards;

  // ─── 3. Interactive 3D Keyboard Chassis Gimbal Rig ───────────────────────
  function init3DKeyboardRig() {
    const stage = document.getElementById("kbStage3D");
    const chassis = document.getElementById("kbChassis3D");
    if (!stage || !chassis) return;

    let baseRx = 18; // Default isometric 3D pitch
    let baseRz = -4; // Subtle sculptural yaw
    let currentRx = baseRx;
    let currentRy = 0;
    let currentRz = baseRz;
    let isDragging = false;
    let lastX = 0;
    let lastY = 0;

    function applyTransform() {
      chassis.style.setProperty("--kb-rx", `${currentRx.toFixed(2)}deg`);
      chassis.style.setProperty("--kb-ry", `${currentRy.toFixed(2)}deg`);
      chassis.style.setProperty("--kb-rz", `${currentRz.toFixed(2)}deg`);
    }

    applyTransform();

    // Pointer hover subtle parallax when not dragging
    stage.addEventListener("pointermove", (e) => {
      if (isDragging) {
        const dx = e.clientX - lastX;
        const dy = e.clientY - lastY;
        lastX = e.clientX;
        lastY = e.clientY;
        currentRy = Math.max(-28, Math.min(28, currentRy + dx * 0.25));
        currentRx = Math.max(4, Math.min(36, currentRx - dy * 0.22));
        applyTransform();
        return;
      }

      if (e.pointerType === "touch") return;
      const rect = stage.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;

      currentRx = baseRx - ny * 10;
      currentRy = nx * 14;
      applyTransform();
    });

    stage.addEventListener("pointerleave", () => {
      if (!isDragging) {
        currentRx = baseRx;
        currentRy = 0;
        currentRz = baseRz;
        applyTransform();
      }
    });

    // View Preset Buttons (Isometric / Top-Down / Dramatic 3D)
    document.querySelectorAll("[data-kb-angle]").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelectorAll("[data-kb-angle]").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        const mode = btn.dataset.kbAngle;
        if (mode === "iso") {
          baseRx = 18;
          baseRz = -4;
          currentRy = 0;
        } else if (mode === "dramatic") {
          baseRx = 28;
          baseRz = -10;
          currentRy = 10;
        } else if (mode === "flat") {
          baseRx = 4;
          baseRz = 0;
          currentRy = 0;
        }
        currentRx = baseRx;
        currentRz = baseRz;
        applyTransform();
        playMechanicalThock(1.2);
      });
    });
  }

  // ─── 4. Three.js WebGL Spatial Data Cosmos Background ────────────────────
  function initWebGLDataCosmos() {
    const canvas = document.getElementById("cosmosCanvas3D");
    if (!canvas) return;

    // Fallback to 2D Canvas if Three.js is not loaded or WebGL is disabled
    if (typeof window.THREE === "undefined") {
      initFallback2DCanvas(canvas);
      return;
    }

    try {
      const THREE = window.THREE;
      const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: true,
        antialias: true,
        powerPreference: "high-performance"
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.setSize(window.innerWidth, window.innerHeight);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        60,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.set(0, 2, 26);

      const rootGroup = new THREE.Group();
      scene.add(rootGroup);

      // Colors matching Siddharth's theme: Cerulean (#00B0EB) + Neon Rose (#FF2D95)
      const colorCyan = new THREE.Color(0x00b0eb);
      const colorRose = new THREE.Color(0xff2d95);
      const colorDeep = new THREE.Color(0x007ba7);

      // 1. Star Schema Data Constellation Nodes (Particles)
      const particleCount = 260;
      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        positions[i3] = (Math.random() - 0.5) * 65;
        positions[i3 + 1] = (Math.random() - 0.5) * 45;
        positions[i3 + 2] = (Math.random() - 0.5) * 35 - 5;

        const mixColor = i % 3 === 0 ? colorRose : (i % 2 === 0 ? colorCyan : colorDeep);
        colors[i3] = mixColor.r;
        colors[i3 + 1] = mixColor.g;
        colors[i3 + 2] = mixColor.b;
      }

      const particleGeo = new THREE.BufferGeometry();
      particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      particleGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

      const particleMat = new THREE.PointsMaterial({
        size: 0.22,
        vertexColors: true,
        transparent: true,
        opacity: 0.75
      });

      const particleSystem = new THREE.Points(particleGeo, particleMat);
      rootGroup.add(particleSystem);

      // 2. Wireframe Holographic Polyhedra (Representing Data Cubes & Star Schemas)
      const shapes = [];
      const icoGeo = new THREE.IcosahedronGeometry(2.6, 1);
      const octGeo = new THREE.OctahedronGeometry(2.0, 0);
      const torusGeo = new THREE.TorusGeometry(3.2, 0.08, 12, 48);

      const matCyanWire = new THREE.MeshBasicMaterial({
        color: 0x00b0eb,
        wireframe: true,
        transparent: true,
        opacity: 0.16
      });
      const matRoseWire = new THREE.MeshBasicMaterial({
        color: 0xff2d95,
        wireframe: true,
        transparent: true,
        opacity: 0.14
      });

      const mesh1 = new THREE.Mesh(icoGeo, matCyanWire);
      mesh1.position.set(-14, 6, -6);
      rootGroup.add(mesh1);
      shapes.push({ mesh: mesh1, rx: 0.003, ry: 0.005 });

      const mesh2 = new THREE.Mesh(octGeo, matRoseWire);
      mesh2.position.set(15, -5, -4);
      rootGroup.add(mesh2);
      shapes.push({ mesh: mesh2, rx: -0.004, ry: 0.006 });

      const mesh3 = new THREE.Mesh(torusGeo, matCyanWire);
      mesh3.position.set(12, 8, -10);
      mesh3.rotation.x = 0.8;
      rootGroup.add(mesh3);
      shapes.push({ mesh: mesh3, rx: 0.002, ry: -0.004 });

      // 3. 3D Analytical Bar Cluster in Deep Space
      const barGroup = new THREE.Group();
      barGroup.position.set(-15, -8, -8);
      barGroup.rotation.y = 0.45;
      barGroup.rotation.x = 0.15;
      const barHeights = [2.2, 3.6, 2.8, 4.8, 6.1];
      barHeights.forEach((h, idx) => {
        const bGeo = new THREE.BoxGeometry(0.65, h, 0.65);
        const bMat = new THREE.MeshBasicMaterial({
          color: idx % 2 === 0 ? 0x00b0eb : 0xff2d95,
          wireframe: true,
          transparent: true,
          opacity: 0.22
        });
        const bar = new THREE.Mesh(bGeo, bMat);
        bar.position.set(idx * 1.05 - 2.1, h / 2, 0);
        barGroup.add(bar);
      });
      rootGroup.add(barGroup);

      // 4. Perspective Floor Grid
      const gridHelper = new THREE.GridHelper(90, 45, 0x007ba7, 0x162032);
      gridHelper.position.y = -13;
      if (gridHelper.material) {
        gridHelper.material.transparent = true;
        gridHelper.material.opacity = 0.22;
      }
      scene.add(gridHelper);

      // Mouse & Scroll Reactivity
      let targetX = 0;
      let targetY = 0;
      let scrollY = window.scrollY || 0;

      window.addEventListener("pointermove", (e) => {
        targetX = (e.clientX / window.innerWidth - 0.5) * 4;
        targetY = -(e.clientY / window.innerHeight - 0.5) * 3;
      }, { passive: true });

      window.addEventListener("scroll", () => {
        scrollY = window.scrollY || 0;
      }, { passive: true });

      window.addEventListener("resize", () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      });

      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      function animate() {
        if (!reduceMotion) {
          requestAnimationFrame(animate);
        }

        particleSystem.rotation.y += 0.0009;
        particleSystem.rotation.x += 0.0003;

        shapes.forEach((s) => {
          s.mesh.rotation.x += s.rx;
          s.mesh.rotation.y += s.ry;
        });

        barGroup.rotation.y = 0.45 + Math.sin(Date.now() * 0.0008) * 0.2;

        // Smooth camera parallax
        camera.position.x += (targetX - camera.position.x) * 0.04;
        camera.position.y += (2 + targetY - scrollY * 0.004 - camera.position.y) * 0.04;
        camera.lookAt(0, -scrollY * 0.002, 0);

        renderer.render(scene, camera);
      }

      animate();
    } catch (err) {
      initFallback2DCanvas(canvas);
    }
  }

  function initFallback2DCanvas(canvas) {
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const nodes = Array.from({ length: 55 }, (_, i) => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      r: Math.random() * 2 + 1,
      c: i % 3 === 0 ? "#FF2D95" : "#00B0EB"
    }));

    window.addEventListener("resize", () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    });

    function draw() {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = n.c;
        ctx.globalAlpha = 0.65;
        ctx.fill();

        for (let j = i + 1; j < nodes.length; j++) {
          const m = nodes[j];
          const dx = n.x - m.x;
          const dy = n.y - m.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(m.x, m.y);
            ctx.strokeStyle = "#00B0EB";
            ctx.globalAlpha = (1 - dist / 130) * 0.14;
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(draw);
    }
    draw();
  }

  // Initialize on DOM ready
  function initAll3D() {
    initWebGLDataCosmos();
    init3DKeyboardRig();
    bind3DTiltCards();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAll3D);
  } else {
    initAll3D();
  }
})();
