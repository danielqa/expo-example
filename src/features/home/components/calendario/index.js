import React from 'react';
import { View } from 'react-native';
import {
  Avatar, Badge, Chip, List, Title,
} from 'react-native-paper';
import { Calendar } from 'react-native-calendars';
import { FiltrosRapidos } from './style';

const list = [
  {
    id: 1,
    title: 'Agravo de instrumento',
    time: '08:00',
    description: 'I started doing UI kits! Can you help ...',
  },
  {
    id: 2,
    title: 'Agravo de instrumento',
    time: '08:00',
    description: 'I started doing UI kits! Can you help ...',
  },
  {
    id: 3,
    title: 'Agravo de instrumento',
    time: '08:00',
    description: 'I started doing UI kits! Can you help ...',
  },
  {
    id: 4,
    title: 'Agravo de instrumento',
    time: '08:00',
    description: 'I started doing UI kits! Can you help ...',
  },
  {
    id: 5,
    title: 'Agravo de instrumento',
    time: '08:00',
    description: 'I started doing UI kits! Can you help ...',
  },
];

const Calendario = () => (
  <View>
    <Calendar />
    <Title style={{ padding: 20 }}>Atividades do dia</Title>
    <FiltrosRapidos horizontal>
      <Chip style={{ marginRight: 10, marginLeft: 15 }} mode="outlined" icon={() => <Badge>15</Badge>}>Todas</Chip>
      <Chip style={{ marginRight: 10 }} mode="outlined" icon={() => <Badge>03</Badge>}>Tarefas</Chip>
      <Chip style={{ marginRight: 10 }} mode="outlined" icon={() => <Badge>02</Badge>}>Audiências</Chip>
      <Chip style={{ marginRight: 10 }} mode="outlined" icon={() => <Badge>10</Badge>}>Compromissos</Chip>
    </FiltrosRapidos>
    <View>
      {
        list.map(item => (
          <List.Item
            key={item.id}
            title={item.title}
            description={item.description}
            right={() => <Avatar.Image size={36} source={require('../../../../../assets/avatar.png')} />}
          />
        ))
      }
    </View>
  </View>
);

export default Calendario;
