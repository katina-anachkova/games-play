const baseUrl = 'http://localhost:3030'

export function getAll() {
    return fetch(`${baseUrl}/data/games?sortBy=_createdOn%20desc`)
        .then(res => res.json())
}

export function getOne(id) {
    return fetch(`${baseUrl}/data/games/` + id)
        .then(res => res.json())
}
