import React, { useState, useRef } from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    Image, 
    ScrollView, 
    TouchableOpacity, 
    Dimensions,
    PanResponder,
    Animated
} from 'react-native';

const { width } = Dimensions.get('window');

const ingredients = {
    mainIngredients: [
        { item: "Roti sandwich", amount: "2 iris (roti tawar, sourdough, atau pilihan Anda)" },
        { item: "Tuna kaleng" ,amount:"1 Kaleng",note:"(tiriskan)"},
        { item: "Mayones", amount: "2 Sendok makan"},
        { item: "Sriracha atau saus sambal", amount: "1 Sendok teh", note:"(sesuaikan dengan selera pedas)"},
        { item: "Daun selada", amount: "1-2 lembar"},
        { item: "Garam dan merica", amount: "Secukupnya"},
    ],
    optionalIngredients: [
        { item: "Bawang bombai cincang halus", note: "1 sendok makan(opsional)"},,
    ]
};

const cookingSteps = [
    {
        step: 1,
        title: "Campurkan Tuna dan Saus",
        description: "Dalam mangkuk, campurkan tuna kaleng yang telah ditiriskan dengan mayones dan sriracha. Aduk hingga merata. Tambahkan garam dan merica sesuai selera."
    },
    {
        step: 2,
        title: "Tambahkan Bahan Tambahan",
        description: "Jika suka, tambahkan bawang bombai cincang halus untuk memberikan rasa renyah dan sedikit rasa manis."
    },
    {
        step: 3,
        title: "Siapkan Roti",
        description: "Panggang atau bakar roti sandwich di atas wajan datar hingga kecokelatan dan renyah di luar, jika diinginkan."
    },
    {
        step: 4,
        title: "Rakit Sandwich",
        description: "Letakkan daun selada di atas satu irisan roti, lalu tambahkan irisan tomat. Oleskan campuran tuna pedas di atasnya, ratakan hingga merata."
    },
    {
        step: 5,
        title: "Tutup dan Sajikan",
        description: "Tutup dengan irisan roti lainnya. Potong sandwich menjadi dua, dan sajikan hangat atau dingin."
    }
];

const reviews = [
    {
        name: "Justin",
        rating: 5,
        comment: "Yummy enak dimulut"
    },
    {
        name: "Kevin",
        rating: 5,
        comment: "Masak dua kali gas"
    },
    {
        name: "Jason",
        rating: 5,
        comment: "Enakkk"
    }
];

const StarRating = ({ rating }) => {
    return (
        <View style={styles.starContainer}>
            {[1, 2, 3, 4, 5].map((star) => (
                <Text key={star} style={styles.star}>
                    {star <= rating ? "★" : "☆"}
                </Text>
            ))}
        </View>
    );
};

