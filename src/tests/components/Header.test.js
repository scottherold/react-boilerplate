// *** MODULES *** //
// ** npm Modules ** //
import React from 'react';
import { shallow } from 'enzyme';

// ** App Modules ** //
import { Header } from '../../components/Header';

// *** LIFECYCLE VARIABLES *** //
let startLogout, wrapper;

// *** LIFECYCLE FUNCTIONS *** //
// Sets variables before each test
beforeEach(() => {
    // Spy functions for props
    startLogout = jest.fn();
    wrapper = shallow(<Header startLogout={startLogout} />);
});

// *** TESTS *** //
test('should render Header correctly', () => {
   expect(wrapper).toMatchSnapshot();
});

test('should call startLogout on button click', () => {
   wrapper.find('button').simulate('click');
   expect(startLogout).toHaveBeenCalled();
});