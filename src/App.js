import React, {useState} from 'react'
import {Text, 
        View , 
        SafeAreaView, 
        TouchableOpacity, 
        StyleSheet,
        TextInput,
        Image,
        ScrollView,
        Vibration   
      } from 'react-native'

const app = () => {

  const [numero, setNumero] = useState(0)
  const [limite, setLimite] = useState(100)
  
  function handleNumero(){
    
    const novo_numero = Math.floor(Math.random()*limite)
    console.log(novo_numero)
    setNumero(novo_numero)
    Vibration.vibrate()
  }

 
  

  return(
    <ScrollView style={{backgroundColor:'white'}}>
      <SafeAreaView style={style.container}>
        <Image
        source={require('../assets/img/image.jpg')}
        style={style.image}
        /> 
        <View style={style.view}>
            <Text style={style.numero}>{numero}</Text>
            <TouchableOpacity style={style.botao} onPress={handleNumero}>
              <Text style={style.botaoTexto}>Gerar numero</Text>
           </TouchableOpacity>
           <TextInput
            placeholder="Definir o limite"
            placeholderTextColor="#8CC63E"
            keyboardType='number-pad'
            textAlign='center'
            style={style.input}
            onChangeText={text => setLimite(text)}
            /> 
          
       </View>
      
      </SafeAreaView>
    </ScrollView>
  )
}

const style = StyleSheet.create ({
  
  container:{
    backgroundColor:'#8CC63E',
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    
  },
  numero:{
    fontSize:78,
    color:'#8CC63E',
    fontWeight:'bold'
  },

  botao:{
    backgroundColor:'#8CC63E',
    width:'60%',
    paddingHorizontal:25,
    paddingVertical:12,
    borderRadius:25,
    marginTop:10
  },

  botaoTexto:{
    textAlign:'center', 
    color:'white', 
    fontSize:18, 
    fontWeight:'bold'
  },

  input:{
    marginTop:40,
    marginBottom:10,
    backgroundColor:'lightgray',
    width:'35%',
    borderRadius:5,
    justifyContent:'center',
    alignItems:'center'
     
  },

  view:{
    backgroundColor:'#FFFFFF',
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    
  },

  image:{
    
    justifyContent: "center",
    
  }


})



export default app;