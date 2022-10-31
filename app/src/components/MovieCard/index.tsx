import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Container, MovieImg } from "./styles";
import { movieProp, RootStackParamList } from "../../utils/types";
interface MovieCardProps {
    movie: movieProp;
}

type navigationProp = StackNavigationProp<RootStackParamList, "MovieDetails">;

export function MovieCard({ movie }: MovieCardProps) {
    const navigation = useNavigation<navigationProp>();

    function handleChosenMovie() {
        navigation.navigate("MovieDetails", { movie });
    }

    return (
        <Container onPress={handleChosenMovie}>
            <MovieImg
                source={{
                    uri: movie.image,
                }}
            />
        </Container>
    );
}
