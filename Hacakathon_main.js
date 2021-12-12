<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script>
  $(document).ready(function () {
    var caseOneHousing = ["I need somewhere to stay", "rights", "short term", "week"];
    var caseTwoLegal = ["Is it legal", "legal", "someone I can talk to", "illegal", "eviction notice", "lawyer", "landlord", "moritorium"];



    $(field).bind("enterKey", function (e) {
    
      var input_text = $(field).val();


      // Example Dictionary  
      //const dict = {"Go to next page": ["eviction", "Legal"]};
      // Iterate through the dictionary values 
      // values.find Look for just one  
      // use map function

      let caseOne = false;
      for (let i = 0; i < caseOneHousing.length; i++) { // i in range(0, len(caseOneHousing)
        const keyword = caseOneHousing[i];
        for (let j = 0; j < input_text.length; j++) {
          if (input_text.slice(j, j + keyword.length) === keyword) {
            caseOne = true;
            break;
          }
        }
      }

      let caseTwo = false
      for (let i = 0; i < caseTwoLegal.length; i++) {
        const keyword = caseTwoLegal[i];
        for (let j = 0; j < input_text.length; j++) {
          if (input_text.slice(j, j + keyword.length) === keyword) {
            caseTwo = true;
            break;
          }
        }
      }

      if (caseOne && caseTwo) {
        $("#link").append("both active");
        window.location.href = '/Eviction process';

      } else if (caseOne) {
        $("#link").append("Go to eviction page");
        window.location.href = '/Tenant\'s rights';
      } else if (caseTwo) {
        $("#link").append("Go to Legal page");
        window.location.href = '/Legal aid';  //# means id . means class 
      } else {
        $("#link").append("none");
         window.location.href = '/NY eviction moratorium';

      }
    });


    $(field).keyup(function (e) {
      if (e.keyCode == 13) {
        $(this).trigger("enterKey");
      }
    });
    $('#gethelp').click(function (e) {
      $(this).trigger("enterKey");
    });
  });
</script>