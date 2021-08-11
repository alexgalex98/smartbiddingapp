export function fetchWonItemsAPI(id) {
  console.log("APIWON");
  const requestOptions = {
    method: "GET",
  };
  return fetch(`http://localhost:3000/wonItems/${id}`, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    });
}
