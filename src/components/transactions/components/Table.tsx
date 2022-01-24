import React, { FC } from 'react';
import { TableRow } from './TableRow';

export const Table:FC<any> = ({ transactions, deleteHandler }) => {
    const Trow = Object.keys(transactions).length && Object.values(transactions).map((user: any) => <TableRow key={user.id} {...{...user, deleteHandler}} />);
  return <>
    <table className="table table-striped">
        <thead>
            <tr>
            <th scope="col">ID:</th>
            <th scope="col">AMMOUNT:</th>
            <th scope="col">FROM:</th>
            <th scope="col">TO:</th>
            <th scope="col">TOKEN:</th>
            <th scope="col">TOKEN-Name:</th>
            <th scope="col"></th>
            </tr>
        </thead>
        <tbody>
            {Trow}
        </tbody>
    </table>
  </>;
}
