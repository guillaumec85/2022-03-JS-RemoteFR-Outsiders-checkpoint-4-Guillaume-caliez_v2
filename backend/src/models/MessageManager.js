const AbstractManager = require("./AbstractManager");

class MessageManager extends AbstractManager {
  static table = "message";

  insert(message) {
    return this.connection.query(
      `insert into ${MessageManager.table} (nom, mail, message) values (?, ?, ?)`,
      [message.nom, message.mail, message.message]
    );
  }

  // update(pres) {
  //   return this.connection.query(
  //     `update ${MessageManage.table} set title = ? where id = ?`,
  //     [pres.title, pres.id]
  //   );
  // }
}

module.exports = MessageManager;
