import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchItems } from '../../actions/ItemsActions'
import CardList from './Cardlist'


function ItemsPageSmart ({ itemsData, fetchItems }) {
  useEffect(() => {
    fetchItems()
  }, [fetchItems])
  return itemsData.loading ? (
    <h2>Loading</h2>
  ) : itemsData.error ? (
    <h2>HELLO{itemsData.error}</h2>
  ) : (
    <div>
      <h2>Item List</h2>
      <CardList items={itemsData.items}></CardList>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    itemsData: state.items
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchItems: () => dispatch(fetchItems())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemsPageSmart)