"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Probability = void 0;
const strict_1 = __importDefault(require("node:assert/strict"));
class Probability {
    constructor(probability) {
        (0, strict_1.default)(probability >= 0);
        (0, strict_1.default)(probability <= 1);
        if (probability % 1 === 0) { // assume that an integer input is a percent
            probability = probability / 100; //
        } //
        this.probability = parseFloat(String(probability));
    }
    resolve() {
        if (this.probability === 1)
            return true;
        if (this.probability === 0)
            return false;
        return Math.random() >= this.probability;
    }
}
exports.Probability = Probability;
