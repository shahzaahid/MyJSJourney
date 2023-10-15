const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "hitesh",
};

// course.courseInstructor
//In the above whenever you want to access the courseInstructor you always have to use the course.

const { courseInstructor } = course;
console.log(courseInstructor);
//but here the story is totaly different ones you assign the object to the any key you can access it

const { courseInstructor: instuctor } = course;
console.log(instuctor);
//here I did destructure the key
