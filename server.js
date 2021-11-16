const express = require('express');
const htmlroutes = require("./routes/html-routes");
const apiroutes = require("./routes/api-routes");
const port = process.env.PORT || 3001;
const app = express();

app.use (express.json());
app.use (express.urlencoded({extended:true}));
app.use (express.static("public"));
app.use (apiroutes);
app.use (htmlroutes);


app.listen (port, ()=>{ 
    console.log("listening on port" + port)
});
