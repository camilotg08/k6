import http from 'k6/http'
import { sleep, check } from 'k6'

export let options = {
    stages:[
        {duration : '2m30s', target : 20},
        {duration : '30s', target : 2},
        {duration : '10s', target : 0}
    ]
}

export default function(){
    var url = ('https://httpbin.test.k6.io');
    var result = http.get(url)
    check(result, {
        'status was 200': r => r.status == 200
    })
    sleep(1);
}