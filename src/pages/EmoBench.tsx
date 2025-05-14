import { useEffect, useState } from 'react';
import { ArrowUpRight, FileText, Github, Trophy, Medal, Award, Brain, BrainCircuit, Database } from 'lucide-react';
import { metrics, leaderboard, tabs } from '../data/emobench';
import SectionHeader from '../components/ui/SectionHeader';

type Tab = 'overall' | 'EU_en' | 'EA_en' | 'EU_zh' | 'EA_zh';

const EmoBench = () => {
    const [activeTab, setActiveTab] = useState<Tab>('overall');

    useEffect(() => {
        document.title = 'EmoBench: Evaluating Emotional Intelligence of LLMs';
    }, []);


    const sortedLeaderboard = [...leaderboard].sort((a, b) => {
        const scoreA = a[activeTab].overall;
        const scoreB = b[activeTab].overall;
        return scoreB - scoreA;
    });

    return (
        <div className="min-h-screen pt-20">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl font-bold mb-6">
                            EmoBench: Evaluating the Emotional Intelligence of Large Language Models
                        </h1>
                        <p className="text-xl text-text/70 mb-8">
                            A comprehensive benchmark for evaluating EI in LLMs with 400 handcrafted questions
                        </p>
                        <div className="flex flex-wrap justify-center gap-">
                            <a
                                href="https://arxiv.org/abs/2402.12071"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-secondary"
                            >
                                Read the Paper
                                <FileText className="ml-2 h-4 w-4" />
                            </a>
                            <a
                                href="https://github.com/Sahandfer/EmoBench"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn bg-secondary text-text hover:bg-secondary/80"
                            >
                                View on GitHub
                                <Github className="ml-2 h-4 w-4" />
                            </a>
                            <a
                                href="https://huggingface.co/datasets/SahandSab/EmoBench"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn bg-secondary text-text hover:bg-secondary/80"
                            >
                                View on Huggingface
                                <Database className="ml-2 h-4 w-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Metrics Section */}
            <section className="bg-background">
                <div className="container mx-auto px-4">
                    <SectionHeader
                        pretitle="Evaluation"
                        title="Benchmark Metrics"
                        description="EmoBench evaluates LLMs across two main dimensions of emotional intelligence"
                        centered={true}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                        {metrics.map((metric, index) => (
                            <div
                                key={index}
                                className="bg-secondary/30 rounded-lg p-6 border border-border"
                            >
                                {index ? <BrainCircuit className="h-8 w-8 text-primary mb-4" /> : <Brain className="h-8 w-8 text-primary mb-4" />}
                                <h3 className="text-xl font-semibold mb-2">{metric.name}</h3>
                                <p className="text-text/70">{metric.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leaderboard Section */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4">
                    <SectionHeader
                        pretitle="Results"
                        title="Leaderboard"
                        description="Current standings of models evaluated on EmoBench"
                        centered={true}
                    />

                    <div className="flex justify-center space-x-2 mb-8">
                        {tabs.map((tab) => (<button
                            onClick={() => setActiveTab(tab.key as Tab)}
                            className={`px-4 py-2 rounded-md transition-colors ${activeTab === tab.key
                                ? 'bg-primary text-black font-bold'
                                : 'bg-secondary/50 hover:bg-secondary'
                                }`}
                        >
                            {tab.name}
                        </button>))}
                    </div>
                    <div className="mt-8 overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="border-b border-border">
                                    {tabs.map((tab) => (tab.key === activeTab && tab.columns.map((column, index) => (<th className="px-6 py-4 text-left">{column}</th>))))}

                                </tr>
                            </thead>
                            <tbody>
                                {sortedLeaderboard.map((entry, index) => (
                                    <tr
                                        key={index}
                                        className="border-b border-border hover:bg-secondary/30 transition-colors"
                                    >
                                        <td className="px-6 py-4">
                                            {index === 0 ? (
                                                <Trophy className="h-5 w-5 text-warning" />
                                            ) : index === 1 ? (
                                                <Medal className="h-5 w-5 text-accent" />
                                            ) : index === 2 ? (
                                                <Award className="h-5 w-5 text-primary" />
                                            ) : (
                                                index + 1
                                            )}
                                        </td>
                                        <td className="px-6 py-4 font-medium">{entry.modelName}</td>
                                        <td className="px-6 py-4">{entry.organization}</td>
                                        {Object.values(entry[activeTab]).map((value: number) => (<td className="px-6 py-4">
                                            <span className="font-medium text-center">
                                                {(value < 1 ? value * 100 : value).toFixed(2)}
                                            </span>
                                        </td>))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>


            {/* Submit Section */}
            {/* <section className="py-20 bg-background">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-4">Submit Your Results</h2>
                        <p className="text-lg text-text/70 mb-8">
                            Want to add your model to the leaderboard? Follow our submission guidelines and evaluation process.
                        </p>
                        <a
                            href="https://github.com/example/emobench#submission"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                        >
                            Submission Guidelines
                            <ArrowUpRight className="ml-2 h-4 w-4" />
                        </a>
                    </div>
                </div>
            </section> */}
        </div>
    );
};

export default EmoBench;