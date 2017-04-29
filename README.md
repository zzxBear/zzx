## Welcome to Node

如何有Node js 连接数据库的小案例

用Node.js 实现与mySQL数据库连接的简单操作 

   const express=require('express');  

   const static=require('express-static');  

   const mysql=require('mysql'); 

   let server=express();     

   server.listen(4000);  

   let db=mysql.createConnection({    

  host:'localhost',    

  user:'root',     

  password:'',     

  database:'school'  
  });  

      server.get('/aaa',(req,res)=>{    

      db.query('select * from person',      

      (err,data)=>{          

      res.send(data);        

       res.end();         

      });  
      }); 

     server.use(static('abc'));    //中间键 
     

     ###  person.html 文件用jquery和bootstrap代码如下






  $(()=>{

         $.ajax({

            url:'/aaa',

            dataType:'json',

            cache:false,

            success:r=>{

           console.log(r);

           $.each(r,(i,v)=>{

            ${v.ID}

            ${v.name}

            ${v.aga}

            ${v.job}

           `) .appendTo('tBody');

           });

          }

      })
 })
