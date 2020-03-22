import React from 'react'
import { View, Text } from 'react-native'

const Messages = () => {
    return (
       <View style={{ backgroundColor: "#42467B" ,flex:1 }}>
          <View style={{flexDirection: 'row', justifyContent: 'flex-end',
           marginHorizontal: 20,  marginTop: 45, marginBottom:20}}>
          <Text style={{color:"white" ,fontSize:25 ,fontWeight:"bold"}}>
          - ايه هي مصادر العدوي المحتملة؟




          </Text>
          </View>
          <View style={{ marginHorizontal: 20,}}>
          <Text style={{color:"white" ,fontSize:18 ,fontWeight:"bold"}}>

          • الاحتكاك بالشخص المصاب هو المصدر الاساسي للعدوي وخاصة افرازات الجسم اللي بتحتوي علي الڤايرس زي اللعاب والرذاذ المتطاير مع العطس او الكحة

• ملامسة الاسطح الملوثة بالڤايرس من المصادر الثانوية للعدوي مع ملاحظة ان الاسطح الملساء زي مقابض الابواب مثلا ليها القدرة علي نقل العدوي اكتر من الانسجة والالياف

          </Text>
          </View>


         
        </View>
    )
}

export default Messages
