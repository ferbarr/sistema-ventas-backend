import mongoose ,{Schema} from 'mongoose';

const personaSchema=new Schema({
    tipo_persona:{type:String,required:true},
    nombre:{type:String,unique:true,required:true},
    tipo_documento:{type:String},
    num_documento:{type:String},
    direccion:{type:String},
    telefono:{type:String},
    email:{type:String},
    estado:{type:Number,default:1},
    createdAt:{type:Date,default:Date.now}
});

const Persona=mongoose.model('persona',personaSchema);
export default Persona;