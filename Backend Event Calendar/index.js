const express = require(`express`)
const mongoose = require(`mongoose`)
const dotenv = require(`dotenv`).config()
const cors = require(`cors`)


const PORT = process.env.PORT || 3005
const app = express()

const userRoutes = require(`./routes/userRoutes`)
const eventRoutes = require(`./routes/eventRoutes`)

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log(`Connected to Database`));

app.use(`/api/users`, userRoutes);
app.use(`/api/events`, eventRoutes);

app.listen(PORT, () => console.log(`Server connected to port ${PORT}`))