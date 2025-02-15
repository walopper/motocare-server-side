const routes = require('express').Router();

//Test

routes.get('/status', (req, res) => res.send('May the force be with you :)'));


// Users
const UsersController = require('../controllers/users.controller');
const userController = new UsersController();

routes.get('/users/:userId', userController.get.bind(userController));
routes.post('/users/create', userController.create.bind(userController));
routes.get('/users', userController.list.bind(userController));
routes.delete('/users/:userId', userController.delete.bind(userController));
routes.put('/users/:userId', userController.update.bind(userController));


//Products

const ProductsController = require('../controllers/products.controller');
const productsController = new ProductsController();
const productValidator = require('../middlewares/product');

routes.get('/products/:productId', productsController.get.bind(productsController));
routes.get('/products', productsController.list.bind(productsController));
routes.post('/products', productValidator,productsController.create.bind(productsController));
routes.delete('/products/:productId', productsController.delete.bind(productsController));
routes.put('/products/:productId', productsController.update.bind(productsController));


module.exports = routes;
