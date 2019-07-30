import { Table, Column, Model, BelongsToMany, HasOne } from 'sequelize-typescript';
import { Categorias } from '../categorias/modelo';
import { Imagenes } from '../imagenes/modelo';
import { Favoritos } from '../favoritos/modelo';
import { Usuarios } from '../usuarios/modelo';

@Table
export default class Juego extends Model<Juego>{
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column
  nombre: string;

  @Column
  existen: number;

  @Column
  precioU: number;

  @BelongsToMany(() => Usuarios as any, () => Favoritos as any)
  usuarios: Usuarios[];

  @BelongsToMany(() => Categorias as any, 'categorias_juegos', 'idjuego', 'idcategoria')
  categorias: Categorias[]

  @HasOne(() => Imagenes as any)
  Imagenes: Imagenes;
}

export { Juego };