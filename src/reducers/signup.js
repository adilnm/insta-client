export default function(state=null, action){
    switch (action.type) {
        case 'SIGNUP':
            return action.payload
        default:
            return state
    }
}