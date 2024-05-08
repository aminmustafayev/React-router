import React, { useEffect, useState } from 'react';
import { Space, Modal, Table,Input } from 'antd';
import { Button } from "@mui/material";
import { endpoints } from '../../../API/base';
import { getAll } from '../../../API';
import Delete from '../Delete/Delete';
import ModeEditIcon from "@mui/icons-material/ModeEdit";
const { TextArea } = Input;
import controller from '../../../API';




const CountriesAdmin = () => {
  const [data, setData] = useState([])
  async function getData() {
    await getAll(endpoints.countries).then((res) => {
      setData(res.data)
      console.log(res.data)
    })
  }
  useEffect(() => {
    getData()
  }, [])
  const [countries,setCountries]= useState(data[4]) ;
  //Modal
  const[editCountry,setEditCountry]=useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    const newUpdate={
      name: editCountry.name,
      capital: editCountry.capital,
      population:editCountry.population,
      flagImg:editCountry.flagImg,
      description:editCountry.description
    }
    controller.patch(endpoints.countries,editCountry.id,newUpdate).then(()=>getData())
    
    // setCountries((currentCountries) => {
    //   const idx = currentCountries.findIndex((x) => x.id == editCountry.id);
    //   currentCountries.splice(idx, 1, editCountry);
    //   return [...currentCountries];
    // });
    setEditCountry(null)
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setEditCountry(null)
    setIsModalOpen(false);
  };



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
      dataIndex: 'flagImg',
      render: (t, r) => <img style={{ width: "100px", height: "70px" }} src={`${r.flagImg}`} />,
      key: 'flagImg',

    },
    {
      title: 'Edit',


      render: (record) => {
        //burani yadda saxla eroro cixa biler value={editCountry.name} type='text'
        return (
          <Button onClick={() => {
            showModal()
            setEditCountry(record)
          }} variant="outlined"
            color="primary">
            <ModeEditIcon />
          </Button>
        )
      },
    },
    {
      title: 'Delete',
      dataIndex: '',
      key: 'description',
      render: (text, record) => (
        <Delete getData={getData} text={text} id={record.id} />
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
      <Table rowKey={obg => obg.id} columns={columns} dataSource={data} onChange={handleChange} />

      <Modal title="Country" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <form  style={{display:"flex", flexDirection:'column', gap:"12px"}}>
      <Input onChange={(e)=>setEditCountry({...editCountry, name: e.target.value})} value={editCountry?.name} type='text'  placeholder="Name" />
      <Input onChange={(e)=>setEditCountry({...editCountry, capital: e.target.value})} value={editCountry?.capital} type='text'  placeholder="Capital" />
      <Input onChange={(e)=>setEditCountry({...editCountry, population: e.target.value})} value={editCountry?.population} type='text'  placeholder="Population" />
      <Input onChange={(e)=>setEditCountry({...editCountry, flagImg: e.target.value})} value={editCountry?.flagImg} type='text'  placeholder="Flag Img URL" />
      <TextArea onChange={(e)=>setEditCountry({...editCountry, description: e.target.value})} value={editCountry?.description} type='text' rows={4} placeholder="description" />
      </form>
      </Modal>
    </>

  )
}

export default CountriesAdmin