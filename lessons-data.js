const LESSONS_CATALOG = [
  {
    num: 3,
    id: 'lesson3',
    titleJp: 'ここはデパートです',
    titleCn: '这里是百货商店',
    pages: { grammar: 9, text: 10, vocab: 11 },
    keyChips: ['<span class="hl">ここ</span>/<span class="hl">そこ</span>/<span class="hl">あそこ</span>/<span class="hl-q">どこ</span>', '名<span class="hl">は</span>场所<span class="hl">です</span>', '<span class="hl">この</span>/<span class="hl">その</span>/<span class="hl">あの</span>/<span class="hl-q">どの</span>+名', '名<span class="hl">は</span><span class="hl-q">どこ</span><span class="hl">ですか</span>'],
    grammarTip: '第3课学习<strong>场所指示词</strong>、<strong>场所判断句</strong>和<strong>位置疑问</strong>。「ここ/そこ/あそこ/どこ」单独使用；「この/その/あの/どの」后必须接名词；「～はどこですか」询问位置。',
    rules: [
      { num: '①', title: 'ここ／そこ／あそこ／どこ', body: '表示场所位置：ここ（这里·近说话人）、そこ（那里·近听话人）、あそこ（那边·离双方远）、どこ（哪里）。', featured: true, examples: [{ jp: '<span class="hl">ここ</span>は デパート<span class="hl">です</span>。', cn: '这里是百货商店。' }, { jp: 'トイレは <span class="hl-q">どこ</span><span class="hl">ですか</span>。', cn: '厕所在哪里？' }] },
      { num: '②', title: '名は 场所 です', body: '表示某场所是～。', featured: true, examples: [{ jp: 'ここ<span class="hl">は</span> 図書館<span class="hl">です</span>。', cn: '这里是图书馆。' }, { jp: 'あそこ<span class="hl">は</span> 駅<span class="hl">です</span>。', cn: '那边是车站。' }] },
      { num: '③', title: 'この／その／あの／どの＋名詞', body: '连体指示词，后接名词。', featured: false, examples: [{ jp: '<span class="hl">この</span> 建物は 病院<span class="hl">です</span>。', cn: '这座建筑物是医院。' }, { jp: '<span class="hl-q">どの</span> 建物が 病院<span class="hl">ですか</span>。', cn: '哪座建筑物是医院？' }] },
      { num: '④', title: '～は どこですか', body: '询问某事物/场所的位置。', featured: false, examples: [{ jp: '食堂<span class="hl">は</span> <span class="hl-q">どこ</span><span class="hl">ですか</span>。', cn: '食堂在哪里？' }] }
    ],
    basicText: [
      { jp: 'ここ<span class="hl">は</span> デパート<span class="hl">です</span>。', cn: '这里是百货商店。' },
      { jp: 'あそこ<span class="hl">は</span> 銀行<span class="hl">です</span>。', cn: '那边是银行。' },
      { jp: 'ここ<span class="hl">は</span> エスカレーター<span class="hl">です</span>。', cn: '这里是自动扶梯。' },
      { jp: 'あの 建物<span class="hl">は</span> 何<span class="hl">ですか</span>。', cn: '那座建筑物是什么？' },
      { jp: 'あの 建物<span class="hl">は</span> 病院<span class="hl">です</span>。', cn: '那座建筑物是医院。' }
    ],
    dialoguePairs: [
      [{ speaker: '甲', jp: 'トイレ<span class="hl">は</span> <span class="hl-q">どこ</span><span class="hl">ですか</span>。', cn: '厕所在哪里？', reply: false }, { speaker: '乙', jp: 'あそこ<span class="hl">です</span>。', cn: '在那边。', reply: true }],
      [{ speaker: '甲', jp: 'ここ<span class="hl">は</span> 何<span class="hl">ですか</span>。', cn: '这里是什么？', reply: false }, { speaker: '乙', jp: 'エスカレーター<span class="hl">です</span>。', cn: '是自动扶梯。', reply: true }],
      [{ speaker: '甲', jp: 'あの 建物<span class="hl">は</span> 何<span class="hl">ですか</span>。', cn: '那座建筑物是什么？', reply: false }, { speaker: '乙', jp: '病院<span class="hl">です</span>。', cn: '是医院。', reply: true }]
    ],
    appTitle: '应用课文 · 案内（问路）',
    appTurns: [
      { speaker: '李', jp: 'すみません。トイレ<span class="hl">は</span> <span class="hl-q">どこ</span><span class="hl">ですか</span>。', cn: '对不起，厕所在哪里？', reply: false },
      { speaker: '店員', jp: 'トイレ<span class="hl">は</span> あちら<span class="hl">です</span>。', cn: '卫生间在那边。', reply: true },
      { speaker: '李', jp: 'ありがとう ございます。', cn: '谢谢。', reply: false },
      { speaker: '店員', jp: 'いいえ。', cn: '不客气。', reply: true },
      { speaker: '李', jp: 'すみません。<span class="hl">この</span> 建物<span class="hl">は</span> 何<span class="hl">ですか</span>。', cn: '对不起，这座建筑物是什么？', reply: false },
      { speaker: '店員', jp: '病院<span class="hl">です</span>。', cn: '是医院。', reply: true }
    ],
    vocab: {
      circle1: [
        { jp: 'ここ', kana: 'ここ', pos: '代', cn: '这里' },
        { jp: 'そこ', kana: 'そこ', pos: '代', cn: '那里' },
        { jp: 'あそこ', kana: 'あそこ', pos: '代', cn: '那边' },
        { jp: 'どこ', kana: 'どこ', pos: '代', cn: '哪里' },
        { jp: 'この', kana: 'この', pos: '连体', cn: '这（个）' },
        { jp: 'その', kana: 'その', pos: '连体', cn: '那（个）' },
        { jp: 'あの', kana: 'あの', pos: '连体', cn: '那（个·远）' },
        { jp: 'どの', kana: 'どの', pos: '连体', cn: '哪（个）' },
        { jp: 'デパート', kana: 'デパート', pos: '名', cn: '百货商店' },
        { jp: '病院', kana: 'びょういん', pos: '名', cn: '医院' },
        { jp: '銀行', kana: 'ぎんこう', pos: '名', cn: '银行' },
        { jp: '建物', kana: 'たてもの', pos: '名', cn: '建筑物' }
      ],
      circle2: [
        { jp: '図書館', kana: 'としょかん', pos: '名', cn: '图书馆' },
        { jp: '食堂', kana: 'しょくどう', pos: '名', cn: '食堂' },
        { jp: 'トイレ', kana: 'トイレ', pos: '名', cn: '厕所' },
        { jp: 'エスカレーター', kana: 'エスカレーター', pos: '名', cn: '自动扶梯' },
        { jp: '駅', kana: 'えき', pos: '名', cn: '车站' },
        { jp: 'あちら', kana: 'あちら', pos: '代', cn: '那边（礼貌）' },
        { jp: '案内', kana: 'あんない', pos: '名', cn: '向导，引导' }
      ],
      circle3: [
        { jp: '郵便局', kana: 'ゆうびんきょく', pos: '名', cn: '邮局' },
        { jp: '会社', kana: 'かいしゃ', pos: '名', cn: '公司' },
        { jp: 'ホテル', kana: 'ホテル', pos: '名', cn: '宾馆' },
        { jp: 'コンビニ', kana: 'コンビニ', pos: '名', cn: '便利店' },
        { jp: '北京', kana: 'ペキン', pos: '专', cn: '北京' },
        { jp: '上海', kana: 'シャンハイ', pos: '专', cn: '上海' }
      ]
    },
    homework: {
      choice: [
        { id: 'c1', source: '练习A-1', q: 'ここ（＿＿＿） デパートです。', options: ['は', 'が', 'を', 'の'], answer: 0, explain: '主题提示は' },
        { id: 'c2', source: '练习A-2', q: 'トイレは（　　　）ですか。', options: ['どこ', 'どの', 'ここ', 'あの'], answer: 0, explain: '问位置用どこ' },
        { id: 'c3', source: '练习A-3', q: '（＿＿＿） 建物は 病院です。', options: ['あの', 'あそこ', 'どこ', 'ここ'], answer: 0, explain: 'あの+名词' },
        { id: 'c4', source: '练习A-4', q: '「そこ」指？', options: ['离听话人近', '离说话人近', '离双方都远', '不确定'], answer: 0, explain: 'こそあど体系' },
        { id: 'c5', source: '练习A-5', q: '（＿＿＿） 建物が 病院ですか。', options: ['どの', 'どこ', 'あそこ', 'その'], answer: 0, explain: 'どの+名词' },
        { id: 'c6', source: '练习A-6', q: 'あそこ（＿＿＿） 銀行です。', options: ['は', 'が', 'を', 'に'], answer: 0, explain: 'あそこは' },
        { id: 'c7', source: '练习B-1', q: 'ここ/そこ/あそこ 中表「这里」？', options: ['ここ', 'そこ', 'あそこ', 'どこ'], answer: 0, explain: 'こ系列' },
        { id: 'c8', source: '练习B-2', q: 'この/その/あの/どの 后接？', options: ['名词', 'です', 'か', 'を'], answer: 0, explain: '连体词' }
      ],
      fill: [
        { id: 'f1', source: '练习A-1', q: 'ここ（　） デパート（　）。', answers: ['は', 'です'], explain: '判断句' },
        { id: 'f2', source: '练习A-2', q: 'トイレ（　） どこ（　）か。', answers: ['は', 'です'], explain: '疑问' },
        { id: 'f3', source: '练习A-3', q: 'あそこ（　） 銀行（　）。', answers: ['は', 'です'], explain: '场所判断' },
        { id: 'f4', source: '练习A-4', q: '（　） 建物（　） 病院（　）。', answers: ['あの', 'は', 'です'], explain: 'あの+は+です' },
        { id: 'f5', source: '练习A-5', q: '（　） 建物（　） 病院（　）か。', answers: ['どの', 'が', 'です'], explain: 'どの+が' },
        { id: 'f6', source: '练习B-1', q: '食堂（　） あそこ（　）。', answers: ['は', 'です'], explain: 'は+です' }
      ],
      translate: [
        { id: 't1', source: '练习B-1', q: '这里是百货商店。', answers: ['ここはデパートです', 'ここは デパート です'], explain: 'ここは' },
        { id: 't2', source: '练习B-2', q: '厕所在哪里？', answers: ['トイレはどこですか', 'トイレは どこ ですか'], explain: 'どこですか' },
        { id: 't3', source: '练习B-3', q: '那边是银行。', answers: ['あそこは銀行です', 'あそこは 銀行 です'], explain: 'あそこは' },
        { id: 't4', source: '练习B-4', q: '哪座建筑物是医院？', answers: ['どの建物が病院ですか', 'どの 建物 が 病院 ですか'], explain: 'どの+が' }
      ],
      dialogue: [
        { id: 'd1', source: '会话-1', q: 'A：トイレは どこですか。\\nB：（　　　　　　　）', answers: ['あそこです', 'あちらです'], explain: '位置回答' },
        { id: 'd2', source: '会话-2', q: 'A：ここは 何ですか。\\nB：（　　　　　　　）', answers: ['エスカレーターです', 'デパートです'], explain: '名称回答' },
        { id: 'd3', source: '会话-3', q: 'A：あの 建物は 何ですか。\\nB：（　　　　　　　）', answers: ['病院です', '銀行です'], explain: '建筑物名称' }
      ]
    },
    quiz: [
      { question: 'ここは デパートです', options: ['这里是百货商店', '那里是银行', '厕所在哪里', '哪座是医院'], answer: 0, hint: 'ここ=这里' },
      { question: 'トイレは どこですか', options: ['厕所在哪里', '这里是厕所', '那是银行', '哪本书'], answer: 0 },
      { question: 'あそこ', options: ['那边', '这里', '那里', '哪里'], answer: 0, qtype: 'word' },
      { question: 'どの', options: ['哪个（后接名词）', '哪里', '这里', '那边'], answer: 0, qtype: 'word' },
      { question: '「この」后必须接？', options: ['名词', 'です', 'か', 'を'], answer: 0 },
      { question: 'びょういん', options: ['医院', '银行', '图书馆', '食堂'], answer: 0, qtype: 'word' },
      { question: 'たてもの', options: ['建筑物', '车站', '公司', '宾馆'], answer: 0, qtype: 'word' },
      { question: 'あちら', options: ['那边（礼貌）', '这里', '哪里', '那个'], answer: 0, qtype: 'word' }
    ]
  },
  {
    num: 4,
    id: 'lesson4',
    titleJp: '部屋に机があります',
    titleCn: '房间里有桌子',
    pages: { grammar: 12, text: 13, vocab: 14 },
    keyChips: ['名<span class="hl-part">に</span> あります/います', '<span class="hl">あります</span>/<span class="hl">います</span>', '数量词', '位置<span class="hl-part">に</span>'],
    grammarTip: '第4课学习存在句「～に あります/います」和位置表达「～に あります」。无生命用<strong>あります</strong>，有生命用<strong>います</strong>。',
    rules: [
      { num: '①', title: '名に あります／います', body: '表示存在。无生命事物用あります，有生命的人/动物用います。', featured: true, examples: [{ jp: '部屋<span class="hl-part">に</span> 机が <span class="hl">あります</span>。', cn: '房间里有桌子。' }, { jp: '木の下<span class="hl-part">に</span> 猫が <span class="hl">います</span>。', cn: '树下有猫。' }] },
      { num: '②', title: '名も あります／います', body: '表示"也有～"。', featured: false, examples: [{ jp: '机<span class="hl">も</span> <span class="hl">あります</span>。', cn: '也有桌子。' }] },
      { num: '③', title: '数量词＋助数词', body: '数字+助数词修饰名词。', featured: true, examples: [{ jp: '机が 1<span class="hl-part">つ</span> <span class="hl">あります</span>。', cn: '有一张桌子。' }, { jp: '本が 3<span class="hl-part">冊</span> <span class="hl">あります</span>。', cn: '有三本书。' }] },
      { num: '④', title: '位置に あります', body: '表示位置。', featured: false, examples: [{ jp: '机<span class="hl">は</span> 部屋<span class="hl-part">に</span> <span class="hl">あります</span>。', cn: '桌子在房间里。' }] }
    ],
    basicText: [
      { jp: '部屋<span class="hl-part">に</span> 机が <span class="hl">あります</span>。', cn: '房间里有桌子。' },
      { jp: '本棚<span class="hl-part">に</span> 本が <span class="hl">あります</span>。', cn: '书架上有书。' },
      { jp: '机<span class="hl">の</span> 上<span class="hl-part">に</span> 猫が <span class="hl">います</span>。', cn: '桌子上有猫。' },
      { jp: '机<span class="hl">の</span> 下<span class="hl-part">に</span> 猫が <span class="hl">います</span>。', cn: '桌子下有猫。' }
    ],
    dialoguePairs: [
      [{ speaker: '甲', jp: '机<span class="hl">の</span> 上<span class="hl-part">に</span> 何が <span class="hl">あります</span><span class="hl-q">か</span>。', cn: '桌子上有什么？', reply: false }, { speaker: '乙', jp: '時計が <span class="hl">あります</span>。', cn: '有表。', reply: true }],
      [{ speaker: '甲', jp: '部屋<span class="hl-part">に</span> テレビが <span class="hl">あります</span><span class="hl-q">か</span>。', cn: '房间里有电视吗？', reply: false }, { speaker: '乙', jp: 'いいえ、<span class="hl-neg">ありません</span>。', cn: '不，没有。', reply: true }]
    ],
    appTitle: '应用课文 · 李さんの部屋',
    appTurns: [
      { speaker: '小野', jp: '李さんの 部屋<span class="hl">は</span> どこ<span class="hl">ですか</span>。', cn: '小李的房间在哪里？', reply: false },
      { speaker: '李', jp: '305<span class="hl">です</span>。', cn: '305号。', reply: true },
      { speaker: '小野', jp: '部屋<span class="hl-part">に</span> 何が <span class="hl">あります</span><span class="hl-q">か</span>。', cn: '房间里有什么？', reply: false },
      { speaker: '李', jp: '机と いすが <span class="hl">あります</span>。', cn: '有桌子和椅子。', reply: true },
      { speaker: '小野', jp: '本<span class="hl">は</span> <span class="hl">あります</span><span class="hl-q">か</span>。', cn: '有书吗？', reply: false },
      { speaker: '李', jp: 'はい、本棚<span class="hl-part">に</span> 本が <span class="hl">あります</span>。', cn: '有，书架上有书。', reply: true }
    ],
    vocab: {
      circle1: [
        { jp: 'あります', kana: 'あります', pos: '动', cn: '有（无生命）' },
        { jp: 'います', kana: 'います', pos: '动', cn: '有（有生命）' },
        { jp: '部屋', kana: 'へや', pos: '名', cn: '房间' },
        { jp: '机', kana: 'つくえ', pos: '名', cn: '桌子' },
        { jp: 'いす', kana: 'いす', pos: '名', cn: '椅子' },
        { jp: '本棚', kana: 'ほんだな', pos: '名', cn: '书架' },
        { jp: '上', kana: 'うえ', pos: '名', cn: '上面' },
        { jp: '下', kana: 'した', pos: '名', cn: '下面' },
        { jp: '前', kana: 'まえ', pos: '名', cn: '前面' },
        { jp: '後ろ', kana: 'うしろ', pos: '名', cn: '后面' }
      ],
      circle2: [
        { jp: '右', kana: 'みぎ', pos: '名', cn: '右面' },
        { jp: '左', kana: 'ひだり', pos: '名', cn: '左面' },
        { jp: '中', kana: 'なか', pos: '名', cn: '里面' },
        { jp: '外', kana: 'そと', pos: '名', cn: '外面' },
        { jp: '隣', kana: 'となり', pos: '名', cn: '旁边' },
        { jp: '猫', kana: 'ねこ', pos: '名', cn: '猫' },
        { jp: '犬', kana: 'いぬ', pos: '名', cn: '狗' },
        { jp: '箱', kana: 'はこ', pos: '名', cn: '盒子，箱子' }
      ],
      circle3: [
        { jp: '冷蔵庫', kana: 'れいぞうこ', pos: '名', cn: '冰箱' },
        { jp: 'ベッド', kana: 'ベッド', pos: '名', cn: '床' },
        { jp: '窓', kana: 'まど', pos: '名', cn: '窗户' },
        { jp: '一', kana: 'いち', pos: '数', cn: '1' },
        { jp: '二', kana: 'に', pos: '数', cn: '2' },
        { jp: '三', kana: 'さん', pos: '数', cn: '3' }
      ]
    },
    homework: {
      choice: [
        { id: 'c1', source: '练习A-1', q: '部屋（＿＿＿） 机があります。', options: ['に', 'で', 'を', 'は'], answer: 0, explain: '存在场所用に' },
        { id: 'c2', source: '练习A-2', q: '机の上（＿＿＿） 猫がいます。', options: ['に', 'で', 'を', 'が'], answer: 0, explain: '位置に' },
        { id: 'c3', source: '练习A-3', q: '无生命事物存在用？', options: ['あります', 'います', 'です', 'します'], answer: 0, explain: 'あります/います' },
        { id: 'c4', source: '练习A-4', q: '人/动物存在用？', options: ['います', 'あります', 'です', 'いきます'], answer: 0, explain: '有生命います' },
        { id: 'c5', source: '练习A-5', q: '本が 3（＿＿＿） あります。', options: ['冊', '本', 'つ', '枚'], answer: 0, explain: '书用冊' },
        { id: 'c6', source: '练习A-6', q: '机（＿＿＿） ありますか。', options: ['も', 'は', 'が', 'に'], answer: 0, explain: '也…も' },
        { id: 'c7', source: '练习B-1', q: '机が 1（＿＿＿） あります。', options: ['つ', '冊', '枚', '人'], answer: 0, explain: '通用助数词つ' },
        { id: 'c8', source: '练习B-2', q: '否定：部屋に テレビが あります。→', options: ['部屋に テレビは ありません', '部屋に テレビが いません', '部屋は テレビです', '部屋に テレビを あります'], answer: 0, explain: 'ありません' }
      ],
      fill: [
        { id: 'f1', source: '练习A-1', q: '部屋（　） 机（　） あります。', answers: ['に', 'が'], explain: 'に+が' },
        { id: 'f2', source: '练习A-2', q: '本棚（　） 本（　） あります。', answers: ['に', 'が'], explain: '存在句' },
        { id: 'f3', source: '练习A-3', q: '机（　） 上（　） 猫（　） います。', answers: ['の', 'に', 'が'], explain: 'の+に+が' },
        { id: 'f4', source: '练习A-4', q: '本（　） 3冊（　） あります。', answers: ['が', ''], explain: '数量词' },
        { id: 'f5', source: '练习A-5', q: 'いいえ、（　） ありません。', answers: ['テレビは', ''], explain: '主题は否定' },
        { id: 'f6', source: '练习B-1', q: '隣（　） 何（　） あります（　）。', answers: ['に', 'が', 'か'], explain: '疑问' }
      ],
      translate: [
        { id: 't1', source: '练习B-1', q: '房间里有桌子。', answers: ['部屋に机があります', '部屋に 机が あります'], explain: 'に+が+あります' },
        { id: 't2', source: '练习B-2', q: '桌子上有猫。', answers: ['机の上に猫がいます', '机の 上に 猫が います'], explain: 'います' },
        { id: 't3', source: '练习B-3', q: '也有椅子。', answers: ['いすもあります', '椅子も あります'], explain: 'も' },
        { id: 't4', source: '练习B-4', q: '有三本书。', answers: ['本が3冊あります', '本が 3冊 あります'], explain: '数量词' }
      ],
      dialogue: [
        { id: 'd1', source: '会话-1', q: 'A：部屋に 何が ありますか。\\nB：（　　　　　　　）', answers: ['机と いすが あります', '本棚に 本が あります'], explain: '列举存在物' },
        { id: 'd2', source: '会话-2', q: 'A：テレビは ありますか。\\nB：いいえ、（　　　　　　　）', answers: ['ありません', 'テレビは ありません'], explain: '否定' },
        { id: 'd3', source: '会话-3', q: 'A：机の 上に 何が ありますか。\\nB：（　　　　　　　）', answers: ['時計が あります', '本が あります'], explain: '位置+存在' }
      ]
    },
    quiz: [
      { question: '部屋に 机があります', options: ['房间里有桌子', '桌子在房间里', '有房间', '桌子很大'], answer: 0 },
      { question: 'あります 用于？', options: ['无生命事物', '有生命的人/动物', '形容词', '过去式'], answer: 0 },
      { question: 'います 用于？', options: ['有生命的人/动物', '无生命事物', '场所', '时间'], answer: 0 },
      { question: 'へや', options: ['房间', '桌子', '上面', '里面'], answer: 0, qtype: 'word' },
      { question: 'つくえ', options: ['桌子', '椅子', '书架', '窗户'], answer: 0, qtype: 'word' },
      { question: '本が 3冊', options: ['三本书', '三个人', '三张', '三台'], answer: 0 },
      { question: '机の 上', options: ['桌子上', '桌子下', '房间中', '旁边'], answer: 0 },
      { question: 'となり', options: ['旁边', '上面', '里面', '后面'], answer: 0, qtype: 'word' }
    ]
  },
  {
    num: 5,
    id: 'lesson5',
    titleJp: '李さんはイさんに花をあげました',
    titleCn: '小李送给伊小姐花了',
    pages: { grammar: 16, text: 17, vocab: 18 },
    keyChips: ['<span class="hl-part">に</span>/<span class="hl-part">へ</span>/<span class="hl-part">で</span>/<span class="hl-part">と</span>/<span class="hl-part">から</span>', 'あげます/もらいます/くれます', '授受动词'],
    grammarTip: '第5课学习<strong>格助词</strong>和<strong>授受动词</strong>。に表对象/方向，で表动作场所/手段，と表共同/对象，から表起点。',
    rules: [
      { num: '①', title: '格助词 に／へ／で／と／から', body: 'に：对象、方向、时间；へ：方向；で：动作场所、手段；と：和、与；から：从、自。', featured: true, examples: [{ jp: '李さん<span class="hl">は</span> イさん<span class="hl-part">に</span> 花<span class="hl-part">を</span> あげ<span class="hl">ました</span>。', cn: '小李送给伊小姐花了。' }, { jp: '学校<span class="hl-part">へ</span> 行き<span class="hl">ます</span>。', cn: '去学校。' }] },
      { num: '②', title: 'あげます／もらいます／くれます', body: '授受动词：あげます（给出去）、もらいます（得到）、くれます（给我）。', featured: true, examples: [{ jp: 'わたし<span class="hl">は</span> 友達<span class="hl-part">に</span> 本<span class="hl-part">を</span> あげ<span class="hl">ます</span>。', cn: '我给朋友书。' }, { jp: 'わたし<span class="hl">は</span> 友達<span class="hl-part">に</span> 本<span class="hl-part">を</span> もらい<span class="hl">ました</span>。', cn: '我从朋友那里得到书。' }] },
      { num: '③', title: 'で 表示手段', body: '表示用某种手段做某事。', featured: false, examples: [{ jp: 'バス<span class="hl-part">で</span> 行き<span class="hl">ます</span>。', cn: '坐公共汽车去。' }] }
    ],
    basicText: [
      { jp: '李さん<span class="hl">は</span> イさん<span class="hl-part">に</span> 花<span class="hl-part">を</span> あげ<span class="hl">ました</span>。', cn: '小李送给伊小姐花了。' },
      { jp: 'わたし<span class="hl">は</span> 李さん<span class="hl-part">に</span> 中国語<span class="hl-part">を</span> 教え<span class="hl">て</span> もらい<span class="hl">ました</span>。', cn: '我请小李教了中文。' },
      { jp: 'イさん<span class="hl">は</span> 李さん<span class="hl-part">に</span> 日本語<span class="hl-part">を</span> 教え<span class="hl">ました</span>。', cn: '伊小姐教了小李日语。' }
    ],
    dialoguePairs: [
      [{ speaker: '甲', jp: '李さん<span class="hl">は</span> 何<span class="hl-part">を</span> あげ<span class="hl">ました</span><span class="hl-q">か</span>。', cn: '小李送了什么？', reply: false }, { speaker: '乙', jp: '花<span class="hl-part">を</span> あげ<span class="hl">ました</span>。', cn: '送了花。', reply: true }],
      [{ speaker: '甲', jp: '誰<span class="hl-part">に</span> あげ<span class="hl">ました</span><span class="hl-q">か</span>。', cn: '送给谁了？', reply: false }, { speaker: '乙', jp: 'イさん<span class="hl-part">に</span> あげ<span class="hl">ました</span>。', cn: '送给伊小姐了。', reply: true }]
    ],
    appTitle: '应用课文 · プレゼント',
    appTurns: [
      { speaker: '李', jp: 'イさん、これ<span class="hl">は</span> プレゼント<span class="hl">です</span>。', cn: '伊小姐，这是礼物。', reply: false },
      { speaker: 'イ', jp: 'あっ、ありがとう ございます。', cn: '啊，谢谢。', reply: true },
      { speaker: '李', jp: 'どうぞ。', cn: '请收下。', reply: false },
      { speaker: 'イ', jp: '李さん<span class="hl">は</span> 何<span class="hl-part">を</span> もらい<span class="hl">ました</span><span class="hl-q">か</span>。', cn: '小李收到什么了？', reply: true },
      { speaker: '李', jp: '手紙<span class="hl-part">を</span> もらい<span class="hl">ました</span>。', cn: '收到信了。', reply: false }
    ],
    vocab: {
      circle1: [
        { jp: 'あげます', kana: 'あげます', pos: '动', cn: '给（出去）' },
        { jp: 'もらいます', kana: 'もらいます', pos: '动', cn: '得到，收到' },
        { jp: 'くれます', kana: 'くれます', pos: '动', cn: '给（我）' },
        { jp: '花', kana: 'はな', pos: '名', cn: '花' },
        { jp: 'プレゼント', kana: 'プレゼント', pos: '名', cn: '礼物' },
        { jp: '手紙', kana: 'てがみ', pos: '名', cn: '信' },
        { jp: '教えます', kana: 'おしえます', pos: '动', cn: '教' },
        { jp: '行きます', kana: 'いきます', pos: '动', cn: '去' }
      ],
      circle2: [
        { jp: '来ます', kana: 'きます', pos: '动', cn: '来' },
        { jp: '帰ります', kana: 'かえります', pos: '动', cn: '回' },
        { jp: '学校', kana: 'がっこう', pos: '名', cn: '学校' },
        { jp: '会社', kana: 'かいしゃ', pos: '名', cn: '公司' },
        { jp: '電車', kana: 'でんしゃ', pos: '名', cn: '电车' },
        { jp: 'バス', kana: 'バス', pos: '名', cn: '公共汽车' },
        { jp: '友達', kana: 'ともだち', pos: '名', cn: '朋友' }
      ],
      circle3: [
        { jp: 'イ', kana: 'イ', pos: '专', cn: '伊（人名）' },
        { jp: '北京', kana: 'ペキン', pos: '专', cn: '北京' },
        { jp: '東京', kana: 'とうきょう', pos: '专', cn: '东京' },
        { jp: '中国語', kana: 'ちゅうごくご', pos: '名', cn: '中文' },
        { jp: '日本語', kana: 'にほんご', pos: '名', cn: '日语' }
      ]
    },
    homework: {
      choice: [
        { id: 'c1', source: '练习A-1', q: '李さんは イさん（＿＿＿） 花を あげました。', options: ['に', 'で', 'を', 'が'], answer: 0, explain: '对象用に' },
        { id: 'c2', source: '练习A-2', q: '学校（＿＿＿） 行きます。', options: ['へ', 'に', 'で', 'を'], answer: 0, explain: '方向へ/に' },
        { id: 'c3', source: '练习A-3', q: 'バス（＿＿＿） 行きます。', options: ['で', 'に', 'を', 'が'], answer: 0, explain: '手段で' },
        { id: 'c4', source: '练习A-4', q: '友達（＿＿＿） 映画を 見ます。', options: ['と', 'に', 'で', 'を'], answer: 0, explain: '共同と' },
        { id: 'c5', source: '练习A-5', q: '北京（＿＿＿） 来ました。', options: ['から', 'に', 'で', 'を'], answer: 0, explain: '起点から' },
        { id: 'c6', source: '练习A-6', q: '「もらいます」表示？', options: ['得到/收到', '给出去', '做', '去'], answer: 0, explain: '授受' },
        { id: 'c7', source: '练习B-1', q: 'わたしは 李さん（＿＿＿） 本を もらいました。', options: ['に', 'で', 'を', 'が'], answer: 0, explain: '从…得到' },
        { id: 'c8', source: '练习B-2', q: 'わたしは 友達（＿＿＿） 本を あげました。', options: ['に', 'で', 'を', 'と'], answer: 0, explain: '给…に' }
      ],
      fill: [
        { id: 'f1', source: '练习A-1', q: '李さん（　） イさん（　） 花（　） あげました。', answers: ['は', 'に', 'を'], explain: 'は+に+を' },
        { id: 'f2', source: '练习A-2', q: '学校（　） 行きます。', answers: ['へ', 'に'], explain: '方向' },
        { id: 'f3', source: '练习A-3', q: '電車（　） 行きます。', answers: ['で'], explain: '手段' },
        { id: 'f4', source: '练习A-4', q: '友達（　） 映画（　） 見ます。', answers: ['と', 'を'], explain: 'と+を' },
        { id: 'f5', source: '练习A-5', q: '北京（　） 来ました。', answers: ['から'], explain: '起点' },
        { id: 'f6', source: '练习B-1', q: 'わたし（　） 李さん（　） 中国語（　） 教えて もらいました。', answers: ['は', 'に', 'を'], explain: 'もらい' }
      ],
      translate: [
        { id: 't1', source: '练习B-1', q: '小李送给伊小姐花了。', answers: ['李さんはイさんに花をあげました', '李さんは イさんに 花を あげました'], explain: 'あげました' },
        { id: 't2', source: '练习B-2', q: '坐公共汽车去。', answers: ['バスで行きます', 'バスで 行きます'], explain: 'で' },
        { id: 't3', source: '练习B-3', q: '和朋友一起看电影。', answers: ['友達と映画を見ます', '友達と 映画を 見ます'], explain: 'と' },
        { id: 't4', source: '练习B-4', q: '我从李小姐那里得到信了。', answers: ['わたしは李さんに手紙をもらいました', 'わたしは 李さんに 手紙を もらいました'], explain: 'もらいました' }
      ],
      dialogue: [
        { id: 'd1', source: '会话-1', q: 'A：李さんは 何を あげましたか。\\nB：（　　　　　　　）', answers: ['花を あげました', 'イさんに 花を あげました'], explain: '宾语回答' },
        { id: 'd2', source: '会话-2', q: 'A：誰に あげましたか。\\nB：（　　　　　　　）', answers: ['イさんに あげました'], explain: '对象に' },
        { id: 'd3', source: '会话-3', q: 'A：どうやって 行きますか。\\nB：（　　　　　　　）', answers: ['バスで 行きます', '電車で 行きます'], explain: '手段で' }
      ]
    },
    quiz: [
      { question: '李さんは イさんに 花を あげました', options: ['小李送给伊小姐花了', '伊小姐送给小李花了', '小李买花了', '花很漂亮'], answer: 0 },
      { question: 'あげます', options: ['给（出去）', '得到', '做', '去'], answer: 0, qtype: 'word' },
      { question: 'もらいます', options: ['得到/收到', '给出去', '教', '来'], answer: 0, qtype: 'word' },
      { question: '手段助词是？', options: ['で', 'に', 'を', 'が'], answer: 0 },
      { question: '起点用？', options: ['から', 'まで', 'に', 'で'], answer: 0 },
      { question: '友達と 映画を 見ます', options: ['和朋友一起看电影', '给朋友看电影', '在朋友处看', '朋友看'], answer: 0 },
      { question: 'てがみ', options: ['信', '花', '礼物', '书'], answer: 0, qtype: 'word' },
      { question: 'くれます 视角是？', options: ['给我', '我给', '得到', '共同'], answer: 0 }
    ]
  },
  {
    num: 6,
    id: 'lesson6',
    titleJp: '小野さんはいつもパンを食べます',
    titleCn: '小野女士总是吃面包',
    pages: { grammar: 19, text: 20, vocab: 21 },
    keyChips: ['名<span class="hl-part">を</span> 动词', '时间表达', 'いつも/よく/時々/あまり/全然', '频率副词'],
    grammarTip: '第6课学习动词宾语「を」、<strong>时间表达</strong>和<strong>频率副词</strong>。を标记动作直接对象。',
    rules: [
      { num: '①', title: '名を 动词', body: 'を表示动作的直接对象。', featured: true, examples: [{ jp: '小野さん<span class="hl">は</span> パン<span class="hl-part">を</span> 食べ<span class="hl">ます</span>。', cn: '小野女士吃面包。' }, { jp: '新聞<span class="hl-part">を</span> 読み<span class="hl">ます</span>。', cn: '看报纸。' }] },
      { num: '②', title: '时间表达', body: '具体时刻用に；星期/日期/月份等一般不用に。', featured: true, examples: [{ jp: '7時<span class="hl-part">に</span> 起き<span class="hl">ます</span>。', cn: '7点起床。' }, { jp: '日曜日<span class="hl">に</span> 勉強<span class="hl">します</span>。', cn: '星期天学习。' }] },
      { num: '③', title: '频率副词', body: 'いつも（总是）、よく（经常）、時々（有时）、あまり（不太）+否定、全然（完全不）+否定。', featured: true, examples: [{ jp: 'いつも パン<span class="hl-part">を</span> 食べ<span class="hl">ます</span>。', cn: '总是吃面包。' }, { jp: 'あまり 食べ<span class="hl-neg">ません</span>。', cn: '不太吃。' }] }
    ],
    basicText: [
      { jp: '小野さん<span class="hl">は</span> いつも パン<span class="hl-part">を</span> 食べ<span class="hl">ます</span>。', cn: '小野女士总是吃面包。' },
      { jp: '李さん<span class="hl">は</span> 時々 コーヒー<span class="hl-part">を</span> 飲み<span class="hl">ます</span>。', cn: '小李有时喝咖啡。' },
      { jp: '森さん<span class="hl">は</span> 6時<span class="hl-part">に</span> 起き<span class="hl">ます</span>。', cn: '森先生6点起床。' },
      { jp: '李さん<span class="hl">は</span> あまり テレビ<span class="hl-part">を</span> 見<span class="hl-neg">ません</span>。', cn: '小李不太看电视。' }
    ],
    dialoguePairs: [
      [{ speaker: '甲', jp: '小野さん<span class="hl">は</span> 何<span class="hl-part">を</span> 食べ<span class="hl">ます</span><span class="hl-q">か</span>。', cn: '小野女士吃什么？', reply: false }, { speaker: '乙', jp: 'パン<span class="hl-part">を</span> 食べ<span class="hl">ます</span>。', cn: '吃面包。', reply: true }],
      [{ speaker: '甲', jp: '何時<span class="hl-part">に</span> 起き<span class="hl">ます</span><span class="hl-q">か</span>。', cn: '几点起床？', reply: false }, { speaker: '乙', jp: '6時<span class="hl-part">に</span> 起き<span class="hl">ます</span>。', cn: '6点起床。', reply: true }]
    ],
    appTitle: '应用课文 · 昼休み',
    appTurns: [
      { speaker: '李', jp: '小野さん、昼ごはん<span class="hl">は</span> 何<span class="hl-part">を</span> 食べ<span class="hl">ます</span><span class="hl-q">か</span>。', cn: '小野女士，午饭吃什么？', reply: false },
      { speaker: '小野', jp: 'パン<span class="hl-part">を</span> 食べ<span class="hl">ます</span>。', cn: '吃面包。', reply: true },
      { speaker: '李', jp: 'いつも パン<span class="hl">です</span><span class="hl-q">か</span>。', cn: '总是面包吗？', reply: false },
      { speaker: '小野', jp: 'はい、いつも パン<span class="hl">です</span>。', cn: '是的，总是面包。', reply: true }
    ],
    vocab: {
      circle1: [
        { jp: '食べます', kana: 'たべます', pos: '动', cn: '吃' },
        { jp: '飲みます', kana: 'のみます', pos: '动', cn: '喝' },
        { jp: '見ます', kana: 'みます', pos: '动', cn: '看' },
        { jp: '読みます', kana: 'よみます', pos: '动', cn: '读' },
        { jp: '起きます', kana: 'おきます', pos: '动', cn: '起床' },
        { jp: '寝ます', kana: 'ねます', pos: '动', cn: '睡觉' },
        { jp: '働きます', kana: 'はたらきます', pos: '动', cn: '工作' },
        { jp: '勉強します', kana: 'べんきょうします', pos: '动', cn: '学习' },
        { jp: 'パン', kana: 'パン', pos: '名', cn: '面包' },
        { jp: 'いつも', kana: 'いつも', pos: '副', cn: '总是' }
      ],
      circle2: [
        { jp: 'よく', kana: 'よく', pos: '副', cn: '经常' },
        { jp: '時々', kana: 'ときどき', pos: '副', cn: '有时' },
        { jp: 'あまり', kana: 'あまり', pos: '副', cn: '不太（+否定）' },
        { jp: '全然', kana: 'ぜんぜん', pos: '副', cn: '完全（+否定）' },
        { jp: '新聞', kana: 'しんぶん', pos: '名', cn: '报纸' },
        { jp: '昼ごはん', kana: 'ひるごはん', pos: '名', cn: '午饭' },
        { jp: '朝ごはん', kana: 'あさごはん', pos: '名', cn: '早饭' },
        { jp: '晩ごはん', kana: 'ばんごはん', pos: '名', cn: '晚饭' }
      ],
      circle3: [
        { jp: '月曜日', kana: 'げつようび', pos: '名', cn: '星期一' },
        { jp: '火曜日', kana: 'かようび', pos: '名', cn: '星期二' },
        { jp: '水曜日', kana: 'すいようび', pos: '名', cn: '星期三' },
        { jp: '木曜日', kana: 'もくようび', pos: '名', cn: '星期四' },
        { jp: '金曜日', kana: 'きんようび', pos: '名', cn: '星期五' },
        { jp: '土曜日', kana: 'どようび', pos: '名', cn: '星期六' },
        { jp: '日曜日', kana: 'にちようび', pos: '名', cn: '星期日' }
      ]
    },
    homework: {
      choice: [
        { id: 'c1', source: '练习A-1', q: 'パン（＿＿＿） 食べます。', options: ['を', 'に', 'で', 'が'], answer: 0, explain: '宾语を' },
        { id: 'c2', source: '练习A-2', q: '6時（＿＿＿） 起きます。', options: ['に', 'で', 'を', 'が'], answer: 0, explain: '时刻に' },
        { id: 'c3', source: '练习A-3', q: '（＿＿＿） パンを 食べます。', options: ['いつも', 'あまり', '全然', '時々'], answer: 0, explain: '总是' },
        { id: 'c4', source: '练习A-4', q: 'あまり 食べ（＿＿＿）。', options: ['ません', 'ます', 'ました', 'ましょう'], answer: 0, explain: 'あまり+否定' },
        { id: 'c5', source: '练习A-5', q: '新聞（＿＿＿） 読みます。', options: ['を', 'に', 'で', 'が'], answer: 0, explain: 'を' },
        { id: 'c6', source: '练习A-6', q: '「よく」表示？', options: ['经常', '有时', '不太', '总是'], answer: 0, explain: '频率' },
        { id: 'c7', source: '练习B-1', q: '全然 テレビ（＿＿＿） 見ません。', options: ['を', 'に', 'で', 'が'], answer: 0, explain: 'を+否定' },
        { id: 'c8', source: '练习B-2', q: '時々 コーヒー（＿＿＿） 飲みます。', options: ['を', 'に', 'で', 'と'], answer: 0, explain: '宾语を' }
      ],
      fill: [
        { id: 'f1', source: '练习A-1', q: 'パン（　） 食べます。', answers: ['を'], explain: 'を' },
        { id: 'f2', source: '练习A-2', q: '7時（　） 起きます。', answers: ['に'], explain: '时刻' },
        { id: 'f3', source: '练习A-3', q: '（　） パン（　） 食べます。', answers: ['いつも', 'を'], explain: '频率+を' },
        { id: 'f4', source: '练习A-4', q: 'あまり テレビ（　） 見（　）。', answers: ['を', 'ません'], explain: 'あまり+否定' },
        { id: 'f5', source: '练习A-5', q: '新聞（　） 読みます。', answers: ['を'], explain: 'を' },
        { id: 'f6', source: '练习B-1', q: '日曜日（　） 勉強（　）。', answers: ['に', 'します'], explain: '时间+动词' }
      ],
      translate: [
        { id: 't1', source: '练习B-1', q: '小野女士总是吃面包。', answers: ['小野さんはいつもパンを食べます', '小野さんは いつも パンを 食べます'], explain: 'いつも+を' },
        { id: 't2', source: '练习B-2', q: '6点起床。', answers: ['6時に起きます', '6時に 起きます'], explain: 'に' },
        { id: 't3', source: '练习B-3', q: '不太看电视。', answers: ['あまりテレビを見ません', 'あまり テレビを 見ません'], explain: 'あまり+否定' },
        { id: 't4', source: '练习B-4', q: '有时喝咖啡。', answers: ['時々コーヒーを飲みます', '時々 コーヒーを 飲みます'], explain: '時々' }
      ],
      dialogue: [
        { id: 'd1', source: '会话-1', q: 'A：何を 食べますか。\\nB：（　　　　　　　）', answers: ['パンを 食べます', 'ごはんを 食べます'], explain: 'を+动词' },
        { id: 'd2', source: '会话-2', q: 'A：何時に 起きますか。\\nB：（　　　　　　　）', answers: ['6時に 起きます', '7時に 起きます'], explain: '时刻' },
        { id: 'd3', source: '会话-3', q: 'A：いつも パンですか。\\nB：（　　　　　　　）', answers: ['はい、いつも パンです', 'いいえ、時々 ごはんです'], explain: '频率' }
      ]
    },
    quiz: [
      { question: '小野さんは いつも パンを 食べます', options: ['小野总是吃面包', '小野有时吃面包', '小野不吃面包', '小野做面包'], answer: 0 },
      { question: '宾语助词', options: ['を', 'に', 'で', 'が'], answer: 0 },
      { question: 'たべます', options: ['吃', '喝', '看', '读'], answer: 0, qtype: 'word' },
      { question: 'あまり 需搭配？', options: ['否定', '肯定', '过去', '疑问'], answer: 0 },
      { question: '7時に 起きます', options: ['7点起床', '7点睡觉', '7点工作', '7点学习'], answer: 0 },
      { question: 'ときどき', options: ['有时', '总是', '经常', '完全'], answer: 0, qtype: 'word' },
      { question: 'よみます', options: ['读', '写', '听', '说'], answer: 0, qtype: 'word' },
      { question: 'ひるごはん', options: ['午饭', '早饭', '晚饭', '面包'], answer: 0, qtype: 'word' }
    ]
  },
  {
    num: 7,
    id: 'lesson7',
    titleJp: '李さんは毎日コーヒーを飲みません',
    titleCn: '小李每天都不喝咖啡',
    pages: { grammar: 22, text: 23, vocab: 24 },
    keyChips: ['动词<span class="hl-neg">ません</span>', '动词<span class="hl">ました</span>', '动词变位', '毎日/昨日/先週'],
    grammarTip: '第7课学习动词<strong>否定形</strong>（ません）和<strong>过去式</strong>（ました）。一类动词变位规则是本课重点。',
    rules: [
      { num: '①', title: '动词ません形', body: '表示现在/将来否定。一类：词尾う段→あ段+ません；二类：去る+ません；三类：します→しません、来ます→来ません。', featured: true, examples: [{ jp: '毎日 コーヒー<span class="hl-part">を</span> 飲み<span class="hl-neg">ません</span>。', cn: '每天都不喝咖啡。' }, { jp: '昨日 勉強<span class="hl-neg">しませんでした</span>。', cn: '昨天没学习。' }] },
      { num: '②', title: '动词ました形', body: '表示过去肯定。一类：词尾う段→い段+ました；二类：去る+ました。', featured: true, examples: [{ jp: '昨日 映画<span class="hl-part">を</span> 見<span class="hl">ました</span>。', cn: '昨天看了电影。' }, { jp: '先週 北京<span class="hl-part">へ</span> 行き<span class="hl">ました</span>。', cn: '上周去了北京。' }] },
      { num: '③', title: '时间词', body: '毎日、昨日、先週、先月、去年等。', featured: false, examples: [{ jp: '毎日 7時<span class="hl-part">に</span> 起き<span class="hl">ます</span>。', cn: '每天7点起床。' }] }
    ],
    basicText: [
      { jp: '李さん<span class="hl">は</span> 毎日 コーヒー<span class="hl-part">を</span> 飲み<span class="hl-neg">ません</span>。', cn: '小李每天都不喝咖啡。' },
      { jp: '森さん<span class="hl">は</span> 昨日 勉強<span class="hl-neg">しませんでした</span>。', cn: '森先生昨天没学习。' },
      { jp: '小野さん<span class="hl">は</span> 先週 映画<span class="hl-part">を</span> 見<span class="hl">ました</span>。', cn: '小野女士上周看了电影。' },
      { jp: '李さん<span class="hl">は</span> 先月 北京<span class="hl-part">へ</span> 行き<span class="hl">ました</span>。', cn: '小李上月去了北京。' }
    ],
    dialoguePairs: [
      [{ speaker: '甲', jp: '昨日 何<span class="hl-part">を</span> し<span class="hl">ました</span><span class="hl-q">か</span>。', cn: '昨天做什么了？', reply: false }, { speaker: '乙', jp: '映画<span class="hl-part">を</span> 見<span class="hl">ました</span>。', cn: '看了电影。', reply: true }],
      [{ speaker: '甲', jp: '毎日 コーヒー<span class="hl-part">を</span> 飲み<span class="hl">ます</span><span class="hl-q">か</span>。', cn: '每天都喝咖啡吗？', reply: false }, { speaker: '乙', jp: 'いいえ、飲み<span class="hl-neg">ません</span>。', cn: '不，不喝。', reply: true }]
    ],
    appTitle: '应用课文 · 週末',
    appTurns: [
      { speaker: '李', jp: '先週の 週末、何<span class="hl-part">を</span> し<span class="hl">ました</span><span class="hl-q">か</span>。', cn: '上周末做什么了？', reply: false },
      { speaker: '小野', jp: '映画<span class="hl-part">を</span> 見<span class="hl">ました</span>。', cn: '看了电影。', reply: true },
      { speaker: '李', jp: 'いい 映画<span class="hl">でした</span><span class="hl-q">か</span>。', cn: '是好电影吗？', reply: false },
      { speaker: '小野', jp: 'はい、とても よかった<span class="hl">です</span>。', cn: '是的，非常好。', reply: true }
    ],
    vocab: {
      circle1: [
        { jp: '毎日', kana: 'まいにち', pos: '名', cn: '每天' },
        { jp: '昨日', kana: 'きのう', pos: '名', cn: '昨天' },
        { jp: '先週', kana: 'せんしゅう', pos: '名', cn: '上周' },
        { jp: '先月', kana: 'せんげつ', pos: '名', cn: '上月' },
        { jp: '去年', kana: 'きょねん', pos: '名', cn: '去年' },
        { jp: '映画', kana: 'えいが', pos: '名', cn: '电影' },
        { jp: '週末', kana: 'しゅうまつ', pos: '名', cn: '周末' },
        { jp: '買います', kana: 'かいます', pos: '动', cn: '买' },
        { jp: '書きます', kana: 'かきます', pos: '动', cn: '写' },
        { jp: '聞きます', kana: 'ききます', pos: '动', cn: '听' }
      ],
      circle2: [
        { jp: '話します', kana: 'はなします', pos: '动', cn: '说，讲' },
        { jp: '作ります', kana: 'つくります', pos: '动', cn: '做，制作' },
        { jp: '売ります', kana: 'うります', pos: '动', cn: '卖' },
        { jp: '貸します', kana: 'かします', pos: '动', cn: '借出' },
        { jp: '借ります', kana: 'かります', pos: '动', cn: '借入' },
        { jp: '洗います', kana: 'あらいます', pos: '动', cn: '洗' },
        { jp: '使います', kana: 'つかいます', pos: '动', cn: '用' }
      ],
      circle3: [
        { jp: '一昨日', kana: 'おととい', pos: '名', cn: '前天' },
        { jp: '来週', kana: 'らいしゅう', pos: '名', cn: '下周' },
        { jp: '来月', kana: 'らいげつ', pos: '名', cn: '下月' },
        { jp: '来年', kana: 'らいねん', pos: '名', cn: '明年' },
        { jp: '今週', kana: 'こんしゅう', pos: '名', cn: '本周' }
      ]
    },
    homework: {
      choice: [
        { id: 'c1', source: '练习A-1', q: '毎日 コーヒーを 飲み（＿＿＿）。', options: ['ません', 'ました', 'ます', 'ましょう'], answer: 0, explain: '否定' },
        { id: 'c2', source: '练习A-2', q: '昨日 映画を 見（＿＿＿）。', options: ['ました', 'ません', 'ます', 'ましょう'], answer: 0, explain: '过去肯定' },
        { id: 'c3', source: '练习A-3', q: '食べます 的否定是？', options: ['食べません', '食べない', '食べました', '食べましょう'], answer: 0, explain: '二类动词' },
        { id: 'c4', source: '练习A-4', q: '行きます 的过去是？', options: ['行きました', '行きません', '行きます', '行きましょう'], answer: 0, explain: '一类动词' },
        { id: 'c5', source: '练习A-5', q: '勉強します 的否定过去是？', options: ['勉強しませんでした', '勉強しません', '勉強しました', '勉強します'], answer: 0, explain: '过去否定' },
        { id: 'c6', source: '练习A-6', q: '「先週」表示？', options: ['上周', '下周', '本周', '每天'], answer: 0, explain: '时间词' },
        { id: 'c7', source: '练习B-1', q: '来ます 的否定是？', options: ['来ません', '来ない', '来ました', '来ましょう'], answer: 0, explain: '三类动词' },
        { id: 'c8', source: '练习B-2', q: '読みます 的过去是？', options: ['読みました', '読みません', '読みます', '読みましょう'], answer: 0, explain: '一类动词过去' }
      ],
      fill: [
        { id: 'f1', source: '练习A-1', q: '毎日 コーヒー（　） 飲み（　）。', answers: ['を', 'ません'], explain: '否定' },
        { id: 'f2', source: '练习A-2', q: '昨日 映画（　） 見（　）。', answers: ['を', 'ました'], explain: '过去' },
        { id: 'f3', source: '练习A-3', q: '先週 北京（　） 行き（　）。', answers: ['へ', 'ました'], explain: '方向+过去' },
        { id: 'f4', source: '练习A-4', q: '昨日 勉強（　）。', answers: ['しませんでした'], explain: '过去否定' },
        { id: 'f5', source: '练习A-5', q: '先月 本（　） 買い（　）。', answers: ['を', 'ました'], explain: 'を+ました' },
        { id: 'f6', source: '练习B-1', q: '毎日 7時（　） 起き（　）。', answers: ['に', 'ます'], explain: '现在习惯' }
      ],
      translate: [
        { id: 't1', source: '练习B-1', q: '小李每天都不喝咖啡。', answers: ['李さんは毎日コーヒーを飲みません', '李さんは 毎日 コーヒーを 飲みません'], explain: '毎日+ません' },
        { id: 't2', source: '练习B-2', q: '昨天看了电影。', answers: ['昨日映画を見ました', '昨日 映画を 見ました'], explain: 'ました' },
        { id: 't3', source: '练习B-3', q: '上周去了北京。', answers: ['先週北京へ行きました', '先週 北京へ 行きました'], explain: '先週+ました' },
        { id: 't4', source: '练习B-4', q: '昨天没学习。', answers: ['昨日勉強しませんでした', '昨日 勉強しませんでした'], explain: '过去否定' }
      ],
      dialogue: [
        { id: 'd1', source: '会话-1', q: 'A：昨日 何を しましたか。\\nB：（　　　　　　　）', answers: ['映画を 見ました', '本を 読みました'], explain: '过去动作' },
        { id: 'd2', source: '会话-2', q: 'A：毎日 コーヒーを 飲みますか。\\nB：いいえ、（　　　　　　　）', answers: ['飲みません', '毎日 飲みません'], explain: '否定' },
        { id: 'd3', source: '会话-3', q: 'A：先週 何を しましたか。\\nB：（　　　　　　　）', answers: ['北京へ 行きました', '映画を 見ました'], explain: '先週+过去' }
      ]
    },
    quiz: [
      { question: '李さんは 毎日 コーヒーを 飲みません', options: ['小李每天都不喝咖啡', '小李每天喝咖啡', '小李昨天喝咖啡', '小李喜欢咖啡'], answer: 0 },
      { question: '飲みません', options: ['不喝（礼貌否定）', '喝了', '在喝', '请喝'], answer: 0 },
      { question: '見ました', options: ['看了（过去）', '不看', '在看', '请看'], answer: 0 },
      { question: 'まいにち', options: ['每天', '昨天', '上周', '上月'], answer: 0, qtype: 'word' },
      { question: 'きのう', options: ['昨天', '前天', '明天', '每天'], answer: 0, qtype: 'word' },
      { question: 'せんしゅう', options: ['上周', '下周', '本周', '去年'], answer: 0, qtype: 'word' },
      { question: '勉強しませんでした', options: ['没学习（过去否定）', '学习了', '在学习', '请学习'], answer: 0 },
      { question: '一类动词否定：行きます→', options: ['行きません', '行ません', '行きない', '行きました'], answer: 0 }
    ]
  },
  {
    num: 8,
    id: 'lesson8',
    titleJp: '李さんは日本語が上手です',
    titleCn: '小李日语很好',
    pages: { grammar: 25, text: 26, vocab: 27 },
    keyChips: ['い形容词', 'な形容词', '名<span class="hl-part">が</span>', '好き<span class="hl-part">が</span>'],
    grammarTip: '第8课学习<strong>い形容词</strong>和<strong>な形容词</strong>作谓语，以及助词「が」表示主语/对象。',
    rules: [
      { num: '①', title: 'い形容词谓语', body: 'い形容词直接作谓语，现在肯定：～いです；否定：～くないです/～くありません；过去：～かったです。', featured: true, examples: [{ jp: 'この 本<span class="hl">は</span> おもしろ<span class="hl">い</span><span class="hl">です</span>。', cn: '这本书有意思。' }, { jp: 'この 本<span class="hl">は</span> おもしろ<span class="hl-neg">くない</span><span class="hl">です</span>。', cn: '这本书没意思。' }] },
      { num: '②', title: 'な形容词谓语', body: 'な形容词作谓语：～です；修饰名词：～な+名词。', featured: true, examples: [{ jp: '李さん<span class="hl">は</span> 日本語<span class="hl-part">が</span> 上手<span class="hl">です</span>。', cn: '小李日语很好。' }, { jp: '静か<span class="hl">な</span> 部屋<span class="hl">です</span>。', cn: '是安静的房间。' }] },
      { num: '③', title: 'が 表示能力/好恶对象', body: '上手/下手/好き/嫌い/わかる 等用が标记对象。', featured: true, examples: [{ jp: 'わたし<span class="hl">は</span> 中国語<span class="hl-part">が</span> 好き<span class="hl">です</span>。', cn: '我喜欢中文。' }] }
    ],
    basicText: [
      { jp: '李さん<span class="hl">は</span> 日本語<span class="hl-part">が</span> 上手<span class="hl">です</span>。', cn: '小李日语很好。' },
      { jp: 'この 本<span class="hl">は</span> おもしろ<span class="hl">い</span><span class="hl">です</span>。', cn: '这本书有意思。' },
      { jp: 'わたし<span class="hl">は</span> 中国語<span class="hl-part">が</span> 好き<span class="hl">です</span>。', cn: '我喜欢中文。' },
      { jp: 'この 部屋<span class="hl">は</span> 静か<span class="hl">です</span>。', cn: '这个房间很安静。' }
    ],
    dialoguePairs: [
      [{ speaker: '甲', jp: '李さん<span class="hl">は</span> 日本語<span class="hl-part">が</span> 上手<span class="hl">です</span><span class="hl-q">か</span>。', cn: '小李日语好吗？', reply: false }, { speaker: '乙', jp: 'はい、上手<span class="hl">です</span>。', cn: '是的，很好。', reply: true }],
      [{ speaker: '甲', jp: '何<span class="hl-part">が</span> 好き<span class="hl">です</span><span class="hl-q">か</span>。', cn: '喜欢什么？', reply: false }, { speaker: '乙', jp: '中国語<span class="hl-part">が</span> 好き<span class="hl">です</span>。', cn: '喜欢中文。', reply: true }]
    ],
    appTitle: '应用课文 · 自己紹介',
    appTurns: [
      { speaker: '李', jp: 'わたし<span class="hl">は</span> 李<span class="hl">です</span>。中国<span class="hl">から</span> 来<span class="hl">ました</span>。', cn: '我是李。从中国来的。', reply: false },
      { speaker: '李', jp: '日本語<span class="hl-part">が</span> 好き<span class="hl">です</span>。', cn: '我喜欢日语。', reply: false },
      { speaker: '小野', jp: '李さん<span class="hl">は</span> 日本語<span class="hl-part">が</span> 上手<span class="hl">です</span><span class="hl-q">ね</span>。', cn: '小李日语很好啊。', reply: true },
      { speaker: '李', jp: 'いいえ、まだ 下手<span class="hl">です</span>。', cn: '不，还不好。', reply: false }
    ],
    vocab: {
      circle1: [
        { jp: '上手', kana: 'じょうず', pos: 'な形', cn: '好，擅长' },
        { jp: '下手', kana: 'へた', pos: 'な形', cn: '不好，不擅长' },
        { jp: '好き', kana: 'すき', pos: 'な形', cn: '喜欢' },
        { jp: '嫌い', kana: 'きらい', pos: 'な形', cn: '不喜欢' },
        { jp: 'おもしろい', kana: 'おもしろい', pos: 'い形', cn: '有意思' },
        { jp: '静か', kana: 'しずか', pos: 'な形', cn: '安静' },
        { jp: 'にぎやか', kana: 'にぎやか', pos: 'な形', cn: '热闹' },
        { jp: '大きい', kana: 'おおきい', pos: 'い形', cn: '大' },
        { jp: '小さい', kana: 'ちいさい', pos: 'い形', cn: '小' },
        { jp: '新しい', kana: 'あたらしい', pos: 'い形', cn: '新' }
      ],
      circle2: [
        { jp: '古い', kana: 'ふるい', pos: 'い形', cn: '旧，老' },
        { jp: '高い', kana: 'たかい', pos: 'い形', cn: '高，贵' },
        { jp: '安い', kana: 'やすい', pos: 'い形', cn: '便宜' },
        { jp: '暑い', kana: 'あつい', pos: 'い形', cn: '热' },
        { jp: '寒い', kana: 'さむい', pos: 'い形', cn: '冷' },
        { jp: '忙しい', kana: 'いそがしい', pos: 'い形', cn: '忙' },
        { jp: '暇', kana: 'ひま', pos: 'な形', cn: '有空，空闲' },
        { jp: '元気', kana: 'げんき', pos: 'な形', cn: '健康，精神' }
      ],
      circle3: [
        { jp: 'きれい', kana: 'きれい', pos: 'な形', cn: '漂亮，干净' },
        { jp: '有名', kana: 'ゆうめい', pos: 'な形', cn: '有名' },
        { jp: '便利', kana: 'べんり', pos: 'な形', cn: '方便' },
        { jp: '不便', kana: 'ふべん', pos: 'な形', cn: '不方便' },
        { jp: 'わかります', kana: 'わかります', pos: '动', cn: '明白，懂' }
      ]
    },
    homework: {
      choice: [
        { id: 'c1', source: '练习A-1', q: '李さんは 日本語（＿＿＿） 上手です。', options: ['が', 'は', 'を', 'に'], answer: 0, explain: '能力对象が' },
        { id: 'c2', source: '练习A-2', q: 'この 本は おもしろ（＿＿＿） です。', options: ['い', 'な', 'く', 'くない'], answer: 0, explain: 'い形容词' },
        { id: 'c3', source: '练习A-3', q: '静か（＿＿＿） 部屋', options: ['な', 'い', 'く', 'に'], answer: 0, explain: 'な形容词修饰' },
        { id: 'c4', source: '练习A-4', q: '中国語（＿＿＿） 好きです。', options: ['が', 'は', 'を', 'に'], answer: 0, explain: '好きが' },
        { id: 'c5', source: '练习A-5', q: 'おもしろく（＿＿＿） です。', options: ['ない', 'い', 'な', 'く'], answer: 0, explain: 'い形否定' },
        { id: 'c6', source: '练习A-6', q: '「上手」是？', options: ['な形容词', 'い形容词', '动词', '名词'], answer: 0, explain: 'な形' },
        { id: 'c7', source: '练习B-1', q: 'この 部屋は 静か（＿＿＿） です。', options: ['', 'い', 'な', 'く'], answer: 0, explain: 'な形谓语直接+です' },
        { id: 'c8', source: '练习B-2', q: '日本語（＿＿＿） わかりますか。', options: ['が', 'は', 'を', 'に'], answer: 0, explain: 'わかる+が' }
      ],
      fill: [
        { id: 'f1', source: '练习A-1', q: '李さん（　） 日本語（　） 上手（　）。', answers: ['は', 'が', 'です'], explain: 'は+が+です' },
        { id: 'f2', source: '练习A-2', q: 'この 本（　） おもしろ（　）。', answers: ['は', 'いです'], explain: 'い形' },
        { id: 'f3', source: '练习A-3', q: '静か（　） 部屋（　）。', answers: ['な', 'です'], explain: 'な+名词' },
        { id: 'f4', source: '练习A-4', q: 'わたし（　） 中国語（　） 好き（　）。', answers: ['は', 'が', 'です'], explain: '好き' },
        { id: 'f5', source: '练习A-5', q: 'この 本（　） おもしろ（　） です。', answers: ['は', 'くない'], explain: '否定' },
        { id: 'f6', source: '练习B-1', q: '日本語（　） 下手（　）。', answers: ['が', 'です'], explain: '下手' }
      ],
      translate: [
        { id: 't1', source: '练习B-1', q: '小李日语很好。', answers: ['李さんは日本語が上手です', '李さんは 日本語が 上手です'], explain: 'が+上手' },
        { id: 't2', source: '练习B-2', q: '这本书有意思。', answers: ['この本はおもしろいです', 'この 本は おもしろい です'], explain: 'い形' },
        { id: 't3', source: '练习B-3', q: '我喜欢中文。', answers: ['わたしは中国語が好きです', 'わたしは 中国語が 好きです'], explain: '好き' },
        { id: 't4', source: '练习B-4', q: '这个房间很安静。', answers: ['この部屋は静かです', 'この 部屋は 静か です'], explain: 'な形谓语' }
      ],
      dialogue: [
        { id: 'd1', source: '会话-1', q: 'A：李さんは 日本語が 上手ですか。\\nB：（　　　　　　　）', answers: ['はい、上手です', 'いいえ、下手です'], explain: '能力' },
        { id: 'd2', source: '会话-2', q: 'A：何が 好きですか。\\nB：（　　　　　　　）', answers: ['中国語が 好きです', '日本語が 好きです'], explain: '好き+が' },
        { id: 'd3', source: '会话-3', q: 'A：この 本は おもしろいですか。\\nB：（　　　　　　　）', answers: ['はい、おもしろいです', 'いいえ、おもしろくないです'], explain: 'い形' }
      ]
    },
    quiz: [
      { question: '李さんは 日本語が 上手です', options: ['小李日语很好', '小李是日本人', '小李喜欢日语', '小李说日语'], answer: 0 },
      { question: 'じょうず', options: ['擅长/好', '不擅长', '喜欢', '安静'], answer: 0, qtype: 'word' },
      { question: 'おもしろい 否定', options: ['おもしろくない', 'おもしろいない', 'おもしろく', 'おもしろな'], answer: 0 },
      { question: '好き 的对象用？', options: ['が', 'は', 'を', 'に'], answer: 0 },
      { question: 'しずかな 部屋', options: ['安静的房间', '大的房间', '新的房间', '贵的房间'], answer: 0 },
      { question: '「上手」词类', options: ['な形容词', 'い形容词', '动词', '副词'], answer: 0 },
      { question: 'すき', options: ['喜欢', '不喜欢', '擅长', '不擅长'], answer: 0, qtype: 'word' },
      { question: 'この 本は おもしろいです', options: ['这本书有意思', '这本书很贵', '这本书很大', '这本书很旧'], answer: 0 }
    ]
  },
  {
    num: 9,
    id: 'lesson9',
    titleJp: 'カリナさんはいますか',
    titleCn: '卡莉娜在吗',
    pages: { grammar: 29, text: 30, vocab: 31 },
    keyChips: ['あります/<span class="hl">います</span>疑问', '数量词', '场所<span class="hl-part">に</span>', 'だけ/も/など'],
    grammarTip: '第9课学习存在动词疑问、<strong>数量词</strong>和场所表达。います/あります的疑问和否定。',
    rules: [
      { num: '①', title: 'ありますか／いますか', body: '询问有无。', featured: true, examples: [{ jp: 'カリナさん<span class="hl">は</span> <span class="hl">います</span><span class="hl-q">か</span>。', cn: '卡莉娜在吗？' }, { jp: '机<span class="hl">の</span> 上<span class="hl-part">に</span> 本<span class="hl">が</span> <span class="hl">あります</span><span class="hl-q">か</span>。', cn: '桌子上有书吗？' }] },
      { num: '②', title: '数量词＋だけ／も', body: 'だけ（只有）、も（也/多达）。', featured: true, examples: [{ jp: '1<span class="hl-part">つ</span> <span class="hl">だけ</span> <span class="hl">あります</span>。', cn: '只有一个。' }, { jp: '学生<span class="hl">が</span> 30<span class="hl-part">人</span> <span class="hl">います</span>。', cn: '有30名学生。' }] },
      { num: '③', title: 'など', body: '表示列举未完。', featured: false, examples: [{ jp: '本<span class="hl">や</span> ノート<span class="hl">など</span> <span class="hl">が</span> <span class="hl">あります</span>。', cn: '有书、笔记本等。' }] }
    ],
    basicText: [
      { jp: 'カリナさん<span class="hl">は</span> <span class="hl">います</span><span class="hl-q">か</span>。', cn: '卡莉娜在吗？' },
      { jp: 'いいえ、今 <span class="hl-neg">いません</span>。', cn: '不，现在不在。' },
      { jp: '学生<span class="hl">が</span> 30<span class="hl-part">人</span> <span class="hl">います</span>。', cn: '有30名学生。' },
      { jp: '机<span class="hl">の</span> 上<span class="hl-part">に</span> 本<span class="hl">が</span> 3<span class="hl-part">冊</span> <span class="hl">あります</span>。', cn: '桌子上有3本书。' }
    ],
    dialoguePairs: [
      [{ speaker: '甲', jp: 'カリナさん<span class="hl">は</span> <span class="hl">います</span><span class="hl-q">か</span>。', cn: '卡莉娜在吗？', reply: false }, { speaker: '乙', jp: 'いいえ、今 <span class="hl-neg">いません</span>。', cn: '不，现在不在。', reply: true }],
      [{ speaker: '甲', jp: '教室<span class="hl-part">に</span> 学生<span class="hl">が</span> 何人<span class="hl">います</span><span class="hl-q">か</span>。', cn: '教室里有多少学生？', reply: false }, { speaker: '乙', jp: '30<span class="hl-part">人</span> <span class="hl">います</span>。', cn: '有30人。', reply: true }]
    ],
    appTitle: '应用课文 · 会議室',
    appTurns: [
      { speaker: '李', jp: '会議室<span class="hl-part">に</span> 誰<span class="hl">が</span> <span class="hl">います</span><span class="hl-q">か</span>。', cn: '会议室里有谁？', reply: false },
      { speaker: '小野', jp: '森さん<span class="hl">だけ</span> <span class="hl">います</span>。', cn: '只有森先生。', reply: true },
      { speaker: '李', jp: 'カリナさん<span class="hl">は</span> <span class="hl">います</span><span class="hl-q">か</span>。', cn: '卡莉娜在吗？', reply: false },
      { speaker: '小野', jp: 'いいえ、<span class="hl-neg">いません</span>。', cn: '不在。', reply: true }
    ],
    vocab: {
      circle1: [
        { jp: 'います', kana: 'います', pos: '动', cn: '在（有生命）' },
        { jp: 'あります', kana: 'あります', pos: '动', cn: '在/有（无生命）' },
        { jp: 'だけ', kana: 'だけ', pos: '助', cn: '只，仅' },
        { jp: 'など', kana: 'など', pos: '助', cn: '等等' },
        { jp: '一人', kana: 'ひとり', pos: '名', cn: '1个人' },
        { jp: '二人', kana: 'ふたり', pos: '名', cn: '2个人' },
        { jp: '何人', kana: 'なんにん', pos: '名', cn: '几个人' },
        { jp: '会議室', kana: 'かいぎしつ', pos: '名', cn: '会议室' },
        { jp: '今', kana: 'いま', pos: '名', cn: '现在' },
        { jp: 'カリナ', kana: 'カリナ', pos: '专', cn: '卡莉娜' }
      ],
      circle2: [
        { jp: '誰', kana: 'だれ', pos: '代', cn: '谁' },
        { jp: 'みんな', kana: 'みんな', pos: '名', cn: '大家' },
        { jp: '教室', kana: 'きょうしつ', pos: '名', cn: '教室' },
        { jp: '食堂', kana: 'しょくどう', pos: '名', cn: '食堂' },
        { jp: '階', kana: 'かい', pos: '名', cn: '层' },
        { jp: '～人', kana: '～にん', pos: '助数', cn: '…人' },
        { jp: '～冊', kana: '～さつ', pos: '助数', cn: '…册' }
      ],
      circle3: [
        { jp: '～台', kana: '～だい', pos: '助数', cn: '…台' },
        { jp: '～本', kana: '～ほん', pos: '助数', cn: '…本/条' },
        { jp: '～枚', kana: '～まい', pos: '助数', cn: '…张/片' },
        { jp: '～匹', kana: '～ひき', pos: '助数', cn: '…只（动物）' },
        { jp: '～つ', kana: '～つ', pos: '助数', cn: '…个' }
      ]
    },
    homework: {
      choice: [
        { id: 'c1', source: '练习A-1', q: 'カリナさんは（＿＿＿） か。', options: ['います', 'あります', 'です', 'します'], answer: 0, explain: '人在用います' },
        { id: 'c2', source: '练习A-2', q: '机の 上に 本が 3（＿＿＿） あります。', options: ['冊', '人', '台', '匹'], answer: 0, explain: '书用冊' },
        { id: 'c3', source: '练习A-3', q: '学生が 30（＿＿＿） います。', options: ['人', '冊', '枚', '本'], answer: 0, explain: '人用人数' },
        { id: 'c4', source: '练习A-4', q: '森さん（＿＿＿） います。', options: ['だけ', 'など', 'から', 'まで'], answer: 0, explain: '只有' },
        { id: 'c5', source: '练习A-5', q: 'いいえ、今（＿＿＿）。', options: ['いません', 'ありません', 'います', 'あります'], answer: 0, explain: '否定' },
        { id: 'c6', source: '练习A-6', q: '教室に 学生が 何人（＿＿＿） か。', options: ['います', 'あります', 'です', 'します'], answer: 0, explain: '人数问います' },
        { id: 'c7', source: '练习B-1', q: '本や ノート（＿＿＿） があります。', options: ['など', 'だけ', 'も', 'が'], answer: 0, explain: '等等' },
        { id: 'c8', source: '练习B-2', q: '会議室に 誰（＿＿＿） いますか。', options: ['が', 'は', 'を', 'に'], answer: 0, explain: '存在主体が' }
      ],
      fill: [
        { id: 'f1', source: '练习A-1', q: 'カリナさん（　） います（　）。', answers: ['は', 'か'], explain: '疑问' },
        { id: 'f2', source: '练习A-2', q: '机（　） 上（　） 本（　） 3冊（　） あります。', answers: ['の', 'に', 'が', ''], explain: '存在句' },
        { id: 'f3', source: '练习A-3', q: '学生（　） 30人（　） います。', answers: ['が', ''], explain: '数量' },
        { id: 'f4', source: '练习A-4', q: 'いいえ、今（　）。', answers: ['いません'], explain: '否定' },
        { id: 'f5', source: '练习A-5', q: '森さん（　） います。', answers: ['だけ'], explain: '只有' },
        { id: 'f6', source: '练习B-1', q: '教室（　） 学生（　） 何人（　） います（　）。', answers: ['に', 'が', 'が', 'か'], explain: '疑问' }
      ],
      translate: [
        { id: 't1', source: '练习B-1', q: '卡莉娜在吗？', answers: ['カリナさんはいますか', 'カリナさんは いますか'], explain: 'いますか' },
        { id: 't2', source: '练习B-2', q: '不，现在不在。', answers: ['いいえ、今いません', 'いいえ、今 いません'], explain: 'いません' },
        { id: 't3', source: '练习B-3', q: '有30名学生。', answers: ['学生が30人います', '学生が 30人 います'], explain: '数量' },
        { id: 't4', source: '练习B-4', q: '桌子上有3本书。', answers: ['机の上に本が3冊あります', '机の 上に 本が 3冊 あります'], explain: 'あります' }
      ],
      dialogue: [
        { id: 'd1', source: '会话-1', q: 'A：カリナさんは いますか。\\nB：（　　　　　　　）', answers: ['いいえ、今 いません', 'はい、います'], explain: '在否' },
        { id: 'd2', source: '会话-2', q: 'A：教室に 学生が 何人 いますか。\\nB：（　　　　　　　）', answers: ['30人 います', '20人 います'], explain: '人数' },
        { id: 'd3', source: '会话-3', q: 'A：会議室に 誰が いますか。\\nB：（　　　　　　　）', answers: ['森さんだけ います', '李さんが います'], explain: '谁+だけ' }
      ]
    },
    quiz: [
      { question: 'カリナさんは いますか', options: ['卡莉娜在吗', '有卡莉娜吗', '卡莉娜是什么', '卡莉娜去哪了'], answer: 0 },
      { question: '人 的助数词', options: ['人/にん', '冊', '匹', '枚'], answer: 0 },
      { question: 'だけ', options: ['只/仅', '也', '等等', '从'], answer: 0, qtype: 'word' },
      { question: 'いません', options: ['不在（否定）', '在', '有', '没有（物）'], answer: 0 },
      { question: 'なんにん', options: ['几个人', '几册', '几台', '几点'], answer: 0, qtype: 'word' },
      { question: '机の 上に 本が 3冊 あります', options: ['桌上有3本书', '书在3张桌子上', '有3个人', '买了3本书'], answer: 0 },
      { question: 'など', options: ['等等', '只有', '也', '不'], answer: 0, qtype: 'word' },
      { question: 'かいぎしつ', options: ['会议室', '教室', '食堂', '房间'], answer: 0, qtype: 'word' }
    ]
  },
  {
    num: 10,
    id: 'lesson10',
    titleJp: '送迎',
    titleCn: '接送（机场）',
    pages: { grammar: 32, text: 33, vocab: 34 },
    keyChips: ['形容词<span class="hl">て形</span>', 'てください', 'てくださいませんか', 'ないでください'],
    grammarTip: '第10课学习<strong>形容词て形</strong>连接和<strong>请求/禁止</strong>表达。い形：去い+くて；な形：+で。',
    rules: [
      { num: '①', title: '形容词て形', body: '连接两个形容词或句子。い形：～くて；な形：～で。', featured: true, examples: [{ jp: 'この 部屋<span class="hl">は</span> 広<span class="hl">くて</span> 明る<span class="hl">い</span><span class="hl">です</span>。', cn: '这个房间又宽敞又明亮。' }, { jp: '静か<span class="hl">で</span> きれい<span class="hl">な</span> 町<span class="hl">です</span>。', cn: '是安静而漂亮的城镇。' }] },
      { num: '②', title: 'てください', body: '请求对方做某事。', featured: true, examples: [{ jp: '少し 待っ<span class="hl">て ください</span>。', cn: '请稍等。' }, { jp: 'ここ<span class="hl-part">に</span> 名前<span class="hl-part">を</span> 書い<span class="hl">て ください</span>。', cn: '请在这里写名字。' }] },
      { num: '③', title: 'ないでください', body: '请求对方不要做某事。', featured: false, examples: [{ jp: '写真<span class="hl-part">を</span> 撮ら<span class="hl-neg">ないで ください</span>。', cn: '请不要拍照。' }] }
    ],
    basicText: [
      { jp: 'この 部屋<span class="hl">は</span> 広<span class="hl">くて</span> 明る<span class="hl">い</span><span class="hl">です</span>。', cn: '这个房间又宽敞又明亮。' },
      { jp: '少し 待っ<span class="hl">て ください</span>。', cn: '请稍等。' },
      { jp: 'ここ<span class="hl-part">に</span> 名前<span class="hl-part">を</span> 書い<span class="hl">て ください</span>。', cn: '请在这里写名字。' },
      { jp: 'タバコ<span class="hl-part">を</span> 吸わ<span class="hl-neg">ないで ください</span>。', cn: '请不要吸烟。' }
    ],
    dialoguePairs: [
      [{ speaker: '甲', jp: 'すみません。ちょっと 待っ<span class="hl">て ください</span>。', cn: '对不起，请稍等。', reply: false }, { speaker: '乙', jp: 'はい、わかり<span class="hl">ました</span>。', cn: '好的，明白了。', reply: true }],
      [{ speaker: '甲', jp: '写真<span class="hl-part">を</span> 撮っ<span class="hl">て も いい</span><span class="hl">です</span><span class="hl-q">か</span>。', cn: '可以拍照吗？', reply: false }, { speaker: '乙', jp: 'いいえ、撮ら<span class="hl-neg">ないで ください</span>。', cn: '不，请不要拍。', reply: true }]
    ],
    appTitle: '应用课文 · 空港',
    appTurns: [
      { speaker: '小野', jp: '李さん、お疲れさま<span class="hl">です</span>。', cn: '小李，辛苦了。', reply: false },
      { speaker: '李', jp: '小野さん、こんにちは。', cn: '小野女士，你好。', reply: true },
      { speaker: '小野', jp: '荷物<span class="hl-part">を</span> 持ち<span class="hl">ましょう</span><span class="hl-q">か</span>。', cn: '我来拿行李吧？', reply: false },
      { speaker: '李', jp: 'すみません。お願い<span class="hl">します</span>。', cn: '不好意思，拜托了。', reply: true },
      { speaker: '小野', jp: '車<span class="hl">は</span> あちら<span class="hl">です</span>。行き<span class="hl">ましょう</span>。', cn: '车在那边。走吧。', reply: false }
    ],
    vocab: {
      circle1: [
        { jp: '広い', kana: 'ひろい', pos: 'い形', cn: '宽，广阔' },
        { jp: '明るい', kana: 'あかるい', pos: 'い形', cn: '明亮' },
        { jp: '待ってください', kana: 'まってください', pos: '—', cn: '请稍等' },
        { jp: '書いてください', kana: 'かいてください', pos: '—', cn: '请写' },
        { jp: '吸わないでください', kana: 'すわないでください', pos: '—', cn: '请不要吸（烟）' },
        { jp: '空港', kana: 'くうこう', pos: '名', cn: '机场' },
        { jp: '荷物', kana: 'にもつ', pos: '名', cn: '行李' },
        { jp: '送迎', kana: 'そうげい', pos: '名', cn: '接送' },
        { jp: '車', kana: 'くるま', pos: '名', cn: '车' },
        { jp: '待ちます', kana: 'まちます', pos: '动', cn: '等' }
      ],
      circle2: [
        { jp: '持ちます', kana: 'もちます', pos: '动', cn: '拿，携带' },
        { jp: '撮ります', kana: 'とります', pos: '动', cn: '照（相）' },
        { jp: '吸います', kana: 'すいます', pos: '动', cn: '吸（烟）' },
        { jp: '狭い', kana: 'せまい', pos: 'い形', cn: '窄' },
        { jp: '暗い', kana: 'くらい', pos: 'い形', cn: '暗' },
        { jp: 'お疲れさま', kana: 'おつかれさま', pos: '—', cn: '辛苦了' },
        { jp: 'タバコ', kana: 'タバコ', pos: '名', cn: '香烟' }
      ],
      circle3: [
        { jp: '飛行機', kana: 'ひこうき', pos: '名', cn: '飞机' },
        { jp: '出発', kana: 'しゅっぱつ', pos: '名', cn: '出发' },
        { jp: '到着', kana: 'とうちゃく', pos: '名', cn: '到达' },
        { jp: '写真', kana: 'しゃしん', pos: '名', cn: '照片' },
        { jp: '町', kana: 'まち', pos: '名', cn: '城镇' }
      ]
    },
    homework: {
      choice: [
        { id: 'c1', source: '练习A-1', q: '広（＿＿＿） 明るい です。', options: ['くて', 'い', 'で', 'く'], answer: 0, explain: 'い形て形' },
        { id: 'c2', source: '练习A-2', q: '静か（＿＿＿） きれいな 町 です。', options: ['で', 'くて', 'い', 'な'], answer: 0, explain: 'な形て形' },
        { id: 'c3', source: '练习A-3', q: '少し 待っ（＿＿＿）。', options: ['てください', 'ません', 'ました', 'ましょう'], answer: 0, explain: '请求' },
        { id: 'c4', source: '练习A-4', q: '写真を 撮ら（＿＿＿）。', options: ['ないでください', 'てください', 'ました', 'ましょう'], answer: 0, explain: '禁止' },
        { id: 'c5', source: '练习A-5', q: 'おもしろい 的て形是？', options: ['おもしろくて', 'おもしろいで', 'おもしろく', 'おもしろて'], answer: 0, explain: '去い+くて' },
        { id: 'c6', source: '练习A-6', q: 'きれい 的て形是？', options: ['きれいで', 'きれくて', 'きれいくて', 'きれいて'], answer: 0, explain: 'な形+で' },
        { id: 'c7', source: '练习B-1', q: 'ここに 名前を 書い（＿＿＿）。', options: ['てください', 'ません', 'ました', 'ましょう'], answer: 0, explain: 'てください' },
        { id: 'c8', source: '练习B-2', q: 'タバコを 吸わ（＿＿＿）。', options: ['ないでください', 'てください', 'ました', 'ましょう'], answer: 0, explain: 'ないでください' }
      ],
      fill: [
        { id: 'f1', source: '练习A-1', q: 'この 部屋（　） 広（　） 明るい（　）。', answers: ['は', 'くて', 'です'], explain: 'て形连接' },
        { id: 'f2', source: '练习A-2', q: '静か（　） きれい（　） 町（　）。', answers: ['で', 'な', 'です'], explain: 'な形' },
        { id: 'f3', source: '练习A-3', q: '少し 待っ（　）。', answers: ['てください'], explain: '请求' },
        { id: 'f4', source: '练习A-4', q: '写真（　） 撮ら（　）。', answers: ['を', 'ないでください'], explain: '禁止' },
        { id: 'f5', source: '练习A-5', q: 'ここ（　） 名前（　） 書い（　）。', answers: ['に', 'を', 'てください'], explain: 'に+を' },
        { id: 'f6', source: '练习B-1', q: '寒（　） 暗い（　）。', answers: ['くて', ''], explain: 'い形连接' }
      ],
      translate: [
        { id: 't1', source: '练习B-1', q: '这个房间又宽敞又明亮。', answers: ['この部屋は広くて明るいです', 'この 部屋は 広くて 明るい です'], explain: 'くて' },
        { id: 't2', source: '练习B-2', q: '请稍等。', answers: ['少し待ってください', '少し 待って ください'], explain: 'てください' },
        { id: 't3', source: '练习B-3', q: '请在这里写名字。', answers: ['ここに名前を書いてください', 'ここに 名前を 書いて ください'], explain: 'に+を' },
        { id: 't4', source: '练习B-4', q: '请不要吸烟。', answers: ['タバコを吸わないでください', 'タバコを 吸わないで ください'], explain: 'ないでください' }
      ],
      dialogue: [
        { id: 'd1', source: '会话-1', q: 'A：すみません。ちょっと（　　　　　　　）。\\nB：はい、わかりました。', answers: ['待ってください', '待って ください'], explain: '请求' },
        { id: 'd2', source: '会话-2', q: 'A：写真を 撮って も いいですか。\\nB：いいえ、（　　　　　　　）。', answers: ['撮らないでください', '撮らないで ください'], explain: '禁止' },
        { id: 'd3', source: '会话-3', q: 'A：荷物を 持ちましょうか。\\nB：（　　　　　　　）', answers: ['すみません。お願いします', 'ありがとう ございます'], explain: '接受帮助' }
      ]
    },
    quiz: [
      { question: '広くて 明るい', options: ['又宽又亮', '宽但不亮', '请变宽', '很宽'], answer: 0 },
      { question: 'い形て形：高い→', options: ['高くて', '高いで', '高く', '高て'], answer: 0 },
      { question: 'な形て形：静か→', options: ['静かで', '静かくて', '静かて', '静かに'], answer: 0 },
      { question: '待ってください', options: ['请稍等', '请写', '请不要等', '等了'], answer: 0 },
      { question: 'ないでください', options: ['请不要…', '请…', '可以…', '必须…'], answer: 0 },
      { question: 'くうこう', options: ['机场', '车站', '港口', '酒店'], answer: 0, qtype: 'word' },
      { question: 'にもつ', options: ['行李', '车', '照片', '飞机'], answer: 0, qtype: 'word' },
      { question: 'そうげい', options: ['接送', '出发', '到达', '等待'], answer: 0, qtype: 'word' }
    ]
  },
  {
    num: 11,
    id: 'lesson11',
    titleJp: '李さんの部屋は広いです',
    titleCn: '小李的房间很宽敞',
    pages: { grammar: 35, text: 36, vocab: 37 },
    keyChips: ['な形容词修饰', 'い/な形<span class="hl">て形</span>连接', '动词て形', '并列'],
    grammarTip: '第11课学习<strong>な形容词修饰名词</strong>和<strong>て形连接</strong>动词、形容词，表示并列或原因。',
    rules: [
      { num: '①', title: 'な形容词＋名词', body: 'な形容词修饰名词：～な+名词。', featured: true, examples: [{ jp: '李さん<span class="hl">の</span> 部屋<span class="hl">は</span> 広<span class="hl">い</span><span class="hl">です</span>。', cn: '小李的房间很宽敞。' }, { jp: '静か<span class="hl">な</span> 部屋<span class="hl">です</span>。', cn: '是安静的房间。' }] },
      { num: '②', title: '动词て形', body: '一类：词尾う段→て段；二类：去る+て；三类：して、来て。', featured: true, examples: [{ jp: '朝 ごはん<span class="hl-part">を</span> 食べ<span class="hl">て</span>、会社<span class="hl-part">へ</span> 行き<span class="hl">ます</span>。', cn: '早饭后去公司。' }] },
      { num: '③', title: 'て形表示原因/理由', body: 'て形可以表示原因。', featured: false, examples: [{ jp: '病気<span class="hl">で</span> 会社<span class="hl-part">を</span> 休み<span class="hl">ました</span>。', cn: '因为生病请假了。' }] }
    ],
    basicText: [
      { jp: '李さん<span class="hl">の</span> 部屋<span class="hl">は</span> 広<span class="hl">い</span><span class="hl">です</span>。', cn: '小李的房间很宽敞。' },
      { jp: 'この 部屋<span class="hl">は</span> 静か<span class="hl">で</span> きれい<span class="hl">です</span>。', cn: '这个房间又安静又漂亮。' },
      { jp: '朝 ごはん<span class="hl-part">を</span> 食べ<span class="hl">て</span>、会社<span class="hl-part">へ</span> 行き<span class="hl">ます</span>。', cn: '早饭后去公司。' },
      { jp: 'ここ<span class="hl">は</span> 静か<span class="hl">な</span> 町<span class="hl">です</span>。', cn: '这里是安静的城镇。' }
    ],
    dialoguePairs: [
      [{ speaker: '甲', jp: '李さん<span class="hl">の</span> 部屋<span class="hl">は</span> どう<span class="hl">です</span><span class="hl-q">か</span>。', cn: '小李的房间怎么样？', reply: false }, { speaker: '乙', jp: '広<span class="hl">くて</span> きれい<span class="hl">です</span>。', cn: '又宽敞又漂亮。', reply: true }],
      [{ speaker: '甲', jp: '毎朝 何<span class="hl-part">を</span> し<span class="hl">ます</span><span class="hl-q">か</span>。', cn: '每天早上做什么？', reply: false }, { speaker: '乙', jp: 'ごはん<span class="hl-part">を</span> 食べ<span class="hl">て</span>、会社<span class="hl-part">へ</span> 行き<span class="hl">ます</span>。', cn: '早饭后去公司。', reply: true }]
    ],
    appTitle: '应用课文 · 部屋の紹介',
    appTurns: [
      { speaker: '小野', jp: '李さん<span class="hl">の</span> 部屋<span class="hl">は</span> 広<span class="hl">い</span><span class="hl">です</span><span class="hl-q">ね</span>。', cn: '小李的房间很宽敞啊。', reply: false },
      { speaker: '李', jp: 'はい、でも 家賃<span class="hl">が</span> 高<span class="hl">い</span><span class="hl">です</span>。', cn: '是的，但房租贵。', reply: true },
      { speaker: '小野', jp: '窓<span class="hl">から</span> 景色<span class="hl">が</span> きれい<span class="hl">です</span><span class="hl-q">ね</span>。', cn: '从窗户看风景很美啊。', reply: false },
      { speaker: '李', jp: 'はい、とても 気に入っ<span class="hl">て</span> い<span class="hl">ます</span>。', cn: '是的，非常喜欢。', reply: true }
    ],
    vocab: {
      circle1: [
        { jp: '部屋', kana: 'へや', pos: '名', cn: '房间' },
        { jp: '広い', kana: 'ひろい', pos: 'い形', cn: '宽' },
        { jp: '狭い', kana: 'せまい', pos: 'い形', cn: '窄' },
        { jp: '家賃', kana: 'やちん', pos: '名', cn: '房租' },
        { jp: '景色', kana: 'けしき', pos: '名', cn: '景色' },
        { jp: '気に入ります', kana: 'きにいります', pos: '动', cn: '中意，喜欢' },
        { jp: '食べて', kana: 'たべて', pos: '—', cn: '吃（て形）' },
        { jp: '行って', kana: 'いって', pos: '—', cn: '去（て形）' },
        { jp: '町', kana: 'まち', pos: '名', cn: '城镇' },
        { jp: '窓', kana: 'まど', pos: '名', cn: '窗户' }
      ],
      circle2: [
        { jp: 'アパート', kana: 'アパート', pos: '名', cn: '公寓' },
        { jp: '家', kana: 'いえ', pos: '名', cn: '家' },
        { jp: '台所', kana: 'だいどころ', pos: '名', cn: '厨房' },
        { jp: '風呂', kana: 'ふろ', pos: '名', cn: '洗澡' },
        { jp: '洗濯', kana: 'せんたく', pos: '名', cn: '洗衣服' },
        { jp: '掃除', kana: 'そうじ', pos: '名', cn: '打扫' },
        { jp: '料理', kana: 'りょうり', pos: '名', cn: '烹饪，菜肴' }
      ],
      circle3: [
        { jp: '近い', kana: 'ちかい', pos: 'い形', cn: '近' },
        { jp: '遠い', kana: 'とおい', pos: 'い形', cn: '远' },
        { jp: '楽しい', kana: 'たのしい', pos: 'い形', cn: '快乐' },
        { jp: '大変', kana: 'たいへん', pos: 'な形', cn: '非常，够受的' },
        { jp: '簡単', kana: 'かんたん', pos: 'な形', cn: '简单' }
      ]
    },
    homework: {
      choice: [
        { id: 'c1', source: '练习A-1', q: '静か（＿＿＿） 部屋', options: ['な', 'い', 'で', 'く'], answer: 0, explain: 'な形修饰' },
        { id: 'c2', source: '练习A-2', q: 'ごはんを 食べ（＿＿＿）、会社へ 行きます。', options: ['て', 'た', 'ない', 'ます'], answer: 0, explain: '动词て形' },
        { id: 'c3', source: '练习A-3', q: '行きます 的て形是？', options: ['行って', '行いて', '行て', '行きて'], answer: 0, explain: '一类动词' },
        { id: 'c4', source: '练习A-4', q: '読みます 的て形是？', options: ['読んで', '読みて', '読て', '読って'], answer: 0, explain: 'ぶ行变nd' },
        { id: 'c5', source: '练习A-5', q: '李さんの 部屋は 広（＿＿＿） です。', options: ['い', 'な', 'く', 'で'], answer: 0, explain: 'い形谓语' },
        { id: 'c6', source: '练习A-6', q: 'きれい 修饰名词：きれい（＿＿＿） 部屋', options: ['な', 'い', 'で', 'く'], answer: 0, explain: 'な+名词' },
        { id: 'c7', source: '练习B-1', q: '待ちます 的て形是？', options: ['待って', '待て', '待ちて', '待んで'], answer: 0, explain: 'ち→って' },
        { id: 'c8', source: '练习B-2', q: 'この 部屋は 静か（＿＿＿） きれい です。', options: ['で', 'くて', 'い', 'な'], answer: 0, explain: 'な形て形' }
      ],
      fill: [
        { id: 'f1', source: '练习A-1', q: '静か（　） 部屋（　）。', answers: ['な', 'です'], explain: 'な形修饰' },
        { id: 'f2', source: '练习A-2', q: 'ごはん（　） 食べ（　）、会社（　） 行きます。', answers: ['を', 'て', 'へ'], explain: 'て形连接' },
        { id: 'f3', source: '练习A-3', q: '李さん（　） 部屋（　） 広（　）。', answers: ['の', 'は', 'いです'], explain: 'の+は+い' },
        { id: 'f4', source: '练习A-4', q: 'この 部屋（　） 静か（　） きれい（　）。', answers: ['は', 'で', 'です'], explain: 'で连接' },
        { id: 'f5', source: '练习A-5', q: '朝 起き（　）、ごはん（　） 食べます。', answers: ['て', 'を'], explain: 'て形' },
        { id: 'f6', source: '练习B-1', q: '書きます→ 書い（　）。', answers: ['て'], explain: 'き→いて' }
      ],
      translate: [
        { id: 't1', source: '练习B-1', q: '小李的房间很宽敞。', answers: ['李さんの部屋は広いです', '李さんの 部屋は 広い です'], explain: 'の+い形' },
        { id: 't2', source: '练习B-2', q: '早饭后去公司。', answers: ['朝ごはんを食べて、会社へ行きます', '朝 ごはんを 食べて、会社へ 行きます'], explain: 'て形' },
        { id: 't3', source: '练习B-3', q: '是安静的房间。', answers: ['静かな部屋です', '静かな 部屋 です'], explain: 'な+名词' },
        { id: 't4', source: '练习B-4', q: '这个房间又安静又漂亮。', answers: ['この部屋は静かできれいです', 'この 部屋は 静かで きれい です'], explain: 'で' }
      ],
      dialogue: [
        { id: 'd1', source: '会话-1', q: 'A：李さんの 部屋は どうですか。\\nB：（　　　　　　　）', answers: ['広くて きれいです', '広いです'], explain: '评价' },
        { id: 'd2', source: '会话-2', q: 'A：毎朝 何を しますか。\\nB：（　　　　　　　）', answers: ['ごはんを 食べて、会社へ 行きます', '起きて、ごはんを 食べます'], explain: 'て形连接' },
        { id: 'd3', source: '会话-3', q: 'A：この 部屋は 静かですか。\\nB：（　　　　　　　）', answers: ['はい、静かです', 'はい、静かできれいです'], explain: '肯定' }
      ]
    },
    quiz: [
      { question: '李さんの部屋は 広いです', options: ['小李的房间很宽', '小李的房间很窄', '小李有房间', '房间是小李的'], answer: 0 },
      { question: '静かな 部屋', options: ['安静的房间', '漂亮的房间', '大的房间', '新的房间'], answer: 0 },
      { question: '食べて、行きます', options: ['吃完后去', '吃和去', '不去吃', '请吃'], answer: 0 },
      { question: '行きます て形', options: ['行って', '行て', '行きて', '行んで'], answer: 0 },
      { question: 'やちん', options: ['房租', '房间', '窗户', '景色'], answer: 0, qtype: 'word' },
      { question: 'きにいります', options: ['中意/喜欢', '吃', '看', '去'], answer: 0, qtype: 'word' },
      { question: '読みます て形', options: ['読んで', '読みて', '読て', '読って'], answer: 0 },
      { question: 'な形修饰名词', options: ['～な+名词', '～い+名词', '～く+名词', '～で+名词'], answer: 0 }
    ]
  },
  {
    num: 12,
    id: 'lesson12',
    titleJp: '昨日はよかったです',
    titleCn: '昨天很好',
    pages: { grammar: 38, text: 39, vocab: 40 },
    keyChips: ['动词<span class="hl">た形</span>过去', 'い形过去', 'な形过去', '～から'],
    grammarTip: '第12课学习<strong>过去式</strong>：动词た形、い形容词过去（～かった）、な形容词/名词过去（～でした）。',
    rules: [
      { num: '①', title: '动词た形（过去肯定）', body: 'た形与て形词干相同，た/だ结尾。', featured: true, examples: [{ jp: '昨日 映画<span class="hl-part">を</span> 見<span class="hl">ました</span>。', cn: '昨天看了电影。' }, { jp: '先週 北京<span class="hl-part">へ</span> 行き<span class="hl">ました</span>。', cn: '上周去了北京。' }] },
      { num: '②', title: 'い形容词过去', body: '～かったです（肯定）；～くなかったです（否定）。', featured: true, examples: [{ jp: '昨日<span class="hl">は</span> 天気<span class="hl">が</span> よ<span class="hl">かった</span><span class="hl">です</span>。', cn: '昨天天气很好。' }, { jp: '昨日<span class="hl">は</span> 寒<span class="hl-neg">くなかった</span><span class="hl">です</span>。', cn: '昨天不冷。' }] },
      { num: '③', title: 'な形容词/名词过去', body: '～でした（肯定）；～ではありませんでした（否定）。', featured: true, examples: [{ jp: '昨日<span class="hl">は</span> 暇<span class="hl">でした</span>。', cn: '昨天有空。' }, { jp: '昨日<span class="hl">は</span> 雨<span class="hl-neg">では ありませんでした</span>。', cn: '昨天没下雨。' }] }
    ],
    basicText: [
      { jp: '昨日<span class="hl">は</span> 天気<span class="hl">が</span> よ<span class="hl">かった</span><span class="hl">です</span>。', cn: '昨天天气很好。' },
      { jp: '昨日 映画<span class="hl-part">を</span> 見<span class="hl">ました</span>。', cn: '昨天看了电影。' },
      { jp: '先週 北京<span class="hl-part">へ</span> 行き<span class="hl">ました</span>。', cn: '上周去了北京。' },
      { jp: 'おととい<span class="hl">は</span> 雨<span class="hl-neg">では ありませんでした</span>。', cn: '前天没下雨。' }
    ],
    dialoguePairs: [
      [{ speaker: '甲', jp: '週末 何<span class="hl-part">を</span> し<span class="hl">ました</span><span class="hl-q">か</span>。', cn: '周末做什么了？', reply: false }, { speaker: '乙', jp: '映画<span class="hl-part">を</span> 見<span class="hl">ました</span>。', cn: '看了电影。', reply: true }],
      [{ speaker: '甲', jp: '昨日<span class="hl">の</span> 天気<span class="hl">は</span> どう<span class="hl">でした</span><span class="hl-q">か</span>。', cn: '昨天天气怎么样？', reply: false }, { speaker: '乙', jp: 'とても よ<span class="hl">かった</span><span class="hl">です</span>。', cn: '非常好。', reply: true }]
    ],
    appTitle: '应用课文 · 週末の話',
    appTurns: [
      { speaker: '李', jp: '先週の 週末、何<span class="hl-part">を</span> し<span class="hl">ました</span><span class="hl-q">か</span>。', cn: '上周末做什么了？', reply: false },
      { speaker: '小野', jp: '友達<span class="hl-part">と</span> 映画<span class="hl-part">を</span> 見<span class="hl">ました</span>。', cn: '和朋友看了电影。', reply: true },
      { speaker: '李', jp: 'いい 映画<span class="hl">でした</span><span class="hl-q">か</span>。', cn: '是好电影吗？', reply: false },
      { speaker: '小野', jp: 'はい、とても おもしろ<span class="hl">かった</span><span class="hl">です</span>。', cn: '是的，非常有意思。', reply: true }
    ],
    vocab: {
      circle1: [
        { jp: '昨日', kana: 'きのう', pos: '名', cn: '昨天' },
        { jp: '一昨日', kana: 'おととい', pos: '名', cn: '前天' },
        { jp: '天気', kana: 'てんき', pos: '名', cn: '天气' },
        { jp: 'よかった', kana: 'よかった', pos: '—', cn: '好（过去）' },
        { jp: '雨', kana: 'あめ', pos: '名', cn: '雨' },
        { jp: '雪', kana: 'ゆき', pos: '名', cn: '雪' },
        { jp: '晴れ', kana: 'はれ', pos: '名', cn: '晴' },
        { jp: '曇り', kana: 'くもり', pos: '名', cn: '阴' },
        { jp: '暑かった', kana: 'あつかった', pos: '—', cn: '热（过去）' },
        { jp: '寒かった', kana: 'さむかった', pos: '—', cn: '冷（过去）' }
      ],
      circle2: [
        { jp: '楽しかった', kana: 'たのしかった', pos: '—', cn: '快乐（过去）' },
        { jp: '忙しかった', kana: 'いそがしかった', pos: '—', cn: '忙（过去）' },
        { jp: '暇でした', kana: 'ひまでした', pos: '—', cn: '有空（过去）' },
        { jp: '元気でした', kana: 'げんきでした', pos: '—', cn: '精神（过去）' },
        { jp: '旅行', kana: 'りょこう', pos: '名', cn: '旅行' },
        { jp: '散歩', kana: 'さんぽ', pos: '名', cn: '散步' },
        { jp: '買い物', kana: 'かいもの', pos: '名', cn: '购物' }
      ],
      circle3: [
        { jp: '台風', kana: 'たいふう', pos: '名', cn: '台风' },
        { jp: '雷', kana: 'かみなり', pos: '名', cn: '雷' },
        { jp: '風', kana: 'かぜ', pos: '名', cn: '风' },
        { jp: '季節', kana: 'きせつ', pos: '名', cn: '季节' },
        { jp: '春', kana: 'はる', pos: '名', cn: '春' }
      ]
    },
    homework: {
      choice: [
        { id: 'c1', source: '练习A-1', q: '昨日 天気は よ（＿＿＿） です。', options: ['かった', 'い', 'く', 'くない'], answer: 0, explain: 'い形过去' },
        { id: 'c2', source: '练习A-2', q: '昨日 映画を 見（＿＿＿）。', options: ['ました', 'ません', 'ます', 'ましょう'], answer: 0, explain: '动词过去' },
        { id: 'c3', source: '练习A-3', q: '昨日 暇（＿＿＿）。', options: ['でした', 'です', 'だった', 'ではありません'], answer: 0, explain: 'な形过去' },
        { id: 'c4', source: '练习A-4', q: 'おもしろい 过去否定', options: ['おもしろくなかった', 'おもしろかった', 'おもしろくない', 'おもしろい'], answer: 0, explain: 'くなかった' },
        { id: 'c5', source: '练习A-5', q: '雨 过去否定（名词）', options: ['雨ではありませんでした', '雨じゃない', '雨でした', '雨です'], answer: 0, explain: 'ではありませんでした' },
        { id: 'c6', source: '练习A-6', q: '寒い 过去是？', options: ['寒かった', '寒い', '寒く', '寒くない'], answer: 0, explain: '去い+かった' },
        { id: 'c7', source: '练习B-1', q: '先週 北京（＿＿＿） 行きました。', options: ['へ', 'に', 'で', 'を'], answer: 0, explain: '方向' },
        { id: 'c8', source: '练习B-2', q: '昨日の 天気は どう（＿＿＿） か。', options: ['でした', 'です', 'だった', 'で'], answer: 0, explain: '过去疑问' }
      ],
      fill: [
        { id: 'f1', source: '练习A-1', q: '昨日（　） 天気（　） よ（　）。', answers: ['は', 'が', 'かったです'], explain: 'い形过去' },
        { id: 'f2', source: '练习A-2', q: '昨日 映画（　） 見（　）。', answers: ['を', 'ました'], explain: '动词过去' },
        { id: 'f3', source: '练习A-3', q: '昨日（　） 暇（　）。', answers: ['は', 'でした'], explain: 'な形过去' },
        { id: 'f4', source: '练习A-4', q: 'おととい（　） 雨（　） ありません（　）。', answers: ['は', 'は', 'でした'], explain: '过去否定' },
        { id: 'f5', source: '练习A-5', q: '先週 北京（　） 行き（　）。', answers: ['へ', 'ました'], explain: '方向+过去' },
        { id: 'f6', source: '练习B-1', q: 'とても おもしろ（　）。', answers: ['かったです'], explain: '过去' }
      ],
      translate: [
        { id: 't1', source: '练习B-1', q: '昨天天气很好。', answers: ['昨日は天気がよかったです', '昨日は 天気が よかった です'], explain: 'よかった' },
        { id: 't2', source: '练习B-2', q: '昨天看了电影。', answers: ['昨日映画を見ました', '昨日 映画を 見ました'], explain: 'ました' },
        { id: 't3', source: '练习B-3', q: '昨天有空。', answers: ['昨日は暇でした', '昨日は 暇 でした'], explain: 'でした' },
        { id: 't4', source: '练习B-4', q: '前天没下雨。', answers: ['おとといは雨ではありませんでした', 'おとといは 雨 では ありませんでした'], explain: '过去否定' }
      ],
      dialogue: [
        { id: 'd1', source: '会话-1', q: 'A：昨日 何を しましたか。\\nB：（　　　　　　　）', answers: ['映画を 見ました', '買い物を しました'], explain: '过去动作' },
        { id: 'd2', source: '会话-2', q: 'A：昨日の 天気は どうでしたか。\\nB：（　　　　　　　）', answers: ['とても よかったです', '寒かったです'], explain: '天气' },
        { id: 'd3', source: '会话-3', q: 'A：先週 何を しましたか。\\nB：（　　　　　　　）', answers: ['北京へ 行きました', '旅行を しました'], explain: '先週' }
      ]
    },
    quiz: [
      { question: '昨日は よかったです', options: ['昨天很好', '昨天不好', '今天很好', '明天很好'], answer: 0 },
      { question: 'い形过去：暑い→', options: ['暑かった', '暑い', '暑く', '暑くて'], answer: 0 },
      { question: 'な形过去：暇→', options: ['暇でした', '暇かった', '暇い', '暇く'], answer: 0 },
      { question: '見ました', options: ['看了', '看', '不看', '请看'], answer: 0 },
      { question: 'てんき', options: ['天气', '雨', '雪', '风'], answer: 0, qtype: 'word' },
      { question: 'おもしろかった', options: ['有意思（过去）', '没意思', '有意思', '请有意思'], answer: 0 },
      { question: 'ではありませんでした', options: ['过去否定（名词/な形）', '现在否定', '过去肯定', '现在肯定'], answer: 0 },
      { question: 'おととい', options: ['前天', '昨天', '明天', '后天'], answer: 0, qtype: 'word' }
    ]
  },
  {
    num: 13,
    id: 'lesson13',
    titleJp: '北京オリンピック',
    titleCn: '北京奥运会',
    pages: { grammar: 42, text: 43, vocab: 44 },
    keyChips: ['意向形', '动词<span class="hl">て形</span>+ください', '～たい', '～ましょう'],
    grammarTip: '第13课学习<strong>意向形</strong>（～（よ）う）表示意志/劝诱，以及<strong>てください</strong>请求。',
    rules: [
      { num: '①', title: '意向形', body: '表示意志或劝诱。一类：词尾う段→お段+う；二类：去る+よう；三类：しよう、来よう。', featured: true, examples: [{ jp: '一緒<span class="hl-part">に</span> 北京<span class="hl-part">へ</span> 行き<span class="hl">ましょう</span>。', cn: '一起去北京吧。' }, { jp: '少し 休み<span class="hl">ましょう</span>。', cn: '休息一下吧。' }] },
      { num: '②', title: 'てください', body: '请求对方做某事（复习强化）。', featured: true, examples: [{ jp: 'もう 一度 言っ<span class="hl">て ください</span>。', cn: '请再说一遍。' }] },
      { num: '③', title: 'ましょうか', body: '提议为对方做某事。', featured: false, examples: [{ jp: '荷物<span class="hl-part">を</span> 持ち<span class="hl">ましょうか</span>。', cn: '我来拿行李吧？' }] }
    ],
    basicText: [
      { jp: '北京<span class="hl">で</span> オリンピック<span class="hl">が</span> 開か<span class="hl">れ</span><span class="hl">ます</span>。', cn: '奥运会在北京举行。' },
      { jp: '一緒<span class="hl-part">に</span> 見<span class="hl">に</span> 行き<span class="hl">ましょう</span>。', cn: '一起去看吧。' },
      { jp: 'もう 一度 説明<span class="hl">して ください</span>。', cn: '请再说明一遍。' },
      { jp: '今度 一緒<span class="hl-part">に</span> 食事<span class="hl">し</span><span class="hl">ましょう</span>。', cn: '下次一起吃饭吧。' }
    ],
    dialoguePairs: [
      [{ speaker: '甲', jp: '今度 一緒<span class="hl-part">に</span> 映画<span class="hl-part">を</span> 見<span class="hl">ましょう</span>。', cn: '下次一起看电影吧。', reply: false }, { speaker: '乙', jp: 'いい<span class="hl">です</span><span class="hl-q">ね</span>。', cn: '好啊。', reply: true }],
      [{ speaker: '甲', jp: 'コーヒー<span class="hl-part">を</span> 入れ<span class="hl">ましょうか</span>。', cn: '我来倒咖啡吧？', reply: false }, { speaker: '乙', jp: 'お願い<span class="hl">します</span>。', cn: '拜托了。', reply: true }]
    ],
    appTitle: '应用课文 · 北京オリンピック',
    appTurns: [
      { speaker: '李', jp: '2008<span class="hl">年</span>、北京<span class="hl">で</span> オリンピック<span class="hl">が</span> あり<span class="hl">ました</span>。', cn: '2008年在北京举办了奥运会。', reply: false },
      { speaker: '小野', jp: '李さん<span class="hl">は</span> 見<span class="hl">に</span> 行き<span class="hl">ました</span><span class="hl-q">か</span>。', cn: '小李去看了吗？', reply: true },
      { speaker: '李', jp: 'はい、とても 盛り上がり<span class="hl">ました</span>。', cn: '是的，非常热闹。', reply: false },
      { speaker: '小野', jp: '今度 北京<span class="hl-part">へ</span> 一緒<span class="hl-part">に</span> 行き<span class="hl">ましょう</span>。', cn: '下次一起去北京吧。', reply: true }
    ],
    vocab: {
      circle1: [
        { jp: 'オリンピック', kana: 'オリンピック', pos: '名', cn: '奥运会' },
        { jp: '一緒に', kana: 'いっしょに', pos: '副', cn: '一起' },
        { jp: '今度', kana: 'こんど', pos: '名', cn: '下次，这次' },
        { jp: '行きましょう', kana: 'いきましょう', pos: '—', cn: '去吧' },
        { jp: '食事', kana: 'しょくじ', pos: '名', cn: '吃饭' },
        { jp: '説明', kana: 'せつめい', pos: '名', cn: '说明' },
        { jp: 'もう一度', kana: 'もういちど', pos: '副', cn: '再一次' },
        { jp: '開きます', kana: 'ひらきます', pos: '动', cn: '召开，打开' },
        { jp: '見に行きます', kana: 'みにいきます', pos: '—', cn: '去看' },
        { jp: '盛り上がります', kana: 'もりあがります', pos: '动', cn: '气氛高涨' }
      ],
      circle2: [
        { jp: '試合', kana: 'しあい', pos: '名', cn: '比赛' },
        { jp: '選手', kana: 'せんしゅ', pos: '名', cn: '选手' },
        { jp: '観客', kana: 'かんきゃく', pos: '名', cn: '观众' },
        { jp: '会場', kana: 'かいじょう', pos: '名', cn: '会场' },
        { jp: '休みましょう', kana: 'やすみましょう', pos: '—', cn: '休息吧' },
        { jp: '入れましょう', kana: 'いれましょう', pos: '—', cn: '倒（咖啡）吧' }
      ],
      circle3: [
        { jp: '北京', kana: 'ペキン', pos: '专', cn: '北京' },
        { jp: '2008年', kana: 'にせんはちねん', pos: '—', cn: '2008年' },
        { jp: '世界', kana: 'せかい', pos: '名', cn: '世界' },
        { jp: '記録', kana: 'きろく', pos: '名', cn: '记录' },
        { jp: '金メダル', kana: 'きんメダル', pos: '名', cn: '金牌' }
      ]
    },
    homework: {
      choice: [
        { id: 'c1', source: '练习A-1', q: '一緒に 北京へ 行き（＿＿＿）。', options: ['ましょう', 'ました', 'ません', 'ます'], answer: 0, explain: '劝诱' },
        { id: 'c2', source: '练习A-2', q: 'もう 一度 説明（＿＿＿）。', options: ['してください', 'しました', 'しません', 'します'], answer: 0, explain: 'てください' },
        { id: 'c3', source: '练习A-3', q: '行きます 意向形（简体）', options: ['行こう', '行き', '行く', '行け'], answer: 0, explain: '行く→行こう' },
        { id: 'c4', source: '练习A-4', q: '食べます 意向形（简体）', options: ['食べよう', '食べ', '食べる', '食べれ'], answer: 0, explain: '二类' },
        { id: 'c5', source: '练习A-5', q: 'コーヒーを 入れ（＿＿＿） か。', options: ['ましょう', 'ました', 'ません', 'ます'], answer: 0, explain: '提议' },
        { id: 'c6', source: '练习A-6', q: 'ましょう 表示？', options: ['劝诱/提议', '过去', '否定', '请求'], answer: 0, explain: '意志' },
        { id: 'c7', source: '练习B-1', q: '今度 一緒に 食事（＿＿＿）。', options: ['しましょう', 'しました', 'しません', 'します'], answer: 0, explain: 'しましょう' },
        { id: 'c8', source: '练习B-2', q: '見に 行き（＿＿＿）。', options: ['ましょう', 'ました', 'ません', 'ます'], answer: 0, explain: '去看吧' }
      ],
      fill: [
        { id: 'f1', source: '练习A-1', q: '一緒（　） 北京（　） 行き（　）。', answers: ['に', 'へ', 'ましょう'], explain: '劝诱' },
        { id: 'f2', source: '练习A-2', q: 'もう 一度 説明（　）。', answers: ['してください'], explain: '请求' },
        { id: 'f3', source: '练习A-3', q: '今度 一緒（　） 食事（　）。', answers: ['に', 'しましょう'], explain: 'に+しましょう' },
        { id: 'f4', source: '练习A-4', q: '少し 休み（　）。', answers: ['ましょう'], explain: '休息吧' },
        { id: 'f5', source: '练习A-5', q: 'コーヒー（　） 入れ（　） か。', answers: ['を', 'ましょう'], explain: '提议' },
        { id: 'f6', source: '练习B-1', q: '北京（　） オリンピック（　） 開かれ（　）。', answers: ['で', 'が', 'ます'], explain: 'で+が+被动' }
      ],
      translate: [
        { id: 't1', source: '练习B-1', q: '一起去北京吧。', answers: ['一緒に北京へ行きましょう', '一緒に 北京へ 行きましょう'], explain: 'ましょう' },
        { id: 't2', source: '练习B-2', q: '请再说明一遍。', answers: ['もう一度説明してください', 'もう 一度 説明 して ください'], explain: 'てください' },
        { id: 't3', source: '练习B-3', q: '下次一起吃饭吧。', answers: ['今度一緒に食事しましょう', '今度 一緒に 食事 しましょう'], explain: '今度' },
        { id: 't4', source: '练习B-4', q: '一起去看吧。', answers: ['一緒に見に行きましょう', '一緒に 見に 行きましょう'], explain: '見に行く' }
      ],
      dialogue: [
        { id: 'd1', source: '会话-1', q: 'A：今度 一緒に 映画を 見ましょう。\\nB：（　　　　　　　）', answers: ['いいですね', 'はい、行きましょう'], explain: '接受劝诱' },
        { id: 'd2', source: '会话-2', q: 'A：コーヒーを 入れましょうか。\\nB：（　　　　　　　）', answers: ['お願いします', 'すみません、お願いします'], explain: '接受提议' },
        { id: 'd3', source: '会话-3', q: 'A：もう 一度 言って ください。\\nB：（　　　　　　　）', answers: ['はい、わかりました', 'すみません'], explain: '回应请求' }
      ]
    },
    quiz: [
      { question: '行きましょう', options: ['一起去吧/走吧', '去了', '不去', '请去'], answer: 0 },
      { question: '行く 意向形', options: ['行こう', '行き', '行け', '行か'], answer: 0 },
      { question: '食べる 意向形', options: ['食べよう', '食べ', '食べれ', '食べろ'], answer: 0 },
      { question: 'いっしょに', options: ['一起', '下次', '再次', '现在'], answer: 0, qtype: 'word' },
      { question: 'もういちど', options: ['再一次', '一起', '下次', '已经'], answer: 0, qtype: 'word' },
      { question: 'してください', options: ['请做…', '做了', '不做', '一起做'], answer: 0 },
      { question: 'こんど', options: ['下次/这次', '一起', '再次', '永远'], answer: 0, qtype: 'word' },
      { question: 'ましょうか', options: ['我来…吧？（提议）', '请…', '不要…', '已经…'], answer: 0 }
    ]
  },
  {
    num: 14,
    id: 'lesson14',
    titleJp: '映画を見ます',
    titleCn: '看电影',
    pages: { grammar: 45, text: 47, vocab: 48 },
    keyChips: ['<span class="hl">たい</span>形', 'たい<span class="hl">です</span>', '要/不要', 'ましょうか'],
    grammarTip: '第14课学习<strong>たい形</strong>表示愿望（想…），以及「要/不要」的表达。',
    rules: [
      { num: '①', title: '动词たい形', body: '表示说话人的愿望。一类/二类：去ます+たい；三类：したい、来たい。', featured: true, examples: [{ jp: '映画<span class="hl-part">を</span> 見<span class="hl">たい</span><span class="hl">です</span>。', cn: '想看电影。' }, { jp: '日本<span class="hl-part">へ</span> 行き<span class="hl">たい</span><span class="hl">です</span>。', cn: '想去日本。' }] },
      { num: '②', title: 'たい的否定/过去', body: 'たくないです；たかったです。', featured: true, examples: [{ jp: '何<span class="hl">も</span> 食べ<span class="hl-neg">たくない</span><span class="hl">です</span>。', cn: '什么都不想吃。' }] },
      { num: '③', title: '要／不要', body: '要：～てください；不要：～ないでください。', featured: false, examples: [{ jp: 'これ<span class="hl-part">を</span> 持っ<span class="hl">て ください</span>。', cn: '请拿这个。' }] }
    ],
    basicText: [
      { jp: '映画<span class="hl-part">を</span> 見<span class="hl">たい</span><span class="hl">です</span>。', cn: '想看电影。' },
      { jp: '何<span class="hl-part">を</span> 食べ<span class="hl">たい</span><span class="hl">です</span><span class="hl-q">か</span>。', cn: '想吃什么？' },
      { jp: '日本<span class="hl-part">へ</span> 行き<span class="hl">たい</span><span class="hl">です</span>。', cn: '想去日本。' },
      { jp: '今日<span class="hl">は</span> 何<span class="hl">も</span> 食べ<span class="hl-neg">たくない</span><span class="hl">です</span>。', cn: '今天什么都不想吃。' }
    ],
    dialoguePairs: [
      [{ speaker: '甲', jp: '週末 何<span class="hl-part">を</span> し<span class="hl">たい</span><span class="hl">です</span><span class="hl-q">か</span>。', cn: '周末想做什么？', reply: false }, { speaker: '乙', jp: '映画<span class="hl-part">を</span> 見<span class="hl">たい</span><span class="hl">です</span>。', cn: '想看电影。', reply: true }],
      [{ speaker: '甲', jp: '一緒<span class="hl-part">に</span> 行き<span class="hl">ましょう</span><span class="hl-q">か</span>。', cn: '一起去吧？', reply: false }, { speaker: '乙', jp: 'いい<span class="hl">です</span><span class="hl-q">ね</span>。', cn: '好啊。', reply: true }]
    ],
    appTitle: '应用课文 · 週末の予定',
    appTurns: [
      { speaker: '李', jp: '週末 何<span class="hl-part">を</span> し<span class="hl">たい</span><span class="hl">です</span><span class="hl-q">か</span>。', cn: '周末想做什么？', reply: false },
      { speaker: '小野', jp: '買い物<span class="hl-part">に</span> 行き<span class="hl">たい</span><span class="hl">です</span>。', cn: '想去购物。', reply: true },
      { speaker: '李', jp: 'わたし<span class="hl">も</span> 行き<span class="hl">たい</span><span class="hl">です</span>。一緒<span class="hl-part">に</span> 行き<span class="hl">ましょう</span>。', cn: '我也想去。一起去吧。', reply: false },
      { speaker: '小野', jp: 'いい<span class="hl">です</span><span class="hl-q">ね</span>。', cn: '好啊。', reply: true }
    ],
    vocab: {
      circle1: [
        { jp: '見たい', kana: 'みたい', pos: '—', cn: '想看' },
        { jp: '食べたい', kana: 'たべたい', pos: '—', cn: '想吃' },
        { jp: '行きたい', kana: 'いきたい', pos: '—', cn: '想去' },
        { jp: 'したい', kana: 'したい', pos: '—', cn: '想做' },
        { jp: '映画', kana: 'えいが', pos: '名', cn: '电影' },
        { jp: '週末', kana: 'しゅうまつ', pos: '名', cn: '周末' },
        { jp: '予定', kana: 'よてい', pos: '名', cn: '预定，计划' },
        { jp: '欲しい', kana: 'ほしい', pos: 'い形', cn: '想要（物）' },
        { jp: '要ります', kana: 'いります', pos: '动', cn: '需要' },
        { jp: '要りません', kana: 'いりません', pos: '动', cn: '不需要' }
      ],
      circle2: [
        { jp: '会いたい', kana: 'あいたい', pos: '—', cn: '想见' },
        { jp: '聞きたい', kana: 'ききたい', pos: '—', cn: '想听' },
        { jp: '読みたい', kana: 'よみたい', pos: '—', cn: '想读' },
        { jp: '休みたい', kana: 'やすみたい', pos: '—', cn: '想休息' },
        { jp: '泳ぎたい', kana: 'およぎたい', pos: '—', cn: '想游泳' },
        { jp: '遊びたい', kana: 'あそびたい', pos: '—', cn: '想玩' }
      ],
      circle3: [
        { jp: '日本', kana: 'にほん', pos: '专', cn: '日本' },
        { jp: '海', kana: 'うみ', pos: '名', cn: '大海' },
        { jp: '山', kana: 'やま', pos: '名', cn: '山' },
        { jp: '温泉', kana: 'おんせん', pos: '名', cn: '温泉' },
        { jp: 'スキー', kana: 'スキー', pos: '名', cn: '滑雪' }
      ]
    },
    homework: {
      choice: [
        { id: 'c1', source: '练习A-1', q: '映画を 見（＿＿＿） です。', options: ['たい', 'て', 'た', 'ない'], answer: 0, explain: 'たい形' },
        { id: 'c2', source: '练习A-2', q: '日本（＿＿＿） 行きたい です。', options: ['へ', 'に', 'で', 'を'], answer: 0, explain: '方向' },
        { id: 'c3', source: '练习A-3', q: '食べます たい形', options: ['食べたい', '食べて', '食べた', '食べない'], answer: 0, explain: '去ます+たい' },
        { id: 'c4', source: '练习A-4', q: '何も 食べ（＿＿＿） です。', options: ['たくない', 'たい', 'て', 'た'], answer: 0, explain: 'たくない' },
        { id: 'c5', source: '练习A-5', q: '「欲しい」用于？', options: ['想要物品', '想做动作', '想去', '请看'], answer: 0, explain: '物+が欲しい' },
        { id: 'c6', source: '练习A-6', q: '来ます たい形', options: ['来たい', '来て', '来た', '来ない'], answer: 0, explain: '三类' },
        { id: 'c7', source: '练习B-1', q: '週末 何を し（＿＿＿） ですか。', options: ['たい', 'て', 'た', 'ない'], answer: 0, explain: 'したい' },
        { id: 'c8', source: '练习B-2', q: 'これ 要り（＿＿＿） か。', options: ['ます', 'たい', 'て', 'た'], answer: 0, explain: '要/不要' }
      ],
      fill: [
        { id: 'f1', source: '练习A-1', q: '映画（　） 見（　） です。', answers: ['を', 'たい'], explain: 'たい' },
        { id: 'f2', source: '练习A-2', q: '日本（　） 行き（　） です。', answers: ['へ', 'たい'], explain: '行きたい' },
        { id: 'f3', source: '练习A-3', q: '何（　） 食べ（　） です（　）。', answers: ['を', 'たい', 'か'], explain: '疑问' },
        { id: 'f4', source: '练习A-4', q: '今日（　） 何（　） 食べ（　） です。', answers: ['は', 'も', 'たくない'], explain: '否定愿望' },
        { id: 'f5', source: '练习A-5', q: '週末 買い物（　） 行き（　） です。', answers: ['に', 'たい'], explain: 'に行きたい' },
        { id: 'f6', source: '练习B-1', q: 'わたし（　） 映画（　） 見（　） です。', answers: ['は', 'を', 'たい'], explain: 'たい' }
      ],
      translate: [
        { id: 't1', source: '练习B-1', q: '想看电影。', answers: ['映画を見たいです', '映画を 見たい です'], explain: 'たい' },
        { id: 't2', source: '练习B-2', q: '想去日本。', answers: ['日本へ行きたいです', '日本へ 行きたい です'], explain: '行きたい' },
        { id: 't3', source: '练习B-3', q: '今天什么都不想吃。', answers: ['今日は何も食べたくないです', '今日は 何も 食べたくない です'], explain: 'たくない' },
        { id: 't4', source: '练习B-4', q: '周末想做什么？', answers: ['週末何をしたいですか', '週末 何を したい ですか'], explain: 'したい' }
      ],
      dialogue: [
        { id: 'd1', source: '会话-1', q: 'A：週末 何を したいですか。\\nB：（　　　　　　　）', answers: ['映画を 見たいです', '買い物に 行きたいです'], explain: 'たい' },
        { id: 'd2', source: '会话-2', q: 'A：一緒に 行きましょうか。\\nB：（　　　　　　　）', answers: ['いいですね', 'はい、行きましょう'], explain: '接受' },
        { id: 'd3', source: '会话-3', q: 'A：何を 食べたいですか。\\nB：（　　　　　　　）', answers: ['ラーメンを 食べたいです', '何も 食べたくないです'], explain: '食物' }
      ]
    },
    quiz: [
      { question: '映画を 見たいです', options: ['想看电影', '看了电影', '不看电影', '请看电影'], answer: 0 },
      { question: '食べたい', options: ['想吃', '吃了', '不吃', '请吃'], answer: 0 },
      { question: '行きたい', options: ['想去', '去了', '不去', '请去'], answer: 0 },
      { question: 'たくない', options: ['不想（否定愿望）', '想', '做了', '请做'], answer: 0 },
      { question: 'ほしい', options: ['想要（物品）', '想做', '去了', '请看'], answer: 0, qtype: 'word' },
      { question: 'いります', options: ['需要/要', '不需要', '想要', '做了'], answer: 0, qtype: 'word' },
      { question: '来たい', options: ['想来', '来了', '不来', '请来'], answer: 0 },
      { question: 'したい 的对象用？', options: ['を', 'が', 'に', 'で'], answer: 0 }
    ]
  },
  {
    num: 15,
    id: 'lesson15',
    titleJp: '会議室予約',
    titleCn: '预订会议室',
    pages: { grammar: 49, text: 50, vocab: 51 },
    keyChips: ['条件<span class="hl-part">と</span>', '<span class="hl-part">たら</span>条件', '<span class="hl-part">ば</span>条件', '会議室'],
    grammarTip: '第15课学习<strong>条件表达</strong>：と（自然结果）、たら（假定条件）、ば（一般条件）。',
    rules: [
      { num: '①', title: 'と 条件', body: '表示自然发生的一一对应关系。', featured: true, examples: [{ jp: '春<span class="hl">になる</span><span class="hl-part">と</span>、暖か<span class="hl">くなります</span>。', cn: '一到春天就变暖。' }] },
      { num: '②', title: 'たら 条件', body: '表示前项实现后，后项才发生。', featured: true, examples: [{ jp: '会議<span class="hl">が</span> 終わっ<span class="hl">たら</span>、連絡<span class="hl">します</span>。', cn: '会议结束后联系。' }] },
      { num: '③', title: 'ば 条件', body: '表示一般性条件。', featured: true, examples: [{ jp: '時間<span class="hl">が</span> あれ<span class="hl-part">ば</span>、行き<span class="hl">ます</span>。', cn: '有时间就去。' }] }
    ],
    basicText: [
      { jp: '会議<span class="hl">が</span> 終わっ<span class="hl">たら</span>、連絡<span class="hl">します</span>。', cn: '会议结束后联系。' },
      { jp: '時間<span class="hl">が</span> あれ<span class="hl-part">ば</span>、会議室<span class="hl-part">を</span> 予約<span class="hl">します</span>。', cn: '有时间就预订会议室。' },
      { jp: 'ボタン<span class="hl-part">を</span> 押す<span class="hl-part">と</span>、ドア<span class="hl">が</span> 開き<span class="hl">ます</span>。', cn: '一按按钮门就开。' }
    ],
    dialoguePairs: [
      [{ speaker: '甲', jp: '会議室<span class="hl-part">を</span> 予約<span class="hl">したい</span><span class="hl">んです</span><span class="hl-q">が</span>…', cn: '想预订会议室…', reply: false }, { speaker: '乙', jp: 'いつ<span class="hl-part">を</span> ご希望<span class="hl">です</span><span class="hl-q">か</span>。', cn: '您希望什么时候？', reply: true }]
    ],
    appTitle: '应用课文 · 会議室予約',
    appTurns: [
      { speaker: '李', jp: 'すみません。会議室<span class="hl-part">を</span> 予約<span class="hl">したい</span><span class="hl">んです</span><span class="hl-q">が</span>。', cn: '不好意思，想预订会议室。', reply: false },
      { speaker: '受付', jp: 'いつ<span class="hl-part">を</span> ご希望<span class="hl">です</span><span class="hl-q">か</span>。', cn: '您希望什么时候？', reply: true },
      { speaker: '李', jp: '来週の 火曜日<span class="hl">の</span> 午後<span class="hl">は</span> 空い<span class="hl">て</span> い<span class="hl">ます</span><span class="hl-q">か</span>。', cn: '下周二下午有空吗？', reply: false },
      { speaker: '受付', jp: 'はい、空い<span class="hl">て</span> い<span class="hl">ます</span>。', cn: '是的，有空。', reply: true }
    ],
    vocab: {
      circle1: [
        { jp: '予約', kana: 'よやく', pos: '名', cn: '预订' },
        { jp: '会議', kana: 'かいぎ', pos: '名', cn: '会议' },
        { jp: '会議室', kana: 'かいぎしつ', pos: '名', cn: '会议室' },
        { jp: '終わります', kana: 'おわります', pos: '动', cn: '结束' },
        { jp: '連絡', kana: 'れんらく', pos: '名', cn: '联系' },
        { jp: '空いています', kana: 'あいています', pos: '—', cn: '空着' },
        { jp: '希望', kana: 'きぼう', pos: '名', cn: '希望' },
        { jp: '午後', kana: 'ごご', pos: '名', cn: '下午' },
        { jp: '押します', kana: 'おします', pos: '动', cn: '按' },
        { jp: '開きます', kana: 'あきます', pos: '动', cn: '开' }
      ],
      circle2: [
        { jp: 'ボタン', kana: 'ボタン', pos: '名', cn: '按钮' },
        { jp: 'ドア', kana: 'ドア', pos: '名', cn: '门' },
        { jp: '受付', kana: 'うけつけ', pos: '名', cn: '接待处' },
        { jp: '都合', kana: 'つごう', pos: '名', cn: '情况，方便' },
        { jp: '都合がいい', kana: 'つごうがいい', pos: '—', cn: '方便' },
        { jp: '都合が悪い', kana: 'つごうがわるい', pos: '—', cn: '不方便' }
      ],
      circle3: [
        { jp: '予約票', kana: 'よやくひょう', pos: '名', cn: '预订票' },
        { jp: 'キャンセル', kana: 'キャンセル', pos: '名', cn: '取消' },
        { jp: '変更', kana: 'へんこう', pos: '名', cn: '变更' },
        { jp: '利用', kana: 'りよう', pos: '名', cn: '利用' },
        { jp: '無料', kana: 'むりょう', pos: '名', cn: '免费' }
      ]
    },
    homework: {
      choice: [
        { id: 'c1', source: '练习A-1', q: '会議が 終わっ（＿＿＿）、連絡します。', options: ['たら', 'と', 'ば', 'て'], answer: 0, explain: 'たら条件' },
        { id: 'c2', source: '练习A-2', q: '時間が あれ（＿＿＿）、行きます。', options: ['ば', 'たら', 'と', 'て'], answer: 0, explain: 'ば条件' },
        { id: 'c3', source: '练习A-3', q: 'ボタンを 押す（＿＿＿）、ドアが 開きます。', options: ['と', 'たら', 'ば', 'て'], answer: 0, explain: '自然结果と' },
        { id: 'c4', source: '练习A-4', q: '「たら」表示？', options: ['假定条件/时间先后', '自然结果', '一般条件', '原因'], answer: 0, explain: 'たら' },
        { id: 'c5', source: '练习A-5', q: '会議室を 予約（＿＿＿） んですが。', options: ['したい', 'した', 'する', 'して'], answer: 0, explain: 'たい+んですが' },
        { id: 'c6', source: '练习A-6', q: '空い（＿＿＿） います 表示？', options: ['て', 'た', 'と', 'ば'], answer: 0, explain: 'ている' },
        { id: 'c7', source: '练习B-1', q: '春（＿＿＿） なると、暖かくなります。', options: ['に', 'が', 'を', 'で'], answer: 0, explain: 'になる' },
        { id: 'c8', source: '练习B-2', q: '都合（＿＿＿） いい', options: ['が', 'は', 'を', 'に'], answer: 0, explain: '都合がいい' }
      ],
      fill: [
        { id: 'f1', source: '练习A-1', q: '会議（　） 終わっ（　）、連絡（　）。', answers: ['が', 'たら', 'します'], explain: 'たら' },
        { id: 'f2', source: '练习A-2', q: '時間（　） あれ（　）、行き（　）。', answers: ['が', 'ば', 'ます'], explain: 'ば' },
        { id: 'f3', source: '练习A-3', q: 'ボタン（　） 押す（　）、ドア（　） 開き（　）。', answers: ['を', 'と', 'が', 'ます'], explain: 'と' },
        { id: 'f4', source: '练习A-4', q: '会議室（　） 予約（　） んです（　）。', answers: ['を', 'したい', 'が'], explain: 'たい+が' },
        { id: 'f5', source: '练习A-5', q: '来週の 火曜日（　） 午後（　） 空い（　） い（　） か。', answers: ['の', 'は', 'て', 'ます'], explain: '空いている' },
        { id: 'f6', source: '练习B-1', q: '都合（　） 悪（　）。', answers: ['が', 'い'], explain: '都合が悪い' }
      ],
      translate: [
        { id: 't1', source: '练习B-1', q: '会议结束后联系。', answers: ['会議が終わったら連絡します', '会議が 終わったら 連絡 します'], explain: 'たら' },
        { id: 't2', source: '练习B-2', q: '有时间就去。', answers: ['時間があれば行きます', '時間が あれば 行きます'], explain: 'ば' },
        { id: 't3', source: '练习B-3', q: '一按按钮门就开。', answers: ['ボタンを押すとドアが開きます', 'ボタンを 押すと ドアが 開きます'], explain: 'と' },
        { id: 't4', source: '练习B-4', q: '想预订会议室。', answers: ['会議室を予約したいです', '会議室を 予約 したい です'], explain: '予約' }
      ],
      dialogue: [
        { id: 'd1', source: '会话-1', q: 'A：会議室を 予約したいんですが。\\nB：（　　　　　　　）', answers: ['いつを ご希望ですか', '何時が よろしいですか'], explain: '接待' },
        { id: 'd2', source: '会话-2', q: 'A：来週の 火曜日の 午後は 空いていますか。\\nB：（　　　　　　　）', answers: ['はい、空いています', 'いいえ、空いていません'], explain: '空き' },
        { id: 'd3', source: '会话-3', q: 'A：会議が 終わったら 連絡します。\\nB：（　　　　　　　）', answers: ['はい、わかりました', 'お願いします'], explain: '应答' }
      ]
    },
    quiz: [
      { question: '会議が 終わったら', options: ['会议结束后（就）', '会议结束前', '会议时', '不开会'], answer: 0 },
      { question: 'と 条件特点', options: ['自然一一对应', '假定先后', '一般条件', '转折'], answer: 0 },
      { question: 'たら 条件特点', options: ['假定/时间先后', '自然结果', '能力', '愿望'], answer: 0 },
      { question: 'ば 条件特点', options: ['一般条件', '自然结果', '先后', '引用'], answer: 0 },
      { question: 'よやく', options: ['预订', '会议', '联系', '结束'], answer: 0, qtype: 'word' },
      { question: 'れんらく', options: ['联系', '预订', '会议', '按钮'], answer: 0, qtype: 'word' },
      { question: '都合がいい', options: ['方便', '不方便', '结束', '开始'], answer: 0 },
      { question: '空いています', options: ['空着/有空', '满了', '结束', '开始'], answer: 0 }
    ]
  },
  {
    num: 16,
    id: 'lesson16',
    titleJp: '旅行の予定',
    titleCn: '旅行计划',
    pages: { grammar: 52, text: 53, vocab: 54 },
    keyChips: ['可能形', '意向形复习', 'V<span class="hl-part">に</span>行く', '予定'],
    grammarTip: '第16课学习<strong>可能形</strong>，表示能够做某事。一类：え段+る；二类：去る+られる；三类：できる/来られる。',
    rules: [
      { num: '①', title: '动词可能形', body: '表示能力或许可。', featured: true, examples: [{ jp: '日本語<span class="hl-part">が</span> 話せ<span class="hl">ます</span>。', cn: '会说日语。' }, { jp: 'ここ<span class="hl-part">で</span> 写真<span class="hl-part">が</span> 撮れ<span class="hl">ます</span>。', cn: '这里可以拍照。' }] },
      { num: '②', title: '可能形与を/が', body: '对象可用を或が。', featured: false, examples: [{ jp: 'ピアノ<span class="hl-part">が</span> 弾け<span class="hl">ます</span>。', cn: '会弹钢琴。' }] },
      { num: '③', title: 'Vに行く', body: '去做某事。', featured: false, examples: [{ jp: '買い物<span class="hl-part">に</span> 行き<span class="hl">ます</span>。', cn: '去购物。' }] }
    ],
    basicText: [
      { jp: '来月 旅行<span class="hl-part">に</span> 行く<span class="hl">予定</span><span class="hl">です</span>。', cn: '计划下个月去旅行。' },
      { jp: '李さん<span class="hl">は</span> 日本語<span class="hl-part">が</span> 話せ<span class="hl">ます</span>。', cn: '小李会说日语。' },
      { jp: 'ここ<span class="hl-part">で</span> タバコ<span class="hl-part">が</span> 吸え<span class="hl-neg">ません</span>。', cn: '这里不能吸烟。' }
    ],
    dialoguePairs: [
      [{ speaker: '甲', jp: '来月 何<span class="hl-part">を</span> する<span class="hl">予定</span><span class="hl">です</span><span class="hl-q">か</span>。', cn: '下个月计划做什么？', reply: false }, { speaker: '乙', jp: '旅行<span class="hl-part">に</span> 行く<span class="hl">予定</span><span class="hl">です</span>。', cn: '计划去旅行。', reply: true }]
    ],
    appTitle: '应用课文 · 旅行の相談',
    appTurns: [
      { speaker: '李', jp: '来月 旅行<span class="hl-part">に</span> 行き<span class="hl">たい</span><span class="hl">んです</span><span class="hl-q">が</span>。', cn: '下个月想去旅行。', reply: false },
      { speaker: '小野', jp: 'どこ<span class="hl-part">へ</span> 行く<span class="hl">予定</span><span class="hl">です</span><span class="hl-q">か</span>。', cn: '计划去哪里？', reply: true },
      { speaker: '李', jp: '京都<span class="hl-part">へ</span> 行く<span class="hl">予定</span><span class="hl">です</span>。', cn: '计划去京都。', reply: false },
      { speaker: '小野', jp: 'いい<span class="hl">です</span><span class="hl-q">ね</span>。', cn: '好啊。', reply: true }
    ],
    vocab: {
      circle1: [
        { jp: '予定', kana: 'よてい', pos: '名', cn: '计划' },
        { jp: '旅行', kana: 'りょこう', pos: '名', cn: '旅行' },
        { jp: '話せます', kana: 'はなせます', pos: '—', cn: '能说' },
        { jp: '読めます', kana: 'よめます', pos: '—', cn: '能读' },
        { jp: '書けます', kana: 'かけます', pos: '—', cn: '能写' },
        { jp: '泳げます', kana: 'およげます', pos: '—', cn: '能游泳' },
        { jp: '来月', kana: 'らいげつ', pos: '名', cn: '下月' },
        { jp: '京都', kana: 'きょうと', pos: '专', cn: '京都' },
        { jp: '弾けます', kana: 'ひけます', pos: '—', cn: '能弹（琴）' },
        { jp: '撮れます', kana: 'とれます', pos: '—', cn: '能拍（照）' }
      ],
      circle2: [
        { jp: '運転', kana: 'うんてん', pos: '名', cn: '驾驶' },
        { jp: '運転できます', kana: 'うんてんできます', pos: '—', cn: '能开车' },
        { jp: '相談', kana: 'そうだん', pos: '名', cn: '商量' },
        { jp: '準備', kana: 'じゅんび', pos: '名', cn: '准备' },
        { jp: '予約', kana: 'よやく', pos: '名', cn: '预订' }
      ],
      circle3: [
        { jp: '大阪', kana: 'おおさか', pos: '专', cn: '大阪' },
        { jp: '奈良', kana: 'なら', pos: '专', cn: '奈良' },
        { jp: 'ホテル', kana: 'ホテル', pos: '名', cn: '宾馆' },
        { jp: '新幹線', kana: 'しんかんせん', pos: '名', cn: '新干线' },
        { jp: '切符', kana: 'きっぷ', pos: '名', cn: '票' }
      ]
    },
    homework: {
      choice: [
        { id: 'c1', source: '练习A-1', q: '日本語（＿＿＿） 話せます。', options: ['が', 'を', 'に', 'で'], answer: 0, explain: '可能+が' },
        { id: 'c2', source: '练习A-2', q: '話します 可能形', options: ['話せます', '話られます', '話できます', '話ります'], answer: 0, explain: '一类可能' },
        { id: 'c3', source: '练习A-3', q: '食べます 可能形', options: ['食べられます', '食べせます', '食べます', '食べできます'], answer: 0, explain: '二类' },
        { id: 'c4', source: '练习A-4', q: '来月 旅行（＿＿＿） 行く 予定 です。', options: ['に', 'を', 'が', 'で'], answer: 0, explain: 'Vに行く' },
        { id: 'c5', source: '练习A-5', q: 'します 可能形', options: ['できます', 'せます', 'されます', 'しられます'], answer: 0, explain: '三类' },
        { id: 'c6', source: '练习A-6', q: '来ます 可能形', options: ['来られます', '来せます', '来できます', '来ります'], answer: 0, explain: '来られる' },
        { id: 'c7', source: '练习B-1', q: 'ここ（＿＿＿） タバコが 吸えません。', options: ['で', 'に', 'を', 'が'], answer: 0, explain: '场所で' },
        { id: 'c8', source: '练习B-2', q: '読みます 可能形', options: ['読めます', '読られます', '読できます', '読ります'], answer: 0, explain: '読める' }
      ],
      fill: [
        { id: 'f1', source: '练习A-1', q: '李さん（　） 日本語（　） 話せ（　）。', answers: ['は', 'が', 'ます'], explain: '可能' },
        { id: 'f2', source: '练习A-2', q: '来月 旅行（　） 行く 予定（　）。', answers: ['に', 'です'], explain: '予定' },
        { id: 'f3', source: '练习A-3', q: 'ここ（　） 写真（　） 撮れ（　）。', answers: ['で', 'が', 'ます'], explain: 'で+可能' },
        { id: 'f4', source: '练习A-4', q: 'ピアノ（　） 弾け（　）。', answers: ['が', 'ます'], explain: '弾ける' },
        { id: 'f5', source: '练习A-5', q: '京都（　） 行く 予定（　）。', answers: ['へ', 'です'], explain: 'へ' },
        { id: 'f6', source: '练习B-1', q: '中国語（　） 読め（　） か。', answers: ['が', 'ます'], explain: '可能疑问' }
      ],
      translate: [
        { id: 't1', source: '练习B-1', q: '小李会说日语。', answers: ['李さんは日本語が話せます', '李さんは 日本語が 話せます'], explain: '可能形' },
        { id: 't2', source: '练习B-2', q: '计划下个月去旅行。', answers: ['来月旅行に行く予定です', '来月 旅行に 行く 予定 です'], explain: '予定' },
        { id: 't3', source: '练习B-3', q: '这里不能吸烟。', answers: ['ここでタバコが吸えません', 'ここで タバコが 吸えません'], explain: '可能否定' },
        { id: 't4', source: '练习B-4', q: '会弹钢琴。', answers: ['ピアノが弾けます', 'ピアノが 弾けます'], explain: '弾ける' }
      ],
      dialogue: [
        { id: 'd1', source: '会话-1', q: 'A：来月 何を する 予定ですか。\\nB：（　　　　　　　）', answers: ['旅行に 行く 予定です', '京都へ 行く 予定です'], explain: '予定' },
        { id: 'd2', source: '会话-2', q: 'A：日本語が 話せますか。\\nB：（　　　　　　　）', answers: ['はい、話せます', 'いいえ、話せません'], explain: '可能' },
        { id: 'd3', source: '会话-3', q: 'A：どこへ 行く 予定ですか。\\nB：（　　　　　　　）', answers: ['京都へ 行く 予定です', '大阪へ 行く 予定です'], explain: '方向' }
      ]
    },
    quiz: [
      { question: '話せます', options: ['能说', '说', '不说', '请说'], answer: 0 },
      { question: '可能形对象常用？', options: ['が/を', 'に/で', 'は/も', 'と/から'], answer: 0 },
      { question: '食べられます', options: ['能吃', '吃', '不吃', '请吃'], answer: 0 },
      { question: 'よてい', options: ['计划', '旅行', '准备', '预订'], answer: 0, qtype: 'word' },
      { question: '旅行に 行く 予定', options: ['计划去旅行', '正在旅行', '不想旅行', '请旅行'], answer: 0 },
      { question: 'できます', options: ['能做', '做了', '不做', '请做'], answer: 0 },
      { question: '来られます', options: ['能来', '来', '不来', '请来'], answer: 0 },
      { question: '読めます', options: ['能读', '读', '不读', '请读'], answer: 0 }
    ]
  },
  {
    num: 17,
    id: 'lesson17',
    titleJp: '趣味',
    titleCn: '爱好',
    pages: { grammar: 56, text: 57, vocab: 58 },
    keyChips: ['<span class="hl-neg">なければなりません</span>', '<span class="hl-part">ほうが</span> ～', '趣味', '比較'],
    grammarTip: '第17课学习<strong>义务表达</strong>「なければなりません」和<strong>比较</strong>「AよりBのほうが～」。',
    rules: [
      { num: '①', title: 'なければなりません', body: '表示必须做。', featured: true, examples: [{ jp: '明日 早く 起き<span class="hl-neg">なければ なりません</span>。', cn: '明天必须早起。' }] },
      { num: '②', title: 'なくてもいい', body: '表示不必做。', featured: true, examples: [{ jp: '今日 勉強<span class="hl-neg">しなくても いい</span><span class="hl">です</span>。', cn: '今天不必学习。' }] },
      { num: '③', title: 'Aより Bのほうが～', body: 'B比A更～。', featured: true, examples: [{ jp: '映画<span class="hl">より</span> 音楽<span class="hl">の</span> <span class="hl-part">ほうが</span> 好き<span class="hl">です</span>。', cn: '比起电影更喜欢音乐。' }] }
    ],
    basicText: [
      { jp: '趣味<span class="hl">は</span> 何<span class="hl">です</span><span class="hl-q">か</span>。', cn: '爱好是什么？' },
      { jp: '趣味<span class="hl">は</span> 読書<span class="hl">です</span>。', cn: '爱好是读书。' },
      { jp: '映画<span class="hl">より</span> 音楽<span class="hl">の</span> <span class="hl-part">ほうが</span> 好き<span class="hl">です</span>。', cn: '比起电影更喜欢音乐。' },
      { jp: '明日 早く 起き<span class="hl-neg">なければ なりません</span>。', cn: '明天必须早起。' }
    ],
    dialoguePairs: [
      [{ speaker: '甲', jp: '趣味<span class="hl">は</span> 何<span class="hl">です</span><span class="hl-q">か</span>。', cn: '爱好是什么？', reply: false }, { speaker: '乙', jp: 'スポーツ<span class="hl">です</span>。', cn: '是运动。', reply: true }]
    ],
    appTitle: '应用课文 · 趣味の話',
    appTurns: [
      { speaker: '李', jp: '小野さん<span class="hl">の</span> 趣味<span class="hl">は</span> 何<span class="hl">です</span><span class="hl-q">か</span>。', cn: '小野女士的爱好是什么？', reply: false },
      { speaker: '小野', jp: '旅行<span class="hl">です</span>。', cn: '是旅行。', reply: true },
      { speaker: '李', jp: '国内<span class="hl">と</span> 海外、どちら<span class="hl">の</span> <span class="hl-part">ほうが</span> 好き<span class="hl">です</span><span class="hl-q">か</span>。', cn: '国内和国外，更喜欢哪个？', reply: false },
      { speaker: '小野', jp: '海外<span class="hl">の</span> <span class="hl-part">ほうが</span> 好き<span class="hl">です</span>。', cn: '更喜欢国外。', reply: true }
    ],
    vocab: {
      circle1: [
        { jp: '趣味', kana: 'しゅみ', pos: '名', cn: '爱好' },
        { jp: '読書', kana: 'どくしょ', pos: '名', cn: '读书' },
        { jp: 'スポーツ', kana: 'スポーツ', pos: '名', cn: '运动' },
        { jp: '音楽', kana: 'おんがく', pos: '名', cn: '音乐' },
        { jp: '絵', kana: 'え', pos: '名', cn: '画' },
        { jp: '写真', kana: 'しゃしん', pos: '名', cn: '照片' },
        { jp: '釣り', kana: 'つり', pos: '名', cn: '钓鱼' },
        { jp: '歌', kana: 'うた', pos: '名', cn: '歌' },
        { jp: 'ダンス', kana: 'ダンス', pos: '名', cn: '舞蹈' },
        { jp: 'ほう', kana: 'ほう', pos: '名', cn: '方，方向' }
      ],
      circle2: [
        { jp: '国内', kana: 'こくない', pos: '名', cn: '国内' },
        { jp: '海外', kana: 'かいがい', pos: '名', cn: '海外' },
        { jp: 'どちら', kana: 'どちら', pos: '代', cn: '哪边' },
        { jp: '特に', kana: 'とくに', pos: '副', cn: '特别' },
        { jp: '色々', kana: 'いろいろ', pos: '副', cn: '各种各样' }
      ],
      circle3: [
        { jp: '茶道', kana: 'さどう', pos: '名', cn: '茶道' },
        { jp: '花道', kana: 'かどう', pos: '名', cn: '花道' },
        { jp: '将棋', kana: 'しょうぎ', pos: '名', cn: '将棋' },
        { jp: '囲碁', kana: 'いご', pos: '名', cn: '围棋' },
        { jp: '散歩', kana: 'さんぽ', pos: '名', cn: '散步' }
      ]
    },
    homework: {
      choice: [
        { id: 'c1', source: '练习A-1', q: '明日 早く 起き（＿＿＿）。', options: ['なければなりません', 'なくてもいい', 'たいです', 'ましょう'], answer: 0, explain: '必须' },
        { id: 'c2', source: '练习A-2', q: '今日 勉強（＿＿＿） いい です。', options: ['しなくても', 'しなければ', 'した', 'して'], answer: 0, explain: '不必' },
        { id: 'c3', source: '练习A-3', q: '映画（＿＿＿） 音楽の ほうが 好き です。', options: ['より', 'の', 'が', 'を'], answer: 0, explain: 'より比较' },
        { id: 'c4', source: '练习A-4', q: '趣味（＿＿＿） 何 ですか。', options: ['は', 'が', 'を', 'に'], answer: 0, explain: '主题は' },
        { id: 'c5', source: '练习A-5', q: '「なければなりません」表示？', options: ['必须', '不必', '可以', '想'], answer: 0, explain: '义务' },
        { id: 'c6', source: '练习A-6', q: '海外（＿＿＿） ほうが 好き です。', options: ['の', 'より', 'が', 'を'], answer: 0, explain: 'のほうが' },
        { id: 'c7', source: '练习B-1', q: '国内（＿＿＿） 海外、どちらの ほうが…', options: ['と', 'より', 'が', 'を'], answer: 0, explain: 'AとB比较' },
        { id: 'c8', source: '练习B-2', q: 'しゅみ', options: ['爱好', '旅行', '音乐', '运动'], answer: 0, explain: '词汇' }
      ],
      fill: [
        { id: 'f1', source: '练习A-1', q: '明日 早く 起き（　）。', answers: ['なければなりません'], explain: '必须' },
        { id: 'f2', source: '练习A-2', q: '今日 勉強（　） いい（　）。', answers: ['しなくても', 'です'], explain: '不必' },
        { id: 'f3', source: '练习A-3', q: '映画（　） 音楽（　） ほう（　） 好き（　）。', answers: ['より', 'の', 'が', 'です'], explain: '比较' },
        { id: 'f4', source: '练习A-4', q: '趣味（　） 何（　） か。', answers: ['は', 'です'], explain: '疑问' },
        { id: 'f5', source: '练习A-5', q: '趣味（　） 読書（　）。', answers: ['は', 'です'], explain: '判断' },
        { id: 'f6', source: '练习B-1', q: '海外（　） ほう（　） 好き（　）。', answers: ['の', 'が', 'です'], explain: 'のほうが' }
      ],
      translate: [
        { id: 't1', source: '练习B-1', q: '爱好是什么？', answers: ['趣味は何ですか', '趣味は 何 ですか'], explain: '趣味' },
        { id: 't2', source: '练习B-2', q: '比起电影更喜欢音乐。', answers: ['映画より音楽のほうが好きです', '映画より 音楽の ほうが 好き です'], explain: 'より' },
        { id: 't3', source: '练习B-3', q: '明天必须早起。', answers: ['明日早く起きなければなりません', '明日 早く 起きなければ なりません'], explain: '义务' },
        { id: 't4', source: '练习B-4', q: '今天不必学习。', answers: ['今日勉強しなくてもいいです', '今日 勉強 しなくても いい です'], explain: '不必' }
      ],
      dialogue: [
        { id: 'd1', source: '会话-1', q: 'A：趣味は 何ですか。\\nB：（　　　　　　　）', answers: ['読書です', 'スポーツです', '旅行です'], explain: '爱好' },
        { id: 'd2', source: '会话-2', q: 'A：映画より 音楽の ほうが 好きですか。\\nB：（　　　　　　　）', answers: ['はい、そうです', 'いいえ、映画の ほうが 好きです'], explain: '比较' },
        { id: 'd3', source: '会话-3', q: 'A：国内と 海外、どちらの ほうが 好きですか。\\nB：（　　　　　　　）', answers: ['海外の ほうが 好きです', '国内の ほうが 好きです'], explain: 'どちら' }
      ]
    },
    quiz: [
      { question: 'なければなりません', options: ['必须', '不必', '可以', '想'], answer: 0 },
      { question: 'なくてもいい', options: ['不必/也可以不', '必须', '想', '请'], answer: 0 },
      { question: 'Aより Bのほうが', options: ['B比A更…', 'A比B更…', 'A和B一样', 'A不是B'], answer: 0 },
      { question: 'しゅみ', options: ['爱好', '必须', '比较', '旅行'], answer: 0, qtype: 'word' },
      { question: 'どくしょ', options: ['读书', '音乐', '运动', '钓鱼'], answer: 0, qtype: 'word' },
      { question: 'おんがく', options: ['音乐', '电影', '画', '歌'], answer: 0, qtype: 'word' },
      { question: 'より', options: ['比…（比较基准）', '更', '和', '的'], answer: 0 },
      { question: '趣味は 読書です', options: ['爱好是读书', '必须读书', '不必读书', '想读书'], answer: 0 }
    ]
  },
  {
    num: 18,
    id: 'lesson18',
    titleJp: '帰国準備',
    titleCn: '回国准备',
    pages: { grammar: 59, text: 60, vocab: 61 },
    keyChips: ['受身（被动）', '使役', '～<span class="hl">られます</span>', '～<span class="hl">せます</span>'],
    grammarTip: '第18课学习<strong>被动形</strong>和<strong>使役形</strong>基础。被动：一类あ段+れる；二类+られる；使役：せる/させる。',
    rules: [
      { num: '①', title: '被动形', body: '表示承受动作。', featured: true, examples: [{ jp: '李さん<span class="hl">は</span> 小野さん<span class="hl-part">に</span> 教え<span class="hl">られ</span><span class="hl">ました</span>。', cn: '小李被小野女士教了。' }] },
      { num: '②', title: '使役形', body: '表示让/使某人做。', featured: true, examples: [{ jp: '母<span class="hl">は</span> 子供<span class="hl-part">に</span> 野菜<span class="hl-part">を</span> 食べ<span class="hl">させ</span><span class="hl">ます</span>。', cn: '母亲让孩子吃蔬菜。' }] },
      { num: '③', title: '准备表达', body: '～の準備をする。', featured: false, examples: [{ jp: '帰国<span class="hl">の</span> 準備<span class="hl-part">を</span> し<span class="hl">ます</span>。', cn: '做回国准备。' }] }
    ],
    basicText: [
      { jp: '帰国<span class="hl">の</span> 準備<span class="hl-part">を</span> し<span class="hl">ます</span>。', cn: '做回国准备。' },
      { jp: '李さん<span class="hl">は</span> 会社<span class="hl-part">で</span> 中国語<span class="hl-part">を</span> 教え<span class="hl">られ</span><span class="hl">ています</span>。', cn: '小李在公司教中文（被安排/从事）。' },
      { jp: '荷物<span class="hl-part">を</span> 整理<span class="hl">します</span>。', cn: '整理行李。' }
    ],
    dialoguePairs: [
      [{ speaker: '甲', jp: '帰国<span class="hl">の</span> 準備<span class="hl">は</span> でき<span class="hl">ました</span><span class="hl-q">か</span>。', cn: '回国准备做好了吗？', reply: false }, { speaker: '乙', jp: 'はい、もう でき<span class="hl">ました</span>。', cn: '是的，已经做好了。', reply: true }]
    ],
    appTitle: '应用课文 · 帰国準備',
    appTurns: [
      { speaker: '小野', jp: '李さん、帰国<span class="hl">の</span> 準備<span class="hl">は</span> でき<span class="hl">ました</span><span class="hl-q">か</span>。', cn: '小李，回国准备做好了吗？', reply: false },
      { speaker: '李', jp: 'はい、荷物<span class="hl">も</span> 整理<span class="hl">しました</span>。', cn: '是的，行李也整理好了。', reply: true },
      { speaker: '小野', jp: '飛行機<span class="hl">は</span> 何時<span class="hl">です</span><span class="hl-q">か</span>。', cn: '飞机几点？', reply: false },
      { speaker: '李', jp: '午後 3時<span class="hl">です</span>。', cn: '下午3点。', reply: true }
    ],
    vocab: {
      circle1: [
        { jp: '帰国', kana: 'きこく', pos: '名', cn: '回国' },
        { jp: '準備', kana: 'じゅんび', pos: '名', cn: '准备' },
        { jp: '整理', kana: 'せいり', pos: '名', cn: '整理' },
        { jp: '教えられます', kana: 'おしえられます', pos: '—', cn: '被教/教（从事）' },
        { jp: '食べさせます', kana: 'たべさせます', pos: '—', cn: '让吃' },
        { jp: '荷物', kana: 'にもつ', pos: '名', cn: '行李' },
        { jp: '飛行機', kana: 'ひこうき', pos: '名', cn: '飞机' },
        { jp: '空港', kana: 'くうこう', pos: '名', cn: '机场' },
        { jp: '送る', kana: 'おくる', pos: '动', cn: '送' },
        { jp: '見送る', kana: 'みおくる', pos: '动', cn: '送行' }
      ],
      circle2: [
        { jp: 'パスポート', kana: 'パスポート', pos: '名', cn: '护照' },
        { jp: '切符', kana: 'きっぷ', pos: '名', cn: '票' },
        { jp: 'お土産', kana: 'おみやげ', pos: '名', cn: '礼物' },
        { jp: 'チェックイン', kana: 'チェックイン', pos: '名', cn: '办理登机' },
        { jp: '残念', kana: 'ざんねん', pos: 'な形', cn: '遗憾' }
      ],
      circle3: [
        { jp: '別れ', kana: 'わかれ', pos: '名', cn: '分别' },
        { jp: '連絡先', kana: 'れんらくさき', pos: '名', cn: '联系方式' },
        { jp: 'メール', kana: 'メール', pos: '名', cn: '邮件' },
        { jp: '住所', kana: 'じゅうしょ', pos: '名', cn: '地址' },
        { jp: '電話番号', kana: 'でんわばんごう', pos: '名', cn: '电话号码' }
      ]
    },
    homework: {
      choice: [
        { id: 'c1', source: '练习A-1', q: '李さんは 小野さん（＿＿＿） 教えられました。', options: ['に', 'を', 'が', 'で'], answer: 0, explain: '被动施动者に' },
        { id: 'c2', source: '练习A-2', q: '教えます 被动形', options: ['教えられます', '教えせます', '教えられせます', '教えります'], answer: 0, explain: '被动' },
        { id: 'c3', source: '练习A-3', q: '食べます 使役形', options: ['食べさせます', '食べられます', '食べせます', '食べります'], answer: 0, explain: '使役' },
        { id: 'c4', source: '练习A-4', q: '帰国（＿＿＿） 準備を します。', options: ['の', 'が', 'を', 'に'], answer: 0, explain: 'の' },
        { id: 'c5', source: '练习A-5', q: '母は 子供（＿＿＿） 野菜を 食べさせます。', options: ['に', 'を', 'が', 'で'], answer: 0, explain: '使役对象に' },
        { id: 'c6', source: '练习A-6', q: 'きこく', options: ['回国', '出国', '准备', '整理'], answer: 0, explain: '词汇' },
        { id: 'c7', source: '练习B-1', q: '荷物（＿＿＿） 整理します。', options: ['を', 'に', 'が', 'で'], answer: 0, explain: 'を' },
        { id: 'c8', source: '练习B-2', q: '見送（＿＿＿） ます', options: ['り', 'ら', 'せ', 'さ'], answer: 0, explain: '見送る' }
      ],
      fill: [
        { id: 'f1', source: '练习A-1', q: '帰国（　） 準備（　） し（　）。', answers: ['の', 'を', 'ます'], explain: '准备' },
        { id: 'f2', source: '练习A-2', q: '李さん（　） 小野さん（　） 教え（　）。', answers: ['は', 'に', 'られました'], explain: '被动' },
        { id: 'f3', source: '练习A-3', q: '母（　） 子供（　） 野菜（　） 食べ（　）。', answers: ['は', 'に', 'を', 'させます'], explain: '使役' },
        { id: 'f4', source: '练习A-4', q: '荷物（　） 整理（　）。', answers: ['を', 'します'], explain: '整理' },
        { id: 'f5', source: '练习A-5', q: '準備（　） でき（　） か。', answers: ['は', 'ました'], explain: '完成' },
        { id: 'f6', source: '练习B-1', q: '飛行機（　） 何時（　） か。', answers: ['は', 'です'], explain: '疑问' }
      ],
      translate: [
        { id: 't1', source: '练习B-1', q: '做回国准备。', answers: ['帰国の準備をします', '帰国の 準備を します'], explain: '準備' },
        { id: 't2', source: '练习B-2', q: '整理行李。', answers: ['荷物を整理します', '荷物を 整理 します'], explain: '整理' },
        { id: 't3', source: '练习B-3', q: '母亲让孩子吃蔬菜。', answers: ['母は子供に野菜を食べさせます', '母は 子供に 野菜を 食べさせます'], explain: '使役' },
        { id: 't4', source: '练习B-4', q: '回国准备做好了吗？', answers: ['帰国の準備はできましたか', '帰国の 準備は できましたか'], explain: 'できました' }
      ],
      dialogue: [
        { id: 'd1', source: '会话-1', q: 'A：帰国の 準備は できましたか。\\nB：（　　　　　　　）', answers: ['はい、もう できました', 'いいえ、まだ です'], explain: '准备' },
        { id: 'd2', source: '会话-2', q: 'A：飛行機は 何時ですか。\\nB：（　　　　　　　）', answers: ['午後 3時です', '午前 10時です'], explain: '时间' },
        { id: 'd3', source: '会话-3', q: 'A：荷物は 整理しましたか。\\nB：（　　　　　　　）', answers: ['はい、整理しました', 'いいえ、まだ です'], explain: '整理' }
      ]
    },
    quiz: [
      { question: '教えられました', options: ['被教了/教（从事）', '教了', '让教', '不教'], answer: 0 },
      { question: '食べさせます', options: ['让吃', '被吃', '吃', '不吃'], answer: 0 },
      { question: 'きこく', options: ['回国', '出国', '旅行', '准备'], answer: 0, qtype: 'word' },
      { question: 'じゅんび', options: ['准备', '整理', '回国', '送行'], answer: 0, qtype: 'word' },
      { question: '被动施动者用？', options: ['に', 'を', 'が', 'で'], answer: 0 },
      { question: '使役对象用？', options: ['に', 'を', 'が', 'で'], answer: 0 },
      { question: 'みおくる', options: ['送行', '送', '看', '回'], answer: 0, qtype: 'word' },
      { question: '帰国の 準備を します', options: ['做回国准备', '回国了', '不回国', '请回国'], answer: 0 }
    ]
  },
  {
    num: 19,
    id: 'lesson19',
    titleJp: '忘年会',
    titleCn: '忘年会',
    pages: { grammar: 62, text: 63, vocab: 64 },
    keyChips: ['敬语基础', 'お/ご～', 'いらっしゃる', '召し上がる'],
    grammarTip: '第19课学习<strong>敬语基础</strong>：尊他语（お/ご～、いらっしゃる）和自谦语（参る、申す等）。',
    rules: [
      { num: '①', title: '尊他语', body: '抬高对方动作。お/ご+动词；いらっしゃる（在/来/去）。', featured: true, examples: [{ jp: '社長<span class="hl">は</span> もう いらっしゃい<span class="hl">ました</span><span class="hl-q">か</span>。', cn: '总经理已经来了吗？' }, { jp: 'どうぞ お入り<span class="hl">ください</span>。', cn: '请进。' }] },
      { num: '②', title: '自谦语', body: '降低自己动作。参る（来/去）、申す（说）、いただく（得到）。', featured: true, examples: [{ jp: 'わたくし<span class="hl">が</span> 参り<span class="hl">ます</span>。', cn: '我去（自谦）。' }] },
      { num: '③', title: '忘年会', body: '年末聚餐，忘记一年辛劳。', featured: false, examples: [{ jp: '忘年会<span class="hl-part">に</span> 参加<span class="hl">します</span>。', cn: '参加忘年会。' }] }
    ],
    basicText: [
      { jp: '忘年会<span class="hl-part">に</span> 参加<span class="hl">します</span>。', cn: '参加忘年会。' },
      { jp: '社長<span class="hl">は</span> もう いらっしゃい<span class="hl">ました</span><span class="hl-q">か</span>。', cn: '总经理已经来了吗？' },
      { jp: 'どうぞ お召し上がり<span class="hl">ください</span>。', cn: '请吃。' },
      { jp: '来年<span class="hl">も</span> よろしく お願い<span class="hl">します</span>。', cn: '明年也请多关照。' }
    ],
    dialoguePairs: [
      [{ speaker: '甲', jp: '社長<span class="hl">は</span> いらっしゃい<span class="hl">ます</span><span class="hl-q">か</span>。', cn: '总经理在吗？', reply: false }, { speaker: '乙', jp: 'はい、あちら<span class="hl">に</span> いらっしゃい<span class="hl">ます</span>。', cn: '是的，在那边。', reply: true }]
    ],
    appTitle: '应用课文 · 忘年会',
    appTurns: [
      { speaker: '小野', jp: '李さん、忘年会<span class="hl">に</span> 来<span class="hl">ます</span><span class="hl-q">か</span>。', cn: '小李来忘年会吗？', reply: false },
      { speaker: '李', jp: 'はい、参加<span class="hl">します</span>。', cn: '是的，参加。', reply: true },
      { speaker: '小野', jp: 'では、6時<span class="hl-part">に</span> お待ち<span class="hl">して</span> い<span class="hl">ます</span>。', cn: '那么，6点等您。', reply: false },
      { speaker: '李', jp: 'わかり<span class="hl">ました</span>。', cn: '明白了。', reply: true }
    ],
    vocab: {
      circle1: [
        { jp: '忘年会', kana: 'ぼうねんかい', pos: '名', cn: '忘年会' },
        { jp: '新年会', kana: 'しんねんかい', pos: '名', cn: '新年会' },
        { jp: 'いらっしゃる', kana: 'いらっしゃる', pos: '动', cn: '在/来/去（尊）' },
        { jp: '召し上がる', kana: 'めしあがる', pos: '动', cn: '吃/喝（尊）' },
        { jp: '参る', kana: 'まいる', pos: '动', cn: '来/去（谦）' },
        { jp: '申す', kana: 'もうす', pos: '动', cn: '说（谦）' },
        { jp: '社長', kana: 'しゃちょう', pos: '名', cn: '总经理' },
        { jp: '参加', kana: 'さんか', pos: '名', cn: '参加' },
        { jp: '来年', kana: 'らいねん', pos: '名', cn: '明年' },
        { jp: '乾杯', kana: 'かんぱい', pos: '名', cn: '干杯' }
      ],
      circle2: [
        { jp: 'お祝い', kana: 'おいわい', pos: '名', cn: '祝贺' },
        { jp: 'スピーチ', kana: 'スピーチ', pos: '名', cn: '演讲' },
        { jp: 'お世話', kana: 'おせわ', pos: '名', cn: '关照' },
        { jp: 'お疲れ様', kana: 'おつかれさま', pos: '—', cn: '辛苦了' },
        { jp: 'ごちそう', kana: 'ごちそう', pos: '名', cn: '款待' }
      ],
      circle3: [
        { jp: '宴会', kana: 'えんかい', pos: '名', cn: '宴会' },
        { jp: '居酒屋', kana: 'いざかや', pos: '名', cn: '小酒馆' },
        { jp: '二次会', kana: 'にじかい', pos: '名', cn: '第二轮聚会' },
        { jp: '景気', kana: 'けいき', pos: '名', cn: '经济' },
        { jp: '成功', kana: 'せいこう', pos: '名', cn: '成功' }
      ]
    },
    homework: {
      choice: [
        { id: 'c1', source: '练习A-1', q: '社長は もう いらっしゃい（＿＿＿） か。', options: ['ました', 'ます', 'ません', 'ましょう'], answer: 0, explain: '尊他过去' },
        { id: 'c2', source: '练习A-2', q: 'どうぞ お召し上がり（＿＿＿）。', options: ['ください', 'ます', 'ました', 'ましょう'], answer: 0, explain: '敬语请求' },
        { id: 'c3', source: '练习A-3', q: '「いらっしゃる」表示？', options: ['在/来/去（尊他）', '来/去（自谦）', '吃（尊）', '说'], answer: 0, explain: '尊他' },
        { id: 'c4', source: '练习A-4', q: 'わたくしが 参り（＿＿＿）。', options: ['ます', 'ました', 'ません', 'ましょう'], answer: 0, explain: '自谦' },
        { id: 'c5', source: '练习A-5', q: '忘年会（＿＿＿） 参加します。', options: ['に', 'を', 'が', 'で'], answer: 0, explain: 'に参加' },
        { id: 'c6', source: '练习A-6', q: 'ぼうねんかい', options: ['忘年会', '新年会', '宴会', '干杯'], answer: 0, explain: '词汇' },
        { id: 'c7', source: '练习B-1', q: '来年（＿＿＿） よろしく お願いします。', options: ['も', 'は', 'が', 'を'], answer: 0, explain: '也…' },
        { id: 'c8', source: '练习B-2', q: 'お世話（＿＿＿） なりました。', options: ['に', 'を', 'が', 'で'], answer: 0, explain: 'お世話になる' }
      ],
      fill: [
        { id: 'f1', source: '练习A-1', q: '忘年会（　） 参加（　）。', answers: ['に', 'します'], explain: '参加' },
        { id: 'f2', source: '练习A-2', q: '社長（　） もう いらっしゃい（　） か。', answers: ['は', 'ました'], explain: '尊他' },
        { id: 'f3', source: '练习A-3', q: 'どうぞ お召し上がり（　）。', answers: ['ください'], explain: '请用' },
        { id: 'f4', source: '练习A-4', q: '来年（　） よろしく お願い（　）。', answers: ['も', 'します'], explain: 'も' },
        { id: 'f5', source: '练习A-5', q: '6時（　） お待ち（　） い（　）。', answers: ['に', 'して', 'ます'], explain: 'お待ちして' },
        { id: 'f6', source: '练习B-1', q: 'わたくし（　） 参り（　）。', answers: ['が', 'ます'], explain: '自谦' }
      ],
      translate: [
        { id: 't1', source: '练习B-1', q: '参加忘年会。', answers: ['忘年会に参加します', '忘年会に 参加 します'], explain: '参加' },
        { id: 't2', source: '练习B-2', q: '总经理已经来了吗？', answers: ['社長はもういらっしゃいましたか', '社長は もう いらっしゃいましたか'], explain: 'いらっしゃる' },
        { id: 't3', source: '练习B-3', q: '请吃。', answers: ['どうぞお召し上がりください', 'どうぞ お召し上がり ください'], explain: '敬语' },
        { id: 't4', source: '练习B-4', q: '明年也请多关照。', answers: ['来年もよろしくお願いします', '来年も よろしく お願い します'], explain: '来年も' }
      ],
      dialogue: [
        { id: 'd1', source: '会话-1', q: 'A：忘年会に 来ますか。\\nB：（　　　　　　　）', answers: ['はい、参加します', 'はい、行きます'], explain: '参加' },
        { id: 'd2', source: '会话-2', q: 'A：社長は いらっしゃいますか。\\nB：（　　　　　　　）', answers: ['はい、あちらに いらっしゃいます', 'いいえ、まだ です'], explain: '尊他' },
        { id: 'd3', source: '会话-3', q: 'A：来年も よろしく お願いします。\\nB：（　　　　　　　）', answers: ['こちらこそ よろしく お願いします', 'はい、こちらこそ'], explain: '回敬' }
      ]
    },
    quiz: [
      { question: 'いらっしゃる', options: ['在/来/去（尊他）', '来/去（自谦）', '吃', '说'], answer: 0, qtype: 'word' },
      { question: '召し上がる', options: ['吃/喝（尊他）', '做', '来', '说'], answer: 0, qtype: 'word' },
      { question: '参る', options: ['来/去（自谦）', '在（尊他）', '吃', '请'], answer: 0, qtype: 'word' },
      { question: 'ぼうねんかい', options: ['忘年会', '新年会', '宴会', '干杯'], answer: 0, qtype: 'word' },
      { question: '忘年会に 参加します', options: ['参加忘年会', '举办忘年会', '不参加', '请参加'], answer: 0 },
      { question: 'お待ちしています', options: ['等您', '请您等', '不等', '等了'], answer: 0 },
      { question: 'らいねん', options: ['明年', '去年', '今年', '后年'], answer: 0, qtype: 'word' },
      { question: 'かんぱい', options: ['干杯', '祝贺', '辛苦', '关照'], answer: 0, qtype: 'word' }
    ]
  },
  {
    num: 20,
    id: 'lesson20',
    titleJp: '健康',
    titleCn: '健康',
    pages: { grammar: 65, text: 66, vocab: 67 },
    keyChips: ['复合句', '<span class="hl-part">ば</span>条件', 'ので/から', '健康'],
    grammarTip: '第20课学习<strong>复合句</strong>和<strong>ば条件</strong>（假定条件），以及原因表达「ので/から」。',
    rules: [
      { num: '①', title: 'ば 条件（复习强化）', body: '如果…就…。', featured: true, examples: [{ jp: '早く 寝れ<span class="hl-part">ば</span>、元気<span class="hl">に</span> なり<span class="hl">ます</span>。', cn: '早睡就精神。' }] },
      { num: '②', title: 'ので／から 原因', body: 'ので（客观原因）；から（主观原因）。', featured: true, examples: [{ jp: '風邪<span class="hl-part">を</span> ひいた<span class="hl-part">ので</span>、会社<span class="hl-part">を</span> 休み<span class="hl">ました</span>。', cn: '因为感冒了所以请假。' }] },
      { num: '③', title: '健康相关表达', body: '気をつける、体調、病院。', featured: false, examples: [{ jp: '健康<span class="hl-part">に</span> 気<span class="hl-part">を</span> つけ<span class="hl">て</span> ください。', cn: '请注意健康。' }] }
    ],
    basicText: [
      { jp: '風邪<span class="hl-part">を</span> ひいた<span class="hl-part">ので</span>、会社<span class="hl-part">を</span> 休み<span class="hl">ました</span>。', cn: '因为感冒请假了。' },
      { jp: '早く 寝れ<span class="hl-part">ば</span>、元気<span class="hl">に</span> なり<span class="hl">ます</span>。', cn: '早睡就精神。' },
      { jp: '毎日 運動<span class="hl">すれば</span>、健康<span class="hl">に</span> なり<span class="hl">ます</span>。', cn: '每天运动就健康。' },
      { jp: '体調<span class="hl">が</span> 悪<span class="hl">い</span><span class="hl">です</span>。', cn: '身体状况不好。' }
    ],
    dialoguePairs: [
      [{ speaker: '甲', jp: '体調<span class="hl">は</span> どう<span class="hl">です</span><span class="hl-q">か</span>。', cn: '身体状况怎么样？', reply: false }, { speaker: '乙', jp: '風邪<span class="hl-part">を</span> ひき<span class="hl">ました</span>。', cn: '感冒了。', reply: true }]
    ],
    appTitle: '应用课文 · 健康相談',
    appTurns: [
      { speaker: '李', jp: '体調<span class="hl">が</span> 悪<span class="hl">い</span><span class="hl">んです</span><span class="hl-q">が</span>…', cn: '身体状况不好…', reply: false },
      { speaker: '小野', jp: '病院<span class="hl-part">へ</span> 行き<span class="hl">ました</span><span class="hl-q">か</span>。', cn: '去医院了吗？', reply: true },
      { speaker: '李', jp: 'はい、行き<span class="hl">ました</span>。', cn: '是的，去了。', reply: false },
      { speaker: '小野', jp: 'お大事<span class="hl">に</span>。', cn: '多保重。', reply: true }
    ],
    vocab: {
      circle1: [
        { jp: '健康', kana: 'けんこう', pos: '名', cn: '健康' },
        { jp: '体調', kana: 'たいちょう', pos: '名', cn: '身体状况' },
        { jp: '風邪', kana: 'かぜ', pos: '名', cn: '感冒' },
        { jp: '熱', kana: 'ねつ', pos: '名', cn: '发烧' },
        { jp: '病院', kana: 'びょういん', pos: '名', cn: '医院' },
        { jp: '薬', kana: 'くすり', pos: '名', cn: '药' },
        { jp: '運動', kana: 'うんどう', pos: '名', cn: '运动' },
        { jp: '気をつける', kana: 'きをつける', pos: '—', cn: '注意' },
        { jp: 'お大事に', kana: 'おだいじに', pos: '—', cn: '多保重' },
        { jp: '休む', kana: 'やすむ', pos: '动', cn: '休息，请假' }
      ],
      circle2: [
        { jp: '咳', kana: 'せき', pos: '名', cn: '咳嗽' },
        { jp: '頭痛', kana: 'ずつう', pos: '名', cn: '头痛' },
        { jp: '腹痛', kana: 'ふくつう', pos: '名', cn: '腹痛' },
        { jp: '診察', kana: 'しんさつ', pos: '名', cn: '诊察' },
        { jp: '注射', kana: 'ちゅうしゃ', pos: '名', cn: '注射' }
      ],
      circle3: [
        { jp: '保険', kana: 'ほけん', pos: '名', cn: '保险' },
        { jp: '健康保険', kana: 'けんこうほけん', pos: '名', cn: '健康保险' },
        { jp: '生活習慣', kana: 'せいかつしゅうかん', pos: '名', cn: '生活习惯' },
        { jp: 'ダイエット', kana: 'ダイエット', pos: '名', cn: '减肥' },
        { jp: '禁煙', kana: 'きんえん', pos: '名', cn: '禁烟' }
      ]
    },
    homework: {
      choice: [
        { id: 'c1', source: '练习A-1', q: '風邪を ひいた（＿＿＿）、会社を 休みました。', options: ['ので', 'ば', 'と', 'たら'], answer: 0, explain: '原因ので' },
        { id: 'c2', source: '练习A-2', q: '早く 寝れ（＿＿＿）、元気に なります。', options: ['ば', 'と', 'たら', 'ので'], answer: 0, explain: 'ば条件' },
        { id: 'c3', source: '练习A-3', q: '体調（＿＿＿） 悪い です。', options: ['が', 'は', 'を', 'に'], answer: 0, explain: '体調が' },
        { id: 'c4', source: '练习A-4', q: '健康（＿＿＿） 気を つけて ください。', options: ['に', 'を', 'が', 'で'], answer: 0, explain: 'に気をつける' },
        { id: 'c5', source: '练习A-5', q: '毎日 運動すれ（＿＿＿）、健康に なります。', options: ['ば', 'と', 'たら', 'ので'], answer: 0, explain: 'ば' },
        { id: 'c6', source: '练习A-6', q: 'たいちょう', options: ['身体状况', '健康', '感冒', '医院'], answer: 0, explain: '词汇' },
        { id: 'c7', source: '练习B-1', q: '風邪（＿＿＿） ひきました。', options: ['を', 'が', 'に', 'で'], answer: 0, explain: '風邪をひく' },
        { id: 'c8', source: '练习B-2', q: 'おだいじに', options: ['多保重', '辛苦了', '请', '谢谢'], answer: 0, explain: '寒暄' }
      ],
      fill: [
        { id: 'f1', source: '练习A-1', q: '風邪（　） ひいた（　）、会社（　） 休み（　）。', answers: ['を', 'ので', 'を', 'ました'], explain: '原因' },
        { id: 'f2', source: '练习A-2', q: '早く 寝れ（　）、元気（　） なり（　）。', answers: ['ば', 'に', 'ます'], explain: 'ば' },
        { id: 'f3', source: '练习A-3', q: '体調（　） 悪（　） んです（　）。', answers: ['が', 'い', 'が'], explain: '状况' },
        { id: 'f4', source: '练习A-4', q: '健康（　） 気（　） つけ（　） ください。', answers: ['に', 'を', 'て'], explain: '注意' },
        { id: 'f5', source: '练习A-5', q: '病院（　） 行き（　） か。', answers: ['へ', 'ました'], explain: '过去' },
        { id: 'f6', source: '练习B-1', q: 'お大事（　）。', answers: ['に'], explain: 'お大事に' }
      ],
      translate: [
        { id: 't1', source: '练习B-1', q: '因为感冒请假了。', answers: ['風邪をひいたので会社を休みました', '風邪を ひいたので 会社を 休みました'], explain: 'ので' },
        { id: 't2', source: '练习B-2', q: '早睡就精神。', answers: ['早く寝れば元気になります', '早く 寝れば 元気に なります'], explain: 'ば' },
        { id: 't3', source: '练习B-3', q: '请注意健康。', answers: ['健康に気をつけてください', '健康に 気を つけて ください'], explain: '気をつける' },
        { id: 't4', source: '练习B-4', q: '多保重。', answers: ['お大事に', 'お大事に。'], explain: '寒暄' }
      ],
      dialogue: [
        { id: 'd1', source: '会话-1', q: 'A：体調は どうですか。\\nB：（　　　　　　　）', answers: ['風邪を ひきました', '体調が 悪いです'], explain: '状况' },
        { id: 'd2', source: '会话-2', q: 'A：病院へ 行きましたか。\\nB：（　　　　　　　）', answers: ['はい、行きました', 'いいえ、まだ です'], explain: '就医' },
        { id: 'd3', source: '会话-3', q: 'A：お大事に。\\nB：（　　　　　　　）', answers: ['ありがとう ございます', 'はい、ありがとう'], explain: '回应' }
      ]
    },
    quiz: [
      { question: '風邪を ひいたので', options: ['因为感冒了', '如果感冒', '虽然感冒', '感冒后'], answer: 0 },
      { question: '早く 寝れば', options: ['如果早睡', '因为早睡', '虽然早睡', '早睡后'], answer: 0 },
      { question: 'けんこう', options: ['健康', '医院', '感冒', '运动'], answer: 0, qtype: 'word' },
      { question: '体調が 悪い', options: ['身体状况不好', '身体健康', '去医院', '运动'], answer: 0 },
      { question: '健康に 気をつけて', options: ['请注意健康', '健康了', '不健康', '请病'], answer: 0 },
      { question: 'お大事に', options: ['多保重', '辛苦了', '干杯', '请'], answer: 0 },
      { question: 'ので vs から', options: ['ので较客观/から较主观', '完全相同', 'ので表条件', 'から表能力'], answer: 0 },
      { question: 'かぜ', options: ['感冒', '发烧', '咳嗽', '头痛'], answer: 0, qtype: 'word' }
    ]
  },
  {
    num: 21,
    id: 'lesson21',
    titleJp: '意見',
    titleCn: '意见',
    pages: { grammar: 69, text: 70, vocab: 71 },
    keyChips: ['引用<span class="hl-part">と</span>', '～<span class="hl">と</span>思います', '～<span class="hl-part">なら</span>', '意見'],
    grammarTip: '第21课学习<strong>引用と</strong>（思う/言う/聞く等）和<strong>なら条件</strong>（就…/如果是…）。',
    rules: [
      { num: '①', title: 'と 引用', body: '引用内容+と+思う/言う/聞く等。', featured: true, examples: [{ jp: '日本語<span class="hl">は</span> 難しい<span class="hl-part">と</span> 思い<span class="hl">ます</span>。', cn: '我觉得日语难。' }, { jp: '李さん<span class="hl">が</span> 来る<span class="hl-part">と</span> 言い<span class="hl">ました</span>。', cn: '小李说来。' }] },
      { num: '②', title: 'なら 条件', body: '表示就…/如果是…。', featured: true, examples: [{ jp: '時間<span class="hl">が</span> あっ<span class="hl">たら</span>、映画<span class="hl-part">を</span> 見<span class="hl">に</span> 行き<span class="hl">ましょう</span>。', cn: '有时间就去看电影吧。' }, { jp: '李さん<span class="hl-part">なら</span>、わかる<span class="hl">でしょう</span>。', cn: '如果是小李的话，应该明白吧。' }] },
      { num: '③', title: '意见表达', body: '～と思います、～のではないでしょうか。', featured: false, examples: [{ jp: 'そう<span class="hl-part">だ</span><span class="hl-part">と</span> 思い<span class="hl">ます</span>。', cn: '我觉得是这样。' }] }
    ],
    basicText: [
      { jp: '日本語<span class="hl">は</span> 難しい<span class="hl-part">と</span> 思い<span class="hl">ます</span>。', cn: '我觉得日语难。' },
      { jp: '李さん<span class="hl">が</span> 来る<span class="hl-part">と</span> 言い<span class="hl">ました</span>。', cn: '小李说来。' },
      { jp: '李さん<span class="hl-part">なら</span>、わかる<span class="hl">でしょう</span>。', cn: '如果是小李的话，应该明白吧。' },
      { jp: 'その 意見<span class="hl">に</span> 賛成<span class="hl">です</span>。', cn: '赞成那个意见。' }
    ],
    dialoguePairs: [
      [{ speaker: '甲', jp: 'この 案<span class="hl">について</span>、どう<span class="hl">思い</span><span class="hl">ます</span><span class="hl-q">か</span>。', cn: '关于这个方案，怎么想？', reply: false }, { speaker: '乙', jp: 'いい<span class="hl-part">と</span> 思い<span class="hl">ます</span>。', cn: '我觉得好。', reply: true }]
    ],
    appTitle: '应用课文 · 会議で',
    appTurns: [
      { speaker: '小野', jp: 'この 案<span class="hl">は</span> どう<span class="hl">です</span><span class="hl-q">か</span>。', cn: '这个方案怎么样？', reply: false },
      { speaker: '李', jp: 'いい<span class="hl-part">と</span> 思い<span class="hl">ます</span>。', cn: '我觉得好。', reply: true },
      { speaker: '小野', jp: '李さん<span class="hl-part">なら</span>、詳しく 説明<span class="hl">できます</span><span class="hl-q">ね</span>。', cn: '如果是小李的话，能详细说明吧。', reply: false },
      { speaker: '李', jp: 'はい、説明<span class="hl">します</span>。', cn: '好的，我说明。', reply: true }
    ],
    vocab: {
      circle1: [
        { jp: '意見', kana: 'いけん', pos: '名', cn: '意见' },
        { jp: '思います', kana: 'おもいます', pos: '动', cn: '想，认为' },
        { jp: '言います', kana: 'いいます', pos: '动', cn: '说' },
        { jp: '聞きます', kana: 'ききます', pos: '动', cn: '听，问' },
        { jp: '賛成', kana: 'さんせい', pos: '名', cn: '赞成' },
        { jp: '反対', kana: 'はんたい', pos: '名', cn: '反对' },
        { jp: '案', kana: 'あん', pos: '名', cn: '方案' },
        { jp: 'について', kana: 'について', pos: '—', cn: '关于' },
        { jp: '詳しい', kana: 'くわしい', pos: 'い形', cn: '详细' },
        { jp: '説明', kana: 'せつめい', pos: '名', cn: '说明' }
      ],
      circle2: [
        { jp: '会議', kana: 'かいぎ', pos: '名', cn: '会议' },
        { jp: '提案', kana: 'ていあん', pos: '名', cn: '提案' },
        { jp: '討論', kana: 'とうろん', pos: '名', cn: '讨论' },
        { jp: '結論', kana: 'けつろん', pos: '名', cn: '结论' },
        { jp: '確か', kana: 'たしか', pos: 'な形', cn: '确实，大概' }
      ],
      circle3: [
        { jp: '意見交換', kana: 'いけんこうかん', pos: '名', cn: '交换意见' },
        { jp: '投票', kana: 'とうひょう', pos: '名', cn: '投票' },
        { jp: '多数決', kana: 'たすうけつ', pos: '名', cn: '多数表决' },
        { jp: '承認', kana: 'しょうにん', pos: '名', cn: '批准' },
        { jp: '却下', kana: 'きゃっか', pos: '名', cn: '驳回' }
      ]
    },
    homework: {
      choice: [
        { id: 'c1', source: '练习A-1', q: '日本語は 難しい（＿＿＿） 思います。', options: ['と', 'が', 'を', 'に'], answer: 0, explain: '引用と' },
        { id: 'c2', source: '练习A-2', q: '李さんが 来る（＿＿＿） 言いました。', options: ['と', 'が', 'を', 'に'], answer: 0, explain: 'と言う' },
        { id: 'c3', source: '练习A-3', q: '李さん（＿＿＿）、わかる でしょう。', options: ['なら', 'と', 'が', 'を'], answer: 0, explain: 'なら条件' },
        { id: 'c4', source: '练习A-4', q: 'いい（＿＿＿） 思います。', options: ['と', 'が', 'を', 'に'], answer: 0, explain: 'と思う' },
        { id: 'c5', source: '练习A-5', q: 'その 意見（＿＿＿） 賛成 です。', options: ['に', 'を', 'が', 'で'], answer: 0, explain: 'に賛成' },
        { id: 'c6', source: '练习A-6', q: 'いけん', options: ['意见', '说明', '会议', '方案'], answer: 0, explain: '词汇' },
        { id: 'c7', source: '练习B-1', q: 'この 案（＿＿＿）、どう 思いますか。', options: ['について', 'に', 'を', 'が'], answer: 0, explain: '关于' },
        { id: 'c8', source: '练习B-2', q: 'さんせい', options: ['赞成', '反对', '意见', '说明'], answer: 0, explain: '词汇' }
      ],
      fill: [
        { id: 'f1', source: '练习A-1', q: '日本語（　） 難しい（　） 思い（　）。', answers: ['は', 'と', 'ます'], explain: 'と思う' },
        { id: 'f2', source: '练习A-2', q: '李さん（　） 来る（　） 言い（　）。', answers: ['が', 'と', 'ました'], explain: 'と言う' },
        { id: 'f3', source: '练习A-3', q: '李さん（　）、わかる（　）。', answers: ['なら', 'でしょう'], explain: 'なら' },
        { id: 'f4', source: '练习A-4', q: 'いい（　） 思い（　）。', answers: ['と', 'ます'], explain: '意见' },
        { id: 'f5', source: '练习A-5', q: 'その 意見（　） 賛成（　）。', answers: ['に', 'です'], explain: '賛成' },
        { id: 'f6', source: '练习B-1', q: 'この 案（　） どう 思い（　） か。', answers: ['について', 'ます'], explain: 'について' }
      ],
      translate: [
        { id: 't1', source: '练习B-1', q: '我觉得日语难。', answers: ['日本語は難しいと思います', '日本語は 難しいと 思います'], explain: 'と思う' },
        { id: 't2', source: '练习B-2', q: '小李说来。', answers: ['李さんが来ると言いました', '李さんが 来ると 言いました'], explain: 'と言う' },
        { id: 't3', source: '练习B-3', q: '如果是小李的话，应该明白吧。', answers: ['李さんなら、わかるでしょう', '李さんなら、わかる でしょう'], explain: 'なら' },
        { id: 't4', source: '练习B-4', q: '赞成那个意见。', answers: ['その意見に賛成です', 'その 意見に 賛成 です'], explain: '賛成' }
      ],
      dialogue: [
        { id: 'd1', source: '会话-1', q: 'A：この 案は どう 思いますか。\\nB：（　　　　　　　）', answers: ['いいと 思います', '反対です'], explain: '意见' },
        { id: 'd2', source: '会话-2', q: 'A：李さんなら、わかる でしょう。\\nB：（　　　　　　　）', answers: ['はい、わかります', 'はい、説明 します'], explain: 'なら' },
        { id: 'd3', source: '会话-3', q: 'A：その 意見に 賛成ですか。\\nB：（　　　　　　　）', answers: ['はい、賛成です', 'いいえ、反対です'], explain: '賛成/反対' }
      ]
    },
    quiz: [
      { question: '～と 思います', options: ['觉得…/认为…', '说…', '听…', '请…'], answer: 0 },
      { question: '～と 言いました', options: ['说了…', '觉得…', '听了…', '做了…'], answer: 0 },
      { question: '李さんなら', options: ['如果是小李的话', '和小李一起', '小李说', '小李觉得'], answer: 0 },
      { question: 'いけん', options: ['意见', '说明', '会议', '赞成'], answer: 0, qtype: 'word' },
      { question: 'さんせい', options: ['赞成', '反对', '讨论', '投票'], answer: 0, qtype: 'word' },
      { question: 'はんたい', options: ['反对', '赞成', '意见', '结论'], answer: 0, qtype: 'word' },
      { question: 'について', options: ['关于', '因为', '如果', '虽然'], answer: 0, qtype: 'word' },
      { question: '日本語は 難しいと 思います', options: ['我觉得日语难', '日语说难', '日语难吗', '请说日语'], answer: 0 }
    ]
  },
  {
    num: 22,
    id: 'lesson22',
    titleJp: '転勤',
    titleCn: '调动工作',
    pages: { grammar: 73, text: 72, vocab: 74 },
    keyChips: ['受身（被动）', '～<span class="hl">られます</span>', '転勤', '報告'],
    grammarTip: '第22课强化<strong>被动形</strong>，包括直接被动、间接被动（受害）等用法。',
    rules: [
      { num: '①', title: '被动形（复习强化）', body: '表示被做或遭受影响。', featured: true, examples: [{ jp: '李さん<span class="hl">は</span> 北京<span class="hl-part">へ</span> 転勤<span class="hl">さ</span><span class="hl">れ</span><span class="hl">ました</span>。', cn: '小李被调往北京了。' }] },
      { num: '②', title: '使役被动', body: '被迫做某事：させられる。', featured: false, examples: [{ jp: '残業<span class="hl">さ</span><span class="hl">せ</span><span class="hl">られ</span><span class="hl">ました</span>。', cn: '被迫加班了。' }] },
      { num: '③', title: '転勤相关', body: '転勤する、部署、配属。', featured: false, examples: [{ jp: '来月 転勤<span class="hl">します</span>。', cn: '下个月调动。' }] }
    ],
    basicText: [
      { jp: '李さん<span class="hl">は</span> 北京<span class="hl-part">へ</span> 転勤<span class="hl">さ</span><span class="hl">れ</span><span class="hl">ました</span>。', cn: '小李被调往北京了。' },
      { jp: '来月 上海<span class="hl-part">へ</span> 転勤<span class="hl">します</span>。', cn: '下个月调往上海。' },
      { jp: '会社<span class="hl">から</span> 命令<span class="hl">さ</span><span class="hl">れ</span><span class="hl">ました</span>。', cn: '被公司命令了。' }
    ],
    dialoguePairs: [
      [{ speaker: '甲', jp: '転勤<span class="hl">の</span> こと、聞き<span class="hl">ました</span><span class="hl-q">か</span>。', cn: '调动的事听说了吗？', reply: false }, { speaker: '乙', jp: 'はい、李さん<span class="hl">が</span> 北京<span class="hl-part">へ</span> 転勤<span class="hl">さ</span><span class="hl">れ</span><span class="hl">ます</span>。', cn: '是的，小李被调往北京。', reply: true }]
    ],
    appTitle: '应用课文 · 転勤の挨拶',
    appTurns: [
      { speaker: '小野', jp: '李さん、転勤<span class="hl">の</span> こと、聞き<span class="hl">ました</span>。', cn: '小李，调动的事听说了。', reply: false },
      { speaker: '李', jp: 'はい、来月 北京<span class="hl-part">へ</span> 転勤<span class="hl">します</span>。', cn: '是的，下个月调往北京。', reply: true },
      { speaker: '小野', jp: '寂しく なり<span class="hl">ます</span><span class="hl-q">ね</span>。', cn: '会寂寞啊。', reply: false },
      { speaker: '李', jp: 'こちらこそ、お世話<span class="hl">に</span> なり<span class="hl">ました</span>。', cn: '我才要感谢您一直以来的关照。', reply: true }
    ],
    vocab: {
      circle1: [
        { jp: '転勤', kana: 'てんきん', pos: '名', cn: '调动工作' },
        { jp: '転勤します', kana: 'てんきんします', pos: '—', cn: '调动' },
        { jp: '転勤されました', kana: 'てんきんされました', pos: '—', cn: '被调动' },
        { jp: '部署', kana: 'ぶしょ', pos: '名', cn: '部门' },
        { jp: '配属', kana: 'はいぞく', pos: '名', cn: '分配，配属' },
        { jp: '命令', kana: 'めいれい', pos: '名', cn: '命令' },
        { jp: '報告', kana: 'ほうこく', pos: '名', cn: '报告' },
        { jp: '残業', kana: 'ざんぎょう', pos: '名', cn: '加班' },
        { jp: '寂しい', kana: 'さびしい', pos: 'い形', cn: '寂寞' },
        { jp: 'お世話', kana: 'おせわ', pos: '名', cn: '关照' }
      ],
      circle2: [
        { jp: '挨拶', kana: 'あいさつ', pos: '名', cn: '问候，告别' },
        { jp: '引越し', kana: 'ひっこし', pos: '名', cn: '搬家' },
        { jp: '異動', kana: 'いどう', pos: '名', cn: '调动，变动' },
        { jp: '昇進', kana: 'しょうしん', pos: '名', cn: '晋升' },
        { jp: '降格', kana: 'こうかく', pos: '名', cn: '降级' }
      ],
      circle3: [
        { jp: '人事', kana: 'じんじ', pos: '名', cn: '人事' },
        { jp: '総務', kana: 'そうむ', pos: '名', cn: '总务' },
        { jp: '営業', kana: 'えいぎょう', pos: '名', cn: '营业' },
        { jp: '開発', kana: 'かいはつ', pos: '名', cn: '开发' },
        { jp: '本社', kana: 'ほんしゃ', pos: '名', cn: '总公司' }
      ]
    },
    homework: {
      choice: [
        { id: 'c1', source: '练习A-1', q: '李さんは 北京へ 転勤（＿＿＿）。', options: ['されました', 'しました', 'させました', 'られました'], answer: 0, explain: '被调动' },
        { id: 'c2', source: '练习A-2', q: '来月 上海へ 転勤（＿＿＿）。', options: ['します', 'されました', 'させます', 'られます'], answer: 0, explain: '主动调动' },
        { id: 'c3', source: '练习A-3', q: '残業（＿＿＿） られました。', options: ['さ', 'ら', 'せ', 'れ'], answer: 0, explain: '使役被动' },
        { id: 'c4', source: '练习A-4', q: 'てんきん', options: ['调动工作', '晋升', '搬家', '加班'], answer: 0, explain: '词汇' },
        { id: 'c5', source: '练习A-5', q: '会社（＿＿＿） 命令 されました。', options: ['から', 'に', 'を', 'で'], answer: 0, explain: 'から' },
        { id: 'c6', source: '练习A-6', q: 'お世話（＿＿＿） なりました。', options: ['に', 'を', 'が', 'で'], answer: 0, explain: 'お世話になる' },
        { id: 'c7', source: '练习B-1', q: '転勤（＿＿＿） こと、聞きましたか。', options: ['の', 'が', 'を', 'に'], answer: 0, explain: 'のこと' },
        { id: 'c8', source: '练习B-2', q: 'さびしい', options: ['寂寞', '高兴', '辛苦', '遗憾'], answer: 0, explain: '词汇' }
      ],
      fill: [
        { id: 'f1', source: '练习A-1', q: '李さん（　） 北京（　） 転勤（　）。', answers: ['は', 'へ', 'されました'], explain: '被动' },
        { id: 'f2', source: '练习A-2', q: '来月 上海（　） 転勤（　）。', answers: ['へ', 'します'], explain: '主动' },
        { id: 'f3', source: '练习A-3', q: '会社（　） 命令（　）。', answers: ['から', 'されました'], explain: 'から+被动' },
        { id: 'f4', source: '练习A-4', q: '転勤（　） こと、聞き（　） か。', answers: ['の', 'ました'], explain: 'のこと' },
        { id: 'f5', source: '练习A-5', q: 'お世話（　） なり（　）。', answers: ['に', 'ました'], explain: '感谢' },
        { id: 'f6', source: '练习B-1', q: '寂しく なり（　）。', answers: ['ます'], explain: 'なる' }
      ],
      translate: [
        { id: 't1', source: '练习B-1', q: '小李被调往北京了。', answers: ['李さんは北京へ転勤されました', '李さんは 北京へ 転勤 されました'], explain: '被动' },
        { id: 't2', source: '练习B-2', q: '下个月调往上海。', answers: ['来月上海へ転勤します', '来月 上海へ 転勤 します'], explain: '転勤' },
        { id: 't3', source: '练习B-3', q: '被公司命令了。', answers: ['会社から命令されました', '会社から 命令 されました'], explain: 'から+被动' },
        { id: 't4', source: '练习B-4', q: '会寂寞啊。', answers: ['寂しくなりますね', '寂しく なります ね'], explain: '寂しい' }
      ],
      dialogue: [
        { id: 'd1', source: '会话-1', q: 'A：転勤の こと、聞きましたか。\\nB：（　　　　　　　）', answers: ['はい、聞きました', 'はい、李さんが 北京へ 転勤 されます'], explain: '听说' },
        { id: 'd2', source: '会话-2', q: 'A：来月 どこへ 転勤 しますか。\\nB：（　　　　　　　）', answers: ['北京へ 転勤 します', '上海へ 転勤 します'], explain: '方向' },
        { id: 'd3', source: '会话-3', q: 'A：お世話に なりました。\\nB：（　　　　　　　）', answers: ['こちらこそ お世話に なりました', 'こちらこそ'], explain: '回敬' }
      ]
    },
    quiz: [
      { question: '転勤されました', options: ['被调动了', '调动了', '让调动', '不调动'], answer: 0 },
      { question: 'てんきん', options: ['调动工作', '晋升', '搬家', '报告'], answer: 0, qtype: 'word' },
      { question: '残業させられました', options: ['被迫加班', '加班了', '让加班', '不加班'], answer: 0 },
      { question: 'お世話に なりました', options: ['承蒙关照', '命令了', '调动了', '报告了'], answer: 0 },
      { question: 'ぶしょ', options: ['部门', '公司', '总公司', '人事'], answer: 0, qtype: 'word' },
      { question: '李さんは 北京へ 転勤 されます', options: ['小李被调往北京', '小李调往北京', '小李让北京调动', '小李不去北京'], answer: 0 },
      { question: 'さびしい', options: ['寂寞', '高兴', '忙', '遗憾'], answer: 0, qtype: 'word' },
      { question: '会社から 命令されました', options: ['被公司命令了', '命令公司', '公司命令', '不被命令'], answer: 0 }
    ]
  },
  {
    num: 23,
    id: 'lesson23',
    titleJp: '断る',
    titleCn: '拒绝',
    pages: { grammar: 76, text: 75, vocab: 77 },
    keyChips: ['<span class="hl">ても</span> いい', '意志/决意', '断る', '許可'],
    grammarTip: '第23课学习<strong>ても</strong>（即使/也）和<strong>意志表达</strong>，以及礼貌拒绝的方式。',
    rules: [
      { num: '①', title: 'ても', body: '表示即使…也…；てもいい（可以/许可）。', featured: true, examples: [{ jp: '雨<span class="hl">が</span> 降っ<span class="hl">ても</span>、行き<span class="hl">ます</span>。', cn: '即使下雨也去。' }, { jp: 'ここ<span class="hl-part">で</span> 食べ<span class="hl">ても いい</span><span class="hl">です</span><span class="hl-q">か</span>。', cn: '可以在这里吃吗？' }] },
      { num: '②', title: '意志/决意', body: '～（よ）うと思う、～つもりだ。', featured: true, examples: [{ jp: '来年 日本<span class="hl-part">へ</span> 行こう<span class="hl-part">と</span> 思っ<span class="hl">て</span> い<span class="hl">ます</span>。', cn: '打算明年去日本。' }] },
      { num: '③', title: '断る（拒绝）', body: 'すみませんが…、ちょっと…、都合が悪い。', featured: true, examples: [{ jp: 'すみません<span class="hl">が</span>、都合<span class="hl">が</span> 悪<span class="hl">い</span><span class="hl">んです</span>。', cn: '对不起，不太方便。' }] }
    ],
    basicText: [
      { jp: '雨<span class="hl">が</span> 降っ<span class="hl">ても</span>、行き<span class="hl">ます</span>。', cn: '即使下雨也去。' },
      { jp: 'ここ<span class="hl-part">で</span> 食べ<span class="hl">ても いい</span><span class="hl">です</span><span class="hl-q">か</span>。', cn: '可以在这里吃吗？' },
      { jp: 'すみません<span class="hl">が</span>、ちょっと 都合<span class="hl">が</span> 悪<span class="hl">い</span><span class="hl">んです</span>。', cn: '对不起，有点不方便。' },
      { jp: '来年 日本<span class="hl-part">へ</span> 行こう<span class="hl-part">と</span> 思っ<span class="hl">て</span> い<span class="hl">ます</span>。', cn: '打算明年去日本。' }
    ],
    dialoguePairs: [
      [{ speaker: '甲', jp: '今度 一緒<span class="hl-part">に</span> 食事<span class="hl">し</span><span class="hl">ましょう</span>。', cn: '下次一起吃饭吧。', reply: false }, { speaker: '乙', jp: 'すみません<span class="hl">が</span>、都合<span class="hl">が</span> 悪<span class="hl">い</span><span class="hl">んです</span>。', cn: '对不起，不太方便。', reply: true }]
    ],
    appTitle: '应用课文 · 断る',
    appTurns: [
      { speaker: '小野', jp: '今度 一緒<span class="hl-part">に</span> 映画<span class="hl-part">を</span> 見<span class="hl">に</span> 行き<span class="hl">ましょう</span>。', cn: '下次一起去看电影吧。', reply: false },
      { speaker: '李', jp: 'すみません<span class="hl">が</span>、その日<span class="hl">は</span> 都合<span class="hl">が</span> 悪<span class="hl">い</span><span class="hl">んです</span>。', cn: '对不起，那天不太方便。', reply: true },
      { speaker: '小野', jp: 'そう<span class="hl">です</span><span class="hl-q">か</span>。残念<span class="hl">です</span>。', cn: '是吗。很遗憾。', reply: false },
      { speaker: '李', jp: 'また 今度 お願い<span class="hl">します</span>。', cn: '下次再拜托了。', reply: true }
    ],
    vocab: {
      circle1: [
        { jp: '断る', kana: 'ことわる', pos: '动', cn: '拒绝' },
        { jp: 'ても', kana: 'ても', pos: '助', cn: '即使/也' },
        { jp: 'てもいい', kana: 'てもいい', pos: '—', cn: '可以/许可' },
        { jp: '都合', kana: 'つごう', pos: '名', cn: '情况，方便' },
        { jp: '都合が悪い', kana: 'つごうがわるい', pos: '—', cn: '不方便' },
        { jp: '残念', kana: 'ざんねん', pos: 'な形', cn: '遗憾' },
        { jp: 'つもり', kana: 'つもり', pos: '名', cn: '打算' },
        { jp: '思っています', kana: 'おもっています', pos: '—', cn: '打算/认为' },
        { jp: '許可', kana: 'きょか', pos: '名', cn: '许可' },
        { jp: '遠慮', kana: 'えんりょ', pos: '名', cn: '客气，谢绝' }
      ],
      circle2: [
        { jp: '遠慮なく', kana: 'えんりょなく', pos: '副', cn: '不要客气' },
        { jp: '構いません', kana: 'かまいません', pos: '—', cn: '没关系' },
        { jp: 'かまいません', kana: 'かまいません', pos: '—', cn: '不介意' },
        { jp: '大丈夫', kana: 'だいじょうぶ', pos: 'な形', cn: '没问题' },
        { jp: 'ちょっと', kana: 'ちょっと', pos: '副', cn: '有点（委婉拒绝）' }
      ],
      circle3: [
        { jp: '失礼', kana: 'しつれい', pos: '名', cn: '失礼' },
        { jp: '恐縮', kana: 'きょうしゅく', pos: '名', cn: '不好意思' },
        { jp: '申し訳ない', kana: 'もうしわけない', pos: 'い形', cn: '抱歉' },
        { jp: 'お断り', kana: 'おことわり', pos: '名', cn: '谢绝' },
        { jp: '予定', kana: 'よてい', pos: '名', cn: '预定' }
      ]
    },
    homework: {
      choice: [
        { id: 'c1', source: '练习A-1', q: '雨が 降っ（＿＿＿）、行きます。', options: ['ても', 'て', 'たら', 'と'], answer: 0, explain: '即使' },
        { id: 'c2', source: '练习A-2', q: 'ここで 食べ（＿＿＿） いい ですか。', options: ['ても', 'て', 'た', 'ない'], answer: 0, explain: '许可' },
        { id: 'c3', source: '练习A-3', q: 'すみません（＿＿＿）、都合が 悪い んです。', options: ['が', 'を', 'に', 'で'], answer: 0, explain: '转折が' },
        { id: 'c4', source: '练习A-4', q: '来年 日本へ 行こう（＿＿＿） 思っ て います。', options: ['と', 'が', 'を', 'に'], answer: 0, explain: 'と思う' },
        { id: 'c5', source: '练习A-5', q: 'ことわる', options: ['拒绝', '许可', '打算', '遗憾'], answer: 0, explain: '词汇' },
        { id: 'c6', source: '练习A-6', q: 'てもいい 表示？', options: ['可以/许可', '必须', '不必', '即使'], answer: 0, explain: '许可' },
        { id: 'c7', source: '练习B-1', q: '都合（＿＿＿） 悪い', options: ['が', 'は', 'を', 'に'], answer: 0, explain: '都合が' },
        { id: 'c8', source: '练习B-2', q: 'ざんねん', options: ['遗憾', '拒绝', '可以', '打算'], answer: 0, explain: '词汇' }
      ],
      fill: [
        { id: 'f1', source: '练习A-1', q: '雨（　） 降っ（　）、行き（　）。', answers: ['が', 'ても', 'ます'], explain: 'ても' },
        { id: 'f2', source: '练习A-2', q: 'ここ（　） 食べ（　） いい（　） か。', answers: ['で', 'ても', 'です'], explain: '许可' },
        { id: 'f3', source: '练习A-3', q: 'すみません（　）、都合（　） 悪（　） んです。', answers: ['が', 'が', 'い'], explain: '拒绝' },
        { id: 'f4', source: '练习A-4', q: '来年 日本（　） 行こう（　） 思っ（　） い（　）。', answers: ['へ', 'と', 'て', 'ます'], explain: '意志' },
        { id: 'f5', source: '练习A-5', q: 'また 今度 お願い（　）。', answers: ['します'], explain: '下次' },
        { id: 'f6', source: '练习B-1', q: 'そう（　） か。残念（　）。', answers: ['です', 'です'], explain: '应答' }
      ],
      translate: [
        { id: 't1', source: '练习B-1', q: '即使下雨也去。', answers: ['雨が降っても行きます', '雨が 降っても 行きます'], explain: 'ても' },
        { id: 't2', source: '练习B-2', q: '可以在这里吃吗？', answers: ['ここで食べてもいいですか', 'ここで 食べても いい ですか'], explain: '许可' },
        { id: 't3', source: '练习B-3', q: '对不起，不太方便。', answers: ['すみませんが、都合が悪いんです', 'すみませんが、都合が 悪い んです'], explain: '拒绝' },
        { id: 't4', source: '练习B-4', q: '打算明年去日本。', answers: ['来年日本へ行こうと思っています', '来年 日本へ 行こうと 思って います'], explain: '意志' }
      ],
      dialogue: [
        { id: 'd1', source: '会话-1', q: 'A：今度 一緒に 食事 しましょう。\\nB：（　　　　　　　）', answers: ['すみませんが、都合が 悪い んです', 'ちょっと 都合が 悪い んです'], explain: '拒绝' },
        { id: 'd2', source: '会话-2', q: 'A：ここで 食べても いい ですか。\\nB：（　　　　　　　）', answers: ['はい、いい です', 'すみません、だめ です'], explain: '许可' },
        { id: 'd3', source: '会话-3', q: 'A：その日は 都合が 悪い んです。\\nB：（　　　　　　　）', answers: ['そうですか。残念です', 'わかりました'], explain: '应答' }
      ]
    },
    quiz: [
      { question: '雨が 降っても 行きます', options: ['即使下雨也去', '如果下雨去', '因为下雨去', '下雨不去'], answer: 0 },
      { question: '食べても いい ですか', options: ['可以吃吗', '必须吃', '不吃', '即使吃'], answer: 0 },
      { question: '都合が 悪い んです', options: ['不太方便（拒绝）', '很方便', '必须去', '打算去'], answer: 0 },
      { question: '行こうと 思っ ています', options: ['打算去', '去了', '不去', '请去'], answer: 0 },
      { question: 'ても', options: ['即使/也', '因为', '如果', '虽然'], answer: 0, qtype: 'word' },
      { question: 'ことわる', options: ['拒绝', '许可', '打算', '吃'], answer: 0, qtype: 'word' },
      { question: 'ざんねん', options: ['遗憾', '拒绝', '可以', '必须'], answer: 0, qtype: 'word' },
      { question: 'すみませんが', options: ['对不起但是…（委婉）', '谢谢', '请', '是的'], answer: 0 }
    ]
  },
  {
    num: 24,
    id: 'lesson24',
    titleJp: '春節',
    titleCn: '春节',
    pages: { grammar: 79, text: 78, vocab: 80 },
    keyChips: ['综合复习', '春節', '文化', '初级上总结'],
    grammarTip: '第24课为<strong>综合复习</strong>，回顾初级上重点语法，以春节文化应用课文为载体。',
    rules: [
      { num: '①', title: '判断句・存在句', body: '名は名です；名に あります/います。', featured: true, examples: [{ jp: 'ここ<span class="hl">は</span> 中国<span class="hl">です</span>。', cn: '这里是中国。' }, { jp: '家族<span class="hl">が</span> 5<span class="hl-part">人</span> <span class="hl">います</span>。', cn: '有5口家人。' }] },
      { num: '②', title: '动词变位・て形・た形', body: 'ます/ません/ました；て形连接；た形过去。', featured: true, examples: [{ jp: '春節<span class="hl-part">に</span> 帰国<span class="hl">します</span>。', cn: '春节回国。' }, { jp: '餃子<span class="hl-part">を</span> 作っ<span class="hl">て</span> 食べ<span class="hl">ました</span>。', cn: '做了饺子吃。' }] },
      { num: '③', title: '形容词・比较・条件', body: 'い/な形；より～ほうが；と/たら/ば。', featured: true, examples: [{ jp: '春節<span class="hl">は</span> 一番 楽しい 祭り<span class="hl">です</span>。', cn: '春节是最快乐的节日。' }] },
      { num: '④', title: '可能・被动・敬语', body: '話せます；教えられます；いらっしゃる。', featured: false, examples: [{ jp: '中国語<span class="hl-part">が</span> 話せ<span class="hl">ます</span>。', cn: '会说中文。' }], fullWidth: true }
    ],
    basicText: [
      { jp: '春節<span class="hl">は</span> 中国<span class="hl">の</span> 伝統的<span class="hl">な</span> 祭り<span class="hl">です</span>。', cn: '春节是中国的传统节日。' },
      { jp: '春節<span class="hl-part">に</span> 家族<span class="hl-part">と</span> 一緒<span class="hl-part">に</span> 過ご<span class="hl">します</span>。', cn: '春节和家人一起过。' },
      { jp: '餃子<span class="hl-part">を</span> 作っ<span class="hl">て</span>、お正月<span class="hl-part">を</span> 迎え<span class="hl">ます</span>。', cn: '做饺子迎新年。' },
      { jp: '李さん<span class="hl">は</span> 春節<span class="hl-part">に</span> 中国<span class="hl-part">へ</span> 帰国<span class="hl">する</span><span class="hl">予定</span><span class="hl">です</span>。', cn: '小李计划春节回国。' }
    ],
    dialoguePairs: [
      [{ speaker: '甲', jp: '春節<span class="hl">は</span> 何<span class="hl-part">を</span> し<span class="hl">ます</span><span class="hl-q">か</span>。', cn: '春节做什么？', reply: false }, { speaker: '乙', jp: '家族<span class="hl-part">と</span> 一緒<span class="hl-part">に</span> 過ご<span class="hl">します</span>。', cn: '和家人一起过。', reply: true }],
      [{ speaker: '甲', jp: '中国<span class="hl-part">へ</span> 帰り<span class="hl">ます</span><span class="hl-q">か</span>。', cn: '回中国吗？', reply: false }, { speaker: '乙', jp: 'はい、帰る<span class="hl">予定</span><span class="hl">です</span>。', cn: '是的，计划回去。', reply: true }]
    ],
    appTitle: '应用课文 · 春節',
    appTurns: [
      { speaker: '小野', jp: '李さん、春節<span class="hl">は</span> 中国<span class="hl-part">へ</span> 帰り<span class="hl">ます</span><span class="hl-q">か</span>。', cn: '小李春节回中国吗？', reply: false },
      { speaker: '李', jp: 'はい、家族<span class="hl-part">に</span> 会い<span class="hl">に</span> 帰り<span class="hl">ます</span>。', cn: '是的，回去见家人。', reply: true },
      { speaker: '小野', jp: '春節<span class="hl">は</span> 何<span class="hl-part">を</span> し<span class="hl">ます</span><span class="hl-q">か</span>。', cn: '春节做什么？', reply: false },
      { speaker: '李', jp: '餃子<span class="hl-part">を</span> 作っ<span class="hl">たり</span>、お年玉<span class="hl-part">を</span> もらっ<span class="hl">たり</span> し<span class="hl">ます</span>。', cn: '做饺子、收压岁钱等。', reply: true },
      { speaker: '小野', jp: 'いい<span class="hl">です</span><span class="hl-q">ね</span>。良い お正月<span class="hl-part">を</span>！', cn: '真好啊。祝您新年好！', reply: false },
      { speaker: '李', jp: 'ありがとう ございます。', cn: '谢谢。', reply: true }
    ],
    vocab: {
      circle1: [
        { jp: '春節', kana: 'しゅんせつ', pos: '名', cn: '春节' },
        { jp: 'お正月', kana: 'おしょうがつ', pos: '名', cn: '新年' },
        { jp: '餃子', kana: 'ぎょうざ', pos: '名', cn: '饺子' },
        { jp: '家族', kana: 'かぞく', pos: '名', cn: '家人' },
        { jp: '帰国', kana: 'きこく', pos: '名', cn: '回国' },
        { jp: '祭り', kana: 'まつり', pos: '名', cn: '节日，祭祀' },
        { jp: '伝統的', kana: 'でんとうてき', pos: 'な形', cn: '传统的' },
        { jp: '過ごす', kana: 'すごす', pos: '动', cn: '度过' },
        { jp: '迎える', kana: 'むかえる', pos: '动', cn: '迎接' },
        { jp: 'お年玉', kana: 'おとしだま', pos: '名', cn: '压岁钱' }
      ],
      circle2: [
        { jp: '红包', kana: 'ホンバオ', pos: '名', cn: '红包' },
        { jp: '花火', kana: 'はなび', pos: '名', cn: '烟花' },
        { jp: '獅子舞', kana: 'ししまい', pos: '名', cn: '舞狮' },
        { jp: '春聯', kana: 'しゅんれん', pos: '名', cn: '春联' },
        { jp: '団円', kana: 'だんえん', pos: '名', cn: '团圆' },
        { jp: '祝う', kana: 'いわう', pos: '动', cn: '祝贺' }
      ],
      circle3: [
        { jp: '旧正月', kana: 'きゅうしょうがつ', pos: '名', cn: '农历新年' },
        { jp: '十二生肖', kana: 'じゅうにし', pos: '名', cn: '十二生肖' },
        { jp: '年越し', kana: 'としこし', pos: '名', cn: '跨年' },
        { jp: '除夜', kana: 'じょや', pos: '名', cn: '除夕' },
        { jp: '初詣', kana: 'はつもうで', pos: '名', cn: '新年参拜（日本）' }
      ]
    },
    homework: {
      choice: [
        { id: 'c1', source: '练习A-1', q: '春節（＿＿＿） 中国の 伝統的な 祭り です。', options: ['は', 'が', 'を', 'に'], answer: 0, explain: '主题は' },
        { id: 'c2', source: '练习A-2', q: '春節（＿＿＿） 家族と 一緒に 過ごします。', options: ['に', 'を', 'が', 'で'], answer: 0, explain: '时间に' },
        { id: 'c3', source: '练习A-3', q: '餃子（＿＿＿） 作って 食べました。', options: ['を', 'が', 'に', 'で'], answer: 0, explain: 'を' },
        { id: 'c4', source: '练习A-4', q: '中国（＿＿＿） 帰る 予定 です。', options: ['へ', 'に', 'を', 'で'], answer: 0, explain: '方向へ' },
        { id: 'c5', source: '练习A-5', q: 'しゅんせつ', options: ['春节', '新年', '饺子', '家人'], answer: 0, explain: '词汇' },
        { id: 'c6', source: '练习A-6', q: '家族（＿＿＿） 会いに 帰ります。', options: ['に', 'を', 'が', 'で'], answer: 0, explain: '会いに' },
        { id: 'c7', source: '练习B-1', q: '春節は 一番 楽しい 祭り（＿＿＿）。', options: ['です', 'ます', 'でした', 'ましょう'], answer: 0, explain: '判断句' },
        { id: 'c8', source: '练习B-2', q: 'ぎょうざ', options: ['饺子', '红包', '烟花', '春联'], answer: 0, explain: '词汇' }
      ],
      fill: [
        { id: 'f1', source: '练习A-1', q: '春節（　） 中国（　） 伝統的（　） 祭り（　）。', answers: ['は', 'の', 'な', 'です'], explain: '判断句' },
        { id: 'f2', source: '练习A-2', q: '春節（　） 家族（　） 一緒（　） 過ご（　）。', answers: ['に', 'と', 'に', 'します'], explain: 'に+と' },
        { id: 'f3', source: '练习A-3', q: '餃子（　） 作っ（　）、お正月（　） 迎え（　）。', answers: ['を', 'て', 'を', 'ます'], explain: 'て形' },
        { id: 'f4', source: '练习A-4', q: '李さん（　） 春節（　） 中国（　） 帰国（　） 予定（　）。', answers: ['は', 'に', 'へ', 'する', 'です'], explain: '综合' },
        { id: 'f5', source: '练习A-5', q: '家族（　） 会い（　） 帰り（　）。', answers: ['に', 'に', 'ます'], explain: '会いに' },
        { id: 'f6', source: '练习B-1', q: '良い お正月（　）！', answers: ['を'], explain: '祝福' }
      ],
      translate: [
        { id: 't1', source: '练习B-1', q: '春节是中国的传统节日。', answers: ['春節は中国の伝統的な祭りです', '春節は 中国の 伝統的な 祭り です'], explain: '判断句' },
        { id: 't2', source: '练习B-2', q: '春节和家人一起过。', answers: ['春節に家族と一緒に過ごします', '春節に 家族と 一緒に 過ごします'], explain: 'に+と' },
        { id: 't3', source: '练习B-3', q: '做了饺子吃。', answers: ['餃子を作って食べました', '餃子を 作って 食べました'], explain: 'て形' },
        { id: 't4', source: '练习B-4', q: '小李计划春节回国。', answers: ['李さんは春節に中国へ帰国する予定です', '李さんは 春節に 中国へ 帰国 する 予定 です'], explain: '予定' }
      ],
      dialogue: [
        { id: 'd1', source: '会话-1', q: 'A：春節は 中国へ 帰りますか。\\nB：（　　　　　　　）', answers: ['はい、帰ります', 'はい、家族に 会いに 帰ります'], explain: '回国' },
        { id: 'd2', source: '会话-2', q: 'A：春節は 何を しますか。\\nB：（　　　　　　　）', answers: ['家族と 一緒に 過ごします', '餃子を 作ったり します'], explain: '活动' },
        { id: 'd3', source: '会话-3', q: 'A：良い お正月を！\\nB：（　　　　　　　）', answers: ['ありがとう ございます', 'こちらこそ 良い お正月を'], explain: '祝福' }
      ]
    },
    quiz: [
      { question: '春節は 中国の 伝統的な 祭り です', options: ['春节是中国的传统节日', '春节去中国', '春节吃饺子', '春节是日本的'], answer: 0 },
      { question: 'しゅんせつ', options: ['春节', '新年', '饺子', '家人'], answer: 0, qtype: 'word' },
      { question: 'ぎょうざ', options: ['饺子', '红包', '烟花', '舞狮'], answer: 0, qtype: 'word' },
      { question: '春節に 家族と 一緒に 過ごします', options: ['春节和家人一起过', '春节去家人', '春节不做', '春节是家人'], answer: 0 },
      { question: 'おとしだま', options: ['压岁钱', '红包', '饺子', '春联'], answer: 0, qtype: 'word' },
      { question: '帰国する 予定 です', options: ['计划回国', '已经回国', '不回国', '请回国'], answer: 0 },
      { question: 'でんとうてき', options: ['传统的', '现代的', '快乐的', '安静的'], answer: 0, qtype: 'word' },
      { question: '初级上 判断句基本形', options: ['名は名です', '名を动词', '名に あります', '名が 好き'], answer: 0 }
    ]
  }
];
