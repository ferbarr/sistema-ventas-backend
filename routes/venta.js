import routerx from 'express-promise-router';
import ventaController from '../controllers/ventaController';
import auth from '../middlewares/auth';

const router=routerx();

//  POST
router.post('/add-venta',auth.verifyVendedor,ventaController.add);
// GET con parametro
router.get('/get-venta',auth.verifyVendedor,ventaController.query);
// GET
router.get('/get-all-venta',auth.verifyVendedor,ventaController.list);

// PUT activate
router.put('/activate-venta',auth.verifyVendedor,ventaController.activate);
// PUT deactivate
router.put('/deactivate-venta',auth.verifyVendedor,ventaController.deactivate);
// grafico
router.get('/get-grafico-venta',auth.verifyAuth,ventaController.grafico12Meses);
// Consulta fecha
router.get('/get-consultaFecha',auth.verifyAuth,ventaController.consultaFecha)
export default router;