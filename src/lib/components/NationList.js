const NationList = [
  { 'title': 'ไทย' },
  { 'title': 'ยูโกสลาฟ' },
  { 'title': 'ลักเซมเบิร์ก' },
  { 'title': 'วาติกัน' },
  { 'title': 'มอลตา' },
  { 'title': 'ลีซู' },
  { 'title': 'บัลแกเรีย' },
  { 'title': 'โรมาเนีย' },
  { 'title': 'ไซปรัส' },
  { 'title': 'อเมริกัน' },
  { 'title': 'แคนาดา' },
  { 'title': 'เม็กซิโก' },
  { 'title': 'คิวบา' },
  { 'title': 'อาร์เจนตินา' },
  { 'title': 'บราซิล' },
  { 'title': 'ชิลี' },
  { 'title': 'อาข่า' },
  { 'title': 'โคลัมเบีย' },
  { 'title': 'ลั๊ว' },
  { 'title': 'เปรู' },
  { 'title': 'ปานามา' },
  { 'title': 'อุรุกวัย' },
  { 'title': 'เวเนซุเอลา' },
  { 'title': 'เปอร์โตริโก**' },
  { 'title': 'จีน' },
  { 'title': 'พม่า' },
  { 'title': 'อินเดีย' },
  { 'title': 'เวียดนาม' },
  { 'title': 'ญี่ปุ่น' },
  { 'title': 'ฟิลิปปิน' },
  { 'title': 'มาเลเซีย' },
  { 'title': 'อินโดนีเซีย' },
  { 'title': 'ปากีสถาน' },
  { 'title': 'เกาหลีใต้' },
  { 'title': 'สิงคโปร์' },
  { 'title': 'เนปาล' },
  { 'title': 'ลาว' },
  { 'title': 'กัมพูชา' },
  { 'title': 'ศรีลังกา' },
  { 'title': 'ซาอุดีอาระเบีย' },
  { 'title': 'อิสราเอล' },
  { 'title': 'เลบานอน' },
  { 'title': 'อิหร่าน' },
  { 'title': 'ตุรกี' },
  { 'title': 'บังกลาเทศ' },
  { 'title': 'ถูกถอนสัญชาติ' },
  { 'title': 'ซีเรีย' },
  { 'title': 'อิรัก' },
  { 'title': 'คูเวต' },
  { 'title': 'บรูไน' },
  { 'title': 'แอฟริกาใต้' },
  { 'title': 'กะเหรี่ยง' },
  { 'title': 'ลาหู่' },
  { 'title': 'เคนยา' },
  { 'title': 'อียิปต์' },
  { 'title': 'เอธิโอเปีย' },
  { 'title': 'ไนจีเรีย' },
  { 'title': 'สหรัฐอาหรับเอมิเรตส์' },
  { 'title': 'กินี' },
  { 'title': 'ออสเตรเลีย' },
  { 'title': 'นิวซีแลนด์' },
  { 'title': 'ปาปัวนิวกินี' },
  { 'title': 'ม้ง' },
  { 'title': 'เมี่ยน' },
  { 'title': 'ชาวเขา**' },
  { 'title': 'จีนฮ่อ**' },
  { 'title': 'ทหารจีนชาติ' },
  { 'title': 'ผู้พลัดถิ่นสัญชาติพม่า' },
  { 'title': 'ผู้อพยพเชื้อสายจากกัมพูชา' },
  { 'title': 'ลาว (ลาวอพยพ)' },
  { 'title': 'เขมรอพยพ' },
  { 'title': 'เวียตนามอพยพ**' },
  { 'title': 'รอให้สัญชาติ' },
  { 'title': 'ไทย-อิสลาม**' },
  { 'title': 'ไทย-จีน**' },
  { 'title': 'ไร้สัญชาติ' },
  { 'title': 'อื่นๆ' },
  { 'title': 'ไม่ได้สัญชาติไทย' },
  { 'title': 'อัฟกัน' },
  { 'title': 'บาห์เรน' },
  { 'title': 'ภูฏาน' },
  { 'title': 'จอร์แดน' },
  { 'title': 'เกาหลีเหนือ' },
  { 'title': 'มัลดีฟ' },
  { 'title': 'มองโกเลีย' },
  { 'title': 'โอมาน' },
  { 'title': 'กาตาร์' },
  { 'title': 'เยเมน' },
  { 'title': 'เยเมน(ใต้)**' },
  { 'title': 'หมู่เกาะฟิจิ' },
  { 'title': 'คิริบาส' },
  { 'title': 'นาอูรู' },
  { 'title': 'หมู่เกาะโซโลมอน' },
  { 'title': 'ตองก้า' },
  { 'title': 'ตูวาลู' },
  { 'title': 'วานูอาตู' },
  { 'title': 'ซามัว' },
  { 'title': 'แอลเบเนีย' },
  { 'title': 'อันดอร์รา' },
  { 'title': 'เยอรมนีตะวันออก**' },
  { 'title': 'ไอซ์แลนด์' },
  { 'title': 'ลิกเตนสไตน์' },
  { 'title': 'โมนาโก' },
  { 'title': 'ซานมารีโน' },
  { 'title': 'สหราชอาณาจักร' },
  { 'title': 'แอลจีเรีย' },
  { 'title': 'แองโกลา' },
  { 'title': 'เบนิน' },
  { 'title': 'ชาด' },
  { 'title': 'บอตสวานา' },
  { 'title': 'บูร์กินาฟาโซ' },
  { 'title': 'บุรุนดี' },
  { 'title': 'แคเมอรูน' },
  { 'title': 'เคปเวิร์ด' },
  { 'title': 'แอฟริกากลาง' },
  { 'title': 'คอโมโรส' },
  { 'title': 'คองโก' },
  { 'title': 'โกตดิวัวร์' },
  { 'title': 'จิบูตี' },
  { 'title': 'อิเควทอเรียลกินี' },
  { 'title': 'กาบอง' },
  { 'title': 'แกมเบีย' },
  { 'title': 'กานา' },
  { 'title': 'กินีบีสเซา' },
  { 'title': 'เลโซโท' },
  { 'title': 'ไลบีเรีย' },
  { 'title': 'ลิเบีย' },
  { 'title': 'มาลากาซี' },
  { 'title': 'มาลาวี' },
  { 'title': 'มาลี' },
  { 'title': 'มอริเตเนีย' },
  { 'title': 'มอริเชียส' },
  { 'title': 'โมร็อกโก' },
  { 'title': 'โมซัมบิก' },
  { 'title': 'ไนเจอร์' },
  { 'title': 'รวันดา' },
  { 'title': 'เซาโตเมและปรินซิเป' },
  { 'title': 'เซเนกัล' },
  { 'title': 'เซเชลส์' },
  { 'title': 'เซียร์ราลีโอน' },
  { 'title': 'โซมาลี' },
  { 'title': 'ซูดาน' },
  { 'title': 'สวาซี' },
  { 'title': 'แทนซาเนีย' },
  { 'title': 'โตโก' },
  { 'title': 'ตูนิเซีย' },
  { 'title': 'ยูกันดา' },
  { 'title': 'ซาอีร์' },
  { 'title': 'แซมเบีย' },
  { 'title': 'ซิมบับเว' },
  { 'title': 'แอนติกาและบาร์บูดา' },
  { 'title': 'บาฮามาส' },
  { 'title': 'บาร์เบโดส' },
  { 'title': 'เบลิซ' },
  { 'title': 'คอสตาริกา' },
  { 'title': 'โดมินิกา' },
  { 'title': 'โดมินิกัน' },
  { 'title': 'เอลซัลวาดอร์' },
  { 'title': 'เกรเนดา' },
  { 'title': 'กัวเตมาลา' },
  { 'title': 'เฮติ' },
  { 'title': 'ฮอนดูรัส' },
  { 'title': 'จาเมกา' },
  { 'title': 'นิการากัว' },
  { 'title': 'เซนต์คิตส์และเนวิส' },
  { 'title': 'เซนต์ลูเซีย' },
  { 'title': 'เซนต์วินเซนต์และเกรนาดีนส์' },
  { 'title': 'ตรินิแดดและโตเบโก' },
  { 'title': 'โบลีเวีย' },
  { 'title': 'เอกวาดอร์' },
  { 'title': 'กายอานา' },
  { 'title': 'ปารากวัย' },
  { 'title': 'ซูรินาเม' },
  { 'title': 'อาหรับ' },
  { 'title': 'คะฉิ่น' },
  { 'title': 'ว้า' },
  { 'title': 'ไทยใหญ่' },
  { 'title': 'ไทยลื้อ' },
  { 'title': 'ขมุ' },
  { 'title': 'ตองสู' },
  { 'title': 'เงี้ยว**' },
  { 'title': 'ละว้า' },
  { 'title': 'แม้ว' },
  { 'title': 'ปะหร่อง' },
  { 'title': 'ถิ่น' },
  { 'title': 'ปะโอ' },
  { 'title': 'มอญ' },
  { 'title': 'มลาบรี' },
  { 'title': 'เฮาะ**' },
  { 'title': 'สก๊อตแลนด์**' },
  { 'title': 'จีน (จีนฮ่ออิสระ)' },
  { 'title': 'จีนอพยพ**' },
  { 'title': 'จีน (จีนฮ่ออพยพ)' },
  { 'title': 'ไต้หวัน**' },
  { 'title': 'ยูเครน' },
  { 'title': 'อาณานิคมอังกฤษ**' },
  { 'title': 'ดูไบ**' },
  { 'title': 'จีน(ฮ่องกง)' },
  { 'title': 'จีน(ไต้หวัน)' },
  { 'title': 'โครเอเชีย' },
  { 'title': 'บริทิธ**' },
  { 'title': 'คาซัค' },
  { 'title': 'อาร์เมเนีย' },
  { 'title': 'อาเซอร์ไบจาน' },
  { 'title': 'จอร์เจีย' },
  { 'title': 'คีร์กีซ' },
  { 'title': 'ทาจิก' },
  { 'title': 'อุซเบก' },
  { 'title': 'หมู่เกาะมาร์แชลล์' },
  { 'title': 'ไมโครนีเซีย' },
  { 'title': 'ปาเลา' },
  { 'title': 'เบลารุส' },
  { 'title': 'บอสเนียและเฮอร์เซโกวีนา' },
  { 'title': 'เติร์กเมน' },
  { 'title': 'เอสโตเนีย' },
  { 'title': 'ลัตเวีย' },
  { 'title': 'ลิทัวเนีย' },
  { 'title': 'มาซิโดเนีย' },
  { 'title': 'มอลโดวา' },
  { 'title': 'สโลวัก' },
  { 'title': 'สโลวีน' },
  { 'title': 'เอริเทรีย' },
  { 'title': 'นามิเบีย' },
  { 'title': 'โบลิเวีย' },
  { 'title': 'หมู่เกาะคุก' },
  { 'title': 'เนปาล (เนปาลอพยพ)' },
  { 'title': 'มอญ(ผู้พลัดถิ่นสัญชาติพม่า)' },
  { 'title': 'ไทยใหญ่(ผู้พลัดถิ่นสัญชาติพม่' },
  { 'title': 'เวียดนาม(ญวนอพยพ)' },
  { 'title': 'มาเลเชีย(อดีต จคม.)' },
  { 'title': 'จีน(อดีต จคม.)' },
  { 'title': 'สิงคโปร์(อดีต จคม.)' },
  { 'title': 'กะเหรี่ยง(ผู้หลบหนีเข้าเมือง)' },
  { 'title': 'มอญ(ผู้หลบหนีเข้าเมือง)' },
  { 'title': 'ไทยใหญ่(ผู้หลบหนีเข้าเมือง)' },
  { 'title': 'กัมพูชา(ผู้หลบหนีเข้าเมือง)' },
  { 'title': 'จีน (อดีต ทจช.)' },
  { 'title': 'ผู้ผลัดถิ่นสัญชาติพม่า' },
  { 'title': 'ผู้อพยพเชื้อสายไทยจากกัมพูชา' },
  { 'title': 'ไม่ระบุสัญชาติ' }
]
export default NationList