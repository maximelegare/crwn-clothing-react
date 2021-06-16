import { createStructuredSelector } from "reselect";
import { selectIsCollectionFetching } from "../../../redux/collection/collections.selector";
import { connect } from "react-redux";
// import { compose } from "redux";
// import {Route} from 'react-router-dom'

import WithSpinner from "../../with-spinner/with-spinner.component";
import CollectionsOverview from "./collections-overview.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

const CollectionsOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionsOverview))

export default CollectionsOverviewContainer