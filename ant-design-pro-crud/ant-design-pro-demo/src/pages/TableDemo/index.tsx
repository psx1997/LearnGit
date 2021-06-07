import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { connect } from 'umi';
import ProTable from '@ant-design/pro-table';
import { Button, Popconfirm, Space } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-layout';
import ProForm, { ModalForm, ProFormDateTimePicker, ProFormDigit, ProFormText } from '@ant-design/pro-form';
import type { ProColumns } from '@ant-design/pro-table';
import type { ListData, TableDemoConnectState, TableDemoProps } from '@/pages/TableDemo/type';

const TableDemo: React.FC<TableDemoProps> = (props: TableDemoProps) => {

  const { dispatch, fetchLoading, table: { data } } = props;
  const [ modalForm ] = ProForm.useForm();
  const [ formModalTitle, setFormModalTitle ] = useState<string>('');
  const [ formModalVisible, setFormModalVisible ] = useState<boolean>(false);
  const [ currentRecord, setCurrentRecord ] = useState<ListData | undefined>(undefined);

  useEffect(() => {
    dispatch({ type: 'table/fetch' });
  }, []);

  const showFormHandler = (type: string, data?: ListData) => {
    switch (type) {
      case 'NEW':
        setFormModalTitle('新建表单');
        setFormModalVisible(true);
        break;
      case 'EDIT':
        setCurrentRecord(data);
        setFormModalTitle('修改表单');
        setFormModalVisible(true);
        break;
      default:
        throw new Error('showFormHandler function require a type!');
    }
  };

  const closeFormHandler = () => {
    modalFormResetHandler();
    setFormModalTitle('');
    setFormModalVisible(false);
    setCurrentRecord(undefined);
  };

  const modalFormResetHandler = () => {
    modalForm.resetFields();
  };

  const modalFormFinishHandler = async (values: ListData) => {
    dispatch({
      type: 'table/insert',
      payload: values,
      callback: ({ success }) => success && closeFormHandler()
    });
  };

  const modalFormUpdateHandler = async (values: ListData) => {
    dispatch({
      type: 'table/update',
      payload: values,
      callback: ({ success }) => success && closeFormHandler()
    });
  };

  const deleteRecordHandler = (id: number) => {
    dispatch({
      type: 'table/delete',
      payload: id
    });
  };

  const columns: ProColumns<ListData>[] = [
    {
      title: '名称',
      align: 'center',
      dataIndex: 'name'
    }, {
      title: '地址',
      align: 'center',
      dataIndex: 'address'
    }, {
      title: '部门',
      align: 'center',
      dataIndex: 'department'
    }, {
      title: '项目',
      align: 'center',
      dataIndex: 'project'
    }, {
      title: '日期时间',
      align: 'center',
      dataIndex: 'time',
      renderText: (text) => moment(text).format('YYYY-MM-DD HH:mm:ss')
    }, {
      title: '操作',
      align: 'center',
      dataIndex: 'operate',
      render: (_, record: ListData) => {
        return (
          <Space>
            <Button type='link' onClick={ () => showFormHandler('EDIT', record) }>修改</Button>
            <Popconfirm title='确认删除?' okText='删除' cancelText='取消' onConfirm={ () => deleteRecordHandler(record.id) }>
              <Button type='link' danger>删除</Button>
            </Popconfirm>
          </Space>
        );
      }
    }
  ];

  return (
    <>
      <PageContainer title='Table CRUD Demo'>
        <Space direction='vertical' size='large' style={ { width: '100%' } }>
          <Button type='primary' onClick={ () => showFormHandler('NEW') }>
            <PlusOutlined/>
            新建表单
          </Button>
          <ProTable<ListData>
            rowKey='id'
            search={ false }
            columns={ columns }
            dataSource={ data }
            pagination={ false }
            toolBarRender={ false }
            loading={ fetchLoading }
          />
        </Space>
        <ModalForm<ListData>
          width='550px'
          form={ modalForm }
          title={ formModalTitle }
          visible={ formModalVisible }
          initialValues={ { ...currentRecord } }
          onReset={ () => modalFormResetHandler() }
          onFinish={ values => !currentRecord ? modalFormFinishHandler(values) : modalFormUpdateHandler(values) }
          modalProps={ {
            destroyOnClose: true,
            onCancel: () => closeFormHandler(),
            maskStyle: { backdropFilter: 'blur(2px)', backgroundColor: 'rgba(0, 0, 0, .2)' }
          } }
          submitter={ {
            searchConfig: {
              resetText: '取消',
              submitText: currentRecord ? '修改' : '新建'
            },
            render: (props, defaultDoms) => {
              return [
                defaultDoms[ 0 ],
                <Button key='restForm' onClick={ () => props.reset() }>{ currentRecord ? '恢复默认' : '重置表单' }</Button>,
                defaultDoms[ 1 ]
              ];
            }
          } }
        >
          { currentRecord && <ProFormDigit disabled name='id' label='ID' tooltip='ID' width='xl'/> }
          <ProFormText
            name='name' label='名称' tooltip='名称' placeholder='输入名称' width='xl'
            rules={ [ { required: true, message: '需输入名称!' } ] }
          />
          <ProFormText
            name='address' label='地址' tooltip='地址' placeholder='输入地址' width='xl'
            rules={ [ { required: true, message: '需输入地址!' } ] }
          />
          <ProFormText
            name='department' label='部门' tooltip='部门' placeholder='输入部门' width='xl'
            rules={ [ { required: true, message: '需输入部门!' } ] }
          />
          <ProFormText
            name='project' label='项目' tooltip='项目' placeholder='输入项目' width='xl'
            rules={ [ { required: true, message: '需输入项目!' } ] }
          />
          <ProFormDateTimePicker
            name='time' label='日期时间' tooltip='日期时间' placeholder='选择日期时间' width='xl'
            rules={ [ { required: true, message: '需选择日期时间!' } ] }
          />
        </ModalForm>
      </PageContainer>
    </>
  );
};

export default connect(({ table, loading }: TableDemoConnectState) => ({
  table,
  fetchLoading: loading.effects[ 'table/fetch' ]
}))(TableDemo);
