

import React, {Component} from 'react';
import {Alert, AppRegistry, Button, StyleSheet, View } from 'react-native';

export default class App extends Component {
  onPressButton(){
    Alert.alert("Button clicked!!")
  }
  render() {
    return (
      <View style={styles.container}>  
                <View style={styles.buttonContainer}>  
                    <Button  
                        onPress={this.onPressButton}  
                        title="Click Me"  
                    />  
                </View>  

                <View style = {styles.buttonContainer}>
                <Button  
                        onPress={this.onPressButton}  
                        title="Click Me"  
                    />  
                </View>

                <View style={styles.multiButtonContainer}>  
                    <Button  
                        onPress={this.onPressButton}  
                        title="A disabled button"  
                        disabled={true}  
                    />  
                    <Button  
                        onPress={this.onPressButton}  
                        title="OK!"  
                        color="#009933"  
                    />  
                </View>  
            </View>  
    );
  }
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    justifyContent: 'center',
  },
 buttonContainer:{
   margin: 20
 },
 multiButtonContainer:{
   margin: 20,
   flexDirection: 'row',
   justifyContent: 'space-between'
 },
});
