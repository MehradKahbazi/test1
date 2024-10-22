const staff = [
    {sName: 'Ali', salary: 8000},
    {sName: 'Reza', salary: 15000},
    {sName: 'Amin', salary: 23000},
    {sName: 'Mohammad', salary: 60000},
];

staff.map(item =>{
    if(item.salary < 10000){
        console.log(item.sName ,'Moaf');
        
    } else if(item.salary >= 10000 && item.salary< 20000){
        console.log(item.sName ,item.salary*15/100);
        
    } else if(item.salary >= 20000 && item.salary< 50000){
        console.log(item.sName ,item.salary*25/100);
    }else if(item.salary > 50000){
        console.log(item.sName ,item.salary*35/100);
    }
})