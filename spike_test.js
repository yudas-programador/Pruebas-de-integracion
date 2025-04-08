import http from 'k6/http';
import { check } from 'k6';

export let options = {
  stages: [
    { duration: '2s', target: 0 },
    { duration: '2s', target: 50 },
    { duration: '5s', target: 0 },
  ],
};

export default function () {
  let res = http.get('https://api.publicapis.org/entries');
  check(res, { 'status is 200': (r) => r.status === 200 });
}
