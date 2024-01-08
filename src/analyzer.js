const analyzer = {  
      //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
  getWordCount: (text) => {
    const words = text.split(' ');
    return words.length;
  },
      //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
  getCharacterCount: (text) => {
    return text.length;
  },
      //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  getCharacterCountExcludingSpaces: (text) => {
    const characters = text.replace(/[^a-zA-Z0-9]/g, '');
    return characters.length;
  },
      //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  getAverageWordLength: (text) => {    
    const words = text.trim().split(' ');
    const wordCount = words.length;
    let wordLength = 0;
    for (let i = 0; i < wordCount; i++) {
      wordLength += words[i].length;
    }
    const averageWordLength = wordLength / wordCount;
    return parseFloat(averageWordLength.toFixed(2));
  },
      //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  getNumberCount: (text) => {
    const numbers = text.split('');
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] >= '0' && numbers[i] <= '9') {
        count++;
      }
    }
    return count;
  },
      //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  getNumberSum: (text) => {
    const numbers = text.split('');
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] >= '0' && numbers[i] <= '9') {
        sum += parseInt(numbers[i]);
      }
    }
    return sum;
  },
};

export default analyzer;