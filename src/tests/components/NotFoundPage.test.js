// *** MODULES *** //
// ** npm Modules ** //
import React from 'react';
import { shallow } from 'enzyme';

// ** App Modules ** //
import NotFoundPage from '../../components/NotFoundPage';

// *** TESTS *** //
test('should render NotFoundPage correctly', () => {
    const wrapper = shallow(<NotFoundPage />);
    expect(wrapper).toMatchSnapshot();
});