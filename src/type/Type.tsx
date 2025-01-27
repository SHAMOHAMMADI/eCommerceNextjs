import React from 'react'


export interface IApi {
    id?: number
    title?: string
    price?: number
    description?: string
    category?: string
    image?: string
    rating?: ApiRating
  }
  
  export interface ApiRating {
    rate?: number
    count?: number
  }


  export interface Ijdata {
    id : string ,
    image : string , 
    Description : string , 
    title : string

  }
  