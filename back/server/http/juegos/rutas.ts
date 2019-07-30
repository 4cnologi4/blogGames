import { Router } from 'express';
import express = require('express');
import { JuegoControlador } from './controlador';

export class JuegoRutas {

  public controlador: JuegoControlador;
  public ruteador: any;

  constructor() {
    this.controlador = new JuegoControlador();
    this.ruteador = express.Router();
    this.configRutas();
  }

  /**
   * configRutas
   */
  public configRutas() {
    this.ruteador.route('/juegos')
      .get(this.controlador.buscar)
      .post(this.controlador.crear)
    this.ruteador.route('/juegos/:id')
      .get(this.controlador.buscar)
      .put(this.controlador.actualizar)
      .delete(this.controlador.borrar)
  }

}