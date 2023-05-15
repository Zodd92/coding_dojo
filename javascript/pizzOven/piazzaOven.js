function pizzaOven(element1, element2, element3,element4){
    var pizza={};
    pizza.crustType=element1;
    pizza.sauceType=element2;
    pizza.cheeses=element3;
    pizza.toppings=element4;
    console.log(pizza);
}

pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni","sausage"]);
pizzaOven("hand tossed","marinara", ["mozzarella", "feta"],["mashrooms", "olives", "onions"]);
pizzaOven("tosted", "traditional", "4 cheeses", "picant salam");
pizzaOven("tosted", "traditional", "mozzarella", "vegetables");