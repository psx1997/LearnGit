import request from '@/utils/request';
import { ListData } from '@/pages/TableDemo/type';

export const fetchList = async () => {
  return request('/api/getList', {
    method: 'GET'
  });
};

export const insertList = async (params: ListData) => {
  return request('/api/addList', {
    method: 'POST',
    data: params
  });
};


export const updateList = async (params: ListData) => {
  return request('/api/updateList', {
    method: 'POST',
    data: params
  });
};

export const deleteList = async (id: number) => {
  return request(`/api/removeList?id=${ id }`, {
    method: 'GET'
  });
};
