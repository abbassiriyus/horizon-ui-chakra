import { Checkbox, Input, Typography } from "antd";
import React from "react";
import { runes } from 'runes2';
import "../style.css"
import TextArea from "antd/es/input/TextArea";
export default function InputPage(props) {
  
  
  return <div>

<div className="formall">
<div className="oneinput">
    <Typography.Title  level={5}>Название</Typography.Title>
      <Input
        count={{
          show: true,
          max: 200,
          strategy: (txt) => runes(txt).length,
          exceedFormatter: (txt, { max }) => runes(txt).slice(0, max).join(''),
        }}
      />
</div>
<div className="oneinput">
    <Typography.Title  level={5}>Модель</Typography.Title>
      <Input
        count={{
          show: true,
          max: 50,
          strategy: (txt) => runes(txt).length,
          exceedFormatter: (txt, { max }) => runes(txt).slice(0, max).join(''),
        }}
      />
</div>
<div className="oneinput">
    <Typography.Title  level={5}>Изображения <Checkbox/> файл </Typography.Title>
      <input style={{border:'none',borderRadius:'5px',width:'100%'}} type="text"     />
</div>
<div className="oneinput">
    <Typography.Title  level={5} >Гарантия</Typography.Title>
      <Input
      type="number"
        count={{
          show: true,
          max: 1,
        }}
      />
</div>
<div className="oneinput">
    <Typography.Title level={5}>Описание</Typography.Title>
      <TextArea />
</div>

</div>


   
{props.id}






  </div>;
}
