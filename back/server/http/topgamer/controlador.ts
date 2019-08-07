import { Request, Response, NextFunction } from "express-serve-static-core";
import TopGamer from "./modelo";

export class TopGamerControlador {

  public crear = (req: Request, res: Response, next: NextFunction) => {
    TopGamer.create(req.body)
      .then((r) => {
        res.status(200)
          .jsonp(r)
      })
  }

  public buscar = (req: Request, res: Response, next: NextFunction) => {
    if (req.params.id) {
      TopGamer.findByPk(req.params.id)
        .then((r) => {
          res.status(200)
            .jsonp(r)
        })
    } else {
      TopGamer.all()
        .then((r) => {
          res.status(200)
            .jsonp(r)
        })
    }
  }

  public actualizar = (req: Request, res: Response, next: NextFunction) => {
    TopGamer.update(req.body, { where: { id: req.params.id } })
      .then((r) => {
        res.status(200)
          .jsonp(r)
      })
  }

  public borrar = (req: Request, res: Response, next: NextFunction) => {
    TopGamer.destroy({ where: { id: req.params.id } })
      .then((r) => {
        res.status(200)
          .jsonp(r)
      })
  }

}