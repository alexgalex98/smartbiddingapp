export function fetchBidAPI(id) {
  //id=2;
  console.log(id, "id in API");
  const requestOptions = {
    method: "GET",
  };
  console.log(requestOptions);
  return fetch(`http://localhost:3000/items/${id}`, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      console.log(data, "dsdadada");
      return data;
    });
}
