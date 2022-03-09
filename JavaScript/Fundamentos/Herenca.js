
// a herança em JS pode ser descrita em duas situações:
// a primeira é quando você tem um objeto literal e
// precisa herdar conteúdos de outros objetos literais.
// Neste  caso, a linguagem disponibiliza uma propriedade chamada __proto__.
// Ela é responsável por atribuir as propriedades para o novo objeto formado.

const dataFromRequest = {
   timestamp: 165456788,
   urlEncoded: true,
   method: 'POST'
 }


const insertDataInDataset = {
   __proto__: dataFromRequest,
   platform: 'linux',
   hosting: 'heroku'
 }

// Desta forma o objeto "insertDataInDataset" herda
// as propriedades  do objeto "dataFromRequest".


// A segunda maneira é quando você tem uma Classe pai
// e precisa acessar tudo o que ela oferece, mas atraves
// de outra Classe.


class ConnectToApp {
   constructor() {
    this.alreadyRegister = data => true;
   }
 }


// Agora a Classe seguinda irá herdar as configurações 
// da Classe "ConnectToApp", com o uso da keyword "extends".

class InicializeDatabase extends ConnectToApp {
   constructor() {
   this.verifyConnection = async () => {
    if (!this.alreadyRegister) throw 'Client não iniciado'
    }
  }
}
