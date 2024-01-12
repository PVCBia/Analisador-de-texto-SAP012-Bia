import analyzer from './analyzer.js';

//chamar os elementos
const textarea = document.querySelector('textarea');
const wordCountElement = document.querySelector('[data-testid="word-count"]');
const characterCountElement = document.querySelector('[data-testid="character-count"]');
const characterNoSpacesCountElement = document.querySelector('[data-testid="character-no-spaces-count"]');
const numberCountElement = document.querySelector('[data-testid="number-count"]');
const numberSumElement = document.querySelector('[data-testid="number-sum"]');
const wordLengthAverageElement = document.querySelector('[data-testid="word-length-average"]');
const resetButton = document.getElementById('reset-button');

//espreita // ação
textarea.addEventListener('input', () => {
  const text = textarea.value;

  const wordCount = analyzer.getWordCount(text);
  wordCountElement.textContent = `Contagem de palavras: ${wordCount}`;

  const characterCount = analyzer.getCharacterCount(text);
  characterCountElement.textContent = `Contagem de caracteres: ${characterCount}`;

  const characterNoSpacesCount = analyzer.getCharacterCountExcludingSpaces(text);
  characterNoSpacesCountElement.textContent = `Contagem sem espaços e sinais de pontuação: ${characterNoSpacesCount}`;

  const numberCount = analyzer.getNumberCount(text);
  numberCountElement.textContent = `Contagem de números: ${numberCount}`;

  const numberSum = analyzer.getNumberSum(text);
  numberSumElement.textContent = `Contagem da soma total dos números: ${numberSum}`;

  const wordLengthAverage = analyzer.getAverageWordLength(text);
  wordLengthAverageElement.textContent = `Contagem do comprimento das palavras: ${wordLengthAverage}`;
})

//espreita // ação
resetButton.addEventListener('click', () => {
  textarea.value = '';
  wordCountElement.textContent = 'Contagem de palavras:';
  characterCountElement.textContent = 'Contagem de caracteres:';
  characterNoSpacesCountElement.textContent = 'Contagem sem espaços e sinais de pontuação:';
  numberCountElement.textContent = 'Contagem de números:';
  numberSumElement.textContent = 'Contagem da soma total dos números:';
  wordLengthAverageElement.textContent = 'Contagem do comprimento das palavras:';
});
