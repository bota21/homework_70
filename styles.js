import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 2,
    paddingHorizontal: 2,
    flexWrap: "wrap",
  },
  display: {
    flex: 1,
    width: "100%",
    maxHeight: 150,
    justifyContent: "center",
    paddingHorizontal: 2,
    paddingTop: 50,
    paddingBottom: 50,
    marginTop: 50,
    fontSize: 40,
    textAlign: "right",
    overflow: "hidden",
    fontFamily: "monospace"
  },
  wrapper: {
    width: "100%",
    flex: 8,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  wrapperSymbol: {
    width: "100%",
    flexDirection: "row",
  },
  number: {
    width: "24.5%",
    height: 120,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#89CFF0",
    marginHorizontal: 1,
    marginVertical: 1,
  },
  symbol: {
    width: "24%",
    height: 120,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 1,
    marginVertical: 1,
    backgroundColor: "#A4C638",
  },
  numberNull: {
    width: "49.6%",
    height: 120,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#89CFF0",
    marginHorizontal: 1,
    marginVertical: 1,
  },
  symbolEqual: {
    width: "32.6%",
    height: 90,
    backgroundColor: "#FFA500",
    marginHorizontal: 1,
    marginVertical: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 26,
  },
  textSymbol: {
    fontSize: 40,
    color: "#fff",
  },
});
