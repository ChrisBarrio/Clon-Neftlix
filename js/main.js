const fila = document.querySelector('.contenedor-carousel');
const filaSeries = document.querySelector('.contenedor-carousel-series');
const peliculas = document.querySelectorAll('.pelicula');
const series = document.querySelectorAll('.serie');

const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');
const flechaIzquierdaSeries = document.getElementById('flecha-izquierda2');
const flechaDerechaSeries = document.getElementById('flecha-derecha2');

//-----------Carrousel Peliculas recomendadas-----------//

// ? ----- ----- Event Listener para la flecha derecha. ----- -----
flechaDerecha.addEventListener('click', () => {
	fila.scrollLeft += fila.offsetWidth;

	const indicadorActivo = document.querySelector('.indicadores .activo');
	if(indicadorActivo.nextSibling){
		indicadorActivo.nextSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
});

// ? ----- ----- Event Listener para la flecha izquierda. ----- -----
flechaIzquierda.addEventListener('click', () => {
	fila.scrollLeft -= fila.offsetWidth;

	const indicadorActivo = document.querySelector('.indicadores .activo');
	if(indicadorActivo.previousSibling){
		indicadorActivo.previousSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
});

//----- ---------------- ------------------- -------//


//------------------Carrousel Series recomendadas-----------------------//

// ? ----- ----- Event Listener para la flecha derecha. ----- ----
flechaDerechaSeries.addEventListener('click', () => {
	filaSeries.scrollLeft += filaSeries.offsetWidth;

    const indicadorActivo = document.querySelector('.indicadores2 .activo');
	if(indicadorActivo.nextSibling){
		indicadorActivo.nextSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}    
});

// ? ----- ----- Event Listener para la flecha izquierda. ----- ----
flechaIzquierdaSeries.addEventListener('click', () => {
	filaSeries.scrollLeft -= filaSeries.offsetWidth;

    const indicadorActivo = document.querySelector('.indicadores2 .activo');
	if(indicadorActivo.previousSibling){
		indicadorActivo.previousSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
});

//----- ---------------- ------------------- -------//

//  ----- ----- indicador de pagina peliculas ----- -----
const numeroPaginas = Math.ceil(peliculas.length / 5);//con Math.ceil redondeo hacia arriba en caso de que sean 21 peliculas.
for(let i = 0; i < numeroPaginas; i++){
	const indicador = document.createElement('button');

	if(i === 0){
		indicador.classList.add('activo');
	}

	document.querySelector('.indicadores').appendChild(indicador);
	indicador.addEventListener('click', (e) => {
		fila.scrollLeft = i * fila.offsetWidth;

		document.querySelector('.indicadores .activo').classList.remove('activo');
		e.target.classList.add('activo');
	});
}


//  ----- ----- indicador de paginas series ----- -----

const numeroPaginasSeries = Math.ceil(series.length / 5);//con Math.ceil redondeo hacia arriba en caso de que sean 21 peliculas.
for(let i = 0; i < numeroPaginasSeries; i++){
	const indicador2 = document.createElement('button');

	if(i === 0){
		indicador2.classList.add('activo');
	}

	document.querySelector('.indicadores2').appendChild(indicador2);
	indicador2.addEventListener('click', (e) => {
		filaSeries.scrollLeft = i * filaSeries.offsetWidth;

		document.querySelector('.indicadores2 .activo').classList.remove('activo');
		e.target.classList.add('activo');
	});
}


// ----- ----- Hover ----- -----

//---------- peliculas--------
peliculas.forEach((pelicula) => {
	pelicula.addEventListener('mouseenter', (e) => {
		const elemento = e.currentTarget;
		setTimeout(() => {
			peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
			elemento.classList.add('hover');
		}, 300);
	});
});

fila.addEventListener('mouseleave', () => {
	peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
});

//---------- series--------
series.forEach((serie) => {
	serie.addEventListener('mouseenter', (e) => {
		const elemento = e.currentTarget;
		setTimeout(() => {
			series.forEach(serie => serie.classList.remove('hover'));
			elemento.classList.add('hover');
		}, 300);
	});
});

fila.addEventListener('mouseleave', () => {
	series.forEach(serie => serie.classList.remove('hover'));
});


//------------menu desplegable------------//

const btnToggle = document.querySelector('.toggle-btn');

btnToggle.addEventListener('click', function () {
  console.log('clik')
  document.getElementById('sidebar').classList.toggle('active');
  console.log(document.getElementById('sidebar'))
});