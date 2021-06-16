import CollectionsOverviewContainer from "../../components/collections/collections-overview/collections-overview.container"
import { Route } from "react-router-dom";
import CollectionPageContainer from "../collection/collectionPage.container";
import { Component } from "react";
import { createStructuredSelector } from "reselect";

import { selectIsCollectionFetching } from "../../redux/collections/collections.selector";

import { fetchCollectionsStart } from "../../redux/collections/collections.actions";

// import WithSpinner from "../../components/with-spinner/with-spinner.component";

import { connect } from "react-redux";

class ShopPage extends Component {

  componentDidMount() {
    const { fetchCollectionsStart } = this.props
    
    fetchCollectionsStart()
  }

  render() {
    // const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
    // const CollectionPageWithSpinner = WithSpinner(CollectionPage);

    
    const { match } = this.props;
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
}
const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
