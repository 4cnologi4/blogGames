import { Request, Response, NextFunction } from 'express-serve-static-core';

import { Categorias } from './modelo';

export class CategoriasControlador {

  public crear = (req: Request, res: Response, next: NextFunction) => {
    Categorias.create(req.body)
      .then((r) => {
        res.status(200)
          .jsonp(r)
      });
  }

  public buscar = (req: Request, res: Response, next: NextFunction) => {
    if (req.params.id) {
      Categorias.findByPk(req.params.id)
        .then((r) => {
          res.status(200)
            .jsonp(r)
        });
    } else {
      Categorias.findAll()
        .then((r) => {
          res.status(200)
            .jsonp(r)
        });
    }
  }

  public actualizar = (req: Request, res: Response, next: NextFunction) => {
    Categorias.update(req.body, { where: { id: req.params.id } })
      .then((r) => {
        res.status(200)
          .jsonp(r)
      });
  }

  public borrar = (req: Request, res: Response, next: NextFunction) => {
    Categorias.destroy({ where: { id: req.params.id } })
      .then((r) => {
        res.status(200)
          .jsonp(r)
      })
  }

}