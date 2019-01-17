$( function() {
   
    $( "#date" ).datepicker();
  } );
  $("#b1").click(function () {
       var test=false;
while (test==false ){
    if ($("#date").val() =="") {
        alert("saisir la date SVP");
    }
    else if((($("#time").val().length >5) && (isNaN($("#tel").val())==true) ) || ($("#time").val().length <=0))
        {
            alert("saisir votre temps SVP");
        }
        else
        
            if ($("#pays").val() == '-1') {
                alert("Veuillez sélectionner une pays");
            }
    test=true;
   }
        var pays = $("#pays").val();
       // var temp = $("#time").val();
        var tableau = $('#time').val().split(':');
        
        
       var temp=parseInt(tableau[0])+parseInt(pays);
        
        var date = $("#date").val();
        alert(" le meeting à "+temp+"h"+tableau[1]+" le "+date);
       
    });
    