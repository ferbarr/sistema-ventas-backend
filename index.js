import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import mongoose from 'mongoose';
import router from './routes';

const app=express();

// Conexion a la BD
mongoose.Promise=global.Promise;
const dbUrl='mongodb://localhost:27017/dbSistema';
mongoose.connect(dbUrl,{useNewUrlParser:true}).
then(mongoose=>console.log('Conectado a la BD'))
.catch(err=>console.log(err));

app.use(morgan('dev'));
app.use(cors({
    origin: 'http://localhost:8080/'
}));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
app.use('/sistema',router);

app.set('port',process.env.PORT||4000);
app.listen(app.get('port'),()=>{
    console.log('Escuchando puerto '+ app.get('port'))
})