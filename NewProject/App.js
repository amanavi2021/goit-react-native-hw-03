// import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { useFonts } from "expo-font";
import RegistrationScreen from "./screens/RegistrationScreen";
import LoginScreen from "./screens/LoginScreen";
import PostsScreen from "./screens/PostsScreen";

export default function App() {
  const [fontLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  });

  if (!fontLoaded) {
    return null;
  }

  return (
    <>
      <RegistrationScreen />
      {/* <LoginScreen /> */}
      <PostsScreen />
    </>
  );
}
