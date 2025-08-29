const { useState } from 'react';
import React { useStatefrom } 'react';
import { SafeAreaView, view, text, touchableOpacity, stylesheet, scrollview, textinput, alert, TouchableOpacity, View, TextInput } from 'react-native';
export default function app() {
  const [pagina, setPagina] = useState('home');
  return (
    <SafeAreaView style={style.container}>
      <header pagina={pagina} setpagina={setpagina}>
        <scrollview contentContainerstyle={style.content}>
          {pagina === 'home' && <Home />}
          {pagina === 'sobre' && <Sobre />}
          {pagina === 'serviços' && <Serviços />}
          {pagina === 'contato' && <Contato />}



        </scrollview>
      </header>
    </SafeAreaView>
  );
}
function header({ pagina, setpagina }) {
  return (
    <View style={styles.header} >
      <Texte styles={style.headertitle}>PlayZone</Texte>
      <View style={styles.nav}>
        {['home', 'sobre', 'serviços', 'contato'].map((p) => (
          <TouchableOpacity
            key={p}
            styles={[styles.navButton, pagina === p && styles.navButtonActive]}
            onPress={() => setPagina(P)}
          >
            <Text styles={styles.navButtonText}>{p.charAt(0).toUpperCase() + p.slice(1)}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

function Home () {
  return (
    <View style= {styles.section}>
      <Text style= {styles.title}> Bem-Vindo à nossa empresa </Text>
      <Text>Somos líderes em soluções de problemas sobre jogos e tecnologia!! </Text>
    </View>
  );
}  

function Sobre () {
  return (
    <View styl= {styles.section}>
      <Text style= {styles.title} > Sobre nós</Text>
      <Text> Fundada em 2010, temos o compromisso de qualidade e inovação. </Text>
    </View>
  );
}

function Serviços() {
  return (
    <View style= {styles.section}>
      <Text style= {styles.title}> Nossos Serviços</Text>
      <Text> - Ajuda na resolução dos jogos</Text>
      <Text> -Faz campeonatos onlines</Text>
      <Text> - Ajuda na parte tecnologica</Text>
    </View>
  );
}

function Contado () {
  const [nome, setNome] = React.useState ('');
  const [email. setEmail] = React.useState ('');
  const [mensagem, setMensagem] = React.useState (''); 

  function enviar () {
    if (!nome || !email || !mensagem) {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    } 
    Alert.alert ('Mensagem enviada', 'Obrigada,' ${nome} '! Retornaremos em breve.');
    setNome('');
    setEmail('');
    setMensagem('');
  }
  return(
    <View style= {styles.section}>
      <Text style= {styles.title}> Contato </Text>
      <TextInput
      style={style.input}
      placeholder= "Nome"
      value= {nome}
      onChangeText={setNome}
      />
      <TextInput
      style= {styles.input}
      placeholder="Email"
      value={email}
      onChergeText= {setEmail}
      keyboardType= "email-address"
      />
      <TextInput
      styles={[styles.input, {height: 100}]}
      placeholder= "Mensagem" 
      value= {mensagem}
      onChangeText= {setMensagem}
      multiline
      />
      <TouchableOpacity style= {styles.button} onPress={enviar}>
        <Text style={style.buttonText}> Text </Text>
      </TouchableOpacity>
    </View>
  );
}

function Footer () {
  return (
    <View styles={styles.footer}>
      <Text styles= {{color: 'White'}}> 2025 minha empresa. Todos os direitos reservados.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#f4f7fa'
  },
  header: {
    backgroundColor: '#004080'
    padding: 40, 
    alignContent: 'center',
    alignItems: 'center'
  },
  headerTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12
  },
  nav: {flexDirection: 'row',
    justifyContent: 'space-around'
  },
  navButton: {
  paddingVertical: 8,
  paddingHorizontal: 12, 
   borderRadius: 4 
  },
  navButtonActive: { 
    backgroundColor:'#0066cc'
  },
navButtonText: { 
  color: 'white', 
  fontWeight: 'bold'
},
content: { padding: 20, flexGrow: 1},
section: { marginBottom: 20 },
title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
input: {
  backgroundColor: 'white',
  borderColor: '#ccc',
  borderWidth: 1,
  paddingHorizontal: 10,
  paddingVertical: 8,
  borderRadius: 4,
  marginBottom: 15,
},
button:{
  backgroudColor: '#004080',
  paddingVertical: 12,
  borderRadius: 6,
  alignItems: 'center',
},
buttonText: {color: 'White', FontWeight: 'bold', fontSize: 16},
footer: { backgraoudColor: '#00264d', padding: 15, alignItems: 'center'},
});