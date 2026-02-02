import React, { useCallback, useRef, useMemo } from "react";
import { StyleSheet, View, Text, Button, TouchableOpacity } from "react-native";
import { GestureHandlerRootView, TextInput } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import CustomBottomSheet from "./CustomBottomSheet";
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
    <Text style={styles.title}>{title} lol</Text>
    <TouchableOpacity style={styles.button}>
        <Text style={{color: 'white', fontSize: 10}}>Add Subtask</Text>
      </TouchableOpacity>
  </View>
);


const MyBottomSheet = () => {
  // hooks
  const sheetRef = useRef<BottomSheet>(null);

  // variables
  const data = useMemo(
    () =>
      Array(1)
        .fill(0)
        .map((_, index) => `index-${index}`),
    []
  );
  const snapPoints = useMemo(() => ["25%", "50%", "90%"], []);

  // callbacks
  const handleSheetChange = useCallback((index: any) => {
    console.log("handleSheetChange", index);
  }, []);
  const handleSnapPress = useCallback((index: number) => {
    sheetRef.current?.snapToIndex(index);
  }, []);
  const handleClosePress = useCallback(() => {
    sheetRef.current?.close();
  }, []);

  // render
  const renderItem = useCallback(
    ({item}: any) => (
      <View style={styles.itemContainer}>
        <TextInput placeholder="Enter your task activity here" style={{borderColor: 'black', borderWidth: 1, borderRadius: 10, padding: 10, margin:10}}></TextInput>
        <TouchableOpacity style={{ backgroundColor: 'red', width: 140, height: 30, margin:10 }} onPress={() => {
          }}>
            <Text style={{ color: 'white', textAlign: 'center', fontSize: 20, width: 140, height: 30 }}>Add Sub-task</Text>
          </TouchableOpacity>
      </View>
    ),
    []
  );
  return (
    <GestureHandlerRootView style={styles.container}>
      
      <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
        enableDynamicSizing={false}
        onChange={handleSheetChange}
      >
        <BottomSheetFlatList
          data={data}
          keyExtractor={(i: any) => i}
          renderItem={renderItem}
          contentContainerStyle={styles.contentContainer}
        />
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 200,
  },
  contentContainer: {
    backgroundColor: "white",
  },
  itemContainer: {
    padding: 6,
    margin: 6,
    backgroundColor: "#eee",
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#b94b4bff',
    padding: 10,
    margin: 20,
    width: 60,
    borderCurve: 'circular',
    borderRadius: 40
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 25,
  },
});

export default MyBottomSheet;