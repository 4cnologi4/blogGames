import { Table, Column, Model, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { Juego } from '../juegos/modelo';

@Table
export default class Imagenes extends Model<Imagenes> {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column
  url: string;

  @ForeignKey(() => Juego as any)
  idJuego: number;
  @BelongsTo(() => Juego as any)
  juego: Juego;

}

export { Imagenes }