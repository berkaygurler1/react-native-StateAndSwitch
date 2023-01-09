import React, {useState} from 'react';
import {SafeAreaView, Text, View, Button, FlatList, Switch} from 'react-native';

const data = [
  {id: 1, name: 'cafe.exe', isFavorite: true},
  {id: 2, name: 'KafaKafe', isFavorite: false},
  {id: 3, name: 'BugG', isFavorite: false},
  {id: 4, name: "Rock'n Code", isFavorite: true},
  {id: 5, name: 'do(drink)', isFavorite: false},
  {id: 6, name: 'Esc', isFavorite: false},
];

function App() {
  const [cafeList, setCafeList] = useState(data);
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

  function onFavoritesChange(isFavoriteSelected) {
    setShowOnlyFavorites(isFavoriteSelected);
    isFavoriteSelected
      ? setCafeList(cafeList.filter(cafe => cafe.isFavorite))
      : setCafeList(data);
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{alignItems: 'flex-start'}}>
        <Text>Show Only Favourites</Text>
        <Switch value={showOnlyFavorites} onValueChange={onFavoritesChange} />
      </View>
      <FlatList
        data={cafeList}
        renderItem={({item}) => <Text style={{fontSize: 25}}>{item.name}</Text>}
      />
    </SafeAreaView>
  );
}

export default App;
