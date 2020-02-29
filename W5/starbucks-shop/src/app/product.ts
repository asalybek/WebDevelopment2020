export interface Product{
    name:string;
    category_id:number;
    id:number;
    description:string;
    nutritioninfo:string;
    image:string;
    url:string;
}
export const allProducts:Product[]=[
    {name:"Irish Cream Cold Brew",
        category_id:1,
        id:111,
        description:"Starbucks® Cold Brew with Irish cream syrup, topped with vanilla sweet cream cold foam and a strike of cocoa powder.",
        nutritioninfo:`
        Serving Size 16 fl oz
        Calories_____________________________________ 200                 
        Total Fat____________________________________ 12 g                
                 Saturated Fat___________________________ 8 g             
                 Trans Fat_______________________________ 0 g   
        Cholesterol__________________________________ 40 mg  
        Sodium______________________________________ 0 mg 
        Total Carbohydrates__________________________ 20 g
                 Dietary Fiber____________________________ 0 g  
                 Sugars_________________________________ 19 g  
        Protein______________________________________ 2 g   
        Caffeine_____________________________________ 185 mg`,
        image:"https://globalassets.starbucks.com/assets/3abfc4b26c144afd9dd4eec001f0f252.jpg?impolicy=1by1_wide_1242",
        url:"https://www.starbucks.com/menu/product/2123139/iced?parent=%2Fdrinks%2Fcold-coffees%2Fcold-brews"
    },
    {   name:"Starbucks® Cold Brew Coffee with Milk",
        category_id:1,
        id:112,
        description:"Handcrafted in small batches daily, slow-steeped in cool water for 20 hours, without touching heat and finished with a splash of milk—Starbucks® Cold Brew is made from our custom blend of beans grown to steep long and cold for a super-smooth flavor.",
        nutritioninfo:`
        Serving Size 16 fl oz
        Calories_____________________________________ 35
        Total Fat____________________________________ 1.5 g
                Saturated Fat___________________________ 1 g
                Trans Fat_______________________________ 0 g
        Cholesterol__________________________________ 5 mg
        Sodium______________________________________40 mg
        Total Carbohydrates__________________________ 3 g
                Dietary Fiber_____________________________ 0 g
                Sugars__________________________________ 3 g
        Protein______________________________________ 2 g
        Caffeine_____________________________________ 205 mg`,
        image:"https://globalassets.starbucks.com/assets/de574746527d4960a7d838f271e3491c.jpg?impolicy=1by1_wide_1242",
        url:"https://www.starbucks.com/menu/product/2121343/iced?parent=%2Fdrinks%2Fcold-coffees%2Fcold-brews"
    },
    {   name:"Iced Coffee with Milk",
        category_id:1,
        id:113,
        description:"Freshly brewed Starbucks® Iced Coffee Blend with milk served chilled and sweetened over ice. An absolutely, seriously, refreshingly lift to any day.",
        nutritioninfo:`
        Serving Size 16 fl oz
        Calories_____________________________________ 110
        Total Fat____________________________________ 1.5 g
                Saturated Fat___________________________ 1 g
                Trans Fat_______________________________ 0 g
        Cholesterol__________________________________ 5 mg
        Sodium_____________________________________ 40 mg
        Total Carbohydrates__________________________ 23 g
                Dietary Fiber_____________________________ 0 g
                Sugars__________________________________ 23 g
        Protein______________________________________ 2 g
        Caffeine_____________________________________ 125 mg`,
        image:"https://globalassets.starbucks.com/assets/cc9b573f8c1b43cd89cdab08ae5b9ec7.jpg?impolicy=1by1_wide_1242",
        url:"https://www.starbucks.com/menu/product/482/iced?parent=%2Fdrinks%2Fcold-coffees%2Ficed-coffees"
    },
    {   name:"Iced Espresso",
        category_id:1,
        id:114,
        description:"Our smooth signature Espresso Roast over ice boasts rich, robust flavor and caramelly sweetness. A recipe of perfection at the heart of every handcrafted espresso we serve.",
        nutritioninfo:`
        Serving Size 1.5 fl oz
        Calories_____________________________________ 10
        Total Fat____________________________________ 0 g
                Saturated Fat___________________________ 0 g
                Trans Fat_______________________________ 0 g
        Cholesterol__________________________________0 mg
        Sodium_____________________________________ 0 mg
        Total Carbohydrates__________________________ 2 g
                Dietary Fiber_____________________________ 0 g
                Sugars__________________________________ 0 g
        Protein______________________________________ 1 g
        Caffeine_____________________________________ 150 mg`,
        image:"https://globalassets.starbucks.com/assets/6a320073ec4b47e7bb9e6eb9e5e74e96.jpg?impolicy=1by1_wide_1242",
        url:"https://www.starbucks.com/menu/product/410/iced?parent=%2Fdrinks%2Fcold-coffees%2Ficed-espresso-shots"
    },
    {   name:"Iced Coconutmilk Latte",
        category_id:1,
        id:115,
        description:"Coconutmilk and our signature espresso are intentionally paired over ice and topped with cascara sugar to create one serious latte.",
        nutritioninfo:`
        Serving Size 16 fl oz
        Calories_____________________________________ 90
        Total Fat____________________________________ 5 g
                Saturated Fat___________________________ 4.5 g
                Trans Fat_______________________________ 0 g
        Cholesterol__________________________________ 0 mg
        Sodium_____________________________________ 115 mg
        Total Carbohydrates__________________________ 10 g
                Dietary Fiber_____________________________ 0 g
                Sugars__________________________________ 8 g
        Protein______________________________________ 1 g
        Caffeine_____________________________________ 150 mg`,
        image:"https://globalassets.starbucks.com/assets/85ed6da0c69e456cb0d28dae8dd42fa0.jpg?impolicy=1by1_wide_1242",
        url:"https://www.starbucks.com/menu/product/2123162/iced?parent=%2Fdrinks%2Fcold-coffees%2Ficed-lattes"
    },
    {   name:"Iced Starbucks® Blonde Chestnut Praline Latte",
        category_id:1,
        id:116,
        description:"Starbucks® Blonde Espresso Roast, iced milk and flavors of caramelized chestnuts and spices. Topped with whipped cream and spiced praline crumbs.",
        nutritioninfo:`
        Serving Size 16 fl oz
        Calories_____________________________________ 300
        Total Fat____________________________________ 15 g
                Saturated Fat___________________________ 10 g
                Trans Fat_______________________________ 0.5 g
        Cholesterol__________________________________ 50 mg
        Sodium_____________________________________ 120 mg
        Total Carbohydrates__________________________ 32 g
                Dietary Fiber_____________________________ 0 g
                Sugars__________________________________ 31 g
        Protein______________________________________ 9 g
        Caffeine_____________________________________ 170 mg`,
        image:"https://globalassets.starbucks.com/assets/fd84271bdc4d4f29929d5e80166eab82.jpg?impolicy=1by1_wide_1242",
        url:"https://www.starbucks.com/menu/product/2122896/iced?parent=%2Fdrinks%2Fcold-coffees%2Ficed-lattes"
    },
    {   name:"Iced Starbucks® Blonde Cocoa Cloud Macchiato* (Contains eggs)",
        category_id:1,
        id:117,
        description:"Our Cloud Macchiato: light and airy with layers of fluffy foam*, cascading Starbucks® Blonde espresso, flavored toffee nut syrup, our signature caramel crosshatch and a mocha drizzle swirl, served over ice. A take on a whole new cool way to love your macchiato.",
        nutritioninfo:`
        Serving Size 16 fl oz
        Calories_____________________________________ 180
        Total Fat____________________________________ 4.5 g
                Saturated Fat___________________________ 3 g
                Trans Fat_______________________________ 0 g
        Cholesterol__________________________________ 15 mg
        Sodium_____________________________________ 140 mg
        Total Carbohydrates__________________________ 30 g
                Dietary Fiber_____________________________ 0 g
                Sugars__________________________________ 25 g
        Protein______________________________________ 6 g
        Caffeine_____________________________________ 170 mg`,
        image:"https://globalassets.starbucks.com/assets/808f9ef590cb465ebfd24abc7f6c773e.jpg?impolicy=1by1_wide_1242",
        url:"https://www.starbucks.com/menu/product/2123060/iced?parent=%2Fdrinks%2Fcold-coffees%2Ficed-macchiatos"
    },
    {   name:"Iced Starbucks® Blonde Peppermint White Chocolate Mocha",
        category_id:1,
        id:118,
        description:"Starbucks® Blonde Espresso Roast meets white chocolate sauce, peppermint-flavored syrup, milk and ice. Topped with sweetened whipped cream and dark chocolate curls.",
        nutritioninfo:`
        Serving Size 16 fl oz
        Calories_____________________________________ 460
        Total Fat____________________________________ 19 g
                Saturated Fat____________________________ 13 g
                Trans Fat________________________________ 0.5 g
        Cholesterol__________________________________ 50 mg
        Sodium_____________________________________ 190 mg
        Total Carbohydrates__________________________ 62 g
        Dietary Fiber_________________________________ 0 g
                Sugars__________________________________ 60 g
                Protein__________________________________ 10 g
        Caffeine_____________________________________ 170 mg`,
        image:"https://globalassets.starbucks.com/assets/d20be938bc014801b2699457c7372cf0.jpg?impolicy=1by1_wide_1242",
        url:"https://www.starbucks.com/menu/product/2122926/iced?parent=%2Fdrinks%2Fcold-coffees%2Ficed-mochas"
    },
    {   name:"Iced Caffè Mocha",
        category_id:1,
        id:119,
        description:"Our rich, full-bodied espresso combined with bittersweet mocha sauce, milk and ice, then topped with sweetened whipped cream. The classic iced coffee drink that always sweetly satisfies.",
        nutritioninfo:`
        Serving Size 16 fl oz
        Calories_____________________________________ 350
        Total Fat____________________________________ 17 g
                Saturated Fat___________________________ 11 g
                Trans Fat_______________________________ 0 g
        Cholesterol__________________________________ 55 mg
        Sodium_____________________________________ 100 mg
        Total Carbohydrates__________________________ 39 g
                Dietary Fiber_____________________________ 4 g
                Sugars__________________________________ 30 g
        Protein______________________________________ 10 g
        Caffeine_____________________________________ 175 mg`,
        image:"https://globalassets.starbucks.com/assets/7313a28bd5174ef5bd68f6c1d159797a.jpg?impolicy=1by1_wide_1242",
        url:"https://www.starbucks.com/menu/product/408/iced?parent=%2Fdrinks%2Fcold-coffees%2Ficed-mochas"
    },
    {   name:"Iced Caramel Cloud Macchiato* (Contains eggs)",
        category_id:1,
        id:120,
        description:"Our Cloud Macchiato is light and airy with layers of fluffy foam*, cascading espresso, vanilla-flavored syrup and a drizzle of caramel served over ice. Experience a whole new cool way to love your iced macchiato.",
        nutritioninfo:`
        Serving Size 16 fl oz
        Calories_____________________________________ 190
        Total Fat____________________________________ 4 g
                Saturated Fat___________________________ 2.5 g
                Trans Fat_______________________________ 0 g
        Cholesterol__________________________________ 15 mg
        Sodium______________________________________115 mg
        Total Carbohydrates__________________________ 32 g
                Dietary Fiber_____________________________ 0 g
                Sugars__________________________________ 28 g
        Protein______________________________________ 5 g
        Caffeine_____________________________________ 150 mg`,
        image:"https://globalassets.starbucks.com/assets/9777c1c7847440f3aab15f4488529a61.jpg?impolicy=1by1_wide_1242",
        url:"https://www.starbucks.com/menu/product/2123006/iced?parent=%2Fdrinks%2Fcold-coffees%2Ficed-macchiatos"
    },
    {   name:"Starbucks® Blonde Cappuccino",
        category_id:2,
        id:211,
        description:"Our seriously smooth and subtly sweet Starbucks® Blonde Espresso lies in wait under a smoothed and stretched layer of thick foam. This cappuccino offers a luxurious texture and velvety, frothy foam with a crisp, cool undercurrent.",
        nutritioninfo:`
        Serving Size 16 fl oz
        Calories_____________________________________ 120
        Total Fat____________________________________ 4 g
                Saturated Fat___________________________ 2 g
                Trans Fat_______________________________ 0 g
        Cholesterol__________________________________15 mg
        Sodium_____________________________________ 100 mg
        Total Carbohydrates__________________________ 12 g
                Dietary Fiber_____________________________ 0 g
                Sugars__________________________________10 g
        Protein______________________________________ 8 g
        Caffeine_____________________________________ 170 mg`,
        image:"https://globalassets.starbucks.com/assets/5c515339667943ce84dc56effdf5fc1b.jpg?impolicy=1by1_wide_1242",
        url:"https://www.starbucks.com/menu/product/2122561/hot?parent=%2Fdrinks%2Fhot-coffees%2Fcappuccinos"
    },
    {   name:"Espresso",
        category_id:2,
        id:212,
        description:"Our smooth signature Espresso Roast with rich flavor and caramelly sweetness is at the very heart of everything we do.",
        nutritioninfo:`Serving Size 1.5 fl oz
        Calories 10
        Total Fat 0 g
            Saturated Fat 0 g
            Trans Fat 0 g
        Cholesterol 0 mg
        Sodium 0 mg
        Total Carbohydrates 2 g
            Dietary Fiber 0 g
            Sugars 0 g
        Protein 1 g
        Caffeine 150 mg`,
        image:"https://globalassets.starbucks.com/assets/ec519dd5642c41629194192cce582135.jpg?impolicy=1by1_wide_1242",
        url:"https://www.starbucks.com/menu/product/410/hot?parent=%2Fdrinks%2Fhot-coffees%2Fespresso-shots"
    },
    {   name:"Espresso con Panna",
        category_id:2,
        id:213,
        description:"Espresso meets a dollop of whipped cream to enhance the rich and caramelly flavors of a straight-up shot.",
        nutritioninfo:`Serving Size 1.5 fl oz
        Calories 35
        Total Fat 2.5 g
            Saturated Fat 1.5 g
            Trans Fat 0 g
        Cholesterol 10 mg
        Sodium 0 mg
        Total Carbohydrates 3 g
            Dietary Fiber 0 g
            Sugars 1 g
        Protein 1 g
        Caffeine 150 mg`,
        image:"https://globalassets.starbucks.com/assets/e9330b18ae524e69bdcbe97460d6f5bb.jpg?impolicy=1by1_wide_1242",
        url:"https://www.starbucks.com/menu/product/411/hot?parent=%2Fdrinks%2Fhot-coffees%2Fespresso-shots"
    },
    {   name:"Caramel Brulee Latte",
        category_id:2,
        id:214,
        description:"Espresso, steamed milk and rich caramel brulée sauce, topped with whipped cream and caramel brulée topping.",
        nutritioninfo:`Serving Size 16 fl oz
        Calories 450
        Total Fat 13 g
            Saturated Fat 8 g
            Trans Fat 0 g
        Cholesterol 45 mg
        Sodium 270 mg
        Total Carbohydrates 70 g
            Dietary Fiber 0 g
            Sugars 47 g
        Protein 13 g
        Caffeine 150 mg`,
        image:"https://globalassets.starbucks.com/assets/1039a0883ad548b69c5f93b9f76dbae2.jpg?impolicy=1by1_wide_1242",
        url:"https://www.starbucks.com/menu/product/517/hot?parent=%2Fdrinks%2Fhot-coffees%2Flattes"
    },
    {   name:"Starbucks Reserve® Latte",
        category_id:2,
        id:215,
        description:"Small-lot Starbucks Reserve® espresso balanced with steamed milk and a light layer of foam forms a perfectly handcrafted latte.",
        nutritioninfo:`Serving Size 16 fl oz
        Calories 230
        Total Fat 12 g
            Saturated Fat 7 g
            Trans Fat 0 g
        Cholesterol 35 mg
        Sodium 160 mg
        Total Carbohydrates 19 g
            Dietary Fiber 0 g
            Sugars 18 g
        Protein 12 g
        Caffeine 135 mg`,
        image:"https://globalassets.starbucks.com/assets/55083489399e435e81cf41d899051a5a.jpg?impolicy=1by1_wide_1242",
        url:"https://www.starbucks.com/menu/product/2122614/hot?parent=%2Fdrinks%2Fhot-coffees%2Flattes"
    },
    {   name:"Cocoa Cloud Macchiato* (Contains eggs)",
        category_id:2,
        id:216,
        description:"Our Cloud Macchiato: light and airy with layers of fluffy foam*, cascading espresso, flavored toffee nut syrup, our signature caramel crosshatch and a mocha drizzle swirl. A take on a whole new way to love your macchiato.",
        nutritioninfo:`Serving Size 16 fl oz
        Calories 300
        Total Fat 7 g
            Saturated Fat 4.5 g
            Trans Fat 0 g
        Cholesterol 30 mg
        Sodium 270 mg
        Total Carbohydrates 46 g
            Dietary Fiber 0 g
            Sugars 41 g
        Protein 12 g
        Caffeine 150 mg`,
        image:"https://globalassets.starbucks.com/assets/c2a647e72ace4d2da35b1d7b56b05d12.jpg?impolicy=1by1_wide_1242",
        url:"https://www.starbucks.com/menu/product/2123059/hot?parent=%2Fdrinks%2Fhot-coffees%2Fmacchiatos"
    },
    {   name:"Coconutmilk Latte",
        category_id:2,
        id:217,
        description:"Coconutmilk and our signature espresso are intentionally paired and topped with cascara sugar to create one serious latte.",
        nutritioninfo:`Serving Size 16 fl oz
        Calories 130
        Total Fat 8 g
            Saturated Fat 7 g
            Trans Fat 0 g
        Cholesterol 0 mg
        Sodium 160 mg
        Total Carbohydrates 14 g
            Dietary Fiber 1 g
            Sugars 12 g
        Protein 1 g
        Caffeine 150 mg`,
        image:"https://globalassets.starbucks.com/assets/9eb90cb6981d42f5859376c4be666060.jpg?impolicy=1by1_wide_1242",
        url:"https://www.starbucks.com/menu/product/2123162/hot?parent=%2Fdrinks%2Fhot-coffees%2Flattes"
    },
    {   name:"Almondmilk Honey Flat White",
        category_id:2,
        id:218,
        description:"This flat white intentionally pairs almondmilk and signature espresso with a hint of honey, making a perfect amount of creamy, nutty sweetness.",
        nutritioninfo:`Serving Size 16 fl oz
        Calories 120
        Total Fat 4 g
            Saturated Fat 0 g
            Trans Fat 0 g
        Cholesterol 0 mg
        Sodium 100 mg
        Total Carbohydrates 22 g
            Dietary Fiber 1 g
            Sugars 18 g
        Protein 2 g
        Caffeine 150 mg`,
        image:"https://globalassets.starbucks.com/assets/77801559b72b469583f4d484adc1bfa7.jpg?impolicy=1by1_wide_1242",
        url:"https://www.starbucks.com/menu/product/2123161/hot?parent=%2Fdrinks%2Fhot-coffees%2Fflat-whites"
    },
    {   name:"White Chocolate Mocha",
        category_id:2,
        id:219,
        description:"Our signature espresso meets white chocolate sauce and steamed milk, and then is finished off with sweetened whipped cream to create this supreme white chocolate delight.",
        nutritioninfo:`Serving Size 16 fl oz
        Calories 120
        Total Fat 4 g
            Saturated Fat 0 g
            Trans Fat 0 g
        Cholesterol 0 mg
        Sodium 100 mg
        Total Carbohydrates 22 g
            Dietary Fiber 1 g
            Sugars 18 g
        Protein 2 g
        Caffeine 150 mg`,
        image:"https://globalassets.starbucks.com/assets/4b621e63f6ba4c19a8618055284eca8d.jpg?impolicy=1by1_wide_1242",
        url:"https://www.starbucks.com/menu/product/420/hot?parent=%2Fdrinks%2Fhot-coffees%2Fmochas"
    },
    {   name:"Caffè Americano",
        category_id:2,
        id:220,
        description:"Espresso shots topped with hot water create a light layer of crema culminating in this wonderfully rich cup with depth and nuance. Pro Tip: For an additional boost, ask your barista to try this with an extra shot.",
        nutritioninfo:`Serving Size 16 fl oz
        Calories 15
        Total Fat 0 g
            Saturated Fat 0 g
            Trans Fat 0 g
        Cholesterol 0 mg
        Sodium 10 mg
        Total Carbohydrates 2 g
            Dietary Fiber 0 g
            Sugars 0 g
        Protein 1 g
        Caffeine 225 mg`,
        image:"https://globalassets.starbucks.com/assets/f12bc8af498d45ed92c5d6f1dac64062.jpg?impolicy=1by1_wide_1242",
        url:"https://www.starbucks.com/menu/product/406/hot?parent=%2Fdrinks%2Fhot-coffees%2Famericanos"
    },
    {   name:"White Chocolate Cookie Crème",
        category_id:3,
        id:311,
        description:"White Chocolate Cookie Crème—a chocolate cookie coated in white chocolate and sprinkled with pink, red and white hearts—a colorful ode to love.",
        nutritioninfo:`Serving Size 48 g
        Calories 240
        Total Fat 13 g
            Saturated Fat 5 g
            Trans Fat 0 g
        Cholesterol 5 mg
        Sodium 135 mg
        Total Carbohydrates 31 g
            Dietary Fiber 1 g
            Sugars 22 g
        Protein 2 g`,
        image:"https://globalassets.starbucks.com/assets/d54bee5ca8e54c2ab1e552632859cd34.jpg?impolicy=1by1_wide_1242",
        url:"https://www.starbucks.com/menu/product/2123151/single?parent=/food/snacks-and-sweets/biscotti-and-cookies"
    },
    {   name:"Dipped Madeleines",
        category_id:3,
        id:312,
        description:"Rich, buttery and moist with lightly crisped edges to create a delicious and soft madeleine dipped in chocolaty coating.",
        nutritioninfo:`Serving Size 63 g
        Calories 290
        Total Fat 15 g
            Saturated Fat 9 g
            Trans Fat 0 g
        Cholesterol 70 mg
        Sodium 0 mg
        Total Carbohydrates 36 g
            Dietary Fiber 1 g
            Sugars 25 g
        Protein 3 g`,
        image:"https://globalassets.starbucks.com/assets/374230e32c03466e9f1696551d843f3b.jpg?impolicy=1by1_wide_1242",
        url:"https://www.starbucks.com/menu/product/2121959/single?parent=/food/snacks-and-sweets/biscotti-and-cookies"
    },
    {   name:"Madeleines",
        category_id:3,
        id:313,
        description:"Made with quality ingredients, these rich and buttery French cakes are soft and moist in the center and baked with lightly crisped edges.",
        nutritioninfo:`Serving Size 51 g
        Calories 220
        Total Fat 11 g
            Saturated Fat 7 g
            Trans Fat 0 g
        Cholesterol 65 mg
        Sodium 120 mg
        Total Carbohydrates 28 g
            Dietary Fiber 0 g
            Sugars 17 g
        Protein 3 g`,
        image:"https://globalassets.starbucks.com/assets/5fb12ed3ec7d4ccabfa16ffdda80ad39.jpg?impolicy=1by1_wide_1242",
        url:"https://www.starbucks.com/menu/product/2121740/single?parent=/food/snacks-and-sweets/biscotti-and-cookies"
    },
    {   name:"Vanilla Biscotti with Almonds",
        category_id:3,
        id:314,
        description:"These crispy, delicious vanilla cookies topped with crunchy almonds are love at first bite. Perfect for dipping into your favorite coffee or espresso beverage.",
        nutritioninfo:`Serving Size 42 g
        Calories 200
        Total Fat 9 g
            Saturated Fat 2.5 g
            Trans Fat 0 g
        Cholesterol 30 mg
        Sodium 0 mg
        Total Carbohydrates 25 g
            Dietary Fiber 2 g
            Sugars 10 g
        Protein 4 g`,
        image:"https://globalassets.starbucks.com/assets/dc92f4a2b14f463da2a4fa5fd6a003da.jpg?impolicy=1by1_wide_1242",
        url:"https://www.starbucks.com/menu/product/2121411/single?parent=/food/snacks-and-sweets/biscotti-and-cookies"
    },
    {   name:"Shortbread Cookies",
        category_id:3,
        id:315,
        description:"Our two-pack of butter shortbread cookies made with quality ingredients create a melt-in-your-mouth texture in every bite.",
        nutritioninfo:`Serving Size 33 g
        Calories 170
        Total Fat 9 g
            Saturated Fat 6 g
            Trans Fat 0 g
        Cholesterol 25 mg
        Sodium 0 mg
        Total Carbohydrates 21 g
            Dietary Fiber 1 g
            Sugars 8 g
        Protein 2 g`,
        image:"https://globalassets.starbucks.com/assets/c5d9a97775544dfb87e1c4283c0e70fd.jpg?impolicy=1by1_wide_1242",
        url:"https://www.starbucks.com/menu/product/2121410/single?parent=/food/snacks-and-sweets/biscotti-and-cookies"
    },
    {   name:"Dark Chocolate Grahams (2-Pack)",
        category_id:3,
        id:316,
        description:"Two crunchy graham cookies covered with dark chocolate and topped with a milk chocolate drizzle. The perfect snack to complement your favorite latte or coffee drink.",
        nutritioninfo:`Serving Size 28 g
        Calories 140
        Total Fat 8 g
            Saturated Fat 4.5 g
            Trans Fat 0 g
        Cholesterol 0 mg
        Sodium 30 mg
        Total Carbohydrates 18 g
            Dietary Fiber 2 g
            Sugars 11 g
        Protein 2 g`,
        image:"https://globalassets.starbucks.com/assets/2aca82d35f2e4064b69864da8d17fc09.jpg?impolicy=1by1_wide_1242",
        url:"https://www.starbucks.com/menu/product/2121812/single?parent=/food/snacks-and-sweets/biscotti-and-cookies"
    },
    {   name:"Rip van Wafels – Honey & Oats",
        category_id:3,
        id:317,
        description:"A blend of vanilla, honey and oats come together to create a uniquely textured cookie—crispy and chewy goodness.",
        nutritioninfo:`Serving Size 33 g
        Calories 130
        Total Fat 6 g
            Saturated Fat 2.5 g
            Trans Fat 0 g
        Cholesterol 5 mg
        Sodium 65 mg
        Total Carbohydrates 19 g
            Dietary Fiber 0 g
            Sugars 8 g
        Protein 1 g`,
        image:"https://globalassets.starbucks.com/assets/88eb640cf0844a0a82db9fbfb8a679d7.jpg?impolicy=1by1_wide_1242",
        url:"https://www.starbucks.com/menu/product/2121699/single?parent=/food/snacks-and-sweets/biscotti-and-cookies"
    },
    {   name:"Justin’s®registered: Dark Chocolate Peanut Butter Cups",
        category_id:3,
        id:318,
        description:"What happens when the best-tasting peanut butter in the world is delicately placed into the highest-quality, dark chocolate available? Peanut-butter cup perfection.",
        nutritioninfo:`Serving Size 40 g
        Calories 210
        Total Fat 14 g
            Saturated Fat 7 g
            Trans Fat 0 g
        Cholesterol 0 mg
        Sodium 120 mg
        Total Carbohydrates 21 g
            Dietary Fiber 1 g
            Sugars 17 g
        Protein 4 g`,
        image:"https://globalassets.starbucks.com/assets/806e28baa7f5412a8300774ac4eda5ae.jpg?impolicy=1by1_wide_1242",
        url:"https://www.starbucks.com/menu/product/2121686/single?parent=/food/snacks-and-sweets/chocolates-and-candy"
    },
    {   name:"Salted Almond Chocolate Bites",
        category_id:3,
        id:319,
        description:"Our espresso coffee beans (the finest and most sought-out in the world) get even better when drenched in a layer of luscious dark chocolate.",
        nutritioninfo:``,
        image:"https://globalassets.starbucks.com/assets/b1a36f6f12aa4f52ad69268fe021a9b6.jpg?impolicy=1by1_wide_1242",
        url:"https://www.starbucks.com/menu/product/2122119/single?parent=/food/snacks-and-sweets/chocolates-and-candy"
    },
    {   name:"Butter Gourmet Popcorn",
        category_id:3,
        id:320,
        description:"Perfectly buttery with just the right amount of salt, this fluffy snack favorite makes movie theaters everywhere jealous.",
        nutritioninfo:`Serving Size 28 g
        Calories 140
        Total Fat 5 g
            Saturated Fat 1 g
            Trans Fat 0 g
        Cholesterol 0 mg
        Sodium 180 mg
        Total Carbohydrates 20 g
            Dietary Fiber 4 g
            Sugars 1 g
        Protein 2 g`,
        image:"https://globalassets.starbucks.com/assets/a0dcda7a47844b72b62cb8d80f123a15.jpg?impolicy=1by1_wide_1242",
        url:"https://www.starbucks.com/menu/product/2121689/single?parent=/food/snacks-and-sweets/popcorn-and-chips"
    },
    {   name:"Dragon Drink",
        category_id:4,
        id:411,
        description:"This tropical-inspired pick-me-up—crafted with a refreshing combination of sweet mango and dragonfruit flavors—is handshaken with creamy coconutmilk, ice and a scoop of real diced dragonfruit. . Contains caffeine.",
        nutritioninfo:`
        Serving Size 16 fl oz
        Calories_____________________________________ 130                 
        Total Fat____________________________________ 3 g                
                 Saturated Fat___________________________ 2.5 g             
                 Trans Fat_______________________________ 0 g   
        Cholesterol__________________________________ 0 mg  
        Sodium_____________________________________ 60 mg 
        Total Carbohydrates__________________________ 26 g
                 Dietary Fiber____________________________ 0 g  
                 Sugars_________________________________ 23 g  
        Protein______________________________________ 1 g   
        Caffeine_____________________________________ 45 mg`,
        image:"https://globalassets.starbucks.com/assets/7fe2123728f844849ae4f9ea01473468.jpg?impolicy=1by1_wide_1242",
        url:"https://www.starbucks.com/menu/product/2122756/iced?parent=/drinks/cold-drinks/starbucks-refreshers"
    },
    {   name:"Mango Dragonfruit Lemonade Starbucks Refreshers Beverage",
        category_id:4,
        id:412,
        description:"This tropical-inspired pick-me-up—crafted with a clever combination of vibrant lemonade, sweet mango and refreshing dragonfruit flavors—is hand-shaken with ice and a scoop of real diced dragonfruit. Contains caffeine. ",
        nutritioninfo:`
        Serving Size 16 fl oz
        Calories_____________________________________ 140                 
        Total Fat____________________________________ 0 g                
                 Saturated Fat___________________________ 0 g             
                 Trans Fat_______________________________ 0 g   
        Cholesterol__________________________________ 0 mg  
        Sodium_____________________________________ 15 mg 
        Total Carbohydrates__________________________ 33 g
                 Dietary Fiber____________________________ 1 g  
                 Sugars_________________________________ 30 g  
        Protein______________________________________ 1 g   
        Caffeine_____________________________________ 45 mg`,
        image:"https://globalassets.starbucks.com/assets/cde81286f5ac4009ba466d8cd9083eb6.jpg?impolicy=1by1_wide_1242",
        url:"https://www.starbucks.com/menu/product/2122726/iced?parent=/drinks/cold-drinks/starbucks-refreshers"
    },
    {   name:"Strawberry Açaí Lemonade Starbucks Refreshers Iced Beverage",
        category_id:4,
        id:413,
        description:"Sweet strawberry flavors, passion fruit and açaí notes balanced with the delightful zing of lemonade, caffeine from green coffee extract and served over ice. This is the utimate pick-me-up your afternoon is calling for. ",
        nutritioninfo:`Serving Size 16 fl oz
        Calories 140
        Total Fat 0 g
              Saturated Fat 0 g
              Trans Fat 0 g
        Cholesterol 0 mg
        Sodium 15 mg
        Total Carbohydrates 35 g
              Dietary Fiber 1 g
              Sugars 32 g
        Protein 0 g                                                                
        Caffeine 45 mg`,
        image:"https://globalassets.starbucks.com/assets/68fa5aa7da804c09899b05172ea53dc1.jpg?impolicy=1by1_wide_1242",
        url:"https://www.starbucks.com/menu/product/2122677/iced?parent=/drinks/cold-drinks/starbucks-refreshers"
    },
    {   name:"Pink Drink",
        category_id:4,
        id:414,
        description:"Our crisp, Strawberry Açaí Refreshers:registered: Beverage, with its accents of passion fruit, is combined with creamy coconutmilk. A fruity and refreshing sip of spring, no matter what time of year. ",
        nutritioninfo:`Serving Size 16 fl oz
        Calories 140
        Total Fat 2.5 g
            Saturated Fat 2.5 g
            Trans Fat 0 g
        Cholesterol 0 mg
        Sodium 65 mg
        Total Carbohydrates 27 g
            Dietary Fiber 2 g
            Sugars 24 g
        Protein 1 g
        Caffeine 45 mg`,
        image:"https://globalassets.starbucks.com/assets/3fee4c21a1cb4ad294e32c727aec0cdd.jpg?impolicy=1by1_wide_1242",
        url:"https://www.starbucks.com/menu/product/2122275/iced?parent=/drinks/cold-drinks/starbucks-refreshers    "
    },
    {   name:"Very Berry Hibiscus Starbucks Refreshers",
        category_id:4,
        id:415,
        description:"Real fruit juice and whole blackberries shaken with Green Coffee Extract for a boost of natural energy, served over ice.",
        nutritioninfo:`Serving Size 16 fl oz
        Calories 70
        Total Fat 0 g
            Saturated Fat 2.5 g
            Trans Fat 0 g
        Cholesterol 0 mg
        Sodium 15 mg
        Total Carbohydrates 17 g
            Dietary Fiber 1 g
            Sugars 14 g
        Protein 1 g
        Caffeine 45 mg`,
        image:"https://globalassets.starbucks.com/assets/03e0fa75324b4d00aeca3b2d865cb830.jpg?impolicy=1by1_wide_1242",
        url:"https://www.starbucks.com/menu/product/968/iced?parent=/drinks/cold-drinks/starbucks-refreshers"
    },
    {   name:"Violet Drink",
        category_id:4,
        id:416,
        description:"The sweet blackberries and tart hibiscus flavor of our Very Berry Hibiscus Starbucks Refreshers:registered: beverage swirl together with creamy coconutmilk and ice, creating refreshing (and violet-hued!) sips.",
        nutritioninfo:`Serving Size 16 fl oz
        Calories 110
        Total Fat 3 g
            Saturated Fat 2.5 g
            Trans Fat 0 g
        Cholesterol 0 mg
        Sodium 0 mg
        Total Carbohydrates 22 g
            Dietary Fiber 1 g
            Sugars 19 g
        Protein 0 g
        Caffeine 45 mg`,
        image:"https://globalassets.starbucks.com/assets/cec54d35a8f84706b86c3a2ae839fa7e.jpg?impolicy=1by1_wide_1242",
        url:"https://www.starbucks.com/menu/product/2122375/iced?parent=/drinks/cold-drinks/starbucks-refreshers"
    },
    {   name:"Strawberry Açaí Starbucks Refreshers Iced Beverage",
        category_id:4,
        id:417,
        description:"Sweet strawberry flavors accented by passion fruit and açaí notes, caffeinated with green coffee extract—a welcoming sweet spot of refreshement.",
        nutritioninfo:`Serving Size 16 fl oz
        Calories 90
        Total Fat 0 g
            Saturated Fat 0 g
            Trans Fat 0 g
        Cholesterol 0 mg
        Sodium 15 mg
        Total Carbohydrates 23 g
            Dietary Fiber 1 g
            Sugars 20 g
        Protein 0 g
        Caffeine 45 mg`,
        image:"https://globalassets.starbucks.com/assets/17827bf308ad464a9ef8bf4030ca9b72.jpg?impolicy=1by1_wide_1242",
        url:"https://www.starbucks.com/menu/product/2121342/iced?parent=/drinks/cold-drinks/starbucks-refreshers"
    },
    {   name:"Lemonade",
        category_id:4,
        id:418,
        description:"Awaken your taste buds with the zing of refreshing lemonade—this tangy, fresh sip puts a little zip in your step.",
        nutritioninfo:`Serving Size 16 fl oz
        Calories 120
        Total Fat 0 g
            Saturated Fat 0 g
            Trans Fat 0 g
        Cholesterol 0 mg
        Sodium 10 mg
        Total Carbohydrates 28 g
            Dietary Fiber 0 g
            Sugars 27 g
        Protein 0 g
        Caffeine 0 mg`,
        image:"https://globalassets.starbucks.com/assets/22a5a22059ca47cda81b02d3c5794dee.jpg?impolicy=1by1_wide_1242",
        url:"https://www.starbucks.com/menu/product/873068639/iced?parent=/drinks/cold-drinks/juice"
    },
    {   name:"Blended Strawberry Lemonade",
        category_id:4,
        id:419,
        description:"Awaken your taste buds with the zing of refreshing lemonade infused with a hint of delicious strawberry flavor and blended with ice. A light, fresh beverage that puts a little zip in your step.",
        nutritioninfo:`Serving Size 16 fl oz
        Calories 190
        Total Fat 0 g
            Saturated Fat 0 g
            Trans Fat 0 g
        Cholesterol 0 mg
        Sodium 200 mg
        Total Carbohydrates 46 g
            Dietary Fiber 0 g
            Sugars 45 g
        Protein 0 g
        Caffeine 0 mg`,
        image:"https://globalassets.starbucks.com/assets/72c38233d0ad4436b83fd4d2e6580a57.jpg?impolicy=1by1_wide_1242",
        url:"https://www.starbucks.com/menu/product/873068641/iced?parent=/drinks/cold-drinks/juice"
    },
    {   name:"Milk",
        category_id:4,
        id:420,
        description:"Skim, 2%, soy, almond, or coconutmilk served chilled or over ice. Simply refreshing.",
        nutritioninfo:`Serving Size 16 fl oz
        Calories 260
        Total Fat 10 g
            Saturated Fat 5 g
            Trans Fat 0 g
        Cholesterol 40 mg
        Sodium 250 mg
        Total Carbohydrates 25 g
            Dietary Fiber 0 g
            Sugars 25 g
        Protein 17 g
        Caffeine 0 mg`,
        image:"https://globalassets.starbucks.com/assets/296fe6da884c4919948a7d84fb128dbe.jpg?impolicy=1by1_wide_1242",
        url:"https://www.starbucks.com/menu/product/490/iced?parent=/drinks/cold-drinks/milk"
    },
]