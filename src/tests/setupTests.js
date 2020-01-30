// *** Enzyme Testing Config File *** //
// *** Enzyme Testing Config File *** //

// *** MODULES *** //
// ** npm Modules **//
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'; // <-- change version number depending on installed Adpater (React version) in package.json
import DotEnv from 'dotenv';

// *** CONFIG *** //
Enzyme.configure({ adapter: new Adapter() });

DotEnv.config({ path: '.env.test' });