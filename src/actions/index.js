import axios from "axios";
import { UCITAJ_KATEGORIJE, UCITAJ_POSTOVE, UCITAJ_KORISNIKE, LOG_IN, NEW_POST, EDIT_POST, DODAJ_KATEGORIJU, LOG_OUT } from "./types";


export function logout() {
    return {type: LOG_OUT}
}

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
            });
    }
}

export function dodajPost({naslov, kategorija, body}, userId, cb) {
    return function(dispatch) {
        const date = new Date(Date.now());
        axios.post('http://localhost:3004/posts', {
            title:naslov,
            category: kategorija,
            body,
            date: date.toDateString(),
            userId
        })
            .then(response => {
                dispatch({type:NEW_POST, payload: response.data})
                cb();
            })
            .catch(err => {
                console.log(err);
            })
            
    }
}

export function obrisiPost(id, cb) {
    
    axios.delete(`http://localhost:3004/posts/${id}`)
        .then(response => {
            cb();
        })
}

export function editPost({title, category, body}, id, userId, cb) {
    return function(dispatch) {
        const date = new Date(Date.now());
        axios.put(`http://localhost:3004/posts/${id}`, {
            title,
            id,
            category,
            body,
            date: date.toDateString(),
            userId
        })
            .then((response) => {
                dispatch({type: EDIT_POST, payload: response.data});
                cb();
            })
            .catch(err => console.log(err));
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

export function ucitajKategorije(id) {
    return function(dispatch) {
        axios.get(`http://localhost:3004/users/${id}/categories`)
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
                dispatch({type: UCITAJ_POSTOVE, payload: response.data})
            })
            .catch((err) => {
                console.log(err);
            });
    }
}

export function dodajKategoriju({name, userId}, cb) {
    return function(dispatch) {
        axios.post('http://localhost:3004/categories', {
            name,
            userId
        })
            .then(response => {
                dispatch({type: DODAJ_KATEGORIJU, payload: response.data})
                cb();
            })
            .catch(err => console.log(err));
    }
}

