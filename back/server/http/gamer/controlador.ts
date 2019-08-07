import { Request, NextFunction, Response } from "express-serve-static-core";
import Gamer from "./modelo";

export class GamerControlador {

  public crear = (req: Request, res: Response, next: NextFunction) => {
    Gamer.create(req.body)
      .then((r) => {
        res.status(200)
          .jsonp(r)
      })
  }

  public buscar = (req: Request, res: Response, next: NextFunction) => {
    if (req.params.id) {
      Gamer.findByPk(req.params.id)
        .then((r) => {
          res.status(200)
            .jsonp(r)
        })
    } else {
      Gamer.findAll()
        .then((r) => {
          res.status(200)
            .jsonp(r)
        })
    }
  }

  public actualizar = (req: Request, res: Response, next: NextFunction) => {
    Gamer.update(req.body, { where: { id: req.params.id } })
      .then((r) => {
        res.status(200)
          .jsonp(r)
      })
  }

  public borrar = (req: Request, res: Response, next: NextFunction) => {
    Gamer.destroy({ where: { id: req.params.id } })
      .then((r) => {
        res.status(200)
          .jsonp(r)
      })
  }

}