import express = require('express');
import { AuthControlador } from './controlador';


export class AuthRutas {

  public controlador: AuthControlador;
  public ruteador: any;

  constructor() {
    this.controlador = new AuthControlador();
    this.ruteador = express.Router();
    this.configRutas();
  }

  /**
   * configRutas
   */
  public configRutas() {
    this.ruteador.route('/login')
      .post(this.controlador.login);
    this.ruteador.route('/singup')
      .post(this.controlador.signup);
  }

}