// a programação imperativa é uma maneira de escrever
// códigos com foco em detalhes, ou seja, uma abordagem 
// que se preocupa em como as tarefas serã executadas.

const _users = ["Lucas", "Alice", "Aghata"];
   const newUser = [];
   for (let i = 0; i < _users.length; i++) {
     newUser.push(_users[i])
  }



// Já a programação declarativa tem como princípio 
// o foco em quais tarefas serão executadas pelo
// runtime, relevando o "como" da atividade.

const _users = ["Lucas", "Alice", "Aghata"];
const newUser = _users.map(item => item);
