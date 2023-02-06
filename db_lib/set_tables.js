const sql_con = require('./index');

exports.tableSetting = async () => {
    let makeHiddenLinkTable = `CREATE TABLE IF NOT EXISTS test_board(
        wr_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
        wr_subject varchar(255),
        wr_content TEXT,
        wr_write_id varchar(100),
        wr_write_nick varchar(100),
        wr_created_at DATETIME
    );`
    try {
        sql_con.query(makeHiddenLinkTable, async (err, result) => { });
    } catch (err) {
        console.error(err);
    }

};