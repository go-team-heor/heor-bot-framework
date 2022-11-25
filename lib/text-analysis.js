"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyzeText = exports.detectLanguage = void 0;
/* eslint-disable @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access */
const sentiment_1 = __importDefault(require("sentiment"));
const cld_1 = __importDefault(require("cld"));
const compromise_1 = __importDefault(require("compromise"));
const QUESTION_WORDS = ["who", "what", "where", "when", "why", "how"];
function detectLanguage(text) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return (yield cld_1.default.detect(text)).languages[0].code;
        }
        catch (error) {
            // language detection failed, fall back to english
            return "en";
        }
    });
}
exports.detectLanguage = detectLanguage;
function analyzeText(text) {
    return __awaiter(this, void 0, void 0, function* () {
        const analysis = {};
        const language = yield detectLanguage(text);
        const sentimentAnalyzer = new sentiment_1.default();
        const sentiment = sentimentAnalyzer.analyze(text);
        const document = (0, compromise_1.default)(text);
        const topics = document.topics().unique().out('array');
        const rawSentences = document.sentences().json();
        const sentences = rawSentences.map((rawSentence) => {
            const text = rawSentence.text;
            const isQuestion = !!(rawSentence.text.slice(-1) === "?" || QUESTION_WORDS.includes(rawSentence.text.split("")[0]));
            const isExclamation = !!(rawSentence.text.slice(-1) === "!");
            const grammar = rawSentence.sentence.grammar;
            const verb = rawSentence.sentence.verb;
            const subject = rawSentence.sentence.subject;
            const predicate = rawSentence.sentence.predicate;
            return {
                text, isQuestion, isExclamation, grammar, verb, subject, predicate
            };
        });
        return { language, topics, sentences, sentiment };
    });
}
exports.analyzeText = analyzeText;
