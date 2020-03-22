import React from 'react'
import { View, Text } from 'react-native'

const Dashboard = () => {
    return (
        <View style={{ backgroundColor: "#4A95E1", flex:1 ,justifyContent: 'center', alignItems: 'center', }}>
            <Text style={{color:"white", fontSize:50 ,fontWeight:"bold"}}>فيرس كورونا </Text>
            <Text style={{color:"white", fontSize:28 ,fontWeight:"bold" ,textAlign:"center"}}> طرق الوقايه منه </Text>
        </View>
    )
}

export default Dashboard
