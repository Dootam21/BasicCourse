import React, { memo } from 'react';
import { SafeAreaView, Text, ImageBackground, View, Image } from 'react-native';
import styles from './styles.js';
import Header from '../Header/Header.js'
const Wrapper = ({ children }) => {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={require('../../assets/images/Login_dark.png')}
                style={styles.background}
            >
                <Header />
                <View style={styles.wrap}>
                    {
                        children
                    }
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
};



export default memo(Wrapper);
