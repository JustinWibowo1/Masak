import { StyleSheet, Text, View, Image, TouchableOpacity, SectionList, FlatList, TextInput } from 'react-native';
import React, { useState } from 'react';

const Home = ({ navigation }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const foodSections = [
        {
            title: 'Indonesian Food',
            data: [
                { id: '1', name: 'Nasi Goreng', status: 'Sedang Dimasak', time: '20 menit', image: require('../assets/nasigoreng.jpeg') },
                { id: '2', name: 'Sate Ayam', status: 'Belum Dimulai', time: '-', image: require('../assets/sate.jpeg') },
                { id: '3', name: 'Rendang', status: 'Selesai Dimasak', time: '-', image: require('../assets/rendang.jpeg') },
                { id: '4', name: 'Lontong Opor Ayam', status: 'Belum Dimulai', time: '-', image: require('../assets/lontong.jpeg') },
            ]
        },
        {
            title: 'Western Food',
            data: [
                { id: '5', name: 'Spaghetti', status: 'Sedang Dimasak', time: '5 menit', image: require('../assets/spaghetti.jpeg') },
                { id: '6', name: 'Rib Eye Steak', status: 'Sedang Dimasak', time: '45 menit', image: require('../assets/steak.jpeg') },
                { id: '7', name: 'Chicken Cordon Blue', status: 'Belum Dimulai', time: '-', image: require('../assets/cordon.jpeg') },
                { id: '8', name: 'Spicy Tuna Sandwich', status: 'Sedang Dimasak', time: '5 Menit', image: require('../assets/tuna.jpeg') },
            ]
        },
        {
            title: 'Junkfood',
            data: [
                { id: '9', name: 'Pizza', status: 'Belum Dimulai', time: '-', image: require('../assets/pizza.jpeg') },
                { id: '10', name: 'Burger', status: 'Sedang Dimasak', time: '2 Menit', image: require('../assets/burger.jpeg') },
                { id: '11', name: 'Kentang Goreng', status: 'Sedang Dimasak', time: '5 Menit', image: require('../assets/kentang.jpeg') },
                { id: '12', name: 'Caramel Popcorn', status: 'Belum Dimulai', time: '-', image: require('../assets/popcorn.jpeg') },
            ]
        },
        {
            title: 'Juice',
            data: [
                { id: '13', name: 'Jus Alpukat', status: 'Sedang Dimasak', time: '2 Menit', image: require('../assets/alpukat.jpeg') },
                { id: '14', name: 'Jus Strawberry', status: 'Sedang Dimasak', time: '5 Menit', image: require('../assets/stroberi.jpeg') },
                { id: '15', name: 'Jus Mangga', status: 'Belum Dimulai', time: '-', image: require('../assets/mangga.jpeg') },
                { id: '16', name: 'Jus Jeruk', status: 'Belum Dimulai', time: '-', image: require('../assets/jeruk.jpeg') },
            ]
        },
        {
            title: 'Dessert',
            data: [
                { id: '17', name: 'Es Buah', status: 'Sedang Dimasak', time: '10 Menit', image: require('../assets/esbuah.jpeg') },
                { id: '18', name: 'Dessert Oreo Box', status: 'Sedang Dimasak', time: '35 Menit', image: require('../assets/oreo.jpeg') },
                { id: '19', name: 'Chocolate Lava Cake', status: 'Sedang Dimasak', time: '50 Menit', image: require('../assets/lava.jpeg') },
                { id: '20', name: 'Chocolate S mores', status: 'Belum dimulai', time: '-', image: require('../assets/smores.jpeg') },
            ]
        }
    ];

    const categories = [
        { id: '1', name: 'Junkfood', image: require('../assets/junkfood.png') },
        { id: '2', name: 'Western Food', image: require('../assets/western.png') },
        { id: '3', name: 'Indonesian Food', image: require('../assets/indonesia.png') },
        { id: '4', name: 'Juice', image: require('../assets/juice.png') },
        { id: '5', name: 'Dessert', image: require('../assets/dessert.png') },
    ];

    const handleSearch = (text) => {
        setSearchQuery(text);
    };

    // Filter the foodSections based on the search query
    const filteredSections = foodSections.map(section => ({
        ...section,
        data: section.data.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase())),
    })).filter(section => section.data.length > 0);

    const renderFoodItem = ({ item }) => (
        <View style={styles.foodContainer}>
            <TouchableOpacity
                onPress={() => {
                    if (item.name === 'Nasi Goreng') {
                        navigation.navigate('NasiGoreng');
                    }
                    if (item.name === 'Sate Ayam') {
                        navigation.navigate('SateAyam');
                    }
                    if (item.name === 'Rendang') {
                        navigation.navigate('rendang');
                    }
                    if (item.name === 'Lontong Opor Ayam') {
                        navigation.navigate('LontongOporAyam');
                    }
                    if (item.name === 'Spaghetti') {
                        navigation.navigate('spaghetti');
                    }
                    if (item.name === 'Rib Eye Steak') {
                        navigation.navigate('ribeye');
                    }
                    if (item.name === 'Chicken Cordon Blue') {
                        navigation.navigate('chicken');
                    }
                    if (item.name === 'Spicy Tuna Sandwich') {
                        navigation.navigate('spicy');
                    }
                    if (item.name === 'Pizza') {
                        navigation.navigate('pizza');
                    }
                    if (item.name === 'Burger') {
                        navigation.navigate('burger');
                    }
                    if (item.name === 'Kentang Goreng') {
                        navigation.navigate('kentang');
                    }
                    if (item.name === 'Caramel Popcorn') {
                        navigation.navigate('popcorn');
                    }
                    if (item.name === 'Jus Alpukat') {
                        navigation.navigate('alpukat');
                    }
                    if (item.name === 'Jus Strawberry') {
                        navigation.navigate('stroberi');
                    }
                    if (item.name === 'Jus Mangga') {
                        navigation.navigate('mangga');
                    }
                    
                }}
            >
                <Image source={item.image} style={styles.foodImage} />
            </TouchableOpacity>
            <Text style={styles.foodName}>{item.name}</Text>
            <Text style={styles.foodStatus}>{item.status}</Text>
            <Text style={styles.foodTime}>Estimasi: {item.time}</Text>
        </View>
    );

    const renderCategoryItem = ({ item }) => (
        <TouchableOpacity style={styles.categoryContainer}>
            <Image source={item.image} style={styles.categoryImage} />
            <Text style={styles.categoryName}>{item.name}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../assets/logo.png')} style={styles.logo} />
                <TouchableOpacity onPress={() => navigation.navigate('register')}>
                    <Image source={require('../assets/signup.png')} style={styles.signup} />
                </TouchableOpacity>
                <Text style={styles.or}>Or</Text>
                <TouchableOpacity onPress={() => navigation.navigate('login')}>
                    <Image source={require('../assets/login.png')} style={styles.login} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../assets/orang.png')} style={styles.icon} />
                </TouchableOpacity>
            </View>

            <FlatList
                data={categories}
                renderItem={renderCategoryItem}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.categoryList}
            />

            <View style={styles.searchContainer}>
                <Image source={require('../assets/search.png')} style={styles.searchIcon} />
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search food..."
                    value={searchQuery}
                    onChangeText={handleSearch}
                />
            </View>

            <SectionList
                sections={filteredSections}
                renderItem={renderFoodItem}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.sectionHeader}>{title}</Text>
                )}
                keyExtractor={(item) => item.id}
                numColumns={2}
                contentContainerStyle={styles.foodList}
            />
        </View>
    );
};

