import React, { FC } from 'react';
import { Transaction } from "../../../types";

export const TableRow:FC<Transaction> = ({ id, from, to, amount, token, tokenName, deleteHandler }) => (<tr>
    <td>{id}</td>
    <td>{amount}</td>
    <td>{from}</td>
    <td>{to}</td>
    <td>{token}</td>
    <td>{tokenName}</td>
    <td><button className='btn btn-danger' onClick={() => typeof deleteHandler === "function" && deleteHandler(id)} >Delete</button></td>
</tr>);