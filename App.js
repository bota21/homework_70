import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.display}>0</Text>
      <View style={styles.wrapper}>
        <View style={styles.wrapperSymbol}>
          <TouchableOpacity style={styles.number}>
            <Text style={styles.text}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.number}>
            <Text style={styles.text}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.number}>
            <Text style={styles.text}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.symbol}>
            <Text style={styles.text}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.wrapperSymbol}>
          <TouchableOpacity style={styles.number}>
            <Text style={styles.text}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.number}>
            <Text style={styles.text}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.number}>
            <Text style={styles.text}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.symbol}>
            <Text style={styles.text}>-</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.wrapperSymbol}>
          <TouchableOpacity style={styles.number}>
            <Text style={styles.text}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.number}>
            <Text style={styles.text}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.number}>
            <Text style={styles.text}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.symbol}>
            <Text style={styles.text}>*</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.wrapperSymbol}>
          <TouchableOpacity style={styles.number}>
            <Text style={styles.text}>•</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.numberNull}>
            <Text style={styles.text}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.symbol}>
            <Text style={styles.text}>/</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.wrapperSymbol}>
          <TouchableOpacity style={styles.symbolEqual}>
            <Text style={styles.textSymbol}>&lt;</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.symbolEqual}>
            <Text style={styles.textSymbol}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
