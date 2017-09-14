let actions = {
    addTodo: function(text) {
        return {
            type: 'ADD_TODO',
            text: text,
            completed: false
        }
    },
    completeTodo: function(id) {
        return {
            type: 'COMPLETE_TODO',
            id: id
        }
    },
    deleteTodo: function(id) {
        return {
            type: 'DELETE_TODO',
            id: id
        }
    },
    generateId: function() {
        return {
            type: 'GENERATE_ID',
            id: Math.round(Math.random() * 100)
        }
    },
    generateIdIfOdd: function() {
        return (dispatch, getState) => {
            const { user } = getState()
            if ( user.id % 2 === 0) {
               return
            }
            dispatch(actions.generateId())
        }
    },

    generateIdAsync: function() {
        return (dispatch) => {
            setTimeout(()=>{
                dispatch(actions.generateId())
            }, 2000)
        }
    }
}

export default actions