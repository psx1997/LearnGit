import { deleteList, fetchList, insertList, updateList } from '@/services/table';
import type { TableModelType } from '@/pages/TableDemo/type';
import { message } from 'antd';

const Model: TableModelType = {
  namespace: 'table',
  state: {
    data: undefined
  },
  effects: {
    * fetch(_, { call, put }) {
      const response = yield call(fetchList);
      yield put({
        type: 'changeData',
        payload: response.data
      });
    },
    * insert({ payload, callback }, { call, put }) {
      const key = 'insert-message';
      message.loading({ key, content: '正在添加数据...' });
      const response = yield call(insertList, payload);
      if (callback && typeof callback === 'function' && response.success) {
        callback(response);
        message.success({ key, content: '数据添加成功', duration: 2 });
        yield put({ type: 'fetch' });
      } else {
        message.error({ key, content: '数据添加失败', duration: 2 });
      }
    },
    * update({ payload, callback }, { call, put }) {
      const key = 'update-message';
      message.loading({ key, content: '正在更新数据...' });
      const response = yield call(updateList, payload);
      if (callback && typeof callback === 'function' && response.success) {
        callback(response);
        message.success({ key, content: '数据更新成功', duration: 2 });
        yield put({ type: 'fetch' });
      } else {
        message.error({ key, content: '数据更新失败', duration: 2 });
      }
    },
    * delete({ payload }, { call, put }) {
      const key = 'delete-message';
      message.loading({ key, content: '正在删除数据...' });
      const response = yield call(deleteList, payload);
      if (response.success) {
        message.success({ key, content: '数据删除成功', duration: 2 });
        yield put({ type: 'fetch' });
      } else {
        message.error({ key, content: '数据删除失败', duration: 2 });
      }
    }
  },
  reducers: {
    changeData(state, { payload }) {
      return {
        ...state,
        data: payload
      };
    }
  }
};

export default Model;
