import http from 'k6/http'
import { sleep, check } from 'k6'

export const options = {
    vus: 5,
    duration: '10s'
};

export default function(){
    var url = ('https://pokeapi.co/api/v2/pokemon/ditto');
    var result = http.get(url)
    check(result, {
        'status was 200': r => r.status == 200
    })
    sleep(1);
}