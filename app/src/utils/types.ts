export type movieProp = {
    id: string;
    title: string;
    image: string;
    movie_banner: string;
    description: string;
    director: string;
    producer: string;
    release_date: string;
    running_time: string;
    rt_score: string;
};

export type RootStackParamList = {
    Home: undefined;
    MovieDetails: {
        movie: movieProp;
    };
    Offline: undefined;
};
