var input = document.getElementById("input");

var list = document.getElementById("list");

var commit = document.getElementById("commit");

var x = document.querySelectorAll(".x");


 document.getElementById("list").addEventListener("click", function(e) { //Function to target dynamically created elements.
	// e.target is the clicked element!
	// If it was a div item
	if(e.target && e.target.nodeName == "DIV") {
		// List item found!  Perform function.
        var tgt = e.target;
        if (tgt.tagName.toUpperCase() == "DIV") {
          tgt.parentNode.remove(); // or tgt.remove();
        }
        
	}
});

commit.addEventListener("click", function () {
    list.innerHTML += '<li><div class="text">' + input.value + ' ' + '</div> <div class="x">X</div></li>'
});




