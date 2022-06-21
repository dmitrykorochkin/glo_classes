'use strict';

class First {
    hello() {
      console.log(`Привет я метод родителя!`);
    }
  
}


class Second extends First {
 
  hello() {
    super.hello();
    console.log("А я наследуемый метод!");
  }
}

const nameClass =new Second();
nameClass.hello();