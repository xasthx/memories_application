import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

//mongodb+srv://<username>:<password>@cluster0.h4daz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
const CONNECTION_URL = 'mongodb+srv://linuxvm:memories123@cluster0.h4daz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

// useNewUrlParser, useUnifiedTopology, useFindAndModify and useCreateIndex are no longer supported
// mongoose 6 treats useNewUrlParser, useUnifiedTopology,useCreateIndex as true and useFindAndModify as false 
// mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

// deprecated so dont need anymore
//mongoose.set('useFindAndModify', false);