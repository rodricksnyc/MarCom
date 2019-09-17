var listOfDogs = [
  { name: 'Manny', breed: 'Frenchie', size: 'small', img: 'http://cdn-img.instyle.com/sites/default/files/styles/480xflex/public/images/2015/08/082115-dogs-of-instagram-embed-6.jpg' },
  { name: 'Bodhi', breed: 'Shiba', size: 'medium', img: 'http://cdn-img.instyle.com/sites/default/files/styles/480xflex/public/images/2015/08/082115-dogs-of-instagram-embed-8.jpg' },
  { name: 'Norbert', breed: 'Mixed', size: 'small', img: 'http://cdn-img.instyle.com/sites/default/files/styles/684xflex/public/images/2015/08/082115-dogs-of-instagram-embed-11.jpg' },
  { name: 'Doug', breed: 'Pug', size: 'small', img: 'http://cdn-img.instyle.com/sites/default/files/styles/684xflex/public/images/2015/08/082115-dogs-of-instagram-embed-13.jpg' },
  { name: 'Spot', breed: 'Great Dane', size: 'large', img: 'http://buzzsharer.com/wp-content/uploads/2015/05/Great-Dane-on-sofa-funny.jpg' },
  { name: 'Beethoven', breed: 'St. Bernard', size: 'large', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Hummel_Vedor_vd_Robandahoeve.jpg/1200px-Hummel_Vedor_vd_Robandahoeve.jpg' }
];

function dogTemplate(dog) {
  return (`<tr class='dog-row'><td><img src='${dog.img}'</td><td>${dog.name}</td><<td>${dog.breed}</td>/<td>${dog.size}</td>tr>`)
}

function placeDogs(dogs) {
  $('#dog-list').empty('');
  dogs.forEach(function(dog) {
    var dogHtml = dogTemplate(dog);
    $('#dog-list').append(dogHtml);
  })
}

// This function takes in a list of dog objects, and an object representing the search criteria
// It returns a filtered list of dogs matching the search criteria
function filter(dogs, inputs) {
  if (inputs.name) {
    dogs = filterByName(dogs, inputs.name);
  }
  if (inputs.breed) {
    dogs = filterByBreed(dogs, inputs.breed);
  }
  if (inputs.sizes && inputs.sizes.length > 0) {
    dogs = filterBySize(dogs, inputs.sizes);
  }
  return dogs;
}

// Returns only dogs that start with the search string
function filterByName(dogs, name) {
  return dogs.filter(function(dog) {
    return dog.name.toLowerCase().startsWith(name.toLowerCase());
  })
}

// Returns only dogs that match the breed exactly
function filterByBreed(dogs, breed) {
  return dogs.filter(function(dog) {
    return dog.breed === breed;
  })
}

// Returns only dogs that are included in the selected dog sizes
function filterBySize(dogs, sizes) {
  return dogs.filter(function(dog) {
    return sizes.includes(dog.size);
  })
}

$(document).ready(function() {
  placeDogs(listOfDogs);

  // When the search form is submitted
  $('#dog-search-form').submit(function(e) {
    // Prevent the form from being submitted
    e.preventDefault();

    // Gather all the inputs together into an object
    var inputs = {
      name: $('input[name=dog-name]').val(),
      breed: $('select[name=dog-breed]').val(),
      // For the list of sizes, we need to only select the checkboxes that are checked,
      // then loop through them and return an array of the inputs' values
      sizes: $('input[name=dog-size]:checked').map(function() {
        return this.value;
      }).toArray() // Convert this to an array, from the jQuery object it was
    }

    // Gets the filtered list of dogs based on inputs
    var newDogs = filter(listOfDogs, inputs);

    // Alphabetizes the list of dogs
    // newDogs = alphabetize(newDogs, $('input[name=sort]:checked').val());

    // Place the dogs back on the page
    placeDogs(newDogs);
  });
});

// Alphabetizes the list of dogs based on name, either A to Z, or Z to A
// function alphabetize(dogs, dir) {
//   if (dir === 'ztoa') {
//     return dogs.sort(function(dogA, dogB) {
//       if (dogB.name.toLowerCase() > dogA.name.toLowerCase()) {
//         return 1;
//       }
//       else if(dogA.name.toLowerCase() > dogB.name.toLowerCase()) {
//         return -1;
//       }
//       return 0;
//     });
//   }
//   else {
//     return dogs.sort(function(dogA, dogB) {
//       if (dogA.name.toLowerCase() > dogB.name.toLowerCase()) {
//         return 1;
//       }
//       else if(dogB.name.toLowerCase() > dogA.name.toLowerCase()) {
//         return -1;
//       }
//       return 0;
//     });
//   }

// }
