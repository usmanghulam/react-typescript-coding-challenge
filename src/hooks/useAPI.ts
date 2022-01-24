import { useCallback } from 'react';
import { toast } from 'react-toastify';
import { Task, MethodsProps } from '../types';

const UseAPI = () => {
  const getTasks = useCallback(async (methods: MethodsProps): Promise<Task[]> => {
    try {
      const { method, endpoint, body } = methods;
      const others: any = {
        method: method,
        mode: 'cors',
        credentials: 'include',
      }
      if (method === "POST") {
        others.body = JSON.stringify(body);
      }
      const response = await fetch(endpoint, others);
      if (response.status !== 200) {
        toast(`API request failed`, { type: 'error' });
        return [];
      }
      return await response.json();
    } catch (e) {
      console.log(e);
      toast(`API request failed`, { type: 'error' });
    }
    return [];
  }, []);
  return {
    getTasks
  };
};

export default UseAPI;
