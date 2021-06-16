import CollectionPage from "./collectionPage.component";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
// import { compose } from "redux";
// import { selectIsCollectionFetching } from "../../redux/collections/collections.selector";

import { selectCollectionsLoaded } from "../../redux/collections/collections.selector";

const mapStateToProps = createStructuredSelector({
  isLoading:  state => !selectCollectionsLoaded(state),
});
const CollectionPageContainer = connect(mapStateToProps)(
  WithSpinner(CollectionPage)
);

export default CollectionPageContainer;
