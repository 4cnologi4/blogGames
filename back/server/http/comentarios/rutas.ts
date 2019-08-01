import express = require('express');
import { ComentariosControlador } from './controlador';

export class ComentariosRutas {
  public controlador: ComentariosControlador;
  public ruteador: any;

  constructor() {
    this.controlador = new ComentariosControlador();
    this.ruteador = express.Router();
    this.configRutas();
  }

  public configRutas() {
    this.ruteador.route('/comentarios')
      .post(this.controlador.crear)
      .get(this.controlador.buscar);
    this.ruteador.route('/comentarios/:id')
      .get(this.controlador.buscar)
      .put(this.controlador.actualizar)
      .delete(this.controlador.borrar)
  }
}