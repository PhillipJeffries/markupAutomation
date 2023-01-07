// const express = require("express");
import express from 'express'


import * as url from 'url';
// import * as swiper from './swiper.js'
// console.log(swiper)

// import Swiper from 'swiper'

// export const swiper = new Swiper
// console.log(swiper)

//for browser reloading
import livereload from "livereload";
import connectLiveReload from "connect-livereload";

import { data } from './index.js';
console.log(data)

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

console.log(__dirname + 'views')
console.log(__filename)

const app = express();






//static
app.use(express.static(__dirname))



const liveReloadServer = livereload.createServer();
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});
 

app.use(connectLiveReload());
 
app.set("view engine", "ejs");
 
app.get("/app", function(_request, response){
     
    response.render("index", data);
});





app.get("", function(request, response){
     
    response.send(
      `<h1>"Главная страница"</h1>
       <a href="/app">app</a>
      `);
});

app.listen(3000);