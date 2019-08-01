import { Table, Model, Column, ForeignKey, BelongsTo } from "sequelize-typescript";
import Usuarios from "../usuarios/modelo";
import Juego from "../juegos/modelo";

@Table
export default class Comentarios extends Model<Comentarios> {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column
  descripcion: string;

  @Column
  fecha_post: Date;

  @ForeignKey(() => Usuarios as any)
  idUsuarios: number;
  @BelongsTo(() => Usuarios as any)
  usuario: Usuarios;

  @ForeignKey(() => Juego as any)
  idJuego: number;
  @BelongsTo(() => Juego as any)
  Juego: Juego;
}

export { Comentarios }