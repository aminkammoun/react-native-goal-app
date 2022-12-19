import { StyleSheet } from "react-native";
export const Styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        paddingHorizontal: 14,
    },
    InputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#311b6b"
    },
    TextInput: {
        borderWidth: 1,
        borderColor: "#e4d0ff",
        backgroundColor: "#e4d0ff",
        color: "#120438",
        borderRadius: 6,
        width: "87%",
        marginRight: 8,
        padding: 16
    },
    GoalsContainer: {
        flex: 5
    },
    goalItem: {
        margin: 3,
        padding: 5,
        textAlign: "center",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: 100,
        backgroundColor: "purple",
        color: 'white',
        fontWeight: "500",
        borderRadius: 5,
        borderColor: "white",

    },
    viewGoalItem: {
        margin: 'auto',
    },
    btnContainer: {
        flexDirection: "row",

        marginTop: 10,

    },
    btnOneCnt: {
        marginHorizontal: 8,
        width: '40%',
        textTransform: "lowerCase",
    },
    targetGoal: {
        flexDirection: "row",
    }
    ,
    image: {
        width: 100,
        height: 100,
        margin: 20
    }
});