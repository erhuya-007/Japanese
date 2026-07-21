/* 动态渲染第3–24课（依赖 lessons-data.js 中的 LESSONS_CATALOG） */
const BILI_BVID = 'BV1Ti4y1X7yZ';

function biliLessonLink(p) {
  return 'https://www.bilibili.com/video/' + BILI_BVID + '?p=' + p;
}

function renderGrammarRules(rules) {
  return rules.map(function (r) {
    var ex = (r.examples || []).map(function (e) {
      return '<div class="grammar-example"><div class="jp-line">' + e.jp + '</div><div class="cn-line">' + e.cn + '</div></div>';
    }).join('');
    var cls = 'rule-card featured';
    var style = r.fullWidth ? ' style="grid-column:1/-1;"' : '';
    var body = r.body ? '<div class="rule-body">' + r.body + '</div>' : '';
    return '<div class="' + cls + '"' + style + '><div class="rule-head"><span class="rule-num">' + r.num + '</span><h4 class="rule-title">' + r.title + '</h4></div>' + body + ex + '</div>';
  }).join('');
}

function renderTextGrid(lines) {
  return lines.map(function (l) {
    return '<div class="text-line"><div class="japanese">' + l.jp + '</div><div class="meaning">' + l.cn + '</div></div>';
  }).join('');
}

function renderDialoguePairs(pairs) {
  return pairs.map(function (pair) {
    return '<div class="dialogue-pair">' + pair.map(function (t) {
      return '<div class="dialogue-turn' + (t.reply ? ' reply' : '') + '"><span class="speaker-badge">' + t.speaker +
        '</span><div class="turn-body"><div class="line">' + t.jp + '</div><div class="trans">' + t.cn + '</div></div></div>';
    }).join('') + '</div>';
  }).join('');
}

function renderAppTurns(turns) {
  return turns.map(function (t) {
    return '<div class="dialogue-turn' + (t.reply ? ' reply' : '') + '"><span class="speaker-badge">' + t.speaker +
      '</span><div class="turn-body"><div class="line">' + t.jp + '</div><div class="trans">' + t.cn + '</div></div></div>';
  }).join('');
}

function renderVocabTable(words) {
  if (!words || !words.length) return '';
  return '<table class="vocab-table"><tr><th>单词</th><th>读音</th><th>词性</th><th>中文</th></tr>' +
    words.map(function (w) {
      return '<tr><td class="jp">' + w.jp + '</td><td class="kana">' + w.kana + '</td><td>' + w.pos + '</td><td>' + w.cn + '</td></tr>';
    }).join('') + '</table>';
}

function renderVocabBlock(vocab, pages) {
  return '<div class="tip-box info"><strong>📖 圆圆老师三圆词汇法：</strong>按重要程度分层——<strong>一圆词</strong>（必背）→ <strong>二圆词</strong>（补充）→ <strong>三圆词</strong>（扩展）。' +
    '<a href="' + biliLessonLink(pages.vocab) + '" target="_blank">B站单词课 p=' + pages.vocab + '</a></div>' +
    '<div class="vocab-wrap">' +
    '<div class="vocab-circle-block circle-1"><div class="vocab-circle-head"><span class="circle-badge">○</span> 一圆词汇 <span class="circle-desc">基本课文核心 · 必背</span></div>' + renderVocabTable(vocab.circle1) + '</div>' +
    '<div class="vocab-circle-block circle-2"><div class="vocab-circle-head"><span class="circle-badge">○○</span> 二圆词汇 <span class="circle-desc">应用课文 · 重要补充</span></div>' + renderVocabTable(vocab.circle2) + '</div>' +
    '<div class="vocab-circle-block circle-3"><div class="vocab-circle-head"><span class="circle-badge">○○○</span> 三圆词汇 <span class="circle-desc">扩展词 · 专名</span></div>' + renderVocabTable(vocab.circle3) + '</div>' +
    '</div>';
}

