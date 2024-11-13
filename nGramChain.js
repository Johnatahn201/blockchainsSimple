class NGramChain {
    constructor(n) {
        this.n = n;
        this.transitions = new Map();
    }

    train(text) {
        const words = text.split(/\s+/);
        for (let i = 0; i <= words.length - this.n; i++) {
            const nGram = words.slice(i, i + this.n).join(' ');
            const nextWord = words[i + this.n];

            if (!this.transitions.has(nGram)) {
                this.transitions.set(nGram, []);
            }
            this.transitions.get(nGram).push(nextWord);
        }
    }

    generate(start, length) {
        let current = start;
        const result = current.split(' ');

        for (let i = 0; i < length; i++) {
            const nGram = result.slice(-this.n).join(' ');
            const nextWords = this.transitions.get(nGram);
            if (!nextWords) break;

            const nextWord = nextWords[Math.floor(Math.random() * nextWords.length)];
            result.push(nextWord);
        }

        return result.join(' ');
    }
}

module.exports = NGramChain;
