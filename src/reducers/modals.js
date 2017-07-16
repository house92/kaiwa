export function modal(state = [], action) {
    switch (action.type) {
        case "OPEN_MODAL":
            return action.modal;
            break;
        case "CLOSE_MODAL":
            return state ? state == action.modal ? "" : state : "";
            break;
        default:
            return state;
    }
}
