import { Table, Column, Model, HasMany, BelongsToMany } from 'sequelize-typescript';
import { Juego } from '../juegos/modelo';

@Table
export default class Categorias extends Model<Categorias> {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column
  nombre: string;

  //tabla recursiva
  @HasMany(() => Categorias as any, 'pertenece_a')
  categorias: Categorias[]

  @BelongsToMany(() => Juego as any, 'categorias_juegos', 'idcategoria', 'idjuego')
  juego: Juego[]
}

export { Categorias }