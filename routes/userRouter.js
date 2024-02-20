import express from 'express'
import authUser from '../controllers/userController.js'
import ProductDeatils from '../controllers/productControllers.js'
const router =express.Router()

router.post('/register',authUser.registerUser)
router.post('/login',authUser.loginUser)
router.get('/viewalluser',authUser.viewAllUsers)
router.get('/eachuser/:id',authUser.viewEachUser)
router.put('/edituser/:id',authUser.editUser)
router.delete('/deleteuser/:id',authUser.deleteUser)

router.post('/createproduct',ProductDeatils.createproduct)
router.get('/viewproduct',ProductDeatils.viewAllproducts)
router.get('/eachproduct/:id',ProductDeatils.eachProduct)
router.put('/editproduct/:id',ProductDeatils.editProduct)
router.delete('/deleteproduct/:id',ProductDeatils.deleteProduct)
export {router}