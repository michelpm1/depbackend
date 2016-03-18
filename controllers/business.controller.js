var express = require('express');
 var router = express.Router();
 var mongoose = require('mongoose');
 var depObj = {};
 var jsdom = require("jsdom");
 var arra = [];
 var arrayDep = [];
 
 router.get('/', function(req, res) {

  var countGlobal = 0;
  
  jsdom.env({
   url: "http://www.camara.leg.br/internet/deputado/Dep_Lista.asp?Legislatura=55&Partido=QQ&SX=QQ&Todos=None&UF=QQ&condic=QQ&forma=lista&nome=&ordem=nome&origem=None",
   scripts: ["http://code.jquery.com/jquery.js"],
   done: function(errors, window) {
    var dirtyArrayDep = [];
    var value;
    var $ = window.$;
    var depObj = {};
    $('a').each(function() {
     //console.log("test1");
     dirtyArrayDep.push($(this).attr('href'));
     //window.close();
    });
    // console.log(typeof(dirtyArrayDep[0]));
    for (var i = 0; i < dirtyArrayDep.length; i++) {

     value = dirtyArrayDep[i];
     if (value != undefined && value.substring(0, 4) === "Dep_") {

      arrayDep.push(dirtyArrayDep[i]);
     };

    };

    for (var i = 0; i < arrayDep.length; i++) {
      setTimeout(dataDep(arrayDep[i]), 1000 * (countGlobal++);
    };

    //console.log(arra);


   }
  });


  //res.render("index.html");

 });

 function dataDep(arrayDep) {

  var urlFormatted = "http://www.camara.leg.br/internet/deputado/" + arrayDep;

  jsdom.env({

   url: urlFormatted,
   headers: {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.116 Safari/537.36'
   },
   scripts: ["http://code.jquery.com/jquery.js"],
   done: function(errors, window) {
    var $s = window.$;
    var depObj = {};
    $s('.visualNoMarker').find('ul').each(function() {
        var date = $s(this).find('li').text();
        
        console.log(date);
      
        //window.close();
    });
   }
  });


 }



 module.exports = router;
