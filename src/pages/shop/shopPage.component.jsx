
import CollectionsOverview from '../../components/collections/collections-overview/collections-overview.component'
import { Route } from 'react-router-dom'
import CollectionPage from '../collection/collectionPage.component'


const ShopPage = ({match}) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverview }/>
    <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
  </div>
);


export default ShopPage;
