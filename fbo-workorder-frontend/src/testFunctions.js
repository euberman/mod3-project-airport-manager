function testFetch(){
  fetch(`${BASE_URL}/customers`, { method: "GET", headers: _headers})
   .then(resp => resp.json())
   .then(json => {
         let data = json.data.filter(customer => customer['attributes'].name == "Mark Cuban");
         console.dir(data)
     })
}