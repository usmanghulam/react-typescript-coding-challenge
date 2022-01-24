import React, { FC } from 'react';
import { FormProps } from '../interfaces/interface';
import "../userForm.scss";

export const UserForm: FC<FormProps> = ({ changeHandler, submitHandler, values, errors }) => {
  return (
    <div className="container">
		<div className="form">
		<h4>Resister Your Account</h4>
		<form className="register-form">
			<input
			onChange={changeHandler}
			value={values.email}
			type="email" 
			name="email" 
			placeholder="Email"/>
			{errors && <div className='errors'>{errors?.email}</div>}
			<input
			onChange={changeHandler}
			value={values.password}
			type="text" 
			name="password" 
			placeholder="Password"/>
			{errors && <div className='errors'>{errors?.password}</div>}
			<button onClick={(e) => {
				e?.preventDefault();
				submitHandler(values);
			}} type="submit" className="btn">Submit</button>
		</form> 
		</div>
	</div>
  );
}
