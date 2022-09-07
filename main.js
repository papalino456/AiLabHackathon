let express = require("express");
const { static } = require("express");

let app = express();

app.listen(process.env.PORT || 1234, () => {
    console.log(`Example app listening at port ${port}`);
});


app.get("/", function(req,res){
    //show data to user entering via web browser, won't be using get in esp
    res.sendFile(__dirname + '/WebPage/main.html'); 
    console.log("get request made")
});