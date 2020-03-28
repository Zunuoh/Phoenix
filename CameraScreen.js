import React from 'react';
import {View, Text, Image} from 'react-native';
import {FontAwesome, Ionicons} from '@expo/vector-icons';
import {TextInput, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const CameraScreen = ()=>{
    return(
      <View style={{flex:1, padding:20, flexDirection:"row"}}>
          <View>
              <Image source={require("../assets/images/pict.jpeg")} style={{height:400, width:400, paddingLeft:20}}/>
              <Text style={{fontWeight:"bold", fontSize:30, marginTop:30}}>Welcome to our</Text>
              <Text style={{fontSize:28, fontWeight:"bold"}}>community!</Text>
              <Text style={{marginTop:10, color:"#888888"}}>We appreciate you taking the time for</Text>
              <Text style={{marginTop:5, color:"#888888"}}>downloading our app and evaluating us.</Text>
              
              <View style={{padding:20, paddingTop:25}}>
              <TouchableOpacity style={{backgroundColor:"#3366FF", borderRadius:4, height:40, width:290, alignItems:"center", justifyContent:"center"}}>
                <Text style={{fontWeight:'bold', color:'#fff'}}>Log in</Text>
              </TouchableOpacity>
              </View>
              
          </View>

        

      </View>
       
         
    );
 
}

export default CameraScreen;