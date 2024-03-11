export enum loadingEnum{
    IDLE="idle",
    PENDING="pending",
    SUCCESS="succeeded",
    FAILD="failed",
  
  }
  export enum navEnum{
    PIZZA="pizzas",
    ROLL="rolls",
    SETROLL="setsrolls",
    DRINK="drinks"
  }
  export type queryParams={
    sortBy:string,
    order:string,
    category?:string,
    title?:string,
  }
  export type itemsType={
    id:string,
    imageUrl:string,
    title:string,
    types?:number[],
    sizes?:number[],
    price:number,
    category:number,
    rating:number,
    description:string,
    navType:string,
  }

  export interface IHomeSlice{
    items:itemsType[],
    query:{sortBy: string, order: string, category:string,title:string},
    loading:string,
  }
  