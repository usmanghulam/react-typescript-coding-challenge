import React, { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import UseAPI from '../../../hooks/useAPI';
import useQuery  from '../../../hooks/useQuery';
import { actions, useDispatch, useSelector } from '../../../store';
import MoreBtn from '../components/MoreBtn';
import { Table } from '../components/Table';
import "../transitions.scss";

const Transactions: FC = () => {
    const { query, setQuery } = useQuery();
    const location = useLocation();
    const { getTasks } = UseAPI();
    const dispatch = useDispatch();
    const transactions = useSelector(state => state.transactions);
    const [page, setPage] = useState(0);
    const getUsers = () => {
        const { page } = query || {};
        const methods = {
            method: "GET",
            endpoint: `${process.env.REACT_APP_API_URL}/transactions?page=${!location.search ? 0 : page}`,
        };
        let runFunc : any;
        if (!location.search) {
            setPage(0);
            runFunc = actions.setUsers;
        } else {
            runFunc = actions.addTransactions;
        }
        getTasks(methods).then(users => {
            if (typeof runFunc === "function") {
                dispatch(runFunc({ transaction: users }));
            }
        }).catch(err => console.error(err));
    }
    useEffect(() => {
        getUsers();
    }, [location.search]);
    const deleteHandler = (id: string) => {
        const methods = {
            method: "GET",
            endpoint: `${process.env.REACT_APP_API_URL}/transactions/delete/${id}`,
        };
        getTasks(methods).then((user) => {
            dispatch(actions.deleteUser({ user }));
        }).catch(err => console.error(err));
    };
    const loadMoreUsers = () => {
        setPage(page => {
            let newPage = page + 1;
            setQuery({ page: `${newPage}` });
            return newPage;
        });
    };
  return <>
    <Table transactions={transactions} deleteHandler={deleteHandler} />
    <MoreBtn loadMoreUsers={loadMoreUsers} />
  </>;
}

export default Transactions;
