import compose from 'compose-function';
import withNavigation from './withNavigation';
import withQuery from './withQuery';

const withProviders = compose(withNavigation, withQuery);

export default withProviders;
