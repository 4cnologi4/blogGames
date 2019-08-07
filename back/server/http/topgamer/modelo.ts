import { Table, Model, Column, BelongsTo, ForeignKey } from "sequelize-typescript";
import Gamer from "../gamer/modelo";
import Usuarios from "../usuarios/modelo";

@Table
export default class TopGamer extends Model<TopGamer> {
  @Column({primaryKey:true, autoIncrement:true})
  id: number;

  @Column
  estrellas: string;

  @ForeignKey(() => Usuarios as any)
  idUsuario: number;
  @BelongsTo(() => Usuarios as any)
  usuario: Usuarios;

  @ForeignKey(() => Gamer as any)
  idGamer: number;
  gamer: Gamer;
}