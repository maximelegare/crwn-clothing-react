import CollectionsOverviewContainer from "../../components/collections/collections-overview/collections-overview.container"
import { Route } from "react-router-dom";
import CollectionPageContainer from "../collection/collectionPage.container";
import { Component } from "react";
import { createStructuredSelector } from "reselect";

import { selectIsCollectionFetching } from "../../redux/collection/collections.selector";

import { fetchCollectionStartAsync } from "../../redux/collection/collection.actions";

// import WithSpinner from "../../components/with-spinner/with-spinner.component";

import { connect } from "react-redux";

class ShopPage extends Component {

  componentDidMount() {
    const { fetchCollectionStartAsync } = this.props
    
    fetchCollectionStartAsync()
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
  fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
