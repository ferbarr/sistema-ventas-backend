import mongoose, {Schema} from 'mongoose';

const categoriaSchema=new Schema({
    nombre:{type:String, unique:true,required:true },
    descripcion:{type:String},
    estado:{type:Number,default:1},
    createdAt:{type:Date,default:Date.now}
})

// Convertir a modelo

const Categoria=mongoose.model('categoria',categoriaSchema);

export default Categoria;