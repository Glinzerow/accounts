export default function Person(name, age) {
    this.age = age,
    this.name = name;
    var savings = 0;

    this.givePaycheck = function(){
      savings += 100;
    }
    this.hasEnoughSavings = function(value){
      return savings >= value
    }
    
    this.getName = function(){
      return this.name
    }
    
    this.getAge = function() {
      return this.age
    }

    this.setAge = function(value){
        this.age = value
    }

    this.setName = function(value){
        this.name = value
    }
    this.toString = function(){
        return this.name + " " + this.age
    }
  }