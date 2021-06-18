import CollectionsOverviewContainer from "../../components/collections/collections-overview/collections-overview.container"
import { Route } from "react-router-dom";
import CollectionPageContainer from "../collection/collectionPage.container";
import { createStructuredSelector } from "reselect";
import { useEffect } from "react";
import { selectIsCollectionFetching } from "../../redux/collections/collections.selector";

import { fetchCollectionsStart } from "../../redux/collections/collections.actions";

// import WithSpinner from "../../components/with-spinner/with-spinner.component";

import { connect } from "react-redux";

const ShopPage = ({fetchCollectionsStart, match}) => {

useEffect(() => {
  fetchCollectionsStart()
},[fetchCollectionsStart])  

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
