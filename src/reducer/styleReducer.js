import {combineReducers} from 'redux'

//redux tutorial in redux doc https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers
//help from Trang

const defaultStyles = {
    type1: {
        id: 'Birthday',
        color: 'Yellow',
        font: 'Lucida Console',
        size: 14,
        fontstyle: 'Italic', 
        background: 'Green',
        name:'',
        receipt:'',
        wish:'',
        image:'',
    }, 
    type2: {
        id: 'Graduation',
        color: 'Yellow',
        font: 'Times New Roman',
        size: 15,
        fontstyle: 'Oblique', 
        background: 'Blue',
        name:'',
        receipt:'',
        wish:'',
        image:'',
    }, 
    type3: {
        id: 'Anniversary',
        color: 'Red',
        font: 'Georgia',
        size: 16,
        fontstyle: 'Italic', 
        background: 'White',
        name:'',
        receipt:'',
        wish:'',
        image:'',
    }, 
    type4: {
        id: 'NewYear',
        color: 'Black',
        font: 'Verdana',
        size: 14,
        fontstyle: 'Normal', 
        background: 'Yellow',
        name:'',
        receipt:'',
        wish:'',
        image:'',
    }, 
}

const initialStyle = {
    id: '',
    color: 'White',
    font: 'Arial',
    size: 15,
    fontstyle: 'Normal', 
    background: 'Salmon',
    name:'',
    receipt:'',
    wish:'',
    image:'',
}

const reducer = combineReducers(
    {
        style: styleReducer
    }
)

function getCard (state, action){
    return {
        ...state,
        ...action.value
    }
}

function setCard(state, action){
    const name = Object.keys(defaultStyles)
    const key = name.filter(tempt => 
        defaultStyles[tempt].id === action.key);
    return defaultStyles[key];
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
        case 'get':{
            return getCard(state, action)
        }
        default:
            return state
        
    }
}
export default reducer
