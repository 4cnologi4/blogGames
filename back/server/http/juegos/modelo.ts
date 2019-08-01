import { Table, Column, Model, BelongsToMany, HasOne } from 'sequelize-typescript';
import { Categorias } from '../categorias/modelo';
import { Imagenes } from '../imagenes/modelo';
import { Favoritos } from '../favoritos/modelo';
import { Usuarios } from '../usuarios/modelo';
import { Consolas } from '../consolas/modelo';

@Table
export default class Juego extends Model<Juego>{
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column
  nombre: string;

  @BelongsToMany(() => Usuarios as any, () => Favoritos as any)
  usuarios: Usuarios[];

  @BelongsToMany(() => Categorias as any, 'etiquetas', 'idjuego', 'idcategoria')
  categorias: Categorias[];

  @BelongsToMany(() => Consolas as any, 'disponible', 'idjuego', 'idconsola')
  consola: Consolas[];

  @HasOne(() => Categorias as any)
  Categorias: Categorias;

  @HasOne(() => Imagenes as any)
  Imagenes: Imagenes;


}

export { Juego };