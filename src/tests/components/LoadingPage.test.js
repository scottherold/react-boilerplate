// *** MODULES *** //
// ** npm Modules ** //
import React from 'react';
import { shallow } from 'enzyme';

// ** App Modules ** //
import LoadingPage from '../../components/LoadingPage';

// *** TESTS *** //
test('should render LoadingPage correctly', () => {
    const wrapper = shallow(<LoadingPage />);
    expect(wrapper).toMatchSnapshot();
});