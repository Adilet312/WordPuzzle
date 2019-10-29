$(document).ready(function()
{

  $("form#formID").submit(function(event)
  {
    event.preventDefault();
    var string = $("#puzzle").val();

    var newString="";
    for(var index=0; index<string.length;index++)
    {
      if( string[index]!='a' && string.charAt(index)!='e'&&
          string.charAt(index)!='i'&& string.charAt(index)!='o'&&
          string.charAt(index)!='u'
        )
        {
          newString+=string.charAt(index);
          console.log(string.charAt(index));
        }
        else{
          newString=newString+"-";
        }

    }

    $("#output").text(newString).show();
    $("form").hide();

  });

});
