const InitalValue={
Movies:[],
lang: "En"
}
export default function MovieReducer (state=InitalValue,action){

switch(action.type){
    case "ADD_TO_FAV":
        return{
            Movies :[
                ...state.Movies,{
                    movie:action.movie,
                   
                }
            ],


        }
        case "CHANGE_LANG": 
        return {
            ...state,
           lang: action.payload
        }
        case "REMOVE_FROM_FAV":
            const item_index=action.payload;
            const newState={...state};
            newState.Movies.splice(item_index,1);
            
            return newState;
            
    default:  
        return state
}
}

// return state.filter((item) => item.movie.id !== action.payload);