import React,{useState} from 'react';
import { StyleSheet,View, Image, TouchableOpacity,Text, CheckBox,Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import PasswordField from './PasswordField';
import Switch from 'react-native-switch-toggles';
export default function CreatePassword() {

  const [password,setPassword]=useState('');
  const [backcolor1,setBackColor]=useState('#A5AEC6');
  const [backcolor2,setBackColor2]=useState('#A5AEC6')
  const [isEnabled, setIsEnabled] = React.useState(false);
  const [isSelected, setSelection] = useState(false);

  const testAlphbet = new RegExp("^(?=.*[a-z])(?=.*[A-Z])");
  const testLength= new RegExp("^(?=.{5,})");

  const verifyPassword=(data)=>{
    setPassword(data);
    if(testAlphbet.test(password)) setBackColor('#4BADE4');
    if(testLength.test(password)) setBackColor2('#4BADE4');//use Async Await
    
  };
  
  return (
    <View style={styles.container}>
    
      <Image source={require('../assets/Vector-backward.png')}/>
      <View style={styles.fixCenter}>
        <Text style={{fontSize:24,fontWeight:700, fontFamily:'Roboto'}}>Create Password</Text>
        <Text style={{fontSize:14,fontWeight:400, fontFamily:'Roboto',textAlign:'center',color:'#A5AEC6', marginTop:20}}>This password will unlock your DAPP PLAY STORE wallet only on this device</Text>
      </View>
    <Text style={styles.descText} >New Password</Text>  
    <PasswordField verifyPassword={text=>verifyPassword(text)}/>
    <Text style={styles.descText} >New Password</Text>  
    <PasswordField/>
    <View style={styles.strongValidation}>
      <View style={[styles.dot, { backgroundColor: backcolor2 }]} />
      <Text style={[ { color: backcolor2,fontSize:14, marginLeft:10,fontFamily:'Roboto' }]}>Min 8 characters</Text>
    </View>
    <View style={styles.strongValidation}>
      <View style={[styles.dot, { backgroundColor: backcolor1 }]} />
      <Text style={[ { color: backcolor1 ,fontSize:14, marginLeft:10,fontFamily:'Roboto'}]}>At least 1 capital letter</Text>
    </View>
    <View style={{flexDirection:'row',marginTop:50}}>
      <Text style={{fontFamily:'Roboto',fontSize:17}}>Enable Sign In with Face ID?</Text>
      <Switch style={{marginRight:0}}size={20} value={isEnabled} onChange={(value) => setIsEnabled(value)} activeTrackColor={"#45D058"}/>
    </View >
    <View style={{flexDirection:'row',marginTop:30}}>
       <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={{marginTop:3, marginRight:10}}
        />
      <Text style={{fontSize:12,fontFamily:'Roboto',color:'#A5AEC6'}}>I understand that MetaMask cannot recover this password for me.<Text style={{color:'#2862F8'}}>Learn More</Text> </Text>
    </View>
    <View style={{flexDirection:'row',marginTop:50,height:6,justifyContent: 'center',}}>
      <TouchableOpacity style={{width:30,borderRadius:3,backgroundColor:'#2862F8',marginRight:10}}/>
      <TouchableOpacity style={{width:6,borderRadius:3,backgroundColor:'#2862F8',marginRight:10}}/>
      <TouchableOpacity style={{width:6,borderRadius:3,backgroundColor:'#2862F8',marginRight:10}}/>     
    </View>
    <TouchableOpacity style={styles.createroundButton}>
       <Text style = {styles.createbutton}>
          Create a New Wallet
        </Text>
    </TouchableOpacity>
    
  </View>

  );
}

const styles = StyleSheet.create({
   container: {
    paddingTop: 40,
    paddingHorizontal:30
    },
   createbutton:{
    color:'white',
    fontFamily:'Roboto',
    fontSize:14,
    marginRight:10,
    textAlign:'center',
  },
  dot:{
    height:10,
    width:10,
    borderRadius:5,
    marginTop:5 
  },
  strongValidation:{
    flexDirection:'row',
    alignItems: 'center',
    marginTop:15,
  },
  descText:{
    marginTop:30,
    fontFamily:'Roboto',
    fontSize:12,
  },
  createroundButton:{
    width:"100%",
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    marginTop:30,
    background:'#2862F8',
    border: '1px solid #2862F8',
  },
  fixCenter:{
    marginTop:30,
    justifyContent: 'center',
    alignItems: 'center',
  },
    
});