import CollectionPreview from '../collections-preview/collection-preview.component'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCollections } from '../../../redux/inventory/inventory.selector'
import './collections-overview.styles.scss'

const CollectionsOverview = ({collections}) => (
    <div className="collections-overview">
        {collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
          ))}
    </div>
)


const mapStateToProps = createStructuredSelector({
    collections:selectCollections
})

export default connect(mapStateToProps)(CollectionsOverview)