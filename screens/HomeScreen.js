import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Home Screen</Text>
            <Button
                title="Go to Intro"
                onPress={() => navigation.navigate('Intro')}
            />
        </View>
    );
};

export default HomeScreen;
