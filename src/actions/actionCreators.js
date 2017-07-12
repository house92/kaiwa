export function fetchShows(shows) {
    return {
        type: "FETCH_SHOWS",
        shows
    }
}

export function selectShow(show) {
    return {
        type: "SELECT_SHOW",
        show
    }
}

export function fetchGenres(genres) {
    return {
        type: "FETCH_GENRES",
        genres
    }
}
