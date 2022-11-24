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
exports.MarkovGeneratorRepository = exports.MarkovGenerator = void 0;
const detergent_1 = require("detergent");
const purpl_markov_chain_1 = __importDefault(require("purpl-markov-chain"));
const censor_sensor_1 = require("censor-sensor");
const assert_1 = __importDefault(require("assert"));
class MarkovGenerator {
    constructor(chain) {
        this._initialized = false;
        this.chain = chain;
        this.censor = new censor_sensor_1.CensorSensor();
        this.censor.disableTier(2);
        this.censor.disableTier(3);
        this.censor.disableTier(4);
        this.censor.addWord("trap", 1);
        this.censor.addWord("traps", 1);
    }
    get initialized() {
        return this._initialized;
    }
    set initialized(value) {
        this._initialized = value;
    }
    initialize() {
        this.initialized = true;
    }
    scrub(phrase) {
        if (this.censor.isProfane(phrase))
            return undefined;
        return (0, detergent_1.det)(phrase, {
            fixBrokenEntities: false,
            removeWidows: false,
            convertEntities: false,
            convertDashes: false,
            convertApostrophes: false,
            replaceLineBreaks: false,
            removeLineBreaks: true,
            useXHTML: false,
            dontEncodeNonLatin: true,
            addMissingSpaces: false,
            convertDotsToEllipsis: false,
            stripHtml: true,
        }).res;
    }
    addPhrase(phrase) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, assert_1.default)(this.initialized, "Generator not initialized.");
            phrase = this.scrub(phrase);
            if (phrase)
                this.chain.update(phrase);
        });
    }
    generate(options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, assert_1.default)(this.initialized, "Generator not initialized.");
            const defaults = { from: "", grams: 4, backward: false };
            return this.chain.generate(Object.assign(Object.assign({}, defaults), options));
        });
    }
}
exports.MarkovGenerator = MarkovGenerator;
class MarkovGeneratorRepository {
    constructor() {
        this.generators = {};
    }
    getGenerator(generatorId) {
        if (!(generatorId in this.generators)) {
            this.generators[generatorId] = new MarkovGenerator(new purpl_markov_chain_1.default());
        }
        return this.generators[generatorId];
    }
}
exports.MarkovGeneratorRepository = MarkovGeneratorRepository;
