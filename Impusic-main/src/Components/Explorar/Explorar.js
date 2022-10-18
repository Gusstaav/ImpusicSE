import React, {useState} from "react";
import { Text, ScrollView, Image, View, RefreshControl } from "react-native";
import video from '../../assets/images.jpg';
import { estiloExplorar } from "./estiloExplorar";

export default function Explorar (){
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => {setRefreshing(false)},1000);
    };
    return(
        <ScrollView style={estiloExplorar.geral}
        refreshControl={
            <RefreshControl 
             refreshing={refreshing}
             onRefresh={onRefresh}
             />
         }
        >
            <View style={estiloExplorar.container}>
                
                <Image source={video} style={estiloExplorar.video} />
                <Text style={estiloExplorar.textoVideo}>Video sem titulo nao sei o que aconteceu</Text>
            </View>
            
            <View style={estiloExplorar.container}>
                
                <Image source={video} style={estiloExplorar.video} />
                <Text style={estiloExplorar.textoVideo}>Video sem titulo nao sei o que aconteceu</Text>
            </View>
            <View style={estiloExplorar.container}>
                
                <Image source={video} style={estiloExplorar.video} />
                <Text style={estiloExplorar.textoVideo}>Video sem titulo nao sei o que aconteceu</Text>
            </View>

            <View style={estiloExplorar.container}>
                
                <Image source={video} style={estiloExplorar.video} />
                <Text style={estiloExplorar.textoVideo}>Video sem titulo nao sei o que aconteceu</Text>
            </View>

            <View style={estiloExplorar.container}>
                
                <Image source={video} style={estiloExplorar.video} />
                <Text style={estiloExplorar.textoVideo}>Video sem titulo nao sei o que aconteceu</Text>
            </View>

            <View style={estiloExplorar.container}>
                
                <Image source={video} style={estiloExplorar.video} />
                <Text style={estiloExplorar.textoVideo}>Video sem titulo nao sei o que aconteceu</Text>
            </View>
        </ScrollView>
    );
}