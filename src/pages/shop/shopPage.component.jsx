
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCollectionData } from '../../redux/collection/collection.selector'

import CollectionPreview from "../../components/collection-preview/collection-preview.component";

const ShopPage = ({collections}) => (
  <div className="shop-page">
    {Object.values(collections).map(({ id, ...otherCollectionProps }) => {
      
      return(
      <CollectionPreview key={id} {...otherCollectionProps} />
    )})}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections:selectCollectionData
})

export default connect(mapStateToProps)(ShopPage);
