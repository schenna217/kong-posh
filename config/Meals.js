const Meals = [
    {
        id: '1',
        name: 'Chicken Changezi',
        description: 'Chicken Changezi is a popular North Indian dish known for its rich and flavorful preparation. Chicken Changezi typically features succulent pieces of chicken that are cooked in a luscious and aromatic gravy. The dish is known for its distinct flavors, achieved by using a blend of spices such as cinnamon, cardamom, cloves, and cumin, which give it a warm and fragrant profile. The chicken is often marinated in a yogurt-based marinade with spices and then cooked slowly in the gravy, allowing the flavors to meld together. The gravy of Chicken Changezi is often rich and creamy, with the use of ingredients such as tomatoes, onions, cashews, and cream, which lend it a luxurious texture. The dish is typically garnished with fried onions, fresh cilantro, and sometimes nuts, adding a crunchy texture and enhancing the presentation.',
        price: '18.99',
        quantity: 0,
        image: require('../assets/images/Chicken_Changezi.png')
    }, {
        id: '2',
        name: 'Gobi & Paneer Ki Sabzi',
        description: 'Gobi and Paneer ki Sabzi is a delicious and wholesome Indian dish made with cauliflower (gobi) and paneer (cottage cheese) cooked together in a spiced tomato-based gravy. The cauliflower and paneer are cooked until tender and coated in a flavorful masala made with a blend of spices like cumin, coriander, turmeric, and red chili powder. The dish is typically finished with a garnish of fresh coriander leaves and served hot with roti (Indian flatbread) or rice. Its a popular vegetarian dish that is loved for its rich and creamy flavors, making it a comforting and satisfying option for lunch or dinner.',
        price: '10.99',
        quantity: 0,
        image: require('../assets/images/Gobi_Panner_Ki_Sabzi.png')
    },
    {
        id: '3',
        name: 'Channa Sabzi',
        description: 'Channa Sabzi, also known as Chana Masala or Chole, is a popular vegetarian dish originating from the Indian subcontinent. It is made using chickpeas, or channa, that are cooked in a flavorful tomato-based gravy. The dish is known for its bold and robust flavors, with a blend of spices such as cumin, coriander, and garam masala that give it a distinct taste profile. The chickpeas are typically cooked until tender, then simmered in the gravy, often made with onions, tomatoes, and a variety of spices. Channa Sabzi is often garnished with fresh cilantro and served with naan bread, roti, or rice.',
        price: '6.99',
        quantity: 0,
        image: require('../assets/images/Channa_Sabzi.png')
    },
    {
        id: '4',
        name: 'Dum Aloo',
        description: 'Kashmiri Dum Aloo is a popular vegetarian dish from the Kashmiri cuisine of India. It is made using baby potatoes that are cooked in a rich and flavorful gravy. The dish is known for its unique blend of spices, including Kashmiri red chili powder, fennel seeds, ginger, and cinnamon, which lend a distinct flavor profile. The potatoes are first deep-fried until golden and crispy, then simmered in a thick tomato-based gravy, often infused with yogurt or cream to give it a creamy texture. The dish is typically slow-cooked on low heat or "dum" style, allowing the flavors to meld together and create a deliciously aromatic dish. Kashmiri Dum Aloo is often garnished with fresh cilantro or chopped nuts, adding a burst of color and crunch to the dish. It is typically served with naan bread or rice, and is loved for its rich and satisfying taste that is perfect for special occasions or gatherings.',
        price: '15.99',
        quantity: 0,
        image: require('../assets/images/Dum_Aloo.png')
    }, {
        id: '5',
        name: 'Kashmiri Haak',
        description: 'Indulge in the exotic flavors of Kashmir with our Kashmiri Haak, a traditional dish that will transport your taste buds to the beautiful Kashmir Valley in northern India. Made with tender collard greens or Kashmiri spinach, our Haak is slow-cooked to perfection with aromatic spices such as fennel seeds, turmeric, and asafoetida, creating a rich and flavorful broth that will leave you craving for more. The natural goodness of the greens shines through in this simple yet satisfying dish, perfect for those who appreciate wholesome and nourishing meals.',
        price: '9.99',
        quantity: 0,
        image: require('../assets/images/Kashmiri_Haak.png')
    }, {
        id: '6',
        name: 'Makki Ki Roti Sarso Ka Saag',
        description: 'Indulge in the rich and hearty flavors of Punjab with our Makki Ki Roti Sarso Ka Saag, a traditional and wholesome dish that will transport your taste buds to the heartland of India. Made with love and care, our Makki Ki Roti is a rustic flatbread crafted from cornmeal, hand-rolled and cooked to perfection on a griddle, resulting in a golden and crispy delight that pairs perfectly with the flavorful Sarso Ka Saag. Our Sarso Ka Saag is a creamy and aromatic blend of mustard greens, spinach, and other authentic Punjabi spices, slow-cooked to perfection to create a luscious and flavorfal dish that will warm your soul.',
        price: '8.99',
        quantity: 0,
        image: require('../assets/images/Makki_Ki_Roti_Sarso_Ka_Saag.png')
    }, {
        id: '7',
        name: 'Yellow Paneer',
        description: 'Indulge in the vibrant colors and flavors of Kashmir with our delectable Kashmiri Yellow Paneer. The golden hue of the paneer is achieved by using a blend of turmeric, saffron, and other exotic spices that are unique to Kashmiri cuisine. The paneer is marinated in this flavorful spice mix, allowing it to absorb the rich flavors and develop a beautiful yellow color.To enhance the flavors further, the marinated paneer is then pan-fried until golden and crispy, creating a perfect balance of textures - soft and creamy on the inside, and crispy on the outside. The dish is then finished with a garnish of fresh cilantro or mint, adding a burst of freshness and an authentic Kashmiri touch.',
        price: '10.99',
        quantity: 0,
        image: require('../assets/images/Yellow_Paneer.png')
    },
    {
        id: '8',
        name: 'Dum Biryani',
        description: 'Chicken Biryani is a popular and aromatic rice dish that originated in the Indian subcontinent. It typically consists of succulent pieces of chicken marinated in a blend of spices, layered with fragrant basmati rice, and cooked to perfection. The dish is known for its rich flavors and complex aroma, created by the use of spices such as cardamom, cinnamon, cloves, and saffron. Chicken Biryani is often garnished with fried onions, fresh cilantro, and mint leaves, adding freshness to the dish. It is typically served with yogurt raita or a side of spicy curry, and is loved by food enthusiasts for its delicious taste and unique combination of flavors.',
        price: '28.50',
        quantity: 0,
        image: require('../assets/images/Dum_Biryani.png')
    },
    {
        id: '9',
        name: 'Yakni',
        description: 'Get ready to savor the rich flavors of Kashmir with our exquisite Chicken/Goat/Wild Bird Yakni. This traditional Kashmiri dish is a labor of love, crafted with care and precision to bring you the authentic taste of Kashmiri cuisine. Our Yakni begins with tender pieces of chicken, goat, or wild bird, which are marinated in a blend of aromatic spices such as fennel, ginger, and cinnamon, and slow-cooked to perfection in a flavorful broth. The broth is made with a rich base of caramelized onions, fragrant whole spices, and yogurt, creating a luscious and aromatic gravy that is infused with the essence of Kashmiri flavors. The dish is finished with a garnish of fresh cilantro or mint, adding a burst of freshness and an authentic Kashmiri touch.',
        price: '15.99',
        quantity: 0,
        image: require('../assets/images/Yakni.png')
    },
    {
        id: '10',
        name: 'Matz',
        description: 'Indulge in the exquisite flavors of Kashmir with our tantalizing Kashmiri Matz. Inspired by the rich culinary traditions of the Kashmiri region, this unique fusion dish combines the best of Jewish and Kashmiri cuisines. Handcrafted with care using the finest ingredients, our Matz is made following an authentic Kashmiri recipe that infuses the unleavened flatbread with a symphony of aromatic spices, herbs, and other authentic Kashmiri flavors. The result is a crispy and flavorful flatbread that is sure to captivate your taste buds. As you take a bite, youll be greeted with the warmth of Kashmiri spices like cardamom, cinnamon, and cloves, which are expertly balanced with the tanginess of yogurt and the earthiness of whole wheat flour. The delicate blend of flavors creates a harmonious symphony on your palate, taking you on a culinary journey to the beautiful valley of Kashmir. Topped with succulent pieces of marinated chicken, goat, or turkey, our Kashmiri Matz becomes a true celebration of flavors. The tender and juicy meat, infused with the aromatic Kashmiri spices, adds a burst of deliciousness to every bite. The dish is finished with a sprinkle of fresh cilantro or mint for a burst of freshness and an authentic Kashmiri touch. Perfect as an appetizer, main course, or a creative addition to your event, our Kashmiri Matz with Chicken/Goat/Turkey is a culinary masterpiece that will delight your guests and leave them craving for more. Let us bring the taste of Kashmir to your table with this unique fusion dish that is sure to be the highlight of your next event.',
        price: '11.99',
        image: require('../assets/images/Matz.png')
    },];

export default Meals;