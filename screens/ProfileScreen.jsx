// import { NewAppScreen } from '@react-native/new-app-screen';
// import React from 'react';

// import {
//     StyleSheet,
//     Text,
//     View,
//     ScrollView,
//     Image,
//     Dimensions,
//     TouchableOpacity
// } from 'react-native';

// import {
//     SafeAreaProvider,
//     SafeAreaView,
// } from 'react-native-safe-area-context';


// const { width, height } = Dimensions.get('window');


// const ProfileScreen = () => {

//     const [post, setPost] = React.useState(null);

//     return (
//         <SafeAreaProvider>

//             <SafeAreaView style={styles.safeArea}>

//                 <View style={styles.screen}>

//                     {/* Full Screen Background */}
//                     <Image
//                         source={require('../assets/bcimage.jpeg')}
//                         style={styles.backgroundImage}
//                         resizeMode="cover"
//                     />


//                     {/* Content */}
//                     <ScrollView
//                         contentContainerStyle={styles.scrollContent}
//                         showsVerticalScrollIndicator={false}
//                     >

//                         <View style={styles.container}>

//                             {/* Top Bar */}

//                             <View style={styles.topBarLeft}>

//                                 <Text style={styles.leftText}>
//                                     P
//                                 </Text>

//                             </View>

//                             <View>

//                             </View>

//                             <View style={styles.topBarRight}>

//                                 <Text style={styles.rightText}>
//                                     Profile
//                                 </Text>

//                             </View>

//                         </View>



//                         <TouchableOpacity style={styles.navBar}>

//                             {/* Left Icon */}
//                             <View style={styles.cardIcon}>
//                                 <Text style={styles.cardIconText}>📚</Text>
//                             </View>

//                             {/* Content */}
//                             <View style={styles.cardContent}>

//                                 <Text style={styles.cardLabel}>
//                                     LEARNING
//                                 </Text>

//                                 <Text style={styles.cardTitle} numberOfLines={1}>
//                                     Mobile app Development
//                                 </Text>

//                                 <Text style={styles.cardDescription} numberOfLines={2}>
//                                     Learn the fundamentals of React Native and start building beautiful mobile applications.
//                                 </Text>

//                                 <View style={styles.cardFooter}>
//                                     <Text style={styles.cardMeta}>
//                                         12 min read
//                                     </Text>

//                                     <Text style={styles.cardArrow}>
//                                         →
//                                     </Text>
//                                 </View>

//                             </View>

//                         </TouchableOpacity>

//                         <View style={styles.navBar}>
//                             <Text>
//                                 Card Title
//                             </Text>
//                         </View>

//                         <View style={styles.navBar}>

//                         </View>

//                         <View style={styles.navBar}>

//                         </View>



//                     </ScrollView>

//                 </View>

//             </SafeAreaView>

//         </SafeAreaProvider>
//     );
// };


// export default ProfileScreen;


// const styles = StyleSheet.create({

//     safeArea: {
//         flex: 1,
//     },

//     screen: {
//         flex: 1,
//         position: 'relative',
//     },

//     backgroundImage: {
//         position: 'absolute',

//         width: width,
//         height: height,

//         top: 0,
//         left: 0,

//         zIndex: 0,
//     },

//     scrollContent: {
//         flexGrow: 1,
//         zIndex: 1,
//     },

//     container: {
//         padding: 20,

//         flexDirection: 'row',

//         justifyContent: 'space-between',

//         alignItems: 'center',

//         minHeight: 100,
//     },

//     topBarLeft: {
//         width: 50,
//         height: 50,

//         borderRadius: 25,

//         alignItems: 'center',
//         justifyContent: 'center',

//         backgroundColor: '#F0F0F0',
//     },

//     leftText: {
//         fontSize: 20,

//         fontWeight: '700',

//         color: '#1F2965',
//     },

//     topBarRight: {
//         flex: 1,

//         alignItems: 'flex-end',
//     },

//     rightText: {
//         fontSize: 22,

//         fontWeight: '700',

//         color: '#1F2965',
//     },

//     navBar: {
//         marginHorizontal: 20,
//         marginBottom: 14,

//         padding: 16,

//         minHeight: 145,

//         borderRadius: 22,

//         flexDirection: 'row',
//         alignItems: 'flex-start',

//         backgroundColor: 'rgba(255,255,255,0.92)',
//         opacity: 0.6,

//         borderWidth: 1,
//         borderColor: 'rgba(255,255,255,0.7)',

//         shadowColor: '#000',
//         shadowOffset: {
//             width: 0,
//             height: 6,
//         },
//         shadowOpacity: 0.08,
//         shadowRadius: 15,

//         elevation: 5,
//     },

//     cardIcon: {
//         width: 52,
//         height: 52,

//         borderRadius: 16,

//         alignItems: 'center',
//         justifyContent: 'center',

//         backgroundColor: '#EEF1FF',
//     },

//     cardIconText: {
//         fontSize: 25,
//     },

//     cardContent: {
//         flex: 1,
//         marginLeft: 14,
//     },

//     cardLabel: {
//         fontSize: 10,
//         fontWeight: '800',
//         letterSpacing: 1,

//         color: '#6B6F85',
//     },

//     cardTitle: {
//         marginTop: 4,

//         fontSize: 18,
//         fontWeight: '800',

//         color: '#1F2965',
//     },

//     cardDescription: {
//         marginTop: 6,

//         fontSize: 13,
//         lineHeight: 19,

//         color: '#6B7085',
//     },

//     cardFooter: {
//         marginTop: 12,

//         flexDirection: 'row',
//         alignItems: 'center',

//         justifyContent: 'space-between',
//     },

//     cardMeta: {
//         fontSize: 11,
//         fontWeight: '600',

//         color: '#9699A8',
//     },

//     cardArrow: {
//         width: 30,
//         height: 30,

//         borderRadius: 15,

//         textAlign: 'center',
//         lineHeight: 28,

//         fontSize: 18,
//         fontWeight: '700',

//         color: '#FFFFFF',

//         backgroundColor: '#1F2965',
//     },

// });





// New one







// import React, { useState } from 'react';
// import {
//     StyleSheet,
//     Text,
//     View,
//     Image,
//     Pressable,
//     Dimensions,
// } from 'react-native';

// import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

