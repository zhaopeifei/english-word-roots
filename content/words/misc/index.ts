import type { WordEntry } from '@/types/content';

export const MISC_WORDS: WordEntry[] = [
  {
    slug: 'authentic',
    lemma: 'authentic',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ɔːˈθen.tɪk/' }, us: { ipa: '/ɑːˈθen.t̬ɪk/' } },
    definition: { en: 'Of undisputed origin; genuine and real.', zh: '真正的；真实的；地道的' },
    examples: [
      { en: ['The museum confirmed the painting is authentic.'], zh: ['博物馆确认这幅画是真品。'] },
    ],
    rootBreakdown: [
      { surface: 'auth', type: 'root' },
      { surface: 'ent', type: 'connector' },
      { surface: 'ic', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'From Greek authentikos ("original, genuine") → truly what it claims to be.',
      zh: '源自希腊语 authentikos（原始的、真正的）→ 确实是其所声称的。',
    },
    relatedWords: ['authenticity', 'authenticate'],
  },
  {
    slug: 'boycott',
    lemma: 'boycott',
    partOfSpeech: ['v.', 'n.'],
    pronunciation: { uk: { ipa: '/ˈbɔɪ.kɒt/' }, us: { ipa: '/ˈbɔɪ.kɑːt/' } },
    definition: {
      en: 'To withdraw from commercial or social relations as a punishment or protest.',
      zh: '抵制；联合抵制',
    },
    examples: [
      {
        en: ['Consumers decided to boycott the company over ethical concerns.'],
        zh: ['消费者因道德问题决定抵制该公司。'],
      },
    ],
    rootBreakdown: [{ surface: 'boycott', type: 'other' }],
    morphologyNote: {
      en: 'Named after Captain Charles Boycott, an Irish land agent who was ostracized in 1880.',
      zh: '以1880年被孤立的爱尔兰地产代理人查尔斯·博伊科特命名。',
    },
    relatedWords: ['embargo', 'sanction'],
  },
  {
    slug: 'camouflage',
    lemma: 'camouflage',
    partOfSpeech: ['n.', 'v.'],
    pronunciation: { uk: { ipa: '/ˈkæm.ə.flɑːʒ/' }, us: { ipa: '/ˈkæm.ə.flɑːʒ/' } },
    definition: {
      en: 'The disguising of objects or people to blend with surroundings.',
      zh: '伪装；掩饰；迷彩',
    },
    examples: [
      {
        en: ['The chameleon uses camouflage to hide from predators.'],
        zh: ['变色龙利用伪装来躲避捕食者。'],
      },
    ],
    rootBreakdown: [
      { surface: 'camouf', type: 'root' },
      { surface: 'lage', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'From French camoufler ("to disguise") → the act of concealing by disguise.',
      zh: '源自法语 camoufler（伪装）→ 通过伪装隐藏的行为。',
    },
    relatedWords: ['disguise', 'masquerade', 'conceal'],
  },
  {
    slug: 'nostalgia',
    lemma: 'nostalgia',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/nɒˈstæl.dʒə/' }, us: { ipa: '/nɑːˈstæl.dʒə/' } },
    definition: { en: 'A sentimental longing for the past.', zh: '怀旧；乡愁' },
    examples: [
      {
        en: ['Looking at old photographs filled her with nostalgia.'],
        zh: ['看着老照片让她充满了怀旧之情。'],
      },
    ],
    rootBreakdown: [
      { surface: 'nost', type: 'root' },
      { surface: 'alg', type: 'root' },
      { surface: 'ia', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'nost ("homecoming") + alg ("pain") + -ia (condition) → the pain of longing to return home.',
      zh: 'nost（归乡）+ alg（痛苦）+ -ia（状态）→ 渴望回家的痛苦。',
    },
    relatedWords: ['nostalgic', 'melancholy', 'longing'],
  },
  {
    slug: 'euphoria',
    lemma: 'euphoria',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/juːˈfɔː.ri.ə/' }, us: { ipa: '/juːˈfɔːr.i.ə/' } },
    definition: { en: 'A feeling of intense excitement and happiness.', zh: '欣快感；极度愉快' },
    examples: [
      {
        en: ['The team experienced euphoria after winning the championship.'],
        zh: ['球队赢得冠军后感受到了极度的愉悦。'],
      },
    ],
    rootBreakdown: [
      { surface: 'eu', type: 'prefix' },
      { surface: 'phor', type: 'root' },
      { surface: 'ia', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'eu- ("good, well") + phor ("to bear") + -ia (condition) → a state of bearing well, i.e. great joy.',
      zh: 'eu-（好的）+ phor（承受）+ -ia（状态）→ 承受良好的状态，即极度愉快。',
    },
    relatedWords: ['euphoric', 'ecstasy', 'elation'],
  },
  {
    slug: 'enigma',
    lemma: 'enigma',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ɪˈnɪɡ.mə/' }, us: { ipa: '/ɪˈnɪɡ.mə/' } },
    definition: {
      en: 'A person or thing that is mysterious, puzzling, or difficult to understand.',
      zh: '谜；不可思议的事物',
    },
    examples: [
      {
        en: ['The disappearance of the ancient civilization remains an enigma.'],
        zh: ['古代文明的消失至今仍是一个谜。'],
      },
    ],
    rootBreakdown: [
      { surface: 'enigm', type: 'root' },
      { surface: 'a', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'From Greek ainigma ("riddle") → something puzzling and hard to explain.',
      zh: '源自希腊语 ainigma（谜语）→ 令人困惑、难以解释的事物。',
    },
    relatedWords: ['enigmatic', 'mystery', 'puzzle'],
  },
  {
    slug: 'dilemma',
    lemma: 'dilemma',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/dɪˈlem.ə/' }, us: { ipa: '/dɪˈlem.ə/' } },
    definition: {
      en: 'A situation in which a difficult choice has to be made between alternatives.',
      zh: '困境；两难',
    },
    examples: [
      {
        en: ['She faced the dilemma of choosing between career and family.'],
        zh: ['她面临在事业和家庭之间抉择的困境。'],
      },
    ],
    rootBreakdown: [
      { surface: 'di', type: 'prefix' },
      { surface: 'lemma', type: 'root' },
    ],
    morphologyNote: {
      en: 'di- ("two") + lemma ("proposition") → a choice between two propositions.',
      zh: 'di-（二）+ lemma（命题）→ 在两个命题间做选择，即两难。',
    },
    relatedWords: ['predicament', 'quandary'],
  },
  {
    slug: 'exonerate',
    lemma: 'exonerate',
    partOfSpeech: ['v.'],
    pronunciation: { uk: { ipa: '/ɪɡˈzɒn.ə.reɪt/' }, us: { ipa: '/ɪɡˈzɑː.nə.reɪt/' } },
    definition: {
      en: 'To absolve someone from blame for a fault or wrongdoing.',
      zh: '免除责任；使无罪',
    },
    examples: [
      {
        en: ['New evidence exonerated the wrongly convicted man.'],
        zh: ['新证据使这位被冤枉定罪的人无罪释放。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ex', type: 'prefix' },
      { surface: 'oner', type: 'root' },
      { surface: 'ate', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'ex- ("from") + oner ("burden") + -ate (verb) → to free from a burden of blame.',
      zh: 'ex-（从…中）+ oner（负担）+ -ate（动词后缀）→ 从负担中解脱，即免责。',
    },
    relatedWords: ['onerous', 'exculpate'],
  },
  {
    slug: 'callous',
    lemma: 'callous',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ˈkæl.əs/' }, us: { ipa: '/ˈkæl.əs/' } },
    definition: {
      en: 'Showing an insensitive and cruel disregard for others.',
      zh: '冷酷无情的；铁石心肠的',
    },
    examples: [
      {
        en: ['His callous remarks hurt everyone in the room.'],
        zh: ['他冷酷无情的话伤害了房间里的每一个人。'],
      },
    ],
    rootBreakdown: [
      { surface: 'call', type: 'root' },
      { surface: 'ous', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'From Latin callosus ("thick-skinned") → having hardened skin, hence unfeeling.',
      zh: '源自拉丁语 callosus（皮肤厚的）→ 皮厚的，引申为无情的。',
    },
    relatedWords: ['callousness', 'ruthless', 'brutal'],
  },
  {
    slug: 'lethargic',
    lemma: 'lethargic',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ləˈθɑː.dʒɪk/' }, us: { ipa: '/ləˈθɑːr.dʒɪk/' } },
    definition: { en: 'Affected by a lack of energy or enthusiasm.', zh: '昏昏欲睡的；无精打采的' },
    examples: [
      {
        en: ['The hot weather made everyone feel lethargic.'],
        zh: ['炎热的天气让每个人都无精打采。'],
      },
    ],
    rootBreakdown: [
      { surface: 'leth', type: 'root' },
      { surface: 'arg', type: 'root' },
      { surface: 'ic', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'leth ("forgetfulness, death") + arg ("idle") + -ic (adj.) → deathly idle, i.e. extremely sluggish.',
      zh: 'leth（遗忘、死亡）+ arg（闲散）+ -ic（形容词后缀）→ 如死般闲散，即昏昏欲睡的。',
    },
    relatedWords: ['lethargy', 'sluggish', 'drowsy'],
  },
  {
    slug: 'jeopardize',
    lemma: 'jeopardize',
    partOfSpeech: ['v.'],
    pronunciation: { uk: { ipa: '/ˈdʒep.ə.daɪz/' }, us: { ipa: '/ˈdʒep.ɚ.daɪz/' } },
    definition: {
      en: 'To put something or someone into a situation of danger or risk.',
      zh: '危害；使处于危险中',
    },
    examples: [
      {
        en: ['Reckless behavior could jeopardize your career.'],
        zh: ['鲁莽的行为可能会危及你的职业生涯。'],
      },
    ],
    rootBreakdown: [
      { surface: 'jeopard', type: 'root' },
      { surface: 'ize', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'From jeopardy (Old French jeu parti, "divided game") + -ize → to put at risk, as in an uncertain game.',
      zh: '源自 jeopardy（古法语 jeu parti，分胜负的游戏）+ -ize → 置于不确定的境地。',
    },
    relatedWords: ['jeopardy', 'precarious', 'endanger'],
  },
  {
    slug: 'ebullient',
    lemma: 'ebullient',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ɪˈbʌl.i.ənt/' }, us: { ipa: '/ɪˈbʊl.i.ənt/' } },
    definition: { en: 'Cheerful and full of energy; enthusiastic.', zh: '热情洋溢的；兴高采烈的' },
    examples: [
      {
        en: ['The children were ebullient on the last day of school.'],
        zh: ['孩子们在学期最后一天兴高采烈。'],
      },
    ],
    rootBreakdown: [
      { surface: 'e', type: 'prefix' },
      { surface: 'bull', type: 'root' },
      { surface: 'ient', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'e- ("out") + bull ("bubble, boil") + -ient (adj.) → boiling over with enthusiasm.',
      zh: 'e-（向外）+ bull（沸腾）+ -ient（形容词后缀）→ 热情沸腾的。',
    },
    relatedWords: ['ebullience', 'exuberant', 'exultant'],
  },
  {
    slug: 'ameliorate',
    lemma: 'ameliorate',
    partOfSpeech: ['v.'],
    pronunciation: { uk: { ipa: '/əˈmiː.li.ə.reɪt/' }, us: { ipa: '/əˈmiː.li.ə.reɪt/' } },
    definition: { en: 'To make something bad or unsatisfactory better.', zh: '改善；改良' },
    examples: [
      {
        en: ['New policies were introduced to ameliorate working conditions.'],
        zh: ['出台了新政策以改善工作条件。'],
      },
    ],
    rootBreakdown: [
      { surface: 'a', type: 'prefix' },
      { surface: 'melior', type: 'root' },
      { surface: 'ate', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'a- ("to") + melior ("better") + -ate (verb) → to make better.',
      zh: 'a-（向）+ melior（更好的）+ -ate（动词后缀）→ 使变好，即改善。',
    },
    relatedWords: ['improvement', 'worsen', 'exacerbate'],
  },
  {
    slug: 'nonchalance',
    lemma: 'nonchalance',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˈnɒn.ʃəl.əns/' }, us: { ipa: '/ˌnɑːn.ʃəˈlɑːns/' } },
    definition: { en: 'The quality of appearing casually calm and relaxed.', zh: '漫不经心；冷淡' },
    examples: [
      {
        en: ['She accepted the award with studied nonchalance.'],
        zh: ['她装作漫不经心地接受了这个奖项。'],
      },
    ],
    rootBreakdown: [
      { surface: 'non', type: 'prefix' },
      { surface: 'chal', type: 'root' },
      { surface: 'ance', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'non- ("not") + chal (from Latin calere, "be warm") + -ance (noun) → not being heated, i.e. cool indifference.',
      zh: 'non-（不）+ chal（源自拉丁语 calere，温热）+ -ance（名词后缀）→ 不温不热，即漫不经心。',
    },
    relatedWords: ['nonchalant', 'indifferent', 'casual'],
  },
  {
    slug: 'palatable',
    lemma: 'palatable',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ˈpæl.ə.tə.bəl/' }, us: { ipa: '/ˈpæl.ə.t̬ə.bəl/' } },
    definition: {
      en: 'Pleasant to taste; acceptable or satisfactory.',
      zh: '美味的；合意的；可接受的',
    },
    examples: [
      {
        en: ['The chef made the healthy dish more palatable with herbs and spices.'],
        zh: ['厨师用香草和香料让这道健康菜肴更加美味。'],
      },
    ],
    rootBreakdown: [
      { surface: 'palat', type: 'root' },
      { surface: 'able', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'palat (from palate, "roof of the mouth") + -able ("able to be") → pleasing to the palate.',
      zh: 'palat（源自 palate，上颚）+ -able（可…的）→ 令上颚愉悦的，即美味的。',
    },
    relatedWords: ['unpalatable', 'delicious', 'savory'],
  },
  {
    slug: 'flamboyant',
    lemma: 'flamboyant',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/flæmˈbɔɪ.ənt/' }, us: { ipa: '/flæmˈbɔɪ.ənt/' } },
    definition: {
      en: 'Tending to attract attention because of exuberance and confidence.',
      zh: '华丽的；炫耀的；引人注目的',
    },
    examples: [
      {
        en: ['He was known for his flamboyant style of dressing.'],
        zh: ['他以华丽的着装风格而闻名。'],
      },
    ],
    rootBreakdown: [
      { surface: 'flamb', type: 'root' },
      { surface: 'oy', type: 'connector' },
      { surface: 'ant', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'From French flamboyer ("to flame") → blazing like a flame, i.e. strikingly bold.',
      zh: '源自法语 flamboyer（燃烧）→ 像火焰般耀眼的，即华丽夺目的。',
    },
    relatedWords: ['boisterous', 'extravagant', 'ostentatious'],
  },
  {
    slug: 'incorrigible',
    lemma: 'incorrigible',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ɪnˈkɒr.ɪ.dʒɪ.bəl/' }, us: { ipa: '/ɪnˈkɔːr.ɪ.dʒə.bəl/' } },
    definition: {
      en: 'Not able to be corrected, improved, or reformed.',
      zh: '不可救药的；屡教不改的',
    },
    examples: [
      {
        en: ['He was an incorrigible optimist, always seeing the bright side.'],
        zh: ['他是个不可救药的乐天派，总是看到光明的一面。'],
      },
    ],
    rootBreakdown: [
      { surface: 'in', type: 'prefix' },
      { surface: 'corrig', type: 'root' },
      { surface: 'ible', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'in- ("not") + corrig ("correct") + -ible ("able to be") → not able to be corrected.',
      zh: 'in-（不）+ corrig（纠正）+ -ible（可…的）→ 不可纠正的。',
    },
    relatedWords: ['ineradicable', 'inveterate', 'stubborn'],
  },
];
