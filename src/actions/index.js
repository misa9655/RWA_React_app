import axios from "axios";
import { UCITAJ_KATEGORIJE, UCITAJ_POSTOVE, UCITAJ_KORISNIKE } from "./types";


export function dodajPost({naslov, kategorija, body}) {
    return function(dispatch) {
        const date = new Date(Date.now());
        axios.post('http://localhost:3004/posts', {
            title:naslov,
            category: kategorija,
            body,
            date: date.toDateString()
        })
    }
}

export function ucitajKorisnike() {
    return function(dispatch) {
        axios.get('http://localhost:3004/users')
            .then((response) => {
                dispatch({type: UCITAJ_KORISNIKE, payload: response.data});
            })
            .catch((err) => {
                console.log(err);
            });
    }
}

export function ucitajKategorije() {
    return function(dispatch) {
        axios.get('http://localhost:3004/category')
            .then((response) => {
                // console.log(response);
                dispatch({type: UCITAJ_KATEGORIJE, payload: response.data});
            })
            .catch((err) => {
                console.log(err);
            });
    }
}

export function ucitajPostove() {
    return function(dispatch) {
        axios.get('http://localhost:3004/users/1/posts')
            .then((response) => {
                console.log(response);
                dispatch({type: UCITAJ_POSTOVE, payload: response.data})
            })
            .catch((err) => {
                console.log(err);
            });
    }
}

export function updateKategorije(name) {
    return function(dispatch) {
        axios.post('http://localhost:3004/category', {
            name
        })
            .then(response => {
                console.log(response);
            })
            .catch(err => console.log(err));
    }
}

