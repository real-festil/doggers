import compose from 'compose-function';

import withGesture from 'src/app/providers/withGestures';

import withNavigation from './withNavigation';
import withQuery from './withQuery';
import withUI from './withUI';

const withProviders = compose(withNavigation, withQuery, withUI, withGesture);

export default withProviders;
