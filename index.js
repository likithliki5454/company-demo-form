
function progress(){
    document.getElementById("1").className='';                
    document.getElementById("2").className='';                
    document.getElementById("3").className='';                
    document.getElementById("4").className='';                
  }
  function remove(){
    document.getElementById("step1").style.display='none';
    document.getElementById("step2").style.display='none';
    document.getElementById("step3").style.display='none';
    document.getElementById("step4").style.display='none';
  }
  
  function showProgress(a) {
    console.log(a);
    progress();
    document.getElementById(a).className = "selectprogress";
  }
  
  var inputs=1
  
  function next(b) { 

    if(document.getElementById("input"+inputs.toString()).value==""){
      alert("Please Fill the data")
    }
    else{
    console.log("next", b);
         const nextindex = b + 1;
          remove();
          document.getElementById(`step${nextindex}`).style.display = "block";
          showProgress(nextindex);
          document.getElementById("sucess").innerText = "";
          inputs+=1
    }
  }
  function previous(c) {
    console.log("previous", c);
    const nextindex = c - 1;
    remove();
    document.getElementById(`step${nextindex}`).style.display = "block";
    showProgress(nextindex);
    document.getElementById("sucess").innerText = "";
    inputs-=1;
  }
  
  
  function submit(){
      document.getElementById('sucess').innerHTML='Sucessfully Submitted'
      document.getElementById('sucess').style.fontStyle='italic'
  }
  













  var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

// function acc(){
//     document.getElementsByClassName('panel').style.display='block'
// }








document.getElementById("button1").addEventListener("click", function() {
    let percentage1 = document.getElementById("percentage1").value;
    let result1 = document.getElementById("result1");
    let per= percentage1 / 800 * 100;
    result1.innerHTML =per
    if(per<45){
        document.getElementById('result1').style.backgroundColor='red'
    }
    else if(per<75&& per>=45){
        document.getElementById('result1').style.backgroundColor='yellow'
    }

    else if(per<=100 && per>=75){
        document.getElementById('result1').style.backgroundColor='green'
    }
  });
  
  document.getElementById("result1").value





  document.getElementById("button2").addEventListener("click", function() {
    let percentage2 = document.getElementById("percentage2").value;
    let result2 = document.getElementById("result2");
    
    let per= percentage2 / 800 * 100;
    result2.innerHTML =per
    if(per<45){
        document.getElementById('result2').style.backgroundColor='red'
    }
    else if(per<75&& per>=45){
        document.getElementById('result2').style.backgroundColor='yellow'
    }

    else if(per<=100 && per>=75){
        document.getElementById('result2').style.backgroundColor='green'
    }
    
  });
  

  document.getElementById("button3").addEventListener("click", function() {
    let percentage3 = document.getElementById("percentage3").value;
    let result3 = document.getElementById("result3");
   
    let per= percentage3 / 800 * 100;
    result3.innerHTML =per
    if(per<45){
        document.getElementById('result3').style.backgroundColor='red'
    }
    else if(per<75&& per>=45){
        document.getElementById('result3').style.backgroundColor='yellow'
    }

    else if(per<=100 && per>=75){
        document.getElementById('result3').style.backgroundColor='green'
    }


  });


  document.getElementById("button4").addEventListener("click", function() {
    let percentage4 = document.getElementById("percentage4").value;
    let result4 = document.getElementById("result4");
    
    
    let per= percentage4 / 800 * 100;
    result4.innerHTML =per
    if(per<45){
        document.getElementById('result4').style.backgroundColor='red'
    }
    else if(per<75&& per>=45){
        document.getElementById('result4').style.backgroundColor='yellow'
    }

    else if(per<=100 && per>=75){
        document.getElementById('result4').style.backgroundColor='green'
    }

  });

  