const API_KEY = '61fc4fcd6a465886c2c9809b091fffa0';
const LONDON_ID = '61';

export async function getElements(searchTerm = '',offset = 0) {
    try {
        const myHeaders = new Headers({ 'user-key': API_KEY });
        const url = `https://developers.zomato.com/api/v2.1/search?entity_id=${LONDON_ID}&entity_type=city&start=${offset}&q=${searchTerm}`;
        const response = await fetch(url, { headers: myHeaders });
        const json = await response.json();
        return json;
    } catch (error) {
        console.log(`Error with function getRestaurants ${error.message}`);
        throw error;
    }
};

export async function getElementDetails(elementID) {
    try {
        const myHeaders = new Headers({ 'user-key': API_KEY });
        const url = `https://developers.zomato.com/api/v2.1/restaurant?res_id=${elementID}`;
        const response = await fetch(url, { headers: myHeaders });
        const json = await response.json();
        return json;
    } catch (error) {
        console.log(`Error with function getRestaurantDetails ${error.message}`);
        throw error;
    }
};
