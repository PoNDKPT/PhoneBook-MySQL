import { useState, useContext, useRef, useEffect } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useSelector, useDispatch } from 'react-redux';
import { toggleModal } from '../../features/modalSlice';
import { editEmployee } from '../../features/employeeSlice';

const Modal = (props) => {
  const modalDispatch = useDispatch();
  const employeeDispatch = useDispatch();
  const modalState = useSelector((state) => state.modal.toggle);
  const modal = useRef(null);

  useEffect(() => {
    if (modalState.bool) modal.current.showModal();
    else modal.current.close();
  }, [modalState.bool]);

  const onCloseModal = () => {
    modalDispatch(toggleModal({ bool: false }));
    employeeDispatch(editEmployee(null));
  };

  return (
    // <dialog className={`modal max-w-sm ${toggleModal ? 'block' : 'hidden'}`}>
    <dialog className="modal max-w-sm" ref={modal}>
      <XMarkIcon
        className="w-5 ml-auto cursor-pointer"
        onClick={onCloseModal}
      />
      {props.children}
    </dialog>
  );
};

export default Modal;
