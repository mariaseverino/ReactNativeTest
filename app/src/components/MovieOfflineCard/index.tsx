import React from "react";
import { Feather } from "@expo/vector-icons";

import {
    Container,
    MovieContent,
    MovieImage,
    MovieTitle,
    Text,
    Wrapper,
} from "./styles";
import { movieProp } from "../../utils/types";
import colors from "../../utils/colors";

interface MovieOfflineCardProps {
    movie: movieProp;
}

export function MovieOfflineCard({ movie }: MovieOfflineCardProps) {
    return (
        <Container>
            <MovieImage
                source={{
                    uri: movie.image,
                }}
            />
            <MovieContent>
                <MovieTitle>{movie.title}</MovieTitle>
                <Wrapper>
                    <Text color={colors.dark.pink}>Movie</Text>

                    <Text color={colors.dark.yellow}>
                        <Feather name="clock" color={"#fff"} size={14} />{" "}
                        {movie.running_time}
                        min
                    </Text>
                </Wrapper>
            </MovieContent>
        </Container>
    );
}
