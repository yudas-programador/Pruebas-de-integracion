import http from 'k6/http';
import { check } from 'k6';

export let options = {
  vus: 1,
  duration: '5s',
};

export default function () {
  let res = http.get('https://api.publicapis.org/entries');
  check(res, { 'status is 200': (r) => r.status === 200 });
}
