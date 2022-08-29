import React from 'react';

const New = ({categories,filterdat}) => {
    return <div className='btn-container'>
    {categories.map ((cat,index) =>{
return <button type='button' className='filter-btn' key={index} onClick= {()=> filterdat(cat)}>
 {cat} 
</button>
    })}
 </div>;
};

export default New;
