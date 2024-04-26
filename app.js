 //require('dotenv').config();
 const express = require('express');
 const app = express();
 const routes = require('./routes');
 const routes2 = require('./routes/DirekturUtama');
 const routes3 = require('./routes/WakilDirekturUtama');
 const routes4 = require('./routes/DirekturKeuangan');
 const routes5 = require('./routes/DirekturPemasaran');
 const routes6 = require('./routes/DirekturTeknologiInformasi');
 const routes7 = require('./routes/ManajerSenior');
 const routes8 = require('./routes/Manajer');
 const routes9 = require('./routes/Supervisor');
 const routes10 = require('./routes/Staf');
 //app.use(express.json());
 
 app.use([routes, routes2, routes3, routes4, routes5, routes6, routes7, routes8, routes9, routes10]);
 
 app.listen(3000, () =>{
     console.log("server is running on port 3000");
 });