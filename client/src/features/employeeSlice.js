import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const employeeSlice = createSlice({
  name: 'employee',
  initialState: {
    employeeList: null,
    form: null,
    editEmployee: null,
  },
  reducers: {
    getEmployee: (state, action) => {
      state.employeeList = action.payload;
    },
    postEmployee: (state, action) => {
      const employee = action.payload;
      axios
        .post('http://localhost:8080/api/employees/', {
          firstname: employee.firstName,
          lastname: employee.lastName,
          age: employee.age,
          gender: employee.gender,
          phone: employee.phone,
          position: employee.position,
        })
        .then(({ data }) => {
          state.employeeList = {
            ...state.editEmployee,
            data,
          };
        });
    },
    editEmployee: (state, action) => {
      state.editEmployee = action.payload;
    },
    putEmployee: (state, action) => {
      const employee = action.payload;
      const newEmployee = {
        firstname: employee.firstName,
        lastname: employee.lastName,
        age: employee.age,
        gender: employee.gender,
        phone: employee.phone,
        position: employee.position,
      };
      axios
        .put(`http://localhost:8080/api/employees/${employee.id}`, newEmployee)
        .then(({ data }) => {
          state.employeeList = state.employeeList.map((list) => {
            return list.id == data.Id ? data : list;
          });
        });
    },
    deleteEmployee: (state, action) => {
      const Id = action.payload;
      axios
        .delete(`http://localhost:8080/api/employees/${Id}`)
        .then((response) => {
          state.employeeList = state.employeeList.filter(
            (list) => list.id != Id
          );
        });
    },
  },
});

export const {
  getEmployee,
  editEmployee,
  postEmployee,
  putEmployee,
  deleteEmployee,
} = employeeSlice.actions;

export default employeeSlice.reducer;
