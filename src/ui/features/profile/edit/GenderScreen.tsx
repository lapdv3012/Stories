import React, { useState } from 'react'
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Colors from '../../../../assets/resources/Colors'
import Dimens from '../../../../assets/resources/Dimens'
import Fonts from '../../../../assets/resources/Fonts'
import ImageAssets from '../../../../assets/resources/Icons'
import Strings from '../../../../assets/resources/Strings'
import Line from '../../../components/Line'
import ToolBarApp from '../../../components/ToolBarApp'

const enum GENDER {
    MALE = 'MALE',
    FEMALE = 'FEMALE',
    OTHER = 'OTHER',
}

const GenderScreen = ({ navigation }: { navigation: any }) => {
    const [sex, setSex] = useState(GENDER.MALE)
    const [isSelect, setSelect] = useState(false)

    const getGender = () => {
        switch (sex) {
            case GENDER.MALE:
                return Strings.text_male
            case GENDER.FEMALE:
                return Strings.text_female
            case GENDER.OTHER:
                return Strings.text_other
        }
    }

    const isSelected = (key: String) => {
        return getGender() === key
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ToolBarApp title={Strings.text_gender} navigation={navigation} />

            <Line />

            <Text style={[styles.textChooseGender]}>{Strings.text_choose_gender}</Text>

            <TouchableOpacity onPress={() => { setSelect(!isSelect) }}>
                <View style={[styles.itemGender, { borderColor: isSelect ? Colors.colorTextBlue : Colors.colorNeutralGray }]}>
                    <Text style={[styles.textGender]}>{getGender()}</Text>
                    <Image
                        style={{
                            width: Dimens.px_24,
                            height: Dimens.px_24,
                            transform: [{ rotate: isSelect ? '180deg' : '360deg' }]
                        }}
                        source={ImageAssets.ic_arrow_down}
                    />
                </View>
            </TouchableOpacity>

            <View style={[styles.itemGenderSelector, { opacity: isSelect ? 1 : 0 }]}>
                <TouchableOpacity onPress={() => {
                    setSex(GENDER.MALE)
                    setSelect(false)
                }}>
                    <Text style={[
                        styles.textGenderSelector,
                        { color: isSelected(Strings.text_male) ? Colors.colorTextBlue : Colors.colorTextBlack },
                        { fontFamily: isSelected(Strings.text_male) ? Fonts.fontBold : Fonts.fontRegular },
                    ]}>{Strings.text_male}</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    setSex(GENDER.FEMALE)
                    setSelect(false)
                }}>
                    <Text style={[styles.textGenderSelector,
                    { color: isSelected(Strings.text_female) ? Colors.colorTextBlue : Colors.colorTextBlack },
                    { fontFamily: isSelected(Strings.text_female) ? Fonts.fontBold : Fonts.fontRegular },
                    ]}>{Strings.text_female}</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    setSex(GENDER.OTHER)
                    setSelect(false)
                }}>
                    <Text style={[
                        styles.textGenderSelector,
                        { color: isSelected(Strings.text_other) ? Colors.colorTextBlue : Colors.colorTextBlack },
                        { fontFamily: isSelected(Strings.text_other) ? Fonts.fontBold : Fonts.fontRegular },
                    ]}>{Strings.text_other}</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={{ flex: 1, margin: Dimens.px_16 }}>
                <View style={styles.bottomView}>
                    <Text style={{
                        padding: Dimens.px_16,
                        textAlign: 'center',
                        fontFamily: Fonts.fontBold,
                        color: Colors.colorWhite
                    }}>{Strings.text_save}</Text>
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default GenderScreen

const styles = StyleSheet.create({
    textChooseGender: {
        fontFamily: Fonts.fontBold,
        margin: Dimens.px_16,
        color: Colors.colorTextBlack
    },
    itemGender: {
        marginHorizontal: Dimens.px_16,
        borderColor: Colors.colorNeutralGray,
        borderWidth: Dimens.px_1,
        borderRadius: Dimens.px_4,
        padding: Dimens.px_12,
        flexDirection: 'row',
        alignItems: 'center'
    },
    itemGenderSelector: {
        marginTop: Dimens.px_12,
        flexDirection: 'column',
        alignContent: 'center',
        marginHorizontal: Dimens.px_16,
        borderColor: Colors.colorNeutralGray,
        borderWidth: Dimens.px_1,
        borderRadius: Dimens.px_4,
        padding: Dimens.px_12,
    },
    textGender: {
        color: Colors.colorTextBlack,
        fontFamily: Fonts.fontBold,
        fontSize: Dimens.px_12,
        flex: 1
    },
    textGenderSelector: {
        fontFamily: Fonts.fontBold,
        fontSize: Dimens.px_12,
        paddingVertical: Dimens.px_12,
        color: Colors.colorTextBlack
    },
    bottomView: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
        backgroundColor: Colors.colorTextBlue,
        borderRadius: Dimens.px_6
    },
})
