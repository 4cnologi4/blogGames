import { Request, Response, NextFunction } from "express-serve-static-core";
import { Consolas } from "./modelo";

export class ConsolasControlador {

  public crear = (req: Request, res: Response, next: NextFunction) => {
    Consolas.create(req.body)
      .then((r) => {
        res.status(200)
          .jsonp(r)
      })
  }

  public buscar = (req: Request, res: Response, next: NextFunction) => {
    if (req.params.id) {
      Consolas.findByPk(req.params.id)
        .then((r) => {
          res.status(200)
            .jsonp(r)
        })
    } else {
      Consolas.findAll()
        .then((r) => {
          res.status(200)
            .jsonp(r)
        })
    }
  }

  public actualizar = (req: Request, res: Response, next: NextFunction) => {
    Consolas.update(req.body, { where: { id: req.params.id } })
      .then((r) => {
        res.status(200)
          .jsonp(r)
      })
  }

  public borrar = (req: Request, res: Response, next: NextFunction) => {
    Consolas.destroy({ where: { id: req.params.id } })
      .then((r) => {
        res.status(200)
          .jsonp(r)
      })
  }

}