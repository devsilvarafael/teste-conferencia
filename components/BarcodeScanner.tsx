import React, { useState } from "react";
import { View, TextInput, Text } from "react-native";

const BarcodeScanner = () => {
  const [barcode, setBarcode] = useState("");

  return (
    <View style={{ padding: 20 }}>
      <Text>Escaneie um código de barras:</Text>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          padding: 10,
          marginTop: 10,
        }}
        placeholder="Aguardando leitura..."
        value={barcode}
        onChangeText={setBarcode}
        autoFocus
      />
      <Text style={{ marginTop: 20 }}>Código lido: {barcode}</Text>
    </View>
  );
};

export default BarcodeScanner;
