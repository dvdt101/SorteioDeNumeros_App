import React, {useState} from 'react'
import {Text, 
        View , 
        SafeAreaView, 
        TouchableOpacity, 
        StyleSheet,
        TextInput
      } from 'react-native'

const app = () => {

  const [numero, setNumero] = useState(0)
  const [limite, setLimite] = useState(100)
  
  function handleNumero(){

    const novo_numero = Math.floor(Math.random()*limite)
    setNumero(novo_numero)
  }

  return(
    <SafeAreaView style={style.container}>
      <Text style={style.numero}>{numero}</Text>
      <TouchableOpacity style={style.botao} onPress={handleNumero}>
        <Text style={{textAlign:'center'}}>Gerar numero</Text>
      </TouchableOpacity>
      <TextInput
      placeholder="Digite o limite"
      keyboardType='number-pad'
      style={style.input}
      onChangeText={text => setLimite(text)}
      />
    </SafeAreaView>
    
  )
}

const style = StyleSheet.create ({
  
  container:{
    backgroundColor:'#FF0000',
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  numero:{
    fontSize:60,
    color:'white',
    fontWeight:'bold'
  },

  botao:{
    backgroundColor:'white',
    width:'80%',
    paddingHorizontal:5,
    paddingVertical:10,
    borderRadius:5,
    marginTop:10
  },

  input:{
    marginTop:40,
    backgroundColor:"white",
    width:'35%',
    borderRadius:5
  },


})



export default app;