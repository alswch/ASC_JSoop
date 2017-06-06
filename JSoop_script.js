// Create an object called Multiplier with two methods: multiply and getCurrentValue. multiply should initially return the number supplied * 1 and from then on whatever the current value is times the number supplied.getCurrentValue should return the last answer returned from multiply.
var multiplier = {
  lastvalue: 1,

  multiply: function(a) {
    // console.log("==multiply==");
    console.log(a);
    console.log(typeof a);
    var b = a * this.lastvalue;
    console.log(this.lastvalue);
    this.lastvalue = b;
    console.log(b);
  },
}
multiplier.multiply(1);


// Implement an object model that allows you to store strings that represent a Photo.
// Your model should include an Album object that can contain many Photo objects in its photos attribute.
// Each Album should allow you to add a new photo, list all photos, and access a specific photo by the order it was added.
// Each Photo should store the photo's file name and the location the photo was taken in as strings.
// Create instances of each object defined to prove that your object model works.
var photoApp = {
  initialize: function() {
    console.log("initialize");
    photoApp.activateUserInput()
  },
  activateUserInput: function() {
    var photoSave = document.getElementById('save');
    photoSave.addEventListener("click", photoApp.savedPhotoInfo)
  },
  savedPhotoInfo: function() {
    console.log("savedPhotoInfo");
    var photoTitle = document.getElementById('title').value;
    var photoLocation = document.getElementById('location').value;
    var photoURL = document.getElementById('url').value;
    function Photo(photoTitle, photoLocation, photoURL) {
      this.title = photoTitle;
      this.location = photoLocation;
      this.url = photoURL;
    }
    var nextPhoto = new Photo(photoTitle, photoLocation, photoURL);
    console.log(nextPhoto);
  }
}
photoApp.initialize();











// Create a prototypical Person object. From this object, extend a Teacher object and a Student object. Each of these objects should have attributes and methods pertinent to what they describe. Also create a School object that should be able to store instances of students and teachers. Make sure to write code afterwards that creates instances of these objects to make sure that what you've written works well and you're able to store the necessary data in each object.
// Perosn construction

// make instances

// Teacher constructor

// add Person prototype methods

// inherit Person methods
