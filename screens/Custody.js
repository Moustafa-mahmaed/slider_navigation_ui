import React from 'react'
import { View, Text } from 'react-native'

const Messages = () => {
    return (
       <View style={{ backgroundColor: "#42467B" ,flex:1 }}>
          <View style={{flexDirection: 'row', justifyContent: 'flex-end',
           marginHorizontal: 20,  marginTop: 45, marginBottom:20}}>
          <Text style={{color:"white" ,fontSize:25 ,fontWeight:"bold"}}>
فترة حضانة المرض قد ايه؟



          </Text>
          </View>
          <View style={{ marginHorizontal: 20,}}>
          <Text style={{color:"white" ,fontSize:18 ,fontWeight:"bold"}}>
تقريبا من 5 - 7 ايام لكن فترة العزل بتوصل 14 يوم
          </Text>
          </View>


         
        </View>
    )
}

export default Messages
