import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import { Provider } from "react-redux";
import { loginAction } from './redux/action';

const Login = ({navigation}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const logIn = () => {
    dispatch(loginAction());
  }

  email = useSelector((store) => store.loginReducer.email);
  password = useSelector((store) => store.loginReducer.password);


  return (
    <View style={styles.container}>

      <TextInput
        style={styles.inputText}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />

      <TextInput
        style={styles.inputText}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
        value={password}
      />

      <Button
        style={styles.btn}
        title="Login"
        onPress={() => {navigation.navigate("Details");  logIn}}
      />
    </View>
  )
}

const DetailsScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: 'blue' }}> {email}</Text>
      <Text style={{ color: 'blue' }}> {password}</Text>
    </View>
  )
}


const StackScreen = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )

}

const App = () => {
  return(
    <Provider store={store}>
      <StackScreen/>
    </Provider>
  )
}

export default App;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 10,
  },

  inputText: {
    padding: 7,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
  },

  btn: {
    marginTop: 10,
  },

})
