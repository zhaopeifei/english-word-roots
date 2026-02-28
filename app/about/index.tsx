'use client';

import { useLanguage } from '@/components/language-provider';

interface AboutSectionProps {
  totalRoots: number;
  totalWords: number;
  totalAffixes: number;
}

/* ------------------------------------------------------------------ */
/*  Grimm's Law card styles                                            */
/* ------------------------------------------------------------------ */

const grimmStyles = [
  { card: 'bg-card border-primary/15', accent: 'text-primary', iconBg: 'bg-primary/10' },
  { card: 'bg-[var(--surface-purple)] border-accent/15', accent: 'text-accent', iconBg: 'bg-accent/10' },
  { card: 'bg-[var(--surface-warm)] border-secondary/15', accent: 'text-secondary', iconBg: 'bg-secondary/10' },
  { card: 'bg-card border-primary/15', accent: 'text-primary', iconBg: 'bg-primary/10' },
  { card: 'bg-[var(--surface-purple)] border-accent/15', accent: 'text-accent', iconBg: 'bg-accent/10' },
  { card: 'bg-[var(--surface-warm)] border-secondary/15', accent: 'text-secondary', iconBg: 'bg-secondary/10' },
];

const pillarIcons = ['📚', '🎨', '🌐'];

const pillarStyles = [
  { card: 'bg-card border-primary/15', accent: 'text-primary' },
  { card: 'bg-[var(--surface-purple)] border-accent/15', accent: 'text-accent' },
  { card: 'bg-[var(--surface-warm)] border-secondary/15', accent: 'text-secondary' },
];

