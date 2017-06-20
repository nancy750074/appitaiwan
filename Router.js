import React from 'react';
import { Linking, Button, ScrollView,TouchableOpacity,Text } from 'react-native';
import { DrawerNavigator, TabNavigator, StackNavigator, DrawerView,TabView,TabBarTop } from 'react-navigation';
import { Icon, Tile } from 'react-native-elements';

import Culture from './components/Culture';
import Activity from './components/Activity';
import MyLove from './components/MyLove';
import activitydetail2 from './components/activitydetail2';
import AlbumDetail3 from './components/AlbumDetail3';
import SearchPage from './components/SearchPage';
import AddNewPage from './components/AddNewPage';

import activitymore from './components/activitymore';
import playmore1 from './components/playmore1';
import playmore2 from './components/playmore2';
import playmore3 from './components/playmore3';

import play01 from './components/play01';
import play02 from './components/play02';
import play03 from './components/play03';
import play1 from './components/play1';
import play2 from './components/play2';
import play3 from './components/play3';

export const CultureStack = StackNavigator({
  Culture: {
    screen: Culture,
    
  navigationOptions: {
      header: ({ navigate }) => ({
        title: '童玩趣',
        titleStyle:{ color:'#ffffff' },
        style:{backgroundColor:'#b8634f'},
        right: (
          <Icon
            name='search'
            color='white'
            iconStyle={{ marginRight: 10 }}
            onPress={()=>navigate('SearchPage')}
          />
        ),
      })
    },
  },
  SearchPage:{
    screen: SearchPage,
    navigationOptions: {
        header: ({ navigate }) => ({
            title: 'Search',
            left: (
                <Icon
                    name='navigate-before'
                    iconStyle={{ marginLeft: 10 }}
                    onPress={() => navigate('Culture')}
                />
            ),
        })
    }
  },
   playmore1:{
    screen: playmore1,
    navigationOptions: {
        header: ({ navigate }) => ({
            title: '童玩分享',
            titleStyle:{ color:'#ffffff' },
            style:{backgroundColor:'#b8634f'},
            left: (
                <Icon
                    name='navigate-before'
                    iconStyle={{ marginLeft: 10 }}
                    onPress={() => navigate('Culture')}
                />
            ),
        })
    }
  },
   playmore2:{
    screen:playmore2,
    navigationOptions: {
        header: ({ navigate }) => ({
            title: '技藝分享',
            titleStyle:{ color:'#ffffff' },
            style:{backgroundColor:'#b8634f'},
            left: (
                <Icon
                    name='navigate-before'
                    iconStyle={{ marginLeft: 10 }}
                    onPress={() => navigate('Culture')}
                />
            ),
        })
    }
  },
    playmore3:{
    screen:playmore3,
    navigationOptions: {
        header: ({ navigate }) => ({
            title: '工藝分享',
            titleStyle:{ color:'#ffffff' },
            style:{backgroundColor:'#b8634f'},
            left: (
                <Icon
                    name='navigate-before'
                    iconStyle={{ marginLeft: 10 }}
                    onPress={() => navigate('Culture')}
                />
            ),
        })
    }
  },
});

