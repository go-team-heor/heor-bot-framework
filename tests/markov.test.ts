import {describe, expect, test} from '@jest/globals';
import {MarkovGeneratorRepository, MarkovGenerator} from "../src/markov";
import {AssertionError} from "assert";
import exp from "constants";

describe("Markov Module", () => {
    test("Getting a new generator from the repository", () => {
        const repository = new MarkovGeneratorRepository();
        expect(repository.getGenerator('test')).toBeInstanceOf(MarkovGenerator);
    });
})