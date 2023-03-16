import React from 'react';
import { Image} from "react-native";


function Picture({path, width, height, borderRadius}){
    return (
        <Image
            source = {path}
            style = {[{width: width}, {height: height}, {borderRadius: borderRadius}]}
        />
    )
}


export default Picture