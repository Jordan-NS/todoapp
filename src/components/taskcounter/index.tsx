import React from 'react';
import { View, Text } from 'react-native';
import { s } from './styles';

type TaskCounterProps = {
  created: number;
  completed: number;
};

export function TaskCounter({ created, completed }: TaskCounterProps) {
  return (
    <View style={s.container}>
      <View style={s.counter}>
        <Text style={s.createdText}>Criadas</Text>
        <Text style={s.counterNumber}>{created}</Text>
      </View>
      <View style={s.counter}>
        <Text style={s.concludeText}>Concluídas</Text>
        <Text style={s.counterNumber}>{completed}</Text>
      </View>
    </View>
  );
}

