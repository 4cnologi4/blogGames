import express = require('express');
import { GamerControlador } from "./controlador";

export class GamerRutas {

  public controlador: GamerControlador;
  public ruteador: any;

  constructor() {
    this.controlador = new GamerControlador();
    this.ruteador = express.Router();
    this.configRutas();
  }

  /**
   * configRutas
   */
  public configRutas() {
    this.ruteador.route('/gamers')
      .post(this.controlador.crear)
      .get(this.controlador.buscar);
    this.ruteador.route('/gamers/:id')
      .get(this.controlador.buscar)
      .put(this.controlador.actualizar)
      .delete(this.controlador.borrar);
  }

}