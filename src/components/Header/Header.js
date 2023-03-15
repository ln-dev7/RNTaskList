import { View, Text } from "react-native";
import React from "react";
import moment from "moment";

const Header = () => {
  const date = new Date();
  return (
    <View
      style={{
        backgroundColor: "#fff",
        padding: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-end",
          gap: 5,
          paddingHorizontal: 20,
        }}
      >
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
          }}
        >
          {moment(date).format("dddd")},
        </Text>
        <Text
          style={{
            fontSize: 24,
          }}
        >
          {moment(date).format("DD MMMM")}
        </Text>
      </View>
    </View>
  );
};

export default Header;
