import express = require('express');
import { ImagenesControlador } from './controlador';

export class ImagenesRutas {
  public controlador: ImagenesControlador;
  public ruteador: any;

  constructor() {
    this.controlador = new ImagenesControlador();
    this.ruteador = express.Router();
    this.configRutas();
  }

  /**
   * configRutas
   */
  public configRutas() {
    this.ruteador.route('/imagenes')
      .get(this.controlador.buscar)
      .post(this.controlador.crear)
    this.ruteador.route('/imagenes/:id')
      .get(this.controlador.buscar)
      .put(this.controlador.actualizar)
      .delete(this.controlador.borrar)
  }

}