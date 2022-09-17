const express = require("express");
const router = express.Router();
const {proveedoresGet,proveedorGet,proveedorPut,proveedorPatch,proveedorPost,proveedorDelete} = require('../controllers/proveedor-controller');

router.get("/" , proveedoresGet)
router.get("/proveedor/:id" , proveedorGet)
router.post("/agregar_proveedor" , proveedorPost)
router.patch("/dar_alta_proveedor/:id" , proveedorPatch)
router.put("/editar_proveedor/:id" , proveedorPut)
router.delete("/eliminar_proveedor/:id" , proveedorDelete)

module.exports = router;