// // ডামি কন্টেন্ট ডাটা (টাইটেল, ডেসক্রিপশন এবং ইমেজ)
// const CARD_DATA = [
//     {
//         id: 1,
//         title: 'Food One',
//         description: 'এখানে আপনার প্রথম কার্ডের বিস্তারিত ডেসক্রিপশন থাকবে। আপনি রিয়েক্ট ন্যাটিভ দিয়ে চমৎকার ইউজার এক্সপিরিয়েন্স তৈরি করছেন।',
//         imageUrl: 'https://picsum.photos',
//     },
//     {
//         id: 2,
//         title: 'Food 2',
//         description: 'এটি দ্বিতীয় কার্ডের ডেসক্রিপশন। ডাবল ট্যাপ বা লং প্রেস করার কারণে আপনি এই কন্টেন্টটি দেখতে পাচ্ছেন।',
//         imageUrl: 'https://picsum.photos',
//     },
//     {
//         id: 3,
//         title: 'Food 3',
//         description: 'চমৎকার! আপনি সফলভাবে তৃতীয় কার্ডে চলে এসেছেন। ডাটা শেষ হয়ে গেলে এটি আবার প্রথম কার্ডে ফিরে যাবে।',
//         imageUrl: 'https://picsum.photos',
//     },
//     {
//         id: 3,
//         title: 'Food 4',
//         description: "Food Description",

//     }
// ];

// const { width, height } = Dimensions.get('window');

// export default function App() {

//     const [currentIndex, setCurrentIndex] = useState(0);
//     const currentCard = CARD_DATA[currentIndex];

//     // পরবর্তী কার্ডে যাওয়ার ফাংশন
//     const handleNextCard = () => {
//         if (currentIndex < CARD_DATA.length - 1) {
//             setCurrentIndex(currentIndex + 1);
//         } else {
//             setCurrentIndex(0); // ডাটা শেষ হলে আবার ১ম কার্ডে ফিরে যাবে
//         }
//     };

//     // ডাবল ট্যাপ হ্যান্ডেল করার জন্য টাইমিং লজিক
//     let lastTap = null;
//     const handleDoubleTap = () => {
//         const now = Date.now();
//         const DOUBLE_PRESS_DELAY = 300; // ৩০০ মিলিসেকেন্ডের ভেতর ২য় ট্যাপ পড়লে ডাবল ট্যাপ হবে

//         if (lastTap && (now - lastTap) < DOUBLE_PRESS_DELAY) {
//             handleNextCard();
//         } else {
//             lastTap = now;
//         }
//     };

//     return (
//         <SafeAreaProvider>
//             <SafeAreaView style={styles.container}>
//                 <Text style={styles.hintText}>💡 পরবর্তী কার্ডে যেতে ডাবল ট্যাপ অথবা লং প্রেস করুন</Text>

//                 {/* সম্পূর্ণ কার্ডটিকে একটি Pressable বাটন বানাবো */}
//                 <Pressable
//                     onPress={handleDoubleTap}
//                     onLongPress={handleNextCard}
//                     delayLongPress={600}
//                     style={({ pressed }) => [
//                         styles.card,
//                         { opacity: pressed ? 0.95 : 1 } // প্রেস করলে হালকা অ্যানিমেশন ইফেক্ট
//                     ]}
//                 >
//                     <Image
//                         source={require('../assets/bcimage.jpeg')}
//                         style={styles.cardImage}
//                         resizeMode="cover"
//                     />

//                     <View style={styles.cardBody}>
//                         <Text style={styles.cardTitle}>{currentCard.title}</Text>
//                         <Text style={styles.cardDescription}>{currentCard.description}</Text>
//                     </View>
//                 </Pressable>
//             </SafeAreaView>
//         </SafeAreaProvider>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#f5f5f5',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     hintText: {
//         fontSize: 14,
//         color: '#666',
//         marginBottom: 20,
//         fontWeight: '500',
//     },
//     card: {
//         width: width * 0.85, // স্ক্রিনের ৮৫% চওড়া
//         height: height * 0.70,
//         backgroundColor: '#fff',
//         borderRadius: 16,
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 4 },
//         shadowOpacity: 0.1,
//         shadowRadius: 8,
//         elevation: 5, // অ্যান্ড্রোয়েডের শ্যাডোর জন্য
//         overflow: 'hidden', // ইমেজের বর্ডার রেডিয়াস ঠিক রাখার জন্য
//     },
//     cardImage: {
//         width: '100%',
//         height: 250,
//     },
//     cardBody: {
//         padding: 20,
//     },
//     cardTitle: {
//         fontSize: 22,
//         fontWeight: 'bold',
//         color: '#333',
//         marginBottom: 10,
//     },
//     cardDescription: {
//         fontSize: 15,
//         color: '#666',
//         lineHeight: 22,
//     },
// });
















// Another one

// import React, { useRef, useState } from 'react';

// import {
//     StyleSheet,
//     Text,
//     View,
//     Image,
//     Pressable,
//     Dimensions,
//     Animated,
//     Easing,
// } from 'react-native';

// import {
//     SafeAreaProvider,
//     SafeAreaView,
// } from 'react-native-safe-area-context';


// const { width, height } = Dimensions.get('window');


// // =========================
// // CARD DATA
// // =========================

// const CARD_DATA = [
//     {
//         id: 1,
//         title: 'Food One',
//         description:
//             'এখানে আপনার প্রথম কার্ডের বিস্তারিত ডেসক্রিপশন থাকবে। আপনি রিয়েক্ট ন্যাটিভ দিয়ে চমৎকার ইউজার এক্সপিরিয়েন্স তৈরি করছেন।',
//         imageUrl: require('../assets/bcimage.jpeg'),
//     },

//     {
//         id: 2,
//         title: 'Food Two',
//         description:
//             'এটি দ্বিতীয় কার্ডের ডেসক্রিপশন। ডাবল ট্যাপ বা লং প্রেস করার কারণে আপনি এই কন্টেন্টটি দেখতে পাচ্ছেন।',
//         imageUrl: require('../assets/natureimages.jpeg'),
//     },

//     {
//         id: 3,
//         title: 'Food Three',
//         description:
//             'চমৎকার! আপনি সফলভাবে তৃতীয় কার্ডে চলে এসেছেন। ডাটা শেষ হয়ে গেলে এটি আবার প্রথম কার্ডে ফিরে যাবে।',
//         imageUrl: require('../assets/skyimages.jpeg'),
//     },

//     {
//         id: 4,
//         title: 'Food Four',
//         description:
//             'This is another beautiful food card. Swipe, double tap or long press to explore more content.',
//         imageUrl: require('../assets/hillnatureimages.jpeg'),
//     },
// ];


// export default function App() {

//     const [currentIndex, setCurrentIndex] = useState(0);

//     const currentCard = CARD_DATA[currentIndex];


//     // =========================
//     // ANIMATION VALUES
//     // =========================

//     const fadeAnim = useRef(
//         new Animated.Value(1)
//     ).current;

//     const scaleAnim = useRef(
//         new Animated.Value(1)
//     ).current;

//     const translateXAnim = useRef(
//         new Animated.Value(0)
//     ).current;


//     // Card press animation
//     const pressScale = useRef(
//         new Animated.Value(1)
//     ).current;


