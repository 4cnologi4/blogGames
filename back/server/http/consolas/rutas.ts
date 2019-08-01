import express = require('express');
import { ConsolasControlador } from './controlador';

export class ConsolasRutas {

  public controlador: ConsolasControlador;
  public ruteador: any;

  constructor() {
    this.controlador = new ConsolasControlador();
    this.ruteador = express.Router();
    this.configRutas();
  }

  /**
   * configRutas
   */
  public configRutas() {
    this.ruteador.route('/consolas')
      .post(this.controlador.crear)
      .get(this.controlador.buscar)
    this.ruteador.route('/consolas/:id')
      .get(this.controlador.buscar)
      .put(this.controlador.actualizar)
      .delete(this.controlador.borrar)
  }
}