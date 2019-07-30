import { Request, Response, NextFunction } from 'express-serve-static-core';

import { Juego } from './modelo';

export class JuegoControlador {

  public crear = (req: Request, res: Response, next: NextFunction) => {
    Juego.create(req.body)
      .then((r) => {
        res.status(200)
          .jsonp(r)
      });
  }

  public buscar = (req: Request, res: Response, next: NextFunction) => {
    if (req.params.id) {
      Juego.findOne({ where: { id: req.params.id } })
        .then((r) => {
          res.status(200)
            .jsonp(r)
        });
    } else {
      Juego.findAll()
        .then((r) => {
          res.status(200)
            .jsonp(r)
        });
    }
  }

  public actualizar = (req: Request, res: Response, next: NextFunction) => {
    Juego.update(req.body, { where: { id: req.params.id } })
      .then((r) => {
        res.status(200)
          .jsonp(r)
      });
  }

  public borrar = (req: Request, res: Response, next: NextFunction) => {
    Juego.destroy({ where: { id: req.params.id } })
      .then((r) => {
        res.status(200)
          .jsonp(r)
      });
  }

}