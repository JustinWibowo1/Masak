import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Pressable } from 'react-native';
import React from 'react';

const Register = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/logo.png')} style={styles.logo} />
            <View style={styles.formContainer}>
                <Text style={styles.title}>Register to your account</Text>
                
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
                <TextInput 
                    placeholder="Nama" 
                    style={styles.input} 
                    cursorColor="black" 
                />

                <TouchableOpacity 
                    onPress={() => navigation.navigate('home')} 
                    style={styles.registerButton}
                >
                    <Text style={styles.registerText}>Sign Up</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.orContainer}>
                <Text style={styles.orText}>-Or Sign Up With-</Text>
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

            <View style={styles.signInContainer}>
                <Text style={styles.signInText}>Already have an account?</Text>
                <Pressable onPress={() => navigation.navigate('login')}>
                    <Text style={styles.signInLink}>Sign In</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default Register;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 80,
        alignItems: 'center',
        backgroundColor: '#e2f6ff',
    },
    logo: {
        width: 200,
        height: 200,
        marginBottom: 10,
    },
    formContainer: {
        width: '80%',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        width: '100%',
        height: 50,
        marginBottom: 15,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        backgroundColor: 'white',
        color: 'black',
    },
    registerButton: {
        backgroundColor: '#5e17fb',
        height: 50,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 20,
    },
    registerText: {
        fontWeight: 'bold',
        color: 'white',
    },
    orContainer: {
        marginTop: 40,
        alignItems: 'center',
    },
    orText: {
        fontSize: 14,
        color: '#333',
        marginBottom: 20,
    },
    socialContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
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
    signInContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 40,
    },
    signInText: {
        fontSize: 14,
        color: '#333',
    },
    signInLink: {
        fontSize: 14,
        color: 'blue',
        marginLeft: 5,
    },
});
