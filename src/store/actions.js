//Action Types: 
export const AUTH = { 
    LOGIN_SUCCESS: "LOGGED_IN"
};
export const LOCATION= "LOCATION"
export const user

//Action Creators: 
export function loggedIn(data) {
    return {type: LOGGED_IN, data}
}

export function location(data) {
    return {type: LOCATION, data}
}