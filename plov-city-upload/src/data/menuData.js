/** Plov City — birlashtirilgan menyu: React ma’lumotlari va oldingi saytdagi noyob taomlar. */
export const categories = [
  {
    "id": "all",
    "emoji": "🍽️",
    "nameUz": "Barchasi",
    "nameRu": "Все блюда",
    "nameEn": "All Dishes"
  },
  {
    "id": "plov",
    "emoji": "🍲",
    "nameUz": "Osh turlari",
    "nameRu": "Виды плова",
    "nameEn": "Plov Varieties"
  },
  {
    "id": "addons",
    "emoji": "🥩",
    "nameUz": "Qoʻshimchalar",
    "nameRu": "Добавки к плову",
    "nameEn": "Toppings & Extras"
  },
  {
    "id": "salads",
    "emoji": "🥗",
    "nameUz": "Salatlar",
    "nameRu": "Салаты",
    "nameEn": "Fresh Salads"
  },
  {
    "id": "drinks",
    "emoji": "🫖",
    "nameUz": "Ichimliklar",
    "nameRu": "Напитки и чаи",
    "nameEn": "Drinks & Teas"
  },
  {
    "id": "promotions",
    "emoji": "🎁",
    "nameUz": "Maxsus Aksiyalar",
    "nameRu": "Спецпредложения",
    "nameEn": "Special Deals"
  }
];

