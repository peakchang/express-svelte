const express = require('express');
const sql_con = require('../db_lib');

const router = express.Router();

router.get('/testiii', async (req, res, next) => {

    const getFreeBoardSql = "SELECT * FROM test_board";
    const getFreeBoard = await sql_con.promise().query(getFreeBoardSql);
    console.log(sql_con.promise());
    const get_free_board = getFreeBoard[0]

    console.log(get_free_board);
    res.json({test:'onPageGogogogo', test2 : '문제는 JWT?? PASSPORT?? 여튼 로그인!!', get_free_board})
})


router.use('/testpost', async(req, res, next) =>{
    console.log(req.body);
    res.send('lajsdlifjalisdjfasf')
})
module.exports = router;