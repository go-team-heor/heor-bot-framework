import assert from 'node:assert/strict';

export class Probability {
    private readonly probability: number;
    constructor(probability: number) {
        assert (probability >= 0);
        assert (probability <= 1);
        if (probability % 1 === 0) {                // assume that an integer input is a percent
            probability = probability / 100;        //
        }                                           //
        this.probability = parseFloat(String(probability));
    }
    resolve(): boolean {
        if (this.probability === 1) return true;
        if (this.probability === 0) return false;
        return Math.random() >= this.probability;
    }
}