import routerx from 'express-promise-router';
import personaController from '../controllers/personaController';
import auth from '../middlewares/auth';

const router=routerx();

//  POST
router.post('/add-persona',auth.verifyAuth,personaController.add);
// GET con parametro
router.get('/get-persona',auth.verifyAuth,personaController.query);
// GET
router.get('/get-all-persona',auth.verifyAuth,personaController.list);
// PUT
router.put('/update-persona',auth.verifyAuth,personaController.update);
// DELETE
router.delete('/delete-persona',auth.verifyAuth,personaController.remove);
// PUT activate
router.put('/activate-persona',auth.verifyAuth,personaController.activate);
// PUT deactivate
router.put('/deactivate-persona',auth.verifyAuth,personaController.deactivate);
// GET clientes
router.get('/get-cliente',auth.verifyAuth,personaController.listCliente);
// GET proveedores
router.get('/get-proveedor',auth.verifyAuth,personaController.listProveedores);


export default router;