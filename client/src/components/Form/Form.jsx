import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { formatPhoneNumber } from '../../utils/formatNumber';
import { postEmployee, putEmployee } from '../../features/employeeSlice';
import { toggleModal } from '../../features/modalSlice';

const Form = () => {
  const employeeDispatch = useDispatch();
  const modalDispatch = useDispatch();
  const modalState = useSelector((state) => state.modal.toggle);
  const employee = useSelector((state) => state.employee.editEmployee);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      age: null,
      gender: '',
      phone: '',
      position: '',
    },
  });

  useEffect(() => {
    setValue('firstName', employee?.firstname);
    setValue('lastName', employee?.lastname);
    setValue('age', employee?.age);
    setValue('gender', employee?.gender);
    setValue('phone', employee?.phone);
    setValue('position', employee?.position);
  }, [employee]);

  const phoneNumberFormatter = (e) => {
    const formatter = formatPhoneNumber(e.target.value);
    e.target.value = formatter;
  };

  const onSubmit = async (data) => {
    if (modalState.type === 'add') {
      await employeeDispatch(postEmployee(data));
    } else if (modalState.type === 'edit') {
      await employeeDispatch(putEmployee({ id: employee.id, ...data }));
    }
    reset();
    modalDispatch(toggleModal({ bool: false }));
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="group-form">
          <label htmlFor="">First name</label>
          <input
            {...register('firstName', { required: 'This is required.' })}
          />
          <span className="valid-msg">{errors.firstName?.message}</span>
        </div>
        <div className="group-form">
          <label htmlFor="">Last name</label>
          <input
            {...register('lastName', {
              required: 'This is required.',
            })}
          />
          <span className="valid-msg">{errors.lastName?.message}</span>
        </div>
        <div className="flex md:flex-row flex-col justify-between gap-2 w-full">
          <div className="group-form">
            <label htmlFor="">Age</label>
            <input
              {...register('age', {
                required: 'This is required.',
              })}
            />
            <span className="valid-msg">{errors.age?.message}</span>
          </div>
          <div className="group-form">
            <label htmlFor="">Gender</label>
            <select {...register('gender', { required: true })}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <span className="valid-msg">{errors.gender?.message}</span>
          </div>
        </div>
        <div className="group-form">
          <label htmlFor="">Phone</label>
          <input
            onKeyDown={(e) => phoneNumberFormatter(e)}
            {...register('phone', {
              required: 'This is required.',
              minLength: {
                value: 10,
                message: 'Min length is 10',
              },
              maxLength: {
                value: 12,
                message: 'Max length is 12.',
              },
            })}
          />
          <span className="valid-msg">{errors.phone?.message}</span>
        </div>
        <div className="group-form">
          <label htmlFor="">Position</label>
          <input
            {...register('position', {
              required: 'This is required.',
            })}
          />
          <span className="valid-msg">{errors.position?.message}</span>
        </div>
        <input
          type="submit"
          value="Submit"
          className="cursor-pointer bg-sky-600 text-white hover:bg-sky-500"
        />
      </form>
    </>
  );
};

export default Form;
