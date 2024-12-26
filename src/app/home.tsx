import React, { useState } from 'react';
import { Text, View, TextInput, FlatList, TouchableOpacity, Image, StatusBar } from 'react-native';
import { IconCheck, IconTrash, IconCircle, IconCirclePlus, IconBorderRadius } from "@tabler/icons-react-native";
import { s } from "./styles";
import { colors } from '@/styles/colors';
import { Button } from '@/components/button';
import { TaskCounter } from '@/components/taskcounter';
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

  const createdTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;

  return (
    <View style={s.container}>
      <StatusBar barStyle="light-content" />
      <View style={s.topSection}>
        <View style={s.logoContainer}>
          <Image source={require('@/assets/flogo.png')} style={s.logo}/>
        </View>
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
          <IconCirclePlus style={s.addIcon} />
        </Button>
      </View>
        <TaskCounter created={createdTasks} completed={completedTasks} />
      <View style={s.bottomSection}>
        <FlatList
          style={s.flatListContent}
          data={tasks}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={s.taskContainer}>
              <TouchableOpacity onPress={() => toggleTaskCompletion(item.id)}>
                {item.completed ? (
                  <View style={s.iconChecked}>
                  <IconCheck size={16} color={colors.gray[100]} />
                  </View>
                ) : (
                  <IconCircle size={24} color={colors.blue.base} />
                )}
              </TouchableOpacity>
              <Text style={item.completed ? s.taskTextCompleted : s.taskText}>
                {item.text}
              </Text>
              <TouchableOpacity onPress={() => deleteTask(item.id)}>
                <IconTrash size={24} color={colors.gray[300]} />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
      
    </View>
  );
}