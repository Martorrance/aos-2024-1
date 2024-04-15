// Definindo objetos para representar usuários e mensagens
let users = {
  1: {
    id: "1",
    username: "Alice Johnson",
  },
  2: {
    id: "2",
    username: "Bob Smith",
  },
};

let messages = {
  1: {
    id: "1",
    text: "Hi there!",
    userId: "1",
  },
  2: {
    id: "2",
    text: "Goodbye!",
    userId: "2",
  },
};

// Exportando os objetos users e messages como parte do objeto models
export const models = {
  users,
  messages,
};