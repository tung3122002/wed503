 import { Router } from 'express'
import { create, get, list, remove, update } from '../src/controllers/product';

import { checkAuth } from '../src/middlewares/checkAuth';
const router = Router();

router.get("/product",checkAuth, list)
router.post("/product",checkAuth,create)
router.get("/product/:id",checkAuth,get)
router.delete("/product/:id",checkAuth,remove)
router.put("/product/:id",checkAuth,update)

export default router