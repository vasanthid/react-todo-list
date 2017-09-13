let actions = {
    addTodo: function(text) {
        return {
            type: 'ADD_TODO',
            text: text,
            completed: false
        }
    }
}

export default actions