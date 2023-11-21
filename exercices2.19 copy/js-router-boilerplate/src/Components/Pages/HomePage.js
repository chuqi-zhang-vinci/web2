async function getAllMovies() {
  try{
    const response = await fetch('/api/films');
    if(!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);

    const movies = await response.json();

    return movies;
  } catch (err) {
    console.log('getAllMovies::error: ', err);
    throw err;
  }
}
async function renderMovies() {
  const movies = await getAllMovies();
  return movies;
}

const HomePage = async () => {
  const main = document.querySelector('main');
  const movies = await renderMovies();
  
  const movieElements = movies.map(movie => `
    <div class="row text-center">
      <div class="col-12">
        <h4>${movie.title}</h4>
        <p>${movie.id}</p>
        <p>Duration: ${movie.duration}</p>
        <p>Budget: ${movie.budget}</p>
        <p><a href="${movie.link}">Link</a></p>
      </div>
    </div>
  `).join('');

  main.innerHTML = `
  <div class="container text-center">
    <div class="row">
      <div class="col">
        <h3>Welcome to myMovies !</h3>
        <p>Here you can find a selection of our favorite movies ; )</p>
      </div>
    </div>
    ${movieElements}
  </div>
  `
}
export default HomePage;