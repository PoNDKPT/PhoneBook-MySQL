const router = require('express').Router();
const EmployeeController = require('../controllers/employee.controller');

router.get('/', EmployeeController.getAll);
// router.get('/:id', EmployeeController.findById);
router.get('/:search', EmployeeController.search);
router.post('/', EmployeeController.create);
router.put('/:id', EmployeeController.updateById);
router.delete('/:id', EmployeeController.deleteById);

module.exports = router;
