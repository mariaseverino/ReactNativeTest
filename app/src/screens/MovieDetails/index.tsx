import React, { useEffect, useState } from "react";
import { useRoute, RouteProp } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useDispatch } from "react-redux";
import { Feather } from "@expo/vector-icons";
import { offlineMovie } from "../../redux/movieSlice";
import {
    Container,
    MovieImage,
    Wrapper,
    Text,
    Subtitle,
    Button,
    ButtonText,
    Icon,
    Description,
    WrapperPlay,
} from "./styles";
import colors from "../../utils/colors";
import { movieProp, RootStackParamList } from "../../utils/types";

type routesProp = RouteProp<RootStackParamList, "MovieDetails">;
type navigationProp = StackNavigationProp<RootStackParamList, "MovieDetails">;

export function MovieDetails() {
    const route = useRoute<routesProp>();
    const navigation = useNavigation<navigationProp>();
    const { movie } = route.params;

    const [disabledButton, setDisabledButton] = useState<boolean>(false);
    const [opacityButton, setOpacityButton] = useState<number>(1);

    const dispatch = useDispatch();

    useEffect(() => {
        navigation.setOptions({
            title: movie.title,
        });
    });

    function handleOfflineMovie(movie: movieProp) {
        if (disabledButton == false) {
            dispatch(offlineMovie(movie));
            setDisabledButton(true);
            setOpacityButton(0.3);
        }
    }

    return (
        <Container>
            <Wrapper>
                <Text color={colors.dark.pink}>
                    release {movie.release_date}
                </Text>
                <Text color={colors.dark.yellow}>
                    <Feather name="clock" color={"#fff"} size={14} />
                    {movie.running_time} min
                </Text>
            </Wrapper>
            <WrapperPlay>
                <MovieImage source={{ uri: movie.movie_banner }} />
                <Icon>
                    <Feather name="play" size={30} color={"#000"} />
                </Icon>
            </WrapperPlay>
            <Subtitle>Description</Subtitle>
            <Description>{movie.description}</Description>
            <Button
                onPress={() => handleOfflineMovie(movie)}
                disabled={disabledButton}
                opacity={opacityButton}
            >
                <Feather name="download" color={"#fff"} size={18} />
                <ButtonText>Baixar</ButtonText>
            </Button>
        </Container>
    );
}
