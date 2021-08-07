export function disapproveItemAPI(id) {
  console.log("DISAPPROVEAPI", id);
  return fetch(`http://localhost:3000/disapprove/${id}`, {
    method: "post",
    headers: { "Content-Type": "application/json" },
  }).then((data) => {
    console.log("dataAPI", data);
    return data;
  });
}
