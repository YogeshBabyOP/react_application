const express = require('express');
var favicon = require('serve-favicon')
const path = require('path')
const app = express()
const port = 8000
app.use(express.json());

// app.use('/favicon.ico', express.static('images/favicon.ico'))
// app.use(favicon(path.join(__dirname, 'images', 'favicon.ico')))

// app.get('/home/:name', (req, res) => {
//   res.send('Yogesh op!' + req.params.name);
// })

app.get('/about', (req, res) => {
    // res.send("Reference Vinayaka.")
    res.sendFile(path.join(__dirname, 'index.html'));
})


app.get('/navbar', (req, res) => {
  res.sendFile(path.join(__dirname, 'navbar.html'));
})

const jsonn = [
  {
    nam:"Yogesh OP godbaby ❤️💚💙",
    age : 19,
    statuS : "GodorWhat"
  }
]

app.get('/downloadBro', (req, res) => {
  res.download('https://www.jetbrains.com/pycharm/download/download-thanks.html?platform=windows&code=PCC');
});

app.get('/jsontemp', (req, res) => {
  res.json(jsonn);
})

const products = [
  {
    id:1,
    name:"redme K20 Pro"
  },
  {
    id:2,
    name:"Vivo v11"
  },
  {
    id:3,
    name:"Apple iphone"
  },
  {
    id:4,
    name:"Oppo A6"
  },
  {
    id:5,
    name:"moto baby❤️"
  }
]

app.get('/products', (req, res) => {
  res.json(products);
  // products.forEach(element => {
  //   res.json(products);
  // });
})

app.get('/products/:id', (req, res)=> {
  const newData = products.filter(item => item.id.toString() == req.params.id);
  return res.json(newData);
})


app.post('/addproducts', (req, res)=> {
  const {id, name} = req.body;
  console.log(id, name);
  return res.send('Data updated!!!');
})


app.get("/navbar/letsgo", (req, res)=> {
  res.sendFile(path.join(__dirname, 'index.html'));
 // res.sendFile(__dirname + `"/${res.params.name.html}"`);
});


app.get("/jsonex", (req, res)=> {
  res.send (
    {
      id:1,
      name:"Yogesh"
    }
  )
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})