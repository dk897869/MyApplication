import React,{useState} from 'react';
import { TouchableOpacity,Text,View,ActivityIndicator } from 'react-native';
const MyComponent=()=>{
  const[isLoading,setIsLoading]=useState(false);
  const[data,setData]=useState(null);
  const[error,setError]=useState(null);
  const fetchData=async()=>{
    setIsLoading(true);
    try{
      const response=await fetch('https://jsonplaceholder.typicode.com/photos');
      const jsonData=await response.json();
      setData(jsonData);
    }
    catch(error){
      setError(error);
    }
    finally{
      setIsLoading(false);
    }
  };
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <TouchableOpacity
      onPress={fetchData}
      activeOpacity={0.7}
      style={{backgroundColor:'blue',padding:10,borderRadius:5}}>
        <Text style={{color:'white',textAlign:'center'}}>Fetch Data</Text>
      </TouchableOpacity>
      {isLoading&&<ActivityIndicator style={{marginTop:20}}/>}
      {error && <Text style={{marginTop:20}}>Error:{error.message}</Text>}
      {data &&(
        <View style={{marginTop:20}}>
          <Text>Data Fetched successfully:</Text>
          <Text>{JSON.stringify(data)}</Text>
          </View>
      )}
    </View>
  );
};
export default MyComponent;