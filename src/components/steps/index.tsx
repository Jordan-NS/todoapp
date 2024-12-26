import { View, Text } from 'react-native';
import { s } from './styles';
import { Step } from "@/components/step";
import { IconCirclePlus, IconCircleCheck, IconTrash } from "@tabler/icons-react-native";

export function Steps() {
  return (
    <View style={s.container}>
      <Text style={s.title}>Veja como utilizar:</Text>
      <Step
       icon={IconCirclePlus} 
       title="Adicione uma nova tarefa"
       description="Click no botão para adicionar uma nova tarefa" 
       />

      <Step
       icon={IconCircleCheck} 
       title="Tarefa concluída" 
       description="Click no botão para marcar uma tarefa como concluída" 
       />

      <Step 
      icon={IconTrash} 
      title="Deletar uma tarefa" 
      description="Click no botão para deletar uma tarefa" 
      />

    </View>
  );
}