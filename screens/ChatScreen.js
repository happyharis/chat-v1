import { Button, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";

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
    return () => {};
  }, []);

  const logout = () => auth.signOut();

  return (
    <View>
      <Button onPress={logout} title="Log out"></Button>
      <Text>ChatScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
