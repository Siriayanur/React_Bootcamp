function choice(items) {
    return items[Math.floor(Math.random()  * items.length) + 1];

}

function remove(items, item) {
    for (var i = 0; i < items.length; i++){
        if (items[i] === item) {
            return [...items.slice(0, i), ...items.slice(i + 1)];
        }
    }
    
}

export { choice, remove };