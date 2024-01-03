import React, { useState } from 'react';

import "./style.css"
import Product from "./Product/Product.js"
import BigCategory from "./Bigcategory/BigCategory.js"
import Category from "./Category/Category.js"
import SubCategory from "./Subcategory/SubCategory.js"
import { Radio } from 'antd';


export default function Settings() {
var [page,setPage]=useState(0)

  return <div>
<div className="body_product">
<Radio.Group  onChange={(e) => setPage(e.target.value*1)}>
        <Radio.Button value="0">Product</Radio.Button>
        <Radio.Button value="1">Bigcategory</Radio.Button>
        <Radio.Button value="2">Category</Radio.Button>
        <Radio.Button value="3">Subcategory</Radio.Button>
      </Radio.Group>

{page===0?(<div><Product/></div>):(<div></div>)}
{page===1?(<div><BigCategory/></div>):(<div></div>)}
{page===2?(<div><Category/></div>):(<div></div>)}
{page===3?(<div><SubCategory/></div>):(<div></div>)}


</div>

  </div>;
}
