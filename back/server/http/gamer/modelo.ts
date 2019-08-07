import { Table, Model, Column, BelongsToMany } from "sequelize-typescript";
import Juego from "http/juegos/modelo";

@Table
export default class Gamer extends Model<Gamer> {


  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column
  nombreGamer: string;

  @Column
  edad: number;

  @Column
  descripcion: string;
  @BelongsToMany(() => Gamer as any, Juego as any)
  gamer: Gamer;
}

export { Gamer }