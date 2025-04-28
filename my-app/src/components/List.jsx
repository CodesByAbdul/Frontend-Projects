import React from 'react'
import PropTypes from 'prop-types'

function List(props) {

  const category = props.category
  const itemList = props.items

  //fruits.sort((a,b) => b.calories - a.calories)

  //const lowCalFruits = fruits.filter(fruit => fruit.calories < 100)

  //const highCalFruits = fruits.filter(fruit => fruit.calories > 100)

  const listItems = itemList.map(item => <li key={item.id}>{item.name} : {item.calories}</li>)

  return (
    <>
      <h3 className='list-category'>{category}</h3>
      <ol className='list-items'>
        {listItems}
    </ol>
    </>
  )
}

List.PropTypes = {
  category: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    calories: PropTypes.number.isRequired
  })).isRequired
}

List.DefaultProps = {
  category: 'Category',
  items: []
}
export default List