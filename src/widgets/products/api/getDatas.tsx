import { instance } from "../../../app/api";
import { itemsType } from "../model/type";



  export const mainApi={
    getDatas:(sortBy:string,order:string,category:string|undefined,title:string|undefined)=>
        instance.get<itemsType[]>(`?order=${order}&sortBy=${sortBy}&category=${category}&title=${title}`)
        .then(response=>{
          return response.data
        })
  }