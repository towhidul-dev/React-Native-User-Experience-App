import React, { useState } from 'react';

import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Alert,
} from 'react-native';

import {
    SafeAreaProvider,
    SafeAreaView,
} from 'react-native-safe-area-context';

import { supabase } from '../supabase';


const HomeScreen = ({ navigation }) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [posts, setPosts] = useState([]);

    const fetchData = async () => {

        const { data, error } = await supabase
            .from('edushare')
            .select('*');

        if (error) {
            console.log('Supabase Error:', error);
            Alert.alert(
                'Error',
                error.message
            );
            return;
        }

        console.log('Fetched Data:', data);
        setPosts(data);
    };

    React.useEffect(() => {
        fetchData();
    }, []);

    const sendData = async () => {

        // Check if fields are empty
        if (!title || !description) {
            Alert.alert(
                'You do some mistake',
                'Please enter title and description'
            );

            return;
        }


        // Send data to Supabase
        const { data, error } = await supabase
            .from('edushare')
            .insert([
                {
                    title: title,
                    description: description,
                },
            ])
            .select();


        // If there is an error
        if (error) {

            console.log('Supabase Error:', error);

            Alert.alert(
                'Error',
                error.message
            );

            return;
        }


        // Success
        console.log('Inserted Data:', data);

        Alert.alert(
            'Great! You did it!',
            'Data added successfully!'
        );


        // Clear inputs
        setTitle('');
        setDescription('');

        // Fetch updated data
        fetchData();
    };


    return (
        <SafeAreaProvider>

            <SafeAreaView style={styles.container}>

                <Text style={styles.heading}>
                    Add EduShare Content
                </Text>


                {/* Title */}

                <TextInput
                    style={styles.input}
                    placeholder="Enter title"
                    value={title}
                    onChangeText={setTitle}
                />


                {/* Description */}

                <TextInput
                    style={[
                        styles.input,
                        styles.descriptionInput,
                    ]}
                    placeholder="Enter description"
                    value={description}
                    onChangeText={setDescription}
                    multiline
                />


                {/* Send Button */}

                <TouchableOpacity
                    style={styles.button}
                    onPress={sendData}
                >
                    <Text style={styles.buttonText}>
                        Send to Supabase
                    </Text>
                </TouchableOpacity>

                <View>

                    <Text style={styles.heading}>
                        EduShare Posts
                    </Text>

                    {posts.map((post, index) => (

                        <View key={index}>

                            <Text>
                                Title: {post.title}
                            </Text>

                            <Text>
                                Description: {post.description}
                            </Text>

                        </View>

                    ))}

                </View>


                {/* Go to SubHome */}

                <Text
                    style={styles.link}
                    onPress={() =>
                        navigation.navigate('SubHome')
                    }
                >
                    Go To SubHome
                </Text>

            </SafeAreaView>

        </SafeAreaProvider>
    );
};


export default HomeScreen;


const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#FFFFFF',
    },

    heading: {
        fontSize: 24,
        fontWeight: '700',
        marginBottom: 25,
    },

    input: {
        borderWidth: 1,
        borderColor: '#CCCCCC',
        borderRadius: 10,
        padding: 12,
        marginBottom: 15,
        fontSize: 16,
    },

    descriptionInput: {
        height: 120,
        textAlignVertical: 'top',
    },

    button: {
        backgroundColor: '#1F2965',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },

    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
    },

    link: {
        marginTop: 25,
        color: '#1F2965',
        fontSize: 16,
    },

});