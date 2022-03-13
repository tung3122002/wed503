 import { Router } from 'express'
const { list, get, create, remove, update } = require('../controllers/product');
import { checkAuth } from '../middlewares/checkAuth';
const router = Router();
const product =[{id: 1, name: "Product A"}, {id: 2, name: "Product B"}];
router.get("/product",checkAuth, list)
router.post("/product",checkAuth,create)
router.get("/product/:id",checkAuth,get)
router.delete("/product/:id",checkAuth,remove)
router.put("/product/:id",checkAuth,update)

export default router