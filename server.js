const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'static')));

app.get('/', (req, res) => res.render('pages/principal'));
app.get('/nosotros', (req, res) => res.render('pages/nosotros'));
app.get('/servicios', (req, res) => res.render('pages/servicios'));
app.get('/servicio/:id', (req, res) => res.render('pages/cada_servicio'));
app.get('/contactos', (req, res) => res.render('pages/contactos'));
app.post('/contactos', (req, res) => {
  // Form POST not implemented; in production parse body and save message
  res.redirect('/contactos');
});
app.get('/admin', (req, res) => res.render('pages/admin_contactos'));

app.use((req, res) => res.status(404).render('404_error'));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
