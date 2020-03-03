import React, { Component } from 'react';
import { FlatList, Image, View, TouchableOpacity, StyleSheet, Text, TextInput } from 'react-native';
//import { Icon } from 'react-native-elements';

class Application extends Component {
    state = {

    }
    render() {
        return(
            <FlatList
            style={styles.container}>
                <View style={styles.view1Style}>
                    <Text style={styles.text1Style}> My Events List </Text>
                    <Icon style={styles.iconStyle}
                    name="baseline_list_black_18dp">
                    </Icon>
                </View>
                <View style={styles.view2Style}>

                </View>
                <View style={styles.view3Style}>
                    <Image
                    style={styles.imageStyle}
                    source={requireNativeViewManager('./assets/avatar.png')}/>
                    <TouchableOpacity style={styles.touchableOpacityStyle}>
                        
                    </TouchableOpacity>
                </View>
            </FlatList>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },

    view1Style: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'blue',
    },

    view2Style: {
        
    },

    view3Style: {
        flex: 1,
        flexDirection: 'column',
    },

    imageStyle: {
        width: 30,
        height: 30,
        flex: 1,
    },

    touchableOpacityStyle: {
        flex: 3,
    },

    text1Style: {
        flex: 3,
        fontWeight: 'bold',
        color: 'white',
        fontSize: 16,
        fontFamily: tahoma,
    },

    iconStyle: {
        flex: 1,
    }
});

export default Application;