//     // Double tap timer
//     // const lastTap = useRef(null).current;
//     const lastTap = useRef(null);


//     // =========================
//     // CHANGE CARD ANIMATION
//     // =========================

//     const changeCard = () => {

//         // First: animate current card out
//         Animated.parallel([

//             Animated.timing(fadeAnim, {
//                 toValue: 0,
//                 duration: 180,
//                 easing: Easing.out(Easing.ease),
//                 useNativeDriver: true,
//             }),

//             Animated.timing(scaleAnim, {
//                 toValue: 0.92,
//                 duration: 180,
//                 easing: Easing.out(Easing.ease),
//                 useNativeDriver: true,
//             }),

//             Animated.timing(translateXAnim, {
//                 toValue: -40,
//                 duration: 180,
//                 easing: Easing.out(Easing.ease),
//                 useNativeDriver: true,
//             }),

//         ]).start(() => {

//             // Change card
//             setCurrentIndex(
//                 prevIndex =>
//                     prevIndex === CARD_DATA.length - 1
//                         ? 0
//                         : prevIndex + 1
//             );


//             // Prepare new card
//             translateXAnim.setValue(40);
//             scaleAnim.setValue(0.92);


//             // Animate new card in
//             Animated.parallel([

//                 Animated.timing(fadeAnim, {
//                     toValue: 1,
//                     duration: 350,
//                     easing: Easing.out(Easing.cubic),
//                     useNativeDriver: true,
//                 }),

//                 Animated.spring(scaleAnim, {
//                     toValue: 1,
//                     friction: 7,
//                     tension: 50,
//                     useNativeDriver: true,
//                 }),

//                 Animated.timing(translateXAnim, {
//                     toValue: 0,
//                     duration: 350,
//                     easing: Easing.out(Easing.cubic),
//                     useNativeDriver: true,
//                 }),

//             ]).start();

//         });
//     };


//     // =========================
//     // DOUBLE TAP
//     // =========================

//     const handleDoubleTap = () => {

//         const now = Date.now();

//         const DOUBLE_TAP_DELAY = 300;


//         if (
//             lastTap.current &&
//             now - lastTap.current < DOUBLE_TAP_DELAY
//         ) {

//             changeCard();

//             lastTap.current = null;

//         } else {

//             lastTap.current = now;

//         }
//     };


//     // =========================
//     // PRESS IN
//     // =========================

//     const handlePressIn = () => {

//         Animated.spring(pressScale, {
//             toValue: 0.97,
//             friction: 8,
//             useNativeDriver: true,
//         }).start();

//     };


//     // =========================
//     // PRESS OUT
//     // =========================

//     const handlePressOut = () => {

//         Animated.spring(pressScale, {
//             toValue: 1,
//             friction: 6,
//             useNativeDriver: true,
//         }).start();

//     };


//     return (

//         <SafeAreaProvider>

//             <SafeAreaView style={styles.container}>

//                 {/* =========================
//             HEADER
//         ========================= */}

//                 <View style={styles.header}>

//                     <View>

//                         <Text style={styles.smallTitle}>
//                             Discover
//                         </Text>

//                         <Text style={styles.title}>
//                             Explore Food
//                         </Text>

//                     </View>


//                     <View style={styles.counter}>

//                         <Text style={styles.counterText}>
//                             {currentIndex + 1}
//                             <Text style={styles.counterTotal}>
//                                 {' / '}
//                                 {CARD_DATA.length}
//                             </Text>
//                         </Text>

//                     </View>

//                 </View>


//                 {/* =========================
//             HINT
//         ========================= */}

//                 <View style={styles.hintContainer}>

//                     <Text style={styles.hintIcon}>
//                         ✨
//                     </Text>

//                     <Text style={styles.hintText}>
//                         Double tap or long press to discover more
//                     </Text>

//                 </View>


//                 {/* =========================
//             CARD
//         ========================= */}

//                 <Animated.View
//                     style={[
//                         styles.cardWrapper,

//                         {
//                             opacity: fadeAnim,

//                             transform: [
//                                 {
//                                     translateX: translateXAnim,
//                                 },

//                                 {
//                                     scale: Animated.multiply(
//                                         scaleAnim,
//                                         pressScale
//                                     ),
//                                 },
//                             ],
//                         },
//                     ]}
//                 >

//                     <Pressable
//                         onPress={handleDoubleTap}
//                         onLongPress={changeCard}
//                         delayLongPress={600}
//                         onPressIn={handlePressIn}
//                         onPressOut={handlePressOut}
//                         style={styles.card}
//                     >

//                         {/* IMAGE */}

//                         <View style={styles.imageContainer}>

//                             <Image
//                                 source={currentCard.imageUrl}
//                                 style={styles.cardImage}
//                                 resizeMode="cover"
//                             />


//                             {/* Image Gradient-like overlay */}

//                             <View style={styles.imageOverlay} />


//                             {/* Category */}

//                             <View style={styles.categoryBadge}>

//                                 <Text style={styles.categoryText}>
//                                     FOOD
//                                 </Text>

//                             </View>


//                             {/* Number */}

//                             <View style={styles.numberBadge}>

//                                 <Text style={styles.numberText}>
//                                     {currentIndex + 1}
//                                 </Text>

//                             </View>

//                         </View>


//                         {/* CARD BODY */}

//                         <View style={styles.cardBody}>

//                             <Text
//                                 style={styles.cardTitle}
//                                 numberOfLines={2}
//                             >
//                                 {currentCard.title}
//                             </Text>


//                             <Text
//                                 style={styles.cardDescription}
//                                 numberOfLines={4}
//                             >
//                                 {currentCard.description}
//                             </Text>


//                             {/* FOOTER */}

//                             <View style={styles.cardFooter}>

//                                 <View style={styles.readTime}>

//                                     <Text style={styles.readIcon}>
//                                         ⏱
//                                     </Text>

//                                     <Text style={styles.readText}>
//                                         5 min read
//                                     </Text>

//                                 </View>


//                                 <View style={styles.arrowButton}>

//                                     <Text style={styles.arrow}>
//                                         →
//                                     </Text>

//                                 </View>

//                             </View>

//                         </View>

//                     </Pressable>

//                 </Animated.View>


//                 {/* =========================
//             PROGRESS
//         ========================= */}

//                 <View style={styles.progressContainer}>

//                     {CARD_DATA.map((_, index) => (

//                         <View
//                             key={index}
//                             style={[
//                                 styles.progressDot,

//                                 index === currentIndex &&
//                                 styles.activeProgressDot,
//                             ]}
//                         />

//                     ))}

//                 </View>


//                 {/* =========================
//             BOTTOM TEXT
//         ========================= */}

//                 <Text style={styles.bottomText}>
//                     Discover something new every time
//                 </Text>

