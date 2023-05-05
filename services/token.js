import jwt from 'jsonwebtoken';
import models from '../models';

// Generar nuevo token
const checkToken=async(token)=>{
    let __id = null;
    try {
        const { _id } = await jwt.decode(token);
        __id = _id;
    } catch (e) {
        return false;
    }

    const user = await models.Usuario.findOne({ _id: __id, estado: 1 });
    if (user) {
        const token = jwt.sign({ _id: __id }, 'secret', { expiresIn: '1h' });
        return { token, rol: user.rol, _id: user._id, email: user.email };
    } else {
        return false;
    }

}


export default {
    // Generar token
    encode: async (_id, rol, email) => {
        const token = jwt.sign({ _id: _id, rol: rol, email: email }, 'secret', { expiresIn: '1h' });
        return token;
    },
    // Decodificar token
    decode: async (token) => {
        try {
            const { _id } = await jwt.verify(token, 'secret');
            const user = await models.Usuario.findOne({ _id, estado: 1 });
            if (user) {
                return user
            } else {
                return false;
            }
        } catch (e) {
            const newToken = await checkToken(token);
            return newToken;
        }
    }

}