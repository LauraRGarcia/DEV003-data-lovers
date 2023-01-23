//import ghibli from './data/ghibli/ghibli.js'
import data from './data/ghibli/ghibli.js'
import { sortMovies, sortName, filterDirector } from './data.js'
//console.log(data)

const dataMovies = data.films;
const moviesList = document.getElementById('showMovies');
const sortSelectUp = document.getElementById('orderYear');
const sortSelectName =document.getElementById('sortAbc');
const filterMovies = document.getElementById('orderDirector');


//declaramos el html vacio para luego insertar con innerHtml
//declaramos funcion para mostrar la data de las peliculas mediante un innerHTML
function printMovies(){
  let printHtml = '';
//tomamos cada dato del array con un forEach, recorre todo el array y retorna los datos que elegimos más abajo
  dataMovies.forEach(function(singleMovie)
  {
  //elementos que se insertaran desde la data al html
  //html += not an addition, but a full overwrite.  printHtml = printHtml+
  printHtml +=
    `

      <div>
      <img class="poster-Image" src="${singleMovie.poster}"/>
      <p>Title: ${singleMovie.title}</p>
      <p>Director: ${singleMovie.director}</p>
      <p>Producer: ${singleMovie.producer}</p>
      <p>Release date: ${singleMovie.release_date}</p>
      </div>

  `;
    //we now say let the inside of that div take in our htmlCode variable that holds our html codes.*/
  });
  //se insertan los datos en el container de HTML
  moviesList.innerHTML= printHtml;
}
printMovies(dataMovies);

//se ejecuta la funcion con el change en el orderYear, evento desde el DOM
sortSelectUp.addEventListener('click', MoviesSortUp)
function MoviesSortUp(){
  let sortRelease = sortSelectUp.value;
  let moviesSorted;
  //moviesSorted va a ser la funcion de sort, tomando la data y el value del id
  moviesSorted=sortMovies(dataMovies, sortRelease);
  printMovies(MoviesSortUp);
};
// función orden A-Z y Z-A 
/*sortSelectName.addEventListener('click',movieSortName )
function movieSortName () {
  let movieByName = sortSelectName.value;
  let nameSortSelect;
  //namesortselect toma la funcion que esta tomando sortName (que es la funcion del data) y el moviebyName (los value del html)
nameSortSelect= sortName (dataMovies, movieByName);
printMovies(movieSortName);
}*/
//funcion orden de director //
/*filterMovies.addEventListener('click',selectFilterMovie )
function selectFilterMovie() {
  let nameDirector = filterMovies.value;
  let optionDirector;
  optionDirector= filterDirector (dataMovies, nameDirector);
  printMovies(selectFilterMovie);
}

