import routerx from 'express-promise-router';
import usuarioController from '../controllers/usuarioController';
import auth from '../middlewares/auth';


const router=routerx();

//  POST
router.post('/add-usuario',auth.verifyAdministrador,usuarioController.add);
// GET con parametro
router.get('/get-usuario',usuarioController.query);
// GET
router.get('/get-all-usuario',auth.verifyAdministrador,usuarioController.list);
// PUT
router.put('/update-usuario',auth.verifyAdministrador,usuarioController.update);
// DELETE
router.delete('/delete-usuario',auth.verifyAdministrador,usuarioController.remove);
// PUT activate
router.put('/activate-usuario',auth.verifyAdministrador,usuarioController.activate);
// PUT deactivate
router.put('/deactivate-usuario',auth.verifyAdministrador,usuarioController.deactivate);
// login
router.post('/login',usuarioController.login);

export default router;