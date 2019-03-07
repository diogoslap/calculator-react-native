/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default class App extends Component {
  state = {
    display: "",
    result: ""
  };

  handleOp(op) {
    if (op === "C") {
      this.setState({
        display: "",
        result: ""
      });
    } else if (op === "=") {
      this.setState({
        display: this.state.result,
        result: ""
      });
    } else {
      const display = this.state.display + op;
      let result = this.state.result;
      try {
        let fixedOperation = display.split("x").join("*");
        fixedOperation = fixedOperation.split("÷").join("/");
        fixedOperation = fixedOperation.split(",").join(".");
        result = new String(eval(fixedOperation)).toString();
      } catch (err) {}
      this.setState({
        display,
        result
      });
    }
  }
  render() {
    const col1Buttons = [
      ["7", "8", "9"],
      ["4", "5", "6"],
      ["1", "2", "3"],
      [",", "0", "="]
    ];
    const col2Buttons = ["C", "÷", "x", "-", "+"];
    return (
      <View style={styles.container}>
        <Text style={styles.display}>{this.state.display}</Text>
        <Text style={styles.result}>{this.state.result}</Text>
        <View style={styles.buttons}>
          <View style={styles.col1}>
            {col1Buttons.map((line, index) => (
              <View key={index} style={styles.line}>
                {line.map(op => (
                  <TouchableOpacity
                    key={op}
                    style={styles.btn}
                    onPress={() => this.handleOp(op)}
                  >
                    <Text key={op} style={styles.btnText}>
                      {op}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            ))}
          </View>
          <View style={styles.col2}>
            {col2Buttons.map(op => (
              <TouchableOpacity
                key={op}
                style={styles.btn}
                onPress={() => this.handleOp(op)}
              >
                <Text key={op} style={styles.btnText}>
                  {op}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
    backgroundColor: "#FFF"
  },
  display: {
    flex: 1,
    backgroundColor: "#EFEFEF",
    fontSize: 50,
    textAlign: "right",
    paddingTop: 30,
    paddingRight: 10
  },
  result: {
    flex: 0.4,
    backgroundColor: "#EFEFEF",
    fontSize: 20,
    textAlign: "right",
    paddingBottom: 10,
    paddingRight: 10
  },
  buttons: {
    flex: 5,
    flexDirection: "row"
  },
  col1: {
    flex: 3,
    backgroundColor: "#1c1c1c"
  },
  col2: {
    flex: 1,
    backgroundColor: "#0b0b0b"
  },
  line: {
    flexDirection: "row",
    flex: 1
  },
  btn: {
    flex: 1,
    justifyContent: "center"
  },
  btnText: {
    textAlign: "center",
    fontSize: 30,
    color: "white"
  }
});
