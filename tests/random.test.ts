import {describe, expect, test} from '@jest/globals';
import {Probability} from "../src/random";
import {AssertionError} from "assert";

const mockMath = Object.create(global.Math);
mockMath.random = () => 0.5;
global.Math = mockMath;

describe('random module', () => {
    test('Probability::constructor() throws with with negative number', () => {
        expect(() => { new Probability(-1) }).toThrow(AssertionError);
    })
    test( 'Probability::constructor() throws with probablity > 1', () => {
        expect(() => { new Probability(2) }).toThrow(AssertionError);
    })
    test('Probability::resolve() returns true when test == probability', () => {
        const probability = new Probability(0.5);
        expect(probability.resolve()).toEqual(true);
    });
    test('Probability::resolve() returns true when test > probability', () => {
        const probability = new Probability(0.4);
        expect(probability.resolve()).toEqual(true);
    });
    test('Probability::resolve() returns false when test < probability', () => {
        const probability = new Probability(0.6);
        expect(probability.resolve()).toEqual(false);
    });
})