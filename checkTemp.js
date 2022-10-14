



document.write (checkTemp(60));

function checkTemp(temp) {
    var temperatuur = 1000;
    if(temp>=0 && temp<=20) {
    temperatuur = -1
 //       document.write('jeeee');

    
    } else if(temp>=21 && temp<=40) {
    temperatuur = 0;
//        document.write('temperatuur on paras');

    } else if(temp>=41 && temp<=60) {
    temperatuur = 1;
//        document.write('liiga kuum');
      }
    return temperatuur;


  }

