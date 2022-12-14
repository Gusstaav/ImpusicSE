import React from 'react';
import {TextInput, TouchableOpacity, Text, View, Alert} from 'react-native';
import { useState } from 'react';

import { StyleLogin } from '../stylesLogin-Cadastro/styleLogin';



export default function({navigation}){
    const [email, setEmail] = useState('');
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    

    //Fazer Login
    async function doLogin(){
        let reqs = await fetch('http://192.168.0.13:3000/login', {
            method: 'POST',
            headers:{
                'Accep':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            }) 
        });
        let ress = await reqs.json();
        if(ress === 'error'){
            Alert.alert("E-mail ou senha invalidos")
        }else{
            navigation.reset({ 
                index: 0,
                routes: [{name: "Impusic"}]
            })
        }
        
    }; 

    return(
        <View style={StyleLogin.body}>
            <View style={StyleLogin.container}>
                <Text style={StyleLogin.textLogin}>Login</Text>

                
            <TextInput  style={StyleLogin.input}
            placeholder="email" 
            onChangeText={text=>setEmail(text)} />
            
            
            <TextInput style={StyleLogin.input}
            placeholder="Senha" 
            secureTextEntry onChangeText={text=>setPassword(text)} />   
                
                <TouchableOpacity style={StyleLogin.Botton}
                onPress={() => doLogin()}>
                     <Text style={StyleLogin.textBotton}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={StyleLogin.BottonCadastro}
                onPress={() => navigation.navigate ('Cadastro')}>
                    <Text style={StyleLogin.textCadastro}>Fazer cadastro</Text>
                </TouchableOpacity>

            </View>

        </View>
    );
}