import routerx from 'express-promise-router';
import articuloController from '../controllers/articuloController';
import auth from '../middlewares/auth';

const router=routerx();

//  POST
router.post('/add-articulo',articuloController.add);
// GET con parametro
router.get('/get-articulo',auth.verifyAlmacenero,articuloController.query);
// GET
router.get('/get-all-articulo',auth.verifyAlmacenero,articuloController.list);
// PUT
router.put('/update-articulo',auth.verifyAlmacenero,articuloController.update);
// DELETE
router.delete('/delete-articulo',auth.verifyAlmacenero,articuloController.remove);
// PUT activate
router.put('/activate-articulo',auth.verifyAlmacenero,articuloController.activate);
// PUT deactivate
router.put('/deactivate-articulo',auth.verifyAlmacenero,articuloController.deactivate);
// GET con parametro
router.get('/get-articulo-codigo',auth.verifyAuth,articuloController.queryCodigo);
export default router;