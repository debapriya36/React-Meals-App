import React from 'react';
import axios from 'axios';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { useState } from 'react';
import './Body.css'

export default function Body() {


    const[items,setItems]=useState([]);

     useEffect(()=>{
       axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood').then((res)=>{
                  console.log(res.data);

                  setItems(res.data.meals);

       }).catch((err)=>{
        console.log('ma chuda');
       })
     },[])

     const itemList=items.map((i)=>
     {
        return <div className='col-md-4'>

            <h4> {i.strMeal}</h4>
            <img src={i.strMealThumb}/>
            <p> Food Id: {i.idMeal}</p>

        </div>
     })

    return <div className='row'>
        {itemList}
        <hr />
    </div>
}

