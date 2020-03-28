import React, { useState } from 'react';
import{View, Text, Image} from 'react-native';
import { ScrollView, FlatList } from 'react-native-gesture-handler';
import {FontAwesome, Feather, AntDesign, Ionicons} from '@expo/vector-icons';
import {TextInput, TouchableOpacity} from 'react-native';
import { useScreens } from 'react-native-screens';

const SettingsScreen=()=>{
  const [signUpEmail, setSignUpEmail] = useState("")
  const [signUpPassword, setSignUpPassword] = useState("")
  const [signUpNumber, setSignUpNumber] = useState("")

  const handleSignUp = () =>{
    if(signUpEmail.length && signUpPassword.length && signUpNumber !== "" ){
       alert("Success")
    }
       else{
          alert("Kindly fill all fields")
       }
    return;
 }
return(
<View style={{flex:1, paddingLeft:20, paddingRight:20}}>
      <View style={{paddingTop:60}}>
         <Text style={{fontWeight:"bold", fontSize:15, color:"#C8C8C8"}}>THE COMPANY</Text>
      </View>

      <View style={{paddingTop:10}}>
         <Text style={{fontSize:28, fontWeight:"bold"}}>Sign Up</Text>
      </View>

      <View style={{paddingTop:30}}>
         <Text style={{fontSize:15, color:"#888888"}}>Email</Text>
      </View>

      <View style={{borderBottomWidth:1, borderBottomColor:"#E8E8E8", padding:10}}>
         <View style={{padding:5}}>
         <TextInput
         placeholder=""
         onChangeText={setSignUpEmail}
         value={signUpEmail}/>
         </View>
         

      </View>

      <View style={{marginTop:20}}>
        <Text style={{color:"#888888"}}>Password</Text>
      </View>

      <View style={{borderBottomWidth:1, borderBottomColor:"#E8E8E8", padding:10}}>
      <View style={{flexDirection:"row", borderBottomWidth:1, borderBottomColor:"#E8E8E8"}}>
         <TextInput
         placeholder=""
         secureTextEntry={true}
         onChangeText={setSignUpPassword}
         value={signUpPassword}/>
         
         <View style={{paddingLeft:120, paddingBottom:5}}>
         <Ionicons
         name="ios-eye"
         size={24}
         color="#888888"/>
         </View>
         
      </View>

      <View style={{marginTop:20}}>
        <Text style={{color:"#888888"}}>Phone Number</Text>
      </View>

      <View style={{borderBottomWidth:1, borderBottomColor:"#E8E8E8", padding:10}}>
      <View style={{padding:5}}>
         <TextInput
         placeholder=""
         keyboardType="numeric"
         onChangeText={setSignUpNumber}
         value={signUpNumber}/>
         </View>
      </View>
       
      <View style={{flexDirection:"row", paddingTop:40}}> 
       <View style={{backgroundColor:"white", width:15, height:15, borderRadius:3, borderColor:"#888888", marginTop:30, borderWidth:1, borderColor:"#E8E8E8"}}/>
       <View>
         <Text style={{paddingTop:25, color:"#3399FF", fontWeight:"bold", fontSize:15}}>  Terms & Conditions</Text>
       </View>
       </View>

       <TouchableOpacity style={{marginHorizontal:30, backgroundColor:"#3366FF", borderRadius:4, height:52, alignItems:"center", justifyContent:"center", marginTop:60}}
       onPress={()=>handleSignUp()}>
                <Text style={{fontWeight:'bold', color:'#fff'}}>Sign Up</Text>
       </TouchableOpacity>

</View>
</View>

);

}

export default SettingsScreen;