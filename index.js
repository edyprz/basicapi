var express = require("express"),
	app = express(),
    port = process.env.PORT || 8000,
	bodyParser = require("body-parser");

var	todoRoutes = require("./todo_api/routes/todos");

	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended:true}));
	app.use(express.static(__dirname + "/views"));

app.get("/",function(req,res){
	res.sendFile("index.html");
});
		
app.use("/api/todos", todoRoutes);
		
if(!module.parent){
app.listen(port, (error) => {
    if(error) {
        throw error;
    }
    console.log(`Express server listening on port ${port}`);
});
}