import http from 'k6/http'
import { sleep, check } from 'k6'

export const options = {
    vus: 15,
    duration: '1m'
};

export default function(){
    var url = ('https://httpbin.test.k6.io');
    var result = http.get(url)
    check(result, {
        'status was 200': r => r.status == 200
    })
    sleep(1);
}