import { Router } from "express";

const router = Router();

// Rota raiz
router.get("/", (req, res) => {
  return res.send("Welcome to the user API!");
});

// Rota para listar todos os usuários
router.get("/", (req, res) => {
  return res.send(Object.values(req.context.models.users));
});

// Rota para obter um usuário específico por ID
router.get("/:userId", (req, res) => {
  const userId = req.params.userId;

  return res.send(req.context.models.users[userId]);
});

// Rota para criar um novo usuário
router.post("/", (req, res) => {
  const newUser = req.body;
  // Lógica para criar o novo usuário no banco de dados
  return res.send(`User created: ${JSON.stringify(newUser)}`);
});

// Rota para atualizar um usuário existente por ID
router.put("/:userId", (req, res) => {
  const userId = req.params.userId;
  // Lógica para atualizar o usuário no banco de dados
  return res.send(`User with ID ${userId} updated`);
});

// Rota para excluir um usuário existente por ID
router.delete("/:userId", (req, res) => {
  const userId = req.params.userId;

  //excluir o usuário no banco de dados
  return res.send(`User with ID ${userId} deleted`);
});

export default router;