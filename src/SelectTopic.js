import React, { useState} from 'react';
import { Image , StyleSheet, Platform, StatusBar , View, Button, TouchableOpacity} from 'react-native';
import SelectCard from './SelectCard';

function SelectTopic({navigation}) {
    const [select,setSelect] = useState({ topic:'WTF' , sad:'sad' })
    return (
        < View style={ styles.container}>
            <View style={ styles.maintext  }>
                <Image source={require( '../assets/let.png' )}
                />
            </View>
            <View style={ styles.midtext}>
                <Image source={require( '../assets/find.png')}
                />
            </View>
            <View style={ styles.detailtext}>
            <Image source={require( '../assets/select.png')}
                />
            </View>
            <SelectCard setSelect={setSelect} select={select}/>           
            <View style={ styles.lastRow }
            >
                <TouchableOpacity onPress={() => navigation.goBack() } >
                    <Image source={require( '../assets/back2.png')} />    
                </TouchableOpacity>    
                <View style={{ flexDirection:'row', alignItems:'center' , columnGap:20}}>
                    <TouchableOpacity onPress={() => navigation.push('JoinLayerScreen')} >
                        <Image source={require( '../assets/skipBtn.png')} />    
                    </TouchableOpacity >            
                    <TouchableOpacity onPress={() => navigation.navigate({name:'JoinLayerScreen', params: select })} >
                        <Image source={require( '../assets/nextBtn.png')} />    
                    </TouchableOpacity >            

                </View>
            </View>  
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,     
        alignItems : 'center',
        paddingTop: Platform.OS === 'android'? StatusBar.currentHeight*3:'20%'
    },
    maintext:{
        justifyContent:'center',
        height:'20%',      
    },
    midtext:{             
        height:'10%',     
    },
    detailtext:{   
        justifyContent: 'center',       
        height:'5%',     
    },
    lastRow:{
        flexDirection:'row',
        alignItems:'center',   
        columnGap: 160,
        bottom:'5%'
    }
})

export default SelectTopic;