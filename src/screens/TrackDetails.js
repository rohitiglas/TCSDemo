import React, { useState } from "react";
import {
  Text,
  View,
} from "react-native";


const TrackDetail=(props)=>{
    const itemDetail=props.route.params.item;
    const {artistName,trackName,trackNumber,trackPrice}=itemDetail;

    return(
        <View style={{margin:20}}>
            <Text style={{fontSize:20}}>{artistName}</Text>
            <Text style={{fontSize:20}}>{trackName}</Text>
            <Text style={{fontSize:18}}>{trackNumber}</Text>
            <Text style={{fontSize:16}}>{trackPrice}</Text>
        </View>
    )
}
export default TrackDetail;