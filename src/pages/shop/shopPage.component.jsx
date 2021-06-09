
import { Route } from 'react-router-dom'
import CollectionsOverview from '../../components/collections/collections-overview/collections-overview.component'

import CollectionPage from '../collection/collection.component'

const ShopPage = ({match}) => (
    <div className="shop-page">
      <Route exact patch={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
  </div>
)



export default ShopPage;
