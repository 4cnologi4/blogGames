/*import { Table, Column, Model, BelongsTo, ForeignKey } from 'sequelize-typescript';
import Compras from '../favoritos/modelo';
import Juego from '../juegos/modelo';

@Table
export default class VentasJuegos extends Model<VentasJuegos> {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column
  cantidad: number;

  @Column
  precioTotal: number;

  @ForeignKey(() => Compras as any)
  idCompras: number;
  @BelongsTo(() => Compras as any)
  compras: Compras;

  @ForeignKey(() => Juego as any)
  idJuego: number;
  @BelongsTo(() => Juego as any)
  juego: Juego;
}

export { VentasJuegos }*/