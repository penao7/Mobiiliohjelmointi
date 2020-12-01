import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, FlatList } from 'react-native';
import firebase from '../Firestore';
import RenderHistoryItem from './RenderHistoryItem';

const History = ({ navigation }) => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  const getHistory = async () => {

    const db = firebase.firestore();

    try {
      const { docs } = await db.collection('history').get();
      setHistory(docs.map(doc => doc.data()));
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    const unsubscribe = navigation.addListener('focus', () => {
      getHistory();
    });

    return unsubscribe;
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' color='black' />
      </View>
    );
  }

  return (
    <View>
      <FlatList
        data={history}
        renderItem={RenderHistoryItem}
        keyExtractor={(item, i) => i.toString()}
      />
    </View>
  );
};

export default History;