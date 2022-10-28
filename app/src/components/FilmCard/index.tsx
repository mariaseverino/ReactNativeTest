import React from "react";
import { Film } from "../../screens/Home";

import { Container, Score, FilmImg } from "./styles";

interface FilmCardProps {
    film: Film;
    width: string;
    height: string;
}

export function FilmCard({ film, height, width }: FilmCardProps) {
    return (
        <Container height={height} width={width}>
            <FilmImg
                source={{
                    uri: film.image,
                }}
            />
            {width == "200px" ? <Score>{film.rt_score}</Score> : ""}
        </Container>
    );
}
