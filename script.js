// =============================================================
// Kriti's Birthday Website — script.js
// Vanilla JS only. No dependencies.
// =============================================================

document.addEventListener('DOMContentLoaded', () => {

  /* ---------------------------------------------------------
     0. Ambient background particles (gentle, continuous)
  --------------------------------------------------------- */
  const ambientLayer = document.getElementById('ambientLayer');
  const ambientEmojis = ['❤️', '✨', '💫'];

  function spawnAmbientParticle() {
    const el = document.createElement('span');
    el.className = 'ambient-particle';
    el.textContent = ambientEmojis[Math.floor(Math.random() * ambientEmojis.length)];
    const left = Math.random() * 100;
    const duration = 10 + Math.random() * 10;
    const drift = (Math.random() * 80 - 40) + 'px';
    el.style.left = left + 'vw';
    el.style.setProperty('--drift', drift);
    el.style.animationDuration = duration + 's';
    el.style.fontSize = (10 + Math.random() * 10) + 'px';
    ambientLayer.appendChild(el);
    setTimeout(() => el.remove(), duration * 1000 + 500);
  }

  // gentle continuous drift, not overwhelming
  for (let i = 0; i < 4; i++) {
    setTimeout(() => spawnAmbientParticle(), i * 1500);
  }
  setInterval(spawnAmbientParticle, 2200);

  /* ---------------------------------------------------------
     Reusable FX burst helpers (hearts / confetti / sparkles)
  --------------------------------------------------------- */
  const confettiColors = ['#e8a5b0', '#c9a15a', '#f2c9cf', '#e3c584', '#ffffff'];

  function burstHearts(container, count = 14) {
    for (let i = 0; i < count; i++) {
      const el = document.createElement('span');
      el.className = 'fx-particle fx-heart';
      el.textContent = Math.random() > 0.5 ? '❤️' : '💗';
      el.style.left = (Math.random() * 100) + 'vw';
      el.style.setProperty('--drift', (Math.random() * 120 - 60) + 'px');
      el.style.animationDelay = (Math.random() * 0.6) + 's';
      el.style.fontSize = (16 + Math.random() * 14) + 'px';
      container.appendChild(el);
      setTimeout(() => el.remove(), 4200);
    }
  }

  function burstConfetti(container, count = 26) {
    for (let i = 0; i < count; i++) {
      const el = document.createElement('span');
      el.className = 'fx-particle fx-confetti';
      el.style.left = (Math.random() * 100) + 'vw';
      el.style.setProperty('--drift', (Math.random() * 160 - 80) + 'px');
      el.style.background = confettiColors[Math.floor(Math.random() * confettiColors.length)];
      el.style.animationDelay = (Math.random() * 0.4) + 's';
      el.style.animationDuration = (2.6 + Math.random() * 1.2) + 's';
      container.appendChild(el);
      setTimeout(() => el.remove(), 4200);
    }
  }

  function burstSparkles(container, count = 10) {
    for (let i = 0; i < count; i++) {
      const el = document.createElement('span');
      el.className = 'fx-particle fx-sparkle';
      el.textContent = '✨';
      el.style.left = (Math.random() * 100) + 'vw';
      el.style.top = (Math.random() * 100) + 'vh';
      el.style.animationDelay = (Math.random() * 0.5) + 's';
      container.appendChild(el);
      setTimeout(() => el.remove(), 2200);
    }
  }

  /* ---------------------------------------------------------
     1. Opening screen -> main site transition
  --------------------------------------------------------- */
  const openSurpriseBtn = document.getElementById('openSurpriseBtn');
  const openingScreen = document.getElementById('openingScreen');
  const transitionOverlay = document.getElementById('transitionOverlay');
  const mainSite = document.getElementById('mainSite');

  openSurpriseBtn.addEventListener('click', () => {
    openSurpriseBtn.disabled = true;

    // floating hearts + confetti burst over the transition overlay
    burstHearts(transitionOverlay, 18);
    burstConfetti(transitionOverlay, 30);
    burstSparkles(transitionOverlay, 14);

    openingScreen.classList.add('leaving');

    setTimeout(() => {
      openingScreen.style.display = 'none';
      mainSite.hidden = false;
      document.body.style.overflow = '';
      window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
      startTypingMessage();
    }, 900);
  });

  /* ---------------------------------------------------------
     2. Typing / fade-in personal message
  --------------------------------------------------------- */
  const typingMessage = document.getElementById('typingMessage');
  const fullMessage =
`Happy Birthday, Kriti ❤️

May your smile always stay as beautiful as it is today, and may every dream in your heart slowly become a beautiful reality.

You deserve happiness, peaceful moments, beautiful memories and all the good things life has to offer.

I hope this new chapter of your life brings you countless reasons to smile, people who truly value you, and moments you'll remember forever.

Keep smiling, keep shining and always be the beautiful person you are.

Once again, Happy Birthday, Kriti. 🎂❤️✨`;

  let typingStarted = false;

  function startTypingMessage() {
    if (typingStarted) return;
    typingStarted = true;

    let i = 0;
    const cursor = document.createElement('span');
    cursor.className = 'cursor';

    function type() {
      if (i <= fullMessage.length) {
        typingMessage.textContent = fullMessage.slice(0, i);
        typingMessage.appendChild(cursor);
        i += 3; // a few characters at a time for a natural but efficient pace
        requestAnimationFrame(() => setTimeout(type, 14));
      } else {
        typingMessage.textContent = fullMessage;
      }
    }
    type();
  }

  // Fallback: if user reaches the message section by scroll (shouldn't happen
  // since main site is hidden until opened, but safe to have an observer too)
  const messageSection = document.getElementById('messageSection');
  const msgObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        startTypingMessage();
      }
    });
  }, { threshold: 0.3 });
  msgObserver.observe(messageSection);

  /* ---------------------------------------------------------
     3. Surprise message reveal
  --------------------------------------------------------- */
  const surpriseBtn = document.getElementById('surpriseBtn');
  const hiddenMessage = document.getElementById('hiddenMessage');
  const surpriseSection = document.getElementById('surpriseSection');

  surpriseBtn.addEventListener('click', () => {
    const alreadyShown = hiddenMessage.classList.contains('show');
    hiddenMessage.hidden = false;
    requestAnimationFrame(() => hiddenMessage.classList.add('show'));
    if (!alreadyShown) {
      burstHearts(surpriseSection, 10);
      burstSparkles(surpriseSection, 8);
    }
  });

  /* ---------------------------------------------------------
     4. Make a wish — blow out candles
  --------------------------------------------------------- */
  const wishBtn = document.getElementById('wishBtn');
  const wishResult = document.getElementById('wishResult');
  const cakeSection = document.getElementById('cakeSection');
  let wishMade = false;

  wishBtn.addEventListener('click', () => {
    if (wishMade) return;
    wishMade = true;

    document.querySelectorAll('.candle').forEach((candle, idx) => {
      setTimeout(() => candle.classList.add('blown'), idx * 180);
    });

    burstConfetti(cakeSection, 22);
    burstHearts(cakeSection, 12);
    burstSparkles(cakeSection, 10);

    setTimeout(() => {
      wishResult.hidden = false;
      requestAnimationFrame(() => wishResult.classList.add('show'));
    }, 500);

    wishBtn.style.opacity = '0.6';
    wishBtn.style.pointerEvents = 'none';
  });

  /* ---------------------------------------------------------
     5. Music player (manual start only — no autoplay)
  --------------------------------------------------------- */
  const musicBtn = document.getElementById('musicBtn');
  const musicIcon = document.getElementById('musicIcon');
  const musicLabel = document.getElementById('musicLabel');
  const musicBars = document.getElementById('musicBars');
  const bgMusic = document.getElementById('bgMusic');
  let isPlaying = false;

  musicBtn.addEventListener('click', () => {
    if (!isPlaying) {
      bgMusic.play().then(() => {
        isPlaying = true;
        musicIcon.textContent = '❚❚';
        musicLabel.textContent = 'Pause Music';
        musicBars.classList.add('playing');
        musicBtn.setAttribute('aria-pressed', 'true');
      }).catch(() => {
        // File likely missing — let the user know gently without breaking the page
        musicLabel.textContent = 'Add birthday-music.mp3 to play';
      });
    } else {
      bgMusic.pause();
      isPlaying = false;
      musicIcon.textContent = '▶';
      musicLabel.textContent = 'Play Birthday Music';
      musicBars.classList.remove('playing');
      musicBtn.setAttribute('aria-pressed', 'false');
    }
  });

  /* ---------------------------------------------------------
     6. Final surprise
  --------------------------------------------------------- */
  const finalBtn = document.getElementById('finalBtn');
  const finalLine = document.getElementById('finalLine');
  const finalOverlay = document.getElementById('finalOverlay');
  let finalTriggered = false;

  finalBtn.addEventListener('click', () => {
    if (finalTriggered) return;
    finalTriggered = true;

    finalOverlay.classList.add('show');
    burstHearts(finalOverlay, 26);
    burstConfetti(finalOverlay, 34);
    burstSparkles(finalOverlay, 20);

    setTimeout(() => {
      finalLine.hidden = false;
      requestAnimationFrame(() => finalLine.classList.add('show'));
    }, 600);

    setTimeout(() => finalOverlay.classList.remove('show'), 4200);

    finalBtn.style.opacity = '0.6';
    finalBtn.style.pointerEvents = 'none';
  });

});
