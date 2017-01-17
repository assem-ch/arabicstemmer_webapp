import axios from 'axios'

export const STEMMING_TEXT = "STEMMING_TEXT";
export const stemmingText = (text) => {
    const request = axios({
    method: 'post',
    data: {text: text},
    url: `text`,
    })
    return {
     type: STEMMING_TEXT,
     payload : request
    }
}
