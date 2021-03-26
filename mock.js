var update_active=function( v){

    var datalist=document.getElementById("datalist")
    datalist.querySelector("#-name").innerHTML=v.querySelector("#name").innerHTML
    datalist.querySelector("#-email").innerHTML=v.querySelector("#mail").innerHTML
    datalist.querySelector("#-mobile").innerHTML=v.querySelector("#number").innerHTML
    if(v.querySelector("#landline")!=undefined){
        datalist.querySelector("#-landline").innerHTML=v.querySelector("#landline").innerHTML 
    } 
    if(v.querySelector("#website")!=undefined){
        datalist.querySelector("#-website").innerHTML=v.querySelector("#website").innerHTML 
    }  
    if(v.querySelector("#address")!=undefined){
        addresslist=v.querySelector("#address").innerHTML.split(',')
        if(addresslist[0]!=undefined){
            datalist.querySelector("#-address1").innerHTML=addresslist[0]
        }
        if(addresslist[1]!=undefined){
            datalist.querySelector("#-address2").innerHTML=addresslist[1]
        }
        if(addresslist[2]!=undefined){
            datalist.querySelector("#-address3").innerHTML=addresslist[2]
        }

    }   
}

var active_change=function(){
    var prev_active= document.getElementsByClassName("active-list")[0]
    if(prev_active!=undefined){
        //prev active remove active-list
        prev_active.classList.remove("active-list")
    }
    //this add active list
    this.classList.add("active-list")
    var datalist=document.getElementById("datalist")
    datalist.querySelector("#-name").innerHTML=this.querySelector("#name").innerHTML
    datalist.querySelector("#-email").innerHTML=this.querySelector("#mail").innerHTML
    datalist.querySelector("#-mobile").innerHTML=this.querySelector("#number").innerHTML
    datalist.querySelector("#-landline").innerHTML=""
    datalist.querySelector("#-website").innerHTML=""
    datalist.querySelector("#-address1").innerHTML=""
    datalist.querySelector("#-address2").innerHTML=""
    datalist.querySelector("#-address3").innerHTML=""
    if(this.querySelector("#landline")!=undefined){
        datalist.querySelector("#-landline").innerHTML=this.querySelector("#landline").innerHTML 
    } 
    if(this.querySelector("#website")!=undefined){
        datalist.querySelector("#-website").innerHTML=this.querySelector("#website").innerHTML 
    }  
    //datalist.querySelector("#-address1").innerHTML="Hyderabad,"
    //datalist.querySelector("#-address2").innerHTML="Telangana,"
    //datalist.querySelector("#-address3").innerHTML="500061"
    if(this.querySelector("#address")!=undefined){
        addresslist=this.querySelector("#address").innerHTML.split(',')
        if(addresslist[0]!=undefined){
            datalist.querySelector("#-address1").innerHTML=addresslist[0]
        }
        if(addresslist[1]!=undefined){
            datalist.querySelector("#-address2").innerHTML=addresslist[1]
        }
        if(addresslist[2]!=undefined){
            datalist.querySelector("#-address3").innerHTML=addresslist[2]
        }

    } 
    
}

var contact_list_items=document.getElementsByClassName("contact-list-item")
for(v of contact_list_items)
{
    v.addEventListener("click",active_change)
}
var nav_list_items=document.getElementsByClassName("nav-list-item")
for(v of nav_list_items){
    v.addEventListener("click",function(){
         var prev_active=document.getElementsByClassName("nav-active")[0]
         if(prev_active!=undefined){
             //remove nav active from prev active
            prev_active.classList.remove("nav-active")
         }
         this.classList.add("nav-active")
         nav=this.childNodes[1]
         if(nav.className=="add"){
            var prev_active_list=document.getElementsByClassName("active-list")[0]
            if(prev_active_list!=undefined){
                //remove active-list
                prev_active_list.classList.remove("active-list")
             }
            var form_container=document.getElementById("form-container");
            form_container.style.display="block";
            var datalist=document.getElementById("datalist");
            datalist.style.display="none";
            var iconlist=document.getElementById("iconlist")
            iconlist.style.display="none";
            var addbutton=document.getElementById("addbutton")
            addbutton.style.display="inline-block";
            var editbutton=document.getElementById("editbutton")
            editbutton.style.display="none";
            
         }
         else{
            var ful=document.getElementsByClassName("contact-list-item")[0]
            ful.classList.add("active-list")
            update_active(ful)
            var form_container=document.getElementById("form-container");
            form_container.style.display="none";
            var datalist=document.getElementById("datalist");
            datalist.style.display="block";
            var iconlist=document.getElementById("iconlist")
            iconlist.style.display="block";
         }
    })
}

