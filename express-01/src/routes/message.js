import { Router } from "express";
import { v4 as uuidv4 } from "uuid";

const router = Router();

// Lista todas as mensagens
router.get("/", (req, res) => {
  return res.send(Object.values(req.context.models.messages));
});

// Obter uma mensagem específica
router.get("/:messageId", (req, res) => {
  return res.send(req.context.models.messages[req.params.messageId]);
});

// Cria uma nova mensagem
router.post("/", (req, res) => {
  const id = uuidv4();
  const message = {
    id,
    text: req.body.text,
    userId: req.context.me.id,
  };

  req.context.models.messages[id] = message;

  return res.send(message);
});

// Exclui uma mensagem 
router.delete("/:messageId", (req, res) => {
  const { [req.params.messageId]: message, ...otherMessages } =
    req.context.models.messages;

  req.context.models.messages = otherMessages;

  return res.send(message);
});

export default router;