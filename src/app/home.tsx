import React, { useState } from 'react';
import { Text, View, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { IconCircleCheck, IconTrash, IconCircle, IconCirclePlus } from "@tabler/icons-react-native";
import { s } from "./styles";
import { colors } from '@/styles/colors';
import { Button } from '@/components/button';

type Task = {
  id: string;
  text: string;
  completed: boolean;
};

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskText, setTaskText] = useState('');

  const addTask = () => {
    if (taskText.trim()) {
      setTasks([...tasks, { id: Date.now().toString(), text: taskText, completed: false }]);
      setTaskText('');
    }
  };

  const toggleTaskCompletion = (id: string) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <View style={s.container}>
      <View style={s.topSection}>
        <Text style={s.logo}>Logo</Text>
      </View>
      <View style={s.middleSection}>
        <View style={s.inputContainer}>
          <TextInput
            style={s.input}
            placeholder="Adicionar nova tarefa"
            placeholderTextColor={colors.gray[500]}
            value={taskText}
            onChangeText={setTaskText}
          />
        </View>
        <Button style={s.addButton} onPress={addTask}>
          <Button.Icon icon={IconCirclePlus} />
        </Button>
      </View>
      <View style={s.bottomSection}>
        <FlatList
          data={tasks}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={s.taskContainer}>
              <TouchableOpacity onPress={() => toggleTaskCompletion(item.id)}>
                {item.completed ? (
                  <IconCircleCheck size={24} color={colors.gray[700]} />
                ) : (
                  <IconCircle size={24} color={colors.gray[700]} />
                )}
              </TouchableOpacity>
              <Text style={item.completed ? s.taskTextCompleted : s.taskText}>
                {item.text}
              </Text>
              <TouchableOpacity onPress={() => deleteTask(item.id)}>
                <IconTrash size={24} color={colors.red.base} />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </View>
  );
}