//             </SafeAreaView>

//         </SafeAreaProvider>

//     );
// }


// const styles = StyleSheet.create({

//     // =========================
//     // SCREEN
//     // =========================

//     container: {
//         flex: 1,

//         backgroundColor: '#F5F7FC',

//         alignItems: 'center',
//     },


//     // =========================
//     // HEADER
//     // =========================

//     header: {

//         width: '100%',

//         paddingHorizontal: 24,
//         paddingTop: 15,

//         flexDirection: 'row',

//         alignItems: 'center',

//         justifyContent: 'space-between',
//     },


//     smallTitle: {

//         fontSize: 13,

//         fontWeight: '600',

//         color: '#7B8195',

//         marginBottom: 3,
//     },


//     title: {

//         fontSize: 25,

//         fontWeight: '800',

//         color: '#1F2965',
//     },


//     counter: {

//         paddingHorizontal: 13,
//         paddingVertical: 8,

//         borderRadius: 20,

//         backgroundColor: '#E9ECFA',
//     },


//     counterText: {

//         fontSize: 13,

//         fontWeight: '800',

//         color: '#1F2965',
//     },


//     counterTotal: {

//         fontWeight: '500',

//         color: '#8A8FA5',
//     },


//     // =========================
//     // HINT
//     // =========================

//     hintContainer: {

//         flexDirection: 'row',

//         alignItems: 'center',

//         marginTop: 18,
//         marginBottom: 14,
//     },


//     hintIcon: {

//         fontSize: 14,

//         marginRight: 6,
//     },


//     hintText: {

//         fontSize: 12,

//         color: '#858A9D',

//         fontWeight: '500',
//     },


//     // =========================
//     // CARD
//     // =========================

//     cardWrapper: {

//         width: width * 0.87,

//         height: height * 0.64,

//         borderRadius: 26,

//         shadowColor: '#000',

//         shadowOffset: {
//             width: 0,
//             height: 12,
//         },

//         shadowOpacity: 0.16,

//         shadowRadius: 22,

//         elevation: 10,
//     },


//     card: {

//         flex: 1,

//         overflow: 'hidden',

//         borderRadius: 26,

//         backgroundColor: '#FFFFFF',
//     },


//     // =========================
//     // IMAGE
//     // =========================

//     imageContainer: {

//         height: '55%',

//         position: 'relative',
//     },


//     cardImage: {

//         width: '100%',

//         height: '100%',
//     },


//     imageOverlay: {

//         position: 'absolute',

//         left: 0,
//         right: 0,
//         bottom: 0,

//         height: 100,

//         backgroundColor: 'rgba(0,0,0,0.18)',
//     },


//     categoryBadge: {

//         position: 'absolute',

//         top: 16,
//         left: 16,

//         paddingHorizontal: 12,
//         paddingVertical: 7,

//         borderRadius: 20,

//         backgroundColor: 'rgba(255,255,255,0.9)',
//     },


//     categoryText: {

//         fontSize: 10,

//         fontWeight: '800',

//         letterSpacing: 1,

//         color: '#1F2965',
//     },


//     numberBadge: {

//         position: 'absolute',

//         right: 16,
//         top: 16,

//         width: 36,
//         height: 36,

//         borderRadius: 18,

//         alignItems: 'center',
//         justifyContent: 'center',

//         backgroundColor: 'rgba(31,41,101,0.85)',
//     },


//     numberText: {

//         fontSize: 13,

//         fontWeight: '800',

//         color: '#FFFFFF',
//     },


//     // =========================
//     // BODY
//     // =========================

//     cardBody: {

//         flex: 1,

//         padding: 20,

//         justifyContent: 'space-between',
//     },


//     cardTitle: {

//         fontSize: 24,

//         fontWeight: '800',


//         color: '#1B2140',

//         lineHeight: 30,
//     },


//     cardDescription: {

//         marginTop: 8,

//         fontSize: 14,

//         lineHeight: 21,

//         color: '#71768A',
//     },


//     // =========================
//     // FOOTER
//     // =========================

//     cardFooter: {

//         marginTop: 15,

//         flexDirection: 'row',

//         alignItems: 'center',

//         justifyContent: 'space-between',
//     },


//     readTime: {

//         flexDirection: 'row',

//         alignItems: 'center',
//     },


//     readIcon: {

//         fontSize: 14,

//         marginRight: 6,
//     },


//     readText: {

//         fontSize: 12,

//         fontWeight: '600',

//         color: '#8A8FA0',
//     },


//     arrowButton: {

//         width: 42,
//         height: 42,

//         borderRadius: 21,

//         alignItems: 'center',
//         justifyContent: 'center',

//         backgroundColor: '#1F2965',
//     },


//     arrow: {

//         fontSize: 20,

//         fontWeight: '600',

//         color: '#FFFFFF',
//     },


//     // =========================
//     // PROGRESS
//     // =========================

//     progressContainer: {

//         flexDirection: 'row',

//         alignItems: 'center',

//         marginTop: 18,
//     },


//     progressDot: {

//         width: 7,
//         height: 7,

//         borderRadius: 4,

//         marginHorizontal: 4,

//         backgroundColor: '#D5D8E4',
//     },


//     activeProgressDot: {

//         width: 24,

//         backgroundColor: '#1F2965',
//     },


//     // =========================
//     // BOTTOM
//     // =========================

//     bottomText: {

//         marginTop: 10,

//         fontSize: 11,

//         color: '#9A9EAF',

//         fontWeight: '500',
//     },

// });








// Version Two





// import React, { useRef, useState } from 'react';

// import {
//     StyleSheet,
//     Text,
//     View,
//     Image,
//     Pressable,
//     Dimensions,
//     Animated,
//     Easing,
// } from 'react-native';

// import {
//     SafeAreaProvider,
//     SafeAreaView,
// } from 'react-native-safe-area-context';


// const { width, height } = Dimensions.get('window');


// // =========================
// // CARD DATA
// // =========================

// const CARD_DATA = [
//     {
//         id: 1,
//         title: 'Food One',
//         description:
//             'এখানে আপনার প্রথম কার্ডের বিস্তারিত ডেসক্রিপশন থাকবে। আপনি রিয়েক্ট ন্যাটিভ দিয়ে চমৎকার ইউজার এক্সপিরিয়েন্স তৈরি করছেন।',
//         imageUrl: require('../assets/bcimage.jpeg'),
//     },

//     {
//         id: 2,
//         title: 'Food Two',
//         description:
//             'এটি দ্বিতীয় কার্ডের ডেসক্রিপশন। ডাবল ট্যাপ বা লং প্রেস করার কারণে আপনি এই কন্টেন্টটি দেখতে পাচ্ছেন।',
//         imageUrl: require('../assets/natureimages.jpeg'),
//     },

