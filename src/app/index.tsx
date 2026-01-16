import { StyleSheet, View, Text, Button, Pressable, GestureResponderEvent, Alert, TouchableOpacity } from 'react-native';
import { Link, useRouter } from "expo-router";


// Screen that opens first when the app is launched
export default function HomeScreen() {
  const router = useRouter();



  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <Text style={{ flex: 1, fontSize: 30, textAlign: 'center' }}>⏰TimeWithBrandon</Text>
      <Text style={{ flex: 2, fontSize: 30, textAlign: 'center' }}>Time is money.</Text>
      <Text style={{ flex: 3, fontSize: 25, textAlign: 'center' }}>So why waste it?</Text>
      <Text style={{ flex: 4, fontSize: 15, textAlign: 'center' }}>Take back control of your time TODAY!</Text>
      <Text style={{ flex: 5, fontSize: 10, textAlign: 'center' }}>Code by @brandonodouglas 2026</Text>

      <TouchableOpacity style={styles.button} onPress={() => {router.push("/TimerScreen")}}>
          <Text style={{color: 'white', fontSize: 40}}>START</Text>
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
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
});