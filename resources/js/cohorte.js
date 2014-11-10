---
---

$(document).ready(function(){

  // background image on frontpage
  $(".splash").backstretch("{{ site.baseurl }}/resources/images/alpes.jpg");

  // get current year and put it in span
  var currYear = new Date().getFullYear()
  $(".current-year").text(currYear);

  // same height hack for scala in a nutshell boxes
  function makeAllBoxesSameHeight(boxes) {
    maxHeight = Math.max.apply(
      Math, boxes.map(function() {
          return $(this).height();
    }).get());
    boxes.height(maxHeight + 20);
  }
  var nutshell = $(".bullet-point").not(".span12");
  makeAllBoxesSameHeight(nutshell);

  // expanding code snippets (front page)
  function expandSnippetAction(snippetID, container) {
    var codeBox = container.find(".row");
    
    function go() {

      var snippet = $(snippetID).html();

      // for positioning the arrow
      var arrow = $(this).parent().siblings(".code-snippet-arrow");
      var centerPoint = $(this).position().left + $(this).width()/2;
      arrow.css("left", centerPoint);

      var codeSnippetInContainer = codeBox.html();

      if (container.is(":hidden")) {
        arrow.show();
        arrow.addClass("hover");
        codeBox.html(snippet);
        container.slideDown();
      } else if (codeSnippetInContainer == snippet) {
        container.slideUp(function() {
          arrow.hide();
        });
      } else {
        var hgt = $(snippetID).height();
        arrow.addClass("hover");
        codeBox.html(snippet);
        codeBox.animate({height: hgt}, 400);
      }
    }
    return go;
  }

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


  var row1 = $("#code-snippet-row1");
  var row2 = $("#code-snippet-row1");

  $("#key-point-1").click(expandSnippetAction("#hidden-key-point-1", row1));
  $("#key-point-2").click(expandSnippetAction("#hidden-key-point-2", row1));
  $("#key-point-3").click(expandSnippetAction("#hidden-key-point-3", row1));

  $("#key-point-4").click(expandSnippetAction("#hidden-key-point-4", row2));
  $("#key-point-5").click(expandSnippetAction("#hidden-key-point-5", row2));
  $("#key-point-6").click(expandSnippetAction("#hidden-key-point-6", row2));

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


