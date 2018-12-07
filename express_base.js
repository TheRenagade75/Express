const express = require('express');
const app = express();
const port = 3000;

app.get('/', (request, response) => {
  response.send('Bienvenue sur Express');
});
app.get('/api/movies', (request, response) => {
  response.send('Récupération de tous les films');
});
app.get('/api/movies/:id', (request, response) => {
const id = request.params.id;
  response.json({ id: 1 , 'name' : 'Star Wars'});
});

app.get('/api/employee', (request, response) => {
    const name = request.query.name;
    if(name){
        response.status(404).send(`Cannot find ${name}`);
    }else{
        response.sendStatus(304); 
    }
   
});

app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }

  console.log(`Server is listening on ${port}`);
});