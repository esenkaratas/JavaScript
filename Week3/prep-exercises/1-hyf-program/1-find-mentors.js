import { modules, students, mentors, classes } from "./hyf.js";

const possibleMentorsForModule = (moduleName) => {
 const possibleMentors = mentors.filter((mentor) => mentor.canTeach.includes(moduleName))
 return possibleMentors;
};

console.log(possibleMentorsForModule('using-apis'));

const findMentorForModule = (moduleName) => {
  const randomNumber = Math.floor(Math.random());
  const filteredMentors = possibleMentorsForModule(moduleName);
  const randomMentor = filteredMentors[randomNumber].name;
  return randomMentor;
};
console.log(findMentorForModule('javascript'));
