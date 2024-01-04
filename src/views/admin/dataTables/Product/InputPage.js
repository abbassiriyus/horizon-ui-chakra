import { Button, Checkbox, Input, Select, Typography } from "antd";
import React, { useEffect, useState } from "react";
import "../style.css"
import axios from "axios";
import url from "host/host";
export default function InputPage(props) {
 var [ishlab,setIshlab]=useState([])
 var [bigCategory,setBigCategory]=useState([])
 var [category,setCategory]=useState([])
 var [subCategory,setSubCategory]=useState([])


function getIshlabCh(){
  axios.get(`${url}/api/ishlab_chiqaruvchi`).then(res=>{
setIshlab(res.data)
  })
}

function getCategory(){
    axios.get(`${url}/api/ishlab_chiqaruvchi`).then(res=>{
        axios.get(`${url}/api/ishlab_chiqaruvchi`).then(res=>{
            axios.get(`${url}/api/ishlab_chiqaruvchi`).then(res=>{
 
            })
        })
    })
  }
  

    useEffect(()=>{

getIshlabCh()



if(props.id!==0){
    axios.get(`${url}/api/product`).then(res=>{
        console.log(res.data);
 var one=res.data.filter(item=>item.id=props.id)

document.querySelector('#name_input').value=one[0].title
document.querySelector('#model_input').value=one[0].model
document.querySelector('#image_file').value=one[0].image
document.querySelector('#davlat_input').value=one[0].davlat
document.querySelector('#input_model').value=one[0].model
document.querySelector('#price_input').value=one[0].price
document.querySelector('#input_skitka').value=one[0].skitka
document.querySelector('#input_kafolat').value=one[0].kafolat
document.querySelector('#podgotivka').checked=one[0].sotishdan_oldin
document.querySelector('#maskva_das').checked=one[0].free_mas
document.querySelector('#desc_input').value=one[0].desc


    }).catch(err=>{
        console.log(err);
    })
}


    },[])




  
  return <div>

<div className="formall">
<div className="oneinput">
    <Typography.Title  level={5}>Название</Typography.Title>
      <input className="input_antd"
      id="name_input"
      />
</div>
<div className="oneinput">
    <Typography.Title  level={5}>Модель</Typography.Title>
      <input className="input_antd"
      id="model_input"
     
      />
</div>
<div className="oneinput">
    <Typography.Title  level={5}>Изображения <Checkbox onClick={(e)=>{if(e.target.checked){
        document.querySelector('#image_file').type="file"
    }else{
        document.querySelector('#image_file').type="text"
    }}} /> файл </Typography.Title>
      <input className="input_antd"  type="text"   id="image_file"  />
</div>
<div className="oneinput">
    <Typography.Title  level={5}>Страна производства</Typography.Title>
      <input className="input_antd"
     id="davlat_input"
      />
</div>
<div className="oneinput">
    <Typography.Title  level={5}>Артикул</Typography.Title>
      <input className="input_antd"
     id="input_model"
      />
</div>
<div className="oneinput">
    <Typography.Title  level={5}>Цена</Typography.Title>
      <input className="input_antd"
        id="price_input"
       type="number"
      />
</div>
<div className="oneinput">
    <Typography.Title  level={5}>Акции</Typography.Title>
      <input className="input_antd"
      id="input_skitka"
        type="number"
      />
</div>
<div className="oneinput">
    <Typography.Title  level={5}>Производитель</Typography.Title>
     <Select style={{border:'none',borderRadius:'5px',width:'100%',height:'35px',outline:'none'}}>
     {ishlab.map(item=>{
            return <option value={item.id}>{item.title}</option>
        })}
     </Select>
</div>
<div className="oneinput">
    <Typography.Title  level={5} >Гарантия</Typography.Title>
      <input className="input_antd"
      id="input_kafolat"
      type="number"
        count={{
          show: true,
          max: 2,
        }}
      />
</div>
<div className="oneinput">
    <Typography.Title  level={5}>Основная Категория</Typography.Title>
     <Select  style={{border:'none',borderRadius:'5px',width:'100%',height:'35px',outline:'none'}}>
        <option value="1">123</option>
     </Select>
</div>
<div className="oneinput">
    <Typography.Title  level={5}>Категория</Typography.Title>
     <Select style={{border:'none',borderRadius:'5px',width:'100%',height:'35px',outline:'none'}}>
        <option value="1">123</option>
     </Select>
</div>
<div className="oneinput">
    <Typography.Title  level={5}>Подкатегория</Typography.Title>
     <Select style={{border:'none',borderRadius:'5px',width:'100%',height:'35px',outline:'none'}}>
     <option value="1">123</option>
        
     </Select>
</div>
<div className="oneinput">
    <Typography.Title level={5}><Checkbox id="podgotivka" /> Предпродажная подготовка</Typography.Title>
    <Typography.Title level={5}><Checkbox id="maskva_das"/> Доставка 100 км от МКАД - 0 руб</Typography.Title>
</div>
<div className="oneinput">
    <Typography.Title level={5}>Описание</Typography.Title>
      <textarea style={{border:'none',borderRadius:'5px',width:'100%',height:'35px',outline:'none',boxShadow:"0px 0px 1px grey",minHeight:'200px',padding:'5px'}} id="desc_input" />
</div>

</div>
 {props.id===0?(<center> <Button type="primary" >Create</Button> </center>):(<center> <Button type="primary" >Update</Button> </center>)} 


   
{props.id}






  </div>;
}
