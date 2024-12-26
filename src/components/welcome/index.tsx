import { Image, Text, View } from 'react-native';
import { s } from './styles';

export function Welcome() {
  return (
    <View>
      <Image
        source={require("@/assets/logo.png")}
        style={s.logo}
      />
      <Text style={s.title}>Bem-vindo ao Todo!</Text>
      <Text style={s.subtitle}>O App para organizar as tarefas {"\n"} do seu dia-a-dia!</Text>
    </View>
  );
}