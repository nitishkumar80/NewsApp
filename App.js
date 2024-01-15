import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './component/LoginScreen'
import SignupScreen from './component/SignupScreen';
import Home from './component/Home';
import News from './component/News';
import Categories from './component/Categories';
import Settings from './component/Settings';
import ToastContainer from './component/ToastContainer';
import Mainscreen from './component/Mainscreen';
import Navbar from './component/page/Navbar';
import  Health  from './component/page/categories/Health';
import  Entertainment  from './component/page/categories/Entertainment';
import  Technology  from './component/page/categories/Technology'
import Science  from './component/page/categories/Science';
import PopularTag from './component/page/HomeScreen/PopularTag';
import NewsDetail from './component/page/HomeScreen/NewsDetail';
import Business from './component/page/categories/Business';
import { NewsScreen } from './component/NewsScreen';
import Search from './component/page/Search';
import SearchResultScreen from './component/page/SearchResultScreen';
import Sports from './component/page/categories/Sports';
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Mainscreen">
        <Stack.Screen name="Mainscreen" component={Mainscreen} />

         <Stack.Screen name="SignupScreen" component={SignupScreen } />
<Stack.Screen name='LoginScreen' component={LoginScreen}/>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="News" component={News} />
        <Stack.Screen name="Categories" component={Categories} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Navbar" component={Navbar} />
        <Stack.Screen name="Entertainment" component={Entertainment} />
        <Stack.Screen name="Technology" component={Technology} />
        <Stack.Screen name="Sports" component={Sports} />
        <Stack.Screen name="Health" component={Health } />
        <Stack.Screen name="Science" component={Science} />
        <Stack.Screen name="Business" component={Business}  />
        <Stack.Screen name="NewsScreen" component={NewsScreen} />

        <Stack.Screen name="PopularTag" component={PopularTag} />
      <Stack.Screen name="NewsDetail" component={NewsDetail} /> 
        
      <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="SearchResult" component={SearchResultScreen } />

      </Stack.Navigator>
     <ToastContainer/>
    </NavigationContainer>
  );
}

export default App;
