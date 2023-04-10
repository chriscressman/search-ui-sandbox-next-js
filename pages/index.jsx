import AppSearchAPIConnector from '@elastic/search-ui-app-search-connector';
import { SearchProvider, WithSearch } from '@elastic/react-search-ui';

const endpointBase = 'https://enterprise-search-8-6-1-4gb-ram.ent.us-central1.gcp.cloud.es.io';
const engineName = 'content-site';
const searchKey = 'search-se4wspv888i3itjnqghpm954';
const apiConnectorConfig = { endpointBase, engineName, searchKey };
const apiConnector = new AppSearchAPIConnector(apiConnectorConfig);
const searchProviderConfig = { apiConnector };

export default function HomePage () {
  console.log('Inside <HomePage>');
  return (
    <SearchProvider config={searchProviderConfig}>
      <WithSearch mapContextToProps={mapContextToProps}>{children}</WithSearch>
    </SearchProvider>
  );
}

function mapContextToProps (context) {
  const logMessage =
    `Inside mapContextToProps() for <WithSearch>', typeof context.trackClickThrough is: ${typeof context.trackClickThrough}`
  console.log(logMessage);
  return {};
}

function children (props) {
  const logMessage = 'Inside children() for <WithSearch>';
  console.log(logMessage);
  return null;
}
