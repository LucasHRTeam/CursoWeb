// a exemplo da função .forEach dos objetos,
// crie uma nova função com essa mesma finalidade 
// usando herança.

Array.prototype.newForEach = function(callback) {
   for (let i = 0; i < this.length; i++) {
     callback(this[i], i, this)
  }
}


const idUser = ["231019", "575942", "34564"]
   .newForEach(item => console.log(item))
