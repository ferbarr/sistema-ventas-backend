 import routerx from 'express-promise-router';
 import categoriaController from '../controllers/categoriaController';
 import auth from '../middlewares/auth';

 const router=routerx();

//  POST
router.post('/add-category',auth.verifyAlmacenero,categoriaController.add);
// GET con parametro
router.get('/get-category',auth.verifyAlmacenero,categoriaController.query);
// GET
router.get('/get-all-category',auth.verifyAlmacenero,categoriaController.list);
// PUT
router.put('/update-category',auth.verifyAlmacenero,categoriaController.update);
// DELETE
router.delete('/delete-category',auth.verifyAlmacenero,categoriaController.remove);
// PUT activate
router.put('/activate-category',auth.verifyAlmacenero,categoriaController.activate);
// PUT deactivate
router.put('/deactivate-category',auth.verifyAlmacenero,categoriaController.deactivate);


export default router;