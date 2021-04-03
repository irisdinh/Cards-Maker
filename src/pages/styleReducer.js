import {combineReducers} from 'redux'

const defaultStyles = {
    type1: {
        id: 'Birthday',
        color: 'yellow',
        font: 'Lucida Console',
        size: 14,
        fontstyle: 'italic', 
        background: 'green',
        name:'',
        receipt:'',
        wish:'',
        image:''
    }, 
    type2: {
        id: 'Graduation',
        color: 'yellow',
        font: 'Times New Roman',
        size: 14,
        fontstyle: 'oblique', 
        background: 'blue',
        name:'',
        receipt:'',
        wish:'',
        image:''
    }, 
    type3: {
        id: 'Anniversary',
        color: 'red',
        font: 'Georgia',
        size: 14,
        fontstyle: 'italic', 
        background: 'white',
        name:'',
        receipt:'',
        wish:'',
        image:''
    }, 
    type4: {
        id: 'NewYear',
        color: 'black',
        font: 'Verdana',
        size: 14,
        fontstyle: 'normal', 
        background: 'yellow',
        name:'',
        receipt:'',
        wish:'',
        image:''
    }, 
}
const initialStyle = {
    id: '',
    color: 'white',
    font: 'Arial',
    size: 14,
    fontstyle: 'normal', 
    background: 'salmon',
    name:'',
    receipt:'',
    wish:'',
    image:''
}
const reducer = combineReducers(
    {
        style: styleReducer
    }
)

function setCard(state, action){
    const name = Object.keys(defaultStyles)
    
    name.map(tempt => {
        const current = defaultStyles.[tempt].id
        console.log(current)
        console.log(action.key)
        console.log()
        if (action.key == current) {
            
            state=defaultStyles.[tempt]
            
        }
    })
    
    return {
        ...state
    }
}

function updateCard(state, action){
 
    return {
        ...state,
        [action.key]: action.value
    }
}
function styleReducer(state = initialStyle, action) {
    switch (action.type) {
        case 'update':{
            return updateCard(state,action)
        }
        case 'set':{
            return setCard(state, action)
        }
        default:
            return state
        
    }
}
export default reducer
