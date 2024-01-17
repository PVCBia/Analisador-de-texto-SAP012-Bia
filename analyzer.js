const analyzer = {

  //esta função deve retornar a contagem de palavras 
  //encontradas no parâmetro `text` do tipo`string`.
  getWordCount: (text) => {
    const words = text.trim().split(' '); 
    return words.length;
    //remove os espaços em branco e divede a string em palavras
  },

  //esta função deve retornar a contagem de caracteres 
  //encontrados no parâmetro `text` do tipo`string`.
  getCharacterCount: (text) => {
    return text.length;
    //contagem total de caracteres em uma string usando
    //a propriedade length
  },

  //Esta função deve retornar a contagem de caracteres 
  //excluindo espaços e sinais de pontuação encontrados 
  //no parâmetro `text` do tipo`string`.
  getCharacterCountExcludingSpaces: (text) => {
    const characters = text.replace(/[^a-zA-Z0-9]/g, '');
    return characters.length;
    //número de caracteres em uma string, excluindo espaços
    ///e sinais de pontuação
    //[^ a - zA - Z0 - 9] / g para substituir todos os
    //caracteres que não são letras ou números por uma string vazia
    //retorna o comprimento da string
  },

  //esta função deve retornar quantos números estão no
  //parâmetro `text` do tipo`string`.
  getNumberCount: (text) => {
    const numbers = text.match(/\b\d+(\.\d+)?\b/g);
    if (numbers) {
      return numbers.length;
    } else {
      return 0;
    }
    //text.match(/\b\d+(\.\d+)?\b/g); - usa uma expressão regular
    //para encontrar todos os números na string, podem 
    //incluir inteiros ou números decimais / \b - indica fronteiras
    //de palavras para que números parciais não sejam incluídos
    
    //if (numbers) { ... } else { ... } - verifica se foram
    //encontrados números na string
    //return numbers.length - retorna a quantidade de números
    //encontrados na string
    //se nenhum número foi encontrado na string, a função retorna 0
    
    //a função retorna o número de ocorrências de números na
    //string ou 0 se nenhum número for encontrado
  },

  //esta função deve retornar a soma de todos os números
  //encontrados no parâmetro `text` do tipo`string`.
  getNumberSum: (text) => {
    const numbers = text.match(/\b\d+(\.\d+)?\b/g);
    if (numbers) {
      let sum = 0;
      for (let i = 0; i < numbers.length; i++) {
        sum += Number(numbers[i]);
      }
      return sum;
    } else {
      return 0;
    }
    // text.match(/\b\d+(\.\d+)?\b/g) - usa uma expressão regular
    //para encontrar todos os númerosna string, podem incluir
    //inteiros ou números decimais / \b - indica fronteiras
    //de palavras para que números parciais não sejam incluídos.

    // if/else - Verifica se foram encontrados números na string
    // let sum = 0;: Inicializa uma variável sum para armazenar a
    //soma dos números.
    // for (let i = 0; i < numbers.length; i++)
    //{ sum += Number(numbers[i]); }
    //itera sobre os números encontrados, converte cada número 
    //para o tipo Number e os adiciona à variável sum.
    
    //a função retorna a soma dos números encontrados na string
    //ou 0 se nenhum número for encontrado
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
  },
  //calcula o comprimento médio das palavras em uma string
  //divide a string em palavras e, em seguida, calcula a soma
  //dos comprimentos das palavras e a divide pelo número total
  //de palavraspara obter a média
  //o resultado é então arredondado para duas casas decimais
    
};

export default analyzer;