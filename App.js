import React, {useState} from 'react';
import {view,Text,StyleSheet,TouchableOpacity, View} from 'react-native';
import {} from './style';
export default function App(){
  const[counter,setCounter]=useState(0);
  const increment=()=>{
    setCounter(counter+1);
  };
  const decrement=()=>{
    if(counter>0){
      setCounter(counter-1);
    }
  };
  return(
    <View style={style.container}>
      <TouchableOpacity onPress={()=>decrement()}>
        <View style={style.customButton}>
          <Text style={style.buttonText}>-</Text>
        </View>
      </TouchableOpacity>
      {/* */}
      <Text style={style.counterText}>{counter}</Text>
      {/* */}
      <TouchableOpacity onPress={()=>increment()}>
        <View style={style.customButton}>
          <Text style={style.buttonText}>+</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
const style=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'space-around',
    alignItems:'center',
    flexDirection:'row'
  },
  customButton:{
    backgroundColor:'blue',
    height:50,
    width:50,
  },
  buttonText:{
    color:'#fff',
    fontSize:30,
    textAlign:'center',
  },
  counterText:{
    fontSize:40,
  }
})
export{style};