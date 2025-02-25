import React from "react";
import { Button, View, Alert } from "react-native";
import * as Updates from "expo-updates";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

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
      Alert.alert("Error", error.message);
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

      <Button title="Atualizar app" onPress={checkForUpdates} />

      <Card size="md" variant="elevated" className="m-3">
        <Heading size="md" className="mb-1">
          Quick Start
        </Heading>
        <Text size="sm">Start building your next project in minutes</Text>
      </Card>
    </View>
  );
}
