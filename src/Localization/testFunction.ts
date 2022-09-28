import AsyncStorage from '@react-native-async-storage/async-storage';
 
 const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('languaje')
      console.log(value)
      if(value !== null ) {
        return value
      }
    } catch(e) {
      // error reading value
    }
  }

  export default getData