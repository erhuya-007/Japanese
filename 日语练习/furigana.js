/* 全课程汉字注音：词汇表读音 + 课文/对话最长匹配 */
(function (global) {
  var KANJI_RE = /[\u4e00-\u9fff\u3400-\u4dbf]/;
  var readingDict = null;
  var sortedKeys = null;

  function hasKanji(s) {
    return KANJI_RE.test(s);
  }

  function stripHtml(s) {
    return (s || '').replace(/<[^>]+>/g, '');
  }

  function addReading(dict, jp, kana) {
    if (!jp || !kana) return;
    jp = stripHtml(jp).trim();
    kana = stripHtml(kana).trim();
    if (!jp || !kana || jp === kana || !hasKanji(jp)) return;
    if (!dict[jp]) dict[jp] = kana;
  }

  function buildReadingDict() {
    var dict = {};
    if (typeof LESSONS_CATALOG !== 'undefined') {
      LESSONS_CATALOG.forEach(function (lesson) {
        var vocab = lesson.vocab;
        if (!vocab) return;
        ['circle1', 'circle2', 'circle3'].forEach(function (key) {
          (vocab[key] || []).forEach(function (w) {
            addReading(dict, w.jp, w.kana);
          });
        });
      });
    }
    document.querySelectorAll('.vocab-table tr').forEach(function (row) {
      var jpCell = row.querySelector('td.jp');
      var kanaCell = row.querySelector('td.kana');
      if (jpCell && kanaCell) addReading(dict, jpCell.textContent, kanaCell.textContent);
    });
    var extra = {
      '本': 'ほん', '私': 'わたし', '何': 'なに', '人': 'ひと', '名': 'めい',
      '電話': 'でんわ', '傘': 'かさ', '鍵': 'かぎ', '机': 'つくえ', '部屋': 'へや',
      '木': 'き', '猫': 'ねこ', '花': 'はな', '図書館': 'としょかん', '駅': 'えき',
      '食堂': 'しょくどう', 'トイレ': 'トイレ', '店員': 'てんいん', '日本語': 'にほんご',
      '新聞': 'しんぶん', '映画': 'えいが', '学校': 'がっこう', '会社': 'かいしゃ',
      '中国': 'ちゅうごく', '日本': 'にほん', '韓国': 'かんこく',
      '毎日': 'まいにち', '昨日': 'きのう', '先週': 'せんしゅう', '今': 'いま',
      '春節': 'しゅんせつ', '伝統的': 'でんとうてき', '祭り': 'まつり',
      '李': 'り', '王': 'おう', '張': 'ちょう', '森': 'もり', '林': 'はやし',
      '小野': 'おの', '吉田': 'よしだ', '田中': 'たなか', '中村': 'なかむら', '太郎': 'たろう',
      '病院': 'びょういん', '建物': 'たてもの', '図書館': 'としょかん', '傘': 'かさ',
      'カメラ': 'カメラ', 'テレビ': 'テレビ', 'パソコン': 'パソコン'
    };
    Object.keys(extra).forEach(function (k) { addReading(dict, k, extra[k]); });
    return dict;
  }

  function getDict() {
    if (!readingDict) {
      readingDict = buildReadingDict();
      sortedKeys = Object.keys(readingDict).sort(function (a, b) { return b.length - a.length; });
    }
    return readingDict;
  }

  function furiganaPlainText(text, dict, keys) {
    if (!text || !hasKanji(text)) return text;
    dict = dict || getDict();
    keys = keys || sortedKeys;
    var out = '';
    var i = 0;
    while (i < text.length) {
      var hit = false;
      for (var k = 0; k < keys.length; k++) {
        var word = keys[k];
        if (text.slice(i, i + word.length) === word) {
          out += '<ruby class="has-furi">' + word + '<rt>' + dict[word] + '</rt></ruby>';
          i += word.length;
          hit = true;
          break;
        }
      }
      if (!hit) {
        out += text[i];
        i += 1;
      }
    }
    return out;
  }

  function processTextNodes(root, dict, keys) {
    if (!root) return;
    var nodes = [];
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(function (node) {
      var p = node.parentElement;
      if (!p || p.tagName === 'RT' || p.closest('ruby')) return;
      if (p.closest('.kana, .romaji, .roma, .meaning, .cn-line, .trans, .resp-mean, rt')) return;
      var text = node.textContent;
      if (!hasKanji(text)) return;
      var html = furiganaPlainText(text, dict, keys);
      if (html === text) return;
      var wrap = document.createElement('span');
      wrap.className = 'furi-wrap';
      wrap.innerHTML = html;
      p.replaceChild(wrap, node);
    });
  }

  function applyNameGridRuby() {
    document.querySelectorAll('.vocab-name-grid .example-card').forEach(function (card) {
      var wordEl = card.querySelector('.word');
      var romaEl = card.querySelector('.roma');
      if (!wordEl || !romaEl || wordEl.querySelector('ruby')) return;
      var jp = wordEl.textContent.trim();
      var kana = romaEl.textContent.trim();
      if (hasKanji(jp) && kana && jp !== kana && !/^[A-Za-z]/.test(kana)) {
        wordEl.innerHTML = '<ruby class="has-furi">' + jp + '<rt>' + kana + '</rt></ruby>';
      }
    });
  }

  function applyVocabRuby() {
    document.querySelectorAll('.vocab-table tr').forEach(function (row) {
      var jpCell = row.querySelector('td.jp');
      var kanaCell = row.querySelector('td.kana');
      if (!jpCell || !kanaCell || jpCell.querySelector('ruby')) return;
      var jp = jpCell.textContent.trim();
      var kana = kanaCell.textContent.trim();
      if (jp !== kana && hasKanji(jp)) {
        jpCell.innerHTML = '<ruby class="has-furi">' + jp + '<rt>' + kana + '</rt></ruby>';
      }
    });
  }

  function applyFuriganaToElement(el) {
    if (!el) return;
    delete el.dataset.furiganaDone;
    processTextNodes(el, getDict(), sortedKeys);
  }

  function applyFurigana(root) {
    var dict = getDict();
    var keys = sortedKeys;
    var scope = root || document;
    var selectors = [
      '.lesson-title',
      '.jp-line', '.japanese', '.dialogue-turn .line',
      '.text-line .japanese', '.grammar-example .jp-line',
      '.hw-question', '.hw-feedback-box', '.quiz-question'
    ];
    selectors.forEach(function (sel) {
      scope.querySelectorAll(sel).forEach(function (el) {
        if (el.dataset.furiganaDone) return;
        processTextNodes(el, dict, keys);
        el.dataset.furiganaDone = '1';
      });
    });
    applyVocabRuby();
    applyNameGridRuby();
  }

  function initFurigana() {
    readingDict = null;
    sortedKeys = null;
    applyFurigana(document);
  }

  global.applyFuriganaToElement = applyFuriganaToElement;
  global.initFurigana = initFurigana;
  global.applyFurigana = applyFurigana;
  global.furiganaPlainText = furiganaPlainText;
})(typeof window !== 'undefined' ? window : globalThis);