function renderHomeworkShell(lesson) {
  var id = lesson.id;
  var n = lesson.num;
  return '<div id="' + id + '-homework" class="lesson-section" style="display:none;">' +
    '<div class="hw-wrap" data-lesson="' + id + '">' +
    '<div class="tip-box info" style="margin-bottom:12px;"><strong>📝 新标日初级上 · 第' + n + '课练习：</strong>对应课本练习，含选择/填空/翻译/完成对话。共 <strong id="' + id + '-hw-total-label">0</strong> 题。</div>' +
    '<div class="hw-layout"><aside class="hw-sidebar">' +
    '<h4>题型切换</h4><div class="hw-type-btns">' +
    '<div class="toggle-btn active" onclick="switchHwType(\'' + id + '\',\'choice\',this)">选择题</div>' +
    '<div class="toggle-btn" onclick="switchHwType(\'' + id + '\',\'fill\',this)">填空题</div>' +
    '<div class="toggle-btn" onclick="switchHwType(\'' + id + '\',\'translate\',this)">翻译题</div>' +
    '<div class="toggle-btn" onclick="switchHwType(\'' + id + '\',\'dialogue\',this)">完成对话</div></div>' +
    '<div class="hw-stats">' +
    '<div class="hw-stat-row"><span>本题进度</span><strong id="' + id + '-hw-cur-num">1/0</strong></div>' +
    '<div class="hw-stat-row"><span>已作答</span><strong id="' + id + '-hw-answered">0</strong></div>' +
    '<div class="hw-stat-row"><span>得分</span><strong id="' + id + '-hw-score">—</strong></div></div>' +
    '<h4>题号导航</h4><div class="hw-qnav" id="' + id + '-hw-qnav"></div>' +
    '<div class="hw-sidebar-actions">' +
    '<button class="btn" onclick="submitHomework(\'' + id + '\')">提交作业</button>' +
    '<button class="btn btn-secondary" onclick="resetHomework(\'' + id + '\')">重新开始</button></div>' +
    '<div class="hw-wrongbook-section"><h4>错题本 <span id="' + id + '-hw-wrong-count" class="hw-wrong-badge empty">0</span></h4>' +
    '<div class="hw-wrongbook" id="' + id + '-hw-wrongbook"></div>' +
    '<button class="btn btn-secondary btn-small" onclick="clearWrongBook(\'' + id + '\')">清空本课错题</button></div>' +
    '</aside><div class="hw-main">' +
    '<div class="hw-topbar"><span class="hw-type-label" id="' + id + '-hw-type-label">选择题</span>' +
    '<div class="hw-progress-bar"><div class="hw-progress-fill" id="' + id + '-hw-progress" style="width:0%"></div></div></div>' +
    '<div class="hw-question" id="' + id + '-hw-question"></div>' +
    '<div id="' + id + '-hw-answer-area"></div>' +
    '<div class="hw-feedback-box" id="' + id + '-hw-feedback"></div>' +
    '<div class="hw-actions">' +
    '<button class="btn btn-secondary" onclick="prevHwQuestion(\'' + id + '\')" id="' + id + '-hw-prev-btn">上一题</button>' +
    '<button class="btn" onclick="nextHwQuestion(\'' + id + '\')" id="' + id + '-hw-next-btn">下一题</button></div>' +
    '<div id="' + id + '-hw-result" class="hw-result-panel">' +
    '<div class="score-big" id="' + id + '-hw-result-score">0%</div>' +
    '<div class="score-msg" id="' + id + '-hw-result-msg"></div></div>' +
    '</div></div></div></div>';
}

function renderKeyBar(lesson) {
  var rules = lesson.rules || [];
  var items;
  if (lesson.keyChips && lesson.keyChips.length === rules.length) {
    items = lesson.keyChips;
  } else if (rules.length) {
    items = rules.map(function (r) {
      return r.chip || r.title.replace(/\s*[—－\-].*$/, '').trim();
    });
  } else {
    items = lesson.keyChips || [];
  }
  return items.map(function (c) { return '<span class="key-chip">' + c + '</span>'; }).join('');
}

