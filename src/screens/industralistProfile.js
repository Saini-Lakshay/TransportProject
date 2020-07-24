import React, {Component} from "react";
import {View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, Image, TextInput} from "react-native";

class IndustralistProfile extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <SafeAreaView>
                    <Text style={styles.companyName}>Company Name</Text>
                    <Text style={styles.location}>Location of Company</Text>
                    <View style={styles.profileImage}>
                    <Image
                style={styles.logo}
                source={{
                    uri: 'https://images.unsplash.com/photo-1473445730015-841f29a9490b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
                }} />
                    </View>
                    </SafeAreaView>
                </View>
                <View style={styles.body}>
                    <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
                        <View style={styles.addNewOrderContainer}>
                            <Text style={styles.addNewOrderContainerHeading}>Add new order</Text>
                            <TextInput style={styles.input} placeholder="Name of order" />
                            <TextInput style={styles.input} placeholder="Quantity" />
                            <TextInput style={styles.input} placeholder="Rate of order" />
                            <TextInput style={styles.input} placeholder="Order delivery location" />
                            <TextInput style={styles.input} placeholder="Guarantee of order placement" />
                            <TouchableOpacity style={[styles.btn, {padding: 5, width: "50%", borderRadius: 10, marginHorizontal: "25%", marginTop: 15}]}>
                                <Text style={styles.btnText}>DONE</Text>
                            </TouchableOpacity>
                        </View>
                        {/* map function will be added here after the ad done */}
                        <TouchableOpacity style={styles.touchable}><Text style={styles.listText}>Order 1</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.touchable}><Text style={styles.listText}>Order 2</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.touchable}><Text style={styles.listText}>Order 3</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.touchable}><Text style={styles.listText}>Order 4</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.touchable}><Text style={styles.listText}>Order 5</Text></TouchableOpacity>
                    </ScrollView>
                </View>
                <View style={styles.footer}>
                    <TouchableOpacity style={[styles.btn, {height: "100%"}]}>
                        <Text style={styles.btnText}>Search for trucks</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        )
    }
}
export default IndustralistProfile;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flex: 0.1,
        backgroundColor: "orange",
        paddingVertical: 10,
        paddingHorizontal: 10,
        height: 70
    },
     body: {
        flex: 0.8
    },
    addNewOrderContainer: {
        width: "80%",
        marginHorizontal: "10%",
        marginVertical: 20,
        borderWidth: 2,
        padding: 10,
        borderRadius: 10,
    },
    addNewOrderContainerHeading: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "700",
    },
    touchable: {
        borderRadius: 10,
        borderWidth: 1,
        marginHorizontal: "10%",
        marginVertical: 15,
    },
    listText: {
        fontSize: 17,
        paddingHorizontal: 10,
        color: "#000",
        padding: 5,
        paddingVertical: 15
    },
    input: {
        marginVertical: 10,
        borderBottomWidth: 0,
        borderBottomColor: "rgba(0,0,0,0.6)",
        width: "80%",
        marginHorizontal: "10%",
    },
    logo: {
        height: 40,
        width: 40,
        borderRadius: 20,
        position: "absolute",
        right: 5,
        top: -50
    },
    companyName: {
        marginVertical: 5,
        color: "#fff",
        fontSize: 16
    },
    location: {
        marginVertical: 5,
        color: "#fff",
        fontSize: 16
    },
    footer: {
        flex: 0.1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    btn: {
        backgroundColor: "orange",
        padding: "3%",
        width: "100%",
        justifyContent: "center"
    },
    btnText: {
        color: "#fff",
        fontSize: 18,
        textAlign: "center"
    }

})