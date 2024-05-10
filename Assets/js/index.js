const movies = [
    { "title": "The Shawshank Redemption", "cast": "Tim Robbins, Morgan Freeman", "category": "Drama", "releaseDate": "1994-10-14", "budget": "$25 million" },
    { "title": "The Godfather", "cast": "Marlon Brando, Al Pacino", "category": "Crime", "releaseDate": "1972-03-24", "budget": "$6-7 million" },
    { "title": "The Dark Knight", "cast": "Christian Bale, Heath Ledger", "category": "Action", "releaseDate": "2008-07-18", "budget": "$185 million" },
    { "title": "Pulp Fiction", "cast": "John Travolta, Uma Thurman", "category": "Crime", "releaseDate": "1994-10-14", "budget": "$8-8.5 million" },
    { "title": "The Lord of the Rings: The Return of the King", "cast": "Elijah Wood, Viggo Mortensen", "category": "Adventure", "releaseDate": "2003-12-17", "budget": "$94 million" },
    { "title": "Forrest Gump", "cast": "Tom Hanks, Robin Wright", "category": "Drama", "releaseDate": "1994-07-06", "budget": "$55 million" },
    { "title": "Inception", "cast": "Leonardo DiCaprio, Joseph Gordon-Levitt", "category": "Action", "releaseDate": "2010-07-16", "budget": "$160-190 million" },
    { "title": "The Matrix", "cast": "Keanu Reeves, Laurence Fishburne", "category": "Action", "releaseDate": "1999-03-31", "budget": "$63 million" },
    { "title": "Gladiator", "cast": "Russell Crowe, Joaquin Phoenix", "category": "Action", "releaseDate": "2000-05-05", "budget": "$103 million" },
    { "title": "The Silence of the Lambs", "cast": "Jodie Foster, Anthony Hopkins", "category": "Thriller", "releaseDate": "1991-02-14", "budget": "$19 million" },
    { "title": "Schindler's List", "cast": "Liam Neeson, Ben Kingsley", "category": "Drama", "releaseDate": "1993-12-15", "budget": "$22 million" },
    { "title": "Avatar", "cast": "Sam Worthington, Zoe Saldana", "category": "Adventure", "releaseDate": "2009-12-18", "budget": "$237 million" }
];

function displayMovies(movieArray) {
    const movieListDiv = document.getElementById("movieList");
    movieListDiv.innerHTML = "";

    movieArray.forEach(movie => {
        const movieDiv = document.createElement("div");
        movieDiv.classList.add("movie");

        const title = document.createElement("h2");
        title.textContent = movie.title;
        movieDiv.appendChild(title);

        const category = document.createElement("p");
        category.textContent = "Category: " + movie.category;
        movieDiv.appendChild(category);

        const releaseDate = document.createElement("p");
        releaseDate.textContent = "Release Date: " + movie.releaseDate;
        movieDiv.appendChild(releaseDate);

        const detailsFavoriteContainer = document.createElement("div");
        detailsFavoriteContainer.classList.add("details-favorite-container");

        const detailsButton = document.createElement("button");
        detailsButton.textContent = "See Details";
        detailsButton.classList.add("show-details");
        detailsButton.addEventListener("click", function() {
            toggleDetails(movieDiv);
        });
        detailsFavoriteContainer.appendChild(detailsButton);

        const favoriteButton = document.createElement("button");
        favoriteButton.innerHTML = "<i class='fas fa-heart'></i>";
        favoriteButton.classList.add("favorite-button");
        favoriteButton.addEventListener("click", function(event) {
            event.stopPropagation();
            toggleFavorite(movie);
        });
        detailsFavoriteContainer.appendChild(favoriteButton);

        movieDiv.appendChild(detailsFavoriteContainer);

        const detailsContainer = document.createElement("div");
        detailsContainer.classList.add("movie-details");

        const cast = document.createElement("p");
        cast.textContent = "Cast: " + movie.cast;
        detailsContainer.appendChild(cast);

        const budget = document.createElement("p");
        budget.textContent = "Budget: " + movie.budget;
        detailsContainer.appendChild(budget);

        movieDiv.appendChild(detailsContainer);

        movieListDiv.appendChild(movieDiv);
    });

    movieArray.forEach(movie => {
        displayFavoriteIcon(movie);
    });
}

displayMovies(movies);


function showAllMovies() {
    document.getElementById("searchInput").value = "";
    displayMovies(movies);
}