import axios from 'axios'

export const STEMMING_TEXT = "STEMMING_TEXT";
export const stemmingText = (text) => {
    return {
     type: STEMMING_TEXT,
     payload : axios.get(`http//localhost:8888/text/${text}`)
    }
}