function afterAdd(){
   /* var inputs=document.getElementsByTagName("input");
    var textarea=document.getElementsByTagName("textarea")[0];
    values=[]
    for(v of inputs){
         values.push(v.value);
    }
    values.push(textarea.value)*/
 var ul=document.createElement("ul");
 var l=document.createElement("li");
 l.innerHTML=document.getElementById("input-name").value
 document.getElementById("input-name").value=""
 l.classList.add("name");
 l.id="name"
 ul.appendChild(l)
 l=document.createElement("li");
 l.innerHTML=document.getElementById("input-mobile").value
document.getElementById("input-mobile").value=""
 l.classList.add("mail-number");
 l.id="number"
 ul.appendChild(l)
 l=document.createElement("li");
 l.innerHTML=document.getElementById("input-mail").value
 document.getElementById("input-mail").value=""
 l.classList.add("mail-number");
 l.id="mail"
 ul.appendChild(l)
 if(document.getElementById("input-landline").value!=undefined){
    l=document.createElement("li");
    l.innerHTML=document.getElementById("input-landline").value
    document.getElementById("input-landline").value=""
    l.classList.add("mail-number");
    l.id="landline"
    ul.appendChild(l)    
 }
 if(document.getElementById("input-website").value!=undefined){
    l=document.createElement("li");
    l.innerHTML=document.getElementById("input-website").value
    document.getElementById("input-website").value=""
    l.classList.add("mail-number");
    l.id="website"
    ul.appendChild(l)    
 }

 if(document.getElementById("address").value!=undefined){
    l=document.createElement("li");
    l.innerHTML=document.getElementById("address").value
    document.getElementById("address").value=""
    l.classList.add("mail-number");
    l.id="address"
    ul.appendChild(l)    
 }

 /*t=values[1]
 values[1]=values[2]
 values[2]=t
 for(i=1;i<values.length;i++){
     var l=document.createElement("li")

     l.innerHTML=values[i]
     l.classList.add("mail-number")
    ul.appendChild(l)
 }*/
 var pul=document.getElementById("contact-list")
 ul.classList.add("contact-list-item");
 ul.classList.add("active-list");
 //var ful=document.getElementsByClassName('contact-list-item')[0]
 //ful.classList.add("active-list");
 update_active(ul)
 var form_container=document.getElementById("form-container");
         form_container.style.display="none";
         var datalist=document.getElementById("datalist");
         datalist.style.display="block";
         var iconlist=document.getElementById("iconlist")
         iconlist.style.display="block";

 pul.appendChild(ul)
 ul.addEventListener("click",active_change )
 //var prev_active=document.getElementsByClassName("nav-active")[0]
 //prev active remove nav-active
 //prev_active.classList.remove("nav-active")
 //this.classList.add("nav-active")
 var add=document.getElementById("add")
 var home=document.getElementById("home")
 add.classList.remove("nav-active")
 home.classList.add("nav-active")
 var addbutton=document.getElementById("addbutton")
 addbutton.style.display="none";
 var editbutton=document.getElementById("editbutton")
 editbutton.style.display="none";
}

var deletion=function(){
     var ul=document.getElementsByClassName("active-list")[0]
     ul.remove();
     var ful=document.getElementsByClassName("contact-list-item")[0]
     //addList
     ful.classList.add("active-list")
     update_active(ful)
}

