// *** MODULES *** //

// ** App Modules ** //
import { login, logout, startLogin, startLogout } from '../../actions/auth';

// *** LIFECYCLE VARIABLES *** //
let uid;

// *** LIFECYCLE FUNCTIONS *** //
// Sets variables before each test
beforeEach(() => {
    uid = 'test123'
});

// *** TESTS *** //
test('should generate login action object', () => {
    const action = login(uid);
    expect(action).toEqual({
        type: 'LOGIN',
        uid
    });
});

test('should generate logout action object', () => {
    const action = logout();
    expect(action).toEqual({ type: 'LOGOUT' });
});