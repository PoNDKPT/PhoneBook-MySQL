const sql = require('../providers/mysql.connect');

// Constructor
const Employee = function (employee) {
  this.firstname = employee.firstname;
  this.lastname = employee.lastname;
  this.age = employee.age;
  this.gender = employee.gender;
  this.phone = employee.phone;
  this.position = employee.position;
};

module.exports = {
  async create(newEmployee) {
    try {
      const query = 'INSERT INTO employees SET ?';
      const result = await sql.query(query, newEmployee);
      return { id: result.insertId, ...newEmployee };
    } catch (error) {
      console.error(error);
      return error;
    }
  },

  async getAll() {
    try {
      const query = 'SELECT * FROM employees';
      return await sql.query(query);
    } catch (error) {
      console.error(error);
      return error;
    }
  },

  async findById(Id) {
    try {
      const query = `SELECT * FROM employees WHERE id = ${Id}`;
      return await sql.query(query);
    } catch (error) {
      console.error(error);
      return error;
    }
  },

  async search(search) {
    try {
      const query = `SELECT * FROM employees WHERE firstname LIKE '%${search}%' OR lastname LIKE '%${search}%' OR phone LIKE '%${search}%' OR position LIKE '%${search}%'`;
      return await sql.query(query);
    } catch (error) {
      console.error(error);
      return error;
    }
  },

  async updateById(Id, newEmployee) {
    try {
      const query = `UPDATE employees SET firstname=?, lastname=?, age=?, gender=?, phone=?, position=? WHERE id = ${Id}`;
      const result = await sql.query(query, [
        newEmployee.firstname,
        newEmployee.lastname,
        newEmployee.age,
        newEmployee.gender,
        newEmployee.phone,
        newEmployee.position,
      ]);

      if (result.affectedRows == 0) return null;
      return { Id, ...newEmployee };
    } catch (error) {
      console.error(error);
      return error;
    }
  },

  async deleteById(Id) {
    try {
      const query = `DELETE FROM employees WHERE id = ${Id}`;
      const result = await sql.query(query);
      if (result.affectedRows === 0) return null;
      return `Deleted employee with id: ${Id}`;
    } catch (error) {
      console.error(error);
      return error;
    }
  },
};
