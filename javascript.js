    let x=10;
    let string="hii"
    let boolean=false
    let nullvalue=null
    console.log(x+" "+string+" "+boolean+" "+nullvalue);


    let datajs={
      name:"Darsini C S",
      phone:9025712644,
      alive:false
    }
    console.log(datajs.name);

    let datajson={
      "name":"Darsini C S",
      "phone":9025712644,
      "alive":false
    }
    console.log(datajson.name);


    let dataarray=[datajs,datajson,"hii",false];
    console.log(dataarray[2]);


    let Hi="hi" 
    let hi="hi"
    let Firstname="hii"
    let firstname="hello"
    let FirstName="bye"
    console.log(FirstName);

    function myFunction(data1,data2)
    {
      if(data2)
      {
      console.log(data1+" "+data2);
      }
      else{
        console.log("data2 is unavailable")
      }
    }
myFunction("hii",false)