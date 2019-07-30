import { Router } from 'express';
import express = require('express');

import { UsuariosControlador } from './controlador';

export class UsuariosRutas {

  public controlador: UsuariosControlador;
  public ruteador: any;

  constructor() {
    this.controlador = new UsuariosControlador();
    this.ruteador = express.Router();
    this.configRutas();
  }

  /**
   * configRutas
   */
  public configRutas() {
    this.ruteador.route('/usuarios')
      .post(this.controlador.crear)
      .get(this.controlador.buscar);
    this.ruteador.route('/usuarios/:id')
      .get(this.controlador.buscar)
      .delete(this.controlador.borrar)
      .put(this.controlador.actualizar)
  }

}