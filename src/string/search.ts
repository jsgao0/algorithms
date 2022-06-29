export enum Algorithm {
    KMP
}

class SearchError extends Error {
    constructor(message: string) {
        super(`[Search Error] ${message}`);
    }
}

/**
 * @description KMP - substring search algorithm
 */

const makeBorderArray = (pattern: string) => {
    const length = pattern.length;
    const borderArray = new Array(length).fill(0);
    let j = 0;

    // https://stackoverflow.com/questions/13792118/kmp-prefix-table
    for (let i = 1; i < length; i++) {

        // Put `j` back to the index where indicates `pattern[i]` === `pattern[j]`.
        while (j > 0 && pattern[j] !== pattern[i])
            j = borderArray[j - 1];

        // Shift the index cursor `j` to next which means append only 1 character.
        if (pattern[j] === pattern[i])
            j++;

        borderArray[i] = j;
    }

    return borderArray;
};

const kmp = (text: string, pattern: string) => {
    return makeBorderArray(pattern);
};

export const search = (text: string, pattern: string, algorithm: Algorithm) => {
    switch (algorithm) {
        case Algorithm.KMP:
            return kmp(text, pattern);
        default:
            throw new SearchError(`Invalid algorithm: ${algorithm}.`);
    }
};

export default search;
