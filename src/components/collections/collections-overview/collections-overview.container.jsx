import { createStructuredSelector } from "reselect";
// import { selectIsCollectionFetching } from "../../../redux/collections/collections.selector";
import { connect } from "react-redux";
// import { compose } from "redux";
// import {Route} from 'react-router-dom'
import { selectCollectionsLoaded } from "../../../redux/collections/collections.selector";

import WithSpinner from "../../with-spinner/with-spinner.component";
import CollectionsOverview from "./collections-overview.component";

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectCollectionsLoaded(state),
});

const CollectionsOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionsOverview))

export default CollectionsOverviewContainer