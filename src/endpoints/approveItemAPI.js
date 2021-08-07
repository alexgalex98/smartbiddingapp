export function approveItemAPI(id) {
  console.log("APPROVEAPI", id);
  return fetch(`http://localhost:3000/approve/${id}`, {
    method: "post",
    headers: { "Content-Type": "application/json" },
  }).then((data) => {
    console.log("dataAPI", data);
    return data;
  });
}
