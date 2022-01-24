import React, { FC, useState, ChangeEvent } from 'react';
import { useHistory } from 'react-router';
import UseAPI from '../../../hooks/useAPI';
import { UserForm } from '../components/Form';
import { InputValues } from '../interfaces/interface';
import { actions, useDispatch } from '../../../store';

const Authenticate: FC = () => {
	const { getTasks } = UseAPI();
	const dispatch = useDispatch();
	const history = useHistory();
	const [values, setValues] = useState<InputValues>({ email:"", password:"" });
	const [errors, setErrors] = useState<InputValues>({ email:"", password:"" });
	const setStateValues = (name: string, value: string, method: any) => {
		method((prev: any) => ({
			...prev,
			[name]: value,
		}));
		return;
	}
	const changeHandler = (e : ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setStateValues(name, value, setValues);
	}
	const submitHandler = (val: InputValues) => {
		const check = errorsChecker(val);
		if (check) {
			const params = {
				method: "POST",
				endpoint: `${process.env.REACT_APP_API_URL}/authenticate`,
				body: values
			}
			getTasks(params).then((resp: any) => {
				if (resp) dispatch(actions.setUser(resp.user));
			}).then(() => history.push('/')).catch(err => console.error(err));
		}
	}
	const errorsChecker = (val: InputValues) => {
		const { email, password } = val;
		if (email && password) return true;
		if (!email) setStateValues('email', "Email is Required", setErrors);
		if (!password) setStateValues('password', "Password is Required", setErrors);
		if (!email && !password) {
			setStateValues('email', "Email is Required", setErrors);
			setStateValues('password', "Password is Required", setErrors);
		}
		return false;
	}
	const props = {
		changeHandler,
		submitHandler,
		values,
		errors,
	};
  return <UserForm {...{ ...props }} />;
}
export default Authenticate;