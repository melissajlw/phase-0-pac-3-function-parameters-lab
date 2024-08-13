function sayHelloTo(firstName = "User") {
    console.log('Hello, ${firstName}!');
}

// Function introduction(name) takes in an argument of a name and returns a phrase with that name using string interpolation
function introduction(name = "User") {
    return (`Hi, my name is ${name}.`);
}

// introductionWithLanguageOptional(name, language) takes in two arguments, a name and a language, and returns a phrase using those arguments
function introductionWithLanguageOptional(name = "User", language = "JavaScript") {
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`);
}

// introductionWithLanguage(name, language) takes in two arguments, a name and a language, and returns a phrase using those arguments
function introductionWithLanguage(name = "User", language = "JavaScript") {
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`);
}