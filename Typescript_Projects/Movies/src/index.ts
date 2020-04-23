import { MovieData } from './classes/movie_data';

class Movie extends MovieData {
  movieTitle(title: string) {
    this.getData(title)
      .then(data => {
        // console.log(data);

        if (data.Poster === undefined && data.Title === undefined) {
          const div = document.createElement('div');
          div.textContent = 'Sorry! We dont have this movie';
          document.body.appendChild(div);
        } else {
          const div = document.createElement('div');
          const img = document.createElement('img');
          const p = document.createElement('p');
          img.src = data.Poster;
          p.innerHTML = `${data.Title}<br>${data.Genre}<br>${data.Year}`;
          document.body.appendChild(div);
          div.appendChild(img);
          div.appendChild(p);
        }
      })
      .catch(error => {
        // console.log(error);

        const p = document.createElement('p');
        p.textContent = error;
        document.body.appendChild(p);
      });
  }
}

(() => {
  const span = document.createElement('span');
  const btn = document.createElement('button');
  btn.textContent = 'ok';
  const searchBox = document.createElement('input');
  searchBox.placeholder = 'search movies...';

  document.body.appendChild(span);
  span.appendChild(searchBox);
  span.appendChild(btn);

  let click = 0;
  const arr: string[] = [];
  let movie = new Movie();
  btn.addEventListener('click', () => {
    const input = searchBox.value;
    const divs = document.querySelectorAll('div');
    arr.push(input);

    if (input && input !== arr[click - 1]) {
      if (divs) {
        divs.forEach(div => {
          div.textContent = '';
        });
      }

      movie.movieTitle(input);
    }
    click++;
  });
})();

// window.onload = () => {
//   let movie1 = new Movie();
//   let movie2 = new Movie();
//   let movie3 = new Movie();
//   movie1.movieTitle('captain marvel');
//   movie2.movieTitle('moana');
//   movie3.movieTitle('wonder woman');
// };