export function getAllDogs() {
  return fetch('/dogs')
}

export function getDogNumberTwo() {
  return fetch ('/dogs/2')
}

export function postNewDog() {
    const url = "/dogs";

    // Use the URLSearchParams API to format your body as shown below


    const options = {
        method: "POST",
        headers: {"Content-Type": "application/x-www-form-urlencoded"},
        body: new URLSearchParams({
        name: "wixks",
        age: '6 months'
    })
    };

   return  fetch(url, options);
}

export function postNewDogV2(name, age) {
    const url = "/dogs";

    // Use the URLSearchParams API to format your body as shown below


    const options = {
        method: "POST",
        headers: {"Content-Type": "application/x-www-form-urlencoded"},
        body: new URLSearchParams({
        name: name,
        age: age,
    })
    };

   return  fetch(url, options);
}

export function deleteDog(id) {
      const url = `/dogs/${id}/delete`
      const options = {
        method: "POST",
        headers: {
            AUTH: 'ckyut5wau0000jyv5bsrud90y'
        },
        body: new URLSearchParams({
            id: id
        })
      }
      return fetch(url, options)
}
