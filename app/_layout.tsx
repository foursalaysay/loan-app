import { Stack } from "expo-router"
import { PaperProvider } from 'react-native-paper';

export const StackLayout = () => {
  return (
    <PaperProvider>
          <Stack>
              <Stack.Screen 
              name="(tabs)"
              options={{headerShown : false}}
              />
          </Stack>
    </PaperProvider>
  )
}