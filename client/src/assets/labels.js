export const Labels = {
    colorLabel: [
        { text: "A Colore", value: "Color" },
        { text: "In Bianco e Nero", value: "Black and White" }
        ],
      contentRatingLabel: [
        { text: "Approved", value: "Approved" },
        { text: "G", value: "G" },
        { text: "GP", value: "GP" },
        { text: "M", value: "M" },
        { text: "NC-17", value: "NC-17" },
        { text: "Not Rated", value: "Not Rated" },
        { text: "Passed", value: "Passed" },
        { text: "PG", value: "PG" },
        { text: "PG-13", value: "PG-13" },
        { text: "Rated", value: "R" },
        { text: "TV-14", value: "TV-14" },
        { text: "TV-17", value: "TV-17" },
        { text: "TV-G", value: "TV-G" },
        { text: "TV-PG", value: "TV-PG" },
        { text: "TV-MA", value: "TV-MA" },
        { text: "TV-Y", value: "TV-Y" },
        { text: "Unrated", value: "Unrated" },
        { text: "X", value: "X" }
    ],
    genresLabel: [
        { text: "Action", value: "Action" },
        { text: "Adventure", value: "Adventure" },
        { text: "Animation", value: "Animation" },
        { text: "Biography", value: "Biography" },
        { text: "Comedy", value: "Comedy" },
        { text: "Crime", value: "Crime" },
        { text: "Documentary", value: "Documentary" },
        { text: "Drama", value: "Drama" },
        { text: "Family", value: "Family" },
        { text: "Fantasy", value: "Fantasy" },
        { text: "Film-Noir", value: "Film-Noir" },
        { text: "Game-Show", value: "Game-Show" },
        { text: "History", value: "History" },
        { text: "Horror", value: "Horror" },
        { text: "Music", value: "Music" },
        { text: "Musical", value: "Musical" },
        { text: "Mystery", value: "Mystery" },
        { text: "News", value: "News" },
        { text: "Reality-TV", value: "Reality-TV" },
        { text: "Romance", value: "Romance" },
        { text: "Sci-Fi", value: "Sci-Fi" },
        { text: "Short", value: "Short" },
        { text: "Sport", value: "Sport" },
        { text: "Thriller", value: "Thriller" },
        { text: "War", value: "War" },
        { text: "Western", value: "Western" }
    ],
    yearLabel: {
        min: 1916,
        max: 2019,
        interval: 1,
        field1: "min_year",
        field2: "max_year"
    },
    budgetLabel: {
        min: 0,
        max: 600000000,
        interval: 20,
        field1: "min_budget",
        field2: "max_budget",
        marks: ['1k', '50k', '100k', '500k', '1Ml', '50Ml','100Ml', '400Ml', '800Ml']

    },
    grossLabel: {
        min: 0,
        max: 800,
        interval: 20,
        field1: "min_gross",
        field2: "max_gross",
        marks: ['1k', '50k', '100k', '500k', '1Ml', '50Ml','100Ml', '400Ml', '800Ml']
    },
    ratingLabel: {
        min: 0,
        max: 10,
        interval: 1,
        field1: "min_rating",
        field2: "max_rating"
    },
    durationLabel: {
        min: 0,
        max: 600,
        interval: 30,
        field1: "min_duration",
        field2: "max_duration"
    },
    criticLabel: {
        min: 0,
        max: 1000,
        interval: 50,
        field1: "min_critic",
        field2: "max_critic"
    },
    toptenTypeLabel: [
        { value: 'movie_facebook_likes', text: 'Per like' },
        { value: 'imdb_score', text: 'Per voto' },
    ],
    castLabel: [
        { value: '1', text: 'Più di 1 film' },
        { value: '2', text: 'Più di 2 film' },
        { value: '3', text: 'Più di 3 film' },
        { value: '4', text: 'Più di 4 film' },
        { value: '5', text: 'Più di 5 film' },
        { value: '6', text: 'Più di 6 film' },
        { value: '7', text: 'Più di 7 film' },
    ]
}