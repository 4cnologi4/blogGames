import { Router } from 'express';
import express = require('express');

import { CategoriasControlador } from './controlador';

export class CategoriasRutas {

  public controlador: CategoriasControlador;
  public ruteador: any;

  constructor() {
    this.controlador = new CategoriasControlador();
    this.ruteador = express.Router();
    this.configRutas();
  }

  /**
   * configRutas
   */
  public configRutas() {
    this.ruteador.route('/categorias')
      .post(this.controlador.crear)
      .get(this.controlador.buscar);
    this.ruteador.route('/categorias/:id')
      .get(this.controlador.buscar)
      .delete(this.controlador.borrar)
      .put(this.controlador.actualizar)
  }

}