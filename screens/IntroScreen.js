import React from 'react';
import { View, Text, Button } from 'react-native';

const IntroScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Ravikant Tiwari</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.goBack()}
            />
        </View>
    );
};

export default IntroScreen;
