import React from 'react';
import {View, Text} from 'react-native';
import * as category from './json/category.json';
import * as models from './json/models.json';

const App = () => {
const brends = category;
const phones = models;



const identification = brends.map(item => <Text>{item.id}{item.name}</Text>)
console.log(identification)
  
  
  return(
    <View>
      <Text>Hello</Text>
    </View>
  )
}
export default App;