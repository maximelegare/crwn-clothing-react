import './collection.styles.scss'
// import CollectionItem from '../../components/collections/collection-item'

import { connect } from 'react-redux'
import { selectCollection } from '../../redux/inventory/inventory.selector'



const CollectionPage = ({collection}) => {
    console.log(collection)
    return(
    <div className="">
        <h2>CATEGORY PAGE</h2>
    </div>
)}

const mapStateToProps = (state, ownProps) => ({
    collection : selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage)