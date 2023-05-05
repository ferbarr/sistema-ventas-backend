import models from '../models';

 const aumentarStock=async(idArticulo,cantidad)=>{
    let {stock}=await models.Articulo.findOne({_id:idArticulo});
    let newStock=parseInt(stock) +parseInt(cantidad);
    const reg=await models.Articulo.findByIdAndUpdate({_id:idArticulo},{stock:newStock})

}
const disminuirStock=async(idArticulo,cantidad)=>{
    let {stock}=await models.Articulo.findOne({_id:idArticulo});
    let newStock=parseInt(stock)-parseInt(cantidad);
    const reg=await models.Articulo.findByIdAndUpdate({_id:idArticulo},{stock:newStock})

}


export default {
    add:async (req,res,next)=>{
        try {
            const reg=await models.Venta.create(req.body);
            // Aumentar stock
            let detalles=req.body.detalles;
            detalles.map((articulo)=>{
                disminuirStock(articulo._id,articulo.cantidad);
            })
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                msj:'Ocurrio un error'
            });
            next(e);
        }
    },
    query:async (req,res,next)=>{
        try {
            const reg=await models.Venta.findOne({_id:req.query._id}).
            populate('usuario',{nombre:1}).populate('persona',{nombre:1});
            if(!reg){
                res.status(404).send({
                   msj:'El registro no existe' 
                });
            }else{
                res.status(200).json(reg);
            }
        } catch (e) {
            res.status(500).send({
                msj:'Ocurrio un error'
            });
            next(e);
        }
    },
    list:async (req,res,next)=>{
        try {
            let valor=req.query.valor;
            const reg=await models.Venta.find({$or:[{'num_comprobante':new RegExp(valor,'i')},{'serie_comprobante':new RegExp(valor,'i')}]})
            .populate('usuario',{nombre:1})
            .populate('persona',{nombre:1,direccion:1,telefono:1,email:1})
            .sort({'createdAt':-1});
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                msj:'Ocurrio un error'
            });
            next(e);
        }

    },

    activate:async (req,res,next)=>{
        try {

             const reg0=await models.Venta.findOne({_id:req.body._id})
            if(reg0.estado===1){
               return res.send({
                    msj:'Ya esta activo'
                 })
             }else{

            const reg=await models.Venta.findByIdAndUpdate({_id:req.body._id},{estado:1});
             // Aumentar stock
             let detalles=reg.detalles;
             detalles.map((articulo)=>{
                 disminuirStock(articulo._id,articulo.cantidad);
             })
            res.status(200).json(reg)
            }
        } catch (e) {
            res.status(500).send({
                msj:'Ocurrio un error'
            });
            next(e);
        }

    },
    deactivate:async (req,res,next)=>{
        try {
             const reg0=await models.Venta.findOne({_id:req.body._id})
             if(reg0.estado===0){
               return res.status(500).send({
                    msj:'Ya esta inactivo'
                })
             }else{
            const reg=await models.Venta.findByIdAndUpdate({_id:req.body._id},{estado:0});
               // Disminuir stock
               let detalles=reg.detalles;
               detalles.map((articulo)=>{
                aumentarStock(articulo._id,articulo.cantidad);
               })
            res.status(200).json(reg)
             }
        } catch (e) {
            res.status(500).send({
                msj:'Ocurrio un error'
            });
            next(e);
        }

    },
    grafico12Meses:async(req,res,next)=>{
        try {
            const reg=await models.Venta.aggregate(
            [
                {
                    $group:{
                        _id:{
                            mes:{$month:"$createdAt"},
                            year:{$year:"$createdAt"}
                        },
                        total:{$sum:"$total"},
                        numero:{$sum:1}
                    }
                },
                {
                    $sort:{
                        "_id.year":-1,"_id.mes":-1
                    }
                }
            ]).limit(12);
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                msj:'Ocurrio un error'
            });
            next(e);
        }

    },
    consultaFecha:async (req,res,next)=>{
        try {
            let start=req.query.start;
            let end=req.query.end;
            const reg=await models.Venta.find({"createdAt":{"$gte":start,"$lt":end}})
            .populate('usuario',{nombre:1})
            .populate('persona',{nombre:1})
            .sort({'createdAt':-1});
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                msj:'Ocurrio un error'
            });
            next(e);
        }

    },
}