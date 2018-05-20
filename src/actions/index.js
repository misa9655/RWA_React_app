import { DODAJ_KATEGORIJU } from './types'

export function test() {
    return {
        type: 'TEST',
        payload: 'Hello'
    }
}

export function dodajKategoriju(kategorija){
    return {
        type: DODAJ_KATEGORIJU,
        payload: kategorija 
    }
}