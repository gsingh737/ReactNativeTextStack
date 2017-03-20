import React from 'react';
import {View, ActivityIndicator} from 'react-native';

export const Spinner = ({ size }) => {
    return (
        <View style={styles}>
            <ActivityIndicator size={size || 'large'} />
        </View>
    );
};

const styles = {
    spinnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }

};

