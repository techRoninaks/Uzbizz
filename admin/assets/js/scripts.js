var postimage = "";
function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /*search for elements with a certain atrribute:*/
      file = elmnt.getAttribute("w3-include-html");
      if (file) {
        /* Make an HTTP request using the attribute value as the file name: */
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /* Remove the attribute, and call this function once more: */
            elmnt.removeAttribute("w3-include-html");
            includeHTML();
          }
        }; 
        xhttp.open("GET", file, true);
        xhttp.send();
        /* Exit the function: */
        return;
      }
    }
}

function getQueryString(){
  var queryString = document.URL.split('?');
  if(queryString.length > 1){
    queryStrings = queryString[1].split('&');
  }
  return queryString;
}

function reDirect(loc){ //redirect to any page without storing as cache.. mainly used when logged in

    // var page = window.location.protocol+"//"+window.location.hostname+"/helloMyWork/"+loc;
    var page = "../"+loc;
    window.location.replace(page);
}

function setCookie(cname, cvalue=null, exdays=1) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie(cname) {
  var value = getCookie(cname);
  if (value === "null" || value === "" || value === "0") {
    return false;
  }
  return true;
}

function activateSideNav(){
    var loc = window.location.href;
    var activePage = "";
    //loading sideNav after role check
    if(loc.includes("gallery.html")){
        activePage = "gallery";
    } else if(loc.includes("pages.html")){
        activePage = "pages";
    } else if(loc.includes("enquiry.html")){
        activePage = "enquiry";
    }
    document.getElementById(activePage).className = "active";
}
function readFile() {

 if (this.files && this.files[0]) {

     var FR= new FileReader();

     FR.addEventListener("load", function(e) {
        postimage = e.target.result;
     });
     FR.onload = function(e) {
        $('#imgPreview').attr('src', e.target.result);
      }
     FR.readAsDataURL( this.files[0] );
  }
}
function loadProfile(){
    document.getElementById("acName").innerHTML = getCookie("empName");
}
function cancelFunc(val=0){    
    if(val !== 0){
        setCookie("empId");
        setCookie("empName");
        setCookie("isAdmin");
        var page = "login/login.html";
        window.location.replace(page);
    } else {
        window.location.reload();
    }
    
}

function dataUpdate(pageName){
    var data = [];
    var myObj = {};
    var phpFile = "";
    var image = "";

    switch(pageName){
        case 'gallery': phpFile = "updateGallery";
                        break;
        case 'Home':    phpFile = "updateHome";
                        break;
        case 'About':   phpFile = "updateAbout";
                        break;
        case 'Services': phpFile = "updateServices";
                        break;
        case 'Insights': phpFile = "updateInsights";
                        break;
        case 'Contact': phpFile = "updateContact";
                        break;
        case 'Leadership': phpFile = "updateLeadership";
                        break;
    }

    if(confirm("Confirm Upload?")){
        if(pageName == 'gallery'){
            var imgDesc = document.getElementById("imgDescription").value;
            myObj = {"image":postimage,"imgDesc":imgDesc};
        } else if(pageName == 'Home'){
            data[0] = document.getElementById('inpTitle').value;
            data[1] = document.getElementById('inpHomeLoc').value;
            myObj = {"title":data[0],"homeLoc":data[1]};
        } else if(pageName == 'About'){
            data[0] = document.getElementById('inpAbout').value;
            data[1] = document.getElementById('inpMission').value;
            data[2] = document.getElementById('inpVision').value;
            myObj = {"about":data[0],"mission":data[1],"vision":data[2]};
        } else if(pageName == 'Services'){
            data[0] = document.getElementById('inpServices').value;
            data[1] = document.getElementById('inpServQuote').value;
            data[2] = document.getElementById('inpService1').value;
            data[3] = document.getElementById('inpService2').value;
            data[4] = document.getElementById('inpService3').value;
            data[5] = document.getElementById('inpService4').value;
            myObj = {"service":data[0],"quote":data[1],"service1":data[2],"service2":data[3],"service3":data[4],"service4":data[5]};
        } else if(pageName == 'Insights'){
            data[0] = document.getElementById('inpInsights').value;
            data[1] = document.getElementById('inpInsQuote').value;
            data[2] = (document.getElementById('inpInsHead1').value).replace("'","&apos;");
            data[3] = (document.getElementById('inpInsDesc1').value).replace("'","&apos;");
            data[4] = (document.getElementById('inpInsHead2').value).replace("'","&apos;");
            data[5] = (document.getElementById('inpInsDesc2').value).replace("'","&apos;");
            data[6] = (document.getElementById('inpInsHead3').value).replace("'","&apos;");
            data[7] = (document.getElementById('inpInsDesc3').value).replace("'","&apos;");
            myObj = {"insights":data[0],"quote":data[1],"head1":data[2],"desc1":data[3],"head2":data[4],"desc2":data[5],"head3":data[6],"desc3":data[7]};
        } else if(pageName == 'Contact'){
            data[0] = document.getElementById('inpContactReceiver').value;
            data[1] = document.getElementById('inpContactPerson').value;
            data[2] = document.getElementById('inpContactPhone').value;
            data[3] = document.getElementById('inpContactEmail').value;
            data[4] = document.getElementById('inpContactAddress').value;
            data[5] = document.getElementById('inpContactMap').value;
            myObj = {"receiver":data[0],"person":data[1],"phone":data[2],"email":data[3],"address":data[4],"map":data[5]};
        } else if(pageName == 'Leadership'){
            data[0] = document.getElementById('inpLeaderName').value;
            data[1] = document.getElementById('inpLeaderAbout').value;
            myObj = {"leaderName":data[0],"leaderAbout":data[1],"image":postimage};
        }
        var jSONObj = JSON.stringify(myObj);
        
        xhr =  new XMLHttpRequest();
        this.responseType = 'text';
           xhr.onreadystatechange  =  function() {
            var ourData = xhr.response;
            if (this.readyState == 4 && this.status == 200) {
                if(xhr.responseText == '1'){
                    alert("Successful!");
                    postimage = "";
                    // cancelFunc();
                    if(pageName!="gallery"){
                        editData("edit"+pageName,true);
                    } else {
                        cancelFunc();
                    }
                } else {
                    alert("Update Failed! Try again!");
                }
            }
        };
        xhr.open("POST", "http://understandable-blin.hostingerapp.com/uzbizz2/admin/assets/php/"+phpFile+".php", true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send("jsonObj="+jSONObj);
    } else {
        return;
    }
}


function deleteData(id,pageName){

    var deleteThisImage = document.getElementById(id);

    if(confirm("Confirm deletion?")){
        var phpFile = "";
        switch(pageName){
            case 'gallery': phpFile = "deleteImages";
                        break;
        }
        var xhr =  new XMLHttpRequest();
        var params = 'id='+id;
        xhr.onreadystatechange  =  function() {
                if (this.readyState == 4 && this.status == 200) {//if result successful
                    var message = 'Deletion successful!';
                    if(xhr.responseText == "1"){
                            alert(message);
                            deleteThisImage.style.display = "none";
                            // window.location.reload();
                    } else {
                        alert('Deletion Failed!');
                    }
                }
        };
        xhr.open("POST", "assets/php/"+phpFile+".php", true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send(params);
    } else {
        return;
    }
}

