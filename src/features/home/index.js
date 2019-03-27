import React from 'react';
import { ScrollView, View } from 'react-native';

import Indicadores from './components/indicadores';
import Calendario from './components/calendario';
import styles from '../../config/style';

const Home = () => (
  <View style={styles.container}>
    <ScrollView>
      <Indicadores />
      <Calendario />
    </ScrollView>
  </View>
);

export default Home;
