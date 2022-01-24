import { ChangeEvent } from "react"

export type InputValues = {
    email: string;
    password: string;
}

export type FormProps = {
	changeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
	submitHandler: (val: InputValues) => void;
	values: InputValues;
	errors: InputValues;
}