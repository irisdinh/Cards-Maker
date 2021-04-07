//help from Trang

export function SetAction(key) {
    var action = {}
    if (key == 'New') {
        action = {
            type:'initial',
            key
        } 
    } else {
        action = {
            type:'set',
            key
        }
    }
    return action 
}

export function GetAction(value) {
    const action = {
        type:'get',
        value
    }
    return action
}

export function UpdateAction(key, value) {
    const action = {
        type:'update',
        key,
        value
    }
    return action
}




