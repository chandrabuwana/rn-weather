import { Provider } from "react-redux";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Navigator from "@navigator";
import store from "./src/store/store";
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();
if (__DEV__) {
  import('./ReactotronConfig').then(() => { });
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Provider store={store}>
          <Navigator />
        </Provider>
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
}
