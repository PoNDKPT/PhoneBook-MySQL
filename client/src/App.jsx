import Card from './components/Card/Card';
import Modal from './components/Modal/Modal';
import Form from './components/Form/Form';
import { PlusIcon } from '@heroicons/react/24/outline';
import Navbar from './components/Navbar/Navbar';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import { getEmployee } from './features/employeeSlice';
import { toggleModal } from './features/modalSlice';

function App() {
  const employeeDispatch = useDispatch();
  const employeeList = useSelector((state) => state.employee.employeeList);
  const modalDispatch = useDispatch();
  useEffect(() => {
    axios.get('http://localhost:8080/api/employees/').then((response) => {
      employeeDispatch(getEmployee(response.data));
    });
  }, [employeeList]);

  const onOpenModal = () => {
    modalDispatch(toggleModal({ bool: true, type: 'add' }));
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="flex justify-between items-center gap-6 py-3">
          <h1 className="text-3xl font-medium">Contacts</h1>
          <button
            onClick={onOpenModal}
            className="flex border rounded-full py-2 px-4 bg-sky-500 text-white font-medium hover:bg-sky-600"
          >
            <PlusIcon className="w-6 aspect-square" />
            Add
          </button>
        </div>
        <section className="grid gap-5 md:grid-cols-2 pb-10 mt-4">
          {employeeList?.map((employee) => (
            <Card key={employee.id} employee={employee} />
          ))}
          <Modal>
            <Form />
          </Modal>
        </section>
      </div>
    </>
  );
}

export default App;
