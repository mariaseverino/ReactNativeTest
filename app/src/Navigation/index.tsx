import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import { Home } from "../screens/Home";
import colors from "../utils/colors";
import { Offline } from "../screens/Offline";
import { MovieDetails } from "../screens/MovieDetails";

export function Navigation() {
    const { Navigator, Screen } = createStackNavigator();
    return (
        <Navigator>
            <Screen
                name="Root"
                component={BottomTabNavigator}
                options={{ headerShown: false }}
            />
            <Screen
                name="MovieDetails"
                component={MovieDetails}
                options={{
                    headerStyle: {
                        backgroundColor: colors.dark.background,
                        elevation: 0,
                    },

                    headerTintColor: colors.dark.text,
                }}
            />
        </Navigator>
    );
}

function BottomTabNavigator() {
    const { Navigator, Screen } = createBottomTabNavigator();
    return (
        <Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarActiveTintColor: colors.dark.secundary,
                tabBarStyle: {
                    backgroundColor: colors.dark.primary,
                    position: "absolute",
                    borderTopWidth: 0,
                    bottom: 15,
                    left: 15,
                    right: 15,
                    height: 60,
                    borderRadius: 14,
                },
            }}
        >
            <Screen
                name="Home"
                component={Home}
                options={{
                    headerStyle: {
                        backgroundColor: colors.dark.background,
                        elevation: 0,
                    },
                    headerTitleStyle: {
                        color: colors.dark.secundary,
                    },
                    tabBarIcon: ({ color }) => (
                        <Feather name="home" size={20} color={color} />
                    ),
                }}
            />
            <Screen
                name="Offline"
                component={Offline}
                options={{
                    headerStyle: {
                        backgroundColor: colors.dark.background,
                        elevation: 0,
                    },

                    headerTintColor: colors.dark.secundary,
                    tabBarIcon: ({ color }) => (
                        <Feather
                            name="download-cloud"
                            size={20}
                            color={color}
                        />
                    ),
                }}
            />
        </Navigator>
    );
}
