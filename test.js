var test = function(){
    var hoge = function() {
    var item_a = 3;
    var item_b = function(item_a) { 
        var fuga = function() { return 3 }
        return item_a * fuga;
    }
    return item_a * item_b;
  }
return hoge;
}

console.log(test)