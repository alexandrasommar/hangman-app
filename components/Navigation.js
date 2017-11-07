import React from 'react';
import { Image } from 'react-native';

import { TabNavigator } from 'react-navigation';


import HomeScreen from './Home';
import PlayScreen from './Play';
import InfoScreen from './Info';



const Navigation = TabNavigator({
  Home: {
      screen: HomeScreen,
      navigationOptions: {
          tabBarIcon: (
              <Image
                source={require('../assets/img/ic_home_black_48dp_1x.png')}
                style={{width: 40, height: 40}} />
          ),
      },

  },
  Play: {
      screen: PlayScreen,
      navigationOptions: {
          tabBarIcon: (
            <Image
                source={require('../assets/img/ic_videogame_asset_black_48dp_1x.png')}
                style={{width: 50, height: 50}} />
        ),
      },
  },
  Info: {
      screen: InfoScreen,
      navigationOptions: {
          tabBarIcon: (
              <Image
                source={require('../assets/img/ic_help_outline_black_48dp_1x.png')}
                style={{width: 38, height: 38}}
                />
          ),
      },
  }
});

export default Navigation;
