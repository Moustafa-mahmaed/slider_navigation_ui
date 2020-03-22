import React from 'react'
import { View, Text } from 'react-native'

const Injury = () => {
    return (
       <View style={{ backgroundColor: "#60896E" ,flex:1 }}>
          <View style={{flexDirection: 'row', justifyContent: 'flex-end',
           marginHorizontal: 20,  marginTop: 45, marginBottom:20}}>
          <Text style={{color:"white" ,fontSize:25 ,fontWeight:"bold"}}>
- ازاي نتجنب الاصابة بالعدوي؟





          </Text>
          </View>
          <View style={{ marginHorizontal: 20,}}>
          <Text style={{color:"white" ,fontSize:18 ,fontWeight:"bold"}}>
• اغسل ايديك بالمية الجارية والصابون لمدة 20 ثانية لو اتعاملت مع اي مصدر من المصادر المحتملة للعدوي وخاصة في الاماكن العامة
• لو غسيل الايدين مش متاح علي الاقل استخدم كحول 60% كمطهر للايدين
• تجنب ملامسة العين او الانف او الفم قبل غسيل الايدين
• حافظ علي مسافة مناسبة بينك وبين اي شخص في الاماكن العامة
• تجنب الاختلاط مع اي شخص مصاب
• استخدم منديل اثناء العطس او الكحة واتخلص منه بطريقة مناسبة
• طهر الاسطح المحيطة بيك باستخدام الكحول 70% او باستخدام محلول الكلور المخفف
• لو شكيت انك مصاب توجه علي الفور للجهة المختصة

          </Text>
          </View>


         
        </View>
    )
}

export default Injury
