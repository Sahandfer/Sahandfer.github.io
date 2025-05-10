interface BenchmarkMetric {
    name: string;
    description: string;
    weight: number;
}

export const metrics: BenchmarkMetric[] = [
    {
        name: "Emotional Understanding (EU)",
        description:
            "Assesses a model’s ability to recognize, reason about, and interpret emotions, their causes, and nuances in complex social scenarios. This includes emotion recognition, identifying cues, understanding beliefs, and perspective-taking.",
        weight: 0.5
    },
    {
        name: "Emotional Application (EA)",
        description:
            "Measures how well a model can recommend or generate emotionally effective responses or actions in emotionally charged dilemmas, considering relationship and problem types.",
        weight: 0.5,
    },
];

export const tabs = [
    {
        name: "Overall",
        key: "overall",
        columns: ["Rank", "Model", "Organization", "Score (EN)", "Score (ZH)", "Overall"]
    },
    {
        name: "Emotional Understanding",
        key: "EU_en",
        columns: ["Rank", "Model", "Organization", "Complex Emotions", "Perspective Taking", "Emotional Cues", "Personal Beliefs and Experiences", "Overall"]
    },
    {
        name: "情绪理解",
        key: "EU_zh",
        columns: ["等级", "型号", "组织", "情感复杂性", "视角采择", "情感线索", "个人信念与经历", "总分"]
    },
    {
        name: "Emotional Application",
        key: "EA_en",
        columns: ["Rank", "Model", "Organization", "Personal-Self", "Personal-Other", "Social-Self", "Social-Other", "Overall"]
    },
    {
        name: "情绪应用",
        key: "EA_zh",
        columns: ["等级", "型号", "组织", "个人-自我", "个人-他人", "社会-自我", "社会-他人", "总分"]
    }
]


