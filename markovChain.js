const fs = require('fs');

class MarkovChain {
    constructor() {
        this.transitions = new Map();
    }

    train(text) {
        const words = text.split(/\s+/);
        for (let i = 0; i < words.length - 1; i++) {
            const current = words[i];
            const next = words[i + 1];

            if (!this.transitions.has(current)) {
                this.transitions.set(current, []);
            }
            this.transitions.get(current).push(next);
        }
    }

    generate(start, length) {
        let current = start;
        const result = [current];

        for (let i = 0; i < length; i++) {
            const nextWords = this.transitions.get(current);
            if (!nextWords) break;

            const nextWord = nextWords[Math.floor(Math.random() * nextWords.length)];
            result.push(nextWord);
            current = nextWord;
        }

        return result.join(' ');
    }
}

module.exports = MarkovChain;
