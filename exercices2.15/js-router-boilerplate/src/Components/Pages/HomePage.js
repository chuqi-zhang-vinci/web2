const HomePage = () => {
  const main = document.querySelector('main');

    fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,political,racist,sexist&type=single")
      .then((response) => {
        if(!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
        return response.json();
      })
      .then((jokes) =>  {
        const mainfiller = `
        <div class="text-center text-danger">
            catégorie : ${jokes.category}; <br>
            blague : ${jokes.joke};
        </div>
        `;
        main.innerHTML = mainfiller;
      })
      .catch((err) => {
        console.error('HomePage::error:', err);
      });

      
};

export default HomePage;
