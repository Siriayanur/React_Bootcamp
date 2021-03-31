function choice(facets) {
    return facets[Math.floor(Math.random() * facets.length)];
}

export { choice };