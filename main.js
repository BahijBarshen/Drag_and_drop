let btn=document.getElementById('btn');
let inp=document.getElementById('inp');
let boxs=document.querySelectorAll(".box");
let Delete=document.getElementById('Delete')
let data=null;
btn.onclick=function(){
if(inp.value!=''){
    boxs[0].innerHTML +=`<p class="items" draggable="true"> ${inp.value} </p>`
inp.value='';
}
getdata();
}
function getdata(){
let items=document.querySelectorAll('.items');
items.forEach(item=>{
    Delete.addEventListener('dragover',function(e){
        e.preventDefault();
        this.style.background='white'
    });
    Delete.addEventListener('dragleave',function(){
        this.style.background='#ccc'
    });
   
    item.addEventListener('dragstart',function(){
        item.style.opacity='0.5';
        data=item;
        console.log("this is start drag")
    })
    item.addEventListener('dragend',function(){
        item.style.opacity='1';
        console.log("this is end drag")
        data=null;
    })
    boxs.forEach(box=>{
        box.addEventListener('dragover',function(e){
            e.preventDefault();
            this.style.background="green";
            this.style.color="#fff";
            console.log("this is drag over");
        });
        box.addEventListener('dragleave',function(){
            this.style.background="#fff";
            this.style.color="black";
            console.log("this is drag over");
        });
        box.addEventListener('drop',function(){
            this.style.background="#fff";
            this.style.color="black";
            box.append(data)
            console.log('drop a box');
        })
        Delete.addEventListener('drop',function(){
        box.removeChild(data);
        this.style.background='#ccc'
    })
    })
})

}


























