import React, { useEffect, useState } from 'react';
import { Button, Space, Table } from 'antd';
import { endpoints } from '../../../API/base';
import { getAll } from '../../../API';
import Delete from '../Delete/Delete';

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
  },
];

const CountriesAdmin = () => {
  const[data, setData]=useState([])
  async function getData(){
    await getAll(endpoints.countries).then((res)=>{
      setData(res.data)
      console.log(res.data)
    })
  }
  useEffect(()=>{
    getData()
  },[])



  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };
  const clearFilters = () => {
    setFilteredInfo({});
  };
  const clearAll = () => {
    setFilteredInfo({});
    setSortedInfo({});
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    
      filteredValue: filteredInfo.name || null,
      onFilter: (value, record) => record.name.includes(value),
      sorter: (a, b) => a.name.length - b.name.length,
      sortOrder: sortedInfo.columnKey === 'name' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'population',
      dataIndex: 'population',
      key: 'population',
      sorter: (a, b) => a.population - b.population,
      sortOrder: sortedInfo.columnKey === 'population' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'capital',
      dataIndex: 'capital',
      key: 'capital',
    
      filteredValue: filteredInfo.capital || null,
      onFilter: (value, record) => record.capital.includes(value),
      sorter: (a, b) => a.capital.length - b.capital.length,
      sortOrder: sortedInfo.columnKey === 'capital' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'description',
      dataIndex: 'description',
      key: 'description',
    
      filteredValue: filteredInfo.description || null,
      onFilter: (value, record) => record.description.includes(value),
      sorter: (a, b) => a.description.length - b.description.length,
      sortOrder: sortedInfo.columnKey === 'description' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'flagImg',
      dataIndex:'flagImg',
      render: (t, r) => <img style={{width:"100px", height:"70px"}} src={`${r.flagImg}`} />,
      key: 'flagImg',
    
    },
    {
      title: 'Delete',
      dataIndex: '',
      key: 'description',
      render: (text, record) => ( 
        <Delete text={text} id={record.id}/>
      ),
    }
  ];
  return (
    <>
    <Space
      style={{
        marginBottom: 16,
      }}
    >
    
      <Button onClick={clearFilters}>Clear filters</Button>
      <Button onClick={clearAll}>Clear filters and sorters</Button>
    </Space>
    <Table rowKey={obg=>obg.id} columns={columns} dataSource={data} onChange={handleChange} />
  </>

  )
}

export default CountriesAdmin