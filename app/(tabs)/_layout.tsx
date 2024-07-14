
import React, { useState } from 'react'
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
export default function TabLayout() {
  const [backgroundColor, setBackground] =useState('white')

  const handleOnPress = () => {
    const hexRange = "0123456789ABCDEF"
    let color = "#" 
    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)];
    }
    
    setBackground(color)

  }

//  set background
  return (
    <>
      <StatusBar backgroundColor={"black"} />
      <View style={[style.container,{backgroundColor:backgroundColor}]}>
        <TouchableOpacity>
         <View style={style.actionBtn}>
         <Text style={style.actionBtnText} onPress={handleOnPress}>
            press me
          </Text>
         </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionBtn: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    backgroundColor: '#6A1B4D',
    borderRadius: 8,
    elevation: 5,


  },
  actionBtnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  }

})
