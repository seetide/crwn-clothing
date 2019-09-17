import React from 'react';
import { Route } from 'react-router-dom';
// import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

//import CollectionPage from '../collection/collection.component';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

import CollectionsOverviewContainer from '../../components/collections-overview/collection-overview.container';
import CollectionPageContainer from '../collection/collection.container';
//import WithSpinner from '../../components/with-spinner/with-spinner.component';
// import {
//   selectIsCollectionFetching,
//   selectIsCollectionsLoaded
// } from '../../redux/shop/shop.selectors';

//const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const { match } = this.props;
    return (
      <div className='shop-page'>
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

// const mapStateToProps = createStructuredSelector({
//   isFetchingCollection: selectIsCollectionFetching,
//   isCollectionsLoaded: selectIsCollectionsLoaded
// });

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStart())
});

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);
