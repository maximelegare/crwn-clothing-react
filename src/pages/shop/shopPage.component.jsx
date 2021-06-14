import CollectionsOverview from "../../components/collections/collections-overview/collections-overview.component";
import { Route } from "react-router-dom";
import CollectionPage from "../collection/collectionPage.component";
import { Component } from "react";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

import { updateCollections } from "../../redux/collection/collection.actions";

import WithSpinner from '../../components/with-spinner/with-spinner.component'

import { connect } from "react-redux";

class ShopPage extends Component {
  state ={
    loading:true
  }
  
  unsubscribeFromSnapshot = null;
  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");

    collectionRef.onSnapshot(async (snapshot) => {
      const objectMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(objectMap);
      
      this.setState({loading:false})
    });
  }

  


  render() {
    const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview)
    const CollectionPageWithSpinner = WithSpinner(CollectionPage)

    const { loading } = this.state
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props}/>} />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props}/>}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
