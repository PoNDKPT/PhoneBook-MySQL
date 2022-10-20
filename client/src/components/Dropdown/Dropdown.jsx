import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import {
  Squares2X2Icon,
  PencilIcon,
  TrashIcon,
} from '@heroicons/react/24/outline';
import { useSelector, useDispatch } from 'react-redux';
import { toggleModal } from '../../features/modalSlice';
import { deleteEmployee, editEmployee } from '../../features/employeeSlice';

const Dropdown = (props) => {
  const modalDispatch = useDispatch();
  const employeeDispatch = useDispatch();
  const employee = props.employee;

  const onOpenModal = () => {
    modalDispatch(toggleModal({ bool: true, type: 'edit' }));
    employeeDispatch(editEmployee(employee));
  };

  const onDelete = () => {
    employeeDispatch(deleteEmployee(employee.id));
  };

  return (
    <Menu as="div" className="relative inline-block text-left ml-auto">
      <div>
        <Menu.Button className="hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          <Squares2X2Icon className="w-6 aspect-square text-slate-600" />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y z-10 divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 ">
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={onOpenModal}
                  className={`${
                    active ? 'bg-gray-200 text-gray-100' : 'text-gray-900'
                  }group flex w-full items-center rounded-md px-2 py-2 text-sm font-medium`}
                >
                  <PencilIcon className="w-6 mr-2 aspect-square" />
                  Edit
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={onDelete}
                  className={`${
                    active ? 'bg-red-400 text-gray-100' : 'text-gray-900'
                  }group flex w-full items-center rounded-md px-2 py-2 text-sm font-medium`}
                >
                  <TrashIcon className="w-6 mr-2 aspect-square" />
                  Delete
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default Dropdown;
