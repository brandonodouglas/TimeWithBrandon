import React, { useState } from 'react';
import { Alert, FlatList, GestureResponderEvent, ScrollView, StatusBar, StyleSheet, Text, TextInput, TextInputSubmitEditingEvent, TouchableOpacity, View } from 'react-native';
import DragList, { DragListRenderItemInfo } from 'react-native-draglist';
import uuid from 'react-native-uuid';


type FolderNameProps = {
    list: string[],

}
type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);


export default function FolderComponent(props: FolderNameProps) {

    // Function that converts string list into arrays with is in them
    function convertList(list: string[]) {
        let convertedList = []
        for (var i = 0; i < list.length; i++) {
            convertedList.push({id: uuid.v4(), title: list[i]})

        }
        return convertedList;
    }
 

    return (
          <View> 
  
         <FlatList
            data={convertList(props.list)}
            renderItem={({item}) => <Item title={item.title} />}
            keyExtractor={item => item.id}
              />
      
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
