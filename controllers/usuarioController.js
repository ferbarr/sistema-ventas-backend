import models from '../models';
import path from 'path'
import bcrypt from 'bcryptjs';
import token from '../services/token';

export default {
    add: async (req, res, next) => {
        try {
            const reg0=await models.Usuario.findOne({email:req.body.email});
            if(reg0){
                return res.status(500).send({
                    msj:'Email ya existente'
                })
            }
            req.body.password = await bcrypt.hash(req.body.password, 10);
            const reg = await models.Usuario.create({
                foto:req.body.foto,
                rol:req.body.rol,
                nombre:req.body.nombre,
                tipo_documento:req.body.tipo_documento,
                num_documento:req.body.num_documento,
                direccion:req.body.direccion,
                telefono:req.body.telefono,
                email:req.body.email,
                password:req.body.password
            });
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                msj: 'Ocurrio un error',
            });
            next(e);
        }
    },
    query: async (req, res, next) => {
        try {
            const reg = await models.Usuario.findOne({ _id: req.query._id });
            if (!reg) {
                res.status(404).send({
                    msj: 'El registro no existe'
                });
            } else {
                res.status(200).json(reg);
            }
        } catch (e) {
            res.status(500).send({
                msj: 'Ocurrio un error'
            });
            next(e);
        }
    },
    list: async (req, res, next) => {
        try {
            let valor = req.query.valor;
            const reg = await models.Usuario.find({ $or: [{ 'nombre': new RegExp(valor, 'i') }, { 'email': new RegExp(valor, 'i') }] }, { createdAt: 0 })
                .sort({ 'createdAt': -1 });
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                msj: 'Ocurrio un error'
            });
            next(e);
        }

    },
    update: async (req, res, next) => {
        try {
            const reg0 = await models.Usuario.findOne({ _id: req.body._id });
            let pass = req.body.password;
            if(!pass){
                pass=reg0.password
            }
        
            if (pass != reg0.password) {
                req.body.password = await bcrypt.hash(req.body.password, 10);
            }
            const reg = await models.Usuario.findByIdAndUpdate({ _id: req.body._id }, {
                foto:req.body.foto,rol: req.body.rol, nombre: req.body.nombre,
                tipo_documento: req.body.tipo_documento, num_documento: req.body.num_documento, direccion: req.body.direccion, telefono: req.body.telefono,
                email: req.body.email, password: req.body.password
            });
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                msj: 'Ocurrio un error'
            });
            next(e);
        }

    },
    remove: async (req, res, next) => {
        try {
            const reg = await models.Usuario.findByIdAndDelete({ _id: req.body._id });
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                msj: 'Ocurrio un error'
            });
            next(e);
        }

    },
    activate: async (req, res, next) => {
        try {
            const reg = await models.Usuario.findByIdAndUpdate({ _id: req.body._id }, { estado: 1 });
            res.status(200).json(reg)
        } catch (e) {
            res.status(500).send({
                msj: 'Ocurrio un error'
            });
            next(e);
        }

    },
    deactivate: async (req, res, next) => {
        try {
            const reg = await models.Usuario.findByIdAndUpdate({ _id: req.body._id }, { estado: 0 });
            res.status(200).json(reg)
        } catch (e) {
            res.status(500).send({
                msj: 'Ocurrio un error'
            });
            next(e);
        }

    },
    login: async (req, res, next) => {
        try {
            let user = await models.Usuario.findOne({ email: req.body.email,estado:1 });
            if (user) {
                let verifPass = await bcrypt.compare(req.body.password, user.password);
                if (verifPass) {
                    let tokenReturn = await token.encode(user._id,user.rol,user.email);
                    res.status(200).json({ user, tokenReturn });
                } else {
                    res.status(404).send({
                        msj: 'Contraseña incorrecta'
                    })
                }
            } else {
                res.status(404).send({
                    msj: 'Usuario incorrecto'
                })
            }

        } catch (e) {
            res.status(500).send({
                msj: 'Ocurrio un error'
            });
            next(e);
        }

    }
}