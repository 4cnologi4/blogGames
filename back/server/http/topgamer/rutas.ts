import { Router } from 'express';
import express = require('express');

import { TopGamerControlador } from './controlador';

export class TopGamerRutas {

  public controlador: TopGamerControlador;
  public ruteador: any;

  constructor() {
    this.controlador = new TopGamerControlador();
    this.ruteador = express.Router();
    this.configRutas();
  }

  /**
   * configRutas
   */
  public configRutas() {
    this.ruteador.route('/topgamer')
      .post(this.controlador.crear)
      .get(this.controlador.buscar);
    this.ruteador.route('/usuarios/:id')
      .get(this.controlador.buscar)
      .delete(this.controlador.borrar)
      .put(this.controlador.actualizar)
  }

}