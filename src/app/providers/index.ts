import withNavigation from 'src/app/providers/withNavigation';
import compose from 'compose-function';
import withQuery from 'src/app/providers/withQuery';

const withProviders = compose(withNavigation, withQuery);

export default withProviders;
