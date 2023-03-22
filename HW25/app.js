const getFilmBtn = document.getElementById('getFilm');
const apiResult = document.getElementById('api_result');
const apiKey = 'feb10aac';

function getFilm() {
	const title = document.getElementById('search').value;
	const endPoint = `http://www.omdbapi.com/?t=${title}&apikey=${apiKey}`;
	
	fetch(endPoint, {
		method: 'GET',
	})
	.then(res => res.json())
	.then(data => {
        
		apiResult.innerHTML = `<br>Title: ${data.Title}<br>
        Year: ${data.Year}<br>
        Director: ${data.Director}`;
		console.log(data);
	});
}