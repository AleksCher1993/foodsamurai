export const getSliceText=(text:string,maxTextLengh:number=50):string=>{
    return text.slice(0,maxTextLengh)+"..."
}