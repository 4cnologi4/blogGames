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

  // se enlazan a través de la tabla etiqueta
  @BelongsToMany(() => Juego as any, 'etiquetas', 'idcategoria', 'idjuego')
  juego: Juego[];

  @HasMany(() => Juego as any)
  juegos: Juego[];

}

export { Categorias }