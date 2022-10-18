import { View, Text } from "react-native";
import { Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Ionicons, Feather} from '@expo/vector-icons';
import { estiloPerfil } from "./estiloPerfil";

import PerfilTabs from "./RotasPerfil.js/RotasPerfil";

export default function Perfil(){
    return(
        <>
        
        <View style={estiloPerfil.container}>
        
           <Feather name="user" size={50} color={"#fff"}
           style={estiloPerfil.fotoPerfil}
           />

            <Text style={estiloPerfil.textoPerfil}>@user</Text>
            
            
        </View>
        <PerfilTabs />
        </>
    );
}

