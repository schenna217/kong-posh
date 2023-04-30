const Food =[
{
    id: '1',
    name: 'Channa Sabzi',
    description: 'Channa Sabzi, also known as Chana Masala or Chole, is a popular vegetarian dish originating from the Indian subcontinent. It is made using chickpeas, or channa, that are cooked in a flavorful tomato-based gravy. The dish is known for its bold and robust flavors, with a blend of spices such as cumin, coriander, and garam masala that give it a distinct taste profile. The chickpeas are typically cooked until tender, then simmered in the gravy, often made with onions, tomatoes, and a variety of spices. Channa Sabzi is often garnished with fresh cilantro and served with naan bread, roti, or rice.',
    price: '$6.99',
    quantity: 0,
    image: require('../assets/images/Channa_Sabzi.png')
},
{
    id: '2',
    name: 'Chicken Changezi',
    description: 'Chicken Changezi is a popular North Indian dish known for its rich and flavorful preparation. Chicken Changezi typically features succulent pieces of chicken that are cooked in a luscious and aromatic gravy. The dish is known for its distinct flavors, achieved by using a blend of spices such as cinnamon, cardamom, cloves, and cumin, which give it a warm and fragrant profile. The chicken is often marinated in a yogurt-based marinade with spices and then cooked slowly in the gravy, allowing the flavors to meld together. The gravy of Chicken Changezi is often rich and creamy, with the use of ingredients such as tomatoes, onions, cashews, and cream, which lend it a luxurious texture. The dish is typically garnished with fried onions, fresh cilantro, and sometimes nuts, adding a crunchy texture and enhancing the presentation.',
    price: '$18.99',
    quantity: 0,
    image: require('../assets/images/Chicken_Changezi.png')
},
{
    id: '3',
    name: 'Dum Aloo',
    description: 'Kashmiri Dum Aloo is a popular vegetarian dish from the Kashmiri cuisine of India. It is made using baby potatoes that are cooked in a rich and flavorful gravy. The dish is known for its unique blend of spices, including Kashmiri red chili powder, fennel seeds, ginger, and cinnamon, which lend a distinct flavor profile. The potatoes are first deep-fried until golden and crispy, then simmered in a thick tomato-based gravy, often infused with yogurt or cream to give it a creamy texture. The dish is typically slow-cooked on low heat or "dum" style, allowing the flavors to meld together and create a deliciously aromatic dish. Kashmiri Dum Aloo is often garnished with fresh cilantro or chopped nuts, adding a burst of color and crunch to the dish. It is typically served with naan bread or rice, and is loved for its rich and satisfying taste that is perfect for special occasions or gatherings.',
    price: '$15.99',
    quantity: 0,
    image: require('../assets/images/Dum_Aloo.png')
},
{
    id: '4',
    name: 'Dum Biryani',
    description: 'Chicken Biryani is a popular and aromatic rice dish that originated in the Indian subcontinent. It typically consists of succulent pieces of chicken marinated in a blend of spices, layered with fragrant basmati rice, and cooked to perfection. The dish is known for its rich flavors and complex aroma, created by the use of spices such as cardamom, cinnamon, cloves, and saffron. Chicken Biryani is often garnished with fried onions, fresh cilantro, and mint leaves, adding freshness to the dish. It is typically served with yogurt raita or a side of spicy curry, and is loved by food enthusiasts for its delicious taste and unique combination of flavors.',
    price: '$28.50',
    quantity: 0,
    image: require('../assets/images/Dum_Biryani.png')
},
{
    id: '5',
    name: 'Flat Roth',
    description: 'Kashmiri Flat Roth, also known as Kashmiri Roth, is a traditional sweet bread from the Kashmiri cuisine, popular in India’s Kashmir valley. It is a small, round, flat bread that is usually made with all-purpose flour, clarified butter (ghee), and sugar, and flavored with cardamom, saffron, and sometimes, fennel seeds.The dough for Kashmiri Flat Roth is prepared by combining the flour, ghee, and sugar, and then flavored with cardamom and saffron. The dough is then divided into small balls, which are flattened into discs and usually decorated with a pattern using a fork or the back of a spoon. The discs are then fried in ghee or oil until they turn golden brown and crispy. The fried bread is soaked in a sugar syrup flavored with cardamom and saffron, giving it a sweet and aromatic taste.',
    price: '$9.99',
    quantity: 0,
    image: require('../assets/images/Flat_Roth.png')
},
{
    id: '6',
    name: 'Gobi & Paneer Ki Sabzi',
    description: 'Gobi and Paneer ki Sabzi is a delicious and wholesome Indian dish made with cauliflower (gobi) and paneer (cottage cheese) cooked together in a spiced tomato-based gravy. The cauliflower and paneer are cooked until tender and coated in a flavorful masala made with a blend of spices like cumin, coriander, turmeric, and red chili powder. The dish is typically finished with a garnish of fresh coriander leaves and served hot with roti (Indian flatbread) or rice. Its a popular vegetarian dish that is loved for its rich and creamy flavors, making it a comforting and satisfying option for lunch or dinner.',
    price: '$10.99',
    quantity: 0,
    image: require('../assets/images/Gobi_Panner_Ki_Sabzi.png')
},
// {
//     id: '7',
//     name: 'Kashmiri Laddu',
//     description: 'Kashmiri Laddu is a traditional sweet delicacy from the Kashmiri cuisine, which originates from the Kashmir Valley in India. It is a popular dessert made from a combination of ingredients including roasted cashews, ghee (clarified butter), sugar, cardamom, saffron, and sometimes rose water. The roasted cashews are ground to a fine powder and then mixed with ghee, sugar, and aromatic spices to form a dough-like consistency. The mixture is then shaped into small balls or discs and garnished with saffron strands or chopped nuts for added flavor and visual appeal. Kashmiri Laddu is known for its rich, nutty flavor, delicate fragrance from the cardamom and saffron, and its melt-in-your-mouth texture. It is often served during festive occasions, weddings, and other celebrations as a symbol of joy and happiness.',
//     price: '$5.99',
//     image: require('../assets/images/Kashmiri_Laddu.png')
// },
{
    id: '8',
    name: 'Kashmiri Haak',
    description: 'Indulge in the exotic flavors of Kashmir with our Kashmiri Haak, a traditional dish that will transport your taste buds to the beautiful Kashmir Valley in northern India. Made with tender collard greens or Kashmiri spinach, our Haak is slow-cooked to perfection with aromatic spices such as fennel seeds, turmeric, and asafoetida, creating a rich and flavorful broth that will leave you craving for more. The natural goodness of the greens shines through in this simple yet satisfying dish, perfect for those who appreciate wholesome and nourishing meals. Served with steamed rice or our freshly baked naan bread, our Kashmiri Haak is a comforting and authentic addition to any event or gathering.',
    price: '$9.99',
    quantity: 0,
    image: require('../assets/images/Kashmiri_Haak.png')
},
{
    id: '9',
    name: 'Kashmiri Roth',
    description: 'Kashmiri Laddu is a traditional sweet delicacy from the Kashmiri cuisine, which originates from the Kashmir Valley in India. It is a popular dessert made from a combination of ingredients including roasted cashews, ghee (clarified butter), sugar, cardamom, saffron, and sometimes rose water. The roasted cashews are ground to a fine powder and then mixed with ghee, sugar, and aromatic spices to form a dough-like consistency. The mixture is then shaped into small balls or discs and garnished with saffron strands or chopped nuts for added flavor and visual appeal. Kashmiri Laddu is known for its rich, nutty flavor, delicate fragrance from the cardamom and saffron, and its melt-in-your-mouth texture. It is often served during festive occasions, weddings, and other celebrations as a symbol of joy and happiness.',
    price: '$10.99',
    quantity: 0,
    image: require('../assets/images/Kashmiri_Roth.png')
},
{
    id: '10',
    name: 'Kashmiri Ther',
    description: 'Indulge in the sweet aroma and rich flavors of Kashmir with our Kashmiri Roth, a traditional sweet bread that is a true culinary masterpiece. Made with love and care, our Roth is a soft, flaky, and melt-in-your-mouth delight that will satisfy your sweet tooth like no other. This authentic Kashmiri specialty is prepared with a blend of aromatic spices, nuts, and dried fruits, creating a perfect harmony of flavors that will transport your taste buds to the beautiful Kashmir Valley in northern India. Our Roth is handcrafted with the finest ingredients and baked to perfection, resulting in a golden, crispy crust that gives way to a luscious, sweet filling that will leave you craving for more. Perfect for special occasions, festivals, or as a sweet indulgence any time of the year, our Kashmiri Roth is a true treat for your senses. Let us delight your guests with this unique and irresistible sweet bread that is sure to leave a lasting impression and become a cherished memory for your event.',
    price: '$10.99',
    quantity: 0,
    image: require('../assets/images/Kashmiri_Ther_Rice.png')
},
{
    id: '11',
    name: 'Katlam',
    description: 'Indulge in the delectable flavors of Kashmir with our Kashmiri Katlam, a savory and crispy pastry that is a true culinary delight. Handcrafted with care, our Katlam is made with layers of flaky dough that are folded and shaped into a unique design, resulting in a visually stunning treat that is sure to captivate your guests. The delicate and crispy pastry is then filled with a scrumptious mixture of aromatic spices, minced meat, and sometimes even dried fruits and nuts, creating a perfect blend of flavors that will transport your taste buds to the beautiful Kashmir Valley in northern India. Our Kashmiri Katlam is baked to perfection, resulting in a golden and crispy crust that gives way to a savory and aromatic filling that will leave you craving for more. Perfect as a standalone snack or as a unique appetizer, our Katlam is a delightful addition to any event or gathering. Each bite of our Kashmiri Katlam is a burst of flavors, with the richness of the filling and the crispiness of the pastry coming together in a tantalizing symphony that will leave your guests asking for seconds. Let us bring the magic of Kashmir to your table with our flavorful and crispy Katlam, a true masterpiece that will elevate your catering experience and leave a lasting impression on your guests.',
    price: '$10.99',
    quantity: 0,
    image: require('../assets/images/Katlam.png')
},
{
    id: '12',
    name: 'Makki Ki Roti Sarso Ka Saag',
    description: 'Indulge in the rich and hearty flavors of Punjab with our Makki Ki Roti Sarso Ka Saag, a traditional and wholesome dish that will transport your taste buds to the heartland of India. Made with love and care, our Makki Ki Roti is a rustic flatbread crafted from cornmeal, hand-rolled and cooked to perfection on a griddle, resulting in a golden and crispy delight that pairs perfectly with the flavorful Sarso Ka Saag. Our Sarso Ka Saag is a creamy and aromatic blend of mustard greens, spinach, and other authentic Punjabi spices, slow-cooked to perfection to create a luscious and flavorful dish that will warm your soul. The combination of the crispy and earthy Makki Ki Roti with the creamy and savory Sarso Ka Saag is a match made in culinary heaven, creating a truly satisfying and wholesome meal that is loved by all. Perfect for special occasions, festivals, or as a comforting meal any time of the year, our Makki Ki Roti Sarso Ka Saag is a true celebration of Punjabi flavors and traditions. Let us bring the warmth and richness of Punjab to your table with this classic and wholesome dish that is sure to impress your guests and leave them craving for more.',
    price: '$8.99',
    quantity: 0,
    image: require('../assets/images/Makki_Ki_Roti_Sarso_Ka_Saag.png')
},
// {
//     id: '13',
//     name: 'Matz',
//     description: 'Indulge in the exquisite flavors of Kashmir with our tantalizing Kashmiri Matz. Inspired by the rich culinary traditions of the Kashmiri region, this unique fusion dish combines the best of Jewish and Kashmiri cuisines. Handcrafted with care using the finest ingredients, our Matz is made following an authentic Kashmiri recipe that infuses the unleavened flatbread with a symphony of aromatic spices, herbs, and other authentic Kashmiri flavors. The result is a crispy and flavorful flatbread that is sure to captivate your taste buds. As you take a bite, youll be greeted with the warmth of Kashmiri spices like cardamom, cinnamon, and cloves, which are expertly balanced with the tanginess of yogurt and the earthiness of whole wheat flour. The delicate blend of flavors creates a harmonious symphony on your palate, taking you on a culinary journey to the beautiful valley of Kashmir. Topped with succulent pieces of marinated chicken, goat, or turkey, our Kashmiri Matz becomes a true celebration of flavors. The tender and juicy meat, infused with the aromatic Kashmiri spices, adds a burst of deliciousness to every bite. The dish is finished with a sprinkle of fresh cilantro or mint for a burst of freshness and an authentic Kashmiri touch. Perfect as an appetizer, main course, or a creative addition to your event, our Kashmiri Matz with Chicken/Goat/Turkey is a culinary masterpiece that will delight your guests and leave them craving for more. Let us bring the taste of Kashmir to your table with this unique fusion dish that is sure to be the highlight of your next event.',
//     price: '$11.99',
//     image: require('../assets/images/Matz.png')
// },
{
    id: '14',
    name: 'Yakni',
    description: 'Get ready to savor the rich flavors of Kashmir with our exquisite Chicken/Goat/Wild Bird Yakni. This traditional Kashmiri dish is a labor of love, crafted with care and precision to bring you the authentic taste of Kashmiri cuisine. Our Yakni begins with tender pieces of chicken, goat, or wild bird, which are marinated in a blend of aromatic spices such as fennel, ginger, and cinnamon, and slow-cooked to perfection in a flavorful broth. The broth is made with a rich base of caramelized onions, fragrant whole spices, and yogurt, creating a luscious and aromatic gravy that is infused with the essence of Kashmiri flavors. As you take your first spoonful, youll be greeted with the delightful aroma of the spices and the succulent, melt-in-your-mouth meat that has absorbed all the flavors of the Yakni broth. The dish is finished with a garnish of fresh cilantro or mint, adding a burst of freshness and an authentic Kashmiri touch. The Kashmiri Chicken/Goat/Wild Bird Yakni is a dish that is meant to be savored slowly, allowing the flavors to meld and develop with every bite. It is traditionally served with steamed basmati rice or naan bread, making it a hearty and satisfying meal that will transport you to the beautiful valleys of Kashmir. Perfect for special occasions, gatherings, or a luxurious indulgence, our Kashmiri Chicken/Goat/Wild Bird Yakni is a true culinary masterpiece that will captivate your taste buds and leave you craving for more. Immerse yourself in the flavors of Kashmir with this traditional dish that is sure to be a highlight on your dining table.',
    price: '$15.99',
    quantity: 0,
    image: require('../assets/images/Yakni.png')
},
{
    id: '15',
    name: 'Yellow Paneer',
    description: 'Indulge in the vibrant colors and flavors of Kashmir with our delectable Kashmiri Yellow Paneer. This vegetarian delight is made with love, using the finest paneer (Indian cottage cheese) and a medley of aromatic spices that are synonymous with Kashmiri cuisine. Our Kashmiri Yellow Paneer is a feast for the senses. The golden hue of the paneer is achieved by using a blend of turmeric, saffron, and other exotic spices that are unique to Kashmiri cuisine. The paneer is marinated in this flavorful spice mix, allowing it to absorb the rich flavors and develop a beautiful yellow color.To enhance the flavors further, the marinated paneer is then pan-fried until golden and crispy, creating a perfect balance of textures - soft and creamy on the inside, and crispy on the outside. The dish is then finished with a garnish of fresh cilantro or mint, adding a burst of freshness and an authentic Kashmiri touch. With each bite, you be treated to the rich and aromatic flavors of Kashmiri cuisine. The delicate sweetness of the saffron, the warmth of the turmeric, and the earthiness of the paneer come together in a harmonious symphony of tastes, transporting your taste buds to the majestic valleys of Kashmir.',
    price: '$10.99',
    quantity: 0,
    image: require('../assets/images/Yellow_Paneer.png')
},
];

export default Food;