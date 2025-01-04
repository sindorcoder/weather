export function fetchData(text: string) {
  return fetch(
    `https://api.weatherapi.com/v1/current.json?key=78804e4ddf3048eb82462226250401&q=${text}&aqi=no`
  )
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.log(err));
}

export function fetchLocation(text: string, day: number) {
  return fetch(
    `https://api.weatherapi.com/v1/marine.json?q=${text}&days=${day}&key=78804e4ddf3048eb82462226250401`
  )
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.log(err));
}
