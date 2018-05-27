import axios from "axios";
import { UCITAJ_KATEGORIJE, UCITAJ_POSTOVE, UCITAJ_KORISNIKE } from "./types";

const URL = 'http://localhost:3004/users/1'

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
        axios.get(URL)
            .then((response) => {
                // console.log(response);
                dispatch({type: UCITAJ_KATEGORIJE, payload: response.data.kategorije});
            })
            .catch((err) => {
                console.log(err);
            });
    }
}

export function ucitajPostove() {
    return function(dispatch) {
        axios.get(URL)
            .then((response) => {
                dispatch({type: UCITAJ_POSTOVE, payload: response.data.postovi})
            })
            .catch((err) => {
                console.log(err);
            });
    }
}

export function updateKategorije(kategorije) {
    return function(dispatch) {
        axios.patch('http://localhost:3004/users/1', {
            "kategorije": kategorije
        })
            .then(response => {
                console.log(response);
            })
            .catch(err => console.log(err));
    }
}

