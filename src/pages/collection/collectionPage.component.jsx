import "./collection.styles.scss";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/collection/collection.selector";
import CollectionItem from "../../components/collections/collection-item/collection-item.component";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  console.log(collection);
  return (
    <div className="collection-page">
      <h2 className="title">{title.toUpperCase()}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);