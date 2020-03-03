import * as React from 'react';
import React, { Component } from 'react';
import { FlatList, Image, View, TouchableOpacity, StyleSheet, Text, TextInput } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createTopTabNavigator } from '@react-navigation/top-tabs';

//import { Icon } from 'react-native-elements';
function HomeScreen() {
    return (
        <View>
            <Icon style={styles.iconStyle} name="baseline_list_black_18dp"></Icon>
            <Text> List </Text>
        </View>
    );
}

function CalendarScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
}

const Tab = createTopTabNavigator();     
      
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

                <NavigationContainer>
                    <Tab.Navigator>
                        <Tab.Screen name="List" component={HomeScreen}/>
                        <Tab.Screen name="Calendar" component={CalendarScreen}/>
                    </Tab.Navigator>
                </NavigationContainer>

                <View style={styles.view2Style}>
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
        flex: 1,
        flexDirection: 'column',
    },

    viewFunction: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
