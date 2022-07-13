function MovieModel(
    id,
    title,
    subtitle,
    year,
    country,
    duration,
    genre,
    imdb,
    rotten
) {
    this.id = id,
    this.title = title,
    this.subtitle = subtitle,
    this.year = year,
    this.country = country,
    this.duration = duration,
    this.genre = genre,
    this.imdb = imdb,
    this.rotten = rotten
}

module.exports = MovieModel