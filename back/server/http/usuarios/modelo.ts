import { Table, Column, Model, BelongsToMany } from 'sequelize-typescript';
import { Favoritos } from '../favoritos/modelo';
import { Juego } from '../juegos/modelo';

@Table
export default class Usuarios extends Model<Usuarios> {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column
  nombre: string;

  @Column
  passwd: string;

  @Column
  rol: string;

  @BelongsToMany(() => Juego as any, () => Favoritos as any)
  juego: Juego[];
}

export { Usuarios }