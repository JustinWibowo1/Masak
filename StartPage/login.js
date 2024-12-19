import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Pressable } from 'react-native';
import React from 'react';

const Login = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/logo.png')} style={styles.logo} />
            <View>
                <Text style={styles.title}>Login to your account</Text>
                <TextInput 
                    placeholder="Email" 
                    style={styles.input} 
                    cursorColor="black" 
                />
                <TextInput 
                    placeholder="Password" 
                    style={styles.input} 
                    cursorColor="black" 
                    secureTextEntry 
                />
                <TouchableOpacity 
                    onPress={() => navigation.navigate('home')} 
                    style={styles.signInButton}
                >
                    <Text style={styles.signInText}>Sign In</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.orText}>-Or Sign In With-</Text>
                <View style={styles.socialContainer}>
                    <TouchableOpacity style={styles.socialButton}>
                        <Image source={require('../assets/google.png')} style={styles.socialIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.socialButton}>
                        <Image source={require('../assets/facebook.png')} style={styles.socialIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.socialButton}>
                        <Image source={require('../assets/twitter.png')} style={styles.socialIcon} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.signUpContainer}>
                <Text style={styles.signUpText}>Don't have an account?</Text>
                <Pressable onPress={() => navigation.navigate('register')}>
                    <Text style={styles.signUpLink}>Sign Up</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 100,
        alignItems: 'center',
        backgroundColor: '#e2f6ff',
    },
    logo: {
        width: 200,
        height: 200,
        marginBottom: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        width: 300,
        height: 50,
        marginBottom: 15,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        backgroundColor: 'white',
        color: 'black',
    },
    signInButton: {
        backgroundColor: '#5e17fb',
        height: 50,
        width: 300,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 20,
    },
    signInText: {
        fontWeight: 'bold',
        color: 'white',
    },
    orText: {
        marginTop: 40,
        textAlign: 'center',
        fontSize: 14,
        color: '#333',
    },
    socialContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    socialButton: {
        backgroundColor: 'white',
        borderRadius: 25,
        marginHorizontal: 10,
        padding: 10,
    },
    socialIcon: {
        width: 40,
        height: 40,
    },
    signUpContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 50,
    },
    signUpText: {
        fontSize: 14,
        color: '#333',
    },
    signUpLink: {
        fontSize: 14,
        color: 'blue',
        marginLeft: 5,
    },
});
