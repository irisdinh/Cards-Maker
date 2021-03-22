const defaultStyles = {
    type1: {
        id: 'Birthday',
        color: 'pink',
        font: 'aria',
        size: '14',
        backgound: 'yellow',
        name:'',
        receipt:'',
        wish:''
    }, 
    type2: {
        id: 'Graduation',
        color: 'yellow',
        font: 'aria',
        size: '14',
        backgound: 'blue',
        name:'',
        receipt:'',
        wish:''
    }, 
    type3: {
        id: 'Anniversary',
        color: 'red',
        font: 'aria',
        size: '14',
        backgound: 'white',
        name:'',
        receipt:'',
        wish:''
    }, 
    type4: {
        id: 'New Year',
        color: 'black',
        font: 'aria',
        size: '14',
        backgound: 'yellow',
        name:'',
        receipt:'',
        wish:''
    }, 
}
const initialStyle = {
    id: '',
    color: 'black',
    font: 'aria',
    size: '14',
    backgound: 'white',
    name:'',
    receipt:'',
    wish:''
}
function newCard(state){
    return {
        ...state
    }
}
function updateCard(state){
    return {
        ...state
    }
}
function reducer(state, action) {
    switch (action.type) {
        case 'new':{
            return newCard(state)
        }
        case 'update':{
            return updateCard(state)
        }
        default:
            return initialStyle
        
    }
}
