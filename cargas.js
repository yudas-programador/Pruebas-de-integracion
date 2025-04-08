import http from 'k6/http';
import { check } from 'k6';

export let options = {
  stages: [
    { duration: '10s', target: 10 }, // sube a 10 VUs en 10s
    { duration: '20s', target: 30 }, // sube a 30 VUs en 20s
    { duration: '10s', target: 0 },  // baja a 0 VUs en 10s
  ],
};

export default function () {
  let res = http.get('https://api.publicapis.org/entries');
  check(res, {
    'status is 200': (r) => r.status === 200,
  });
}
