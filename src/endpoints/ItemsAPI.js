export function fetchItemsAPI() {
  const requestOptions = {
    method: "GET",
  };
  console.log(requestOptions);
  return fetch("http://localhost:3000/items", requestOptions)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    });
}

export function fetchExpiredAPI(id) {
  console.log(id, "IDIDIDIDIDIAPPPPPPIII");
  return fetch(`http://localhost:3000/onTimeExpired/${id}`, {
    method: "post",
    headers: { "Content-Type": "application/json" },
  }).then((data) => {
    console.log("EXPIREDAPI", data);
    return data;
  });
}
