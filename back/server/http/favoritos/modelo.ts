import { Table, Column, Model, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { Usuarios } from '../usuarios/modelo';
import { Juego } from '../juegos/modelo';

@Table
export default class Favoritos extends Model<Favoritos> {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column
  estrellas: number;

  @ForeignKey(() => Usuarios as any)
  idUsuarios: number;
  @BelongsTo(() => Usuarios as any)
  usuarios: Usuarios;

  @ForeignKey(() => Juego as any)
  idJuego: number;
  @BelongsTo(() => Juego as any)
  juego: Juego;
}

export { Favoritos }