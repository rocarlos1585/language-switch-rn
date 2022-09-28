
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Modal, View, Text, Pressable, StyleSheet, Image } from "react-native";


const SpainFlag = require('./src/Assets/Images/spainFlag.png')
const EnglishFlag = require('./src/Assets/Images/usaFlag.png')
const FranceFlag = require('./src/Assets/Images/franceFlag.png')
const ItalianFlag = require('./src/Assets/Images/italyFlag.png')


const LanguagePicker = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const { i18n } = useTranslation(); //i18n instance
  const [languageSelected, setLangugeSelected] = useState({name:'en', label:'English', flag:EnglishFlag})

  //array with all supported languages
  const languages = [
    { name: "it", label: "Italian", flag: ItalianFlag },
    { name: "en", label: "English", flag:EnglishFlag },
    { name: "fr", label: "Français", flag:FranceFlag },
    { name: "es", label: "Español", flag:SpainFlag },
  ];

  const LanguageItem = ({ name, label, flag }: { name: string; label: string; flag:any }) => (
    <Pressable
        style={styles.languageItem}
        onPress={() => {
            i18n.changeLanguage(name); //changes the app language
            setModalVisible(!modalVisible);
            setLangugeSelected({name, label, flag})
        }}
    >
        <Image style={styles.languageItemImage} source={flag}/>
      <Text style={styles.languageItemText}>{label}</Text>
    </Pressable>
  );

  return (
    <View>
      <Modal
        animationType="slide"
        transparent
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <View >
            {languages.map((lang) => (
              <LanguageItem {...lang} key={lang.name} />
            ))}
          </View>
        </View>
      </Modal>

      <Pressable style={styles.languageSelectedItem} onPress={() => setModalVisible(true)}>
        <Image style={styles.languageSelectedImage} source={languageSelected.flag}/>
        {/*<Text style={styles.languageSelectedText}>{i18n.language}</Text>*/}
      </Pressable>

    </View>
  );
};

export default LanguagePicker;

const styles = StyleSheet.create({
    modalContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'rgba(0, 145, 184, 0.9)'
    },

    languageItem:{
        flexDirection:'row', 
        marginVertical:10,
    },

    languageItemImage:{
        width:40,
        height:40,
        borderRadius:100
    },

    languageItemText:{
        color:'white',
        fontWeight:'bold',
        fontSize:30,
        marginHorizontal:10
    },

    languageSelectedItem:{
        flexDirection:'row', 
        marginVertical:10,
    },

    languageSelectedImage:{
        width:40,
        height:40,
        borderRadius:100
    },

    languageSelectedText:{
        color:'black',
        fontWeight:'bold',
        fontSize:30,
        marginHorizontal:10
    }

})