const express = require('express');
const hbs = require('hbs');
const app = express();
app.set('view engine', 'hbs');
app.set('views', 'src/views');

hbs.registerPartials(__dirname + '/views/partials');

app.use('/contact', (_, response) => {
    response.render("contact.hbs", {
        title: "Мои контакты",
        emailsVisible: true,
        emails: ["gavgav@mycorp.com", "mioaw@mycorp.com"],
        phone: "+1234567890"
    });
});

app.use('/', (_, response) => {
    response.render('home.hbs')
})
app.listen(3000, ()=>console.log("Сервер запущен..."));