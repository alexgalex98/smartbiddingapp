export function fetchMostPopularItemsAPI() {
  const requestOptions = {
    method: "GET",
  };
  console.log(requestOptions);
  return fetch("http://localhost:3000/mostPopular", requestOptions)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    });
}
