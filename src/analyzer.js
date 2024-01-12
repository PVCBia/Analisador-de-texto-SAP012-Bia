const analyzer = {

  //esta função deve retornar a contagem de palavras 
  //encontradas no parâmetro `text` do tipo`string`.
  getWordCount: (text) => {
    const words = text.trim().split(' '); //remove os espaços em branco e divede a string em palavras
    return words.length;
  //remove os espaços em branco e divede a string em palavras
  },
  //esta função deve retornar a contagem de caracteres 
  //encontrados no parâmetro `text` do tipo`string`.
  getCharacterCount: (text) => {
    return text.length; //contagem total de caracteres em uma string usando a propriedade length
  },
  //Esta função deve retornar a contagem de caracteres 
  //excluindo espaços e sinais de pontuação encontrados 
  //no parâmetro `text` do tipo`string`.
  getCharacterCountExcludingSpaces: (text) => {
    const characters = text.replace(/[^a-zA-Z0-9]/g, '');
    return characters.length;
    //número de caracteres em uma string, excluindo espaços e sinais de pontuação
    ///[^a-zA-Z0-9]/g para substituir todos os caracteres que não
    //são letras ou números por uma string vazia
    //retorna o comprimento da string
  },



  //esta função deve retornar quantos números estão no
  //parâmetro `text` do tipo`string`.
  
  getNumberCount: (text) => {
    const numbers = text.split(/\D/);
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] >= '0' && numbers[i] <= '9') {
        count++;
      }
    }
    return count;
  },

  /*getNumberCount: (text) => {
    const numbers = text.match(/\d+/g) || [];
    return numbers.length;
    //número de ocorrências de números em uma strin
    //  (/\d+/g) para encontrar todos os dígitos na string
    //retorna o comprimento resultante  //array?
  }, */

  //esta função deve retornar a soma de todos os números
  //encontrados no parâmetro `text` do tipo`string`.
  getNumberSum: (text) => {
    const numbers = text.split(/\D/);
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] !== '') {
        sum += parseInt(numbers[i]);
      }
    }
    return sum;
    
    //Calcula a soma de todos os números em uma string
    //usa uma expressão regular semelhante para identificar os números na 
    //string e, em seguida, percorre o array resultante
    //convertendo cada elemento para um número inteiro e somando - os.
  },

  //esta função deve retornar o comprimento médio das 
  //palavras encontradas no parâmetro `text` do tipo`string`.
  getAverageWordLength: (text) => {
    const words = text.trim().split(' ');
    let wordLength = 0;
    for (let i = 0; i < words.length; i++) {
      wordLength += words[i].length;
    }
    const averageWordLength = wordLength / words.length;
    return parseFloat(averageWordLength.toFixed(2));

    //calcula o comprimento médio das palavras em uma string
    //divide a string em palavras e, em seguida, calcula a soma dos 
    //comprimentos das palavras e a divide pelo número total de palavras
    //para obter a média
    //O resultado é então arredondado para duas casas decimais.
  },
};

export default analyzer;

