import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { MovieOfflineCard } from "../../components/MovieOfflineCard";
import { offlineMovie, selectorMovie } from "../../redux/movieSlice";
import { movieProp } from "../../utils/types";
import { Container } from "./styles";

export function Offline() {
    let { movie } = useSelector(selectorMovie);

    const [moviesOffline, setMoviesOffline] = useState<movieProp[]>([]);
    const dispatch = useDispatch();

    useEffect(() => {
        if (movie != null) {
            setMoviesOffline((moviesOffline) => [...moviesOffline, movie]);
            dispatch(offlineMovie(null));
        }
    }, [movie]);

    return (
        <Container>
            {moviesOffline.length > 0 ? (
                <FlatList
                    data={moviesOffline}
                    renderItem={({ item }) => <MovieOfflineCard movie={item} />}
                />
            ) : null}
        </Container>
    );
}
