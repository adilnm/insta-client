export default function(state='', action){
    switch (action.type) {
        case 'SIGNUP':
            return action.payload
        default:
            return state
    }
}