export default Home;

// Style code remains the same as before.

// Add your styles here (same as before)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e2f6ff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    logo: {
        width: 50,
        height: 50,
        marginTop: 20,
    },
    signup: {
        width: 40,
        height: 20,
        marginHorizontal: 10,
        marginLeft: 150,
        marginTop: 20,
    },
    or: {
        fontSize: 10,
        fontWeight: 'bold',
        marginHorizontal: -5,
        marginTop: 20,
    },
    login: {
        width: 40,
        height: 20,
        marginHorizontal: 10,
        marginTop: 20,
    },
    icon: {
        width: 50,
        height: 50,
        marginLeft: 'auto',
        marginTop: 20,
    },
    categoryList: {
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    categoryContainer: {
        alignItems: 'center',
        marginRight: 15,
        paddingVertical: 5,
        paddingHorizontal: 5,
        width: 90,
    },
    categoryImage: {
        width: 70,
        height: 70,
        borderRadius: 8,
        marginBottom: 5,
    },
    categoryName: {
        fontSize: 12,
        textAlign: 'center',
        width: 80,
        height: 120
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: 'white',
        borderRadius: 50,
        marginHorizontal: 20,
        marginBottom: 10,
        marginTop: -10
    },
    searchIcon: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
    },
    foodList: {
        paddingHorizontal: 10,
        paddingBottom: 20,
    },
    sectionHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        padding: 10,
        backgroundColor: '#e0e0e0',
        textAlign: 'center',
        marginBottom: 10,
        width: '100%'
    },
    foodContainer: {
        flex: 1,
        backgroundColor: 'white',
        margin: 10,
        padding: 10,
        borderRadius: 8,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
    },
    foodImage: {
        width: 120,
        height: 120,
        borderRadius: 8,
    },
    foodName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 8,
        textAlign: 'center',
    },
    foodStatus: {
        fontSize: 14,
        color: 'gray',
        textAlign: 'center',
    },
    foodTime: {
        fontSize: 12,
        color: 'gray',
        marginTop: 4,
        textAlign: 'center',
    },
});