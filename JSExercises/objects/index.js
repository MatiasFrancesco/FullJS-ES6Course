var dog = {
    name : 'Sky',
    breed : 'Border Collie',
    weight : 19,
    nickname : "Zitella",
    bark : function() {
        alert("WOOF!");
    }
};

//console.log(dog);

document.getElementById('object-div').innerHTML = "name : " + dog.name 
                                                + "<br>breed : " + dog.breed + "\n"
                                                + "<br>weight : " + dog.weight + "\n"
                                                + "<br>nickname : " + dog.nickname + "\n";
dog.bark();