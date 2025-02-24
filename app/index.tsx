import React from "react";
import { Button, Text, View, Alert } from "react-native";
import * as Updates from "expo-updates";

export default function Index() {
  const checkForUpdates = async () => {
    try {
      const update = await Updates.checkForUpdateAsync();
      if (update.isAvailable) {
        await Updates.fetchUpdateAsync();
        Alert.alert(
          "Update Available",
          "A new version of the app is available. Restart the app to apply the update.",
          [
            {
              text: "Restart",
              onPress: async () => {
                await Updates.reloadAsync();
              },
            },
          ]
        );
      } else {
        Alert.alert("No Updates", "You are already using the latest version.");
      }
    } catch (error) {
      Alert.alert("Error", "An error occurred while checking for updates.");
      console.error(error);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Teste Rafael</Text>
      <Text>Update automatico, testando</Text>
      <Text>Update automatico, testando</Text>
      <Text>Update automatico, testando</Text>
      <Text>Update automatico, testando</Text>

      <Button title="Atualizar app" onPress={checkForUpdates} />
    </View>
  );
}
