

import { useLocalSearchParams, Link, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Button, FlatList, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import DragList, { DragListRenderItemInfo } from 'react-native-draglist';


// data placeholder - update later
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);



// An accordion is basically a collapsible section
export default function brandonAccordion() {



  return (
    <View>
      <Text>This is the folder thing placeholder</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
