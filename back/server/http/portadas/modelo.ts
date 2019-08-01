import { Table, Model, Column, BelongsTo, ForeignKey } from "sequelize-typescript";
import Juego from "../juegos/modelo";

@Table
export default class Portada extends Model<Portada> {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column
  url_portada: string;

  @ForeignKey(() => Juego as any)
  idJuego: Juego

  @BelongsTo(() => Juego as any)
  juego: Juego;
}

export { Portada }