const NasiGorengDetail = () => {
    const [activeStep, setActiveStep] = useState(0);
    const pan = useRef(new Animated.ValueXY()).current;
    
    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderGrant: () => {
            pan.setOffset({
                x: pan.x._value,
                y: 0
            });
        },
        onPanResponderMove: Animated.event([
            null,
            { dx: pan.x, dy: pan.y }
        ], { useNativeDriver: false }),
        onPanResponderRelease: (_, gesture) => {
            pan.flattenOffset();
            
            if (Math.abs(gesture.dx) > 120) { // Threshold for swipe
                if (gesture.dx > 0 && activeStep > 0) {
                    // Swipe right -> previous
                    setActiveStep(activeStep - 1);
                } else if (gesture.dx < 0 && activeStep < cookingSteps.length - 1) {
                    // Swipe left -> next
                    setActiveStep(activeStep + 1);
                }
            }
            
            Animated.spring(pan, {
                toValue: { x: 0, y: 0 },
                useNativeDriver: false
            }).start();
        }
    });

    const handleNext = () => {
        if (activeStep < cookingSteps.length - 1) {
            setActiveStep(activeStep + 1);
        }
    };

    const handlePrev = () => {
        if (activeStep > 0) {
            setActiveStep(activeStep - 1);
        }
    };

    return (
        <ScrollView style={styles.container}>
            <Image source={require('../assets/tuna.jpeg')} style={styles.image} />
            <Text style={styles.title}>Spicy Tuna Sandwich 🍞🐟🌶</Text>
            <Text style={styles.description}>
            Ribeye steak adalah potongan daging sapi yang berasal dari bagian rib (iga) dan dikenal karena teksturnya yang empuk serta marbling lemak yang kaya, yang memberikan cita rasa gurih dan juicy ketika dimasak. Potongan ini ideal untuk steak karena lemaknya membuat daging tetap lembut dan penuh rasa. Ribeye steak biasanya dimasak dengan teknik grilling atau pan-searing hingga tingkat kematangan sesuai selera, mulai dari rare hingga well-done.
            </Text>

            <View style={styles.ingredientsContainer}>
                <Text style={styles.ingredientsTitle}>Bahan-bahan</Text>
                
                <View style={styles.ingredientsBox}>
                    <Text style={styles.ingredientsSubtitle}>Bahan Utama:</Text>
                    {ingredients.mainIngredients.map((ingredient, index) => (
                        <View key={index} style={styles.ingredientRow}>
                            <Text style={styles.ingredientName}>{ingredient.item}</Text>
                            <Text style={styles.ingredientAmount}>
                                {ingredient.amount}
                                {ingredient.note && <Text style={styles.ingredientNote}> {ingredient.note}</Text>}
                            </Text>
                        </View>
                    ))}

                    <Text style={[styles.ingredientsSubtitle, styles.optionalTitle]}>Bahan Tambahan (Opsional):</Text>
                    {ingredients.optionalIngredients.map((ingredient, index) => (
                        <View key={index} style={styles.ingredientRow}>
                            <Text style={styles.ingredientName}>{ingredient.item}</Text>
                            {ingredient.note && <Text style={styles.ingredientNote}>{ingredient.note}</Text>}
                        </View>
                    ))}
                </View>
            </View>

            <View style={styles.stepsContainer}>
                <Text style={styles.stepsTitle}>Cara Memasak</Text>
                
                <Animated.View 
                    {...panResponder.panHandlers}
                    style={[styles.stepCard, pan.getLayout()]}
                >
                    <Text style={styles.stepNumber}>Langkah {cookingSteps[activeStep].step}/5</Text>
                    <Text style={styles.stepTitle}>{cookingSteps[activeStep].title}</Text>
                    <Text style={styles.stepDescription}>{cookingSteps[activeStep].description}</Text>
                </Animated.View>

                <View style={styles.navigationButtons}>
                    <TouchableOpacity 
                        onPress={handlePrev} 
                        style={[styles.navButton, activeStep === 0 && styles.disabledButton]}
                        disabled={activeStep === 0}
                    >
                        <Text style={styles.navButtonText}>←</Text>
                    </TouchableOpacity>

                    <View style={styles.stepIndicators}>
                        {cookingSteps.map((_, index) => (
                            <View 
                                key={index} 
                                style={[
                                    styles.indicator,
                                    activeStep === index && styles.activeIndicator
                                ]} 
                            />
                        ))}
                    </View>

                    <TouchableOpacity 
                        onPress={handleNext}
                        style={[styles.navButton, activeStep === cookingSteps.length - 1 && styles.disabledButton]}
                        disabled={activeStep === cookingSteps.length - 1}
                    >
                        <Text style={styles.navButtonText}>→</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.reviewsContainer}>
                <Text style={styles.reviewsTitle}>Reviews</Text>
                {reviews.map((review, index) => (
                    <View key={index} style={styles.reviewCard}>
                        <Text style={styles.reviewerName}>{review.name}</Text>
                        <StarRating rating={review.rating} />
                        <Text style={styles.reviewComment}>{review.comment}</Text>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        borderRadius: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 16,
        paddingHorizontal: 16,
    },
    description: {
        fontSize: 16,
        color: '#555',
        textAlign: 'center',
        paddingHorizontal: 16,
        marginBottom: 24,
    },
    ingredientsContainer: {
        padding: 16,
    },
    ingredientsTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    ingredientsBox: {
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        padding: 16,
        borderWidth: 1,
        borderColor: '#e0e0e0',
    },
    ingredientsSubtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 12,
        color: '#333',
    },
    optionalTitle: {
        marginTop: 20,
    },
    ingredientRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 8,
        flexWrap: 'wrap',
    },
    ingredientName: {
        fontSize: 16,
        color: '#444',
        flex: 1,
    },
    ingredientAmount: {
        fontSize: 16,
        color: '#666',
        flex: 2,
        marginLeft:10
    },
    ingredientNote: {
        fontSize: 14,
        color: '#888',
        fontStyle: 'italic',
    },
    stepsContainer: {
        padding: 16,
    },
    stepsTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    stepCard: {
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        padding: 16,
        marginBottom: 16,
        minHeight: 150,
    },
    stepNumber: {
        fontSize: 14,
        color: '#666',
        marginBottom: 8,
    },
    stepTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    stepDescription: {
        fontSize: 16,
        color: '#444',
        lineHeight: 24,
    },
    navigationButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    navButton: {
        backgroundColor: '#007AFF',
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    navButtonText: {
        color: 'white',
        fontSize: 20,
    },
    disabledButton: {
        backgroundColor: '#ccc',
    },
    stepIndicators: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    indicator: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#ccc',
        marginHorizontal: 4,
    },
    activeIndicator: {
        backgroundColor: '#007AFF',
        width: 10,
        height: 10,
    },
    reviewsContainer: {
        padding: 16,
        marginTop: 16,
    },
    reviewsTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    reviewCard: {
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        padding: 16,
        marginBottom: 12,
    },
    reviewerName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    starContainer: {
        flexDirection: 'row',
        marginVertical: 4,
    },
    star: {
        fontSize: 20,
        color: '#FFD700',
        marginRight: 2,
    },
    reviewComment: {
        fontSize: 14,
        color: '#444',
        marginTop: 4,
    },
});

export default NasiGorengDetail;