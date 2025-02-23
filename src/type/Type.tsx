

export interface IApi {
    id?: number
    title?: string
    price?: number
    description?: string
    category?: string
    image?: string
    rating?: ApiRating
  }

  export interface jdataWithpagination {
data : Ijdata[]
first: number | null
items: number | null
last: number | null
next: number | null
pages: number 
prev : number | null

  }
  
  export interface ApiRating {
    rate?: number
    count?: number
  }

  export interface Idiscount{
    discount(formatNumberWithCommas:number,number:number):number
  }

  export interface Ijdata {
    id : string ,
    image : string , 
    Description : string , 
    title : string
  }
  