//     {
//         id: 3,
//         title: 'Food Three',
//         description:
//             'চমৎকার! আপনি সফলভাবে তৃতীয় কার্ডে চলে এসেছেন। ডাটা শেষ হয়ে গেলে এটি আবার প্রথম কার্ডে ফিরে যাবে।',
//         imageUrl: require('../assets/skyimages.jpeg'),
//     },

//     {
//         id: 4,
//         title: 'Food Four',
//         description:
//             'This is another beautiful food card. Swipe, double tap or long press to explore more content.',
//         imageUrl: require('../assets/hillnatureimages.jpeg'),
//     },
// ];


// export default function App() {

//     const [currentIndex, setCurrentIndex] = useState(0);

//     const currentCard = CARD_DATA[currentIndex];


//     // =========================
//     // ANIMATION VALUES
//     // =========================

//     const fadeAnim = useRef(
//         new Animated.Value(1)
//     ).current;

//     const scaleAnim = useRef(
//         new Animated.Value(1)
//     ).current;

//     // Changed X to Y
//     const translateYAnim = useRef(
//         new Animated.Value(0)
//     ).current;


//     // Card press animation
//     const pressScale = useRef(
//         new Animated.Value(1)
//     ).current;


//     // Double tap timer
//     const lastTap = useRef(null);


//     // =========================
//     // CHANGE CARD ANIMATION
//     // =========================

//     const changeCard = () => {

//         // First: animate current card out
//         Animated.parallel([

//             // Fade out
//             Animated.timing(fadeAnim, {
//                 toValue: 0,
//                 duration: 180,
//                 easing: Easing.out(Easing.ease),
//                 useNativeDriver: true,
//             }),

//             // Scale down
//             Animated.timing(scaleAnim, {
//                 toValue: 0.92,
//                 duration: 180,
//                 easing: Easing.out(Easing.ease),
//                 useNativeDriver: true,
//             }),

//             // Move current card UP
//             Animated.timing(translateYAnim, {
//                 toValue: -40,
//                 duration: 180,
//                 easing: Easing.out(Easing.ease),
//                 useNativeDriver: true,
//             }),

//         ]).start(() => {

//             // Change card
//             setCurrentIndex(
//                 prevIndex =>
//                     prevIndex === CARD_DATA.length - 1
//                         ? 0
//                         : prevIndex + 1
//             );


//             // =========================
//             // PREPARE NEW CARD
//             // =========================

//             // New card starts from BOTTOM
//             translateYAnim.setValue(80);

//             scaleAnim.setValue(0.96);


//             // Animate new card from BOTTOM to CENTER
//             Animated.parallel([

//                 // Fade in
//                 Animated.timing(fadeAnim, {
//                     toValue: 1,
//                     duration: 500,
//                     easing: Easing.out(Easing.cubic),
//                     useNativeDriver: true,
//                 }),

//                 // Scale up
//                 Animated.spring(scaleAnim, {
//                     toValue: 1,
//                     friction: 7,
//                     tension: 50,
//                     useNativeDriver: true,
//                 }),

//                 // Move from BOTTOM to CENTER
//                 Animated.timing(translateYAnim, {
//                     toValue: 0,
//                     duration: 2500,
//                     easing: Easing.out(Easing.cubic),
//                     useNativeDriver: true,
//                 }),

//             ]).start();

//         });
//     };


//     // =========================
//     // DOUBLE TAP
//     // =========================

//     const handleDoubleTap = () => {

//         const now = Date.now();

//         const DOUBLE_TAP_DELAY = 300;


//         if (
//             lastTap.current &&
//             now - lastTap.current < DOUBLE_TAP_DELAY
//         ) {

//             changeCard();

//             lastTap.current = null;

//         } else {

//             lastTap.current = now;

//         }
//     };


//     // =========================
//     // PRESS IN
//     // =========================

//     const handlePressIn = () => {

//         Animated.spring(pressScale, {
//             toValue: 0.97,
//             friction: 8,
//             useNativeDriver: true,
//         }).start();

//     };


//     // =========================
//     // PRESS OUT
//     // =========================

//     const handlePressOut = () => {

//         Animated.spring(pressScale, {
//             toValue: 1,
//             friction: 6,
//             useNativeDriver: true,
//         }).start();

//     };


//     return (

//         <SafeAreaProvider>

//             <SafeAreaView style={styles.container}>

//                 {/* =========================
//                     HEADER
//                 ========================= */}

//                 <View style={styles.header}>

//                     <View>

//                         <Text style={styles.smallTitle}>
//                             Discover
//                         </Text>

//                         <Text style={styles.title}>
//                             Explore Food
//                         </Text>

//                     </View>


//                     <View style={styles.counter}>

//                         <Text style={styles.counterText}>

//                             {currentIndex + 1}

//                             <Text style={styles.counterTotal}>
//                                 {' / '}
//                                 {CARD_DATA.length}
//                             </Text>

//                         </Text>

//                     </View>

//                 </View>


//                 {/* =========================
//                     HINT
//                 ========================= */}

//                 <View style={styles.hintContainer}>

//                     <Text style={styles.hintIcon}>
//                         ✨
//                     </Text>

//                     <Text style={styles.hintText}>
//                         Double tap or long press to discover more
//                     </Text>

//                 </View>


//                 {/* =========================
//                     CARD
//                 ========================= */}

//                 <Animated.View
//                     style={[
//                         styles.cardWrapper,

//                         {
//                             opacity: fadeAnim,

//                             transform: [

//                                 // Changed translateX to translateY
//                                 {
//                                     translateY: translateYAnim,
//                                 },

//                                 {
//                                     scale: Animated.multiply(
//                                         scaleAnim,
//                                         pressScale
//                                     ),
//                                 },

//                             ],
//                         },
//                     ]}
//                 >

//                     <Pressable
//                         onPress={handleDoubleTap}
//                         onLongPress={changeCard}
//                         delayLongPress={600}
//                         onPressIn={handlePressIn}
//                         onPressOut={handlePressOut}
//                         style={styles.card}
//                     >

//                         {/* =========================
//                             IMAGE
//                         ========================= */}

//                         <View style={styles.imageContainer}>

//                             <Image
//                                 source={currentCard.imageUrl}
//                                 style={styles.cardImage}
//                                 resizeMode="cover"
//                             />


//                             {/* Image Overlay */}

//                             <View style={styles.imageOverlay} />


//                             {/* Category */}

//                             <View style={styles.categoryBadge}>

//                                 <Text style={styles.categoryText}>
//                                     FOOD
//                                 </Text>

//                             </View>


//                             {/* Number */}

//                             <View style={styles.numberBadge}>

//                                 <Text style={styles.numberText}>
//                                     {currentIndex + 1}
//                                 </Text>

