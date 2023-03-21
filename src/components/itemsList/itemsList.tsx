import Item from 'components/item/item';
import IItemsList from 'interfaces/IItemsList';
import React from 'react';
import styles from './itemsList.module.css';

class ItemsList extends React.Component<IItemsList> {
  render() {
    const { goodsList } = this.props;
    return (
      <div className={styles.container}>
        {goodsList.map((el) => (
          <Item {...el} key={el.id} />
        ))}
      </div>
    );
  }
}

export default ItemsList;
