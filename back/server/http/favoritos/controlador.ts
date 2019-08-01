import { Request, Response, NextFunction } from 'express-serve-static-core';

import { Favoritos } from './modelo';

export class FavoritosControlador {

  public crear = (req: Request, res: Response, next: NextFunction) => {
    Favoritos.create(req.body)
      .then((r) => {
        res.status(200)
          .jsonp(r)
      });
  }

  public buscar = (req: Request, res: Response, next: NextFunction) => {
    if (req.params.id) {
      Favoritos.findByPk(req.params.id)
        .then((r) => {
          res.status(200)
            .jsonp(r)
        });
    } else {
      Favoritos.findAll()
        .then((r) => {
          res.status(200)
            .jsonp(r)
        });
    }
  }

  public actualizar = (req: Request, res: Response, next: NextFunction) => {
    Favoritos.update(req.body, { where: { id: req.params.id } })
      .then((r) => {
        res.status(200)
          .jsonp(r)
      });
  }

  public borrar = (req: Request, res: Response, next: NextFunction) => {
    Favoritos.destroy({ where: { id: req.params.id } })
      .then((r) => {
        res.status(200)
          .jsonp(r)
      })
  }

}