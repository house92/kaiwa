// A reducer takes in an action and a copy of current state

export function shows(state = [], action) {
    switch (action.type) {
        case "FETCH_SHOWS":
            console.log("getting shows", action.shows);
            return action.shows;
            break;
        default:
            return state;
    }
}
