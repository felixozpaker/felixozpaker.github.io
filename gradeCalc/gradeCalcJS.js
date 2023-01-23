function calculate(){



    //earned points of the first weight
    var earned1 = +document.getElementById("earned1").value;
    // total points of the first weight
    var total1 = +document.getElementById("total1").value;
    //first weight
    var weight1 = +document.getElementById("weight1").value;

    //earned points of assignment
    var earned3 = +document.getElementById("earned3").value;
    // total points of the assignment
    var total3 = +document.getElementById("total3").value;
    //assignment weight
    var weight3 = +document.getElementById("weight3").value;

    var firstWeight = ((earned1 += earned3) / (total1 + total3)) * (weight1);



    //earned points of the second weight
    var earned2 = +document.getElementById("earned2").value;
    // total points of the second weight
    var total2 = +document.getElementById("total2").value;
    //second weight
    var weight2 = +document.getElementById("weight2").value;

    var secondWeight = (earned2 / total2) * (weight2);




    


    document.getElementById("result").innerHTML = (firstWeight + secondWeight).toFixed(2) + "%";
    }

    