//                             </View>

//                         </View>


//                         {/* =========================
//                             CARD BODY
//                         ========================= */}

//                         <View style={styles.cardBody}>

//                             <Text
//                                 style={styles.cardTitle}
//                                 numberOfLines={2}
//                             >
//                                 {currentCard.title}
//                             </Text>


//                             <Text
//                                 style={styles.cardDescription}
//                                 numberOfLines={4}
//                             >
//                                 {currentCard.description}
//                             </Text>


//                             {/* =========================
//                                 FOOTER
//                             ========================= */}

//                             <View style={styles.cardFooter}>

//                                 <View style={styles.readTime}>

//                                     <Text style={styles.readIcon}>
//                                         ⏱
//                                     </Text>

//                                     <Text style={styles.readText}>
//                                         5 min read
//                                     </Text>

//                                 </View>


//                                 <View style={styles.arrowButton}>

//                                     <Text style={styles.arrow}>
//                                         →
//                                     </Text>

//                                 </View>

//                             </View>

//                         </View>

//                     </Pressable>

//                 </Animated.View>


//                 {/* =========================
//                     PROGRESS
//                 ========================= */}

//                 <View style={styles.progressContainer}>

//                     {CARD_DATA.map((_, index) => (

//                         <View
//                             key={index}
//                             style={[
//                                 styles.progressDot,

//                                 index === currentIndex &&
//                                 styles.activeProgressDot,
//                             ]}
//                         />

//                     ))}

//                 </View>


//                 {/* =========================
//                     BOTTOM TEXT
//                 ========================= */}

//                 <Text style={styles.bottomText}>
//                     Discover something new every time
//                 </Text>

//             </SafeAreaView>

//         </SafeAreaProvider>

//     );
// }


// const styles = StyleSheet.create({

//     // =========================
//     // SCREEN
//     // =========================

//     container: {
//         flex: 1,

//         backgroundColor: '#F5F7FC',

//         alignItems: 'center',
//     },


//     // =========================
//     // HEADER
//     // =========================

//     header: {

//         width: '100%',

//         paddingHorizontal: 24,
//         paddingTop: 15,

//         flexDirection: 'row',

//         alignItems: 'center',

//         justifyContent: 'space-between',
//     },


//     smallTitle: {

//         fontSize: 13,

//         fontWeight: '600',

//         color: '#7B8195',

//         marginBottom: 3,
//     },


//     title: {

//         fontSize: 25,

//         fontWeight: '800',

//         color: '#1F2965',
//     },


//     counter: {

//         paddingHorizontal: 13,
//         paddingVertical: 8,

//         borderRadius: 20,

//         backgroundColor: '#E9ECFA',
//     },


//     counterText: {

//         fontSize: 13,

//         fontWeight: '800',

//         color: '#1F2965',
//     },


//     counterTotal: {

//         fontWeight: '500',

//         color: '#8A8FA5',
//     },


//     // =========================
//     // HINT
//     // =========================

//     hintContainer: {

//         flexDirection: 'row',

//         alignItems: 'center',

//         marginTop: 18,
//         marginBottom: 14,
//     },


//     hintIcon: {

//         fontSize: 14,

//         marginRight: 6,
//     },


//     hintText: {

//         fontSize: 12,

//         color: '#858A9D',

//         fontWeight: '500',
//     },


//     // =========================
//     // CARD
//     // =========================

//     cardWrapper: {

//         width: width * 0.87,

//         height: height * 0.64,

//         borderRadius: 26,

//         shadowColor: '#000',

//         shadowOffset: {
//             width: 0,
//             height: 12,
//         },

//         shadowOpacity: 0.16,

//         shadowRadius: 22,

//         elevation: 10,
//     },


//     card: {

//         flex: 1,

//         overflow: 'hidden',

//         borderRadius: 26,

//         backgroundColor: '#FFFFFF',
//     },


//     // =========================
//     // IMAGE
//     // =========================

//     imageContainer: {

//         height: '55%',

//         position: 'relative',
//     },


//     cardImage: {

//         width: '100%',

//         height: '100%',
//     },


//     imageOverlay: {

//         position: 'absolute',

//         left: 0,
//         right: 0,
//         bottom: 0,

//         height: 100,

//         backgroundColor: 'rgba(0,0,0,0.18)',
//     },


//     categoryBadge: {

//         position: 'absolute',

//         top: 16,
//         left: 16,

//         paddingHorizontal: 12,
//         paddingVertical: 7,

//         borderRadius: 20,

//         backgroundColor: 'rgba(255,255,255,0.9)',
//     },


//     categoryText: {

//         fontSize: 10,

//         fontWeight: '800',

//         letterSpacing: 1,

//         color: '#1F2965',
//     },


//     numberBadge: {

//         position: 'absolute',

//         right: 16,
//         top: 16,

//         width: 36,
//         height: 36,

//         borderRadius: 18,

//         alignItems: 'center',
//         justifyContent: 'center',

//         backgroundColor: 'rgba(31,41,101,0.85)',
//     },


//     numberText: {

//         fontSize: 13,

//         fontWeight: '800',

//         color: '#FFFFFF',
//     },


//     // =========================
//     // BODY
//     // =========================

//     cardBody: {

//         flex: 1,

//         padding: 20,

//         justifyContent: 'space-between',
//     },


//     cardTitle: {

//         fontSize: 24,

//         fontWeight: '800',

//         color: '#1B2140',

//         lineHeight: 30,
//     },


//     cardDescription: {

//         marginTop: 8,

//         fontSize: 14,

//         lineHeight: 21,

//         color: '#71768A',
//     },


//     // =========================
//     // FOOTER
//     // =========================

//     cardFooter: {

//         marginTop: 15,

//         flexDirection: 'row',

//         alignItems: 'center',

//         justifyContent: 'space-between',
//     },


//     readTime: {

//         flexDirection: 'row',

//         alignItems: 'center',
//     },


//     readIcon: {

//         fontSize: 14,

//         marginRight: 6,
//     },


//     readText: {

//         fontSize: 12,

//         fontWeight: '600',

//         color: '#8A8FA0',
//     },


//     arrowButton: {

//         width: 42,
//         height: 42,

//         borderRadius: 21,

//         alignItems: 'center',
//         justifyContent: 'center',

//         backgroundColor: '#1F2965',
//     },


//     arrow: {

//         fontSize: 20,

//         fontWeight: '600',

//         color: '#FFFFFF',
//     },


//     // =========================
//     // PROGRESS
//     // =========================

//     progressContainer: {

//         flexDirection: 'row',

//         alignItems: 'center',

//         marginTop: 18,
//     },


//     progressDot: {

//         width: 7,
//         height: 7,

//         borderRadius: 4,

//         marginHorizontal: 4,

