import { router } from "expo-router";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function IntroScreen() {
  
  return (
    <View style={{ justifyContent: 'center', padding: 20 }}>
    <Text style={{textAlign: 'center', fontSize: 35, padding:10}}>Welcome! 👋</Text>
    <Text style={{textAlign: 'center', fontSize: 25, padding:10, fontWeight: 'bold'}}>Introduction</Text>
    <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />
    <Text style={{textAlign: 'center', fontSize: 15, padding:20}}>TimerWithBrandon uses folders and subfolders to represent time intensive tasks throughout the day. Within each sub folder is a timer which is used to track time, giving you a daily overview of how you view your time.</Text>
    <Text style={{textAlign: 'center', fontSize: 27, padding:10}}>Ready to reclaim your time? Tap the button below! ✨</Text>

    <TouchableOpacity style={styles.button} onPress={() => {router.push("/FolderScreen")}}>
          <Text style={{color: 'white', fontSize: 20, textAlign: 'center'}}>Begin</Text>
        </TouchableOpacity>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  input: {
    fontSize: 15,
    textAlign: 'center',
    borderColor: '#b94b4bff',
    borderRadius: 5,
    borderStyle: 'solid',
    borderWidth: 2,
    margin: 10,
    padding: 10,
  },
  button: {
    backgroundColor: '#b94b4bff',
    width: 330,
    borderCurve: 'circular',
    borderRadius: 20,
    padding: 10
  },
});

