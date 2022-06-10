import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import firebase from "../database/firebaseDB";

const auth = firebase.auth();

export default function ChatScreen({ navigation }) {
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("Chat", { id: user.id, email: user.email });
      } else {
        navigation.navigate("Login");
      }
    });

    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={logout}>
          <MaterialCommunityIcons name="logout" size={30} color="grey" />
        </TouchableOpacity>
      ),
    });
  }, []);

  const logout = () => auth.signOut();

  return (
    <View>
      <Text>ChatScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
