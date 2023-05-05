import routerx from 'express-promise-router';
import ingresoController from '../controllers/ingresoController';
import auth from '../middlewares/auth';

const router=routerx();

//  POST
router.post('/add-ingreso',auth.verifyAlmacenero,ingresoController.add);
// GET con parametro
router.get('/get-ingreso',auth.verifyAlmacenero,ingresoController.query);
// GET
router.get('/get-all-ingreso',auth.verifyAlmacenero,ingresoController.list);

// PUT activate
router.put('/activate-ingreso',auth.verifyAlmacenero,ingresoController.activate);
// PUT deactivate
router.put('/deactivate-ingreso',auth.verifyAlmacenero,ingresoController.deactivate);
// Grafico
router.get('/get-grafico-ingreso',auth.verifyAuth,ingresoController.grafico12Meses);
// Consulta por fecha
router.get('/get-consultaFecha',auth.verifyAuth,ingresoController.consultaFecha)
export default router;