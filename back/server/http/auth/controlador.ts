import passport from 'passport';
import passportLocal from 'passport-local';

import { Usuarios } from '../usuarios/modelo';
import { Request, Response, NextFunction } from 'express-serve-static-core';

const LocalStrategy = passportLocal.Strategy;

export class AuthControlador {

  constructor() {
    this.configPassport();
  }

  public configPassport() {

    passport.serializeUser<any, any>((user, done) => {
      done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
      Usuarios.findOne({ where: { id: id } })
        .then((r) => {
          done(null, r)
        });
    });

    passport.use('login', new LocalStrategy(
      { usernameField: 'nombre', passwordField: 'passwd' }, (nombre, passwd, done) => {
        Usuarios.findOne({ where: { nombre: nombre, passwd: passwd } })
          .then((user) => {
            return user ? done(null, user) : done(null, false);
          });
      })
    );

    passport.use('singup', new LocalStrategy(
      { usernameField: 'nombre', passwordField: 'passwd' }, (nombre, passwd, done) => {
        Usuarios.findOne({ where: { nombre: nombre, passwd: passwd } })
          .then((user) => {
            return user ? done(null, user) : done(null, false);
          })
      })
    );
  }

  public login = (req: Request, res: Response, next: NextFunction) => passport.authenticate('login', (err, user, data) => {
    return user ? res.status(200).jsonp(user) : res.status(200).jsonp('no existe');
  })(req, res, next);

  public signup = (req: Response, res: Response, next: NextFunction) => passport.authenticate('singup', (err, user, data) => {
    return user ? res.status(200).jsonp(user) : res.status(200).jsonp('no existe');
  })(req, res, next);

}