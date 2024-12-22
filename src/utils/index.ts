export function fetchData (text: string) {
  return fetch(`http://api.weatherapi.com/v1/current.json?key=f74f685d0d894b17bdf92931241912&q=${text}&aqi=no`)
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.log(err));
    
}
