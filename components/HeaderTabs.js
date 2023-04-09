import React, { useState } from 'react';
import {View, Text, TouchableOpacity} from "react-native";

export default function HeaderTabs(){
    const[activeTab, setActiveTab] = useState("Non-Veg");
    return(
        <View style = {{flexDirection: "row", alignSelf: "center", marginTop: 50}}>
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
                backgroundColor: props.activeTab === props.text ? "#FD9163": "white",
                paddingVertical: 10,
                paddingHorizontal: 30,
                borderRadius: 30,
            }}
            onPress = {() => props.setActiveTab(props.text)}
            >
            <Text style= {{color: props.activeTab === props.text ? "white": "#FD9163",
                        fontSize: 15,
                        fontWeight: "900"}}
                        >{props.text}</Text>
        </TouchableOpacity>


);