const socket = window.io();

// A `lib` expõe a constante `Qs`, que utilizaremos dessa forma no nosso exemplo
const { username, room } = Qs.parse(location.search, {
  ignoreQueryPrefix: true});

console.log(username, room);