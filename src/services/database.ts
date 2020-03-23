import { config } from "dotenv";
import mongoose from "mongoose";

config();

const databaseUrl = process.env.DATABASE_URL;

const connectToDatabase = () => {
  mongoose.connect(`${databaseUrl}`, {
    useNewUrlParser: true
  });

  mongoose.connection.on("connected", () => {
    console.log(`[*] Aplicação conectada com sucesso`);
  });

  mongoose.connection.on("error", err => {
    console.log(`[*] Erro na conexão com banco de dados: ${err}`);
  });

  mongoose.connection.on("disconnected", err => {
    console.log(`[*] Aplicação desconectada do banco de dados: ${err}`);
  });
};

export default connectToDatabase;
