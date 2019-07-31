import { Request, Response, NextFunction } from 'express-serve-static-core';

import { Imagenes } from './modelo';

export class ImagenesControlador {

  public crear = (req: Request, res: Response, next: NextFunction) => {
    Imagenes.create(req.body)
      .then((r) => {
        res.status(200)
          .jsonp(r)
      });
  }

  public buscar = (req: Request, res: Response, next: NextFunction) => {
    if (req.params.id) {
      Imagenes.findByPk(req.params.id)
        .then((r) => {
          res.status(200)
            .jsonp(r)
        });
    } else {
      Imagenes.findAll()
        .then((r) => {
          res.status(200)
            .jsonp(r)
        });
    }
  }

  public actualizar = (req: Request, res: Response, next: NextFunction) => {
    Imagenes.update(req.body, { where: { id: req.params.id } })
      .then((r) => {
        res.status(200)
          .jsonp(r)
      });
  }

  public borrar = (req: Request, res: Response, next: NextFunction) => {
    Imagenes.destroy({ where: { id: req.params.id } })
      .then((r) => {
        res.status(200)
          .jsonp(r)
      });
  }

}