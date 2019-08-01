import { Router } from 'express';
import express = require('express');

import { FavoritosControlador } from './controlador';

export class FavoritosRutas {

  public controlador: FavoritosControlador;
  public ruteador: any;

  constructor() {
    this.controlador = new FavoritosControlador();
    this.ruteador = express.Router();
    this.configRutas();
  }

  /**
   * configRutas
   */
  public configRutas() {
    this.ruteador.route('/favoritos')
      .post(this.controlador.crear)
      .get(this.controlador.buscar);
    this.ruteador.route('/favoritos/:id')
      .get(this.controlador.buscar)
      .delete(this.controlador.borrar)
      .put(this.controlador.actualizar)
  }

}