(function () {
  'use strict';

  const STORAGE_KEY = 'jp-practice-stats';

  const stats = loadStats();

  function loadStats() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || defaultStats();
    } catch {
      return defaultStats();
    }
  }

  function defaultStats() {
    return { today: todayStr(), todayCount: 0, total: 0, correct: 0, streak: 0, lastDay: '' };
  }

  function todayStr() {
    return new Date().toISOString().slice(0, 10);
  }

  function saveStats() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
    renderStatsBar();
  }

  function recordAnswer(correct) {
    const t = todayStr();
    if (stats.today !== t) {
      if (stats.lastDay) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        stats.streak = stats.lastDay === yesterday.toISOString().slice(0, 10) ? stats.streak + 1 : 1;
      } else {
        stats.streak = 1;
      }
      stats.today = t;
      stats.todayCount = 0;
    }
    stats.todayCount++;
    stats.total++;
    if (correct) stats.correct++;
    stats.lastDay = t;
    saveStats();
  }

  function renderStatsBar() {
    document.getElementById('todayCount').textContent = stats.todayCount;
    document.getElementById('streak').textContent = stats.streak;
    const acc = stats.total ? Math.round((stats.correct / stats.total) * 100) : null;
    document.getElementById('accuracy').textContent = acc !== null ? acc + '%' : '—';
  }

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function pickRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function normalizeRomaji(s) {
    return s.trim().toLowerCase().replace(/\s+/g, '');
  }

  function romajiMatch(input, expected) {
    const a = normalizeRomaji(input);
    const variants = expected.split('/').map(v => normalizeRomaji(v));
    return variants.some(v => a === v);
  }

  function speak(text) {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'ja-JP';
    u.rate = 0.85;
    window.speechSynthesis.speak(u);
  }

  // ── Tabs ──
  document.querySelectorAll('nav.tabs button').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('nav.tabs button').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(btn.dataset.tab).classList.add('active');
    });
  });

  // ── Chip groups ──
  function bindChips(containerId, onChange) {
    const container = document.getElementById(containerId);
    container.querySelectorAll('.chip').forEach(chip => {
      chip.addEventListener('click', () => {
        container.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        onChange(chip.dataset.type);
      });
    });
  }

  // ── Kana Quiz ──
  let kanaType = 'hiragana';
  let kanaCurrent = null;
  let kanaSession = { total: 0, correct: 0 };
  let kanaAnswered = false;

  const kanaInput = document.getElementById('kanaInput');
  const kanaDisplay = document.getElementById('kanaDisplay');
  const kanaPrompt = document.getElementById('kanaPrompt');
  const kanaHint = document.getElementById('kanaHint');
  const kanaFeedback = document.getElementById('kanaFeedback');

  bindChips('kanaTypeChips', type => {
    kanaType = type;
    nextKanaQuestion();
  });

  function filteredKana() {
    const scope = document.getElementById('kanaScope').value;
    if (scope === 'all') return KANA;
    return KANA.filter(k => k.group === scope);
  }

  function nextKanaQuestion() {
    kanaAnswered = false;
    kanaCurrent = pickRandom(filteredKana());
    const dir = document.getElementById('kanaDirection').value;
    const isHira = kanaType === 'hiragana';
    const label = isHira ? '平假名' : '片假名';

    kanaInput.value = '';
    kanaInput.className = '';
    kanaFeedback.textContent = '';
    kanaFeedback.className = 'feedback';
    kanaHint.textContent = '';
    kanaInput.disabled = false;
    kanaInput.focus();

    if (dir === 'to-kana') {
      kanaPrompt.textContent = '请输入对应的' + label;
      kanaDisplay.textContent = kanaCurrent.romaji;
      kanaInput.placeholder = label + '...';
    } else {
      kanaPrompt.textContent = '请输入罗马音（如 shi, tsu）';
      kanaDisplay.textContent = isHira ? kanaCurrent.h : kanaCurrent.k;
      kanaInput.placeholder = 'romaji...';
    }
  }

  function checkKanaAnswer() {
    if (kanaAnswered || !kanaCurrent) return;
    const dir = document.getElementById('kanaDirection').value;
    const isHira = kanaType === 'hiragana';
    const input = kanaInput.value.trim();
    if (!input) return;

    let correct = false;
    if (dir === 'to-kana') {
      const expected = isHira ? kanaCurrent.h : kanaCurrent.k;
      correct = input === expected;
    } else {
      correct = romajiMatch(input, kanaCurrent.romaji);
    }

    kanaAnswered = true;
    kanaSession.total++;
    if (correct) kanaSession.correct++;
    recordAnswer(correct);

    kanaInput.disabled = true;
    kanaInput.classList.add(correct ? 'correct' : 'wrong');

    const showKana = isHira ? kanaCurrent.h : kanaCurrent.k;
    if (correct) {
      kanaFeedback.textContent = '✓ 正确！' + showKana + ' = ' + kanaCurrent.romaji;
      kanaFeedback.className = 'feedback ok';
    } else {
      kanaFeedback.textContent = '✗ 正确答案：' + showKana + '（' + kanaCurrent.romaji + '）';
      kanaFeedback.className = 'feedback err';
    }

    updateKanaProgress();
    setTimeout(nextKanaQuestion, correct ? 800 : 1400);
  }

  function updateKanaProgress() {
    document.getElementById('kanaSessionScore').textContent =
      '本轮 ' + kanaSession.correct + ' / ' + kanaSession.total;
    const pct = kanaSession.total ? (kanaSession.correct / kanaSession.total) * 100 : 0;
    document.getElementById('kanaProgress').style.width = pct + '%';
  }

  document.getElementById('kanaSubmit').addEventListener('click', checkKanaAnswer);
  document.getElementById('kanaSkip').addEventListener('click', () => {
    kanaFeedback.textContent = '跳过：' + (kanaType === 'hiragana' ? kanaCurrent.h : kanaCurrent.k);
    kanaFeedback.className = 'feedback';
    setTimeout(nextKanaQuestion, 600);
  });
  document.getElementById('kanaHintBtn').addEventListener('click', () => {
    if (!kanaCurrent) return;
    const dir = document.getElementById('kanaDirection').value;
    if (dir === 'to-kana') {
      const k = kanaType === 'hiragana' ? kanaCurrent.h : kanaCurrent.k;
      kanaHint.textContent = '首字母：' + k.charAt(0);
    } else {
      kanaHint.textContent = '提示：' + kanaCurrent.romaji.charAt(0) + '...';
    }
  });

  ['kanaDirection', 'kanaScope'].forEach(id => {
    document.getElementById(id).addEventListener('change', nextKanaQuestion);
  });

  kanaInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') checkKanaAnswer();
  });

  // ── Kana Chart ──
  let chartType = 'hiragana';
  let chartSpeakEnabled = false;

  bindChips('chartTypeChips', type => {
    chartType = type;
    renderKanaGrid();
  });

  document.getElementById('chartSpeak').addEventListener('click', () => {
    chartSpeakEnabled = !chartSpeakEnabled;
    document.getElementById('chartSpeak').textContent = chartSpeakEnabled ? '🔊 发音已开启' : '🔊 点击发音';
  });

  function renderKanaGrid() {
    const grid = document.getElementById('kanaGrid');
    grid.innerHTML = '';
    KANA.filter(k => k.group === 'gojuon').forEach(item => {
      const cell = document.createElement('div');
      cell.className = 'kana-cell';
      const kana = chartType === 'hiragana' ? item.h : item.k;
      cell.innerHTML = '<div class="kana">' + kana + '</div><div class="romaji">' + item.romaji + '</div>';
      cell.addEventListener('click', () => {
        if (chartSpeakEnabled) speak(kana);
        document.querySelectorAll('.kana-cell').forEach(c => c.classList.remove('selected'));
        cell.classList.add('selected');
      });
      grid.appendChild(cell);
    });
  }

  // ── Phrase Quiz ──
  let phraseCurrent = null;
  let phraseSession = { total: 0, correct: 0 };
  let phraseLocked = false;

  function filteredPhrases() {
    const cat = document.getElementById('phraseCategory').value;
    if (cat === 'all') return PHRASES;
    return PHRASES.filter(p => p.cat === cat);
  }

  function nextPhraseQuestion() {
    phraseLocked = false;
    phraseCurrent = pickRandom(filteredPhrases());
    const mode = document.getElementById('phraseMode').value;
    const display = document.getElementById('phraseDisplay');
    const hint = document.getElementById('phraseHint');
    const feedback = document.getElementById('phraseFeedback');
    const nextBtn = document.getElementById('phraseNext');

    feedback.textContent = '';
    feedback.className = 'feedback';
    nextBtn.disabled = true;
    hint.textContent = phraseCurrent.romaji;

    if (mode === 'jp-to-cn') {
      document.getElementById('phrasePrompt').textContent = '选择正确的中文意思';
      display.textContent = phraseCurrent.jp;
    } else {
      document.getElementById('phrasePrompt').textContent = '选择正确的日语';
      display.textContent = phraseCurrent.cn;
      hint.textContent = '';
    }

    const pool = filteredPhrases().filter(p => p !== phraseCurrent);
    const wrong = shuffle(pool).slice(0, 3);
    const options = shuffle([phraseCurrent, ...wrong]);

    const container = document.getElementById('phraseOptions');
    container.innerHTML = '';
    options.forEach(opt => {
      const btn = document.createElement('button');
      btn.textContent = mode === 'jp-to-cn' ? opt.cn : opt.jp;
      btn.addEventListener('click', () => selectPhraseOption(btn, opt));
      container.appendChild(btn);
    });
  }

  function selectPhraseOption(btn, opt) {
    if (phraseLocked) return;
    phraseLocked = true;
    const correct = opt === phraseCurrent;
    phraseSession.total++;
    if (correct) phraseSession.correct++;
    recordAnswer(correct);

    document.querySelectorAll('#phraseOptions button').forEach(b => {
      b.disabled = true;
      const text = document.getElementById('phraseMode').value === 'jp-to-cn' ? opt.cn : opt.jp;
      const correctText = document.getElementById('phraseMode').value === 'jp-to-cn'
        ? phraseCurrent.cn : phraseCurrent.jp;
      if (b.textContent === correctText) b.classList.add('correct');
    });

    if (!correct) btn.classList.add('wrong');

    const feedback = document.getElementById('phraseFeedback');
    if (correct) {
      feedback.textContent = '✓ 正确！';
      feedback.className = 'feedback ok';
      speak(phraseCurrent.jp);
      setTimeout(nextPhraseQuestion, 1000);
    } else {
      feedback.textContent = '✗ 正确答案：' + phraseCurrent.jp + '（' + phraseCurrent.cn + '）';
      feedback.className = 'feedback err';
      document.getElementById('phraseNext').disabled = false;
    }

    document.getElementById('phraseSessionScore').textContent =
      '本轮 ' + phraseSession.correct + ' / ' + phraseSession.total;
    const pct = phraseSession.total ? (phraseSession.correct / phraseSession.total) * 100 : 0;
    document.getElementById('phraseProgress').style.width = pct + '%';
  }

  document.getElementById('phraseNext').addEventListener('click', nextPhraseQuestion);
  ['phraseMode', 'phraseCategory'].forEach(id => {
    document.getElementById(id).addEventListener('change', nextPhraseQuestion);
  });

  // ── Phrase List ──
  function renderPhraseList(revealAll) {
    const cat = document.getElementById('listCategory').value;
    const list = cat === 'all' ? PHRASES : PHRASES.filter(p => p.cat === cat);
    const container = document.getElementById('phraseListContainer');
    container.innerHTML = '';

    list.forEach(p => {
      const item = document.createElement('div');
      item.className = 'phrase-item' + (revealAll ? ' revealed' : '');
      item.innerHTML =
        '<div><div class="phrase-jp">' + p.jp + '</div>' +
        '<div class="phrase-romaji">' + p.romaji + '</div></div>' +
        '<div class="phrase-cn">' + (revealAll ? p.cn : '点击显示') + '</div>';
      item.addEventListener('click', () => {
        item.classList.toggle('revealed');
        const cn = item.querySelector('.phrase-cn');
        cn.textContent = p.cn;
        speak(p.jp);
      });
      container.appendChild(item);
    });
  }

  document.getElementById('listCategory').addEventListener('change', () => renderPhraseList(false));
  document.getElementById('revealAll').addEventListener('click', () => renderPhraseList(true));

  // ── Global shortcuts ──
  document.addEventListener('keydown', e => {
    const active = document.querySelector('.panel.active');
    if (!active || active.id !== 'kana-quiz') return;
    if (e.key === 'ArrowRight' && !e.ctrlKey && !e.metaKey) {
      document.getElementById('kanaSkip').click();
    }
    if ((e.key === 'h' || e.key === 'H') && document.activeElement !== kanaInput) {
      document.getElementById('kanaHintBtn').click();
    }
  });

  // ── Init ──
  renderStatsBar();
  nextKanaQuestion();
  renderKanaGrid();
  nextPhraseQuestion();
  renderPhraseList(false);
})();
