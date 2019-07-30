import { Request, Response, NextFunction } from 'express-serve-static-core';

import { Usuarios } from './modelo';

export class UsuariosControlador {

  public crear = (req: Request, res: Response, next: NextFunction) => {
    Usuarios.create(req.body)
      .then((r) => {
        res.status(200)
          .jsonp(r)
      });
  }

  public buscar = (req: Request, res: Response, next: NextFunction) => {
    if (req.params.id) {
      Usuarios.findOne({ where: { id: req.params.id } })
        .then((r) => {
          res.status(200)
            .jsonp(r)
        });
    } else {
      Usuarios.findAll()
        .then((r) => {
          res.status(200)
            .jsonp(r)
        });
    }
  }

  public actualizar = (req: Request, res: Response, next: NextFunction) => {
    Usuarios.update(req.body, { where: { id: req.params.id } })
      .then((r) => {
        res.status(200)
          .jsonp(r)
      });
  }

  public borrar = (req: Request, res: Response, next: NextFunction) => {
    Usuarios.destroy({ where: { id: req.params.id } })
      .then((r) => {
        res.status(200)
          .jsonp(r)
      })
  }

}