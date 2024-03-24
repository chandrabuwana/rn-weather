import Reactotron, { asyncStorage } from "reactotron-react-native";
const reactotron = Reactotron.configure({
  name: "rn-weather",
  host: "192.168.0.169",
})
  .useReactNative({
    asyncStorage: true, // there are more options to the async storage.
    networking: {
      // optionally, you can turn it off with false.
      ignoreUrls: /symbolicate/,
    },
    editor: false, // there are more options to editor
    errors: { veto: (stackFrame) => false }, // or turn it off with false
    overlay: false, // just turning off overlay
  })
  .use(asyncStorage())
  .connect();
export default reactotron;
