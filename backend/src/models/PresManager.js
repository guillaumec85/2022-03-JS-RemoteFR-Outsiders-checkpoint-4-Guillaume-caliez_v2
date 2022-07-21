const AbstractManager = require("./AbstractManager");

class PresManager extends AbstractManager {
  static table = "presentation";

  // insert(pres) {
  //   return this.connection.query(
  //     `insert into ${PresManager.table} (title) values (?)`,
  //     [pres.title]
  //   );
  // }

  // update(pres) {
  //   return this.connection.query(
  //     `update ${PresManager.table} set title = ? where id = ?`,
  //     [pres.title, pres.id]
  //   );
  // }
}

module.exports = PresManager;
