import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { SETTINGS_SCREEN } from '../../constants';
import { RootStackParamList } from '../../navigation/AppStack';

function Settings() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <TouchableOpacity onPress={() => navigation.navigate(SETTINGS_SCREEN)}>
      <Svg width={23} height={24} viewBox="0 0 23 24" fill="none">
        <Path
          d="M20.293 13.175c.05-.375.074-.763.074-1.175 0-.4-.025-.8-.086-1.175l2.5-1.975a.62.62 0 00.148-.762l-2.365-4.15c-.148-.276-.456-.363-.727-.276l-2.943 1.2A8.67 8.67 0 0014.9 3.688L14.456.514A.599.599 0 0013.865 0h-4.73c-.295 0-.53.212-.578.512l-.444 3.175c-.726.3-1.391.713-1.995 1.175l-2.943-1.2c-.271-.1-.579 0-.727.276L.096 8.088c-.148.262-.098.587.148.762l2.5 1.975c-.062.375-.111.788-.111 1.175s.025.8.086 1.175L.22 15.15a.62.62 0 00-.148.762l2.365 4.15c.148.275.456.363.727.275l2.943-1.2A8.67 8.67 0 008.1 20.313l.443 3.175c.062.3.296.513.591.513h4.73a.577.577 0 00.578-.512l.444-3.175a8.42 8.42 0 001.995-1.175l2.943 1.2c.271.1.579 0 .727-.276l2.364-4.15c.148-.275.087-.587-.148-.762l-2.475-1.975zM11.5 16.5c-2.438 0-4.434-2.025-4.434-4.5S9.063 7.5 11.5 7.5s4.434 2.025 4.434 4.5-1.996 4.5-4.434 4.5z"
          fill="#fff"
        />
      </Svg>
    </TouchableOpacity>
  );
}

export default Settings;
