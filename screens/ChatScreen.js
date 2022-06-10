import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";

import firebase from "../database/firebaseDB";

const auth = firebase.auth();

const demoMessage = {
  _id: 1,
  text: "Hello, I am a demo message",
  createdAt: new Date(),
  user: {
    _id: 2,
    name: "React Native",
    avatar: "https://placeimg.com/140/140/any",
  },
};

export default function ChatScreen({ navigation }) {
  const [messages, setMessages] = useState([]);
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

    setMessages([demoMessage]);
  }, []);

  const logout = () => auth.signOut();

  return (
    <GiftedChat
      messages={messages}
      onSend={(newMessages) => onSend(newMessages)}
      listViewProps={{ style: { backgroundColor: "#666" } }}
      user={{ _id: 1 }}
    />
  );
}

const styles = StyleSheet.create({});
