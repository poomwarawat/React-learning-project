export const loadUsers = () =>{
    return (dispatch) =>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(res => {
            dispatch({
                type : "LOAD_USERS",
                payload : res
            })
        })
    }
}