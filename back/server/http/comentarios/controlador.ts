import { Response, Request, NextFunction } from "express-serve-static-core";

import { Comentarios } from "./modelo";
export class ComentariosControlador {
  public crear = (req: Request, res: Response, next: NextFunction) => {
    Comentarios.create(req.body)
      .then((r) => {
        res.status(200)
          .jsonp(r)
      })
  }

  public buscar = (req: Request, res: Response, next: NextFunction) => {
    if (req.params.id) {
      Comentarios.findByPk(req.params.id)
        .then((r) => {
          res.status(200)
            .jsonp(r)
        })
    } else {
      Comentarios.findAll()
        .then((r) => {
          res.status(200)
            .jsonp(r)
        })
    }
  }

  public actualizar = (req: Request, res: Response, next: NextFunction) => {
    Comentarios.update(req.body, { where: { id: req.params.id } })
      .then((r) => {
        res.status(200)
          .jsonp(r)
      })
  }

  public borrar = (req: Request, res: Response, next: NextFunction) => {
    Comentarios.destroy({ where: { id: req.params.id } })
      .then((r) => {
        res.status(200)
          .jsonp(r)
      })
  }

}