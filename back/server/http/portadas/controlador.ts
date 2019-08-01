import { Request, Response, NextFunction } from "express-serve-static-core";

import { Portada } from "./modelo";

export class PortadaControlador {

  public crear = (req: Request, res: Response, next: NextFunction) => {
    Portada.create(req.body)
      .then((r) => {
        res.status(200)
          .jsonp(r)
      })
  }

  public buscar = (req: Request, res: Response, next: NextFunction) => {
    if (req.params.id) {
      Portada.findByPk(req.params.id)
        .then((r) => {
          res.status(200)
            .jsonp(200)
        })
    } else {
      Portada.findAll()
        .then((r) => {
          res.status(200)
            .jsonp(r)
        })
    }
  }

  public actualizar = (req: Request, res: Response, next: NextFunction) => {
    Portada.update(req.body, { where: { id: req.params.id } })
      .then((r) => {
        res.status(200)
          .jsonp(r)
      })
  }

  public borrar = (req: Request, res: Response, next: NextFunction) => {
    Portada.destroy({ where: { id: req.params.id } })
      .then((r) => {
        res.status(200)
          .jsonp(r)
      })
  }

}