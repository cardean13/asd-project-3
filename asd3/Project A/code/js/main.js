// Paste your code in here!





// Paste your code in here!
//Yusef Hassan
//ASD 0712
//Project 2
$(document).ready(function(){
    var aiform = $("#accountInfo"),
    reliableValue = "No",
        jobValue = "No",
        replaceValue = "No",
        trustValue = "No",
        sexValue,
        id = Math.floor(Math.random()*100000001);
});      

    

//$("#base").on("pageinit", function(){})

function validate(){

    var aiform;
    aiform.validate({
    
        invalidHandler: function (form, validator){},
        submitHandler: function(){
            var data = aiform.serializeArray();
        }
    });
};

//wait till DOM is ready

    //get element by ID function
/*    function e(x){
        var elemental = document.getElementById(x);
        return elemental;
    }*/
    
    //create select field element, populate with options
    /*function wheelHouse(){
        var formTag = document.getElementsByTagName("form"),
            selectLi = e("select"),
            makeSelect = document.createElement("select");
            makeSelect.setAttribute("id", "groups");
        //comeback to type of media
    //    selectLi.appendChild(makeSelect);
    }*/
    
    //find value of radio button
    function getSelectedRadio(){
        var sexValue;
      
        var radios = document.forms[0].sex;
        for(var i=0; i<radios.length; i++){
            if(radios[i].checked){
                sexValue = radios[i].value;
            }
        }
    }
    
    function getCheckBoxValue(){
     
    ;
    var reliableValue,
        jobValue,
        replaceValue,
        trustValue;
        if($("reliable").checked){
            reliableValue = $("reliable").value;
        }else{
            reliableValue = "No";
        }

        if($("job").checked){
            jobValue = $("job").value;
        }else{
            jobValue = "No";
        }
        
        if($("replace").checked){
            replaceValue = $("replace").value;
        }else{
            replaceValue = "No";
        }

        if($("trust").checked){
            trustValue = $("trust").value;
        }else{
            trustValue = "No";
        }
    }
    
    function toggleControls(n){
        var displayNone = {"display": "none"};
        var displayInline = {"display": "inline"};
        var displayBlock = {"display": "block"};
        
        switch(n){
            case "on":
                $("#foot").hide();
                $("#allInfo").show();
                $("#accountInfo").hide();
                $("#remove").show();
                $("#allAccounts").hide();
                $("#addAccount").show();
                break;
            case "off":
                $("#accountInfo").show();
                $("#remove").show();
                $("#allAccounts").show();
                $("#addAccount").hide();
                $("#items").hide();
                break;
            default:
                return false;
        }
    }
    
    $("#addAccount").on("pageinit", function(){
          var  id = Math.floor(Math.random()*100000001);

    function saveData(key){
        if(!key){
             id = Math.floor(Math.random()*100000001);
        }else{ 
           id = key;
           
        }
        getSelectedRadio();
        getCheckBoxValue();        
        var item = {};
        var reliableValue = "No",
        jobValue = "No",
        replaceValue = "No",
        trustValue = "No"
    ;
            var sexValue;
            item.fname =["First Name:", $("#fname").val()];
            item.lname =["Last Name:", $("#lname").val()];
            item.sex =["Sex:", sexValue];
            item.age =["Age:", $("#ageRange").val()];
            item.reliable =["Is the borrower reliable?", reliableValue];
            item.job =["Do they have a job?", jobValue];
            item.replace =["If broken, could they replace it?", replaceValue];
            item.trust =["Do you fully trust them?", trustValue];
            item.media =["Media:", $("#media").val()];
            item.dname =["Disc Name:", $("#dname").val()];
            item.value =["Value:", $("#value").val()];
            item.ldate =["Date Lent:", $("#ldate").val()];
            item.rdate =["Expected Return Date:", $("#rdate").val()];
            item.comments =["Anymore Information?", $("#comments").val()];

        localStorage.setItem(id, JSON.stringify(item));
        alert("Information Logged");
    }
    var getData = function(){
        toggleControls("on");
        if(localStorage.length === 0){
            alert("No saved accounts, default data added.");
            window.location.reload();  //('#listview').listview('refresh');
            return false;
        }
    //    $("#allInfo").append($("#info2"));
        
        
        //document.body.appendChild(makeDiv);
               var makeItemLinks = function (key) {};

        
        for(var i = 0, len = localStorage.length; i<len; i++){
            var contact = $('<li class="singleContact"></li>').appendTo("#allInfo");
            //var makeli = document.createElement("li");
            //var linksLi = document.createElement("li");
            
            //makeList.appendChild(makeli);
            var key = localStorage.key(i);
            var value = localStorage.getItem(key);
            var obj = JSON.parse(value);
  //var makeSubList = document.createElement("ul");
            //makeli.appendChild(makeSubList);
    //        getImage(obj.group[1], makeSubList);
            for(var n in obj){
                $('<p>' + obj[n][0]+'</p>').appendTo(contact);
                //var makeSubli = document.createElement("li");
                //makeSubList.appendChild(makeSubli);
                //var optSubText = obj[n][0]+" "+obj[n][1];
                //makeSubli.innerHTML = optSubText;
                //makeSubList.appendChild(linksLi);
            }                      makeItemLinks(key);
           };
           
    function autoFillData(){
        for(var n in JSON){
            var id = Math.floor(Math.random()*100000001);
            localStorage.setItem(id, JSON.stringify(JSON[n]));
        }
    }
    function getImage(catName, makeSubList){
        var imageLi = $("<li></li>");
        makeSubList.append(imageLi);
        var newImg = $("<img />");
        newImg.attr("src", "images/"+ catName + ".png");
        imageLi.append(newImg);
    }
    //make Item links function, creates edit and delete links
        
        
    /*    var editLink = document.createElement("a");
        editLink.href = "#";
        editLink.key = key;
        var editText = "Edit Info";
        $(editLink).bind("click", editItem);
        editLink.innerHTML = editText;
        linksLi.appendChild(editLink);*/
        
    /*    var deleteLink = document.createElement("a");
        deleteLink.href = "#";
        deleteLink.key = key;
        var deleteText = "Delete Info";
        $(deleteLink).bind("click", deleteItem);
        deleteLink.innerHTML = deleteText;
        linksLi.appendChild(deleteLink);
    }*/
    
    function editItem(){
        var value = localStorage.getItem(this.key);
        var item = JSON.parse(value);
        toggleControls("off");
        
        $("#fname").val = item.fname[1];
        $("#lname").val = item.lname[1];
        var radios = document.forms[0].sex;
        for(var i=0; i<radios.length; i++){
            if(radios[i].value == "Male" && item.sex[1] == "Male"){
                radios[i].setAttribute("checked", "checked");
            }else if(radios[i].value == "Female" && item.sex[1] == "Female"){
                radios[i].setAttribute("checked", "checked");
            }
        }
    /*   e("ageRange").value = item.age[1];        
        
        if(item.reliable[1] == "Yes"){
            e("reliable").setAttribute("checked", "checked");
        }
        if(item.job[1] == "Yes"){
            e("job").setAttribute("checked", "checked");
        }
        if(item.replace[1] == "Yes"){
            e("replace").setAttribute("checked", "checked");
        }
        if(item.trust[1] == "Yes"){
            e("trust").setAttribute("checked", "checked");
        }*/
        $("#dname").value(item.dname[1]);
        $("#value").value(item.value[1]);
        $("#ldate").value(item.ldate[1]);
        $("#rdate").value(item.rdate[1]);
        $("#comments").value(item.comments[1]);
        
        $(saveData).unbind("click", saveData);
        $("#submit").value = "Edit Contact";
        var editSubmit = $("#submit");
        $(editSubmit).on("click", validate);
        editSubmit.key = this.key;
    }
        };

    function deleteItem(){
        var ask = confirm("Delete contact?");
        if (ask){
            localStorage.removeItem(this.key);
            window.location.reload();
        }else{
            alert("Contact not removed");
        }
    }
    
    function deleteData(){
        if(localStorage.legnth === 0){
            alert("Nothing to delete!");
        }else{
            localStorage.clear();
            alert("All accounts deleted.");
            window.location.reload();
            return false;
        }
    }
    
    function validate(d){
        var getDname = $("#dname");
        var getFname = $("#fname");
        var getLname = $("#lname");
        
            getDname.css = "1px solid black";
            getFname.css = "1px solid black";
            getLname.css = "1px solid black";

        var message = [];

        
        if(getFname.value === ""){
            var fnameError = "Please Type in First Name.";
                $("#fname").css({
                    borderColor: "#ff0000",
                    hight: "1px"
                });
            message.push(fnameError);
        }
        if(getLname.value === ""){
            var lnameError = "Please Type in Last Name.";
                $("#lname").css({
                    borderColor: "#ff0000",
                    hight: "1px"
                });
            message.push(lnameError);
        }
        if(getDname.value === ""){
            var dnameError = "Please Type in Disc Name.";
                $("#dname").css({
                    borderColor: "#ff0000",
                    hight: "1px"
                });
            message.push(dnameError);
        }
        if (message.length >= 1){
            for(var i=0, j=message.length; i < j; i++){
                var text = $("li");
                text.html = message[i];
            }
            alert(message);
            return false;
        }else{
            saveData(this.key);
        }
    } 
    // variable defaults

//    wheelHouse();
    
    //links and submit button
    $("#remove").on("click", deleteData);
    $("#allAccounts").on("click", getData);
    $("#submit").on("click", validate);

});