export function user(state = [], action) {
    switch (action.type) {
        case "UPDATE_USER_IN_STATE":
            return action.user
            break;
        default:
            return state;
    }
}
