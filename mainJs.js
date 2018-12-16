"use strict";

var box;
var boxImage;
var boxcaption;
var next=0;
var prev=0;
var index=0;

function init(){
	//console.log('loaded');
	
    //lightbox
        var box;
        if(box = document.querySelector("#Lightbox")){
        var boxImage = document.querySelector("#lightboxImage");
        var boxcaption = document.querySelector("#lightboxCaption");
        var arrows = document.querySelector("#arrows");
        var leftArrow= document.querySelector("#lightboxLeft");
        var rightArrow= document.querySelector("#lightboxRight");

        box.addEventListener("click" , function(e){
            box.style.display="none";
            arrows.style.display="none";

            console.log("closed");
        });
            
        rightArrow.addEventListener("click" , function(e){
                        console.log("prev: "+prev +" - next: "+next);

            boxImage.src=projectImages[next];
            boxcaption.innerHTML=galCaptions[next];
            console.log("next");

            if(next+1 > projectImages.length-1){
                next = 0;
                prev = projectImages.length-2;
            }
            else {
                next = next+1;
                prev = next-2;
            }
            if(prev < 0){
                prev = projectImages.length-1;
            }
            console.log("prev: "+prev +" - next: "+next);

        });
        
        leftArrow.addEventListener("click" , function(e){
            console.log("prev: "+prev +" - next: "+next);

            boxImage.src=projectImages[prev];
            boxcaption.innerHTML=galCaptions[prev];
            console.log("back");
            
            if(prev-1 < 0){
                prev = projectImages.length-1;
                next = 0;
            }
            else{    
                prev = prev-1;
                next = prev+2;
            }
            if(next > projectImages.length-1){
                next = 0;
            }
            console.log("prev: "+prev +" - next: "+next);

        });
    }
	
	var gallery;
    if( gallery = document.querySelector("#Gallery")){
        var Images = document.createElement("ul"); //create element in memory
        
        //create gallery items
        for(var i =0;i<projectImages.length;i++){
            var li = document.createElement("li");
            
            if(gallery.classList.contains("projects")){
                var a = document.createElement("a");
                a.href = links[i];
                
                var img = document.createElement("img");
                img.src = projectImages[i];
                img.alt = projectImages[i];
                
                var cap = document.createElement("p");
                cap.innerHTML = galCaptions[i];
                
                li.appendChild(cap);
                a.appendChild(img);
                li.appendChild(a);
                Images.appendChild(li);
            }
            else {
                var img = document.createElement("img");
                img.src = projectImages[i];
                img.alt = i;
                img.title = galCaptions[i];

                var cap = document.createElement("p");
                cap.innerHTML = galCaptions[i];
                console.log(galCaptions[i]+"-");

                //lightbox
                if(gallery.classList.contains("gallery")){
                    
                    li.addEventListener("click" , function(e){
                        boxImage.src=e.target.src;
                        boxImage.alt=e.target.alt;
                        boxcaption.innerHTML=e.target.title;
                        index=parseFloat(e.target.alt);
                        
                        var num = parseFloat(index)-1;
			             //check if input is a num or not
			            if( isNaN(num) ){ num = 0; }
                        
                        if(num+2 > projectImages.length-1){
                            next = 0;
                        }
                        else next = num+2;
                              
                        if(num-2 < 0){
                            prev = projectImages.length-1;
                        }
                        else prev = num-2;
                        
                        console.log("prev: "+prev +" - index: "+num+" - next: "+next);

                        
                        document.getElementById('Lightbox').style.display='inline';
                        arrows.style.display="inline";
                    });
                }
                
                li.style.width= 300 +"px";
                //li.style.height= 300 +"px";
                li.style.height= "auto";
                li.appendChild(cap);
                li.appendChild(img);
                
                Images.appendChild(li);
            }
            
            gallery.appendChild(Images); //add to html
        }
    }
}



//window.onload = init;
	