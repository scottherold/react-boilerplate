// *** MODULES *** //
// ** npm Modules ** //
import React from 'react';
import { shallow } from 'enzyme';

// ** App Modules ** //
import DashboardPage from '../../components/DashboardPage';

// *** TESTS *** //
test('should render DashboardPage correctly', () => {
    const wrapper = shallow(<DashboardPage />)
    expect(wrapper).toMatchSnapshot();
});