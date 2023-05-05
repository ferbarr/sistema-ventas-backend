import mongoose , {Schema} from 'mongoose';

const ingresoSchema=new Schema({
    usuario:{type:Schema.ObjectId,ref:'usuario',required:true},//Vamos a indicar el usuario que hace la compra
    persona:{type:Schema.ObjectId,ref:'persona',required:true},//Vamos a indicar la persona de la compra
    tipo_comprobante:{type:String,required:true},
    serie_comprobante:{type:String},
    num_comprobante:{type:String,required:true},
    impuesto:{type:Number,required:true},
    total:{type:Number,required:true},
    detalles:[{//Aqui se usa el modelo embebido y es como crear otro esquema dentro de este lo cual os ahorra crear otro modelo y hacer referencia
        _id:{type:String, required:true},
        articulo:{type:String,required:true},
        cantidad:{type:Number,required:true},
        precio:{type:Number,required:true}
    }],
    estado:{type:Number,default:1},
    createdAt:{type:Date,default:Date.now}
});

const Ingreso=mongoose.model('ingreso',ingresoSchema);
export default Ingreso;
