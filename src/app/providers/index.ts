import compose from 'compose-function';

import withNavigation from './withNavigation';
import withQuery from './withQuery';
import withUI from './withUI';

const withProviders = compose(withNavigation, withQuery, withUI);

export default withProviders;
