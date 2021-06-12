
import { connect } from 'react-redux'
import {createStructuredSelector} from 'reselect'
import './collections-overview.styles.scss'
import { selectCollectionsForPreview } from '../../../redux/collection/collection.selector'
import CollectionsPreview from '../collections-preview/collections-preview.component'

const CollectionsOverview = ({collections}) => (
    <div className="collection-overv">
       {collections.map(({ id, ...otherCollectionProps }) => {
      
      return(
      <CollectionsPreview key={id} {...otherCollectionProps} />
    )})} 
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections:selectCollectionsForPreview
  })

export default connect(mapStateToProps)(CollectionsOverview)