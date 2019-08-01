import express = require('express');
import { PortadaControlador } from './controlador';

export class PortadaRutas {

  public controlador: PortadaControlador;
  public ruteador: any;

  constructor() {
    this.controlador = new PortadaControlador();
    this.ruteador = express.Router();
    this.configRutas();
  }

  /**
   * configRutas
   */
  public configRutas() {
    this.ruteador.route('/portada')
      .post(this.controlador.crear)
      .get(this.controlador.buscar)
    this.ruteador.route('/portada/:id')
      .get(this.controlador.buscar)
      .put(this.controlador.actualizar)
      .delete(this.controlador.borrar)
  }

}