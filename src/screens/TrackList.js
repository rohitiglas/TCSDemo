import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';






const TrackList = (props) => {
    console.log("Data is",props.route.params.data);
    const apiData=props.route.params.data;

    const Item = ({title,item}) => (
        <TouchableOpacity style={styles.item} onPress={()=>onPress(item)}>
     
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    );


    const onPress = (item) => {
        props.navigation.navigate('TrackDetail',{item:item})
      };





  return (
    <SafeAreaView style={styles.container}>
    {apiData.length>0?
        <FlatList
        data={apiData}
        renderItem={({item}) => <Item item={item} title={item.trackName} />}
        keyExtractor={item => item.id}
      />:<Text style={{fontSize:30}}>No Artist</Text>
    }
     
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default TrackList;