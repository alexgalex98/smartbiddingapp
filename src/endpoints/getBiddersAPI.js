export function fetchgetBiddersAPI(id) {
  //id=6;
  const requestOptions = {
    method: "GET",
  };
  console.log(requestOptions);
  return fetch(`http://localhost:3000/getBids/${id}`, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      console.log(data, "GETBIDDERSAPI");
      return data;
    });
}
