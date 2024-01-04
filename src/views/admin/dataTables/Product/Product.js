import { SearchOutlined } from '@ant-design/icons';
import React, { useRef, useState,useEffect } from 'react';
import Highlighter from 'react-highlight-words';
import "../style.css"
import { Button, Image, Input, Space, Table,message, Popconfirm } from 'antd';
import axios from 'axios';
import url from 'host/host';
import InputPage from './InputPage';


export default function Settings() {
    var [data,setData]=useState([])
    var [page,setPage]=useState(0)
    var [select,setSelect]=useState(0)
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const confirm = (e) => {
  console.log(e);
  message.success('Click on Yes');
};
const cancel = (e) => {
  console.log(e);
  message.error('Click on No');
};

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? '#1677ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });
  const columns = [
    {
        title: 'Image',
        dataIndex: 'image',
        render:(_,item)=><Image style={{height:'80px'}} src={item.image} alt='no image'/>
      },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      ...getColumnSearchProps('title'),
    },
    {
        title: 'Модель',
        dataIndex: 'model',
        key: 'model',
        ...getColumnSearchProps('model'),
      },
    {
      title: 'look',
      dataIndex: 'look_mor',
      key: 'look_mor',
    },
    {
        title: 'Гарантия',
        dataIndex: 'kafolat',
        key: 'kafolat',
      },
      {
        title: 'Артикул',
        dataIndex: 'maqola',
        key: 'maqola',
        ...getColumnSearchProps('maqola'),
      },
      {
        title: 'Производитель',
        dataIndex: 'homiy',
        key: 'homiy',
        ...getColumnSearchProps('homiy'),
         sorter: (a, b) => a.homiy.length - b.homiy.length,
      sortDirections: ['descend', 'ascend'],
      },
    {
        title: 'Edit',
      render:(_,item)=><Button onClick={()=>{setSelect(item.id);setPage(1)}}>Edit</Button>
      },
    {
      title: 'Delete',
    render:()=>  <Popconfirm
    title="Delete the task"
    description="Are you sure to delete this task?"
    onConfirm={confirm}
    onCancel={cancel}
    okText="Yes"
    cancelText="No"
  >
    <Button danger>Delete</Button>
  </Popconfirm>
    }
  ];
useEffect(()=>{
axios.get(`${url}/api/product`).then(res=>{
    setData(res.data)
    console.log(res.data);
}).catch(err=>{
    console.log(err);
})
},[])


  return <div>

{page==0?(
    <div>
     <Button onClick={()=>{setSelect(0);setPage(1)}} style={{margin:'10px'}} type="primary">Create Product</Button>
<Table columns={columns} dataSource={data} />   
    </div>
):(<div></div>)}
{page==1?(
    <div>
        <Button type="dashed" onClick={()=>{setPage(0)}} style={{cursor:'pointer',margin:'10px'}}>Close</Button>
   <InputPage id={select}/>  
    </div>
):(<div></div>)}



  </div>;
}