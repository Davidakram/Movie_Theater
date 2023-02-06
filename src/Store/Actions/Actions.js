export const AddtoFav=(movie)=>{
    return{
        type:"ADD_TO_FAV",
        movie,
  
    }
}

export const RemoveFromFav=(payload)=>{
    return{
        type:"REMOVE_FROM_FAV",
        payload
    }
}

export const changeLanguage=(payload)=>{
    return{
        type:"CHANGE_LANG",
        payload
    }
}

