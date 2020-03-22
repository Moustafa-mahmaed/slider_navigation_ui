import React from 'react'
import { View, Text ,Button ,styleSheet  ,Image ,TouchableWithoutFeedback  } from 'react-native'
import { createDrawerNavigator , DrawerContentScrollView ,DrawerItem } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Animated from "react-native-reanimated";
import Icon from 'react-native-vector-icons/FontAwesome';

import Dashboard from "./screens/Dashboard"
import Notifaction from "./screens/Notifaction"
import Messages from "./screens/Messages"
import Symptoms from "./screens/Symptoms"
import Custody  from "./screens/Custody"
import injury from "./screens/injury"
import animals from "./screens/animals"
import infection from "./screens/infection"
import about from "./screens/about"






const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Screens=({navigation ,style})=>{
return(
<Animated.View style={[ {flex:1 ,overflow: 'hidden'} ,style ]}>
      <Stack.Navigator 
      screenOptions={{
          headerTransparent:true,
          headerTitle:null,
          headerTintColor: 'white',
          headerRight :()=>(


          
              <TouchableWithoutFeedback  onPress={()=>navigation.openDrawer()} >
              <View style={{backgroundColor: "transparent", margin: 10, padding: 10, }} >
             <Icon name="bars" size={18} color="white" />
              </View>
              </TouchableWithoutFeedback>
          )
          
      }}
      >
      <Stack.Screen name="dashboardscreen" component={Dashboard} />
      <Stack.Screen name="notifactionscreen" component={Notifaction} />
      
      <Stack.Screen name="messagesscreen" component={Messages} />
      <Stack.Screen name="Custodyscreen" component={Custody} />
      <Stack.Screen name="injuryscreen" component={injury} />
      <Stack.Screen name="animalsscreen" component={animals} />
      <Stack.Screen name="infectionscreen" component={infection} />

      <Stack.Screen name="Symptomsscreen" component={Symptoms} />
      <Stack.Screen name="aboutscreen" component={about} />
  
      

    </Stack.Navigator>
</Animated.View>
)

}

const DrawerContent = props =>{
    return(
        <DrawerContentScrollView {...props} >
        <View style={{margin:10 ,flex:.4 }}>
        <View style={{alignItems: 'center',}}>

        <Image source={{uri: 'data:image/jpeg;base64,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'}} style={{width: 40, height: 40}} />
        </View>
        
              <DrawerItem
        label="الصفحه الرئيسيه"
         labelStyle={{ fontSize:18  ,color:"white" }}
        style={{ 
        alignItems:'flex-end',
        backgroundColor: "green",}}
        // icon={()=> <Icon name="dashboard" size={18} color="gray" /> }
        onPress={() => props.navigation.navigate("dashboardscreen")}
      />
             <DrawerItem
        label=" نشاة الفيروس"
        labelStyle={{ fontSize:18   ,color:"white"}}
        style={{alignItems:'flex-end',backgroundColor: "green",}}
        onPress={() => props.navigation.navigate("notifactionscreen")}
        // icon={()=> <Icon name="sticky-note" size={18} color="gray" /> }

      />
             <DrawerItem
        label="مصادر العدوي"
         labelStyle={{ fontSize:18  ,color:"white"}}
        style={{alignItems:'flex-end',backgroundColor: "green",}}
        // icon={()=> <Icon name="tint" size={18} color="gray" /> }
        onPress={() => props.navigation.navigate("infectionscreen")}
      />
          
           <DrawerItem
        label="حضانة المرض"
         labelStyle={{ fontSize:18 ,color:"white" }}
        style={{alignItems:'flex-end',backgroundColor: "green",}}
        // icon={()=> <Icon name="tint" size={18} color="gray" /> }
        onPress={() => props.navigation.navigate("Custodyscreen")}
      />
           <DrawerItem
        label=" اعراض المرض"
         labelStyle={{ fontSize:18 ,color:"white" }}
        style={{alignItems:'flex-end',backgroundColor: "green",}}
        // icon={()=> <Icon name="tint" size={18} color="gray" /> }
        onPress={() => props.navigation.navigate("Symptomsscreen")}
      />
           <DrawerItem
        label="الحيوانات "
         labelStyle={{ fontSize:18  ,color:"white"}}
        style={{alignItems:'flex-end',backgroundColor: "green",}}
        // icon={()=> <Icon name="tint" size={18} color="gray" /> }
        onPress={() => props.navigation.navigate("animalsscreen")}
      />
           <DrawerItem
        label="معلومات اضافيه"
         labelStyle={{ fontSize:18  ,color:"white"}}
        style={{alignItems:'flex-end',backgroundColor: "green",}}
        // icon={()=> <Icon name="tint" size={18} color="gray" /> }
        onPress={() => props.navigation.navigate("messagesscreen")}
      />
           <DrawerItem
        label="تجنب الاصابه"
         labelStyle={{ fontSize:18 ,color:"white" }}
        style={{alignItems:'flex-end',backgroundColor: "green",}}
        // icon={()=> <Icon name="tint" size={18} color="gray" /> }
        onPress={() => props.navigation.navigate("injuryscreen")}
      />

           <DrawerItem
        label="عن البرنامج"
         labelStyle={{ fontSize:18  ,color:"white"}}
        style={{alignItems:'flex-end',backgroundColor: "green",}}
        // icon={()=> <Icon name="tint" size={18} color="gray" /> }
        onPress={() => props.navigation.navigate("aboutscreen")}
      /> 
        </View>
        </DrawerContentScrollView>
    )
}

export default () => {
    const [progress, setprogress] = React.useState(new Animated.Value())
    const scale = Animated.interpolate( progress , 
    {
        inputRange: [0, 1],
  outputRange: [1, .8],
    })

    const borderRadius = Animated.interpolate( progress , 
    {
        inputRange: [0, 1],
  outputRange: [1, 10],
    })

   const screenStyles ={ borderRadius ,transform: [{scale}]}

    return (
            <Drawer.Navigator 
            drawerPosition ="right"
            initialRouteName="Dashboardscreen" 
            ContentContainerStyle={{flex:1}}
            drawerType="slide"
             drawerStyle={{width:'50%'}}
            overlayColor="transparent"
             drawerContentOptions={{
                  
                activeBackgroundColor:"transparent",
                activeTintColor:"green",
                inactiveTintColor:"green",

            }}
             sceneContainerStyle={{backgroundColor:"white"}}
             drawerContent ={props=>  {
            setprogress(props.progress)
return( <DrawerContent  {...props} /> )
              } }
             >
      <Drawer.Screen name="Screens"  >
      { props  => <Screens {...props} style={screenStyles} />}
     </Drawer.Screen>
    </Drawer.Navigator>
    )
}



