import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  vus: 50,             // 50 usuarios simultáneos
  duration: '30s',     // durante 30 segundos
};

export default function () {
  let res = http.get('https://catfact.ninja/fact');
  check(res, { 'status is 200': (r) => r.status === 200 });
  sleep(1);
}
