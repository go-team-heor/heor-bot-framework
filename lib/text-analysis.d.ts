type Sentence = {
    text: string;
    subject: string;
    verb: string;
    predicate: string;
    grammar: {
        tense: string;
    };
    isQuestion: boolean;
    isExclamation: boolean;
};
export interface TextAnalysis {
    language: string;
    topics: string[];
    sentences: Sentence[];
    sentiment: {};
}
export declare function detectLanguage(text: string): Promise<string>;
export declare function analyzeText(text: string): Promise<TextAnalysis>;
export {};
