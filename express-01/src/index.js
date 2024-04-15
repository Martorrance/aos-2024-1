// Configuração do ambiente e importação de dependências
import "dotenv/config";
import cors from "cors";
import express from "express";
import { models } from "./models";
import { routes } from "./routes";

// Cria uma instância do aplicativo Express
const app = express();

// Aplica middlewares para habilitar CORS e o parsing de JSON e dados de formulário
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware para adicionar contexto às requisições
app.use((req, res, next) => {
  // Adiciona os modelos e um usuário fictício ao contexto da requisição
  req.context = { models, me: models.users[1] };
  next();
});

// Define as rotas para diferentes recursos da aplicação
app.use("/session", routes.session);
app.use("/users", routes.user);
app.use("/messages", routes.message);

// Rota de teste para verificar se o servidor está funcionando
app.get("/", (req, res) => {
  return res.send("Hello Express!");
});

// Configura a porta do servidor
const port = process.env.PORT || 3000;

// Inicia o servidor na porta especificada e registra uma mensagem de log
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
