import * as React from 'react';
import { Button, View } from 'react-native';
import Monsters from '../Monsters/Monsters'
import styles from '../../styles/mainStyles'



export default function Nav() {
  return (
    <View>
        <Button style={styles.btn} title="Monsters" onPress={() => navigation.navigate('Monsters')}>Monsters</Button>
    </View>
  );
}