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

  const [shouldShow, setShouldShow] = useState(false);
  const [numero, setNumero] = useState(0)
  const [limite, setLimite] = useState(100)
  
  function handleNumero(){
    //var limite_sorteio = limite + 1;
    const novo_numero = Math.floor(Math.random()*limite)
    setNumero(novo_numero)
    Vibration.vibrate()
    setShouldShow(true)
    setTimeout(() => {setShouldShow(false)}, 3000)
    
  }

  return(
    <ScrollView style={{backgroundColor:'white'}}>
      <SafeAreaView style={style.container}>
        <Image
        source={require('../assets/img/image.jpg')}
        style={style.image}
        /> 
        
        <View style={style.view}>

        {shouldShow ? <Image
            source={require('../assets/img/confetti.gif')}
            style={style.gif}
            
            /> : null}
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
    
  },

  gif:{
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    
    justifyContent: 'center',
    alignItems: 'center',
    
    
  }


})



export default app;