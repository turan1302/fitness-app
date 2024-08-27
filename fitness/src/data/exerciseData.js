const exerciseData = [
  {
    id : 1,
    body_id : 1,
    name : "Deadlift",
    set : "3 - 4",
    repeat : "6 - 10",
    description : "Ağırlığı kontrollü bir şekilde kaldırıp indirdiğinden emin ol.",
    image : require("../assets/exercises/back/deadlift.webp")
  },
  {
    id : 2,
    body_id : 1,
    name : "Pull-Up (Barfiks)",
    set : "3 - 4",
    repeat : "6 - 12",
    description : "Kendi vücut ağırlığını çekmek zordur, bu yüzden doğru formda yapmaya özen göster.",
    image : require("../assets/exercises/back/barfiks.gif")
  },
  {
    id : 3,
    body_id : 1,
    name : "Bent Over Row",
    set : "3 - 4",
    repeat : "8 - 12",
    description : "Belinin düz olduğundan emin ol ve sırt kaslarını sık.",
    image : require("../assets/exercises/back/bentoverrow.gif")
  },
  {
    id : 4,
    body_id : 1,
    name : "Lat Pulldown",
    set : "3 - 4",
    repeat : "10 - 15",
    description : "Sırtını tam olarak çalıştırmak için kolunu tamamıyla aşağı çek.",
    image : require("../assets/exercises/back/bentoverrow.gif")
  },
  {
    id : 5,
    body_id : 1,
    name : "Seated Row",
    set : "3 - 4",
    repeat : "10 - 15",
    description : "Hareketi yaparken sırtını sıkıştırarak çekiş yap.",
    image : require("../assets/exercises/back/seatedrow.gif")
  },
  {
    id : 6,
    body_id : 1,
    name : "T-Bar Row",
    set : "3 - 4",
    repeat : "8 - 12",
    description : "Sırt kaslarını hedef alacak şekilde hareket et.",
    image : require("../assets/exercises/back/t-barrow.gif")
  },
  {
    id : 7,
    body_id : 1,
    name : "Single-Arm Dumbbell Row",
    set : "3 - 4",
    repeat : "10-12 her iki taraf için",
    description : "Her iki tarafı eşit şekilde çalıştırmak için dikkatli ol.",
    image : require("../assets/exercises/back/singlearmdumblerow.gif")
  },
  {
    id : 8,
    body_id : 1,
    name : "Face Pull",
    set : "3",
    repeat : "12 - 15",
    description : "Üst sırt ve arka omuz kaslarını çalıştırmak için formunu koru.",
    image : require("../assets/exercises/back/facepull.gif")
  },
  {
    id : 9,
    body_id : 1,
    name : "Hyperextensions",
    set : "3",
    repeat : "12 - 15",
    description : "Alt sırt kaslarını çalıştırırken dikkatli ol, aşırıya kaçmamaya özen göster.",
    image : require("../assets/exercises/back/hyperextensions.gif")
  },
  {
    id : 10,
    body_id : 1,
    name : "Kettlebell Swing",
    set : "3 - 4",
    repeat : "15 - 20",
    description : "Dinamik bir hareket olduğu için doğru formda yapmaya dikkat et.",
    image : require("../assets/exercises/back/kettlebellswing.gif")
  },

  // -------------------------------------------------------------------------------------------------

  {
    id : 11,
    body_id : 2,
    name : "Koşu",
    set : "5",
    repeat : "1 - 2 Dakika",
    description : "Koşu bandında veya açık alanda tempolu koşu. Kalp atış hızını artırır ve bacak kaslarını güçlendirir.",
    image : require("../assets/exercises/cardio/run.gif")
  },
  {
    id : 12,
    body_id : 2,
    name : "İp Atlama",
    set : "4",
    repeat : "2 Dakika",
    description : "Basit ama etkili bir kardiyo egzersizidir. Koordinasyon ve dayanıklılığı artırır.",
    image : require("../assets/exercises/cardio/skippingrope.gif")
  },
  {
    id : 13,
    body_id : 2,
    name : "Burpee",
    set : "4",
    repeat : "10 - 15",
    description : "Squat pozisyonundan vücut plank pozisyonuna geçip tekrar kalkma hareketidir. Tüm vücut kaslarını çalıştırır ve kalp atış hızını yükseltir.",
    image : require("../assets/exercises/cardio/burpee.gif")
  },
  {
    id : 14,
    body_id : 2,
    name : "Mountain Climbers",
    set : "4",
    repeat : "1 - 2 Dakika",
    description : "Plank pozisyonunda iken dizlerinizi sırayla göğsünüze çekerek yapılan bir hareket. Kalori yakımını artırır ve karın kaslarını çalıştırır.",
    image : require("../assets/exercises/cardio/mountainclimbers.gif")
  },
  {
    id : 15,
    body_id : 2,
    name : "Jumping Jacks",
    set : "4",
    repeat : "1 - 2 Dakika",
    description : "Ayakta, kollar ve bacakları yanlara açarak ve kapatarak yapılan bir hareket. Kardiyo ve genel vücut koordinasyonunu geliştirir.",
    image : require("../assets/exercises/cardio/jumpingjack.gif")
  },
  {
    id : 16,
    body_id : 2,
    name : "High Knees",
    set : "4",
    repeat : "1 - 2 Dakika",
    description : "Koşma hareketinin yerinde yapılan versiyonudur; dizlerinizi yüksek kaldırarak yapılan bir egzersizdir. Kalp atış hızını artırır ve bacak kaslarını çalıştırır.",
    image : require("../assets/exercises/cardio/highknees.gif")
  },
  {
    id : 17,
    body_id : 2,
    name : "Bisiklet",
    set : "1",
    repeat : "20 - 30 dakika",
    description : "Sabit bisiklet veya dışarıda bisiklet sürerek yapılan bu egzersiz, bacak kaslarını güçlendirir ve kardiyovasküler sistemi destekler.",
    image : require("../assets/exercises/cardio/bike.gif")
  },
  {
    id : 18,
    body_id : 2,
    name : "Rope Climbing",
    set : "3 - 5",
    repeat : "1-3 (her set)",
    description : "İp üzerinde tırmanmak, üst vücut ve çekirdek kaslarınızı çalıştırarak yüksek yoğunluklu bir kardiyo sağlar. Zorlu ve etkili bir egzersiz türüdür.",
    image : require("../assets/exercises/cardio/ropeclimbing.gif")
  },
  {
    id : 19,
    body_id : 2,
    name : "Köprü",
    set : "3",
    repeat : "30 saniye (her set)",
    description : "Yerde sırt üstü yatarak kalçalarınızı yukarı kaldırıp indirerek yapılan hareket. Düşük etkili kardiyo ve güçlendirme egzersizidir.",
    image : require("../assets/exercises/cardio/bridge.gif")
  },
  {
    id : 20,
    body_id : 2,
    name : "Hızlı Yürüyüş",
    set : "1",
    repeat : "30 - 45 dakika",
    description : "Tempolu bir şekilde yürüyüş yaparak kalp atış hızını artırır ve genel kondisyonu iyileştirir. Eklem dostu bir kardiyo seçeneğidir.",
    image : require("../assets/exercises/cardio/fastwalking.gif")
  },

  // -------------------------------------------------------------------------------------------------

  {
    id : 21,
    body_id : 3,
    name : "Dumbbell Bicep Curl",
    set : "3",
    repeat : "10 - 12",
    description : "Ayakta dururken, her iki elinde de bir dambıl tutarak kollarını düz tut. Avuç içlerini yukarıya bakacak şekilde kavrayarak, dambılları yavaşça dirseklerden bükerek yukarı kaldır ve sonra kontrollü bir şekilde indir. c",
    image : require("../assets/exercises/lowerArms/dumbellbicepcurl.gif")
  },
  {
    id : 22,
    body_id : 3,
    name : "Hammer Curl",
    set : "3",
    repeat : "10 - 12",
    description : "Avuç içlerin birbirine bakacak şekilde dambılları tutarak, kollarını dirseklerden bük ve dambılları yukarı kaldır. Bu hareket, hem biceps hem de ön kol kaslarını hedef alır.",
    image : require("../assets/exercises/lowerArms/hammercurl.gif")
  },
  {
    id : 23,
    body_id : 3,
    name : "Concentration Curl",
    set : "3",
    repeat : "10 - 12 (her kol için)",
    description : "Bir sandalyeye oturup bir dambılı tek elle tutarak, kolunu bük ve dambılı yukarı kaldır. Diğer kolun iç kısmını dizine yasla. Hareketi her iki kol için de tekrarla.",
    image : require("../assets/exercises/lowerArms/concentrationcurl.gif")
  },
  {
    id : 24,
    body_id : 3,
    name : "Preacher Curl",
    set : "3",
    repeat : "8 - 10",
    description : "Bir sandalyeye oturup bir dambılı tek elle tutarak, kolunu bük ve dambılı yukarı kaldır. Diğer kolun iç kısmını dizine yasla. Hareketi her iki kol için de tekrarla.",
    image : require("../assets/exercises/lowerArms/concentrationcurl.gif")
  },
  {
    id : 25,
    body_id : 3,
    name : "Preacher Curl",
    set : "3",
    repeat : "8 - 10",
    description : "Preacher bench (biceps bench) kullanarak, kollarını tamamen uzat ve ardından dambılı yavaşça yukarı kaldırıp aşağı indir. Bu hareket biceps kaslarını izole ederek çalıştırır.",
    image : require("../assets/exercises/lowerArms/preachercurl.gif")
  },
  {
    id : 26,
    body_id : 3,
    name : "Tricep Dips",
    set : "3",
    repeat : "8 - 12",
    description : "İki elini omuz genişliğinde bir bench'e koyarak, ayaklarını önde birleştirip kendini aşağıya indir. Dirseklerini bükerek vücudunu aşağı indir ve sonra tekrar yukarı kaldır.",
    image : require("../assets/exercises/lowerArms/tricepdips.gif")
  },
  {
    id : 27,
    body_id : 3,
    name : "Skull Crushers",
    set : "3",
    repeat : "8 - 12",
    description : "Yatarken, iki elinde bir barbell veya dambıl tutarak, dirseklerinden bükerek ağırlığı alnına doğru indir ve sonra tekrar yukarı kaldır. Triceps kaslarını hedef alır.",
    image : require("../assets/exercises/lowerArms/skullcrushers.gif")
  },
  {
    id : 28,
    body_id : 3,
    name : "Overhead Tricep Extension",
    set : "3",
    repeat : "10 - 12",
    description : "Dambılı başının üzerinde iki elinle tutarak, dirseklerini bükmeden dambılı kafanın arkasına doğru indir ve ardından yukarı kaldır.",
    image : require("../assets/exercises/lowerArms/overheadtricepextension.gif")
  },
  {
    id : 29,
    body_id : 3,
    name : "Close-Grip Bench Press",
    set : "3",
    repeat : "8 - 10",
    description : "Bench press hareketini yaparken ellerini omuz genişliğinden daha dar bir şekilde barbell'e yerleştirerek, ağırlığı göğsüne indirin ve tekrar yukarı kaldır. Bu, triceps kaslarını daha çok hedef alır.",
    image : require("../assets/exercises/lowerArms/closegripbenchpress.gif")
  },
  {
    id : 30,
    body_id : 3,
    name : "Cable Curl",
    set : "3",
    repeat : "10 - 12",
    description : "Kablo makinesinde düşük ağırlıkla, kollarını düz tutarak ve avuç içlerini yukarıya bakacak şekilde kabloyu yukarı kaldır ve aşağı indir.",
    image : require("../assets/exercises/lowerArms/cablecurl.gif")
  },

  // -------------------------------------------------------------------------------------------------

  {
    id : 31,
    body_id : 4,
    name : "Standing Calf Raise",
    set : "3",
    repeat : "12 - 15",
    description : "Ayakta durarak, topuklarınızı yavaşça kaldırın ve indirin. Ağırlık olarak dambıl veya barbell kullanabilirsiniz. Hareket sırasında vücudunuzu dik tutun.",
    image : require("../assets/exercises/lowerLegs/standingcalfraise.gif")
  },
  {
    id : 32,
    body_id : 4,
    name : "Seated Calf Raise",
    set : "3",
    repeat : "12 - 15",
    description : "Otururken, ayak tabanlarınızı bir platforma yerleştirin ve topuklarınızı kaldırıp indirin. Genellikle bu hareket, bacak arkasındaki kasları hedefler.",
    image : require("../assets/exercises/lowerLegs/seatedcalfraise.gif")
  },
  {
    id : 33,
    body_id : 4,
    name : "Leg Press Calf Raise",
    set : "3",
    repeat : "12 - 15",
    description : "Leg press makinesinin tabanına ayaklarınızı koyun ve topuklarınızı kaldırarak bacak kaslarınızı çalıştırın. Bu hareket hem güç hem de hacim artışı sağlar.",
    image : require("../assets/exercises/lowerLegs/legpresscalfraise.gif")
  },
  {
    id : 34,
    body_id : 4,
    name : "Single-Leg Calf Raise",
    set : "3",
    repeat : "12 - 15 (her iki bacak için)",
    description : "Tek bir ayak üzerinde durun ve diğerini yerden kaldırın. Topuklarınızı kaldırıp indirirken, dengeyi koruyun. Bu hareket daha fazla stabilite ve denge geliştirmeye yardımcı olur.",
    image : require("../assets/exercises/lowerLegs/singlelegcalfraise.gif")
  },
  {
    id : 35,
    body_id : 4,
    name : "Barbell Calf Raise",
    set : "3",
    repeat : "10 - 12",
    description : "Omuzlarınıza barbell koyarak, topuklarınızı kaldırın ve indirin. Barbell, hareketin zorluğunu artırır ve kasları daha fazla çalıştırır.",
    image : require("../assets/exercises/lowerLegs/barbellcalfraise.gif")
  },
  {
    id : 36,
    body_id : 4,
    name : "Standing Calf Raise",
    set : "3",
    repeat : "12 - 15",
    description : "Ayaklarınızı yüksek bir platforma yerleştirin ve topuklarınızı kaldırarak hareket edin. Platform yüksekliği, hareketin etkinliğini artırır.",
    image : require("../assets/exercises/lowerLegs/standingcalfraiseonelevatedplatform.gif")
  },
  {
    id : 37,
    body_id : 4,
    name : "Single-Leg Dumbbell Calf Raise",
    set : "3",
    repeat : "10 - 12 (her iki bacak için)",
    description : "Her iki elde birer dambıl tutarak, tek bir ayak üzerinde durun ve topuklarınızı kaldırıp indirin. Bu hareket, tek bacak üzerinde ekstra zorluk sağlar.",
    image : require("../assets/exercises/lowerLegs/singlelegdumbbellcalfraise.gif")
  },
  {
    id : 38,
    body_id : 4,
    name : "Calf Raise with Weight Plate",
    set : "3",
    repeat : "12 - 15",
    description : "Ağırlık plakalarını ayaklarınızın altına yerleştirip, topuklarınızı kaldırın ve indirin. Bu yöntem ek bir ağırlık sağlar ve kasları daha fazla zorlar.",
    image : require("../assets/exercises/lowerLegs/calfraisewithweightplate.gif")
  },
  {
    id : 39,
    body_id : 4,
    name : "Smith Machine Calf Raise",
    set : "3",
    repeat : "12 - 15",
    description : "Smith makinesinin barını kullanarak, topuklarınızı kaldırıp indirin. Bu makine hareket sırasında stabilite sağlar ve doğru formu korumanıza yardımcı olur.",
    image : require("../assets/exercises/lowerLegs/smithmachinecalfraise.gif")
  },
  {
    id : 40,
    body_id : 4,
    name : "High Heel Calf Raise",
    set : "3",
    repeat : "12 - 15",
    description : "Ayak parmak uçlarınız üzerinde durarak topuklarınızı kaldırın ve indirin. Bu hareket, alt bacak kaslarının üst kısmını hedefler.",
    image : require("../assets/exercises/lowerLegs/highheelcalfraise.gif")
  },
];

export default exerciseData;
