import { InputValues } from './components/user/interfaces/interface';
export type Transaction = {
  id: string;
  from: string;
  to: string;
  amount: string;
  token: string;
  tokenName: string;
  deleteHandler?: (id: string) => void;
};

export type Task = {
  description: string;
  done: boolean;
};

export type State = {
  user: string;
  transactions: {
    [key: string]: Transaction;
  };
  tasks: Task[];
};

export type MethodsProps = {
  method: string;
  endpoint: string;
  body?: InputValues;
}