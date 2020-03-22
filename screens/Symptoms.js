import React from 'react'
import { View, Text } from 'react-native'

const Symptoms = () => {
    return (
       <View style={{ backgroundColor: "#42467B" ,flex:1 }}>
          <View style={{flexDirection: 'row', justifyContent: 'flex-end',
           marginHorizontal: 20,  marginTop: 45, marginBottom:20}}>
          <Text style={{color:"white" ,fontSize:25 ,fontWeight:"bold"}}>
ايه هي اعراض المرض في الانسان؟



          </Text>
          </View>
          <View style={{ marginHorizontal: 20,}}>
          <Text style={{color:"white" ,fontSize:18 ,fontWeight:"bold"}}>
الاعراض شبه دور البرد العادي:
• كحة
• ارتفاع في درجة الحرارة
• صعوبة في التنفس
          </Text>
          </View>


         

         <View style={{flexDirection: 'row', justifyContent: 'flex-end',
           marginHorizontal: 20,  marginTop: 45, marginBottom:20}}>
          <Text style={{color:"white" ,fontSize:25 ,fontWeight:"bold"}}>
- هل المرض بيشكل نفس الخطورة علي كل الاشخاص؟




          </Text>
          </View>
          <View style={{ marginHorizontal: 20,}}>
          <Text style={{color:"white" ,fontSize:18 ,fontWeight:"bold"}}>
فيه فئات معينة ممكن تتضرر اكتر من غيرها:
• كبار السن
• اصحاب الامراض المزمنة زي امراض القلب والسكر والجهاز التنفسي

          </Text>
          </View>


         


        </View>
    )
}

export default Symptoms
