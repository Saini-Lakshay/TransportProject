import React , {Component} from "react";
import {View, Text, TextInput, StyleSheet, TouchableOpacity, Image} from "react-native";

class SignupScreen extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>SIGNUP</Text>
                <Image
                style={styles.logo}
                source={{
                    uri: 'https://images.unsplash.com/photo-1473445730015-841f29a9490b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
                }} />
            </View>
            <View style={styles.body}>
                <TextInput 
                style={styles.input}
                placeholder = "Name"
                />
                <TextInput 
                style={styles.input}
                placeholder = "Email"
                />
                <TextInput 
                style={styles.input}
                placeholder = "Phone"
                />
                <TextInput 
                style={styles.input}
                secureTextEntry={true}
                placeholder = "Password"
                />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnText}>Industralist</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnText}>Transporter</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.navigationText}>Already have an account ? <Text style={styles.navigationTextLink}> SIGN IN </Text></Text>
            </View>
        </View>
        )
    }
}
export default SignupScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: "5%",
    },
    logo: {
        height: 100,
        width: 100,
        borderRadius: 50,
        marginTop: "10%",
        borderColor: "orange",
        borderWidth: 5
    },
    header: {
        flex: 0.3,
        alignItems: "center"
    },
    headerText: {
        textAlign: "center",
        fontSize: 20,
        marginTop: 10
    },
    body: {
        flex: 0.7,
        alignItems: "center"
    },
    input: {
        width: "70%",
        borderBottomColor: "black",
        borderBottomWidth: 2,
        marginVertical: 15,
        paddingHorizontal: 5,
        fontSize: 17,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: "13%"
    },
    btn: {
        backgroundColor: "orange",
        marginHorizontal: "10%",
        justifyContent: "center",
        borderRadius: 10
    },
    btnText: {
        padding: 10,
        color: "#fff",
        fontSize: 17
    },
    navigationText: {
        marginTop: "15%"
    },
    navigationTextLink: {
        color: "lightseagreen"
    }
})