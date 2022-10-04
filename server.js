var express = require("express");

const path = require("path");

const app = express();

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Express http server listening on ${PORT}`));

app.get("/",(req, res) => 
{
    res.send("<h1>Declaration</h1>"+"<h3> I declare that this test is my own work in accordance with Seneca Academic Policy.<br> No part of this test has been copied manually or electronically from any other source </h3>"+
    "<h2><mark> Name: Samarth Modi</mark></h2>"+"<h2><mark>Student Id: 133357202 </mark> </h2>"
    +"<a href='/test1'>Go to Test1</a>");
})

app.get("/test1",(req,res) =>
{
    res.sendFile(path.join(__dirname,"./pages/test1.html"));
});



