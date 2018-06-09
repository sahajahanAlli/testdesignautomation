var fs = require('fs');
var XLSX = require('xlsx');
var express = require('express');
var usersData = require('../api/controller/userdata');
var upload = require('../api/fileupload/fileupload')
var admin = require('../api/controller/admin.controller')
var normalUser = require('../api/controller/userController')
var operationdb = require('../api/model/operation.db')
var path = require('path')
    //require('./ldapConnect');
    //var json2xls = require('json2xls');
var router = express.Router();



router.get('/', function(req, res, next) {
    res.render('welcome', { title: 'Welcome To MetroBank', error: 'errordata' });
});


//browse file page opens up
router.get('/file', function(req, res, next) {
    res.render('fileupload', { title: 'Admin Operations' });
});
//about
router.get('/about', function(req, res, next) {
    res.render('about', { title: 'Welcome To MetroBank' });
});

//demo
router.get('/demo', function(req, res, next) {
    res.render('demo', { title: 'Welcome To MetroBank' });
});

// post call after browsing the file location

router.post('/v1/admin/upload', [upload.upload, admin.insertTCStoDB, operationdb.uploadTcsToDB]);
router.get('/v1/admin/listtcs', [admin.fetchTCSfromDB, operationdb.fetchTcsToDB]);
router.get('/v1/admin/listtcs/:tcsno', [admin.fetchTCSfromDB, operationdb.fetchSpecificTcsToDB]);
router.post('/v1/admin/updatetcs', [admin.updateTCSfromDB, operationdb.UpdateTcsToDB]);
router.get('/v1/admin/del/:tcsno', [admin.deleteTCSfromDB, operationdb.deleteTcsToDB]);

router.post('/validateUser', usersData.validate);
router.get('/relationalDrag1', [normalUser.fetchTCSfromDB, operationdb.fetchTcsToDBforNormalUser]);

module.exports = router;