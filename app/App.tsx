import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { Navigation } from "./src/Navigation";
import store from "./src/redux/store";

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Navigation />
                <StatusBar style="light" />
            </NavigationContainer>
        </Provider>
    );
}
