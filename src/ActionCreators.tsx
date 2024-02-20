export const moviesdata = (alldata:any) => {
    return { type:"ALL_MOVIE_DATA" , payload:alldata }
}
export const moviegenres = (name:any) =>{
    return { type:"NAME", payload:name }
}
export const movieDetail = (data:any)=>{
    return {type:"MOVIE_DETAIL", payload:data}
}
export const feeling = (data:any)=>{
    return {type:"FEELING", payload:data}
}
export const actorname = (data:any)=>{
    return {type:"ACTOR_NAME",payload:data}
}
export const actorDetail = (data:any)=>{
    return {type:"ACTOR_DETAIL",payload:data}
}
export const searchItem = (data:string)=>{
    return {type:"SEARCH_ITEM",payload:data}
}