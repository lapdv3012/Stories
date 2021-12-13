import React, { useState } from 'react'
import { Alert, Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { setUserInfo } from '../../../state-management/user/action'

const LoginScreen = () => {

    const [email, setStateEmail] = useState<String>('')
    const [pass, setStatePass] = useState<String>('')
    const onChangeMail = (text: string) => {
        setStateEmail(text)
    }

    const onChangePass = (text: string) => {
        setStatePass(text)
    }

    const dispatch = useDispatch()


    const onLogin = async () => {
        if (email && pass) {
            dispatch(setUserInfo({ token: '' }))
        } else {
            Alert.alert('Enter email or password')
        }

    }

    return (
        <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
            <StatusBar
                animated={true}
                backgroundColor='white'
                barStyle='dark-content'
            />
            <ScrollView style={{ flex: 1 }}>
                <View style={styles.container}>
                    <Image
                        style={styles.logoLogin}
                        source={require('../../../assets/icon/ic_logo_login.png')}
                    />
                    <Text style={[styles.titleLogin, styles.bold]}>Welcome to StoryApp</Text>
                    <Text style={[styles.subTitleLogin, styles.regular]}>Sign in to continue</Text>
                    <View style={{ alignItems: 'center', flexDirection: 'row', marginHorizontal: 16, marginTop: 24, borderWidth: 0.5, borderRadius: 20, borderColor: 'gray', }}>
                        <Image
                            style={{ width: 14, height: 14, marginStart: 14 }}
                            source={require('../../../assets/icon/ic_mail.png')}
                        />
                        <TextInput
                            style={{ flex: 1, height: 40, fontSize: 14, padding: 12, }}
                            placeholder="Your mail"
                        />
                    </View>
                    <View style={{ alignItems: 'center', flexDirection: 'row', margin: 16, borderWidth: 0.5, borderRadius: 20, borderColor: 'gray', }}>
                        <Image
                            style={{ width: 14, height: 14, marginStart: 14 }}
                            source={require('../../../assets/icon/ic_lock.png')}
                        />
                        <TextInput
                            style={{ flex: 1, height: 40, fontSize: 14, padding: 12, }}
                            placeholder="Password"
                            secureTextEntry={true}
                            onChangeText={text => {
                                onChangeMail(text)
                            }}
                        />
                    </View>

                    <TouchableOpacity style={{ width: '100%', paddingHorizontal: 12 }} onPress={onLogin}>
                        <View style={{ backgroundColor: '#40BFFF', borderRadius: 20, paddingVertical: 12 }}>
                            <Text style={[{
                                color: 'white',
                                textAlign: 'center',
                            }, styles.bold]}>Sign in</Text>
                        </View>
                    </TouchableOpacity >

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 16, marginTop: 24 }}>
                        <View style={{ flex: 1, borderBottomColor: 'gray', borderBottomWidth: 0.2 }} />
                        <Text style={[{ marginHorizontal: 12 }, styles.regular]}>Or</Text>
                        <View style={{ flex: 1, borderBottomColor: 'gray', borderBottomWidth: 0.2 }} />
                    </View>

                    <TouchableOpacity style={{ width: '100%', paddingHorizontal: 12, marginTop: 6 }}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            borderWidth: 0.5,
                            borderRadius: 20,
                            borderColor: 'gray',
                            height: 40,
                        }}>
                            <Image
                                style={{ alignItems: 'flex-start', width: 14, height: 14, marginStart: 14 }}
                                source={require('../../../assets/icon/ic_google.png')}
                            />
                            <Text style={[{ flex: 1, textAlign: 'center', fontSize: 12 }, styles.bold]}>Login with Google</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ width: '100%', paddingHorizontal: 12, marginTop: 12 }}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            borderWidth: 0.5,
                            borderRadius: 20,
                            borderColor: 'gray',
                            height: 40,
                        }}>
                            <Image
                                style={{ alignItems: 'flex-start', width: 14, height: 14, marginStart: 14 }}
                                source={require('../../../assets/icon/ic_facebook.png')}
                            />
                            <Text style={[{ flex: 1, textAlign: 'center', fontSize: 12 }, styles.bold]}>Login with Facebook</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ width: '100%', padding: 12 }}>
                        <Text style={[{ textAlign: 'center', fontSize: 12 }, styles.bold, styles.colorTextBlue]}>Forgot Password?</Text>
                    </TouchableOpacity>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={[{ fontSize: 12 }, styles.regular]}>Don't have a account?</Text>
                        <Text
                            style={[{ paddingHorizontal: 6, fontSize: 12 }, styles.bold, styles.colorTextBlue]}
                            onPress={() => {
                                console.log('lololololo')
                            }}>Register?</Text>
                    </View>
                </View >
            </ScrollView>
        </SafeAreaView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    logoLogin: {
        marginTop: 24
    },
    titleLogin: {
        color: '#223263',
        fontSize: 20,
        marginTop: 24,
    },
    colorTextBlack: {
        color: '#223263',
    },
    colorTextBlue: {
        color: '#40BFFF',
    },
    subTitleLogin: {
        fontSize: 13,
    },
    thin: {
        fontFamily: 'Poppins-Thin'
    },
    regular: {
        fontFamily: 'Poppins-Regular'
    },
    bold: {
        fontFamily: 'Poppins-Bold',
    }
})
