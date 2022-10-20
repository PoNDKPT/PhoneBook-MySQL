import React from 'react';
import logo from '../../assets/react.svg';
import Dropdown from '../Dropdown/Dropdown';

const Card = (props) => {
  const { firstname, lastname, age, gender, phone, position } = props.employee;
  return (
    <div className="card flex border-l-8 border-sky-600 justify-between">
      <div className="card-content flex flex-col">
        <h1 className="text-xl font-medium text-slate-600">
          {firstname} {lastname}
        </h1>
        <span className="text-slate-400 font-medium">
          Age: {age}
          {gender === 'Male' ? (
            <i className="fa-solid fa-mars text-sky-400 text-lg ml-2"></i>
          ) : (
            <i className="fa-solid fa-venus text-pink-400 text-lg ml-2"></i>
          )}
        </span>
        <span className="text-slate-400 font-medium">Tel: {phone}</span>
        <span className="text-slate-400 font-medium">Position: {position}</span>
      </div>
      <Dropdown employee={props.employee} />
    </div>
  );
};

export default Card;
