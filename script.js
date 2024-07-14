// Your code here.

let items=document.querySelectorAll('.item');
let ct=1;
items.forEach(function(item){
    item.id=`item${ct++}`;
})

items.forEach(function(item){
    item.setAttribute('draggable','true');

    item.addEventListener('dragstart',(event)=>{
        let div1=event.target.id;
        window.localStorage.setItem('dragstart',div1);
        item.classList.add('active');
    });

    item.addEventListener('dragend',()=>{
        item.classList.remove('active');
    });

    item.addEventListener('dragover',(event)=>{
        event.preventDefault();
    });

    item.addEventListener('drop',(event)=>{
        event.preventDefault();
        let div1=window.localStorage.getItem('dragstart');
        let div2=item.id;

        

        if(div1!=div2){
            item.classList.remove('active');
            let box1=document.getElementById(div1);
            let box2=document.getElementById(div2);
                 
            box1.parentNode.insertBefore(box1, box2.nextSibling);

            // Update ids after swapping
            items.forEach((item, index) => {
                item.id = `item${index + 1}`;
            });
            window.localStorage.removeItem('dragstart');
        }

    })
});