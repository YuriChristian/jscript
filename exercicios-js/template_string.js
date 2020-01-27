const nome = 'açlo'
const concatenacao = 'Olá '+ nome + '!'
const template = `  
    Olá 
      ${nome} ! ` //tem que ser com crase
      console.log(concatenacao, template)

      console.log(` ${1+1} `) //tem que ser com crase

      const up = texto => texto.toUpperCase() // criar "funçao" upercase
      console.log( `  Ei   ${  up  (  'Cuidado'  )  }  `  ) // usar "funçao"