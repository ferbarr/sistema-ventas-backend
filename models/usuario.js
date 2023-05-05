import mongoose, { Schema } from 'mongoose';

const uniqueValidator = require('mongoose-unique-validator');

const usuarioSchema = new Schema({
    foto: {type:String },
    rol: { type: String, required: true },
    nombre: { type: String, required: true },
    tipo_documento: { type: String },
    num_documento: { type: String },
    direccion: { type: String },
    telefono: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    estado: { type: Number, default: 1 },
    createdAt: { type: Date, default: Date.now }
});
usuarioSchema.plugin(uniqueValidator);


usuarioSchema.methods.toJSON = function () {
    const obj = this.toObject();
    delete obj.password;
    return obj;
}


const Usuario = mongoose.model('usuario', usuarioSchema);
export default Usuario;