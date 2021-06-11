
import { connect } from 'react-redux'
import {createStructuredSelector} from 'reselect'
import './collections-overview.styles.scss'
import { selectCollectionData } from '../../../redux/collection/collection.selector'
import CollectionsPreview from '../collections-preview/collections-preview.component'

const CollectionsOverview = ({collections}) => (
    <div className="collection-overv">
       {Object.values(collections).map(({ id, ...otherCollectionProps }) => {
      
      return(
      <CollectionsPreview key={id} {...otherCollectionProps} />
    )})} 
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections:selectCollectionData
  })

export default connect(mapStateToProps)(CollectionsOverview)