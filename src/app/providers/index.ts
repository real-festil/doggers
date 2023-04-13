import compose from 'compose-function';

import withGesture from './withGestures';
import withNavigation from './withNavigation';
import withQuery from './withQuery';
import withUI from './withUI';

const withProviders = compose( withNavigation, withQuery, withUI, withGesture);

export default withProviders;
