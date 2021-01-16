const API_KEY = '1202f17b2bb0acc21d3f855afb719482';


export async function getElements(searchTerm = '',offset = 1) {
    offset+=1;
    try {
        const myHeaders = new Headers({ 'user-key': API_KEY });
        let url ="";
        if(searchTerm)
        {
            // search for a someone
        url = `https://api.themoviedb.org/3/search/person?api_key=${API_KEY}&language=en-US&query=${searchTerm}&page=${offset}&include_adult=false=`;
        }
        else
            // loading popular people
            url =  `https://api.themoviedb.org/3/person/popular?api_key=${API_KEY}&language=en-US&page=${offset}`;

   //    console.log(url);
        const response = await fetch(url, { headers: myHeaders });
        const json = await response.json();
     //   console.log(json);
        return json;
    } catch (error) {
        console.log(`Error with function getRestaurants ${error.message}`);
        throw error;
    }
};

export async function getElementDetails(elementID) {
    try {
        const myHeaders = new Headers({ 'user-key': API_KEY });
        const url = `https://api.themoviedb.org/3/person/${elementID}?api_key=${API_KEY}&language=en-US`;
        const response = await fetch(url, { headers: myHeaders });
        const json = await response.json();
        return json;
    } catch (error) {
        console.log(`Error with function getRestaurantDetails ${error.message}`);
        throw error;
    }
};

export async function getCredit(personeID) {
    try {
        const myHeaders = new Headers({ 'user-key': API_KEY });
        const url = `https://api.themoviedb.org/3/person/${personeID}/combined_credits?api_key=${API_KEY}&language=en-US`;


        const response = await fetch(url, { headers: myHeaders });
        const json = await response.json();
        return json;
    } catch (error) {
        console.log(`Error with function getRestaurantDetails ${error.message}`);
        throw error;
    }
};
