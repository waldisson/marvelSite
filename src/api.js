/* eslint-disable import/no-anonymous-default-export */
const captain = "1010338";
const comics = "comics";
///

let baseUrl = `https://gateway.marvel.com:443/v1/public/characters/${captain}/${comics}?ts=1614895967&apikey=94f8f1f60f2ca97f7ebae8ec4bccfbb9&hash=2a5525ad268f56ac2667fd6840a6e13e`;

export default {
  getHero: async () => {
    const res = await fetch(baseUrl);
    const json = await res.json();
    return json;
  },
};

/*
FORMA DE FAZER FETCH 

  const getHero = () => {
    fetch(
      "https://gateway.marvel.com:443/v1/public/characters/1010338?ts=1614895967&apikey=94f8f1f60f2ca97f7ebae8ec4bccfbb9&hash=2a5525ad268f56ac2667fd6840a6e13e"
    )
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
        return json;
      });
  };
  

FORMA DE FAZER FETCH TWO


 const getHero = async () => {
    let result = await fetch(baseUrl); //É O LINK EXTERNO
    let json = await result.json();
    console.log(json);
  };

*/
