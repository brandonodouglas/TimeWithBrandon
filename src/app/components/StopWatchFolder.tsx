import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import DragList, {DragListRenderItemInfo} from 'react-native-draglist';

// User should be able to press this components button and timewatches appear beliow it
// Can delete a folder and timers are place into trash, which can then be permanetently deleted or bought back into one of the folders


type StopWatchFolderProps = {
    name: string,
}

export default function StopWatchFolder(props: StopWatchFolderProps) {

  

  return (
    <View style={{alignItems: 'center'}}>
    <Text style={{fontSize: 20, textAlign: 'center'}}>📁{props.name}</Text>
    </View>
  );
}