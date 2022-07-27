function UsersModel(
    id,
    name,
    username,
    biography,
    email,
    password,
    age,
    country
) {
    this.id = id
    this.name = name
    this.username = username
    this.biography = biography
    this.email = email
    this.password = password
    this.age = age
    this.country = country
}

module.exports = UsersModel