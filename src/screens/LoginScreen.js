
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,

  TextInput,

  TouchableOpacity,
} from "react-native";
export default function App({navigation}) {
  const [email, setEmail] = useState("");

  const fetchItem=()=> {
    const url='https://itunes.apple.com/search?term=avril+'+email
    requestAnimationFrame(() =>
      fetch(url, {
        method: 'GET',
      })
        .then(response => response.json())
        .then(responseJson => {
           navigation.navigate('TrackList',{data:responseJson.results})

        })
        .catch(error => {
          {
            alert(error)
          }
        }),
    );
}
  
  const onPress = () => {
    fetchItem();
  };

  return (
    <View style={styles.container}>
     
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter your artist name"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        /> 
      </View> 
      
     
      <TouchableOpacity style={styles.loginBtn} onPress={onPress}>
        <Text style={styles.loginText}>Submit</Text> 
      </TouchableOpacity> 
    </View> 
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginBottom: 40,
  },
  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
  },
});