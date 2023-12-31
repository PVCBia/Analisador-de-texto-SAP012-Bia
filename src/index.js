import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`.


document.querySelector('textarea').addEventListener('input', () => {
  const text = document.querySelector('textarea').value;
  const wordCount = analyzer.getWordCount(text);
  document.querySelector('[data-testid="word-count"]').textContent=`Contagem de palavras:${wordCount}`;
  const characterCount = analyzer.getCharacterCount(text);
  document.querySelector('[data-testid="character-count"]').textContent = `Contagem de caracteres: ${characterCount}`;
  const characterNoSpacesCount = analyzer.getCharacterCountExcludingSpaces(text);
  document.querySelector('[data-testid="character-no-spaces-count"]').textContent = `Contagem sem espaços e sinais de pontuação: ${characterNoSpacesCount}`;
  const numberCount = analyzer.getNumberCount(text);
  document.querySelector('[data-testid="number-count"]').textContent = `Contagem de números: ${numberCount}`;
  const numberSum = analyzer.getNumberSum(text);
  document.querySelector('[data-testid="number-sum"]').textContent = `Contagem da soma total dos números: ${numberSum}`;
  const wordLengthAverage = analyzer.getAverageWordLength(text);
  document.querySelector('[data-testid="word-length-average"]').textContent = `Contagem do comprimento das palavras: ${wordLengthAverage}`;
})


document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('reset-button');
  button.addEventListener('click', () => {
    document.querySelector('textarea').value = '';
    document.querySelector('[data-testid="word-count"]').textContent = 'Contagem de palavras:';
    document.querySelector('[data-testid="character-count"]').textContent = 'Contagem de caracteres:';
    document.querySelector('[data-testid="character-no-spaces-count"]').textContent = 'Contagem sem espaços e sinais de pontuação:';
    document.querySelector('[data-testid="number-count"]').textContent = 'Contagem de números:';
    document.querySelector('[data-testid="number-sum"]').textContent = 'Contagem da soma total dos números:';
    document.querySelector('[data-testid="word-length-average"]').textContent = 'Contagem do comprimento das palavras:';
  })
})