const stepBadgeColors = [
  'bg-primary text-white',
  'bg-accent text-white',
  'bg-secondary text-white',
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export const AboutSection = ({ totalRoots, totalWords, totalAffixes }: AboutSectionProps) => {
  const { dictionary, locale } = useLanguage();

  const copy = {
    en: {
      intro: [
        'English Word Roots is a bilingual etymology atlas that maps how thousands of English words grow from shared Latin, Greek, and Indo-European roots — understanding over memorization.',
        `The current dataset covers ${totalRoots} roots, ${totalWords} words, and ${totalAffixes} affixes — all cross-referenced and color-coded so you can see the connections at a glance.`,
      ],
      grimmTitle: "Grimm's Law — Six Sound-Shift Patterns",
      grimmDescription:
        'These six categories of phonetic correspondence explain how a single root surfaces in many different English words.',
      grimm: [
        {
          icon: '🔤',
          title: 'Vowel Interchange',
          description: 'The five vowels (a-e-i-o-u) regularly swap between related forms while preserving the root meaning.',
          examples: 'sit / seat / set',
        },
        {
          icon: '🔊',
          title: 'Consonant Voice Alternation',
          description: 'Consonants shift along predictable voicing pairs: b/p/f/v, d/t/s/z, g/k/c/q/h/j.',
          examples: 'describe → description (b↔p)',
        },
        {
          icon: '👃',
          title: 'Nasal Substitution',
          description: 'Nasal sounds m and n substitute for each other at morpheme boundaries — similar to 通假字 in classical Chinese.',
          examples: 'in- + possible → impossible (n→m)',
        },
        {
          icon: '🔄',
          title: 'Liquid Interchange',
          description: 'The liquids l, m, n, and r alternate freely among related words.',
          examples: 'flagrant / fragrant (l↔r)',
        },
        {
          icon: '🤫',
          title: 'H Dropping',
          description: 'An initial h can appear or vanish without changing a word\'s etymological family.',
          examples: 'able / habile',
        },
        {
          icon: '🔀',
          title: 'Letter Rearrangement',
          description: 'Metathesis: letters within a root swap positions across cognate forms.',
          examples: 'tax / tac / tag',
        },
      ],
      learningTitle: 'Learning Approach',
      learningDescription:
        'A method designed around how memory actually works — spaced, multisensory, and bite-sized.',
      learning: [
        {
          title: 'Multi-round repetition',
          titleZh: '三轮学习',
          description:
            'First pass for familiarity, second for recognition, third for production. Each round deepens the neural pathway.',
        },
        {
          title: 'Multisensory engagement',
          titleZh: '视/听/主动回忆',
          description:
            'Combine visual morpheme maps, audio pronunciation, and active recall quizzes to encode through multiple channels.',
        },
        {
          title: 'Fragmented time, long-term gain',
          titleZh: '碎片化时间',
          description:
            'Short, focused sessions spread across days outperform marathon study. Five minutes now beats an hour later.',
        },
      ],
      pillars: [
        {
          title: 'Comprehensive root map',
          description: `${totalRoots} roots, each linked to its derived words, variant spellings, and semantic domains — a living map of English morphology.`,
        },
        {
          title: 'Transparent decomposition',
          description:
            'Every word is split into color-coded morphemes (prefix, root, suffix) so the internal structure is immediately visible.',
        },
        {
          title: 'Bilingual by design',
          description:
            'All content is natively bilingual (English + Chinese). Sound-shift patterns are explained with 通假字 analogies familiar to Chinese speakers.',
        },
      ],
      closing: {
        quote:
          'Among thousands of people, you meet those you are meant to meet. Among thousands of years, in the boundless wilderness of time, you happen to catch up with them — neither a step too early, nor a step too late.',
        attribution: '— Zhang Ailing',
      },
    },
    zh: {
      intro: [
        'English Word Roots 是一份双语词源导图，梳理数千个英语单词如何从共同的拉丁语、希腊语和印欧语词根生长出来——理解优于死记硬背。',
        `当前数据涵盖 ${totalRoots} 个词根、${totalWords} 个词汇和 ${totalAffixes} 个词缀——全部交叉索引并以颜色标注，一目了然。`,
      ],
      grimmTitle: '格林法则——六大音变规律',
      grimmDescription:
        '六类语音对应关系，解释为什么同一个词根能以多种不同面貌出现在英语单词中。',
      grimm: [
        {
          icon: '🔤',
          title: '元音互换',
          description: '五个元音 (a-e-i-o-u) 在同源形式间有规律地交替，词根含义不变。',
          examples: 'sit / seat / set',
        },
        {
          icon: '🔊',
          title: '辅音清浊交替',
          description: '辅音沿可预测的清浊对应关系变换：b/p/f/v、d/t/s/z、g/k/c/q/h/j。',
          examples: 'describe → description (b↔p)',
        },
        {
          icon: '👃',
          title: '鼻音替换 (m=n)',
          description: '鼻音 m 和 n 在语素边界处相互替代——类似汉语中的通假字现象。',
          examples: 'in- + possible → impossible (n→m)',
        },
        {
          icon: '🔄',
          title: '流音互换 (l/m/n/r)',
          description: '流音 l、m、n、r 在同源词中自由交替。',
          examples: 'flagrant / fragrant (l↔r)',
        },
        {
          icon: '🤫',
          title: 'H 脱落',
          description: '词首 h 可以出现或消失，不改变单词的词源家族归属。',
          examples: 'able / habile',
        },
        {
          icon: '🔀',
          title: '字母换位 (metathesis)',
          description: '音位转移：词根内的字母在同源形式中互换位置。',
          examples: 'tax / tac / tag',
        },
      ],
      learningTitle: '学习方法',
      learningDescription: '围绕记忆实际运作方式设计——间隔、多感官、碎片化。',
      learning: [
        {
          title: '多轮重复',
          titleZh: '三轮学习',
          description:
            '第一轮混个眼熟，第二轮辨认，第三轮主动产出。每一轮都加深神经通路。',
        },
        {
          title: '多感官参与',
          titleZh: '视/听/主动回忆',
          description:
            '结合可视化构词图谱、语音发音和主动回忆测试，通过多通道编码记忆。',
        },
        {
          title: '碎片化时间，长期收益',
          titleZh: '碎片化时间',
          description:
            '分散在多天的短时聚焦练习，效果远超马拉松式突击。现在的五分钟胜过以后的一小时。',
        },
      ],
      pillars: [
        {
          title: '全面的词根图谱',
          description: `${totalRoots} 个词根，每个都关联衍生词、拼写变体和语义领域——一张活的英语构词地图。`,
        },
        {
          title: '透明的构词拆解',
          description: '每个单词都被拆解为颜色标注的语素（前缀、词根、后缀），内部结构一目了然。',
        },
        {
          title: '天生双语',
          description: '所有内容原生双语（英+中）。音变规律用中文使用者熟悉的通假字类比来讲解。',
        },
      ],
      closing: {
        quote:
          '于千万人之中，遇见你要遇见的人。于千万年之中，时间无涯的荒野里，没有早一步，也没有晚一步，刚巧赶上了。',
        attribution: '—— 张爱玲',
      },
    },
  } as const;

  const t = copy[locale as keyof typeof copy] ?? copy.en;

  return (
    <article className="space-y-10">
      {/* Hero */}
      <header className="space-y-4">
        <span className="bg-primary/10 text-primary inline-block rounded-full px-3 py-1 text-sm font-medium">
          🌿 Etymology
        </span>
        <h1 className="font-heading text-foreground text-4xl font-bold tracking-tight sm:text-5xl">
          {dictionary.aboutTitle}
        </h1>
        <p className="text-muted-foreground max-w-2xl text-lg">{dictionary.aboutMission}</p>
      </header>

      {/* Intro */}
      <section className="border-border from-bg-card rounded-[24px] border bg-gradient-to-br via-[var(--surface-warm)] to-[var(--surface-purple)] p-6">
        <div className="space-y-4">
          {t.intro.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="text-muted-foreground text-base leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* Grimm's Law — 6 cards */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="font-heading text-foreground text-2xl font-semibold">{t.grimmTitle}</h2>
          <p className="text-muted-foreground max-w-2xl text-base">{t.grimmDescription}</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {t.grimm.map((item, index) => {
            const s = grimmStyles[index];
            return (
              <div
                key={item.title}
                className={`rounded-[20px] border p-5 space-y-2 ${s.card}`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{item.icon}</span>
                  <h3 className={`text-lg font-semibold ${s.accent}`}>{item.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                <p className="text-muted-foreground text-sm font-mono">{item.examples}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Learning Approach — 3 steps */}
      <section className="border-border bg-card rounded-[24px] border p-6">
        <div className="space-y-2 mb-6">
          <h2 className="text-foreground text-2xl font-semibold">{t.learningTitle}</h2>
          <p className="text-muted-foreground text-base">{t.learningDescription}</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {t.learning.map((item, index) => (
            <div key={item.title} className="flex gap-4">
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold ${stepBadgeColors[index]}`}
              >
                {index + 1}
              </span>
              <div>
                <p className="text-foreground text-base font-semibold">{item.title}</p>
                <p className="text-muted-foreground mt-0.5 text-xs font-medium">{item.titleZh}</p>
                <p className="text-muted-foreground mt-1 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pillars */}
      <section className="grid gap-4 md:grid-cols-3">
        {t.pillars.map((pillar, index) => (
          <div
            key={pillar.title}
            className={`rounded-[20px] border p-6 ${pillarStyles[index].card}`}
          >
            <span className="text-2xl">{pillarIcons[index]}</span>
            <h3 className={`mt-3 text-lg font-semibold ${pillarStyles[index].accent}`}>
              {pillar.title}
            </h3>
            <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
              {pillar.description}
            </p>
          </div>
        ))}
      </section>

      {/* Closing quote */}
      <section className="border-border bg-card rounded-[20px] border p-8 text-center">
        <blockquote className="mx-auto max-w-xl space-y-4">
          <p className="text-muted-foreground text-base leading-relaxed italic">
            &ldquo;{t.closing.quote}&rdquo;
          </p>
          <footer className="text-muted-foreground text-sm">{t.closing.attribution}</footer>
        </blockquote>
      </section>
    </article>
  );
};
