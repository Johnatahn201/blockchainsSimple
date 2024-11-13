const fs = require('fs');
const MarkovChain = require('./markovChain');

const main = () => {
    const text = fs.readFileSync('input.txt', 'utf-8');
    const markovChain = new MarkovChain();
    markovChain.train(text);

    const startWord = 'начало'; // Замените на слово, с которого хотите начать
    const generatedText = markovChain.generate(startWord, 10);
    console.log(`Сгенерированный текст: ${generatedText}`);
};

main();
