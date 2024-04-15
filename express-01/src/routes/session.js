import { Router } from "express";
// Obter informações do usuário atual
const router = Router();

router.get("/", (req, res) => {
  return res.send(req.context.models.users[req.context.me.id]);
});

export default router;
