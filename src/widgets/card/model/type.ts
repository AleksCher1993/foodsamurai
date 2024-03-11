export type cardType={
    id:string,
    title:string,
    imageUrl:string,
    price:number,
    count:number,
    type?:number,
    size?:number,
    navType:string,
    }
    
    export interface ICardSlice{
        card:cardType[],
        totalCount:number,
        totalPrice:number,
        loading:string
    }
    
    