import { Column, Table, Model, BelongsTo, ForeignKey } from "sequelize-typescript";
import Usuarios from "../usuarios/modelo";

@Table
export default class Fotos extends Model<Fotos> {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column
  url: string;

  @ForeignKey(() => Usuarios as any)
  idUsuario: number;
  @BelongsTo(() => Usuarios as any)
  usuario: Usuarios;
}

export { Fotos }