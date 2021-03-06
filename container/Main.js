import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { styles } from "../styles";
import {
  addSymbol,
  totalSum,
  cleanDisplay,
  deleteSymbol,
} from "../store/actions";

const Main = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const showSymbol = (value) => {
    dispatch(addSymbol(value));
  };
  const showTotalSum = () => {
    dispatch(totalSum());
  };
  const eraseData = () => {
    dispatch(cleanDisplay());
  };
  const deleteOneSymbol = () => {
    dispatch(deleteSymbol());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.display}>{counter}</Text>
      <View style={styles.wrapper}>
        <View style={styles.wrapperSymbol}>
          <TouchableOpacity
            style={styles.number}
            onPress={() => showSymbol("1")}>
            <Text style={styles.text}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.number}
            onPress={() => showSymbol("2")}>
            <Text style={styles.text}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.number}
            onPress={() => showSymbol("3")}>
            <Text style={styles.text}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.symbol}
            onPress={() => showSymbol("+")}>
            <Text style={styles.text}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.wrapperSymbol}>
          <TouchableOpacity
            style={styles.number}
            onPress={() => showSymbol("4")}>
            <Text style={styles.text}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.number}
            onPress={() => showSymbol("5")}>
            <Text style={styles.text}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.number}
            onPress={() => showSymbol("6")}>
            <Text style={styles.text}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.symbol}
            onPress={() => showSymbol("-")}>
            <Text style={styles.text}>-</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.wrapperSymbol}>
          <TouchableOpacity
            style={styles.number}
            onPress={() => showSymbol("7")}>
            <Text style={styles.text}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.number}
            onPress={() => showSymbol("8")}>
            <Text style={styles.text}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.number}
            onPress={() => showSymbol("9")}>
            <Text style={styles.text}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.symbol}
            onPress={() => showSymbol("*")}>
            <Text style={styles.text}>*</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.wrapperSymbol}>
          <TouchableOpacity
            style={styles.number}
            onPress={() => showSymbol(".")}>
            <Text style={styles.text}>•</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.numberNull}
            onPress={() => showSymbol("0")}>
            <Text style={styles.text}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.symbol}
            onPress={() => showSymbol("/")}>
            <Text style={styles.text}>/</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.wrapperSymbol}>
          <TouchableOpacity
            style={styles.symbolEqual}
            onPress={deleteOneSymbol}>
            <Text style={styles.textSymbol}>&lt;</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.symbolEqual} onPress={eraseData}>
            <Text style={styles.textSymbol}>CE</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.symbolEqual} onPress={showTotalSum}>
            <Text style={styles.textSymbol}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Main;
