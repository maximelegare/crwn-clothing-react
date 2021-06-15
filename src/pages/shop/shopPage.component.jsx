import CollectionsOverview from "../../components/collections/collections-overview/collections-overview.component";
import { Route } from "react-router-dom";
import CollectionPage from "../collection/collectionPage.component";
import { Component } from "react";
import { createStructuredSelector } from "reselect";

import { selectIsCollectionFetching } from "../../redux/collection/collections.selector";

import { fetchCollectionStartAsync } from "../../redux/collection/collection.actions";

import WithSpinner from "../../components/with-spinner/with-spinner.component";

import { connect } from "react-redux";

class ShopPage extends Component {

  componentDidMount() {
    const { fetchCollectionStartAsync } = this.props
    console.log('component mounted')
    fetchCollectionStartAsync()
  }

  render() {
    const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
    const CollectionPageWithSpinner = WithSpinner(CollectionPage);

    
    const { match, isCollectionFetching } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner isLoading={isCollectionFetching} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={isCollectionFetching} {...props} />
          )}
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
