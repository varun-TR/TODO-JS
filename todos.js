input =prompt("What do you want to do today?")
const items=[]
while(input!=="quit" && input!=='q')
{
    if(input==='show'){

        for(i=0;i<items.length;i++)
        {
            console.log(`${i}: ${items[i]}`);
        }
    }
    else if(input === 'new'){
        let x=prompt("what do you want to add?")
        items.push(x);
        console.log(`${x} is added to list`);

    }
    else if(input==='delete'){
        let y=parseInt(prompt("enter number to delete?"));
        if(!Number.isNaN(y)){
            let delete_item=items.splice(y,1);
            console.log(`${delete_item} is deleted `);
        }
        else{
            console.log("invalid index")
        }
  
        
    }
    input =prompt("What do you want to do today?")
}