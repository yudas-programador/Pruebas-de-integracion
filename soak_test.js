import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  vus: 10,
  duration: '60s', // 1 minuto para la demo, pero puede ser 10min o más en la vida real
};

export default function () {
  let res = http.get('https://api.publicapis.org/entries');
  check(res, { 'status is 200': (r) => r.status === 200 });
  sleep(1);
}
