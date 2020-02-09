function targetTerdekat(arr) {
    // you can only write your code here!
    var oPosition = -1;
    var xPosition = [];
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] == 'o') 
        {oPosition = i;}
        else if (arr[i] == 'x') 
        {xPosition[xPosition.length] = i;}
    }
    var closestDistance = 0;
    for(var i = 0; i < xPosition.length; i++) {
        var distance = Math.abs(oPosition - xPosition[i]);
        if(distance < closestDistance || closestDistance <= 0) {
            closestDistance = distance;}
    }
    return closestDistance;
  }


  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2