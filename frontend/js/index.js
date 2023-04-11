const ublue = '../Assets/Blue_umbrella.png';
const uyellow = '../Assets/Yello_umbrella.png';
const upink ='../Assets/Pink_umbrella.png';
const loader='../Assets/loader_icon.svg'
const cancel='../Assets/close-line.svg'
const loadbuckt='../Assets/upload_icon.svg'

function handleColor(c){

    // console.log(c)
    let imgchange=document.getElementById('u-img');
    let uploadlabel=document.getElementById('style-logo-updater');
    let bgcont=document.querySelector('.container');
    let bgmain=document.querySelector('.style_main');

    if (c.value === 'blue') {
        
        imgchange.src = ublue;
        uploadlabel.style.backgroundColor='#40b4e5'
        bgcont.style.backgroundColor='#b4e4ff';
        bgmain.style.backgroundColor='#b4e4ff'

        
        loaderCreator()
        handleFileName()
        
        
    } else if (c.value === 'yellow') {
        
        imgchange.src = uyellow;
        uploadlabel.style.backgroundColor='#fad34c';
        bgcont.style.backgroundColor='#fefdd0';
        bgmain.style.backgroundColor='#fefdd0'
        
       
        loaderCreator()
       handleFileName()
        
        
    } else if (c.value === 'pink') {
        imgchange.src = upink;
        uploadlabel.style.backgroundColor='#d9368d'
        bgcont.style.backgroundColor='rgb(242 240 239)'
        bgmain.style.backgroundColor='rgb(242 240 239)';
        
        loaderCreator()
       handleFileName()
    
     
        
    }

  
   // uploadlabel.style.backgroundColor='red'
}
// ====================================================================




window.handleColor = handleColor;

// =====================global call here=============================

let imgchange=document.getElementById('u-img');

let upllogotxt=document.getElementById('logotxt').textContent="UPLOAD LOGO"

window.upllogotxt=upllogotxt;



let loadericon=document.getElementById('u-loader-img');



var fileName ;

// =================================================================================

function loaderCreator(){
    let spanbucket=document.querySelector(".rot-loader-icon");
    // let logov1=document.querySelector("#style-logo-land");
      let Loimg=document.createElement("img")
      Loimg.className='u-loader-img';
      Loimg.src=loader;
      Loimg.setAttribute("fill", "red");

      spanbucket.append(Loimg);
     
      imgchange.style.display='none'
    
      setTimeout(() => {
       
        Loimg.remove();
        imgchange.style.display='block'
        
      }, 2000);

}

// =====================================================================================

let selectLogo=document.getElementById('selectlogo');
selectLogo.addEventListener('change', handle_companylogo);

function handle_companylogo(){

    // loader created
    let spanbucket=document.querySelector(".rot-loader-icon");
      let Loimg=document.createElement("img")
      Loimg.className='u-loader-img';
      Loimg.src=loader;
      spanbucket.append(Loimg);
    //==================================================
    
    //logo created

    let logo_place=document.querySelector(".style-main-img");
    let logov1=document.createElement("img");
    logov1.id='style-logo-land';
    logo_place.append(logov1)
    let holdlogoNm= URL.createObjectURL(selectLogo.files[0]);
     fileName = selectLogo.files[0].name;

//  =================================================================

      imgchange.style.display='none';
    

    setTimeout(() => {
        
        Loimg.remove()
        logov1.src=holdlogoNm;
        imgchange.style.display='block'

    }, 2000);


       //create cancel icon
       const cancelIcon=document.querySelector("#cancel-icon");
       let cancelIconv1 = cancelIcon.querySelector("img");
       if (!cancelIconv1) {
           cancelIconv1 = document.createElement("img");
           cancelIconv1.src = cancel;
           cancelIconv1.style.display='block'
           cancelIcon.append(cancelIconv1);
           
       }
   

    handleFileName()
    
   

}
//   ===================Handle upload_Icon, File name and cancel Button==================================


function handleFileName(){

    




    //chage uploadIcon
   const uploadIcon_hold= document.getElementById('upload-bucket-icon');
   uploadIcon_hold .src=loader;
   uploadIcon_hold.className='uploader-rotaate';

   setTimeout(() => {
    uploadIcon_hold.classList.remove('uploader-rotaate');
    uploadIcon_hold .src= loadbuckt;

   }, 2000);
   


    //display file name
    if(fileName){
      document.getElementById("logotxt").textContent=fileName;

    }
   


}

// ================================================================

// handleCancel  label

document.getElementById('cancel-icon').addEventListener('click',handleCancel)

function handleCancel() {
    // Clear the file input field
    selectLogo.value = '';

    handleFileName=null;
  
    // Hide the uploaded image and reset the file name
    imgchange.src = ublue;
    document.getElementById("logotxt").textContent = 'UPLOAD LOGO';
    // document.getElementById("logotxt").style.backgroundColor = '#40b4e5';
    document.getElementById("style-logo-updater").style.backgroundColor='#40b4e5'
  
    // Remove the cancel icon
    const cancelIcon = document.querySelector("#cancel-icon");
    let cancelIconv1 = cancelIcon.querySelector("img");
    if (cancelIconv1) {
      cancelIconv1.remove();
    }
    
   
  }
  
