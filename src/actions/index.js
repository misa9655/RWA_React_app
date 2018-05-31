import axios from "axios";
import { UCITAJ_KATEGORIJE, UCITAJ_POSTOVE, UCITAJ_KORISNIKE, LOG_IN, NOT_LOG_IN } from "./types";


export function logIn({email, password}) {
    return function(dispatch) {
        axios.get(`http://localhost:3004/users?email=${email}&&password=${password}`)
            .then(response => {
                if(response.data.length > 0)
                {
                    dispatch({
                        type: LOG_IN,
                        payload: {
                            email,
                            username: response.data[0].username,
                            id: response.data[0].id
                        }
                    });

                }
                else {
                    dispatch({type: NOT_LOG_IN})
                }
            });
    }
}

export function dodajKorisnika({username, email, password}) {
    return function(dispatch) {
        axios.post('http://localhost:3004/users', {
            username,
            email,
            password
        })
    }
}

export function dodajPost({naslov, kategorija, body}, userId) {
    return function(dispatch) {
        const date = new Date(Date.now());
        axios.post('http://localhost:3004/posts', {
            title:naslov,
            category: kategorija,
            body,
            date: date.toDateString(),
            userId
        })
    }
}

export function ucitajKorisnike() {
    return function(dispatch) {
        axios.get('http://localhost:3004/users')
            .then((response) => {
                const users = response.data.map((user) => {
                    return {username: user.username, email: user.email, id: user.id}
                });
                dispatch({type: UCITAJ_KORISNIKE, payload: users});
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
                
                dispatch({type: UCITAJ_KATEGORIJE, payload: response.data});
            })
            .catch((err) => {
                console.log(err);
            });
    }
}

export function ucitajPostove(id) {
    return function(dispatch) {
        axios.get(`http://localhost:3004/users/${id}/posts`)
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

