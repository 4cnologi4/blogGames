import { Table, Column, Model, BelongsToMany, HasOne } from 'sequelize-typescript';
import { Favoritos } from '../favoritos/modelo';
import { Juego } from '../juegos/modelo';
import Fotos from 'http/fotos/modelo';

@Table
export default class Usuarios extends Model<Usuarios> {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column
  nombre: string;

  @Column
  email: string;

  @Column
  passwd: string;

  @Column
  rol: string;

  @BelongsToMany(() => Juego as any, () => Favoritos as any)
  juego: Juego[];

  @HasOne(() => Fotos as any)
  foto: Fotos;
}

export { Usuarios }