import express = require('express');
import { FotosControlador } from './controlador';

export class FotosRutas {

  public controlador: FotosControlador;
  public ruteador: any;

  constructor() {
    this.controlador = new FotosControlador();
    this.ruteador = express.Router();
    this.configRutas();
  }

  /**
   * configRutas
   */
  public configRutas() {
    this.ruteador.route('/fotos')
      .post(this.controlador.crear)
      .get(this.controlador.buscar);
    this.ruteador.route('/fotos/:id')
      .get(this.controlador.buscar)
      .put(this.controlador.actualizar)
      .delete(this.controlador.eliminar);
  }

}