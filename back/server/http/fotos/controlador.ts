import { Request, Response, NextFunction } from 'express-serve-static-core';

import { Fotos } from './modelo';

export class FotosControlador {

  public crear = (req: Request, res: Response, next: NextFunction) => {
    Fotos.create(req.body)
      .then((r) => {
        res.status(200)
          .jsonp(r)
      });
  }

  public buscar = (req: Request, res: Response, next: NextFunction) => {
    if (req.params.id) {
      Fotos.findByPk(req.params.id)
        .then((r) => {
          res.status(200)
            .jsonp(r)
        })
    } else {
      Fotos.findAll()
        .then((r) => {
          res.status(200)
            .jsonp(r)
        })
    }
  }

  public actualizar = (req: Request, res: Response, next: NextFunction) => {
    Fotos.update(req.body, { where: { id: req.params.id } })
      .then((r) => {
        res.status(200)
          .jsonp(r)
      })
  }

  public eliminar = (req: Request, res: Response, next: NextFunction) => {
    Fotos.destroy({ where: { i: req.params.id } })
      .then((r) => {
        res.status(200)
          .jsonp(r)
      })
  }

}