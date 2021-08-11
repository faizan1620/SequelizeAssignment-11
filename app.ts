const exp: any = require("express");
const app = exp();
const cors = require('cors');
const db=require('./database');

db.sequelize.sync({force:false});

var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus:200
}


import users from './users';
const port = 3000;

app.use(exp.urlencoded());

app.use(exp.static('public'));


// Parse JSON bodies (as sent by API clients)
app.use(exp.json());

app.use(cors(corsOptions));

//app.use(bodyParser.json());
app.get("/", (req:any, res:any) => {
  res.sendFile(__dirname+"/views/index.html");
});

app.use('/users',users);


app.listen(port, () => {
  console.log(`Sequelize app listening at http://localhost:${port}`);
});




