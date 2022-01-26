const UsersController = require('../controllers/usersController');


app.get('/api/users/getAll', UsersController.getAll);
