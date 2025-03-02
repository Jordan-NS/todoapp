import { Text, View } from 'react-native';
import { colors } from '@/styles/theme';
import { s } from "./style";
import { IconProps } from '@tabler/icons-react-native';

type Props = {
  title: string;
  description: string;
  icon: React.ComponentType<IconProps>;
};

export function Step({ title, description, icon: Icon }: Props) {
  return (
    <View style={s.container}>
      {Icon && <Icon size={34} />}
      <View style={s.details}>
        <Text style={s.title}>{title}</Text>
        <Text style={s.description}>{description}</Text>
      </View>
    </View>
  );
}