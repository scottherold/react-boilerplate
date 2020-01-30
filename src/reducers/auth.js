// *** This file is the Reducer for application login/authentication *** //

// *** REDUCERS *** //
/*
/ Remember, you can set a default state in the argument! In this case, the default state is an empty array
/ Since this default state can be complicated, it is best to seperate it out into its own variable for ease of reading
/ In this case, state is setup as an object; when the user logs in the object is populated, when the user logs out it is wiped
*/
export default (state = {}, action) => {
    // changes action based on type
    switch (action.type) {
        case 'LOGIN':
            return {
                uid: action.uid
            };
        case 'LOGOUT':
            return {};
        default:
            return state;
    }
};