import { Table, Model, Column, BelongsToMany } from "sequelize-typescript";
import { Juego } from "../juegos/modelo";

@Table
export default class Consolas extends Model<Consolas> {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column
  nombre_consola: string;

  @BelongsToMany(() => Juego as any, 'disponible', 'idconsola', 'idjuego')
  juego: Juego[];
}

export { Consolas }