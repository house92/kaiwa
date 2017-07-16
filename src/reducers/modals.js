export function modal(state = [], action) {
    switch (action.type) {
        case "OPEN_MODAL":
            return action.modal;
            break;
        case "CLOSE_MODAL":
            return state ? state.modal == action.modal ? "" : state.modal : "";
            break;
        default:
            return state;
    }
}
