// *** MODULES *** //
// ** npm Modules ** //
import React from 'react';
import { shallow } from 'enzyme';

// ** App Modules ** //
import { LoginPage } from '../../components/LoginPage';

// *** LIFECYCLE VARIABLES *** //
let startLogin, wrapper;

// *** LIFECYCLE FUNCTIONS *** //
// Sets variables before each test
beforeEach(() => {
    // Spy functions for props
    startLogin = jest.fn();
    wrapper = shallow(<LoginPage startLogin={startLogin} />);
});

// *** TESTS *** //
test('should render LoginPage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should call startLogin on button click', () => {
    wrapper.find('button').simulate('click');
   expect(startLogin).toHaveBeenCalled();
});