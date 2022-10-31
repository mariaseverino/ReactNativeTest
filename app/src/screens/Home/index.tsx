import { Feather } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import Carousel from "react-native-snap-carousel";
import { MovieCard } from "../../components/MovieCard";
import api from "../../services";
import colors from "../../utils/colors";
import { movieProp } from "../../utils/types";

import { Container, Tittle, Search, WrapperSearch } from "./styles";

export function Home() {
    const [movies, setMovies] = useState<movieProp[]>([]);

    useEffect(() => {
        api.get("?limit=5").then((response) => setMovies(response.data));
    }, []);

    return (
        <Container>
            <WrapperSearch>
                <Feather name="search" size={24} color={colors.dark.text} />
                <Search />
            </WrapperSearch>
            <Tittle>Movies Ghibli</Tittle>
            <Carousel
                data={movies}
                renderItem={({ item }) => <MovieCard movie={item} />}
                sliderWidth={330}
                itemWidth={200}
                useScrollView={true}
                loop={true}
            />
        </Container>
    );
}
