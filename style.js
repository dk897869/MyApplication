import { StyleSheet } from "react-native"

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
export{style}