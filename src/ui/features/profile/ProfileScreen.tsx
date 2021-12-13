import React from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import ImageAssets from '../../../assets/resources/Icons'
import Colors from '../../../assets/resources/Colors'
import Line from '../../components/Line'
import Space from '../../components/Space'
import StatusBarApp from '../../components/StatusBarApp'
import Dimens from '../../../assets/resources/Dimens'
import Fonts from '../../../assets/resources/Fonts'

const enum ITEM_PROFILE {
    ITEM_GENDER = 1,
    ITEM_BIRTHDAY = 2,
    ITEM_EMAIL = 3,
    ITEM_PHONE = 4,
    ITEM_CHANGE_PASS = 5,
}

const ProfileScreen = ({ navigation }: { navigation: any }) => {
    console.log('XXXXXXXXXX', navigation);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBarApp backgroundColor={Colors.colorWhite} isLightContent={false} />
            <ScrollView>
                <ToolBar goBack={navigation.goBack} />

                <Line />

                <ItemHeader />

                <Space height={Dimens.px_16} />

                <ItemProfile
                    uri={ImageAssets.ic_gender}
                    title={'Gender'}
                    content={'Male'}
                    onPress={() => { navigator(ITEM_PROFILE.ITEM_GENDER) }}
                />
                <ItemProfile
                    uri={ImageAssets.ic_date}
                    title={'Birthday'}
                    content={'20-12-1994'}
                    onPress={() => { navigator(ITEM_PROFILE.ITEM_BIRTHDAY) }}
                />
                <ItemProfile
                    uri={ImageAssets.ic_message}
                    title={'Email'}
                    content={'lapdv@gmail.com'}
                    onPress={() => { navigator(ITEM_PROFILE.ITEM_EMAIL) }}
                />
                <ItemProfile
                    uri={ImageAssets.ic_phone}
                    title={'Phone Number'}
                    content={'+84395523102'}
                    onPress={() => { navigator(ITEM_PROFILE.ITEM_PHONE) }}
                />
                <ItemProfile
                    uri={ImageAssets.ic_password}
                    title={'Change Password'}
                    content={'*********'}
                    onPress={() => { navigator(ITEM_PROFILE.ITEM_CHANGE_PASS) }}
                />
            </ScrollView>
        </SafeAreaView >
    )
}

const ToolBar = ({ goBack }) => {
    console.log('bbbbbb', goBack)
    return (
        <View style={styles.toolbar}>
            <TouchableOpacity onPress={goBack}  >
                <Image
                    style={{ width: Dimens.px_32, height: Dimens.px_32 }}
                    source={ImageAssets.ic_back}
                />
            </TouchableOpacity>
            <View style={{ marginStart: Dimens.px_12 }}>
                <Text style={[styles.regular, styles.colorTextBlack, { fontWeight: 'bold' }]}>Profile</Text>
            </View>
        </View>
    )
}

const ItemHeader = () => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Dimens.px_24 }}>
            <Image
                style={[styles.circleImage, { resizeMode: 'cover', marginStart: Dimens.px_16 }]}
                source={{ uri: 'https://hinhgaixinh.com/wp-content/uploads/2021/03/20210314-hinh-gai-xinh-1-600x900.jpg' }}
            />

            <View style={{ marginStart: 16 }}>
                <Text style={[styles.bold, styles.colorTextBlack]}>Maxi Gold</Text>
                <Text style={[styles.regular, styles.colorNeutralGray, { fontSize: 12 }]}>@delaxy</Text>
            </View>
        </View>
    )
}

/**
 * Navigator
 * @param id 
 */
const navigator = (id: number) => {
    switch (id) {
        case ITEM_PROFILE.ITEM_GENDER:
            break
        case ITEM_PROFILE.ITEM_BIRTHDAY:
            break
        case ITEM_PROFILE.ITEM_EMAIL:
            break
        case ITEM_PROFILE.ITEM_PHONE:
            break
        case ITEM_PROFILE.ITEM_CHANGE_PASS:
            break
    }
}


interface ItemProfile {
    uri?: string | null | any,
    title?: string,
    content?: string,
    onPress?: () => void
}

const ItemProfile = (props: ItemProfile) => {
    const { uri, title, content, onPress } = { ...props }
    return (
        <TouchableOpacity onPress={() => { onPress }}>
            <View style={{ flex: 1, flexDirection: 'row', padding: 16, alignItems: 'center' }}>
                <Image
                    style={{ width: 24, height: 24 }}
                    source={uri}
                />
                <Text style={[
                    styles.bold,
                    { flex: 1, marginStart: 16, fontSize: 13, color: Colors.colorTextBlack }
                ]}>
                    {title ? title : "JAV"}
                </Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={[styles.regular, styles.colorNeutralGray, { fontSize: 12, marginEnd: 12 }]}>{content}</Text>
                    <Image
                        style={{ width: 24, height: 24, }}
                        source={ImageAssets.ic_arrow_right}
                    />
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.colorWhite
    },
    colorTextBlack: {
        color: Colors.colorTextBlack,
    },
    colorTextBlue: {
        color: '#40BFFF',
    },
    colorNeutralLight: {
        color: '#EBF0FF',
    },
    colorNeutralGray: {
        color: '#9098B1',
    },
    thin: {
        fontFamily: Fonts.fontThin
    },
    regular: {
        fontFamily: Fonts.fontRegular
    },
    bold: {
        fontFamily: Fonts.fontBold,
    },
    title: {
        color: '#40BFFF',
    },
    toolbar: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12
    },
    circleImage: {
        width: 90,
        height: 90,
        borderRadius: 90 / 2,
    },
})
