import React from 'react';
import { Text, View } from 'react-native';

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const Maps = ({
    params,
}) => (
    <View>
        <MapView
            provider={PROVIDER_GOOGLE}
        />
    </View>
);

export default Maps;
