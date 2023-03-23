import React, { useState } from 'react';
import {View, Text, TouchableOpacity} from "react-native";

export default function HeaderTabs(){
    const[activeTab, setActiveTab] = useState("Non-Veg");
    return(
        <View style = {{flexDirection: "row", alignSelf: "center"}}>
            {/* Header BUtton */}
            <HeaderButton 
                text = "Non-Veg" 
                btnColor= "black" 
                textColor= 'white' 
                activeTab={activeTab} 
                setActiveTab = {setActiveTab}
                />
            <HeaderButton 
                text = "Veg" 
                btnColor= "white" 
                textColor= 'black' 
                activeTab={activeTab} 
                setActiveTab = {setActiveTab}
                />
             
            
        </View>
    );
    
}

const HeaderButton = (props) => (

        <TouchableOpacity 
            style={{
                backgroundColor: props.activeTab = props.text ? "black": "white",
                paddingVertical: 6,
                paddingHorizontal: 16,
                borderRadius: 30,
            }}
            onPress = {() => props.setActiveTab(props.text)}
            >
            <Text style= {{backgroundColor: props.activeTab = props.text ? "white": "black",
                        fontSize: 15,
                        fontWeight: "900"}}
                        >{props.text}</Text>
        </TouchableOpacity>


);