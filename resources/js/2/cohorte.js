---
---

$(document).ready(function(){

  // expanding code snippets (front page)
  function expandGettingStartedStep(snippetID, container, menu) {
    var codeBox = container.find(".row");
    function go() {      

      var snippet = $(snippetID).html();

      var codeSnippetInContainer = codeBox.html();
      codeBox.html(snippet);

      $("#getting-started-step1").removeClass("active");
      $("#getting-started-step2").removeClass("active");
      $("#getting-started-step3").removeClass("active");
      $("#getting-started-step4").removeClass("active");
      $("#getting-started-step5").removeClass("active");

      $(menu).addClass("active");
      
    }
    return go;
  }

  var row3 = $("#getting-started-steps-row");
  $("#getting-started-step1").click(expandGettingStartedStep("#hidden-getting-started-step-1", row3, "#getting-started-step1"));
  $("#getting-started-step2").click(expandGettingStartedStep("#hidden-getting-started-step-2", row3, "#getting-started-step2"));  
  $("#getting-started-step3").click(expandGettingStartedStep("#hidden-getting-started-step-3", row3, "#getting-started-step3"));
  $("#getting-started-step4").click(expandGettingStartedStep("#hidden-getting-started-step-4", row3, "#getting-started-step4"));
  $("#getting-started-step5").click(expandGettingStartedStep("#hidden-getting-started-step-5", row3, "#getting-started-step5"));

  $("#getting-started-step1-btn").click(function(e) {
     $("#getting-started-step2").trigger("click");
  });

  /* activate first step */
  $("#getting-started-step1").trigger("click");


});


