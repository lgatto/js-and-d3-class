var data = [
  { year: 1999,  poolDeaths: 109 , cageFilms: 2 },
  { year: 2000,  poolDeaths: 102 , cageFilms: 2 },
  { year: 2001,  poolDeaths: 102 , cageFilms: 2 },
  { year: 2002,  poolDeaths: 98  , cageFilms: 3 },
  { year: 2003,  poolDeaths: 85  , cageFilms: 1 },
  { year: 2004,  poolDeaths: 95  , cageFilms: 1 },
  { year: 2005,  poolDeaths: 96  , cageFilms: 2 },
  { year: 2006,  poolDeaths: 98  , cageFilms: 3 },
  { year: 2007,  poolDeaths: 123 , cageFilms: 4 },
  { year: 2008,  poolDeaths: 94  , cageFilms: 1 },
  { year: 2009,  poolDeaths: 102 , cageFilms: 4 },
];

const colour = ["red", "green", "blue", "orange", "yellow"];


// TODO select groups (.film), bind data

const films = d3.selectAll(".film")
      .data(data)
      .attr("transform", (d, i) => {
	  const low = 1999;
	  return `translate(${50 + (d.year - low) * 80}, ${(200 - (d.cageFilms * 25 + 30))})`;
      })

films
    .select("circle")
    .attr("r", d => d.poolDeaths/2.5)
    .style("fill", d => colour[d.cageFilms])


films
    .select("text")
    .text(d => d.year)