var edition=function(){
    var form_container=document.getElementById("form-container");
    form_container.style.top="160px"
    form_container.style.display="block";
    var datalist=document.getElementById("datalist");
    datalist.style.display="none";
    var iconlist=document.getElementById("iconlist")
    iconlist.style.display="none";
    var ul=document.getElementsByClassName("active-list")[0]
    /*ultext=ul.innerText.split("\n");
    var inputs=document.getElementsByTagName("input");
    var textarea=document.getElementsByTagName("textarea")[0];
    i=0;
    temp=ultext[1]
    ultext[1]=ultext[2]
    ultext[2]=temp
    for(v of inputs){
       if(ultext[i]!=undefined){
        v.value=ultext[i]
       }
        i=i+1;
    }
    if(ultext[i]!=undefined){
        textarea.value=ultext[i]
    }*/
    document.getElementById("input-name").value=ul.querySelector("#name").innerHTML;
    document.getElementById("input-mail").value=ul.querySelector("#mail").innerHTML;
    document.getElementById("input-mobile").value=ul.querySelector("#number").innerHTML;
    if(ul.querySelector("#landline")!=undefined){
        document.getElementById("input-landline").value=ul.querySelector("#landline").innerHTML;
    }
    if(ul.querySelector("#website")!=undefined){
        document.getElementById("input-website").value=ul.querySelector("#website").innerHTML;
    }
    if(ul.querySelector("#address")!=undefined){
        document.getElementById("address").value=ul.querySelector("#address").innerHTML;
    }

    var editbutton=document.getElementById("editbutton")
    editbutton.style.display="inline-block";
    var addbutton=document.getElementById("addbutton")
    addbutton.style.display="none";
}


function afterEdit(){
    var ul=document.getElementsByClassName("active-list")[0]
    ul.remove();
    var ul=document.createElement("ul");
    var l=document.createElement("li");
    l.innerHTML=document.getElementById("input-name").value
    document.getElementById("input-name").value=""
    l.classList.add("name");
    l.id="name"
    ul.appendChild(l)
    l=document.createElement("li");
    l.innerHTML=document.getElementById("input-mobile").value
   document.getElementById("input-mobile").value=""
    l.classList.add("mail-number");
    l.id="number"
    ul.appendChild(l)
    l=document.createElement("li");
    l.innerHTML=document.getElementById("input-mail").value
    document.getElementById("input-mail").value=""
    l.classList.add("mail-number");
    l.id="mail"
    ul.appendChild(l)
    if(document.getElementById("input-landline").value!=undefined){
       l=document.createElement("li");
       l.innerHTML=document.getElementById("input-landline").value
       document.getElementById("input-landline").value=""
       l.classList.add("mail-number");
       l.id="landline"
       ul.appendChild(l)    
    }
    if(document.getElementById("input-website").value!=undefined){
       l=document.createElement("li");
       l.innerHTML=document.getElementById("input-website").value
       document.getElementById("input-website").value=""
       l.classList.add("mail-number");
       l.id="website"
       ul.appendChild(l)    
    }
   
    if(document.getElementById("address").value!=undefined){
       l=document.createElement("li");
       l.innerHTML=document.getElementById("address").value
       document.getElementById("address").value=""
       l.classList.add("mail-number");
       l.id="address"
       ul.appendChild(l)    
    }
   
    /*t=values[1]
    values[1]=values[2]
    values[2]=t
    for(i=1;i<values.length;i++){
        var l=document.createElement("li")
   
        l.innerHTML=values[i]
        l.classList.add("mail-number")
       ul.appendChild(l)
    }*/
    var pul=document.getElementById("contact-list")
    ul.classList.add("contact-list-item");
    ul.classList.add("active-list");
   
    pul.appendChild(ul)
    ul.addEventListener("click",active_change )

   update_active(ul) 
    var form_container=document.getElementById("form-container");
    form_container.style.display="none";
    var datalist=document.getElementById("datalist");
    datalist.style.display="block";
    var iconlist=document.getElementById("iconlist")
    iconlist.style.display="block";
    var editbutton=document.getElementById("editbutton")
    editbutton.style.display="none";
    var addbutton=document.getElementById("addbutton")
    addbutton.style.display="none";

}
var delete_icon=document.getElementById("delete");
delete_icon.addEventListener("click",deletion)
var edit_icon=document.getElementById("edit")
edit_icon.addEventListener("click",edition)