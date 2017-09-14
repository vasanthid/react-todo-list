
let userReducer = function(user = {}, action) {
   switch (action.type) {
     case 'GENERATE_ID':
        return Object.assign({},  {
                username: user.username,
                id: action.id
            }
        )
        
      default:
         return user;
   }
     
}

export default userReducer;