//         backgroundColor: '#D5D8E4',
//     },


//     activeProgressDot: {

//         width: 24,

//         backgroundColor: '#1F2965',
//     },


//     // =========================
//     // BOTTOM
//     // =========================

//     bottomText: {

//         marginTop: 10,

//         fontSize: 11,

//         color: '#9A9EAF',

//         fontWeight: '500',
//     },

// });












// Version Three





import React, { useRef, useState } from 'react';

import {
    StyleSheet,
    Text,
    View,
    Image,
    Pressable,
    Dimensions,
    Animated,
    Easing,
    ScrollView,
} from 'react-native';

import {
    SafeAreaProvider,
    SafeAreaView,
} from 'react-native-safe-area-context';


const { width, height } = Dimensions.get('window');


// =========================
// CARD DATA
// =========================

const CARD_DATA = [
    {
        id: 1,
        title: 'Food One',
        description:
            'এখানে আপনার প্রথম কার্ডের বিস্তারিত ডেসক্রিপশন থাকবে। আপনি রিয়েক্ট ন্যাটিভ দিয়ে চমৎকার ইউজার এক্সপিরিয়েন্স তৈরি করছেন।',
        imageUrl: require('../assets/bcimage.jpeg'),
    },

    {
        id: 2,
        title: 'Food Two',
        description:
            'এটি দ্বিতীয় কার্ডের ডেসক্রিপশন। ডাবল ট্যাপ বা লং প্রেস করার কারণে আপনি এই কন্টেন্টটি দেখতে পাচ্ছেন।',
        imageUrl: require('../assets/natureimages.jpeg'),
    },

    {
        id: 3,
        title: 'Food Three',
        description:
            'চমৎকার! আপনি সফলভাবে তৃতীয় কার্ডে চলে এসেছেন। ডাটা শেষ হয়ে গেলে এটি আবার প্রথম কার্ডে ফিরে যাবে।',
        imageUrl: require('../assets/skyimages.jpeg'),
    },

    {
        id: 4,
        title: 'Food Four',
        description:
            'This is another beautiful food card. Swipe, double tap or long press to explore more content.',
        imageUrl: require('../assets/hillnatureimages.jpeg'),
    },
];


export default function App() {

    const [currentIndex, setCurrentIndex] = useState(0);

    const scrollRef = useRef(null);

    const scrollPosition = useRef(0);

    const lastTap = useRef(null);


    // =========================
    // CARD SIZE
    // =========================

    const CARD_HEIGHT = height * 0.64;


    // =========================
    // PRESS ANIMATION
    // =========================

    const pressScale = useRef(
        new Animated.Value(1)
    ).current;


    // =========================
    // SCROLL TO NEXT CARD
    // =========================

    const scrollToNextCard = () => {

        const nextIndex =
            currentIndex === CARD_DATA.length - 1
                ? 0
                : currentIndex + 1;


        const nextPosition =
            nextIndex * (CARD_HEIGHT + 20);


        // If last card, go back to first card
        if (currentIndex === CARD_DATA.length - 1) {

            scrollRef.current?.scrollTo({
                y: 0,
                animated: true,
            });

        } else {

            scrollRef.current?.scrollTo({
                y: nextPosition,
                animated: true,
            });

        }

        setCurrentIndex(nextIndex);
    };


    // =========================
    // DOUBLE TAP
    // =========================

    const handleDoubleTap = () => {

        const now = Date.now();

        const DOUBLE_TAP_DELAY = 300;


        if (
            lastTap.current &&
            now - lastTap.current < DOUBLE_TAP_DELAY
        ) {

            scrollToNextCard();

            lastTap.current = null;

        } else {

            lastTap.current = now;

        }
    };


    // =========================
    // PRESS IN
    // =========================

    const handlePressIn = () => {

        Animated.spring(pressScale, {
            toValue: 0.97,
            friction: 8,
            useNativeDriver: true,
        }).start();

    };


    // =========================
    // PRESS OUT
    // =========================

    const handlePressOut = () => {

        Animated.spring(pressScale, {
            toValue: 1,
            friction: 6,
            useNativeDriver: true,
        }).start();

    };


    // =========================
    // MANUAL SCROLL
    // =========================

    const handleScroll = (event) => {

        const y =
            event.nativeEvent.contentOffset.y;

        scrollPosition.current = y;


        const calculatedIndex = Math.round(
            y / (CARD_HEIGHT + 20)
        );


        if (
            calculatedIndex >= 0 &&
            calculatedIndex < CARD_DATA.length &&
            calculatedIndex !== currentIndex
        ) {

            setCurrentIndex(calculatedIndex);

        }

    };


    return (

        <SafeAreaProvider>

            <SafeAreaView style={styles.container}>

                {/* =========================
                    HEADER
                ========================= */}

                <View style={styles.header}>

                    <View>

                        <Text style={styles.smallTitle}>
                            Discover
                        </Text>

                        <Text style={styles.title}>
                            Explore Food
                        </Text>

                    </View>


                    <View style={styles.counter}>

                        <Text style={styles.counterText}>

                            {currentIndex + 1}

                            <Text style={styles.counterTotal}>
                                {' / '}
                                {CARD_DATA.length}
                            </Text>

                        </Text>

                    </View>

                </View>


                {/* =========================
                    HINT
                ========================= */}

                <View style={styles.hintContainer}>

                    <Text style={styles.hintIcon}>
                        ✨
                    </Text>

                    <Text style={styles.hintText}>
                        Double tap or long press to discover more
                    </Text>

                </View>


                {/* =========================
                    SCROLLABLE CARDS
                ========================= */}

                <ScrollView
                    ref={scrollRef}

                    showsVerticalScrollIndicator={false}

                    onScroll={handleScroll}

                    scrollEventThrottle={16}

                    contentContainerStyle={styles.scrollContent}
                >

                    {CARD_DATA.map((card, index) => (

                        <Animated.View
                            key={card.id}
                            style={[
                                styles.cardWrapper,

                                {
                                    transform: [
                                        {
                                            scale:
                                                index === currentIndex
                                                    ? pressScale
                                                    : 1,
                                        },
                                    ],
                                },
                            ]}
                        >

                            <Pressable

                                onPress={handleDoubleTap}

                                onLongPress={scrollToNextCard}

                                delayLongPress={600}

                                onPressIn={handlePressIn}

                                onPressOut={handlePressOut}

                                style={styles.card}
                            >

                                {/* =========================
                                    IMAGE
                                ========================= */}

                                <View style={styles.imageContainer}>

                                    <Image
                                        source={card.imageUrl}
                                        style={styles.cardImage}
                                        resizeMode="cover"
                                    />


                                    {/* Image Overlay */}

                                    <View style={styles.imageOverlay} />


                                    {/* Category */}

                                    <View style={styles.categoryBadge}>

                                        <Text style={styles.categoryText}>
                                            FOOD
                                        </Text>

                                    </View>


                                    {/* Number */}

                                    <View style={styles.numberBadge}>

                                        <Text style={styles.numberText}>
                                            {index + 1}
                                        </Text>

                                    </View>

                                </View>


                                {/* =========================
                                    CARD BODY
                                ========================= */}

                                <View style={styles.cardBody}>

                                    <Text
                                        style={styles.cardTitle}
                                        numberOfLines={2}
                                    >
                                        {card.title}
                                    </Text>


                                    <Text
                                        style={styles.cardDescription}
                                        numberOfLines={4}
                                    >
                                        {card.description}
                                    </Text>


                                    {/* =========================
                                        FOOTER
                                    ========================= */}

                                    <View style={styles.cardFooter}>

                                        <View style={styles.readTime}>

                                            <Text style={styles.readIcon}>
                                                ⏱
                                            </Text>

                                            <Text style={styles.readText}>
                                                5 min read
                                            </Text>

                                        </View>


                                        <View style={styles.arrowButton}>

                                            <Text style={styles.arrow}>
                                                →
                                            </Text>

                                        </View>

                                    </View>

                                </View>

                            </Pressable>

                        </Animated.View>

                    ))}

                </ScrollView>


                {/* =========================
                    PROGRESS
                ========================= */}

                <View style={styles.progressContainer}>

                    {CARD_DATA.map((_, index) => (

                        <View
                            key={index}

                            style={[
                                styles.progressDot,

                                index === currentIndex &&
                                styles.activeProgressDot,
                            ]}
                        />

                    ))}

                </View>


                {/* =========================
                    BOTTOM TEXT
                ========================= */}

                <Text style={styles.bottomText}>
                    Discover something new every time
                </Text>

            </SafeAreaView>

        </SafeAreaProvider>

    );
}