export const leaderboard = [
    {
        modelName: "gpt-4o",
        organization: "OpenAI",
        overall: {
            en: 70.25,
            zh: 62.5,
            overall: 66.375
        },
        EU_en: {
            complexEmotions: 81.63265306,
            perspectiveTaking: 53.73134328,
            emotionalCues: 71.42857143,
            personalBeliefs: 55.35714286,
            overall: 65.5374276575
        },
        EU_zh: {
            complexEmotions: 71.42857143,
            perspectiveTaking: 41.79104478,
            emotionalCues: 71.42857143,
            personalBeliefs: 41.07142857,
            overall: 56.4299040525
        },
        EA_en: {
            personalSelf: 88,
            personalOther: 74,
            socialSelf: 72,
            socialOther: 74,
            overall: 77.0
        },
        EA_zh: {
            personalSelf: 74,
            personalOther: 74,
            socialSelf: 70,
            socialOther: 70,
            overall: 72.0
        }
    },
    {
        modelName: "claude-3.5-sonnet",
        organization: "Anthropic",
        overall: {
            en: 66.75,
            zh: 62.75,
            overall: 64.75
        },
        EU_en: {
            complexEmotions: 67.34693878,
            perspectiveTaking: 55.2238806,
            emotionalCues: 60.71428571,
            personalBeliefs: 55.35714286,
            overall: 59.6605619875
        },
        EU_zh: {
            complexEmotions: 67.34693878,
            perspectiveTaking: 46.26865672,
            emotionalCues: 64.28571429,
            personalBeliefs: 37.5,
            overall: 53.8503274475
        },
        EA_en: {
            personalSelf: 80,
            personalOther: 72,
            socialSelf: 70,
            socialOther: 76,
            overall: 74.5
        },
        EA_zh: {
            personalSelf: 78,
            personalOther: 68,
            socialSelf: 72,
            socialOther: 78,
            overall: 74.0
        }
    },
    {
        modelName: "glm-4-0520",
        organization: "ZhipuAI",
        overall: {
            en: 63.75,
            zh: 59.25,
            overall: 61.5
        },
        EU_en: {
            complexEmotions: 69.3877551,
            perspectiveTaking: 34.32835821,
            emotionalCues: 64.28571429,
            personalBeliefs: 41.07142857,
            overall: 52.2683140425
        },
        EU_zh: {
            complexEmotions: 59.18367347,
            perspectiveTaking: 38.80597015,
            emotionalCues: 60.71428571,
            personalBeliefs: 35.71428571,
            overall: 48.60455376
        },
        EA_en: {
            personalSelf: 84,
            personalOther: 70,
            socialSelf: 80,
            socialOther: 80,
            overall: 78.5
        },
        EA_zh: {
            personalSelf: 82,
            personalOther: 70,
            socialSelf: 76,
            socialOther: 62,
            overall: 72.5
        }
    },
    {
        modelName: "deepseek-v2",
        organization: "DeepSeek",
        overall: {
            en: 63.75,
            zh: 59.0,
            overall: 61.375
        },
        EU_en: {
            complexEmotions: 67.34693878,
            perspectiveTaking: 40.29850746,
            emotionalCues: 71.42857143,
            personalBeliefs: 44.64285714,
            overall: 55.9292187025
        },
        EU_zh: {
            complexEmotions: 67.34693878,
            perspectiveTaking: 34.32835821,
            emotionalCues: 71.42857143,
            personalBeliefs: 37.5,
            overall: 52.650967105
        },
        EA_en: {
            personalSelf: 86,
            personalOther: 72,
            socialSelf: 66,
            socialOther: 76,
            overall: 75.0
        },
        EA_zh: {
            personalSelf: 74,
            personalOther: 68,
            socialSelf: 66,
            socialOther: 70,
            overall: 69.5
        }
    },
    {
        modelName: "glm-4-plus",
        organization: "ZhipuAI",
        overall: {
            en: 61.75,
            zh: 58.5,
            overall: 60.125
        },
        EU_en: {
            complexEmotions: 63.26530612,
            perspectiveTaking: 38.80597015,
            emotionalCues: 64.28571429,
            personalBeliefs: 50.0,
            overall: 54.08924764
        },
        EU_zh: {
            complexEmotions: 61.2244898,
            perspectiveTaking: 32.8358209,
            emotionalCues: 75.0,
            personalBeliefs: 37.5,
            overall: 51.640077675
        },
        EA_en: {
            personalSelf: 78,
            personalOther: 68,
            socialSelf: 72,
            socialOther: 70,
            overall: 72.0
        },
        EA_zh: {
            personalSelf: 72,
            personalOther: 68,
            socialSelf: 72,
            socialOther: 68,
            overall: 70.0
        }
    },
    {
        modelName: "llama-3.1-405b",
        organization: "Meta",
        overall: {
            en: 61.75,
            zh: 58.5,
            overall: 60.125
        },
        EU_en: {
            complexEmotions: 65.30612245,
            perspectiveTaking: 43.28358209,
            emotionalCues: 60.71428571,
            personalBeliefs: 50.0,
            overall: 54.8259975625
        },
        EU_zh: {
            complexEmotions: 61.2244898,
            perspectiveTaking: 38.80597015,
            emotionalCues: 71.42857143,
            personalBeliefs: 35.71428571,
            overall: 51.7933292725
        },
        EA_en: {
            personalSelf: 82,
            personalOther: 66,
            socialSelf: 64,
            socialOther: 70,
            overall: 70.5
        },
        EA_zh: {
            personalSelf: 78,
            personalOther: 68,
            socialSelf: 74,
            socialOther: 56,
            overall: 69.0
        }
    },
    {
        modelName: "qwen2-72b-instruct",
        organization: "Alibaba",
        overall: {
            en: 61.5,
            zh: 58.5,
            overall: 60.0
        },
        EU_en: {
            complexEmotions: 69.3877551,
            perspectiveTaking: 37.31343284,
            emotionalCues: 53.57142857,
            personalBeliefs: 44.64285714,
            overall: 51.2288684125
        },
        EU_zh: {
            complexEmotions: 65.30612245,
            perspectiveTaking: 29.85074627,
            emotionalCues: 67.85714286,
            personalBeliefs: 35.71428571,
            overall: 49.6820743225
        },
        EA_en: {
            personalSelf: 82,
            personalOther: 74,
            socialSelf: 72,
            socialOther: 66,
            overall: 73.5
        },
        EA_zh: {
            personalSelf: 78,
            personalOther: 74,
            socialSelf: 72,
            socialOther: 62,
            overall: 71.5
        }
    },
    {
        modelName: "doubao-pro",
        organization: "ByteDance",
        overall: {
            en: 60.75,
            zh: 59.0,
            overall: 59.875
        },
        EU_en: {
            complexEmotions: 73.46938776,
            perspectiveTaking: 38.80597015,
            emotionalCues: 60.71428571,
            personalBeliefs: 42.85714286,
            overall: 53.96169662
        },
        EU_zh: {
            complexEmotions: 59.18367347,
            perspectiveTaking: 35.82089552,
            emotionalCues: 60.71428571,
            personalBeliefs: 39.28571429,
            overall: 48.7511422475
        },
        EA_en: {
            personalSelf: 74,
            personalOther: 66,
            socialSelf: 70,
            socialOther: 70,
            overall: 70.0
        },
        EA_zh: {
            personalSelf: 74,
            personalOther: 66,
            socialSelf: 76,
            socialOther: 72,
            overall: 72.0
        }
    },
    {
        modelName: "Baichuan4",
        organization: "Baichuan Inc",
        overall: {
            en: 60.5,
            zh: 57.25,
            overall: 58.875
        },
        EU_en: {
            complexEmotions: 55.10204082,
            perspectiveTaking: 38.80597015,
            emotionalCues: 57.14285714,
            personalBeliefs: 37.5,
            overall: 47.1377170275
        },
        EU_zh: {
            complexEmotions: 61.2244898,
            perspectiveTaking: 32.8358209,
            emotionalCues: 67.85714286,
            personalBeliefs: 26.78571429,
            overall: 47.1757919625
        },
        EA_en: {
            personalSelf: 84,
            personalOther: 68,
            socialSelf: 80,
            socialOther: 72,
            overall: 76.0
        },
        EA_zh: {
            personalSelf: 74,
            personalOther: 70,
            socialSelf: 66,
            socialOther: 76,
            overall: 71.5
        }
    },
    {
        modelName: "glm-4-air",
        organization: "ZhipuAI",
        overall: {
            en: 59.25,
            zh: 55.25,
            overall: 57.25
        },
        EU_en: {
            complexEmotions: 71.42857143,
            perspectiveTaking: 34.32835821,
            emotionalCues: 64.28571429,
            personalBeliefs: 44.64285714,
            overall: 53.6713752675
        },
        EU_zh: {
            complexEmotions: 53.06122449,
            perspectiveTaking: 34.32835821,
            emotionalCues: 42.85714286,
            personalBeliefs: 35.71428571,
            overall: 41.4902528175
        },
        EA_en: {
            personalSelf: 80,
            personalOther: 60,
            socialSelf: 72,
            socialOther: 60,
            overall: 68.0
        },
        EA_zh: {
            personalSelf: 78,
            personalOther: 60,
            socialSelf: 78,
            socialOther: 64,
            overall: 70.0
        }
    },
    {
        modelName: "glm-4-airx",
        organization: "ZhipuAI",
        overall: {
            en: 59.0,
            zh: 55.0,
            overall: 57.0
        },
        EU_en: {
            complexEmotions: 71.42857143,
            perspectiveTaking: 37.31343284,
            emotionalCues: 60.71428571,
            personalBeliefs: 46.42857143,
            overall: 53.9712153525
        },
        EU_zh: {
            complexEmotions: 55.10204082,
            perspectiveTaking: 34.32835821,
            emotionalCues: 50.0,
            personalBeliefs: 33.92857143,
            overall: 43.339742615
        },
        EA_en: {
            personalSelf: 82,
            personalOther: 58,
            socialSelf: 68,
            socialOther: 58,
            overall: 66.5
        },
        EA_zh: {
            personalSelf: 76,
            personalOther: 58,
            socialSelf: 76,
            socialOther: 64,
            overall: 68.5
        }
    },
    {
        modelName: "moonshot-v1",
        organization: "MoonshotAI",
        overall: {
            en: 58.75,
            zh: 57.25,
            overall: 58.0
        },
        EU_en: {
            complexEmotions: 65.30612245,
            perspectiveTaking: 35.82089552,
            emotionalCues: 57.14285714,
            personalBeliefs: 39.28571429,
            overall: 49.38889735
        },
        EU_zh: {
            complexEmotions: 57.14285714,
            perspectiveTaking: 31.34328358,
            emotionalCues: 60.71428571,
            personalBeliefs: 37.5,
            overall: 46.6751066075
        },
        EA_en: {
            personalSelf: 74,
            personalOther: 72,
            socialSelf: 68,
            socialOther: 68,
            overall: 70.5
        },
        EA_zh: {
            personalSelf: 76,
            personalOther: 70,
            socialSelf: 72,
            socialOther: 66,
            overall: 71.0
        }
    },
    {
        modelName: "gpt-4o-mini",
        organization: "OpenAI",
        overall: {
            en: 58.5,
            zh: 54.25,
            overall: 56.375
        },
        EU_en: {
            complexEmotions: 63.26530612,
            perspectiveTaking: 40.29850746,
            emotionalCues: 53.57142857,
            personalBeliefs: 41.07142857,
            overall: 49.55166768
        },
        EU_zh: {
            complexEmotions: 53.06122449,
            perspectiveTaking: 31.34328358,
            emotionalCues: 50.0,
            personalBeliefs: 35.71428571,
            overall: 42.529698445
        },
        EA_en: {
            personalSelf: 76,
            personalOther: 70,
            socialSelf: 68,
            socialOther: 62,
            overall: 69.0
        },
        EA_zh: {
            personalSelf: 70,
            personalOther: 68,
            socialSelf: 70,
            socialOther: 64,
            overall: 68.0
        }
    },
    {
        modelName: "ERNIE-4.0-Turbo-8K",
        organization: "Baidu",
        overall: {
            en: 56.0,
            zh: 55.25,
            overall: 55.625
        },
        EU_en: {
            complexEmotions: 59.18367347,
            perspectiveTaking: 34.32835821,
            emotionalCues: 39.28571429,
            personalBeliefs: 32.14285714,
            overall: 41.2351507775
        },
        EU_zh: {
            complexEmotions: 63.26530612,
            perspectiveTaking: 32.8358209,
            emotionalCues: 64.28571429,
            personalBeliefs: 32.14285714,
            overall: 48.1324246125
        },
        EA_en: {
            personalSelf: 80,
            personalOther: 64,
            socialSelf: 70,
            socialOther: 72,
            overall: 71.5
        },
        EA_zh: {
            personalSelf: 72,
            personalOther: 60,
            socialSelf: 72,
            socialOther: 60,
            overall: 66.0
        }
    },
    {
        modelName: "abab6.5",
        organization: "MiniMax",
        overall: {
            en: 56.0,
            zh: 53.25,
            overall: 54.625
        },
        EU_en: {
            complexEmotions: 67.34693878,
            perspectiveTaking: 28.35820896,
            emotionalCues: 50.0,
            personalBeliefs: 30.35714286,
            overall: 44.01557265
        },
        EU_zh: {
            complexEmotions: 53.06122449,
            perspectiveTaking: 29.85074627,
            emotionalCues: 60.71428571,
            personalBeliefs: 25.0,
            overall: 42.1565641175
        },
        EA_en: {
            personalSelf: 78,
            personalOther: 66,
            socialSelf: 70,
            socialOther: 68,
            overall: 70.5
        },
        EA_zh: {
            personalSelf: 74,
            personalOther: 64,
            socialSelf: 66,
            socialOther: 68,
            overall: 68.0
        }
    },
    {
        modelName: "hunyuan-pro",
        organization: "Tencent",
        overall: {
            en: 55.0,
            zh: 52.75,
            overall: 53.875
        },
        EU_en: {
            complexEmotions: 55.10204082,
            perspectiveTaking: 29.85074627,
            emotionalCues: 35.71428571,
            personalBeliefs: 35.71428571,
            overall: 39.0953396275
        },
        EU_zh: {
            complexEmotions: 55.10204082,
            perspectiveTaking: 28.35820896,
            emotionalCues: 57.14285714,
            personalBeliefs: 25.0,
            overall: 41.40077673
        },
        EA_en: {
            personalSelf: 80,
            personalOther: 66,
            socialSelf: 70,
            socialOther: 70,
            overall: 71.5
        },
        EA_zh: {
            personalSelf: 74,
            personalOther: 64,
            socialSelf: 72,
            socialOther: 60,
            overall: 67.5
        }
    },
    {
        modelName: "yi-large",
        organization: "Yi",
        overall: {
            en: 53.25,
            zh: 49.75,
            overall: 51.5
        },
        EU_en: {
            complexEmotions: 55.10204082,
            perspectiveTaking: 35.82089552,
            emotionalCues: 50.0,
            personalBeliefs: 32.14285714,
            overall: 43.26644837
        },
        EU_zh: {
            complexEmotions: 61.2244898,
            perspectiveTaking: 29.85074627,
            emotionalCues: 60.71428571,
            personalBeliefs: 26.78571429,
            overall: 44.6438090175
        },
        EA_en: {
            personalSelf: 66,
            personalOther: 70,
            socialSelf: 62,
            socialOther: 62,
            overall: 65.0
        },
        EA_zh: {
            personalSelf: 66,
            personalOther: 54,
            socialSelf: 60,
            socialOther: 54,
            overall: 58.5
        }
    },
    {
        modelName: "glm-4-flash",
        organization: "ZhipuAI",
        overall: {
            en: 49.5,
            zh: 48.5,
            overall: 49.0
        },
        EU_en: {
            complexEmotions: 44.89795918,
            perspectiveTaking: 26.86567164,
            emotionalCues: 46.42857143,
            personalBeliefs: 32.14285714,
            overall: 37.5837648475
        },
        EU_zh: {
            complexEmotions: 55.10204082,
            perspectiveTaking: 28.35820896,
            emotionalCues: 53.57142857,
            personalBeliefs: 25.0,
            overall: 40.5079195875
        },
        EA_en: {
            personalSelf: 78,
            personalOther: 54,
            socialSelf: 60,
            socialOther: 62,
            overall: 63.5
        },
        EA_zh: {
            personalSelf: 68,
            personalOther: 52,
            socialSelf: 66,
            socialOther: 52,
            overall: 59.5
        }
    },
    {
        modelName: "qwen2-57b-a14b-instruct",
        organization: "Alibaba",
        overall: {
            en: 49.0,
            zh: 54.0,
            overall: 51.5
        },
        EU_en: {
            complexEmotions: 40.81632653,
            perspectiveTaking: 22.3880597,
            emotionalCues: 35.71428571,
            personalBeliefs: 30.35714286,
            overall: 32.3189537
        },
        EU_zh: {
            complexEmotions: 59.18367347,
            perspectiveTaking: 25.37313433,
            emotionalCues: 57.14285714,
            personalBeliefs: 30.35714286,
            overall: 43.01420195
        },
        EA_en: {
            personalSelf: 74,
            personalOther: 64,
            socialSelf: 64,
            socialOther: 66,
            overall: 67.0
        },
        EA_zh: {
            personalSelf: 76,
            personalOther: 60,
            socialSelf: 70,
            socialOther: 68,
            overall: 68.5
        }
    },
    {
        modelName: "qwen2-7b-instruct",
        organization: "Alibaba",
        overall: {
            en: 48.0,
            zh: 45.5,
            overall: 46.75
        },
        EU_en: {
            complexEmotions: 46.93877551,
            perspectiveTaking: 23.88059701,
            emotionalCues: 39.28571429,
            personalBeliefs: 26.78571429,
            overall: 34.222700275
        },
        EU_zh: {
            complexEmotions: 51.02040816,
            perspectiveTaking: 17.91044776,
            emotionalCues: 50.0,
            personalBeliefs: 25.0,
            overall: 35.98271398
        },
        EA_en: {
            personalSelf: 74,
            personalOther: 62,
            socialSelf: 68,
            socialOther: 50,
            overall: 63.5
        },
        EA_zh: {
            personalSelf: 66,
            personalOther: 54,
            socialSelf: 64,
            socialOther: 50,
            overall: 58.5
        }
    },
    {
        modelName: "GPT-4 (CoT)",
        organization: "OpenAI",
        overall: {
            en: 0.6707,
            zh: 0.6263,
            all: 0.6485,
        },
        EU_en: {
            complexEmotions: 0.6888,
            perspectiveTaking: 0.4925,
            emotionalCues: 0.7143,
            personalBeliefs: 0.5313,
            overall: 0.5825,
        },
        EU_zh: {
            complexEmotions: 0.6837,
            perspectiveTaking: 0.4179,
            emotionalCues: 0.6339,
            personalBeliefs: 0.4330,
            overall: 0.5175,
        },
        EA_en: {
            personalSelf: 0.7450,
            personalOther: 0.8000,
            socialSelf: 0.7400,
            socialOther: 0.7500,
            overall: 0.7588,
        },
        EA_zh: {
            personalSelf: 0.7550,
            personalOther: 0.8050,
            socialSelf: 0.7000,
            socialOther: 0.6800,
            overall: 0.7350,
        },
    }, {
        modelName: "GPT-4 (Base)",
        organization: "OpenAI",

        overall: {
            en: 0.6763,
            zh: 0.6394,
            overall: 0.6578,
        },
        EU_en: {
            complexEmotions: 0.7245,
            perspectiveTaking: 0.5037,
            emotionalCues: 0.7054,
            personalBeliefs: 0.5446,
            overall: 0.5975,
        },
        EU_zh: {
            complexEmotions: 0.6684,
            perspectiveTaking: 0.4328,
            emotionalCues: 0.7589,
            personalBeliefs: 0.4509,
            overall: 0.5412,
        },
        EA_en: {
            personalSelf: 0.7950,
            personalOther: 0.7850,
            socialSelf: 0.7350,
            socialOther: 0.7050,
            overall: 0.7550,
        },
        EA_zh: {
            personalSelf: 0.7550,
            personalOther: 0.8250,
            socialSelf: 0.7050,
            socialOther: 0.6650,
            overall: 0.7375,
        },
    },
    {
        modelName: "ChatGLM3-66B (Base)",
        organization: "ZhipuAI",

        overall: {
            en: 0.5081,
            zh: 0.4725,
            overall: 0.4903,
        },
        EU_en: {
            complexEmotions: 0.4745,
            perspectiveTaking: 0.2649,
            emotionalCues: 0.5089,
            personalBeliefs: 0.3036,
            overall: 0.3612,
        },
        EU_zh: {
            complexEmotions: 0.4286,
            perspectiveTaking: 0.2985,
            emotionalCues: 0.5446,
            personalBeliefs: 0.2589,
            overall: 0.3538,
        },
        EA_en: {
            personalSelf: 0.7100,
            personalOther: 0.5950,
            socialSelf: 0.6550,
            socialOther: 0.6600,
            overall: 0.6550,
        },
        EA_zh: {
            personalSelf: 0.6500,
            personalOther: 0.5350,
            socialSelf: 0.6400,
            socialOther: 0.5400,
            overall: 0.5912,
        },
    },

    {
        modelName: "ChatGLM3-66B (CoT)",
        organization: "ZhipuAI",

        overall: {
            en: 0.4844,
            zh: 0.4481,
            overall: 0.4662,
        },
        EU_en: {
            complexEmotions: 0.4235,
            perspectiveTaking: 0.2500,
            emotionalCues: 0.4554,
            personalBeliefs: 0.3080,
            overall: 0.3375,
        },
        EU_zh: {
            complexEmotions: 0.3673,
            perspectiveTaking: 0.2537,
            emotionalCues: 0.4286,
            personalBeliefs: 0.2143,
            overall: 0.2950,
        },
        EA_en: {
            personalSelf: 0.6900,
            personalOther: 0.5900,
            socialSelf: 0.6500,
            socialOther: 0.5950,
            overall: 0.6312,
        },
        EA_zh: {
            personalSelf: 0.6250,
            personalOther: 0.5700,
            socialSelf: 0.6400,
            socialOther: 0.5700,
            overall: 0.6012,
        },
    },
    {
        modelName: "Baichuan2-Chat-53B (Base)",
        organization: "Baichuan Inc",

        overall: {
            en: 0.3488,
            zh: 0.3400,
            overall: 0.3444,
        },
        EU_en: {
            complexEmotions: 0.4388,
            perspectiveTaking: 0.2537,
            emotionalCues: 0.4911,
            personalBeliefs: 0.3125,
            overall: 0.3488,
        },
        EU_zh: {
            complexEmotions: 0.4643,
            perspectiveTaking: 0.2537,
            emotionalCues: 0.5089,
            personalBeliefs: 0.2500,
            overall: 0.3400,
        },
        EA_en: {
            personalSelf: null,
            personalOther: null,
            socialSelf: null,
            socialOther: null,
            overall: null,
        },
        EA_zh: {
            personalSelf: null,
            personalOther: null,
            socialSelf: null,
            socialOther: null,
            overall: null,
        },
    },
    {
        modelName: "Baichuan2-Chat-53B (CoT)",
        organization: "Baichuan Inc",

        overall: {
            en: 0.3300,
            zh: 0.3300,
            overall: 0.3300,
        },
        EU_en: {
            complexEmotions: 0.4133,
            perspectiveTaking: 0.2537,
            emotionalCues: 0.4554,
            personalBeliefs: 0.2857,
            overall: 0.3300,
        },
        EU_zh: {
            complexEmotions: 0.5714,
            perspectiveTaking: 0.1194,
            emotionalCues: 0.5357,
            personalBeliefs: 0.2679,
            overall: 0.3300,
        },
        EA_en: {
            personalSelf: null,
            personalOther: null,
            socialSelf: null,
            socialOther: null,
            overall: null,
        },
        EA_zh: {
            personalSelf: null,
            personalOther: null,
            socialSelf: null,
            socialOther: null,
            overall: null,
        },
    },
    {
        modelName: "GPT-3.5 (Base)",
        organization: "OpenAI",

        overall: {
            en: 0.4725,
            zh: 0.4107,
            overall: 0.4416,
        },
        EU_en: {
            complexEmotions: 0.4184,
            perspectiveTaking: 0.2164,
            emotionalCues: 0.4464,
            personalBeliefs: 0.3348,
            overall: 0.3312,
        },
        EU_zh: {
            complexEmotions: 0.3061,
            perspectiveTaking: 0.2201,
            emotionalCues: 0.4554,
            personalBeliefs: 0.1830,
            overall: 0.2638,
        },
        EA_en: {
            personalSelf: 0.6450,
            personalOther: 0.6100,
            socialSelf: 0.6050,
            socialOther: 0.5950,
            overall: 0.6138,
        },
        EA_zh: {
            personalSelf: 0.5700,
            personalOther: 0.5700,
            socialSelf: 0.5300,
            socialOther: 0.5600,
            overall: 0.5575,
        },
    },
    {
        modelName: "GPT-3.5 (CoT)",
        organization: "OpenAI",

        overall: {
            en: 0.4813,
            zh: 0.4200,
            overall: 0.4506,
        },
        EU_en: {
            complexEmotions: 0.4388,
            perspectiveTaking: 0.2649,
            emotionalCues: 0.4286,
            personalBeliefs: 0.2946,
            overall: 0.3388,
        },
        EU_zh: {
            complexEmotions: 0.3469,
            perspectiveTaking: 0.2052,
            emotionalCues: 0.4643,
            personalBeliefs: 0.1696,
            overall: 0.2662,
        },
        EA_en: {
            personalSelf: 0.6700,
            personalOther: 0.6150,
            socialSelf: 0.6250,
            socialOther: 0.5850,
            overall: 0.6238,
        },
        EA_zh: {
            personalSelf: 0.6250,
            personalOther: 0.6100,
            socialSelf: 0.5300,
            socialOther: 0.5300,
            overall: 0.5738,
        },
    },
    {
        modelName: "Qwen-Chat-14B (Base)",
        organization: "Alibaba",

        overall: {
            en: 0.4800,
            zh: 0.4481,
            overall: 0.4641,
        },
        EU_en: {
            complexEmotions: 0.4694,
            perspectiveTaking: 0.2612,
            emotionalCues: 0.3839,
            personalBeliefs: 0.3527,
            overall: 0.3550,
        },
        EU_zh: {
            complexEmotions: 0.4337,
            perspectiveTaking: 0.1940,
            emotionalCues: 0.4196,
            personalBeliefs: 0.3036,
            overall: 0.3150,
        },
        EA_en: {
            personalSelf: 0.7400,
            personalOther: 0.5400,
            socialSelf: 0.6050,
            socialOther: 0.5350,
            overall: 0.6050,
        },
        EA_zh: {
            personalSelf: 0.6900,
            personalOther: 0.5650,
            socialSelf: 0.5650,
            socialOther: 0.5050,
            overall: 0.5812,
        },
    },
    {
        modelName: "Qwen-Chat-14B (CoT)",
        organization: "Alibaba",

        overall: {
            en: 0.3669,
            zh: 0.4413,
            overall: 0.4041,
        },
        EU_en: {
            complexEmotions: 0.4337,
            perspectiveTaking: 0.2276,
            emotionalCues: 0.3393,
            personalBeliefs: 0.2545,
            overall: 0.3012,
        },
        EU_zh: {
            complexEmotions: 0.4184,
            perspectiveTaking: 0.2127,
            emotionalCues: 0.4196,
            personalBeliefs: 0.2500,
            overall: 0.3025,
        },
        EA_en: {
            personalSelf: 0.4550,
            personalOther: 0.4200,
            socialSelf: 0.4750,
            socialOther: 0.3800,
            overall: 0.4325,
        },
        EA_zh: {
            personalSelf: 0.6250,
            personalOther: 0.5800,
            socialSelf: 0.5650,
            socialOther: 0.5500,
            overall: 0.5800,
        },
    },
    {
        modelName: "Baichuan2-Chat-13B (Base)",
        organization: "Baichuan Inc",

        overall: {
            en: 0.3994,
            zh: 0.4069,
            overall: 0.4031,
        },
        EU_en: {
            complexEmotions: 0.3469,
            perspectiveTaking: 0.1866,
            emotionalCues: 0.3304,
            personalBeliefs: 0.2455,
            overall: 0.2625,
        },
        EU_zh: {
            complexEmotions: 0.3724,
            perspectiveTaking: 0.2015,
            emotionalCues: 0.3750,
            personalBeliefs: 0.1964,
            overall: 0.2662,
        },
        EA_en: {
            personalSelf: 0.5200,
            personalOther: 0.5200,
            socialSelf: 0.5200,
            socialOther: 0.5850,
            overall: 0.5362,
        },
        EA_zh: {
            personalSelf: 0.5150,
            personalOther: 0.5150,
            socialSelf: 0.5800,
            socialOther: 0.5800,
            overall: 0.5475,
        },
    },
    {
        modelName: "Baichuan2-Chat-13B (CoT)",
        organization: "Baichuan Inc",

        overall: {
            en: 0.3519,
            zh: 0.3356,
            overall: 0.3438,
        },
        EU_en: {
            complexEmotions: 0.2755,
            perspectiveTaking: 0.1381,
            emotionalCues: 0.2500,
            personalBeliefs: 0.1607,
            overall: 0.1938,
        },
        EU_zh: {
            complexEmotions: 0.2908,
            perspectiveTaking: 0.1679,
            emotionalCues: 0.3393,
            personalBeliefs: 0.1607,
            overall: 0.2200,
        },
        EA_en: {
            personalSelf: 0.5250,
            personalOther: 0.5150,
            socialSelf: 0.4750,
            socialOther: 0.5250,
            overall: 0.5100,
        },
        EA_zh: {
            personalSelf: 0.4650,
            personalOther: 0.4350,
            socialSelf: 0.4850,
            socialOther: 0.4200,
            overall: 0.4512,
        },
    },
    {
        modelName: "Llama2-Chat-13B (Base)",
        organization: "Meta",

        overall: {
            en: 0.3700,
            zh: 0.3187,
            overall: 0.3444,
        },
        EU_en: {
            complexEmotions: 0.2449,
            perspectiveTaking: 0.1530,
            emotionalCues: 0.2232,
            personalBeliefs: 0.1384,
            overall: 0.1812,
        },
        EU_zh: {
            complexEmotions: 0.1582,
            perspectiveTaking: 0.1306,
            emotionalCues: 0.1429,
            personalBeliefs: 0.1027,
            overall: 0.1312,
        },
        EA_en: {
            personalSelf: 0.6800,
            personalOther: 0.5350,
            socialSelf: 0.5350,
            socialOther: 0.4850,
            overall: 0.5588,
        },
        EA_zh: {
            personalSelf: 0.5500,
            personalOther: 0.4550,
            socialSelf: 0.5550,
            socialOther: 0.4650,
            overall: 0.5062,
        },
    },
    {
        modelName: "Llama2-Chat-13B (CoT)",
        organization: "Meta",

        overall: {
            en: 0.2519,
            zh: 0.2175,
            overall: 0.2347,
        },
        EU_en: {
            complexEmotions: 0.1429,
            perspectiveTaking: 0.1119,
            emotionalCues: 0.1607,
            personalBeliefs: 0.1116,
            overall: 0.1262,
        },
        EU_zh: {
            complexEmotions: 0.1122,
            perspectiveTaking: 0.1269,
            emotionalCues: 0.0536,
            personalBeliefs: 0.0759,
            overall: 0.0988,
        },
        EA_en: {
            personalSelf: 0.4800,
            personalOther: 0.3400,
            socialSelf: 0.3500,
            socialOther: 0.3400,
            overall: 0.3775,
        },
        EA_zh: {
            personalSelf: 0.4000,
            personalOther: 0.3250,
            socialSelf: 0.3300,
            socialOther: 0.2900,
            overall: 0.3362,
        },
    },
    {
        modelName: "Qwen-Chat-7B (Base)",
        organization: "Alibaba",

        overall: {
            en: 0.3856,
            zh: 0.3362,
            overall: 0.3609,
        },
        EU_en: {
            complexEmotions: 0.2806,
            perspectiveTaking: 0.1642,
            emotionalCues: 0.2857,
            personalBeliefs: 0.2188,
            overall: 0.2250,
        },
        EU_zh: {
            complexEmotions: 0.2602,
            perspectiveTaking: 0.1530,
            emotionalCues: 0.3125,
            personalBeliefs: 0.1696,
            overall: 0.2062,
        },
        EA_en: {
            personalSelf: 0.6250,
            personalOther: 0.5050,
            socialSelf: 0.5550,
            socialOther: 0.5000,
            overall: 0.5462,
        },
        EA_zh: {
            personalSelf: 0.4400,
            personalOther: 0.4900,
            socialSelf: 0.5150,
            socialOther: 0.4200,
            overall: 0.4662,
        },
    },
    {
        modelName: "Qwen-Chat-7B (CoT)",
        organization: "Alibaba",

        overall: {
            en: 0.3275,
            zh: 0.3438,
            overall: 0.3356,
        },
        EU_en: {
            complexEmotions: 0.2551,
            perspectiveTaking: 0.1567,
            emotionalCues: 0.2679,
            personalBeliefs: 0.2188,
            overall: 0.2138,
        },
        EU_zh: {
            complexEmotions: 0.1633,
            perspectiveTaking: 0.1306,
            emotionalCues: 0.2500,
            personalBeliefs: 0.1562,
            overall: 0.1625,
        },
        EA_en: {
            personalSelf: 0.4900,
            personalOther: 0.4050,
            socialSelf: 0.5050,
            socialOther: 0.3650,
            overall: 0.4412,
        },
        EA_zh: {
            personalSelf: 0.5350,
            personalOther: 0.5350,
            socialSelf: 0.5500,
            socialOther: 0.4800,
            overall: 0.5250,
        },
    },
    {
        modelName: "ChatGLM3-6B (Base)",
        organization: "ZhipuAI",

        overall: {
            en: 0.3788,
            zh: 0.3369,
            overall: 0.3578,
        },
        EU_en: {
            complexEmotions: 0.2449,
            perspectiveTaking: 0.1343,
            emotionalCues: 0.3036,
            personalBeliefs: 0.1964,
            overall: 0.2025,
        },
        EU_zh: {
            complexEmotions: 0.3061,
            perspectiveTaking: 0.1119,
            emotionalCues: 0.3750,
            personalBeliefs: 0.1473,
            overall: 0.2062,
        },
        EA_en: {
            personalSelf: 0.6200,
            personalOther: 0.5500,
            socialSelf: 0.5150,
            socialOther: 0.5400,
            overall: 0.5562,
        },
        EA_zh: {
            personalSelf: 0.4800,
            personalOther: 0.4750,
            socialSelf: 0.4700,
            socialOther: 0.4450,
            overall: 0.4675,
        },
    },
    {
        modelName: "ChatGLM3-6B (CoT)",
        organization: "ZhipuAI",

        overall: {
            en: 0.3638,
            zh: 0.3744,
            overall: 0.3691,
        },
        EU_en: {
            complexEmotions: 0.2296,
            perspectiveTaking: 0.1455,
            emotionalCues: 0.2679,
            personalBeliefs: 0.2188,
            overall: 0.2038,
        },
        EU_zh: {
            complexEmotions: 0.2653,
            perspectiveTaking: 0.1306,
            emotionalCues: 0.3839,
            personalBeliefs: 0.1741,
            overall: 0.2112,
        },
        EA_en: {
            personalSelf: 0.6100,
            personalOther: 0.5200,
            socialSelf: 0.5200,
            socialOther: 0.4650,
            overall: 0.5288,
        },
        EA_zh: {
            personalSelf: 0.5450,
            personalOther: 0.5600,
            socialSelf: 0.5250,
            socialOther: 0.5200,
            overall: 0.5375,
        },
    },
    {
        modelName: "Baichuan2-Chat-7B (Base)",
        organization: "Baichuan Inc",

        overall: {
            en: 0.3738,
            zh: 0.3181,
            overall: 0.3459,
        },
        EU_en: {
            complexEmotions: 0.3010,
            perspectiveTaking: 0.1604,
            emotionalCues: 0.2679,
            personalBeliefs: 0.2098,
            overall: 0.2238,
        },
        EU_zh: {
            complexEmotions: 0.2500,
            perspectiveTaking: 0.1306,
            emotionalCues: 0.3661,
            personalBeliefs: 0.1250,
            overall: 0.1912,
        },
        EA_en: {
            personalSelf: 0.5950,
            personalOther: 0.5200,
            socialSelf: 0.4850,
            socialOther: 0.5000,
            overall: 0.5250,
        },
        EA_zh: {
            personalSelf: 0.4850,
            personalOther: 0.3800,
            socialSelf: 0.4750,
            socialOther: 0.4400,
            overall: 0.4450,
        },
    },
    {
        modelName: "Baichuan2-Chat-7B (CoT)",
        organization: "Baichuan Inc",

        overall: {
            en: 0.3375,
            zh: 0.3225,
            overall: 0.3300,
        },
        EU_en: {
            complexEmotions: 0.2653,
            perspectiveTaking: 0.1530,
            emotionalCues: 0.2232,
            personalBeliefs: 0.1473,
            overall: 0.1888,
        },
        EU_zh: {
            complexEmotions: 0.2092,
            perspectiveTaking: 0.1791,
            emotionalCues: 0.2232,
            personalBeliefs: 0.1071,
            overall: 0.1725,
        },
        EA_en: {
            personalSelf: 0.5350,
            personalOther: 0.4400,
            socialSelf: 0.4750,
            socialOther: 0.4950,
            overall: 0.4862,
        },
        EA_zh: {
            personalSelf: 0.4900,
            personalOther: 0.4800,
            socialSelf: 0.4100,
            socialOther: 0.4300,
            overall: 0.4525,
        },
    },
    {
        modelName: "Llama2-Chat-7B (Base)",
        organization: "Meta",

        overall: {
            en: 0.3094,
            zh: 0.2375,
            overall: 0.2734,
        },
        EU_en: {
            complexEmotions: 0.1327,
            perspectiveTaking: 0.1306,
            emotionalCues: 0.1071,
            personalBeliefs: 0.0937,
            overall: 0.1175,
        },
        EU_zh: {
            complexEmotions: 0.1327,
            perspectiveTaking: 0.0485,
            emotionalCues: 0.0536,
            personalBeliefs: 0.0937,
            overall: 0.0825,
        },
        EA_en: {
            personalSelf: 0.5850,
            personalOther: 0.5550,
            socialSelf: 0.4500,
            socialOther: 0.4150,
            overall: 0.5012,
        },
        EA_zh: {
            personalSelf: 0.4450,
            personalOther: 0.3600,
            socialSelf: 0.3400,
            socialOther: 0.4250,
            overall: 0.3925,
        },
    },
    {
        modelName: "Llama2-Chat-7B (CoT)",
        organization: "Meta",

        overall: {
            en: 0.1913,
            zh: 0.1688,
            overall: 0.1800,
        },
        EU_en: {
            complexEmotions: 0.0867,
            perspectiveTaking: 0.0672,
            emotionalCues: 0.0268,
            personalBeliefs: 0.0580,
            overall: 0.0638,
        },
        EU_zh: {
            complexEmotions: 0.0765,
            perspectiveTaking: 0.1007,
            emotionalCues: 0.0089,
            personalBeliefs: 0.0402,
            overall: 0.0650,
        },
        EA_en: {
            personalSelf: 0.3750,
            personalOther: 0.2950,
            socialSelf: 0.2550,
            socialOther: 0.3500,
            overall: 0.3188,
        },
        EA_zh: {
            personalSelf: 0.2900,
            personalOther: 0.2550,
            socialSelf: 0.3050,
            socialOther: 0.2400,
            overall: 0.2725,
        },
    },
];