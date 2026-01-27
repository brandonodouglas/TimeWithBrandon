import { StyleSheet, View, Text, Button, Pressable, GestureResponderEvent, Alert, TouchableOpacity,Image } from 'react-native';
import { Link, useRouter } from "expo-router";


// Screen that opens first when the app is launched
export default function HomeScreen() {
  const router = useRouter();



  return (
    <View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
      <Image style={{ width: 150, height: 150, borderRadius: 70,}} source={require("/Users/brandon/TimeTrackApp/TimeWithBrandon/assets/images/brandonface.png")} />
      <Text style={{ flex: 1, fontSize: 30, textAlign: 'center' }}>TimeWithBrandon</Text>
      <Text style={{ flex: 2, fontSize: 25, textAlign: 'center' }}>Time is money.</Text>
      <Text style={{ flex: 3, fontSize: 25, textAlign: 'center' }}>...Why waste it?</Text>
      <Text style={{ flex: 4, fontSize: 35, textAlign: 'center' }}>Take back control of your time TODAY!</Text>
      <Text style={{ flex: 5, fontSize: 10, textAlign: 'center' }}>Code by @brandonodouglas 2026</Text>

      <TouchableOpacity style={styles.button} onPress={() => {router.push("/FolderScreen")}}>
          <Text style={{color: 'white', fontSize: 40,}}>START</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#b94b4bff',
    padding: 10,
    margin: 20,
    width: 250,
    borderCurve: 'circular',
    borderRadius: 40
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
});