export const menuItems = [
  {
    "id": "plov-toy",
    "category": "plov",
    "badge": "Xit",
    "emoji": "🍲",
    "calories": 820,
    "prepTime": "15-20 min",
    "image": "https://upload.wikimedia.org/wikipedia/commons/6/63/Plov_Tashkent.jpg",
    "name": {
      "uz": "Toʻy oshi (Toshkent uslubi)",
      "ru": "Свадебный плов (по-ташкентски)",
      "en": "Tashkent Wedding Plov"
    },
    "nameUz": "Toʻy oshi (Toshkent uslubi)",
    "nameRu": "Свадебный плов (по-ташкентски)",
    "nameEn": "Tashkent Wedding Plov",
    "description": {
      "uz": "Lazer guruchi, saralangan mayin mol va qoʻy goʻshti, shirin sariq sabzi, mayiz, noʻxat va zira bilan choʻyan qozonda damlangan haqiqiy toʻy oshi.",
      "ru": "Традиционный ташкентский свадебный плов на рисе лазер с нежной говядиной и бараниной, сладкой жёлтой морковью, изюмом, нутом и зирой.",
      "en": "Authentic celebration plov with Lazar rice, tender beef and lamb, sweet yellow carrots, chickpeas, raisins, and aromatic mountain cumin."
    },
    "descUz": "Lazer guruchi, saralangan mayin mol va qoʻy goʻshti, shirin sariq sabzi, mayiz, noʻxat va zira bilan damlangan haqiqiy toʻy oshi.",
    "descRu": "Традиционный ташкентский свадебный плов на рисе лазер с нежной говядиной и бараниной, сладкой жёлтой морковью, изюмом, нутом и зирой.",
    "descEn": "Authentic celebration plov with Lazar rice, tender beef and lamb, sweet yellow carrots, chickpeas, raisins, and mountain cumin.",
    "price": 42000,
    "weight": "350 g",
    "variants": [
      {
        "id": "1-portion",
        "nameUz": "1 porsiya (350g)",
        "nameRu": "1 порция (350г)",
        "nameEn": "1 portion (350g)",
        "price": 42000,
        "weight": "350g"
      },
      {
        "id": "05-kg",
        "nameUz": "0.5 kg (lagan)",
        "nameRu": "0.5 кг (ляган)",
        "nameEn": "0.5 kg (platter)",
        "price": 85000,
        "weight": "500g"
      },
      {
        "id": "1-kg",
        "nameUz": "1 kg (katta lagan)",
        "nameRu": "1 кг (большой ляган)",
        "nameEn": "1 kg (large platter)",
        "price": 160000,
        "weight": "1000g"
      }
    ]
  },
  {
    "id": "plov-choyxona",
    "category": "plov",
    "badge": "Xit",
    "emoji": "🥩",
    "calories": 890,
    "prepTime": "15-20 min",
    "image": "https://upload.wikimedia.org/wikipedia/commons/e/e3/Plov.jpg",
    "name": {
      "uz": "Choyxona oshi (qoʻy goʻshtli)",
      "ru": "Чайханский плов (с бараниной)",
      "en": "Choykhona Lamb Plov"
    },
    "nameUz": "Choyxona oshi (qoʻy goʻshtli)",
    "nameRu": "Чайханский плов (с бараниной)",
    "nameEn": "Choykhona Lamb Plov",
    "description": {
      "uz": "Toʻq rangli, sergoʻsht va toʻyimli anʼanaviy choyxona oshi. Qovurilgan dumba yogʻi, yangi barra qoʻy goʻshti va qizil sabzi uygʻunligi.",
      "ru": "Насыщенный, поджаристый мужской чайханский плов из отборной баранины, курдюка, красной моркови и чеснока на живом огне.",
      "en": "Rich and hearty traditional teahouse plov cooked over open flame with fresh succulent lamb, crispy cracklings, and garlic bulbs."
    },
    "descUz": "Toʻq rangli, sergoʻsht va toʻyimli anʼanaviy choyxona oshi. Qovurilgan dumba yogʻi va barra qoʻy goʻshti bilan.",
    "descRu": "Насыщенный чайханский плов из отборной баранины, курдюка и красной моркови на живом огне.",
    "descEn": "Hearty traditional teahouse plov with succulent lamb, crispy cracklings, and garlic bulbs.",
    "price": 42000,
    "weight": "350 g",
    "variants": [
      {
        "id": "1-portion",
        "nameUz": "1 porsiya (350g)",
        "nameRu": "1 порция (350г)",
        "nameEn": "1 portion (350g)",
        "price": 42000,
        "weight": "350g"
      },
      {
        "id": "05-kg",
        "nameUz": "0.5 kg (lagan)",
        "nameRu": "0.5 кг (ляган)",
        "nameEn": "0.5 kg (platter)",
        "price": 85000,
        "weight": "500g"
      },
      {
        "id": "1-kg",
        "nameUz": "1 kg (katta lagan)",
        "nameRu": "1 кг (большой ляган)",
        "nameEn": "1 kg (large platter)",
        "price": 160000,
        "weight": "1000g"
      }
    ]
  },
  {
    "id": "plov-devzira",
    "category": "plov",
    "badge": "Yangi",
    "emoji": "🌾",
    "calories": 780,
    "prepTime": "20-25 min",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/%D0%9F%D0%BB%D0%BE%D0%B2_%D0%BD%D0%B0_%D1%80%D1%8B%D0%BD%D0%BA%D0%B5_%D0%A7%D0%BE%D1%80%D1%81%D1%83_%D0%B2_%D0%A2%D0%B0%D1%88%D0%BA%D0%B5%D0%BD%D1%82%D0%B5%2C_2026-05-02.jpg/1280px-%D0%9F%D0%BB%D0%BE%D0%B2_%D0%BD%D0%B0_%D1%80%D1%8B%D0%BD%D0%BA%D0%B5_%D0%A7%D0%BE%D1%80%D1%81%D1%83_%D0%B2_%D0%A2%D0%B0%D1%88%D0%BA%D0%B5%D0%BD%D1%82%D0%B5%2C_2026-05-02.jpg",
    "name": {
      "uz": "Devzira maxsus osh (Fargʻona)",
      "ru": "Ферганский плов Девзира",
      "en": "Fergana Devzira Special Plov"
    },
    "nameUz": "Devzira maxsus osh (Fargʻona)",
    "nameRu": "Ферганский плов Девзира",
    "nameEn": "Fergana Devzira Special Plov",
    "description": {
      "uz": "Qadimiy qizil Devzira guruchidan tayyorlangan Fargʻona oshi. Oʻziga barcha sharbatni singdiruvchi yirik donali, yengil va xushboʻy osh.",
      "ru": "Знаменитый ферганский плов из легендарного розового риса девзира. Крупные рассыпчатые зерна, впитавшие весь аромат зирвака.",
      "en": "Legendary Fergana Valley plov prepared with genuine reddish-pink Devzira rice, tender meat, and whole hot chili peppers."
    },
    "descUz": "Qadimiy qizil Devzira guruchidan tayyorlangan Fargʻona oshi. Yirik donali, yengil va xushboʻy.",
    "descRu": "Знаменитый ферганский плов из легендарного розового риса девзира с нежным мясом.",
    "descEn": "Legendary Fergana Valley plov prepared with genuine reddish-pink Devzira rice.",
    "price": 45000,
    "weight": "350 g",
    "variants": [
      {
        "id": "1-portion",
        "nameUz": "1 porsiya (350g)",
        "nameRu": "1 порция (350г)",
        "nameEn": "1 portion (350g)",
        "price": 45000,
        "weight": "350g"
      },
      {
        "id": "05-kg",
        "nameUz": "0.5 kg (lagan)",
        "nameRu": "0.5 кг (ляган)",
        "nameEn": "0.5 kg (platter)",
        "price": 90000,
        "weight": "500g"
      },
      {
        "id": "1-kg",
        "nameUz": "1 kg (katta lagan)",
        "nameRu": "1 кг (большой ляган)",
        "nameEn": "1 kg (large platter)",
        "price": 175000,
        "weight": "1000g"
      }
    ]
  },
  {
    "id": "plov-samarqand-ziqir",
    "category": "plov",
    "badge": "Xit",
    "emoji": "✨",
    "calories": 810,
    "prepTime": "15-20 min",
    "image": "https://upload.wikimedia.org/wikipedia/commons/b/b9/Samarkand_palov.jpg",
    "name": {
      "uz": "Zigʻir yogʻli Samarqand oshi",
      "ru": "Самаркандский зигир-ош",
      "en": "Samarkand Flaxseed Oil Plov"
    },
    "nameUz": "Zigʻir yogʻli Samarqand oshi",
    "nameRu": "Самаркандский зигир-ош",
    "nameEn": "Samarkand Flaxseed Oil Plov",
    "description": {
      "uz": "Tabiiy zigʻir yogʻida qatlam-qatlam qilib suziladigan Samarqandcha uslub. Goʻshti ustida yirik boʻlaklarda, sabzisi shirador va guruchi oq parcha.",
      "ru": "Классический самаркандский плов на натуральном льняном масле зигир. Подаётся слоями: рассыпчатый рис, сочная морковь и крупные куски мяса.",
      "en": "Classic layered Samarkand plov simmered in natural flaxseed (ziqir) oil. Served with fluffy rice topped with sweet carrots and tender meat slices."
    },
    "descUz": "Tabiiy zigʻir yogʻida qatlam-qatlam suziladigan Samarqandcha uslub. Yirik goʻsht va shirador sabzi.",
    "descRu": "Классический самаркандский плов на натуральном льняном масле зигир, подаваемый слоями.",
    "descEn": "Classic layered Samarkand plov simmered in natural flaxseed oil with sweet carrots.",
    "price": 45000,
    "weight": "350 g",
    "variants": [
      {
        "id": "1-portion",
        "nameUz": "1 porsiya (350g)",
        "nameRu": "1 порция (350г)",
        "nameEn": "1 portion (350g)",
        "price": 45000,
        "weight": "350g"
      },
      {
        "id": "05-kg",
        "nameUz": "0.5 kg (lagan)",
        "nameRu": "0.5 кг (ляган)",
        "nameEn": "0.5 kg (platter)",
        "price": 90000,
        "weight": "500g"
      },
      {
        "id": "1-kg",
        "nameUz": "1 kg (katta lagan)",
        "nameRu": "1 кг (большой ляган)",
        "nameEn": "1 kg (large platter)",
        "price": 175000,
        "weight": "1000g"
      }
    ]
  },
  {
    "id": "addon-qazi",
    "category": "addons",
    "badge": "Xit",
    "emoji": "🥩",
    "calories": 280,
    "prepTime": "5 min",
    "image": "https://imageproxy.wolt.com/assets/678a3543596da842cc63bf6c",
    "name": {
      "uz": "Ot goʻshtli Qazi (2 boʻlak)",
      "ru": "Казы из конины (2 кусочка)",
      "en": "Horsemeat Kazy Sausage (2 pcs)"
    },
    "nameUz": "Ot goʻshtli Qazi (2 boʻlak)",
    "nameRu": "Казы из конины (2 кусочка)",
    "nameEn": "Horsemeat Kazy Sausage (2 pcs)",
    "description": {
      "uz": "Qadimiy retsept asosida tayyorlangan yumshoq va xushboʻy tabiiy ot goʻshti qazisi. Oshga ajoyib lazzat bagʻishlaydi.",
      "ru": "Традиционная деликатесная домашняя колбаса из конины со специями. Идеальное дополнение к горячему плову.",
      "en": "Traditional cured horsemeat delicacy kazy seasoned with black pepper and mountain zira. Perfect plov topping."
    },
    "descUz": "Qadimiy retsept asosida tayyorlangan xushboʻy tabiiy ot goʻshti qazisi.",
    "descRu": "Традиционная деликатесная домашняя колбаса из конины со специями.",
    "descEn": "Traditional cured horsemeat delicacy kazy with zira and black pepper.",
    "price": 15000,
    "weight": "60 g",
    "variants": null
  },
  {
    "id": "addon-quail-eggs",
    "category": "addons",
    "badge": null,
    "emoji": "🥚",
    "calories": 85,
    "prepTime": "3 min",
    "image": "https://snapcalorie-webflow-website.s3.us-east-2.amazonaws.com/media/food_pics_v2/medium/hard_boiled_quail_eggs.jpg",
    "name": {
      "uz": "Bedana tuxumi (3 dona)",
      "ru": "Перепелиные яйца (3 шт)",
      "en": "Boiled Quail Eggs (3 pcs)"
    },
    "nameUz": "Bedana tuxumi (3 dona)",
    "nameRu": "Перепелиные яйца (3 шт)",
    "nameEn": "Boiled Quail Eggs (3 pcs)",
    "description": {
      "uz": "Pishirilgan toza bedana tuxumlari. Osh koʻrinishiga va taʼmiga estetik zavq beruvchi foydali qoʻshimcha.",
      "ru": "Отварные свежие перепелиные яйца. Классическое полезное дополнение к праздничному плову.",
      "en": "Freshly boiled delicate quail eggs to garnish and enrich your hot plov meal."
    },
    "descUz": "Pishirilgan toza bedana tuxumlari. Oshga estetik zavq va taʼm beradi.",
    "descRu": "Отварные свежие перепелиные яйца для подачи к плову.",
    "descEn": "Freshly boiled delicate quail eggs to garnish your hot plov platter.",
    "price": 6000,
    "weight": "3 dona",
    "variants": null
  },
  {
    "id": "addon-dolma",
    "category": "addons",
    "badge": "Yangi",
    "emoji": "🍃",
    "calories": 190,
    "prepTime": "5 min",
    "image": "https://images.squarespace-cdn.com/content/v1/6817b0a24f91d37968f848d3/177e1e34-641b-44d9-bb14-147722864198/dolma.jpg",
    "name": {
      "uz": "Uzum bargli Dolma (4 dona)",
      "ru": "Долма в виноградных листьях (4 шт)",
      "en": "Stuffed Grape Leaves Dolma (4 pcs)"
    },
    "nameUz": "Uzum bargli Dolma (4 dona)",
    "nameRu": "Долма в виноградных листьях (4 шт)",
    "nameEn": "Stuffed Grape Leaves Dolma (4 pcs)",
    "description": {
      "uz": "Yumshoq tok barglariga oʻralgan barra mol goʻshtidan tayyorlangan mazali dolmalar.",
      "ru": "Нежные рулетики из виноградных листьев с начинкой из сочного фарша со специями.",
      "en": "Tender grape leaves stuffed with minced beef, fresh herbs, and oriental spices."
    },
    "descUz": "Yumshoq tok barglariga oʻralgan barra mol goʻshtidan tayyorlangan mazali dolmalar.",
    "descRu": "Нежные рулетики из виноградных листьев с начинкой из сочного фарша.",
    "descEn": "Tender grape leaves stuffed with minced beef, rice, and oriental spices.",
    "price": 18000,
    "weight": "120 g",
    "variants": null
  },
  {
    "id": "addon-achichuk",
    "category": "addons",
    "badge": "Xit",
    "emoji": "🍅",
    "calories": 65,
    "prepTime": "5 min",
    "image": "https://cdn.tasteatlas.com/images/dishes/ed88e0809f884cbd894f71f6aaf4ad08.jpg?m=facebook",
    "name": {
      "uz": "Achichuk salati (kichik)",
      "ru": "Салат Ачик-чучук (порция)",
      "en": "Achichuk Tomato Salad (portion)"
    },
    "nameUz": "Achichuk salati (kichik)",
    "nameRu": "Салат Ачик-чучук (порция)",
    "nameEn": "Achichuk Tomato Salad (portion)",
    "description": {
      "uz": "Yupqa parrak qilingan YusuPOV pomidori, archilgan shirin piyoz va mayda toʻgʻralgan achchiq qalampir.",
      "ru": "Тончайше нарезанные сочные сладкие помидоры «Юсуповские», белый лук и острый перчик.",
      "en": "Thinly sliced sweet Uzbek tomatoes, crisp white onions, and hot green pepper slices."
    },
    "descUz": "Yupqa parrak qilingan pomidor, shirin piyoz va achchiq qalampir uygʻunligi.",
    "descRu": "Тончайше нарезанные сочные сладкие помидоры с белым луком.",
    "descEn": "Thinly sliced sweet Uzbek tomatoes and crisp white onions.",
    "price": 10000,
    "weight": "150 g",
    "variants": null
  },
  {
    "id": "addon-suzma",
    "category": "addons",
    "badge": null,
    "emoji": "🥣",
    "calories": 110,
    "prepTime": "3 min",
    "image": "https://www.advantour.com/img/uzbekistan/cuisine/suzma1.jpg",
    "name": {
      "uz": "Qatiqli Suzma (koʻkatlar bilan)",
      "ru": "Сузьма с зеленью",
      "en": "Strained Yogurt Suzma with Herbs"
    },
    "nameUz": "Qatiqli Suzma (koʻkatlar bilan)",
    "nameRu": "Сузьма с зеленью",
    "nameEn": "Strained Yogurt Suzma with Herbs",
    "description": {
      "uz": "Tabiiy quyuq suzma, maydalangan kashnich, arpabodiyon va yengil sarimsoq taʼmi bilan.",
      "ru": "Густая домашняя сузьма со свежим укропом, кинзой и лёгким ароматом чеснока.",
      "en": "Thick traditional strained yogurt seasoned with fresh dill, cilantro, and crushed garlic."
    },
    "descUz": "Tabiiy quyuq suzma, maydalangan kashnich, arpabodiyon va yengil sarimsoq bilan.",
    "descRu": "Густая домашняя сузьма со свежим укропом и кинзой.",
    "descEn": "Thick traditional strained yogurt seasoned with fresh dill and cilantro.",
    "price": 8000,
    "weight": "120 g",
    "variants": null
  },
  {
    "id": "addon-non",
    "category": "addons",
    "badge": "Xit",
    "emoji": "🫓",
    "calories": 320,
    "prepTime": "5 min",
    "image": "/images/patir-flatbread.jpg",
    "name": {
      "uz": "Issiq tandir non (patir)",
      "ru": "Горячая тандырная лепёшка (патир)",
      "en": "Hot Tandoor Flatbread (Patyr)"
    },
    "nameUz": "Issiq tandir non (patir)",
    "nameRu": "Горячая тандырная лепёшка (патир)",
    "nameEn": "Hot Tandoor Flatbread (Patyr)",
    "description": {
      "uz": "Tandirdan uzilgan qasir-qusur chetlari yogʻli, sedana sepilgan qaynoq milliy non.",
      "ru": "Пышная, хрустящая тандырная лепёшка с кунжутом и седаной, только что из печи.",
      "en": "Freshly baked flaky tandoor bread sprinkled with black nigella seeds, served steaming hot."
    },
    "descUz": "Tandirdan uzilgan qasir-qusur chetlari yogʻli, sedana sepilgan qaynoq milliy non.",
    "descRu": "Пышная хрустящая тандырная лепёшка с седаной, только что из печи.",
    "descEn": "Freshly baked flaky tandoor bread sprinkled with black nigella seeds.",
    "price": 6000,
    "weight": "1 dona (300g)",
    "variants": null
  },
  {
    "id": "addon-garlic",
    "category": "addons",
    "badge": null,
    "emoji": "🧄",
    "calories": 45,
    "prepTime": "2 min",
    "image": "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80",
    "name": {
      "uz": "Qozonda pishgan sarimsoqpiyoz",
      "ru": "Печёный чеснок из казана",
      "en": "Slow-cooked Whole Garlic Bulb"
    },
    "nameUz": "Qozonda pishgan sarimsoqpiyoz",
    "nameRu": "Печёный чеснок из казана",
    "nameEn": "Slow-cooked Whole Garlic Bulb",
    "description": {
      "uz": "Osh bilan birga qozonda sekin pishgan mayin, shirin va erib ketuvchi butun sarimsoq boshi.",
      "ru": "Целая головка чеснока, медленно томившаяся в казане вместе с пловом до кремовой мягкости.",
      "en": "Whole bulb of garlic slow-steamed inside the plov cauldron until sweet and meltingly tender."
    },
    "descUz": "Osh bilan birga qozonda sekin pishgan mayin va shirin butun sarimsoq boshi.",
    "descRu": "Целая головка чеснока, медленно томившаяся в казане вместе с пловом.",
    "descEn": "Whole bulb of garlic slow-steamed inside the plov cauldron.",
    "price": 5000,
    "weight": "1 dona",
    "variants": null
  },
  {
    "id": "salad-bahor",
    "category": "salads",
    "badge": "Yangi",
    "emoji": "🥒",
    "calories": 95,
    "prepTime": "7 min",
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "name": {
      "uz": "Bahor salati (tuxum va bodring)",
      "ru": "Весенний салат «Бахор»",
      "en": "Spring Fresh Salad \"Bakhor\""
    },
    "nameUz": "Bahor salati (tuxum va bodring)",
    "nameRu": "Весенний салат «Бахор»",
    "nameEn": "Spring Fresh Salad \"Bakhor\"",
    "description": {
      "uz": "Yangi uzilgan bodring, qaynatilgan tuxum, redis, barra koʻkatlar va smetana bilan tayyorlangan yengil salat.",
      "ru": "Свежие хрустящие огурчики, отварные яйца, редис, укроп, зелёный лук и нежная заправка со сметаной.",
      "en": "Crispy young cucumbers, hard-boiled eggs, fresh radishes, spring onions, and light sour cream dressing."
    },
    "descUz": "Bodring, qaynatilgan tuxum, redis, barra koʻkatlar va smetana bilan yengil salat.",
    "descRu": "Свежие огурчики, отварные яйца, редис, укроп и сметанная заправка.",
    "descEn": "Crispy cucumbers, boiled eggs, radishes, spring herbs, and sour cream.",
    "price": 22000,
    "weight": "220 g",
    "variants": null
  },
  {
    "id": "salad-chiroqchi",
    "category": "salads",
    "badge": "Xit",
    "emoji": "🥗",
    "calories": 140,
    "prepTime": "8 min",
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "name": {
      "uz": "Chiroqchi salati (qovurilgan goʻsht bilan)",
      "ru": "Салат Чирокчи (с тёплой говядиной)",
      "en": "Chirokchi Salad with Sautéed Beef"
    },
    "nameUz": "Chiroqchi salati (qovurilgan goʻsht bilan)",
    "nameRu": "Салат Чирокчи (с тёплой говядиной)",
    "nameEn": "Chirokchi Salad with Sautéed Beef",
    "description": {
      "uz": "Qovurilgan yupqa lahm goʻsht, mayda toʻgʻralgan shirin qalampir, bodring, pomidor va maxsus soya-sarimsoq sousi.",
      "ru": "Ароматные кусочки обжаренной говядины, соломка из сладкого перца, свежие огурцы, томаты и соево-чесночный соус.",
      "en": "Sautéed tender beef strips combined with julienned sweet peppers, cucumbers, tomatoes, and garlic-soy vinaigrette."
    },
    "descUz": "Qovurilgan lahm goʻsht, shirin qalampir, bodring va maxsus sous uygʻunligi.",
    "descRu": "Обжаренная говядина, сладкий перец, свежие огурцы и пряный соус.",
    "descEn": "Sautéed beef strips, crisp sweet bell peppers, and garlic-soy vinaigrette.",
    "price": 32000,
    "weight": "250 g",
    "variants": null
  },
  {
    "id": "salad-chicken-mushroom",
    "category": "salads",
    "badge": null,
    "emoji": "🍄",
    "calories": 220,
    "prepTime": "10 min",
    "image": "https://sd-images.simplydelivery.io/cdn-cgi/image/format%3Dauto%2Cquality%3D85%2Cwidth%3D500%2Cfit%3Dcover/https%3A/sd-images.simplydelivery.io/68be9a593441f/images/articles/68bd0dbe984bbc9c204cf39ebc0415f8365ae8bc.jpeg",
    "name": {
      "uz": "Tovuq va qoʻziqorinli salat",
      "ru": "Салат с курицей и шампиньонами",
      "en": "Warm Chicken & Mushroom Salad"
    },
    "nameUz": "Tovuq va qoʻziqorinli salat",
    "nameRu": "Салат с курицей и шампиньонами",
    "nameEn": "Warm Chicken & Mushroom Salad",
    "description": {
      "uz": "Tandirda pishgan mayin tovuq filesi, qovurilgan shampinyon qoʻziqorinlari, pishloq va yengil mayonez sousi.",
      "ru": "Нежное запечённое куриное филе, обжаренные шампиньоны, тёртый сыр, зелень и лёгкий фирменный соус.",
      "en": "Roasted chicken breast, sautéed button mushrooms, aged cheese shavings, and creamy herb dressing."
    },
    "descUz": "Tovuq filesi, qovurilgan qoʻziqorinlar, pishloq va yengil sous.",
    "descRu": "Нежное куриное филе, шампиньоны, тёртый сыр и фирменный соус.",
    "descEn": "Roasted chicken breast, sautéed mushrooms, and creamy herb dressing.",
    "price": 28000,
    "weight": "240 g",
    "variants": null
  },
  {
    "id": "drink-green-tea",
    "category": "drinks",
    "badge": "Xit",
    "emoji": "🫖",
    "calories": 10,
    "prepTime": "5 min",
    "image": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80",
    "name": {
      "uz": "Koʻk choy (choynakda limon bilan)",
      "ru": "Зелёный чай №95 с лимоном (чайник)",
      "en": "Green Tea #95 with Fresh Lemon"
    },
    "nameUz": "Koʻk choy (choynakda limon bilan)",
    "nameRu": "Зелёный чай №95 с лимоном (чайник)",
    "nameEn": "Green Tea #95 with Fresh Lemon",
    "description": {
      "uz": "Mashhur oʻzbek 95-koʻk choyi, yangi siqilgan limon boʻlaklari va novvot bilan chiroyli milliy choynakda.",
      "ru": "Классический узбекский зелёный чай №95 со свежим лимоном и кристаллическим сахаром навват в чайнике.",
      "en": "Authentic Uzbek #95 green tea served in a traditional porcelain teapot with fresh lemon slices and navvat crystal sugar."
    },
    "descUz": "Mashhur oʻzbek 95-koʻk choyi, limon boʻlaklari va novvot bilan milliy choynakda.",
    "descRu": "Классический узбекский зелёный чай №95 с лимоном и сахаром навват.",
    "descEn": "Authentic Uzbek green tea in porcelain teapot with fresh lemon and crystal sugar.",
    "price": 12000,
    "weight": "1 choynak (800ml)",
    "variants": null
  },
  {
    "id": "drink-black-tea",
    "category": "drinks",
    "badge": null,
    "emoji": "☕",
    "calories": 12,
    "prepTime": "5 min",
    "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
    "name": {
      "uz": "Qora choy (togʻ giyohlari bilan)",
      "ru": "Чёрный чай с горными травами",
      "en": "Black Tea with Mountain Herbs"
    },
    "nameUz": "Qora choy (togʻ giyohlari bilan)",
    "nameRu": "Чёрный чай с горными травами",
    "nameEn": "Black Tea with Mountain Herbs",
    "description": {
      "uz": "Hindistonning mayin qora choyi, togʻ kiyik oʻti va yalpiz barglari bilan damlangan xushboʻy ichimlik.",
      "ru": "Крепкий индийский чёрный чай с добавлением горного чабреца и мяты в традиционном чайнике.",
      "en": "Full-bodied black tea infused with fragrant wild mountain thyme and fresh garden mint."
    },
    "descUz": "Qora choy, togʻ kiyik oʻti va yalpiz barglari bilan damlangan.",
    "descRu": "Крепкий чёрный чай с добавлением горного чабреца и мяты.",
    "descEn": "Full-bodied black tea infused with wild mountain thyme and mint.",
    "price": 10000,
    "weight": "1 choynak (800ml)",
    "variants": null
  },
  {
    "id": "drink-ayran",
    "category": "drinks",
    "badge": "Xit",
    "emoji": "🥛",
    "calories": 130,
    "prepTime": "2 min",
    "image": "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=800&q=80",
    "name": {
      "uz": "Uy ayroni (muzdek, 0.5L)",
      "ru": "Домашний айран с мятой (0.5л)",
      "en": "Homemade Chilled Ayran (0.5L)"
    },
    "nameUz": "Uy ayroni (muzdek, 0.5L)",
    "nameRu": "Домашний айран с мятой (0.5л)",
    "nameEn": "Homemade Chilled Ayran (0.5L)",
    "description": {
      "uz": "Suzmadan tayyorlangan sovuq uy ayroni, maydalangan bodring, yalpiz va rayhon ifori bilan. Yogʻli oshdan keyin eng yaxshi vosita.",
      "ru": "Освежающий прохладный айран из домашней сузьмы с добавлением огурчика, мяты и базилика.",
      "en": "Refreshing chilled yogurt drink ayran blended with mineral water, cucumber zest, and chopped mint leaves."
    },
    "descUz": "Suzmadan tayyorlangan sovuq uy ayroni, bodring va yalpiz ifori bilan.",
    "descRu": "Освежающий прохладный айран из домашней сузьмы с мятой.",
    "descEn": "Refreshing chilled yogurt drink ayran blended with mint and cucumber.",
    "price": 12000,
    "weight": "0.5 L",
    "variants": null
  },
  {
    "id": "drink-cola-1l",
    "category": "drinks",
    "badge": null,
    "emoji": "🥤",
    "calories": 420,
    "prepTime": "1 min",
    "image": "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80",
    "name": {
      "uz": "Coca-Cola (1 Litr, muzdek)",
      "ru": "Coca-Cola (1 Литр, охлаждённая)",
      "en": "Coca-Cola (1 Liter Chilled)"
    },
    "nameUz": "Coca-Cola (1 Litr, muzdek)",
    "nameRu": "Coca-Cola (1 Литр, охлаждённая)",
    "nameEn": "Coca-Cola (1 Liter Chilled)",
    "description": {
      "uz": "Muzlatgichdan olingan salqin gazlangan Coca-Cola Classic.",
      "ru": "Классическая прохладная Coca-Cola в пластиковой бутылке 1л.",
      "en": "Chilled bottle of classic Coca-Cola 1L."
    },
    "descUz": "Muzdek salqin gazlangan Coca-Cola Classic.",
    "descRu": "Классическая прохладная Coca-Cola 1л.",
    "descEn": "Chilled bottle of classic Coca-Cola 1L.",
    "price": 16000,
    "weight": "1.0 L",
    "variants": null
  },
  {
    "id": "drink-cherry-juice",
    "category": "drinks",
    "badge": "Yangi",
    "emoji": "🍒",
    "calories": 160,
    "prepTime": "2 min",
    "image": "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=800&q=80",
    "name": {
      "uz": "Tabiiy olcha sharbati (kompot, 1L)",
      "ru": "Натуральный вишнёвый компот (1л)",
      "en": "Natural Sour Cherry Compote (1L)"
    },
    "nameUz": "Tabiiy olcha sharbati (kompot, 1L)",
    "nameRu": "Натуральный вишнёвый компот (1л)",
    "nameEn": "Natural Sour Cherry Compote (1L)",
    "description": {
      "uz": "Bogʻ olchasidan qaynatilgan nordon-shirin uy kompoti. Hech qanday konservantsiz, tabiiy taʼm.",
      "ru": "Сваренный из спелой садовой вишни домашний кисло-сладкий компот без красителей и консервантов.",
      "en": "Homemade sweet-sour cherry compote prepared from sun-ripened orchard cherries without artificial additives."
    },
    "descUz": "Bogʻ olchasidan qaynatilgan nordon-shirin uy kompoti. Konservantsiz.",
    "descRu": "Сваренный из спелой садовой вишни домашний компот без консервантов.",
    "descEn": "Homemade sweet-sour cherry compote without artificial additives.",
    "price": 20000,
    "weight": "1.0 L",
    "variants": null
  },
  {
    "id": "promo-family-set",
    "category": "promotions",
    "badge": "-20%",
    "emoji": "👨‍👩‍👧‍👦",
    "calories": 3200,
    "prepTime": "20-25 min",
    "image": "https://www.advantour.com/img/uzbekistan/tashkent/pilaf1.jpg",
    "name": {
      "uz": "Oilaviy Bazm Seti (-20%)",
      "ru": "Сет «Семейный Праздник» (-20%)",
      "en": "Family Royal Feast Set (-20%)"
    },
    "nameUz": "Oilaviy Bazm Seti (-20%)",
    "nameRu": "Сет «Семейный Праздник» (-20%)",
    "nameEn": "Family Royal Feast Set (-20%)",
    "description": {
      "uz": "1 kg katta lagan toʻy oshi + 4 boʻlak qazi + 2 ta achichuk salati + 2 ta issiq patir non + 1L Coca-Cola. Oila va mehmondorchilik uchun 20% arzonroq!",
      "ru": "1 кг праздничного плова на лягане + 4 кусочка казы + 2 порции ачик-чучука + 2 горячие лепёшки + 1л Coca-Cola. Экономия 20%!",
      "en": "1 kg platter of wedding plov + 4 pcs kazy + 2 achichuk salads + 2 tandoor flatbreads + 1L Coca-Cola. Save 20%!"
    },
    "descUz": "1 kg osh + 4 ta qazi + 2 ta achichuk + 2 ta non + 1L kola — 20% tejab qoling!",
    "descRu": "1 кг плова + 4 казы + 2 ачик-чучука + 2 лепёшки + 1л колы. Выгода 20%!",
    "descEn": "1 kg plov + 4 kazy + 2 salads + 2 breads + 1L cola. Save 20%!",
    "price": 198000,
    "oldPrice": 248000,
    "weight": "1 kg plov + set",
    "variants": null
  },
  {
    "id": "promo-friends-lunch",
    "category": "promotions",
    "badge": "Xit",
    "emoji": "🎉",
    "calories": 3400,
    "prepTime": "20 min",
    "image": "https://cdn1.img.sputniknews.uz/img/602/90/6029002_7%3A0%3A1200%3A675_1400x0_80_0_0_7a5cc122ddd84e046088675cf4f3abb5.jpg",
    "name": {
      "uz": "Doʻstlar Tushligi (Choy bepul!)",
      "ru": "Обед Друзей (Чай в подарок!)",
      "en": "Friends Lunch Combo (Free Tea!)"
    },
    "nameUz": "Doʻstlar Tushligi (Choy bepul!)",
    "nameRu": "Обед Друзей (Чай в подарок!)",
    "nameEn": "Friends Lunch Combo (Free Tea!)",
    "description": {
      "uz": "4 porsiya Toʻy oshi buyurtma bering va butun davra uchun 1 choynak limonli koʻk choy hamda issiq tandir noniga bepul ega boʻling!",
      "ru": "Закажите 4 порции Свадебного плова и получите чайник зелёного чая с лимоном и горячую тандырную лепёшку бесплатно!",
      "en": "Order 4 individual portions of Wedding Plov and get a full teapot of lemon green tea plus tandoor bread completely free!"
    },
    "descUz": "4 porsiya Toʻy oshi + 1 choynak limonli choy va issiq tandir non bepul!",
    "descRu": "4 порции плова + чайник чая с лимоном и горячая лепёшка в подарок!",
    "descEn": "4 portions of plov + teapot of lemon green tea and bread for free!",
    "price": 168000,
    "oldPrice": 186000,
    "weight": "4 kishilik",
    "variants": null
  },
  {
    "id": "promo-office-delivery",
    "category": "promotions",
    "badge": "Yangi",
    "emoji": "🏢",
    "calories": 2500,
    "prepTime": "25 min",
    "image": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/bb/10/6c/qaytib-bormayman.jpg?h=1100&s=1&w=1100",
    "name": {
      "uz": "Ishxonaga Yetkazish (Yetkazish BEPUL)",
      "ru": "Доставка в офис (Доставка БЕСПЛАТНО)",
      "en": "Office Lunch Delivery (Free Shipping)"
    },
    "nameUz": "Ishxonaga Yetkazish (Yetkazish BEPUL)",
    "nameRu": "Доставка в офис (Доставка БЕСПЛАТНО)",
    "nameEn": "Office Lunch Delivery (Free Shipping)",
    "description": {
      "uz": "Ofis va korxonalar uchun maxsus: istalgan 3 ta osh yoki undan koʻp buyurtma qilsangiz, Toshkent boʻylab tezkor yetkazib berish mutlaqo bepul!",
      "ru": "Для коллег и офисов: при заказе от 3-х порций любого плова экспресс-доставка по Ташкенту абсолютно бесплатно!",
      "en": "Corporate lunch special: Order any 3 or more plov portions and enjoy 100% free express delivery across Tashkent!"
    },
    "descUz": "3 ta osh buyurtmasiga tezkor yetkazib berish xizmati mutlaqo bepul!",
    "descRu": "При заказе от 3-х порций плова доставка по Ташкенту бесплатно!",
    "descEn": "Order 3 or more plov portions and get free express delivery across Tashkent!",
    "price": 126000,
    "weight": "3+ kishi",
    "variants": null
  },
  {
    "id": "kombo-dostlar",
    "category": "promotions",
    "badge": "Xit To‘plam",
    "emoji": "🍱",
    "calories": 0,
    "prepTime": "15–25 min",
    "image": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/bb/10/6c/qaytib-bormayman.jpg?h=1100&s=1&w=1100",
    "name": {
      "uz": "Do‘stlar Lagan Seti (2 kishilik)",
      "ru": "Сет для друзей (на 2 персоны)",
      "en": "Friends Combo Set (for 2)"
    },
    "nameUz": "Do‘stlar Lagan Seti (2 kishilik)",
    "nameRu": "Сет для друзей (на 2 персоны)",
    "nameEn": "Friends Combo Set (for 2)",
    "description": {
      "uz": "2 kishilik issiq To‘y oshi laganda, Achichuk salati, tandir patir non va 1L Coca-Cola.",
      "ru": "2 kishilik issiq To‘y oshi laganda, Achichuk salati, tandir patir non va 1L Coca-Cola.",
      "en": "2 kishilik issiq To‘y oshi laganda, Achichuk salati, tandir patir non va 1L Coca-Cola."
    },
    "descUz": "2 kishilik issiq To‘y oshi laganda, Achichuk salati, tandir patir non va 1L Coca-Cola.",
    "descRu": "2 kishilik issiq To‘y oshi laganda, Achichuk salati, tandir patir non va 1L Coca-Cola.",
    "descEn": "2 kishilik issiq To‘y oshi laganda, Achichuk salati, tandir patir non va 1L Coca-Cola.",
    "price": 105000,
    "oldPrice": null,
    "weight": "1 dona",
    "variants": null
  },
  {
    "id": "kombo-oilaviy",
    "category": "promotions",
    "badge": "-15% Chegirma",
    "emoji": "🍱",
    "calories": 0,
    "prepTime": "15–25 min",
    "image": "https://cdn1.img.sputniknews.uz/img/602/90/6029002_7%3A0%3A1200%3A675_1400x0_80_0_0_7a5cc122ddd84e046088675cf4f3abb5.jpg",
    "name": {
      "uz": "Plov City Katta Oilaviy Set (4 kishilik)",
      "ru": "Большой семейный сет Plov City (на 4 персоны)",
      "en": "Plov City Large Family Set (for 4)"
    },
    "nameUz": "Plov City Katta Oilaviy Set (4 kishilik)",
    "nameRu": "Большой семейный сет Plov City (на 4 персоны)",
    "nameEn": "Plov City Large Family Set (for 4)",
    "description": {
      "uz": "4 kishilik katta lagan To‘y oshi (qazi va bedana tuxumlari bilan), 2 ta Achichuk, 2 ta issiq patir va 2 ta 1L ichimlik.",
      "ru": "4 kishilik katta lagan To‘y oshi (qazi va bedana tuxumlari bilan), 2 ta Achichuk, 2 ta issiq patir va 2 ta 1L ichimlik.",
      "en": "4 kishilik katta lagan To‘y oshi (qazi va bedana tuxumlari bilan), 2 ta Achichuk, 2 ta issiq patir va 2 ta 1L ichimlik."
    },
    "descUz": "4 kishilik katta lagan To‘y oshi (qazi va bedana tuxumlari bilan), 2 ta Achichuk, 2 ta issiq patir va 2 ta 1L ichimlik.",
    "descRu": "4 kishilik katta lagan To‘y oshi (qazi va bedana tuxumlari bilan), 2 ta Achichuk, 2 ta issiq patir va 2 ta 1L ichimlik.",
    "descEn": "4 kishilik katta lagan To‘y oshi (qazi va bedana tuxumlari bilan), 2 ta Achichuk, 2 ta issiq patir va 2 ta 1L ichimlik.",
    "price": 195000,
    "oldPrice": null,
    "weight": "1 dona",
    "variants": null
  },
  {
    "id": "kombo-vip",
    "category": "promotions",
    "badge": "Premium",
    "emoji": "🍱",
    "calories": 0,
    "prepTime": "15–25 min",
    "image": "https://aboutthepoint.com/media/cache/og_prefer_1200/original-images/2025/47/yuwgBFojwiGUTRl63lU8PEdfu.jpeg",
    "name": {
      "uz": "Xontaxta VIP Ziyofat Seti",
      "ru": "VIP Ханский сет для банкета",
      "en": "Khantakhta VIP Feast Set"
    },
    "nameUz": "Xontaxta VIP Ziyofat Seti",
    "nameRu": "VIP Ханский сет для банкета",
    "nameEn": "Khantakhta VIP Feast Set",
    "description": {
      "uz": "Farg‘ona Devzira oshi, qo‘y go‘shti shashlik (2 six), tandir somsa (2 dona), achichuk, suzma va choynak choy.",
      "ru": "Farg‘ona Devzira oshi, qo‘y go‘shti shashlik (2 six), tandir somsa (2 dona), achichuk, suzma va choynak choy.",
      "en": "Farg‘ona Devzira oshi, qo‘y go‘shti shashlik (2 six), tandir somsa (2 dona), achichuk, suzma va choynak choy."
    },
    "descUz": "Farg‘ona Devzira oshi, qo‘y go‘shti shashlik (2 six), tandir somsa (2 dona), achichuk, suzma va choynak choy.",
    "descRu": "Farg‘ona Devzira oshi, qo‘y go‘shti shashlik (2 six), tandir somsa (2 dona), achichuk, suzma va choynak choy.",
    "descEn": "Farg‘ona Devzira oshi, qo‘y go‘shti shashlik (2 six), tandir somsa (2 dona), achichuk, suzma va choynak choy.",
    "price": 220000,
    "oldPrice": null,
    "weight": "1 dona",
    "variants": null
  },
  {
    "id": "plov-samarqand",
    "category": "plov",
    "badge": "Yangi",
    "emoji": "🍲",
    "calories": 0,
    "prepTime": "15–25 min",
    "image": "https://upload.wikimedia.org/wikipedia/commons/b/b9/Samarkand_palov.jpg",
    "name": {
      "uz": "Samarqand Zig‘ir Oshi",
      "ru": "Самаркандский плов на зигире",
      "en": "Samarkand Flaxseed Oil Plov"
    },
    "nameUz": "Samarqand Zig‘ir Oshi",
    "nameRu": "Самаркандский плов на зигире",
    "nameEn": "Samarkand Flaxseed Oil Plov",
    "description": {
      "uz": "Tabiiy zig‘ir yog‘i, qatlamli shirin sabzi va yumshoq go‘sht bilan Samarqand an’anasi asosida damlangan mashhur osh.",
      "ru": "Tabiiy zig‘ir yog‘i, qatlamli shirin sabzi va yumshoq go‘sht bilan Samarqand an’anasi asosida damlangan mashhur osh.",
      "en": "Tabiiy zig‘ir yog‘i, qatlamli shirin sabzi va yumshoq go‘sht bilan Samarqand an’anasi asosida damlangan mashhur osh."
    },
    "descUz": "Tabiiy zig‘ir yog‘i, qatlamli shirin sabzi va yumshoq go‘sht bilan Samarqand an’anasi asosida damlangan mashhur osh.",
    "descRu": "Tabiiy zig‘ir yog‘i, qatlamli shirin sabzi va yumshoq go‘sht bilan Samarqand an’anasi asosida damlangan mashhur osh.",
    "descEn": "Tabiiy zig‘ir yog‘i, qatlamli shirin sabzi va yumshoq go‘sht bilan Samarqand an’anasi asosida damlangan mashhur osh.",
    "price": 45000,
    "oldPrice": null,
    "weight": "280g",
    "variants": [
      {
        "id": "plov-samarqand-portion-1",
        "nameUz": "0.7 porsiya (280g)",
        "nameRu": "0.7 porsiya (280g)",
        "nameEn": "0.7 porsiya (280g)",
        "price": 37000,
        "weight": "280g"
      },
      {
        "id": "plov-samarqand-portion-2",
        "nameUz": "1 porsiya (380g)",
        "nameRu": "1 porsiya (380g)",
        "nameEn": "1 porsiya (380g)",
        "price": 45000,
        "weight": "380g"
      },
      {
        "id": "plov-samarqand-portion-3",
        "nameUz": "0.5 kg (lagan)",
        "nameRu": "0.5 kg (lagan)",
        "nameEn": "0.5 kg (lagan)",
        "price": 90000,
        "weight": "lagan"
      },
      {
        "id": "plov-samarqand-portion-4",
        "nameUz": "1 kg (katta lagan)",
        "nameRu": "1 kg (katta lagan)",
        "nameEn": "1 kg (katta lagan)",
        "price": 170000,
        "weight": "katta lagan"
      }
    ]
  },
  {
    "id": "plov-vip",
    "category": "plov",
    "badge": "Tavsiya",
    "emoji": "🍲",
    "calories": 0,
    "prepTime": "15–25 min",
    "image": "https://upload.wikimedia.org/wikipedia/commons/2/23/Samarkandian_palov.jpg",
    "name": {
      "uz": "Plov City VIP Oshi (Qazi & Tuxumli)",
      "ru": "VIP Плов Plov City (с Казы и яйцами)",
      "en": "Plov City VIP Plov (with Qazi & Eggs)"
    },
    "nameUz": "Plov City VIP Oshi (Qazi & Tuxumli)",
    "nameRu": "VIP Плов Plov City (с Казы и яйцами)",
    "nameEn": "Plov City VIP Plov (with Qazi & Eggs)",
    "description": {
      "uz": "Maxsus bayramona to‘y oshi, ustiga 2 bo‘lak ot go‘shti qazisi va 2 ta bedana tuxumi qo‘shib tortiladigan tansiq lagan.",
      "ru": "Maxsus bayramona to‘y oshi, ustiga 2 bo‘lak ot go‘shti qazisi va 2 ta bedana tuxumi qo‘shib tortiladigan tansiq lagan.",
      "en": "Maxsus bayramona to‘y oshi, ustiga 2 bo‘lak ot go‘shti qazisi va 2 ta bedana tuxumi qo‘shib tortiladigan tansiq lagan."
    },
    "descUz": "Maxsus bayramona to‘y oshi, ustiga 2 bo‘lak ot go‘shti qazisi va 2 ta bedana tuxumi qo‘shib tortiladigan tansiq lagan.",
    "descRu": "Maxsus bayramona to‘y oshi, ustiga 2 bo‘lak ot go‘shti qazisi va 2 ta bedana tuxumi qo‘shib tortiladigan tansiq lagan.",
    "descEn": "Maxsus bayramona to‘y oshi, ustiga 2 bo‘lak ot go‘shti qazisi va 2 ta bedana tuxumi qo‘shib tortiladigan tansiq lagan.",
    "price": 56000,
    "oldPrice": null,
    "weight": "VIP",
    "variants": [
      {
        "id": "plov-vip-portion-1",
        "nameUz": "1 porsiya (VIP)",
        "nameRu": "1 porsiya (VIP)",
        "nameEn": "1 porsiya (VIP)",
        "price": 56000,
        "weight": "VIP"
      },
      {
        "id": "plov-vip-portion-2",
        "nameUz": "0.5 kg (VIP)",
        "nameRu": "0.5 kg (VIP)",
        "nameEn": "0.5 kg (VIP)",
        "price": 110000,
        "weight": "VIP"
      },
      {
        "id": "plov-vip-portion-3",
        "nameUz": "1 kg (Katta VIP)",
        "nameRu": "1 kg (Katta VIP)",
        "nameEn": "1 kg (Katta VIP)",
        "price": 210000,
        "weight": "Katta VIP"
      }
    ]
  },
  {
    "id": "plov-bayram",
    "category": "plov",
    "badge": "Yengil",
    "emoji": "🍲",
    "calories": 0,
    "prepTime": "15–25 min",
    "image": "https://www.advantour.com/img/uzbekistan/tashkent/pilaf1.jpg",
    "name": {
      "uz": "Bayramona Lazer Oshi",
      "ru": "Праздничный плов Лазер",
      "en": "Festive Lazer Rice Plov"
    },
    "nameUz": "Bayramona Lazer Oshi",
    "nameRu": "Праздничный плов Лазер",
    "nameEn": "Festive Lazer Rice Plov",
    "description": {
      "uz": "Yengil va mayin Xorazm lazer guruchi, shirin sariq sabzi va sarxil buzoq go‘shti bilan tayyorlangan tansiq milliy osh.",
      "ru": "Yengil va mayin Xorazm lazer guruchi, shirin sariq sabzi va sarxil buzoq go‘shti bilan tayyorlangan tansiq milliy osh.",
      "en": "Yengil va mayin Xorazm lazer guruchi, shirin sariq sabzi va sarxil buzoq go‘shti bilan tayyorlangan tansiq milliy osh."
    },
    "descUz": "Yengil va mayin Xorazm lazer guruchi, shirin sariq sabzi va sarxil buzoq go‘shti bilan tayyorlangan tansiq milliy osh.",
    "descRu": "Yengil va mayin Xorazm lazer guruchi, shirin sariq sabzi va sarxil buzoq go‘shti bilan tayyorlangan tansiq milliy osh.",
    "descEn": "Yengil va mayin Xorazm lazer guruchi, shirin sariq sabzi va sarxil buzoq go‘shti bilan tayyorlangan tansiq milliy osh.",
    "price": 43000,
    "oldPrice": null,
    "weight": "280g",
    "variants": [
      {
        "id": "plov-bayram-portion-1",
        "nameUz": "0.7 porsiya (280g)",
        "nameRu": "0.7 porsiya (280g)",
        "nameEn": "0.7 porsiya (280g)",
        "price": 35000,
        "weight": "280g"
      },
      {
        "id": "plov-bayram-portion-2",
        "nameUz": "1 porsiya (380g)",
        "nameRu": "1 porsiya (380g)",
        "nameEn": "1 porsiya (380g)",
        "price": 43000,
        "weight": "380g"
      },
      {
        "id": "plov-bayram-portion-3",
        "nameUz": "0.5 kg (lagan)",
        "nameRu": "0.5 kg (lagan)",
        "nameEn": "0.5 kg (lagan)",
        "price": 86000,
        "weight": "lagan"
      },
      {
        "id": "plov-bayram-portion-4",
        "nameUz": "1 kg (katta lagan)",
        "nameRu": "1 kg (katta lagan)",
        "nameEn": "1 kg (katta lagan)",
        "price": 165000,
        "weight": "katta lagan"
      }
    ]
  },
  {
    "id": "shashlik-lyulya",
    "category": "addons",
    "badge": "Cho‘g‘da",
    "emoji": "🍢",
    "calories": 0,
    "prepTime": "15–25 min",
    "image": "https://d1w7312wesee68.cloudfront.net/YXofZ-V71aEk76Lhbpwvqh1h3Tt49u6Q5WzpuxvfBJA/resize%3Afit%3A1080%3A1080/plain/s3%3A/toasttab/restaurants/restaurant-231204000000000000/menu/items/6/item-1200000001067997926_1734756882.jpg",
    "name": {
      "uz": "Qo‘y go‘shti Qiyma Lyulya Kabob (2 six)",
      "ru": "Люля-кебаб из баранины (2 шампура)",
      "en": "Lamb Lyulya Kebab (2 skewers)"
    },
    "nameUz": "Qo‘y go‘shti Qiyma Lyulya Kabob (2 six)",
    "nameRu": "Люля-кебаб из баранины (2 шампура)",
    "nameEn": "Lamb Lyulya Kebab (2 skewers)",
    "description": {
      "uz": "Mayin qiymalangan qo‘y go‘shti, ziravorlar va dumba bilan cho‘g‘da pishirilgan haqiqiy kabob, sirkali piyoz bilan.",
      "ru": "Mayin qiymalangan qo‘y go‘shti, ziravorlar va dumba bilan cho‘g‘da pishirilgan haqiqiy kabob, sirkali piyoz bilan.",
      "en": "Mayin qiymalangan qo‘y go‘shti, ziravorlar va dumba bilan cho‘g‘da pishirilgan haqiqiy kabob, sirkali piyoz bilan."
    },
    "descUz": "Mayin qiymalangan qo‘y go‘shti, ziravorlar va dumba bilan cho‘g‘da pishirilgan haqiqiy kabob, sirkali piyoz bilan.",
    "descRu": "Mayin qiymalangan qo‘y go‘shti, ziravorlar va dumba bilan cho‘g‘da pishirilgan haqiqiy kabob, sirkali piyoz bilan.",
    "descEn": "Mayin qiymalangan qo‘y go‘shti, ziravorlar va dumba bilan cho‘g‘da pishirilgan haqiqiy kabob, sirkali piyoz bilan.",
    "price": 28000,
    "oldPrice": null,
    "weight": "1 dona",
    "variants": null
  },
  {
    "id": "shashlik-kuskovoy",
    "category": "addons",
    "badge": "Tavsiya",
    "emoji": "🍢",
    "calories": 0,
    "prepTime": "15–25 min",
    "image": "https://abc-tourism.uz/storage/food/shashlik.jpg",
    "name": {
      "uz": "Mol go‘shti Kuskovoy Shashlik (2 six)",
      "ru": "Шашлык кусковой из говядины (2 шампура)",
      "en": "Beef Shish Kebab (2 skewers)"
    },
    "nameUz": "Mol go‘shti Kuskovoy Shashlik (2 six)",
    "nameRu": "Шашлык кусковой из говядины (2 шампура)",
    "nameEn": "Beef Shish Kebab (2 skewers)",
    "description": {
      "uz": "Yumshoq mol go‘shti bo‘laklari, dumba va an’anaviy sharq ziravorlari bilan marinadlangan issiq kabob.",
      "ru": "Yumshoq mol go‘shti bo‘laklari, dumba va an’anaviy sharq ziravorlari bilan marinadlangan issiq kabob.",
      "en": "Yumshoq mol go‘shti bo‘laklari, dumba va an’anaviy sharq ziravorlari bilan marinadlangan issiq kabob."
    },
    "descUz": "Yumshoq mol go‘shti bo‘laklari, dumba va an’anaviy sharq ziravorlari bilan marinadlangan issiq kabob.",
    "descRu": "Yumshoq mol go‘shti bo‘laklari, dumba va an’anaviy sharq ziravorlari bilan marinadlangan issiq kabob.",
    "descEn": "Yumshoq mol go‘shti bo‘laklari, dumba va an’anaviy sharq ziravorlari bilan marinadlangan issiq kabob.",
    "price": 32000,
    "oldPrice": null,
    "weight": "1 dona",
    "variants": null
  },
  {
    "id": "shashlik-toyuq",
    "category": "addons",
    "badge": "",
    "emoji": "🍢",
    "calories": 0,
    "prepTime": "15–25 min",
    "image": "https://optom.app/3853-large_default/tovuq-qirqma-shashli.jpg",
    "name": {
      "uz": "Tovuq filesi tandir shashlik (2 six)",
      "ru": "Шашлык из куриного филе (2 шампура)",
      "en": "Chicken Fillet Skewers (2 skewers)"
    },
    "nameUz": "Tovuq filesi tandir shashlik (2 six)",
    "nameRu": "Шашлык из куриного филе (2 шампура)",
    "nameEn": "Chicken Fillet Skewers (2 skewers)",
    "description": {
      "uz": "Mayin tovuq filesi, xushbo‘y o‘tlar va limon sousida marinadlangan parhez kabob.",
      "ru": "Mayin tovuq filesi, xushbo‘y o‘tlar va limon sousida marinadlangan parhez kabob.",
      "en": "Mayin tovuq filesi, xushbo‘y o‘tlar va limon sousida marinadlangan parhez kabob."
    },
    "descUz": "Mayin tovuq filesi, xushbo‘y o‘tlar va limon sousida marinadlangan parhez kabob.",
    "descRu": "Mayin tovuq filesi, xushbo‘y o‘tlar va limon sousida marinadlangan parhez kabob.",
    "descEn": "Mayin tovuq filesi, xushbo‘y o‘tlar va limon sousida marinadlangan parhez kabob.",
    "price": 24000,
    "oldPrice": null,
    "weight": "1 dona",
    "variants": null
  },
  {
    "id": "somsa-gosht",
    "category": "addons",
    "badge": "Issiq",
    "emoji": "🥟",
    "calories": 0,
    "prepTime": "15–25 min",
    "image": "https://aerotur.travel/storage/app/media/uploaded-files/1775484103103.png",
    "name": {
      "uz": "Tandir Go‘shtli Somsa (2 dona)",
      "ru": "Тандырная самса с мясом (2 шт)",
      "en": "Tandoor Meat Somsa (2 pcs)"
    },
    "nameUz": "Tandir Go‘shtli Somsa (2 dona)",
    "nameRu": "Тандырная самса с мясом (2 шт)",
    "nameEn": "Tandoor Meat Somsa (2 pcs)",
    "description": {
      "uz": "Qarsildoq qatlama xamir, maydalangan mol go‘shti, dumba va piyoz bilan tandirda pishirilgan issiq somsa.",
      "ru": "Qarsildoq qatlama xamir, maydalangan mol go‘shti, dumba va piyoz bilan tandirda pishirilgan issiq somsa.",
      "en": "Qarsildoq qatlama xamir, maydalangan mol go‘shti, dumba va piyoz bilan tandirda pishirilgan issiq somsa."
    },
    "descUz": "Qarsildoq qatlama xamir, maydalangan mol go‘shti, dumba va piyoz bilan tandirda pishirilgan issiq somsa.",
    "descRu": "Qarsildoq qatlama xamir, maydalangan mol go‘shti, dumba va piyoz bilan tandirda pishirilgan issiq somsa.",
    "descEn": "Qarsildoq qatlama xamir, maydalangan mol go‘shti, dumba va piyoz bilan tandirda pishirilgan issiq somsa.",
    "price": 18000,
    "oldPrice": null,
    "weight": "1 dona",
    "variants": null
  },
  {
    "id": "manti-gosht",
    "category": "addons",
    "badge": "Tavsiya",
    "emoji": "🥟",
    "calories": 0,
    "prepTime": "15–25 min",
    "image": "https://www.lot.com/content/dam/lot/lot-com/destination-photos/foodie-travel/uzbekistan-cuisine-manti-1343353461.coreimg.jpg/1750145469567/uzbekistan-cuisine-manti-1343353461.jpg",
    "name": {
      "uz": "Bug‘da pishgan Milliy Manti (4 dona)",
      "ru": "Манты по-ташкентски на пару (4 шт)",
      "en": "Steamed Traditional Manti (4 pcs)"
    },
    "nameUz": "Bug‘da pishgan Milliy Manti (4 dona)",
    "nameRu": "Манты по-ташкентски на пару (4 шт)",
    "nameEn": "Steamed Traditional Manti (4 pcs)",
    "description": {
      "uz": "Yupqa xamir, shirali mayin go‘sht va piyoz, mantiqasqonda bug‘da pishirilgan, sariyog‘ va qizil qalampir bilan.",
      "ru": "Yupqa xamir, shirali mayin go‘sht va piyoz, mantiqasqonda bug‘da pishirilgan, sariyog‘ va qizil qalampir bilan.",
      "en": "Yupqa xamir, shirali mayin go‘sht va piyoz, mantiqasqonda bug‘da pishirilgan, sariyog‘ va qizil qalampir bilan."
    },
    "descUz": "Yupqa xamir, shirali mayin go‘sht va piyoz, mantiqasqonda bug‘da pishirilgan, sariyog‘ va qizil qalampir bilan.",
    "descRu": "Yupqa xamir, shirali mayin go‘sht va piyoz, mantiqasqonda bug‘da pishirilgan, sariyog‘ va qizil qalampir bilan.",
    "descEn": "Yupqa xamir, shirali mayin go‘sht va piyoz, mantiqasqonda bug‘da pishirilgan, sariyog‘ va qizil qalampir bilan.",
    "price": 26000,
    "oldPrice": null,
    "weight": "1 dona",
    "variants": null
  },
  {
    "id": "salad-achichuk",
    "category": "salads",
    "badge": "Oshga xos",
    "emoji": "🥗",
    "calories": 0,
    "prepTime": "15–25 min",
    "image": "https://images.unsplash.com/photo-1592417817098-8f3d69109853?auto=format&fit=crop&w=800&q=80",
    "name": {
      "uz": "Achichuk (Shakarob - Osh salati)",
      "ru": "Ачичук (Шакароб к плову)",
      "en": "Achichuk Tomato Salad"
    },
    "nameUz": "Achichuk (Shakarob - Osh salati)",
    "nameRu": "Ачичук (Шакароб к плову)",
    "nameEn": "Achichuk Tomato Salad",
    "description": {
      "uz": "Yupqa to‘g‘ralgan qizil Yuzobod pomidori, shirin piyoz va mayda rayhon bilan tayyorlangan tansiq osh salati.",
      "ru": "Yupqa to‘g‘ralgan qizil Yuzobod pomidori, shirin piyoz va mayda rayhon bilan tayyorlangan tansiq osh salati.",
      "en": "Yupqa to‘g‘ralgan qizil Yuzobod pomidori, shirin piyoz va mayda rayhon bilan tayyorlangan tansiq osh salati."
    },
    "descUz": "Yupqa to‘g‘ralgan qizil Yuzobod pomidori, shirin piyoz va mayda rayhon bilan tayyorlangan tansiq osh salati.",
    "descRu": "Yupqa to‘g‘ralgan qizil Yuzobod pomidori, shirin piyoz va mayda rayhon bilan tayyorlangan tansiq osh salati.",
    "descEn": "Yupqa to‘g‘ralgan qizil Yuzobod pomidori, shirin piyoz va mayda rayhon bilan tayyorlangan tansiq osh salati.",
    "price": 10000,
    "oldPrice": null,
    "weight": "1 dona",
    "variants": null
  },
  {
    "id": "salad-fransuz",
    "category": "salads",
    "badge": "",
    "emoji": "🥗",
    "calories": 0,
    "prepTime": "15–25 min",
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "name": {
      "uz": "Fransuzcha qarsildoq salat",
      "ru": "Французский хрустящий салат",
      "en": "French Crispy Salad"
    },
    "nameUz": "Fransuzcha qarsildoq salat",
    "nameRu": "Французский хрустящий салат",
    "nameEn": "French Crispy Salad",
    "description": {
      "uz": "Qizil lavlagi, yangi sabzi, qarsildoq pay kartoshka va mayonez bilan bayramona salat.",
      "ru": "Qizil lavlagi, yangi sabzi, qarsildoq pay kartoshka va mayonez bilan bayramona salat.",
      "en": "Qizil lavlagi, yangi sabzi, qarsildoq pay kartoshka va mayonez bilan bayramona salat."
    },
    "descUz": "Qizil lavlagi, yangi sabzi, qarsildoq pay kartoshka va mayonez bilan bayramona salat.",
    "descRu": "Qizil lavlagi, yangi sabzi, qarsildoq pay kartoshka va mayonez bilan bayramona salat.",
    "descEn": "Qizil lavlagi, yangi sabzi, qarsildoq pay kartoshka va mayonez bilan bayramona salat.",
    "price": 16000,
    "oldPrice": null,
    "weight": "1 dona",
    "variants": null
  },
  {
    "id": "salad-tuzlama",
    "category": "salads",
    "badge": "",
    "emoji": "🥗",
    "calories": 0,
    "prepTime": "15–25 min",
    "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
    "name": {
      "uz": "Chiroqchi uslubidagi Tuzlamalar",
      "ru": "Ассорти солений по-чирокчински",
      "en": "Chiroqchi Pickled Assortment"
    },
    "nameUz": "Chiroqchi uslubidagi Tuzlamalar",
    "nameRu": "Ассорти солений по-чирокчински",
    "nameEn": "Chiroqchi Pickled Assortment",
    "description": {
      "uz": "Qashqadaryo usulida tuzlangan qarsildoq bodring, pomidor, sarimsoqpiyoz va achchiq qalampir tuzlamalari.",
      "ru": "Qashqadaryo usulida tuzlangan qarsildoq bodring, pomidor, sarimsoqpiyoz va achchiq qalampir tuzlamalari.",
      "en": "Qashqadaryo usulida tuzlangan qarsildoq bodring, pomidor, sarimsoqpiyoz va achchiq qalampir tuzlamalari."
    },
    "descUz": "Qashqadaryo usulida tuzlangan qarsildoq bodring, pomidor, sarimsoqpiyoz va achchiq qalampir tuzlamalari.",
    "descRu": "Qashqadaryo usulida tuzlangan qarsildoq bodring, pomidor, sarimsoqpiyoz va achchiq qalampir tuzlamalari.",
    "descEn": "Qashqadaryo usulida tuzlangan qarsildoq bodring, pomidor, sarimsoqpiyoz va achchiq qalampir tuzlamalari.",
    "price": 13000,
    "oldPrice": null,
    "weight": "1 dona",
    "variants": null
  },
  {
    "id": "addon-egg",
    "category": "addons",
    "badge": "",
    "emoji": "🥩",
    "calories": 0,
    "prepTime": "15–25 min",
    "image": "https://images.unsplash.com/photo-1518569656558-1f25e69d93d7?auto=format&fit=crop&w=800&q=80",
    "name": {
      "uz": "Bedana tuxumlari (4 dona)",
      "ru": "Перепелиные яйца (4 шт)",
      "en": "Quail Eggs (4 pcs)"
    },
    "nameUz": "Bedana tuxumlari (4 dona)",
    "nameRu": "Перепелиные яйца (4 шт)",
    "nameEn": "Quail Eggs (4 pcs)",
    "description": {
      "uz": "Yangi qaynatilgan parhez bedana tuxumlari oshga qo‘shimcha lazzat beradi.",
      "ru": "Yangi qaynatilgan parhez bedana tuxumlari oshga qo‘shimcha lazzat beradi.",
      "en": "Yangi qaynatilgan parhez bedana tuxumlari oshga qo‘shimcha lazzat beradi."
    },
    "descUz": "Yangi qaynatilgan parhez bedana tuxumlari oshga qo‘shimcha lazzat beradi.",
    "descRu": "Yangi qaynatilgan parhez bedana tuxumlari oshga qo‘shimcha lazzat beradi.",
    "descEn": "Yangi qaynatilgan parhez bedana tuxumlari oshga qo‘shimcha lazzat beradi.",
    "price": 7000,
    "oldPrice": null,
    "weight": "1 dona",
    "variants": null
  },
  {
    "id": "bread-patir",
    "category": "addons",
    "badge": "Issiq",
    "emoji": "🫓",
    "calories": 0,
    "prepTime": "15–25 min",
    "image": "/images/patir-flatbread.jpg",
    "name": {
      "uz": "Issiq Tandir Patir Non",
      "ru": "Горячий тандырный патыр",
      "en": "Hot Tandoor Patir Flatbread"
    },
    "nameUz": "Issiq Tandir Patir Non",
    "nameRu": "Горячий тандырный патыр",
    "nameEn": "Hot Tandoor Patir Flatbread",
    "description": {
      "uz": "Sariyog‘ va sutda qorilgan, qarsildoq chetli, kunjutli tansiq tandir patiri.",
      "ru": "Sariyog‘ va sutda qorilgan, qarsildoq chetli, kunjutli tansiq tandir patiri.",
      "en": "Sariyog‘ va sutda qorilgan, qarsildoq chetli, kunjutli tansiq tandir patiri."
    },
    "descUz": "Sariyog‘ va sutda qorilgan, qarsildoq chetli, kunjutli tansiq tandir patiri.",
    "descRu": "Sariyog‘ va sutda qorilgan, qarsildoq chetli, kunjutli tansiq tandir patiri.",
    "descEn": "Sariyog‘ va sutda qorilgan, qarsildoq chetli, kunjutli tansiq tandir patiri.",
    "price": 7000,
    "oldPrice": null,
    "weight": "1 dona",
    "variants": null
  },
  {
    "id": "bread-lepyoshka",
    "category": "addons",
    "badge": "",
    "emoji": "🫓",
    "calories": 0,
    "prepTime": "15–25 min",
    "image": "https://png.klev.club/uploads/posts/2024-06/png-klev-club-889z-p-patir-non-png-12.png",
    "name": {
      "uz": "Toshkent Kunjutli Tandir Non",
      "ru": "Ташкентская кунжутная лепешка",
      "en": "Tashkent Sesame Flatbread"
    },
    "nameUz": "Toshkent Kunjutli Tandir Non",
    "nameRu": "Ташкентская кунжутная лепешка",
    "nameEn": "Tashkent Sesame Flatbread",
    "description": {
      "uz": "An’anaviy xushbo‘y, yumshoq va mayin tandir obi nonvoy noni.",
      "ru": "An’anaviy xushbo‘y, yumshoq va mayin tandir obi nonvoy noni.",
      "en": "An’anaviy xushbo‘y, yumshoq va mayin tandir obi nonvoy noni."
    },
    "descUz": "An’anaviy xushbo‘y, yumshoq va mayin tandir obi nonvoy noni.",
    "descRu": "An’anaviy xushbo‘y, yumshoq va mayin tandir obi nonvoy noni.",
    "descEn": "An’anaviy xushbo‘y, yumshoq va mayin tandir obi nonvoy noni.",
    "price": 5000,
    "oldPrice": null,
    "weight": "1 dona",
    "variants": null
  },
  {
    "id": "sauce-laziz",
    "category": "addons",
    "badge": "Achchiq",
    "emoji": "🥣",
    "calories": 0,
    "prepTime": "15–25 min",
    "image": "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=800&q=80",
    "name": {
      "uz": "Laziz achchiq qizil osh sousi",
      "ru": "Острый красный соус Лазиз",
      "en": "Spicy Red Laziz Sauce"
    },
    "nameUz": "Laziz achchiq qizil osh sousi",
    "nameRu": "Острый красный соус Лазиз",
    "nameEn": "Spicy Red Laziz Sauce",
    "description": {
      "uz": "Qizil pomidor, sarimsoq, zira va qalampir bilan tayyorlangan maxsus osh sousi.",
      "ru": "Qizil pomidor, sarimsoq, zira va qalampir bilan tayyorlangan maxsus osh sousi.",
      "en": "Qizil pomidor, sarimsoq, zira va qalampir bilan tayyorlangan maxsus osh sousi."
    },
    "descUz": "Qizil pomidor, sarimsoq, zira va qalampir bilan tayyorlangan maxsus osh sousi.",
    "descRu": "Qizil pomidor, sarimsoq, zira va qalampir bilan tayyorlangan maxsus osh sousi.",
    "descEn": "Qizil pomidor, sarimsoq, zira va qalampir bilan tayyorlangan maxsus osh sousi.",
    "price": 5000,
    "oldPrice": null,
    "weight": "1 dona",
    "variants": null
  },
  {
    "id": "sauce-sarimsoq",
    "category": "addons",
    "badge": "",
    "emoji": "🥣",
    "calories": 0,
    "prepTime": "15–25 min",
    "image": "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=800&q=80",
    "name": {
      "uz": "Sarimsoqli oq sous",
      "ru": "Чесночный белый соус",
      "en": "Garlic White Sauce"
    },
    "nameUz": "Sarimsoqli oq sous",
    "nameRu": "Чесночный белый соус",
    "nameEn": "Garlic White Sauce",
    "description": {
      "uz": "Qatiq, suzma, ko‘katlar va mayin sarimsoqli xushbo‘y sous.",
      "ru": "Qatiq, suzma, ko‘katlar va mayin sarimsoqli xushbo‘y sous.",
      "en": "Qatiq, suzma, ko‘katlar va mayin sarimsoqli xushbo‘y sous."
    },
    "descUz": "Qatiq, suzma, ko‘katlar va mayin sarimsoqli xushbo‘y sous.",
    "descRu": "Qatiq, suzma, ko‘katlar va mayin sarimsoqli xushbo‘y sous.",
    "descEn": "Qatiq, suzma, ko‘katlar va mayin sarimsoqli xushbo‘y sous.",
    "price": 5000,
    "oldPrice": null,
    "weight": "1 dona",
    "variants": null
  },
  {
    "id": "drink-fanta-1l",
    "category": "drinks",
    "badge": "",
    "emoji": "🥤",
    "calories": 0,
    "prepTime": "15–25 min",
    "image": "https://linella.md/public/products/845c94d4cd10da342998b9362daea14f.webp",
    "name": {
      "uz": "Fanta Orange (1.0L)",
      "ru": "Fanta Апельсин (1.0Л)",
      "en": "Fanta Orange (1.0L)"
    },
    "nameUz": "Fanta Orange (1.0L)",
    "nameRu": "Fanta Апельсин (1.0Л)",
    "nameEn": "Fanta Orange (1.0L)",
    "description": {
      "uz": "Apelsin ta’miga ega tetiklantiruvchi gazlangan muzdek ichimlik.",
      "ru": "Apelsin ta’miga ega tetiklantiruvchi gazlangan muzdek ichimlik.",
      "en": "Apelsin ta’miga ega tetiklantiruvchi gazlangan muzdek ichimlik."
    },
    "descUz": "Apelsin ta’miga ega tetiklantiruvchi gazlangan muzdek ichimlik.",
    "descRu": "Apelsin ta’miga ega tetiklantiruvchi gazlangan muzdek ichimlik.",
    "descEn": "Apelsin ta’miga ega tetiklantiruvchi gazlangan muzdek ichimlik.",
    "price": 15000,
    "oldPrice": null,
    "weight": "1 dona",
    "variants": null
  },
  {
    "id": "drink-sprite-1l",
    "category": "drinks",
    "badge": "",
    "emoji": "🥤",
    "calories": 0,
    "prepTime": "15–25 min",
    "image": "https://cdn.freshful.ro/media/cache/sylius_shop_product_original/36/a3/400f978bfbba2268fbac1e9391e4.jpg",
    "name": {
      "uz": "Sprite Lemon-Lime (1.0L)",
      "ru": "Sprite Лимон-Лайм (1.0Л)",
      "en": "Sprite Lemon-Lime (1.0L)"
    },
    "nameUz": "Sprite Lemon-Lime (1.0L)",
    "nameRu": "Sprite Лимон-Лайм (1.0Л)",
    "nameEn": "Sprite Lemon-Lime (1.0L)",
    "description": {
      "uz": "Limon va laym ta’miga boy salqinlashtiruvchi muzdek yashil shisha ichimlik.",
      "ru": "Limon va laym ta’miga boy salqinlashtiruvchi muzdek yashil shisha ichimlik.",
      "en": "Limon va laym ta’miga boy salqinlashtiruvchi muzdek yashil shisha ichimlik."
    },
    "descUz": "Limon va laym ta’miga boy salqinlashtiruvchi muzdek yashil shisha ichimlik.",
    "descRu": "Limon va laym ta’miga boy salqinlashtiruvchi muzdek yashil shisha ichimlik.",
    "descEn": "Limon va laym ta’miga boy salqinlashtiruvchi muzdek yashil shisha ichimlik.",
    "price": 15000,
    "oldPrice": null,
    "weight": "1 dona",
    "variants": null
  },
  {
    "id": "drink-hydrolife",
    "category": "drinks",
    "badge": "",
    "emoji": "🥤",
    "calories": 0,
    "prepTime": "15–25 min",
    "image": "https://cdn-vergleich.welt.de/v2/comparison-tables/vio-still.jpg?d=1000x1000&fill=true&q=70",
    "name": {
      "uz": "Hydrolife Gazsiz Tabiiy Suv (0.5L)",
      "ru": "Hydrolife Вода без газа (0.5Л)",
      "en": "Hydrolife Still Water (0.5L)"
    },
    "nameUz": "Hydrolife Gazsiz Tabiiy Suv (0.5L)",
    "nameRu": "Hydrolife Вода без газа (0.5Л)",
    "nameEn": "Hydrolife Still Water (0.5L)",
    "description": {
      "uz": "Tog‘ buloqlaridan olingan toza gazsiz ichimlik suvi (tikka shishada).",
      "ru": "Tog‘ buloqlaridan olingan toza gazsiz ichimlik suvi (tikka shishada).",
      "en": "Tog‘ buloqlaridan olingan toza gazsiz ichimlik suvi (tikka shishada)."
    },
    "descUz": "Tog‘ buloqlaridan olingan toza gazsiz ichimlik suvi (tikka shishada).",
    "descRu": "Tog‘ buloqlaridan olingan toza gazsiz ichimlik suvi (tikka shishada).",
    "descEn": "Tog‘ buloqlaridan olingan toza gazsiz ichimlik suvi (tikka shishada).",
    "price": 5000,
    "oldPrice": null,
    "weight": "1 dona",
    "variants": null
  },
  {
    "id": "drink-chortoq",
    "category": "drinks",
    "badge": "Tavsiya",
    "emoji": "🥤",
    "calories": 0,
    "prepTime": "15–25 min",
    "image": "https://yastatic.net/avatars/get-grocery-goods/2783132/b0005520-ee43-4078-a1ee-39970d6be5fa/500x500-orig",
    "name": {
      "uz": "Chortoq Gazlangan Mineral Suv (0.5L)",
      "ru": "Чорток Минеральная вода (0.5Л)",
      "en": "Chortoq Mineral Sparkling Water (0.5L)"
    },
    "nameUz": "Chortoq Gazlangan Mineral Suv (0.5L)",
    "nameRu": "Чорток Минеральная вода (0.5Л)",
    "nameEn": "Chortoq Mineral Sparkling Water (0.5L)",
    "description": {
      "uz": "Shifobaxsh Chortoq tog‘larining gazlangan mineral suvi (shisha idishda).",
      "ru": "Shifobaxsh Chortoq tog‘larining gazlangan mineral suvi (shisha idishda).",
      "en": "Shifobaxsh Chortoq tog‘larining gazlangan mineral suvi (shisha idishda)."
    },
    "descUz": "Shifobaxsh Chortoq tog‘larining gazlangan mineral suvi (shisha idishda).",
    "descRu": "Shifobaxsh Chortoq tog‘larining gazlangan mineral suvi (shisha idishda).",
    "descEn": "Shifobaxsh Chortoq tog‘larining gazlangan mineral suvi (shisha idishda).",
    "price": 8000,
    "oldPrice": null,
    "weight": "1 dona",
    "variants": null
  },
  {
    "id": "drink-mors",
    "category": "drinks",
    "badge": "Uy sharbati",
    "emoji": "🥤",
    "calories": 0,
    "prepTime": "15–25 min",
    "image": "https://avatars.mds.yandex.net/get-vertis-journal/4469561/8489fa53-725b-41f8-926c-54fac9fe311c.jpg/1600x1600",
    "name": {
      "uz": "Tabiiy Qulupnayli Sovuq Mors (1.0L)",
      "ru": "Натуральный ягодный морс (1.0Л)",
      "en": "Natural Berry Cold Mors (1.0L)"
    },
    "nameUz": "Tabiiy Qulupnayli Sovuq Mors (1.0L)",
    "nameRu": "Натуральный ягодный морс (1.0Л)",
    "nameEn": "Natural Berry Cold Mors (1.0L)",
    "description": {
      "uz": "Tabiiy mevalardan uy usulida qaynatilgan xushbo‘y vitaminli sovuq sharbat.",
      "ru": "Tabiiy mevalardan uy usulida qaynatilgan xushbo‘y vitaminli sovuq sharbat.",
      "en": "Tabiiy mevalardan uy usulida qaynatilgan xushbo‘y vitaminli sovuq sharbat."
    },
    "descUz": "Tabiiy mevalardan uy usulida qaynatilgan xushbo‘y vitaminli sovuq sharbat.",
    "descRu": "Tabiiy mevalardan uy usulida qaynatilgan xushbo‘y vitaminli sovuq sharbat.",
    "descEn": "Tabiiy mevalardan uy usulida qaynatilgan xushbo‘y vitaminli sovuq sharbat.",
    "price": 16000,
    "oldPrice": null,
    "weight": "1 dona",
    "variants": null
  },
  {
    "id": "tea-green",
    "category": "drinks",
    "badge": "Klassik",
    "emoji": "☕",
    "calories": 0,
    "prepTime": "15–25 min",
    "image": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80",
    "name": {
      "uz": "Limonli Ko‘k Choy novvot bilan (Choynak)",
      "ru": "Зеленый чай с лимоном и навватом (Чайник)",
      "en": "Green Tea with Lemon & Sugar (Teapot)"
    },
    "nameUz": "Limonli Ko‘k Choy novvot bilan (Choynak)",
    "nameRu": "Зеленый чай с лимоном и навватом (Чайник)",
    "nameEn": "Green Tea with Lemon & Sugar (Teapot)",
    "description": {
      "uz": "95-sonli Samarqand ko‘k choyi, yangi limon bo‘laklari va tabiiy novvot bilan.",
      "ru": "95-sonli Samarqand ko‘k choyi, yangi limon bo‘laklari va tabiiy novvot bilan.",
      "en": "95-sonli Samarqand ko‘k choyi, yangi limon bo‘laklari va tabiiy novvot bilan."
    },
    "descUz": "95-sonli Samarqand ko‘k choyi, yangi limon bo‘laklari va tabiiy novvot bilan.",
    "descRu": "95-sonli Samarqand ko‘k choyi, yangi limon bo‘laklari va tabiiy novvot bilan.",
    "descEn": "95-sonli Samarqand ko‘k choyi, yangi limon bo‘laklari va tabiiy novvot bilan.",
    "price": 12000,
    "oldPrice": null,
    "weight": "1 dona",
    "variants": null
  },
  {
    "id": "tea-black",
    "category": "drinks",
    "badge": "",
    "emoji": "☕",
    "calories": 0,
    "prepTime": "15–25 min",
    "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
    "name": {
      "uz": "Zanjabilli Qora Choy (Choynak)",
      "ru": "Черный чай с имбирем (Чайник)",
      "en": "Ginger Spiced Black Tea (Teapot)"
    },
    "nameUz": "Zanjabilli Qora Choy (Choynak)",
    "nameRu": "Черный чай с имбирем (Чайник)",
    "nameEn": "Ginger Spiced Black Tea (Teapot)",
    "description": {
      "uz": "Hind bargli qora choyi, zanjabil ildizi va tog‘ kiyiko‘ti bilan damlangan choy.",
      "ru": "Hind bargli qora choyi, zanjabil ildizi va tog‘ kiyiko‘ti bilan damlangan choy.",
      "en": "Hind bargli qora choyi, zanjabil ildizi va tog‘ kiyiko‘ti bilan damlangan choy."
    },
    "descUz": "Hind bargli qora choyi, zanjabil ildizi va tog‘ kiyiko‘ti bilan damlangan choy.",
    "descRu": "Hind bargli qora choyi, zanjabil ildizi va tog‘ kiyiko‘ti bilan damlangan choy.",
    "descEn": "Hind bargli qora choyi, zanjabil ildizi va tog‘ kiyiko‘ti bilan damlangan choy.",
    "price": 12000,
    "oldPrice": null,
    "weight": "1 dona",
    "variants": null
  },
  {
    "id": "dessert-paxlava",
    "category": "addons",
    "badge": "Shirinlik",
    "emoji": "🍯",
    "calories": 0,
    "prepTime": "15–25 min",
    "image": "https://c.cdnmp.net/428334074/content/Imagini%20Blog/1baclava.png",
    "name": {
      "uz": "Asalli Yong‘oqli Paxlava (2 bo‘lak)",
      "ru": "Медовая пахлава с орехами (2 шт)",
      "en": "Honey Walnut Baklava (2 pcs)"
    },
    "nameUz": "Asalli Yong‘oqli Paxlava (2 bo‘lak)",
    "nameRu": "Медовая пахлава с орехами (2 шт)",
    "nameEn": "Honey Walnut Baklava (2 pcs)",
    "description": {
      "uz": "Mayin qatlama xamir, tog‘ asal va maydalangan yong‘oq bilan to‘yintirilgan sharqona shirinlik.",
      "ru": "Mayin qatlama xamir, tog‘ asal va maydalangan yong‘oq bilan to‘yintirilgan sharqona shirinlik.",
      "en": "Mayin qatlama xamir, tog‘ asal va maydalangan yong‘oq bilan to‘yintirilgan sharqona shirinlik."
    },
    "descUz": "Mayin qatlama xamir, tog‘ asal va maydalangan yong‘oq bilan to‘yintirilgan sharqona shirinlik.",
    "descRu": "Mayin qatlama xamir, tog‘ asal va maydalangan yong‘oq bilan to‘yintirilgan sharqona shirinlik.",
    "descEn": "Mayin qatlama xamir, tog‘ asal va maydalangan yong‘oq bilan to‘yintirilgan sharqona shirinlik.",
    "price": 16000,
    "oldPrice": null,
    "weight": "1 dona",
    "variants": null
  },
  {
    "id": "dessert-chakchak",
    "category": "addons",
    "badge": "",
    "emoji": "🍯",
    "calories": 0,
    "prepTime": "15–25 min",
    "image": "https://tashkentoasis.com/images/cuisine/dulce_chakchak_Tashkent_Oasis_Restaurante_Uzbeko_Valencia.jpg",
    "name": {
      "uz": "Qarsildoq Toshkent Chak-Chak",
      "ru": "Хрустящий ташкентский Чак-Чак",
      "en": "Crispy Tashkent Chak-Chak"
    },
    "nameUz": "Qarsildoq Toshkent Chak-Chak",
    "nameRu": "Хрустящий ташкентский Чак-Чак",
    "nameEn": "Crispy Tashkent Chak-Chak",
    "description": {
      "uz": "Asalli qiyomga botirilgan, kunjut va yong‘oq sepilgan tansiq milliy desert.",
      "ru": "Asalli qiyomga botirilgan, kunjut va yong‘oq sepilgan tansiq milliy desert.",
      "en": "Asalli qiyomga botirilgan, kunjut va yong‘oq sepilgan tansiq milliy desert."
    },
    "descUz": "Asalli qiyomga botirilgan, kunjut va yong‘oq sepilgan tansiq milliy desert.",
    "descRu": "Asalli qiyomga botirilgan, kunjut va yong‘oq sepilgan tansiq milliy desert.",
    "descEn": "Asalli qiyomga botirilgan, kunjut va yong‘oq sepilgan tansiq milliy desert.",
    "price": 15000,
    "oldPrice": null,
    "weight": "1 dona",
    "variants": null
  }
];
