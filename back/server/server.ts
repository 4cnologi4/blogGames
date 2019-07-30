import Main from './main';
import Conex from './http/conex';

const PORT = 3000;

const con: Conex = new Conex();


Main.config();

Main.app.listen(PORT, () => {
  console.log(`Servidor arriba en puerto ${PORT} `);
});