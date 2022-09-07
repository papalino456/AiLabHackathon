let express = require("express");
const path = require('path')
const { static } = require("express");

let app = express();

app.use(express.static(path.resolve(__dirname, './web-page/build')))

app.listen(process.env.PORT || 1234, () => {
    console.log(`Example app listening at port 1234`);
});

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});


app.get("*", function(req,res){
    //show data to user entering via web browser, won't be using get in esp
    res.sendFile(path.resolve(__dirname, './web-page/build', "index.html")); 
});