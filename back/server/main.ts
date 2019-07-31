import express from 'express';
import * as bodyParser from 'body-parser';

import { UsuariosRutas } from './http/usuarios/rutas';
import { JuegoRutas } from './http/juegos/rutas';
import { ImagenesRutas } from './http/imagenes/rutas';
import { CategoriasRutas } from './http/categorias/rutas';
import { FavoritosRutas } from './http/favoritos/rutas';
import { AuthRutas } from './http/auth/rutas';

export class Main {
  public static app = express();

  constructor() {
    // Main.app = express();
    // this.config();
  }

  /**
   * config
   */
  public static config(): void {
    Main.app.use(bodyParser.json());
    Main.app.use(bodyParser.urlencoded({ extended: false }));
    Main.configRutas();
  }

  /**
   * configRutas
   */
  public static configRutas() {
    Main.app.use(new UsuariosRutas().ruteador);
    Main.app.use(new JuegoRutas().ruteador);
    Main.app.use(new ImagenesRutas().ruteador);
    Main.app.use(new FavoritosRutas().ruteador);
    Main.app.use(new CategoriasRutas().ruteador);
    Main.app.use(new AuthRutas().ruteador);
  }

}

export default Main;