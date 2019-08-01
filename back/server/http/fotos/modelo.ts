import { Column, Table, Model, BelongsTo } from "sequelize-typescript";
import Usuarios from "../usuarios/modelo";

@Table
export default class Fotos extends Model<Fotos> {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column
  url: string;

  @BelongsTo(() => Usuarios as any)
  usuario: Usuarios;
}

export { Fotos }