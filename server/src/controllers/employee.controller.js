const Employee = require('../models/employee.model');

module.exports = {
  async create(req, res) {
    try {
      if (!req.body)
        return res.status(400).send({ message: 'Content cannot be empty.' });

      const { firstname, lastname, age, gender, phone, position } = req.body;
      const employee = {
        firstname: firstname,
        lastname: lastname,
        age: age,
        gender: gender,
        phone: phone,
        position: position,
      };

      const result = await Employee.create(employee);
      res.send(result);
    } catch (error) {
      res.status(500).send({
        message:
          error.message || 'Some error occurred while retrieving employee.',
      });
    }
  },
  async getAll(req, res) {
    try {
      const result = await Employee.getAll(req);
      res.send(result);
    } catch (error) {
      res.status(500).send({
        message:
          error.message || 'Some error occurred while retrieving employee.',
      });
    }
  },

  async findById(req, res) {
    try {
      const result = await Employee.findById(req.params.id);
      res.send(result);
    } catch (error) {
      res.status(500).send({
        message:
          error.message || 'Some error occurred while retrieving employee.',
      });
    }
  },

  async search(req, res) {
    try {
      const result = await Employee.search(req.params.search);
      res.send(result);
    } catch (error) {
      res.status(500).send({
        message:
          error.message || 'Some error occurred while retrieving employee.',
      });
    }
  },

  async updateById(req, res) {
    try {
      if (!req.body)
        return res.status(400).send({ message: 'Content cannot be empty.' });

      const { firstname, lastname, age, gender, phone, position } = req.body;
      const employee = {
        firstname: firstname,
        lastname: lastname,
        age: age,
        gender: gender,
        phone: phone,
        position: position,
      };
      const result = await Employee.updateById(req.params.id, employee);
      res.send(result);
    } catch (error) {}
  },

  async deleteById(req, res) {
    try {
      const result = await Employee.deleteById(req.params.id);
      if (!result) {
        res
          .status(404)
          .send({ message: `Not found employee with id: ${req.params.id}` });
      }
      res.send(result);
    } catch (error) {
      res.status(500).send({
        message:
          error.message || 'Some error occurred while retrieving employee.',
      });
    }
  },
};
