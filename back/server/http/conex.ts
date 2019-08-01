import { Sequelize } from 'sequelize-typescript';

export default class Conex extends Sequelize {
  constructor() {
    super({
      host: 'localhost',
      port: 3306,
      database: 'juegos',
      username: 'root',
      password: '',
      dialect: 'mysql',
      modelPaths: [__dirname + '/**/modelo.ts'],
      modelMatch: (filename, member) => {
        return filename.substring(0, filename.indexOf('.modelo')) === member.toLowerCase();
      },
      logging: false
    });

    this.sync({ force: false })
      .then(() => {
        console.log('tablas creadas...');
      })
      .catch((error) => {
        console.log(`valio ... ${error}`);
      })

  }

}