function buildLessonPanel(lesson) {
  var id = lesson.id;
  var n = lesson.num;
  var chips = renderKeyBar(lesson);
  var grammarLink = biliLessonLink(lesson.pages.grammar);
  var textLink = biliLessonLink(lesson.pages.text);

  return '<div id="' + id + '" class="main-panel">' +
    '<div class="lesson-top"><div class="lesson-header"><div>' +
    '<span class="lesson-badge">新标日初级上 · 第' + n + '课</span>' +
    '<div class="lesson-title">' + lesson.titleJp + '</div>' +
    '<div class="lesson-sub"><a href="' + grammarLink + '" target="_blank">语法</a> · ' +
    '<a href="' + textLink + '" target="_blank">课文</a> · ' +
    '<a href="' + biliLessonLink(lesson.pages.vocab) + '" target="_blank">单词</a> · ' +
    '<a href="' + grammarLink + '" target="_blank">圆圆老师 B站</a></div></div>' +
    '<div class="key-bar"><span class="key-bar-label">📌 本课核心句型</span>' + chips + '</div></div>' +
    '<div class="page-shell"><aside class="page-sidebar">' +
    '<div class="sidebar-title">第' + n + '课目录</div><nav class="sidebar-nav">' +
    '<button class="nav-item active" onclick="showLessonSection(\'' + id + '\',\'grammar\',this)">语法</button>' +
    '<button class="nav-item" onclick="showLessonSection(\'' + id + '\',\'text\',this)">课文</button>' +
    '<button class="nav-item" onclick="showLessonSection(\'' + id + '\',\'app\',this)">应用课文</button>' +
    '<button class="nav-item" onclick="showLessonSection(\'' + id + '\',\'vocab\',this)">单词</button>' +
    '<button class="nav-item" onclick="showLessonSection(\'' + id + '\',\'homework\',this)">课后作业</button>' +
    '</nav></aside><div class="page-content">' +

    '<div id="' + id + '-grammar" class="lesson-section">' +
    '<div class="tip-box info"><strong>💡 学习要点：</strong>' + lesson.grammarTip + '</div>' +
    '<div class="grammar-grid">' + renderGrammarRules(lesson.rules) + '</div></div>' +

    '<div id="' + id + '-text" class="lesson-section" style="display:none;">' +
    '<div class="section-head"><h3>基本课文</h3><span class="section-tag"><a href="' + textLink + '" target="_blank">B站 p=' + lesson.pages.text + '</a></span></div>' +
    '<div class="text-grid">' + renderTextGrid(lesson.basicText) + '</div>' +
    '<div class="section-head"><h3>基本对话</h3><span class="section-tag">对话练习</span></div>' +
    '<div class="dialogue-flow pairs">' + renderDialoguePairs(lesson.dialoguePairs) + '</div></div>' +

    '<div id="' + id + '-app" class="lesson-section" style="display:none;">' +
    '<div class="section-head"><h3>' + lesson.appTitle + '</h3><span class="section-tag">应用课文</span></div>' +
    '<div class="dialogue-flow sequential">' + renderAppTurns(lesson.appTurns) + '</div></div>' +

    '<div id="' + id + '-vocab" class="lesson-section" style="display:none;">' +
    '<div class="section-head"><h3>单词表 · 三圆分类</h3><span class="section-tag">第' + n + '课</span></div>' +
    renderVocabBlock(lesson.vocab, lesson.pages) + '</div>' +

    renderHomeworkShell(lesson) +

    '</div></div></div>';
}

function renderDynamicLessons() {
  if (typeof LESSONS_CATALOG === 'undefined') return;
  var nav = document.getElementById('main-nav-tabs');
  var container = document.querySelector('.app-main') || document.getElementById('dynamic-lessons-container');
  var quizBtns = document.getElementById('quiz-lesson-btns');
  if (!nav || !container) return;

  LESSONS_CATALOG.forEach(function (lesson) {
    var tab = document.createElement('div');
    tab.className = 'nav-tab';
    tab.dataset.tabId = lesson.id;
    tab.textContent = '第' + lesson.num + '课';
    tab.onclick = function () { switchMainTab(lesson.id, tab); };
    nav.appendChild(tab);

    container.insertAdjacentHTML('beforeend', buildLessonPanel(lesson));

    if (lesson.homework) lessonHomeworkData[lesson.id] = lesson.homework;
    if (lesson.quiz) quizData[lesson.id] = lesson.quiz;

    if (quizBtns) {
      var qb = document.createElement('div');
      qb.className = 'toggle-btn';
      qb.textContent = '第' + lesson.num + '课';
      qb.onclick = function () { setQuizMode(lesson.id, qb); };
      quizBtns.appendChild(qb);
    }
  });
}

function getAllLessonQuizModes() {
  var modes = ['lesson1', 'lesson2'];
  if (typeof LESSONS_CATALOG !== 'undefined') {
    LESSONS_CATALOG.forEach(function (l) { modes.push(l.id); });
  }
  return modes;
}

function getQuizModeLabel(mode) {
  var staticLabels = {
    hiragana: '平假名 → 罗马音', romaji: '罗马音 → 平假名', katakana: '片假名 → 罗马音',
    dakuten: '浊音辨认', handakuten: '半浊音辨认', youon: '拗音辨认', chouon: '长音专项',
    sokuon: '促音专项', hatsuon: '拨音专项', greeting: '日常用语', weekday: '星期与数字',
    lesson1: '第1课', lesson2: '第2课', mixed: '综合测验'
  };
  if (staticLabels[mode]) return staticLabels[mode];
  var m = mode.match(/^lesson(\d+)$/);
  if (m) return '第' + m[1] + '课';
  return mode;
}
