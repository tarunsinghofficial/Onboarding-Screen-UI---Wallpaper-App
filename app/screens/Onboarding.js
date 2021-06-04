import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    Image, 
    Dimensions, 
    StatusBar,
    Button,
      } from 'react-native';
import Swiper from 'react-native-swiper';

const {width, height} = Dimensions.get('window'); //To get dimensions from any OS

function Onboarding(props) {
    return (
        <View style={styles.container}>
            <StatusBar hidden={false} />
            <Swiper>
                <View style={styles.slide}>
                    <Image 
                        style={styles.image} 
                        source={require('../assets/1.jpeg')} 
                    />
                </View>
                <View style={styles.slide}>
                    <Image 
                        style={styles.image} 
                        source={require('../assets/2.jpeg')} 
                    />
                </View>
                <View style={styles.slide}>
                    <Image 
                        style={styles.image} 
                        source={require('../assets/3.jpeg')} 
                    />
                </View>
                <View style={styles.slide}>
                    <Image 
                        style={styles.image} 
                        source={require('../assets/4.jpeg')} 
                    />
                </View>
                
            </Swiper>
            <View style={styles.textContainer}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>
                            CAR WALLPAPERS
                        </Text>
                    </View>
                    <View style={styles.subTitleContainer}>
                        <Text style={styles.subTitle}>
                            Runner
                        </Text>
                    </View>
            </View>
            <View style={styles.buttonContainer}>
                    <View style={styles.signupContainer}>
                        <Text
                            style={styles.signup} 
                            onPress={() => {
                                alert('You Signed Up!');
                              }}
                        >Sign Up In</Text>
                    </View>
                    <View style={styles.loginContainer}>
                        <Text 
                            style={styles.login} 
                            onPress={() => {
                                alert('You Signed In!');
                              }} 
                        >Log In</Text>
                    </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    slide: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: width,
        height: height,
        
    },
    textContainer: {
        position: 'absolute',
        bottom: 200,
        marginLeft: 20,
        height: 120,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleContainer: {
        backgroundColor: '#3B55E6',
        width: 300,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white'
    },
    subTitleContainer: {
        backgroundColor: '#3B55E6',
        width: 200,
        height: 50,
        marginLeft: -100,
        opacity: 0.7,
        alignItems: 'center',
        justifyContent: 'center'
    },
    subTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
    },
    buttonContainer: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 50,
        marginLeft: 20,
        height: 60,
        width: 370,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    signupContainer: {
        width: 180,
        height: 60,
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    signup: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    loginContainer: {
        width: 180,
        height: 60,
        borderColor: '#fff',
        borderWidth: 2,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    login: {
        fontSize: 20,
        fontWeight: 'bold'
    },
})
export default Onboarding;