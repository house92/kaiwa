// A reducer takes in an action and a copy of current state

export function genres(state = [], action) {
    switch (action.type) {
        case "FETCH_GENRES":
            console.log("getting genres", action.genres);
            return action.genres;
            break;
        default:
            return state;
    }
}