export const ActivityStack = StackNavigator({
  Activity: {
    screen: Activity,
    navigationOptions: {
      header: ({ navigate }) => ({
        title: '找樂去',
        titleStyle:{ color:'#ffffff' },
        style:{backgroundColor:'#b8634f'},
        right: (
          <Icon
            name='search'
            color='white'
            iconStyle={{ marginRight: 10 }}
            onPress={()=>navigate('SearchPage')}
          />
        ),
      })
    },
  },
  SearchPage:{
    screen: SearchPage,
    navigationOptions: {
        header: ({ navigate }) => ({
            title: 'Search',
            titleStyle:{ color:'#ffffff' },
            style:{backgroundColor:'#b8634f'},
            left: (
                <Icon
                    name='navigate-before'
                    iconStyle={{ marginLeft: 10 }}
                    onPress={() => navigate('Activity')}
                />
            ),
        })
    }
  },
 activitymore:{
    screen: activitymore,
    navigationOptions: {
        header: ({ navigate }) => ({
            title: '好去處分享',
            titleStyle:{ color:'#ffffff' },
            style:{backgroundColor:'#b8634f'},
            left: (
                <Icon
                    name='navigate-before'
                    iconStyle={{ marginLeft: 10 }}
                    onPress={() => navigate('Activity')}
                />
            ),
        })
    }
  },
 activitydetail2:{
    screen:activitydetail2,
    navigationOptions: {
        header: ({ navigate }) => ({
            title: '2017桃園燈會',
            titleStyle:{ color:'#ffffff' },
            style:{backgroundColor:'#b8634f'},
            left: (
                <Icon
                    name='navigate-before'
                    iconStyle={{ marginLeft: 10 }}
                    onPress={() => navigate('Activity')}
                />
            ),
        })
    }
  },
   AlbumDetail3: {
    screen: AlbumDetail3,
    navigationOptions: {
      header: ({ state }) => ({
        title: `${state.params.title.toUpperCase()}`,
      })
    },
  },
});
export const MyLoveStack = StackNavigator({
  MyLove: {
    screen: MyLove,
    navigationOptions: {
      header: ({ navigate }) => ({
        title: '我',
        titleStyle:{ color:'#ffffff' },
        style:{backgroundColor:'#b8634f'},
        right: (
          <Icon
            name='add'
            color='white'
            iconStyle={{ marginRight: 10 }}
            onPress={() => navigate('AddNewPage')}
          />
        ),
      })
    },
  },
  AddNewPage:{
    screen: AddNewPage,
    navigationOptions: {
        header: ({ navigate }) => ({
            title: '分享',
            titleStyle:{ color:'#ffffff' },
            style:{backgroundColor:'#b8634f'},
            right: (
              <TouchableOpacity
              onPress={() => navigate('MyLove')}>
                   <Text style={{ margin: 10,color:'#ffffff' }}>完成</Text>
               </TouchableOpacity>
            ),
            left: (
                <Icon
                    name='navigate-before'
                    iconStyle={{ marginLeft: 10 }}
                    onPress={() => navigate('MyLove')}
                />
            ),
        })
    }
  },
});


export const CultureTabRouter = TabNavigator({
  童玩:{
    screen:play1,
  },
  技藝:{
    screen:play2,
  },

  工藝:{
    screen: play3 , 
  },


   playmore1:{
    screen: playmore1,
  },
   playmore2:{
    screen:playmore2,
  },
    playmore3:{
    screen:playmore3,
},
    

    

},
{
  tabBarPosition:'top',
  swipeEnable:'true',
  tabBarComponent:TabView.TabBarTop,
  tabBarOptions:{
    activeTintColor: '#b96855',
    inactiveTintColor: '#8f8e93',
    style: { backgroundColor: '#ffffff',height:60,paddingTop:10,}
  }
});

export const MeTabRouter = TabNavigator({
  童玩趣:{
    screen:play01,
  },
  找樂去:{
    screen:play02,
  },

  回憶錄:{
    screen: play03 , 
  },

},

{
  tabBarPosition:'top',
  swipeEnable:'true',
  tabBarComponent:TabView.TabBarTop,
  tabBarOptions:{
    activeTintColor: '#b96855',
    inactiveTintColor: '#8f8e93',
    style: { backgroundColor: '#ffffff',height:60,paddingTop:10,}
  }
});


export const activitymoreTabRouter = TabNavigator({
  收藏排行:{
    screen:play01,
  },
  最新分享:{
    screen:play02,
  }

},
{
  tabBarPosition:'top',
  swipeEnable:'true',
  tabBarComponent:TabView.TabBarTop,
  tabBarOptions:{
    activeTintColor: '#b96855',
    inactiveTintColor: '#8f8e93',
    style: { backgroundColor: '#ffffff',height:60,paddingTop:10,}
  }
});




export const TabRouter = TabNavigator(
  {
    CultureStack: {
      screen: CultureStack,
      navigationOptions: {
        tabBar: {
          label: '童玩趣',
        // icon: ({ tintColor }) => <Icon name= {require( "./assets/puzzle.png" )} size={35} color={tintColor} />
        icon:({ tintColor })=> <Icon name="toys" size={35} color={tintColor} />
        },
      },
    },

    ActivityStack: {
      screen: ActivityStack,
      navigationOptions: {
        tabBar: {
          label: '找樂去',
         // icon: ({ tintColor }) => <Icon name= {require( "./assets/placeholder.png" )} size={35} color={tintColor} />
         icon:({ tintColor })=> <Icon name="pets" size={35} color={tintColor} />
        },
      },
    },
    MyLoveStack: {
      screen: MyLoveStack,
      navigationOptions: {
        tabBar: {
          label: '我',
         // icon: ({ tintColor }) => <Icon name= {require( "./assets/lover.png" )} size={35} color={tintColor} />
         icon:({ tintColor })=> <Icon name="face" size={35} color={tintColor} />
  
        },
      },
    },
  },
  {
    animationEnabled: 'true',
    tabBarOptions: {
    activeTintColor: '#b8634f',
    inactiveTintColor: '#8f8e94',
    style: { backgroundColor: '#f7f7f7',}
    }
  }
);
