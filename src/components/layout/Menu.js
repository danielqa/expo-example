import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Badge, List, Searchbar } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';

import styles from '../../config/style';

export default class Menu extends Component {
    state = {
      search: '',
    };

    updateSearch = (search) => {
      this.setState({ search });
    };

    render() {
      const { search } = this.state;

      return (
        <ScrollView>
          <SafeAreaView style={styles.menu}>
            <Searchbar
              placeholder="Busca"
              onChangeText={this.updateSearch}
              value={search}
              style={{
                paddingTop: 25,
                paddingLeft: 15,
                paddingRight: 15,
              }}
            />
            <List.Section>
              <List.Item
                title="Painel de controle"
                left={() => (
                  <List.Icon
                    color="#000"
                    icon={() => <FontAwesome name="calendar" color="#333" size={24} />}
                  />
                )}
              />
              <List.Item
                title="Notificações"
                left={() => (
                  <List.Icon
                    color="#000"
                    icon={() => <FontAwesome name="exclamation-circle" color="#333" size={24} />}
                  />
                )}
                right={() => (
                  <List.Icon
                    color="#000"
                    icon={() => <Badge>3</Badge>}
                  />
                )}
              />
              <List.Item
                title="Processos"
                left={() => (
                  <List.Icon
                    color="#000"
                    icon={() => <FontAwesome name="gavel" color="#333" size={24} />}
                  />
                )}
              />
              <List.Item
                title="Pessoas"
                left={() => (
                  <List.Icon
                    color="#000"
                    icon={() => <FontAwesome name="users" color="#333" size={24} />}
                  />
                )}
              />
              <List.Item
                title="Configurações"
                left={() => (
                  <List.Icon
                    color="#000"
                    icon={() => <FontAwesome name="cogs" color="#333" size={24} />}
                  />
                )}
              />
            </List.Section>
          </SafeAreaView>
        </ScrollView>
      );
    }
}
