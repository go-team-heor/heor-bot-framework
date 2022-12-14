"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PluginResult = exports.PluginPayload = exports.Probability = exports.MarkovGenerator = exports.MarkovGeneratorRepository = exports.translateText = exports.Languages = exports.detectLanguage = exports.analyzeText = void 0;
var text_analysis_1 = require("./text-analysis");
Object.defineProperty(exports, "analyzeText", { enumerable: true, get: function () { return text_analysis_1.analyzeText; } });
Object.defineProperty(exports, "detectLanguage", { enumerable: true, get: function () { return text_analysis_1.detectLanguage; } });
var translate_1 = require("./translate");
Object.defineProperty(exports, "Languages", { enumerable: true, get: function () { return translate_1.Languages; } });
Object.defineProperty(exports, "translateText", { enumerable: true, get: function () { return translate_1.translateText; } });
var markov_1 = require("./markov");
Object.defineProperty(exports, "MarkovGeneratorRepository", { enumerable: true, get: function () { return markov_1.MarkovGeneratorRepository; } });
Object.defineProperty(exports, "MarkovGenerator", { enumerable: true, get: function () { return markov_1.MarkovGenerator; } });
var random_1 = require("./random");
Object.defineProperty(exports, "Probability", { enumerable: true, get: function () { return random_1.Probability; } });
var plugin_1 = require("./plugin");
Object.defineProperty(exports, "PluginPayload", { enumerable: true, get: function () { return plugin_1.PluginPayload; } });
Object.defineProperty(exports, "PluginResult", { enumerable: true, get: function () { return plugin_1.PluginResult; } });
