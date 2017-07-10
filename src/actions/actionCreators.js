export function fetchShows(shows) {
    return {
        type: "FETCH_SHOWS",
        shows
    }
}

export function fetchGenres(genres) {
    return {
        type: "FETCH_GENRES",
        genres
    }
}
