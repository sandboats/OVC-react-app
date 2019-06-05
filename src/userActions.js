function getUsers() {
    return fetch("https://jsonplaceholder.typicode.com/users")
        .then(handleErrors)
        .then(res => res.json());
}

export const fetchUsers =()=> {
    return dispatch => {
        dispatch(fetchUsersBegin());
        return getUsers()
            .then(json => {
                dispatch(fetchUsersSuccess(json));
                console.log(json)
                return json;
            })
            .catch(error =>
                dispatch(fetchUsersFailure(error))
            );
    };
}

//fetch itself cannot handle response errors
//Handling HTTP errors here
function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

export const FETCH_USERS_BEGIN = "FETCH_USERS_BEGIN";
export const FETCH_USERS_SUCCESS =
    "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILURE =
    "FETCH_USERS_FAILURE";

export const fetchUsersBegin = () => ({
    type: FETCH_USERS_BEGIN
});

export const fetchUsersSuccess = users => ({
    type: FETCH_USERS_SUCCESS,
    payload: { users }
});

export const fetchUsersFailure = error => ({
    type: FETCH_USERS_FAILURE,
    payload: { error }
});
