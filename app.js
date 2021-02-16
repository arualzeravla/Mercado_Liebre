let express = require ("express")
let app = express()

const path = require ("path")

app.use(express.static("public"));

app.set('puerto', process.env.PORT || 3030)

app.listen (app.get('puerto'), () =>
console.log (`Servidor corriendo en el puerto ${app.get('puerto')}`));

app.get ("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
});

app.get ("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/login.html"))
});

app.get ("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/register.html"))
});