const styles = StyleSheet.create({

    // =========================
    // SCREEN
    // =========================

    container: {
        flex: 1,

        backgroundColor: '#F5F7FC',

        alignItems: 'center',
    },


    // =========================
    // HEADER
    // =========================

    header: {

        width: '100%',

        paddingHorizontal: 24,
        paddingTop: 15,

        flexDirection: 'row',

        alignItems: 'center',

        justifyContent: 'space-between',
    },


    smallTitle: {

        fontSize: 13,

        fontWeight: '600',

        color: '#7B8195',

        marginBottom: 3,
    },


    title: {

        fontSize: 25,

        fontWeight: '800',

        color: '#1F2965',
    },


    counter: {

        paddingHorizontal: 13,
        paddingVertical: 8,

        borderRadius: 20,

        backgroundColor: '#E9ECFA',
    },


    counterText: {

        fontSize: 13,

        fontWeight: '800',

        color: '#1F2965',
    },


    counterTotal: {

        fontWeight: '500',

        color: '#8A8FA5',
    },


    // =========================
    // HINT
    // =========================

    hintContainer: {

        flexDirection: 'row',

        alignItems: 'center',

        marginTop: 18,
        marginBottom: 14,
    },


    hintIcon: {

        fontSize: 14,

        marginRight: 6,
    },


    hintText: {

        fontSize: 12,

        color: '#858A9D',

        fontWeight: '500',
    },


    // =========================
    // SCROLL
    // =========================

    scrollContent: {

        paddingBottom: 20,

        alignItems: 'center',
    },


    // =========================
    // CARD
    // =========================

    cardWrapper: {
        width: width * 0.87,

        height: height * 0.64,

        marginBottom: 20,

        borderRadius: 26,

        shadowColor: '#000',

        shadowOffset: {
            width: 0,
            height: 12,
        },

        shadowOpacity: 0.16,

        shadowRadius: 22,

        elevation: 10,
    },


    card: {

        flex: 1,

        overflow: 'hidden',

        borderRadius: 26,

        backgroundColor: '#FFFFFF',
    },


    // =========================
    // IMAGE
    // =========================

    imageContainer: {

        height: '55%',

        position: 'relative',
    },


    cardImage: {

        width: '100%',

        height: '100%',
    },


    imageOverlay: {

        position: 'absolute',

        left: 0,
        right: 0,
        bottom: 0,

        height: 100,

        backgroundColor: 'rgba(0,0,0,0.18)',
    },


    categoryBadge: {

        position: 'absolute',

        top: 16,
        left: 16,

        paddingHorizontal: 12,
        paddingVertical: 7,

        borderRadius: 20,

        backgroundColor: 'rgba(255,255,255,0.9)',
    },


    categoryText: {

        fontSize: 10,

        fontWeight: '800',

        letterSpacing: 1,

        color: '#1F2965',
    },


    numberBadge: {

        position: 'absolute',

        right: 16,
        top: 16,

        width: 36,
        height: 36,

        borderRadius: 18,

        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor: 'rgba(31,41,101,0.85)',
    },


    numberText: {

        fontSize: 13,

        fontWeight: '800',

        color: '#FFFFFF',
    },


    // =========================
    // BODY
    // =========================

    cardBody: {

        flex: 1,

        padding: 20,

        justifyContent: 'space-between',
    },


    cardTitle: {

        fontSize: 24,

        fontWeight: '800',

        color: '#1B2140',

        lineHeight: 30,
    },


    cardDescription: {

        marginTop: 8,

        fontSize: 14,

        lineHeight: 21,

        color: '#71768A',
    },


    // =========================
    // FOOTER
    // =========================

    cardFooter: {

        marginTop: 15,

        flexDirection: 'row',

        alignItems: 'center',

        justifyContent: 'space-between',
    },


    readTime: {

        flexDirection: 'row',

        alignItems: 'center',
    },


    readIcon: {

        fontSize: 14,

        marginRight: 6,
    },


    readText: {

        fontSize: 12,

        fontWeight: '600',

        color: '#8A8FA0',
    },


    arrowButton: {

        width: 42,
        height: 42,

        borderRadius: 21,

        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor: '#1F2965',
    },


    arrow: {

        fontSize: 20,

        fontWeight: '600',

        color: '#FFFFFF',
    },


    // =========================
    // PROGRESS
    // =========================

    progressContainer: {

        flexDirection: 'row',

        alignItems: 'center',

        marginTop: 10,
    },


    progressDot: {

        width: 7,
        height: 7,

        borderRadius: 4,

        marginHorizontal: 4,

        backgroundColor: '#D5D8E4',
    },


    activeProgressDot: {

        width: 24,

        backgroundColor: '#1F2965',
    },


    // =========================
    // BOTTOM
    // =========================

    bottomText: {

        marginTop: 10,

        fontSize: 11,

        color: '#9A9EAF',

        fontWeight: '500',
    },

});