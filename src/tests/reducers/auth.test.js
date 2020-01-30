// *** MODULES *** //

// ** App Modules ** //
import authReducer from '../../reducers/auth';

// *** LIFECYCLE VARIABLES *** //
let uid;

// *** LIFECYCLE FUNCTIONS *** //
// Sets variables before each test
beforeEach(() => {
    uid = 'test123'
});

// *** TESTS *** //
test('should set default state', () => {
    const state = authReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({});
})

test('Should login user and retrieve id', () => {
    const action = {
        type: 'LOGIN',
        uid
    }
    const state = authReducer({}, action);
    expect(state).toEqual({
        uid
    });
});

test('Should logout user', () => {
    const action = { type: 'LOGOUT' };
    const state = authReducer({ uid }, action);
    expect(state).toEqual({});
});