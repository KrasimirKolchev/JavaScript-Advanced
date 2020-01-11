function FilterEmployees(arrReprStr, par) {
   // let arr = JSON.parse(arrReprStr);
    let params = par.split('-');

    const count = (function () {
        let counter = 0;

        return function () {
            return counter++;
        }
    })();

    JSON.parse(arrReprStr).filter(e => isFound(e))
        .forEach(empl => console.log(`${count()}. ${empl['first_name']} ${empl['last_name']} - ${empl['email']}`));

    //printEmployees(filteredEmpl);



    function isFound (employee) {
        return employee[params[0]] === params[1];
    }

   // function printEmployees(aray) {
   //     let count = 0;
   //     for (const empl of aray) {

   //         console.log(`${count++}. ${empl['first_name']} ${empl['last_name']} - ${empl['email']}`);
   //     }
   // }
}

FilterEmployees(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
    'gender-Female'
);
FilterEmployees(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
    'last_name-Johnson'
);