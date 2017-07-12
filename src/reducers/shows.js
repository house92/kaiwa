// A reducer takes in an action and a copy of current state

export function shows(state = [], action) {
    switch (action.type) {
        case "FETCH_SHOWS":
            return action.shows;
            break;
        default:
            return state;
    }
}

export function show(state = [], action) {
    switch (action.type) {
        case "SELECT_SHOW":
            return action.show;
            break;
        default:
            return state;
    }
}
