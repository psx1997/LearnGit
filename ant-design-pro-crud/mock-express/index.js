const url = require('url');
const pino = require('pino');
const cors = require('cors');
const mysql = require('mysql2');
const express = require('express');
const bodyParser = require('body-parser');
const expressPino = require('express-pino-logger');

const logger = pino({level: 'debug', prettyPrint: true});
const expressLogger = expressPino({logger});
const timewait = 2500;
const sleep = () => {
    var start = (new Date()).getTime();
    while ((new Date()).getTime() - start < timewait) {
        continue;
    }
};

const app = express();
app.use(expressLogger);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'admin',
    password: 'admin',
    database: 'antdemo'
});

db.connect((err) => {
    if (err) throw err;
    console.log('连接成功');
});

app.listen(3000, () => {
    console.log('服务器开启在3000端口....');
});

const responseTool = (code, success, message, data) => {
    return {
        code: code,
        success: success,
        message: message,
        data: data
    };
};

//查询列表信息
app.get('/getList', (req, res) => {
    let sql = `select * from tableList`;
    db.query(sql, (err, result) => {
        sleep(timewait);
        if (err) {
            console.log(err);
            res.json(responseTool(500, false, 'select error', null));
        } else {
            res.json(responseTool(200, true, 'select success', result));
        }
    });
});

// 增加列表
app.post('/addList', (req, res) => {
    let sql = 'insert into tableList(name, address,department,project,time) values(?, ?,?,?,?)';
    let params = req.body;
    db.query(sql, [params.name, params.address, params.department, params.project, params.time], function (err, result) {
        sleep(timewait);
        if (err) {
            console.log('添加失败' + err);
            res.json(responseTool(500, false, 'insert error', null));
        }
        if (result) {
            res.json(responseTool(200, true, 'insert success', result));
        }
    });
});

//删除列表信息
app.get('/removeList', (req, res) => {
    let params = url.parse(req.url, true).query;
    let str = JSON.stringify(params);
    str = JSON.parse(str);
    let sql = `delete from tableList where id = ?`;
    db.query(sql, [str.id], async (err, result) => {
        sleep(timewait);
        if (err) {
            console.log(err);
            res.json(responseTool(500, false, 'delete error', null));
        } else {
            res.json(responseTool(200, true, 'delete success', result));
        }
    });
});

//修改列表信息
app.post('/updateList', (req, res) => {
    let sql = `UPDATE tableList SET name = '${req.body.name}',address = '${req.body.address}',department = '${req.body.department}',project = '${req.body.project}',time = '${req.body.time}' where id = '${req.body.id}' `;
    db.query(sql, (err, result) => {
        sleep(timewait);
        if (err) {
            console.log(err);
            res.json(responseTool(500, false, 'update error', null));
        } else {
            res.json(responseTool(200, true, 'update success', result));
        }
    });
});
