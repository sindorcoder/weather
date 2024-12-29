export function fetchData(text: string) {
  return fetch(
    `https://api.weatherapi.com/v1/current.json?key=f74f685d0d894b17bdf92931241912&q=${text}&aqi=no`
  )
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.log(err));
}

export function fetchLocation(text: string, day: number) {
  return fetch(
    `https://api.weatherapi.com/v1/marine.json?q=${text}&days=${day}&key=f74f685d0d894b17bdf92931241912`
  )
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.log(err));
}
