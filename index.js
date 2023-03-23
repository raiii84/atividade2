const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
var url = require('url');

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

app.use(express.static("public"))

app.get('/', function (req, res) {
  const user = {
    name: 'Rai',
    surname: 'Gonçalves',
  }
  res.render('home', {user: user, })
})

app.get("/produto", function (req, res) {
  const posts = [
    { nome: "coca-cola",
    price: "R$ 8,00",
    },

    { nome: "pepsi",
    price: "R$ 7,00",
    },

    { nome: "guaraná",
    price: "R$ 6,00",
    },

    { nome: "fanta",
    price: "R$ 5,00",
    },
  ];
  
  res.render("produto", { posts });
});

app.listen(3000)
