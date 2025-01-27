import { Ijdata } from '@/type/Type'
import React from 'react'

function Main({id,image,Description,title}:Ijdata) {
  return (
    <div className="flex flex-col border inner-shadow p-2 rounded">
<img src={image} alt="" className="w-72"/>
<div className="flex flex-col items-center">

<h3>{Description}</h3>
<h2>{title}</h2>
</div>
    </div>
  )
}

export default Main