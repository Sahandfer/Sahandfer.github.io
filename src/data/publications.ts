interface PublicationLink {
  label: string;
  url: string;
}

export interface Publication {
  title: string;
  authors: string;
  year: string;
  venue: string;
  type: string;
  abstract: string;
  links: PublicationLink[];
}

export const publications: Publication[] = [
  {
    title: "Human Decision-making is Susceptible to AI-driven Manipulation",
    authors: "Sahand Sabour, June M Liu, Siyang Liu, Chris Z Yao, Shiyao Cui, Xuanming Zhang, Wen Zhang, Yaru Cao, Advait Bhat, Jian Guan, Wei Wu, Rada Mihalcea, Hongning Wang, Tim Althoff, Tatia Lee, Minlie Huang",
    year: "2025",
    venue: "Under Review",
    type: "Journal",
    abstract: "In this paper, we investigate how AI systems can exploit cognitive biases to influence financial and emotional decisions, revealing significant human vulnerability to manipulative AI agents through a 233-participant study.",
    links: [
      { label: "PDF", url: "https://arxiv.org/pdf/2502.07663" },
      // { label: "Code", url: "" }
    ]
  },
  {
    title: "EmoBench: Evaluating the Emotional Intelligence of Large Language Models",
    authors: "Sahand Sabour, Siyang Liu, Zheyuan Zhang, June M Liu, Jinfeng Zhou, Alvionna S Sunaryo, Juanzi Li, Tatia Lee, Rada Mihalcea, and Minlie Huang",
    year: "2024",
    venue: "ACL 2024",
    type: "Conference",
    abstract: "In this project, we propose a benchmark assessing emotional understanding and application in LLMs, revealing substantial gaps between machine and human emotional intelligence through 400 hand-crafted reasoning questions.",
    links: [
      { label: "PDF", url: "https://arxiv.org/pdf/2402.12071" },
      { label: "Code", url: "https://github.com/Sahandfer/EmoBench" },
      { label: "Leaderboard", url: "/#emobench" }
    ]
  },
  {
    title: "A Chatbot for Mental Health Support: Exploring the Impact of Emohaa on Reducing Mental Distress in China",
    authors: "Sahand Sabour, Wen Zhang, Xiyao Xiao, Yuwei Zhang, Yinhe Zheng, Jiaxin Wen, Jialu Zhao, Minlie Huang",
    year: "2023",
    venue: "Frontiers in Digital Health",
    type: "Journal",
    abstract: "In this work, we analyze the effectiveness of Emohaa, a CBT-based conversational agent, in reducing mental distress through clinical trials with 134 participants, showing complementary benefits of emotional support modules.",
    links: [
      { label: "PDF", url: "https://www.frontiersin.org/articles/10.3389/fdgth.2023.1133987/full" },
    ]
  },
  {
    title: "Cem: Commonsense-aware empathetic response generation",
    authors: "Sahand Sabour, Chujie Zheng, Minlie Huang",
    year: "2022",
    venue: "AAAI 2022",
    type: "Conference",
    abstract: "This work enhances empathetic dialogue systems by integrating commonsense reasoning with emotional support strategies, improving response quality through cognitive-aware generation frameworks.",
    links: [
      { label: "PDF", url: "https://ojs.aaai.org/index.php/AAAI/article/download/21373/21122" },
      { label: "Code", url: "https://github.com/Sahandfer/CEM" }
    ]
  },
  {
    title: "PAL: Persona-Augmented Emotional Support Conversation Generation",
    authors: "Jiale Cheng*, Sahand Sabour*, Hao Sun, Zhuang Chen, Minlie Huang",
    year: "2023",
    venue: "ACL 2023 Findings",
    type: "Conference",
    abstract: "We introduce dynamic persona inference for personalized emotional support, achieving state-of-the-art results through controllable generation strategies that adapt to individual user profiles.",
    links: [
      { label: "PDF", url: "https://arxiv.org/pdf/2212.09235" },
      { label: "Code", url: "https://github.com/chengjl19/PAL" }
    ]
  },
  {
    title: "Rethinking and Refining the Distinct Metric",
    authors: "Siyang Liu*, Sahand Sabour*, Yinhe Zheng, Pei Ke, Xiaoyan Zhu, Minlie Huang",
    year: "2022",
    venue: "ACL 2022 (Short Paper)",
    type: "Conference",
    abstract: "In this paper, we addresse length bias in diversity evaluation metrics by proposing Expectation-Adjusted Distinct (EAD), which better correlates with human judgment through theoretical analysis and empirical validation.",
    links: [
      { label: "PDF", url: "https://arxiv.org/pdf/2202.13587" },
      { label: "Code", url: "https://github.com/lsy641/Expectation-Adjusted-Distinct?tab=readme-ov-file" }
    ]
  },
  {
    title: "AugESC: Dialogue augmentation with large language models for emotional support conversation",
    authors: "Chujie Zheng, Sahand Sabour, Jiaxin Wen, Zheng Zhang, Minlie Huang",
    year: "2023",
    venue: "ACL 2023 Findings",
    type: "Conference",
    abstract: "In this project, we leveraged LLMs to expand emotional support dialogue data, creating AugESC dataset that improves model generalization through topic-diverse training examples.",
    links: [
      { label: "PDF", url: "https://arxiv.org/pdf/2202.13047" },
      { label: "Code", url: "https://github.com/thu-coai/AugESC" }
    ]
  },
  {
    title: "Enhanced Large Language Models for Effective Screening of Depression and Anxiety",
    authors: "June M Liu, Mengxia Gao, Sahand Sabour, Zhuang Chen, Minlie Huang, Tatia Lee",
    year: "2025",
    venue: "Under Review",
    type: "Journal",
    abstract: "This paper develops EmoScan, an LLM-based screening system using synthetic clinical interviews (PsyInterview), outperforming GPT-4 in disorder classification (F1=0.7467) and interview quality.",
    links: [
      { label: "PDF", url: "https://arxiv.org/pdf/2501.08769" },
      { label: "Code", url: "https://github.com/Junemengyuan/EmoScan" }
    ]
  },
  {
    title: "Task-Adaptive Tokenization: Enhancing Long-Form Text Generation Efficacy in Mental Health and Beyond",
    authors: "Siyang Liu, Naihao Deng, Sahand Sabour, Yilin Jia, Minlie Huang, Rada Mihalcea",
    year: "2023",
    venue: "EMNLP 2023",
    type: "Conference",
    abstract: "Our proposed method in this paper optimizes tokenization strategies for psychological QA tasks, achieving comparable performance with 60% fewer tokens through vocabulary adaptation and merging protocols.",
    links: [
      { label: "PDF", url: "https://arxiv.org/pdf/2310.05317" },
      { label: "Code", url: "https://github.com/lsy641/task-adaptive-tokenization" }
    ]
  },
  {
    title: "Towards emotional support dialog systems",
    authors: "Siyang Liu, Chujie Zheng, Orianna Demasi, Sahand Sabour, Yu Li, Zhou Yu, Yong Jiang, Minlie Huang",
    year: "2021",
    venue: "ACL 2021",
    type: "Conference",
    abstract: "As the first publicly available dataset for emotional support, this paper establishes foundational frameworks for emotional support conversations, combining strategy-based dialogue management with empathy-aware response generation.",
    links: [
      { label: "PDF", url: "https://arxiv.org/pdf/2106.01144" },
      { label: "Code", url: "https://github.com/thu-coai/Emotional-Support-Conversation" }
    ]
  },
  {
    title: "Coke: A cognitive knowledge graph for machine theory of mind",
    authors: "Jincenzi Wu, Zhuang Chen, Jiawen Deng, Sahand Sabour, Minlie Huang",
    year: "2024",
    venue: "ACL 2024",
    type: "Conference",
    abstract: "In this project, we construct a knowledge graph with 45k+ cognitive chains to model human mental states, enabling LLMs to better predict behavioral/affective responses in social scenarios.",
    links: [
      { label: "PDF", url: "https://arxiv.org/pdf/2305.05390" },
      { label: "Code", url: "https://github.com/jincenziwu/COKE" }
    ]
  },

  {
    title: "CharacterGLM: Customizing Social Characters with Large Language Models",
    authors: "Jinfeng Zhou, Zhuang Chen, Dazhen Wan, Bosi Wen, Yi Song, Jifan Yu, Yongkang Huang, Pei Ke, Guanqun Bi, Libiao Peng, JiaMing Yang, Xiyao Xiao, Sahand Sabour, Xiaohan Zhang, Wenjing Hou, Yijia Zhang, Yuxiao Dong, Hongning Wang, Jie Tang, Minlie Huang",
    year: "2024",
    venue: "EMNLP 2024 Industry Track",
    type: "Conference",
    abstract: "In this paper, we develop the first Chinese conversational AI with customizable character attributes, outperforming GPT models in consistency and engagement through specialized training on social behavior patterns.",
    links: [
      { label: "PDF", url: "https://aclanthology.org/2024.emnlp-industry.107.pdf" },
      { label: "Code", url: "https://github.com/thu-coai/CharacterGLM-6B" }
    ]
  },

];