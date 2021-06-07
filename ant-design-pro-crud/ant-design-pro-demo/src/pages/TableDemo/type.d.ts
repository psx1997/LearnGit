import type { Effect, Reducer, Dispatch } from 'umi';

export type ResponseDataType = {
  code: number,
  success: boolean,
  message: string,
  data: any;
};

export type TableModelStateType = {
  data: ListData[] | undefined
};

export type TableModelType = {
  namespace: string;
  state: TableModelStateType;
  effects: {
    fetch: Effect;
    insert: Effect;
    update: Effect;
    delete: Effect;
  };
  reducers: {
    changeData: Reducer<TableModelStateType>;
  };
};

export type ListData = {
  id: number;
  name: string;
  address: string;
  department: string;
  project: string;
  time: string;
};

export type TableDemoProps = {
  dispatch: Dispatch;
  table: TableModelStateType;
  fetchLoading: boolean;
}

export type TableDemoConnectState = {
  table: TableModelStateType;
  loading: { effects: string[] };
}
