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
  photoAlbum: [
    {title:"Seoul", location:"South Korea", url:"seoul.jpg"},
    {title:"New York City", location:"New York", url:"newyork.jpg"},
    {title:"Washington, DC", location:"USA", url:"washingtondc.jpg"}
  ],
  initialize: function() {
    console.log("initialize");
    photoApp.activateUserInput()
  },
  activateUserInput: function() {
    var photoSave = document.getElementById('save');
    photoSave.addEventListener("click", photoApp.savedPhotoInfo);
  },
  savedPhotoInfo: function() {
    console.log("savedPhotoInfo");
    var photoTitle = document.getElementById('title').value;
    var photoLocation = document.getElementById('location').value;
    var photoURL = document.getElementById('url').value;
    // Make instances
    var nextPhoto = new photoApp.Photo(photoTitle, photoLocation, photoURL);
    console.log(nextPhoto);
    photoApp.photoAlbum.push(nextPhoto);
    console.log(photoApp.photoAlbum);
    photoApp.createGallery()
  },
  // Photo constructor
  Photo: function(photoTitle, photoLocation, photoURL) {
    this.title = photoTitle;
    this.location = photoLocation;
    this.url = photoURL;
  },
  createGallery: function() {
    console.log("createGallery");
    var photoIndex = photoApp.photoAlbum.length-1;
    var lastPhoto = photoApp.photoAlbum[photoIndex];
    var photoTitle = lastPhoto.title;
    var nextListItem = document.createElement('li');
    nextListItem.id = "title_" + photoIndex;
    var nextTextItem = document.createTextNode(photoTitle);
    nextListItem.appendChild(nextTextItem);
    // var nextListItem = "<li id='title_" + photoIndex + "'>" + photoTitle + "</li>"
    // console.log(nextListItem);
    // var t = document.createTextNode(nextListItem);
    document.getElementById('galleryTitles').appendChild(nextListItem);
  }
};
photoApp.initialize();

// for (var i = 0; i < photoApp.photoAlbum.length; i++) {
//   nextPhotoGallery = photoApp.photoAlbum[i];
//   nextPhotoGalleryTitle = nextPhotoGallery.title;
//   nextListItem += "<li id='title_" + i + "'>" + nextPhotoGalleryTitle + "</li>"
// };


// Create a prototypical Person object. From this object, extend a Teacher object and a Student object.
// Each of these objects should have attributes and methods pertinent to what they describe.
// Also create a School object that should be able to store instances of students and teachers.
// Make sure to write code afterwards that creates instances of these objects to make sure that what you've written works well and you're able to store the necessary data in each object.

// ====== Person constructor/parent obj =====
function Person(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}
// var john = new Person("John", "Male", "30");
// var mary = new Person("Mary", "Female", "20");
// console.log("john", john);
// console.log("mary", mary);

// ====== Teacher constructor/parent's child ========
function Teacher(name, gender, age, subject) {
  Person.call(this, name, gender, age);
  this.subject = subject;
}
var mike = new Teacher("Mike", "Male", "58", "history");
console.log("mike", mike);

// ====== Student constructor/parent's child ======
function Student(name, gender, age, grade) {
  Person.call(this, name, gender, age);
  this.grade = grade;
}
var kate = new Student("Kate", "Female", "17", "Junior");
console.log("kate", kate);
