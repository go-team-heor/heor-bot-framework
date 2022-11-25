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
exports.translateText = exports.Languages = void 0;
/* eslint-disable @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access */
const assert_1 = __importDefault(require("assert"));
const node_fetch_1 = __importDefault(require("node-fetch"));
(0, assert_1.default)(process.env.LIBRE_TRANSLATE_API_KEY, "LibreTranslate API key not found!");
const LIBRE_TRANSLATE_API_KEY = process.env.LIBRE_TRANSLATE_API_KEY;
const API_URI = "https://libretranslate.com/translate";
var Languages;
(function (Languages) {
    Languages["English"] = "en";
    Languages["Arabic"] = "ar";
    Languages["Azerbaijani"] = "az";
    Languages["Chinese"] = "zh";
    Languages["Czech"] = "gs";
    Languages["Danish"] = "da";
    Languages["Dutch"] = "nl";
    Languages["Esperanto"] = "eo";
    Languages["Finnish"] = "fi";
    Languages["French"] = "fr";
    Languages["German"] = "de";
    Languages["Greek"] = "el";
    Languages["Hebrew"] = "he";
    Languages["Hindi"] = "hi";
    Languages["Hungarian"] = "hu";
    Languages["Indonesian"] = "id";
    Languages["Irish"] = "ga";
    Languages["Italian"] = "it";
    Languages["Japanese"] = "jp";
    Languages["Korean"] = "ko";
    Languages["Persian"] = "fa";
    Languages["Polish"] = "pl";
    Languages["Portuguese"] = "pt";
    Languages["Russian"] = "ru";
    Languages["Slovak"] = "sk";
    Languages["Spanish"] = "es";
    Languages["Swedish"] = "sv";
    Languages["Turkish"] = "tr";
    Languages["Ukrainian"] = "uk";
})(Languages = exports.Languages || (exports.Languages = {}));
function translateText(text, source, target) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!(target in Object.values(Languages))) {
            return text;
        }
        const response = yield (0, node_fetch_1.default)(API_URI, {
            method: "POST",
            body: JSON.stringify({
                q: text, source, target,
                format: "text",
                api_key: LIBRE_TRANSLATE_API_KEY
            }),
            headers: { "Content-Type": "application/json" }
        });
        if (!(response.status < 300)) {
            return text;
        }
        const responseBody = yield response.json();
        return responseBody.translatedText || text;
    });
}
exports.translateText = translateText;
