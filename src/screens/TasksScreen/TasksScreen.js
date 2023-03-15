import {
  View,
  Text,
  FlatList,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useSignal, useActions } from "@dilane3/gx";
import Header from "../../components/Header/Header";

const TasksScreen = () => {
  const tasks = useSignal("tasks");
  const { addTask, deleteTask, deleteAllTasks } = useActions("tasks");
  return (
    <View>
      <Header />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 20,
        }}
      >
        <Button
          title="Ajouter"
          onPress={() => {
            addTask({
              title: Math.random().toString(36).substring(7),
              description: Math.random().toString(36).substring(7),
            });
          }}
        />
        <Button
          title="Tout supprimer"
          onPress={() => {
            deleteAllTasks();
            Alert.alert("Suppression", "Toutes les tâches ont été supprimé");
          }}
        />
      </View>
      {tasks.length > 0 ? (
        <FlatList
          style={{
            marginTop: 20,
            flexDirection: "column",
          }}
          data={tasks}
          renderItem={({ item }) => (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 10,
                marginBottom: 10,
                borderWidth: 1,
                borderColor: "#ccc",
                backgroundColor: "#fafafa",
              }}
            >
              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 20,
                  }}
                >
                  {item.title}
                </Text>
                <Text
                  style={{
                    color: "#999",
                  }}
                >
                  {item.description}
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  width: 50,
                  height: 50,
                  backgroundColor: "#f00",
                  borderRadius: 25,
                }}
                onPress={() => {
                  deleteTask(item.id);
                  Alert.alert("Suppression", item.title + " a été supprimé");
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: 20,
                  }}
                >
                  X
                </Text>
              </TouchableOpacity>
            </View>
          )}
        />
      ) : (
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Aucune tâche
          </Text>
        </View>
      )}
    </View>
  );
};

export default TasksScreen;
