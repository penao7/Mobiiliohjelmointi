import { useState, useEffect } from 'react';
import * as SQLite from 'expo-sqlite';

const useDatabase = () => {

  const db = SQLite.openDatabase('shoppinglist.db');
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    db.transaction(tx => {
      tx.executeSql('create table if not exists products (id integer primary key not null unique, product text not null, amount text not null);');
    }, null, updateList);
  }, []);

  const handleError = (err) => {
    setError('database error');
    console.log(err.message);
  };

  const updateList = () => {
    db.transaction(tx => {
      tx.executeSql('select * from products', [], (_, { rows }) => setProducts(rows._array)
      );
    }, handleError, setError(''));
  };

  const deleteItem = (id) => {
    db.transaction(tx => {
      tx.executeSql(`delete from products where id = ?;`, [id]);
    }, handleError, updateList);
  };

  const saveItem = (product, amount) => {
    db.transaction(tx => {
      tx.executeSql('insert into products(product,amount) values(?,?);', [product, amount]);
    }, handleError, updateList);
  };

  return {
    products,
    updateList,
    deleteItem,
    saveItem,
    error
  };

};

export default useDatabase;