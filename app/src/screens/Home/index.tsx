import React, { useEffect, useState } from "react";
import { FlatList, Text } from "react-native";
import { FilmCard } from "../../components/FilmCard";
import api from "../../services";

import { Container, Scroll, Tittle } from "./styles";

export interface Film {
    id: string;
    title: string;
    image: string;
    description: string;
    director: string;
    producer: string;
    release_date: string;
    running_time: string;
    rt_score: string;
}

export function Home() {
    const [films, setFilms] = useState<Film[]>([]);

    useEffect(() => {
        api.get("/").then((response) => setFilms(response.data));
    }, []);

    return (
        <Container>
            <Scroll>
                <Tittle>Popular</Tittle>
                <FlatList
                    data={films}
                    renderItem={({ item }) => (
                        <FilmCard
                            film={item}
                            height={"300px"}
                            width={"200px"}
                        />
                    )}
                    keyExtractor={(item) => item.id}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
                <Tittle>Pra você</Tittle>
                <FlatList
                    data={films}
                    renderItem={({ item }) => (
                        <FilmCard
                            film={item}
                            height={"150px"}
                            width={"110px"}
                        />
                    )}
                    numColumns={3}
                    columnWrapperStyle={{ justifyContent: "space-between" }}
                />
            </Scroll>
        </Container>
    );
}
