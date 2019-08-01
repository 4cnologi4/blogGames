import express from 'express';
import * as bodyParser from 'body-parser';

import { AuthRutas } from './http/auth/rutas';
import { CategoriasRutas } from './http/categorias/rutas';
import { ConsolasRutas } from 'http/consolas/rutas';
import { ComentariosRutas } from './http/comentarios/rutas';
import { FavoritosRutas } from './http/favoritos/rutas';
import { FotosRutas } from './http/fotos/rutas';
import { ImagenesRutas } from './http/imagenes/rutas';
import { JuegoRutas } from './http/juegos/rutas';
import { PortadaRutas } from 'http/portadas/rutas';
import { UsuariosRutas } from './http/usuarios/rutas';

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
    Main.app.use(new AuthRutas().ruteador);
    Main.app.use(new CategoriasRutas().ruteador);
    Main.app.use(new ComentariosRutas().ruteador);
    Main.app.use(new ConsolasRutas().ruteador);
    Main.app.use(new FavoritosRutas().ruteador);
    Main.app.use(new FotosRutas().ruteador);
    Main.app.use(new JuegoRutas().ruteador);
    Main.app.use(new ImagenesRutas().ruteador);
    Main.app.use(new PortadaRutas().ruteador);
    Main.app.use(new UsuariosRutas().ruteador);
  }

}

export default Main;