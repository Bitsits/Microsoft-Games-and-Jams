// JScript File

var timerID = null;
var timerRunning = false;

function stopclock()
{
	if(timerRunning)
		clearTimeout(timerID);
	timerRunning = false;
}

var now = null;
var totalSec1 = 0;
var totalSec2 = 0;
var totalSec3 = 0;
var totalSec4 = 0;
var totalSec5 = 0;
var totalSec6 = 0;
var totalSec7 = 0;
var totalSec8 = 0;
var totalSec9 = 0;
var totalSec10 = 0;
var totalSec11 = 0;
var totalSec12 = 0;
var totalSec13 = 0;
var totalSec14 = 0;
var totalSec15 = 0;
var totalSec16 = 0;
var totalSec17 = 0;
var totalSec18 = 0;






function startclock_New(totalSeconds1, timer_Id1, totalSeconds2, timer_Id2)
 {
     //alert('start clock');
    totalSec1 = parseInt(totalSeconds1);
	totalSec2 = parseInt(totalSeconds2);
	if((totalSec1 > 0) || (totalSec2 > 0))
	{
	    //timerID = setInterval("showtime_New('"+timer_Id1.toString()+"','"+timer_Id2.toString()+"')",1000);
		timerID = setInterval("showtime_New('"+timer_Id1.toString()+"','"+timer_Id2.toString()+"')",1000);
	}
}

function showtime_New(timer_Id1,timer_Id2) 
{
      
	//calc timer 1
	totalSec1--;
	
	if ((totalSec1 == 0) && (totalSec2 == 0))
	{
		stopclock();
	}
//	//alert('Hi1');
	var sec1 = totalSec1;		
//	
//	//alert(sec1);
//	
	var day1 = parseInt(sec1 / 86400);
	var day1value = day1.toString();
	if (day1 < 10)
	{
	    day1value = '0' + day1.toString();
	}
    sec1 = sec1 % 86400;
//	
//	//alert(day1);
//	
	var hrs1 = parseInt(sec1 / 3600);
	var hrs1value = hrs1.toString();
	if (hrs1 < 10)
	{
	    hrs1value = '0' + hrs1.toString();
	}
	sec1 = sec1 % 3600;
//	
//	//alert(hrs1value);
//	
	var min1= parseInt(sec1 / 60);
	var min1value = min1.toString();
	if (min1 < 10)
	{
	    min1value = '0' + min1.toString();
	}
//	
//	//alert(min1value);
//	
	sec1 = sec1 % 60;		
	sec1 = parseInt(sec1);
	
	var sec1value = sec1.toString();			
	if (sec1 < 10)
	{
	    sec1value = '0' + sec1.toString();
	}
//	//alert(sec1value);
//	
	if(totalSec1>0)
	{
	    //alert('totalSec1>0');
	    if(document.getElementById(timer_Id1.toString()+'_Days') != null)
	    {
	        var curentDays1 = document.getElementById(timer_Id1.toString()+'_Days').innerHTML;
	        if(parseInt(day1value) != parseInt(curentDays1))
	        {   
	            document.getElementById(timer_Id1.toString()+'_Days').innerHTML = day1value;
	        }
	    }
	    if(document.getElementById(timer_Id1.toString()+'_Hours') != null)
	    {
	        var curentHours1 = document.getElementById(timer_Id1.toString()+'_Hours').innerHTML;
	        if(parseInt(hrs1value) != parseInt(curentHours1))
	        {   
	            document.getElementById(timer_Id1.toString()+'_Hours').innerHTML = hrs1value;
	        }
	        
	        //alert('hours done');
	    }
	    if(document.getElementById(timer_Id1.toString()+'_Minutes') != null)
	    {
	        var curentMin1 = document.getElementById(timer_Id1.toString()+'_Minutes').innerHTML;
	        if(parseInt(min1value) != parseInt(curentMin1))
	        {   
	             document.getElementById(timer_Id1.toString()+'_Minutes').innerHTML = min1value;
	        }
	       
	        //alert('minutes done');
	    }
	    if(document.getElementById(timer_Id1.toString()+'_Seconds') != null)
	    {
	        var curentSec1 = document.getElementById(timer_Id1.toString()+'_Seconds').innerHTML;
	        if(parseInt(sec1value) != parseInt(curentSec1))
	        {   
	             document.getElementById(timer_Id1.toString()+'_Seconds').innerHTML = sec1value;
	        }
	        
	        //alert('seconds done');
	    }
	    
	    
	}
	else
	{
	    //alert('reached zero on timer 1');
	    if(document.getElementById(timer_Id1.toString()+'_Days') != null)
	    {
	        if(parseInt(document.getElementById(timer_Id1.toString()+'_Days').innerHTML) != 0)
	        {
	            document.getElementById(timer_Id1.toString()+'_Days').innerHTML = '00';
	        }
	        
	    }
	    if(document.getElementById(timer_Id1.toString()+'_Hours') != null)
	    {
	        if(parseInt(document.getElementById(timer_Id1.toString()+'_Hours').innerHTML) != 0)
	        {
	            document.getElementById(timer_Id1.toString()+'_Hours').innerHTML = '00';
	        }	        
	    }
	    if(document.getElementById(timer_Id1.toString()+'_Minutes') != null)
	    {
	        if(parseInt(document.getElementById(timer_Id1.toString()+'_Minutes').innerHTML) != 0)
	        {
	           document.getElementById(timer_Id1.toString()+'_Minutes').innerHTML = '00';
	        }	        
	    }
	    if(document.getElementById(timer_Id1.toString()+'_Seconds') != null)
	    {
	        if(parseInt(document.getElementById(timer_Id1.toString()+'_Seconds').innerHTML) != 0)
	        {
	            document.getElementById(timer_Id1.toString()+'_Seconds').innerHTML = '00';
	        }	        
	    }
	}
//	//update timer1
//	
		


    totalSec2--;
    if(totalSec2 > 0)
    {
	    var sec2 = totalSec2;		
	    //alert('Hi2');
	    //alert(sec2);
    	
	    var day2 = parseInt(sec2 / 86400);
	    var day2value = day2.toString();
	    if (day2 < 10)
	    {
	        day2value = '0' + day2.toString();
	    }
	    sec2 = sec2 % 86400;
    //	
    //	//alert(day2);
    //	
	    var hrs2 = parseInt(sec2 / 3600);
	    var hrs2value = hrs2.toString();
	    if (hrs2 < 10)
	    {
	        hrs2value = '0' + hrs2.toString();
	    }
	    sec2 = sec2 % 3600;
    //	
    //	//alert(hrs2value);
    //	
	    var min2= parseInt(sec2 / 60);
	    var min2value = min2.toString();
	    if (min2 < 10)
	    {
	        min2value = '0' + min2.toString();
	    }
    	
	    sec2 = sec2 % 60;		
	    sec2 = parseInt(sec2);
    	
	    var sec2value = sec2.toString();			
	    if (sec2 < 10)
	    {
	        sec2value = '0' + sec2.toString();
	    }
	}
	if(totalSec2>0)
	{
	    if(document.getElementById(timer_Id2.toString()+'_Days') != null)
	    {
	        var curentDays2 = document.getElementById(timer_Id2.toString()+'_Days').innerHTML;
	        if(parseInt(day2value) != parseInt(curentDays2))
	        {   
	            document.getElementById(timer_Id2.toString()+'_Days').innerHTML = day2value;
	        }    
	    }
	    if(document.getElementById(timer_Id2.toString()+'_Hours') != null)
	    {
	        var curentHour2 = document.getElementById(timer_Id2.toString()+'_Hours').innerHTML;
	        if(parseInt(hrs2value) != parseInt(curentHour2))
	        {
	            document.getElementById(timer_Id2.toString()+'_Hours').innerHTML = hrs2value;
	        }

	    }
	    if(document.getElementById(timer_Id2.toString()+'_Minutes') != null)
	    {
	        var curentMin2 = document.getElementById(timer_Id2.toString()+'_Minutes').innerHTML;
	        if(parseInt(min2value) != parseInt(curentMin2))
	        {
	            document.getElementById(timer_Id2.toString()+'_Minutes').innerHTML = min2value;
	        }
	        
	    }
	    if(document.getElementById(timer_Id2.toString()+'_Seconds') != null)
	    {
	        var curentSec2 = document.getElementById(timer_Id2.toString()+'_Seconds').innerHTML;
	        if(parseInt(sec2value) != parseInt(curentSec2))
	        {
	            document.getElementById(timer_Id2.toString()+'_Seconds').innerHTML = sec2value;
	        }
	        
	    }
//	    
//	    
	}
	else
	{
	    if(document.getElementById(timer_Id2.toString()+'_Days') != null)
	    {
	        if(parseInt(document.getElementById(timer_Id2.toString()+'_Days').innerHTML) != 0)
	        {
	            document.getElementById(timer_Id2.toString()+'_Days').innerHTML = '00';
	        }
	    }
	    if(document.getElementById(timer_Id2.toString()+'_Hours') != null)
	    {
	        if(parseInt(document.getElementById(timer_Id2.toString()+'_Hours').innerHTML) != 0)
	        {
	            document.getElementById(timer_Id2.toString()+'_Hours').innerHTML = '00';
	        }	        
	    }
	    if(document.getElementById(timer_Id2.toString()+'_Minutes') != null)
	    {
	        if(parseInt(document.getElementById(timer_Id2.toString()+'_Minutes').innerHTML) != 0)
	        {
	            document.getElementById(timer_Id2.toString()+'_Minutes').innerHTML = '00';
	        }	        
	    }
	    if(document.getElementById(timer_Id2.toString()+'_Seconds') != null)
	    {
	        if(parseInt(document.getElementById(timer_Id2.toString()+'_Seconds').innerHTML) != 0)
	        {
	            document.getElementById(timer_Id2.toString()+'_Seconds').innerHTML = '00';
	        }	        
	    }
	}

	if ((totalSec1 == 0) && (totalSec2 == 0))
	{
		stopclock();
	}
					
}














		
function startclock(totalSeconds1,timer_Id1,totalSeconds2,timer_Id2) 
{
    totalSec1 = totalSeconds1;
	totalSec2 = totalSeconds2;
	
	if((totalSec1 > 0) || (totalSec2 > 0))
		timerID = setInterval("showtime('"+timer_Id1.toString()+"','"+timer_Id2.toString()+"')",1000);
	
}

function showtime(timer_Id1,timer_Id2) 
{
        alert('danger');
       
		//calc timer 1
		totalSec1--;
		
		
		if ((totalSec1 == 0) && (totalSec2 == 0))
		{
			stopclock();
		}
		
		var sec1 = totalSec1;		
		
		alert('danger');
		
		var day1 = parseInt(sec1 / 86400);
		sec1 = sec1 % 86400;
		
		//alert(day1);
		
		var hrs1 = parseInt(sec1 / 3600);
		var hrs1value = hrs1.toString();
		if (hrs1 < 10)
		{
		    hrs1value = '0' + hrs1.toString();
		}
		sec1 = sec1 % 3600;
		
		//alert(hrs1 );
		
		var min1= parseInt(sec1 / 60);
		var min1value = min1.toString();
		if (min1 < 10)
		{
		    min1value = '0' + min1.toString();
		}
		
		sec1 = sec1 % 60;		
		sec1 = parseInt(sec1);
		
		var sec1value = sec1.toString();			
		if (sec1 < 10)
		{
		    sec1value = '0' + sec1.toString();
		}
		if(totalSec1>0)
		{
		    if(document.getElementById(timer_Id1.toString()+'_Display') != null)
		    {
		        document.getElementById(timer_Id1.toString()+'_Display').innerHTML = '<b>' + day1.toString() + ':' + hrs1value + ':' + min1value + ':' + sec1value + '</b>'
		    }
		}
		else
		{
		    if(document.getElementById(timer_Id1.toString()+'_Display') != null)
		    {
		        document.getElementById(timer_Id1.toString()+'_Display').innerHTML = '<b>00:00:00:00</b>'
		    }
		}
		//update timer1
		
		
		//calc timer 2
		totalSec2--;
		var sec2 = totalSec2;
		
		var day2 = parseInt(sec2 / 86400);
		sec2 = sec2 % 86400;
		
		var hrs2 = parseInt(sec2 / 3600);
		var hrs2value = hrs2.toString();
		if (hrs2 < 10)
		{
		    hrs2value = '0' + hrs2.toString();
		}
		sec2 = sec2 % 3600;
		
		var min2= parseInt(sec2 / 60);
		
		var min2value = min2.toString();
		if (min2 < 10)
		{
		    min2value = '0' + min2.toString();
		}
		
		sec2 = sec2 % 60;
		
		sec2 = parseInt(sec2);			
		var sec2value = sec2.toString();			
		if (sec2 < 10)
		{
		    sec2value = '0' + sec2.toString();
		}
		if(totalSec2>0)
		{
		    if(document.getElementById(timer_Id2.toString()+'_Display') != null)
		    {
		        document.getElementById(timer_Id2.toString()+'_Display').innerHTML = '<b>'+ day2.toString() + ':' + hrs2value + ':' + min2value + ':' + sec2value + '</b>'
		    }    
		}
		else
		{
		 if(document.getElementById(timer_Id2.toString()+'_Display') != null)
		    {
		        document.getElementById(timer_Id2.toString()+'_Display').innerHTML = '<b>00:00:00:00</b>'
		    }    
		}
		
		if ((totalSec1 == 0) && (totalSec2 == 0))
		{
			stopclock();
		}
				
//		if(totalSec == 0)
//			stopclock();
		
	}
// End -->
		
// Added by rahul New functions to show timers on AllCompetitions.aspx page  26 DEC 2006

function startclockforall(totalSeconds1,timer_Id1,totalSeconds2,timer_Id2,totalSeconds3,timer_Id3,totalSeconds4,timer_Id4,totalSeconds5,timer_Id5,totalSeconds6,timer_Id6,totalSeconds7,timer_Id7,totalSeconds8,timer_Id8,totalSeconds9,timer_Id9,totalSeconds10,timer_Id10,totalSeconds11,timer_Id11,totalSeconds12,timer_Id12,totalSeconds13,timer_Id13,totalSeconds14,timer_Id14,totalSeconds15,timer_Id15,totalSeconds16,timer_Id16,totalSeconds17,timer_Id17,totalSeconds18,timer_Id18) 
{
alert('danger');
    totalSec1 = totalSeconds1;
	totalSec2 = totalSeconds2;
    totalSec3 = totalSeconds3;
	totalSec4 = totalSeconds4;
    totalSec5 = totalSeconds5;
	totalSec6 = totalSeconds6;
    totalSec7 = totalSeconds7;
	totalSec8 = totalSeconds8;
    totalSec9 = totalSeconds9;
	totalSec10 = totalSeconds10;
    totalSec11 = totalSeconds11;
	totalSec12 = totalSeconds12;
    totalSec13 = totalSeconds13;
	totalSec14 = totalSeconds14;
    totalSec15 = totalSeconds15;
	totalSec16 = totalSeconds16;
    totalSec17 = totalSeconds17;
	totalSec18 = totalSeconds18;
	
	if((totalSec1 > 0) || (totalSec2 > 0) || (totalSec3 > 0) || (totalSec4 > 0) || (totalSec5 > 0) || (totalSec6 > 0) || (totalSec7 > 0) || (totalSec8 > 0) || (totalSec9 > 0) || (totalSec10 > 0) || (totalSec11 > 0) || (totalSec12 > 0) || (totalSec13 > 0) || (totalSec14 > 0) || (totalSec15 > 0) || (totalSec16 > 0) || (totalSec17 > 0) || (totalSec18 > 0))
		timerID = setInterval("showtimeforall('"+timer_Id1.toString()+"','"+timer_Id2.toString()+"','"+timer_Id3.toString()+"','"+timer_Id4.toString()+"','"+timer_Id5.toString()+"','"+timer_Id6.toString()+"','"+timer_Id7.toString()+"','"+timer_Id8.toString()+"','"+timer_Id9.toString()+"','"+timer_Id10.toString()+"','"+timer_Id11.toString()+"','"+timer_Id12.toString()+"','"+timer_Id13.toString()+"','"+timer_Id14.toString()+"','"+timer_Id15.toString()+"','"+timer_Id16.toString()+"','"+timer_Id17.toString()+"','"+timer_Id18.toString()+"')",1000);
	
}

function showtimeforall(timer_Id1,timer_Id2,timer_Id3,timer_Id4,timer_Id5,timer_Id6,timer_Id7,timer_Id8,timer_Id9,timer_Id10,timer_Id11,timer_Id12,timer_Id13,timer_Id14,timer_Id15,timer_Id16,timer_Id17,timer_Id18) 
{
alert('danger');
       
		//calc timer 1
		totalSec1--;
		//alert('testing timer');
		
//		if ((totalSec1 == 0) && (totalSec2 == 0))
//		{
//			stopclock();
//		}
		
		var sec1 = totalSec1;		
		
		//alert(sec1);
		
		var day1 = parseInt(sec1 / 86400);
		sec1 = sec1 % 86400;
		
		//alert(day1);
		
		var hrs1 = parseInt(sec1 / 3600);
		var hrs1value = hrs1.toString();
		if (hrs1 < 10)
		{
		    hrs1value = '0' + hrs1.toString();
		}
		sec1 = sec1 % 3600;
		
		//alert(hrs1 );
		
		var min1= parseInt(sec1 / 60);
		var min1value = min1.toString();
		if (min1 < 10)
		{
		    min1value = '0' + min1.toString();
		}
		
		sec1 = sec1 % 60;		
		sec1 = parseInt(sec1);
		
		var sec1value = sec1.toString();			
		if (sec1 < 10)
		{
		    sec1value = '0' + sec1.toString();
		}
		if(totalSec1>0)
		{
		    if(document.getElementById(timer_Id1.toString()+'_Display') != null)
		    {
		        document.getElementById(timer_Id1.toString()+'_Display').innerHTML = '<b>' + day1.toString() + ':' + hrs1value + ':' + min1value + ':' + sec1value + '</b>'
		    }
		}
		else
		{
		    if(document.getElementById(timer_Id1.toString()+'_Display') != null)
		    {
		        document.getElementById(timer_Id1.toString()+'_Display').innerHTML = '<b>00:00:00:00</b>'
		    }
		}
		//update timer1
		
		
		//calc timer 2
		totalSec2--;
		var sec2 = totalSec2;
		
		var day2 = parseInt(sec2 / 86400);
		sec2 = sec2 % 86400;
		
		var hrs2 = parseInt(sec2 / 3600);
		var hrs2value = hrs2.toString();
		if (hrs2 < 10)
		{
		    hrs2value = '0' + hrs2.toString();
		}
		sec2 = sec2 % 3600;
		
		var min2= parseInt(sec2 / 60);
		
		var min2value = min2.toString();
		if (min2 < 10)
		{
		    min2value = '0' + min2.toString();
		}
		
		sec2 = sec2 % 60;
		
		sec2 = parseInt(sec2);			
		var sec2value = sec2.toString();			
		if (sec2 < 10)
		{
		    sec2value = '0' + sec2.toString();
		}
		if(totalSec2>0)
		{
		    if(document.getElementById(timer_Id2.toString()+'_Display') != null)
		    {
		        document.getElementById(timer_Id2.toString()+'_Display').innerHTML = '<b>'+ day2.toString() + ':' + hrs2value + ':' + min2value + ':' + sec2value + '</b>'
		    }    
		}
		else
		{
		 if(document.getElementById(timer_Id2.toString()+'_Display') != null)
		    {
		        document.getElementById(timer_Id2.toString()+'_Display').innerHTML = '<b>00:00:00:00</b>'
		    }    
		}
		
		if ((totalSec1 == 0) && (totalSec2 == 0))
		{
			stopclock();
		}
				
				
		//calc timer 3
		totalSec3--;
		
		
//		if ((totalSec1 == 0) && (totalSec2 == 0))
//		{
//			stopclock();
//		}
		
		var sec3 = totalSec3;		
		
		//alert(sec1);
		
		var day3 = parseInt(sec3 / 86400);
		sec3 = sec3 % 86400;
		
		//alert(day1);
		
		var hrs3 = parseInt(sec3 / 3600);
		var hrs3value = hrs3.toString();
		if (hrs3 < 10)
		{
		    hrs3value = '0' + hrs3.toString();
		}
		sec3 = sec3 % 3600;
		
		//alert(hrs1 );
		
		var min3= parseInt(sec3 / 60);
		var min3value = min3.toString();
		if (min3 < 10)
		{
		    min3value = '0' + min3.toString();
		}
		
		sec3 = sec3 % 60;		
		sec3 = parseInt(sec3);
		
		var sec3value = sec3.toString();			
		if (sec3 < 10)
		{
		    sec3value = '0' + sec3.toString();
		}
		if(totalSec3>0)
		{
		    if(document.getElementById(timer_Id3.toString()+'_Display') != null)
		    {
		        document.getElementById(timer_Id3.toString()+'_Display').innerHTML = '<b>' + day3.toString() + ':' + hrs3value + ':' + min3value + ':' + sec3value + '</b>'
		    }
		}
		else
		{
		    if(document.getElementById(timer_Id3.toString()+'_Display') != null)
		    {
		        document.getElementById(timer_Id3.toString()+'_Display').innerHTML = '<b>00:00:00:00</b>'
		    }
		}
		//update timer3			

			
		//calc timer 4
		totalSec4--;
		
		
		
		var sec4 = totalSec4;		
		
		//alert(sec1);
		
		var day4 = parseInt(sec4 / 86400);
		sec4 = sec4 % 86400;
		
		//alert(day1);
		
		var hrs4 = parseInt(sec4 / 3600);
		var hrs4value = hrs4.toString();
		if (hrs4 < 10)
		{
		    hrs4value = '0' + hrs4.toString();
		}
		sec4 = sec4 % 3600;
		
		//alert(hrs1 );
		
		var min4= parseInt(sec4 / 60);
		var min4value = min4.toString();
		if (min4 < 10)
		{
		    min4value = '0' + min4.toString();
		}
		
		sec4 = sec4 % 60;		
		sec4 = parseInt(sec4);
		
		var sec4value = sec4.toString();			
		if (sec4 < 10)
		{
		    sec4value = '0' + sec4.toString();
		}
		if(totalSec4>0)
		{
		    if(document.getElementById(timer_Id4.toString()+'_Display') != null)
		    {
		        document.getElementById(timer_Id4.toString()+'_Display').innerHTML = '<b>' + day4.toString() + ':' + hrs4value + ':' + min4value + ':' + sec4value + '</b>'
		    }
		}
		else
		{
		    if(document.getElementById(timer_Id4.toString()+'_Display') != null)
		    {
		        document.getElementById(timer_Id4.toString()+'_Display').innerHTML = '<b>00:00:00:00</b>'
		    }
		}
		//update timer4			
			
			
		//calc timer 5
		totalSec5--;
		
		
		
		var sec5 = totalSec5;		
		
		//alert(sec1);
		
		var day5 = parseInt(sec5 / 86400);
		sec5 = sec5 % 86400;
		
		//alert(day1);
		
		var hrs5 = parseInt(sec5 / 3600);
		var hrs5value = hrs5.toString();
		if (hrs5 < 10)
		{
		    hrs5value = '0' + hrs5.toString();
		}
		sec5 = sec5 % 3600;
		
		//alert(hrs1 );
		
		var min5= parseInt(sec5 / 60);
		var min5value = min5.toString();
		if (min5 < 10)
		{
		    min5value = '0' + min5.toString();
		}
		
		sec5 = sec5 % 60;		
		sec5 = parseInt(sec5);
		
		var sec5value = sec5.toString();			
		if (sec5 < 10)
		{
		    sec5value = '0' + sec5.toString();
		}
		if(totalSec5>0)
		{
		    if(document.getElementById(timer_Id5.toString()+'_Display') != null)
		    {
		        document.getElementById(timer_Id5.toString()+'_Display').innerHTML = '<b>' + day5.toString() + ':' + hrs5value + ':' + min5value + ':' + sec5value + '</b>'
		    }
		}
		else
		{
		    if(document.getElementById(timer_Id5.toString()+'_Display') != null)
		    {
		        document.getElementById(timer_Id5.toString()+'_Display').innerHTML = '<b>00:00:00:00</b>'
		    }
		}
		//update timer5					
			
			
		//calc timer 6
		totalSec6--;
		
		
		
		var sec6 = totalSec6;		
		
		//alert(sec1);
		
		var day6 = parseInt(sec6 / 86400);
		sec6 = sec6 % 86400;
		
		//alert(day1);
		
		var hrs6 = parseInt(sec6 / 3600);
		var hrs6value = hrs6.toString();
		if (hrs6 < 10)
		{
		    hrs6value = '0' + hrs6.toString();
		}
		sec6 = sec6 % 3600;
		
		//alert(hrs1 );
		
		var min6= parseInt(sec6 / 60);
		var min6value = min6.toString();
		if (min6 < 10)
		{
		    min6value = '0' + min6.toString();
		}
		
		sec6 = sec6 % 60;		
		sec6 = parseInt(sec6);
		
		var sec6value = sec6.toString();			
		if (sec6 < 10)
		{
		    sec6value = '0' + sec6.toString();
		}
		if(totalSec6>0)
		{
		    if(document.getElementById(timer_Id6.toString()+'_Display') != null)
		    {
		        document.getElementById(timer_Id6.toString()+'_Display').innerHTML = '<b>' + day6.toString() + ':' + hrs6value + ':' + min6value + ':' + sec6value + '</b>'
		    }
		}
		else
		{
		    if(document.getElementById(timer_Id6.toString()+'_Display') != null)
		    {
		        document.getElementById(timer_Id6.toString()+'_Display').innerHTML = '<b>00:00:00:00</b>'
		    }
		}
		//update timer6					
			
			
			
		//calc timer 7
		totalSec7--;
		
		
		
		var sec7 = totalSec7;		
		
		//alert(sec1);
		
		var day7 = parseInt(sec7 / 86400);
		sec7 = sec7 % 86400;
		
		//alert(day1);
		
		var hrs7 = parseInt(sec7 / 3600);
		var hrs7value = hrs7.toString();
		if (hrs7 < 10)
		{
		    hrs7value = '0' + hrs7.toString();
		}
		sec7 = sec7 % 3600;
		
		//alert(hrs1 );
		
		var min7= parseInt(sec7 / 60);
		var min7value = min7.toString();
		if (min7 < 10)
		{
		    min7value = '0' + min7.toString();
		}
		
		sec7 = sec7 % 60;		
		sec7 = parseInt(sec7);
		
		var sec7value = sec7.toString();			
		if (sec7 < 10)
		{
		    sec7value = '0' + sec7.toString();
		}
		if(totalSec7>0)
		{
		    if(document.getElementById(timer_Id7.toString()+'_Display') != null)
		    {
		        document.getElementById(timer_Id7.toString()+'_Display').innerHTML = '<b>' + day7.toString() + ':' + hrs7value + ':' + min7value + ':' + sec7value + '</b>'
		    }
		}
		else
		{
		    if(document.getElementById(timer_Id7.toString()+'_Display') != null)
		    {
		        document.getElementById(timer_Id7.toString()+'_Display').innerHTML = '<b>00:00:00:00</b>'
		    }
		}
		//update timer7					
			
		//calc timer 8
		totalSec8--;
		
		
		
		var sec8 = totalSec8;		
		
		//alert(sec1);
		
		var day8 = parseInt(sec8 / 86400);
		sec8 = sec8 % 86400;
		
		//alert(day1);
		
		var hrs8 = parseInt(sec8 / 3600);
		var hrs8value = hrs8.toString();
		if (hrs8 < 10)
		{
		    hrs8value = '0' + hrs8.toString();
		}
		sec8 = sec8 % 3600;
		
		//alert(hrs1 );
		
		var min8= parseInt(sec8 / 60);
		var min8value = min8.toString();
		if (min8 < 10)
		{
		    min8value = '0' + min8.toString();
		}
		
		sec8 = sec8 % 60;		
		sec8 = parseInt(sec8);
		
		var sec8value = sec8.toString();			
		if (sec8 < 10)
		{
		    sec8value = '0' + sec8.toString();
		}
		if(totalSec8>0)
		{
		    if(document.getElementById(timer_Id8.toString()+'_Display') != null)
		    {
		        document.getElementById(timer_Id8.toString()+'_Display').innerHTML = '<b>' + day8.toString() + ':' + hrs8value + ':' + min8value + ':' + sec8value + '</b>'
		    }
		}
		else
		{
		    if(document.getElementById(timer_Id8.toString()+'_Display') != null)
		    {
		        document.getElementById(timer_Id8.toString()+'_Display').innerHTML = '<b>00:00:00:00</b>'
		    }
		}
		//update timer8			
			
		//calc timer 9
		totalSec9--;
		
		
		
		var sec9 = totalSec9;		
		
		//alert(sec1);
		
		var day9 = parseInt(sec9 / 86400);
		sec9 = sec9 % 86400;
		
		//alert(day1);
		
		var hrs9 = parseInt(sec9 / 3600);
		var hrs9value = hrs9.toString();
		if (hrs9 < 10)
		{
		    hrs9value = '0' + hrs9.toString();
		}
		sec9 = sec9 % 3600;
		
		//alert(hrs1 );
		
		var min9= parseInt(sec9 / 60);
		var min9value = min9.toString();
		if (min9 < 10)
		{
		    min9value = '0' + min9.toString();
		}
		
		sec9 = sec9 % 60;		
		sec9 = parseInt(sec9);
		
		var sec9value = sec9.toString();			
		if (sec9 < 10)
		{
		    sec9value = '0' + sec9.toString();
		}
		if(totalSec9>0)
		{
		    if(document.getElementById(timer_Id9.toString()+'_Display') != null)
		    {
		        document.getElementById(timer_Id9.toString()+'_Display').innerHTML = '<b>' + day9.toString() + ':' + hrs9value + ':' + min9value + ':' + sec9value + '</b>'
		    }
		}
		else
		{
		    if(document.getElementById(timer_Id9.toString()+'_Display') != null)
		    {
		        document.getElementById(timer_Id9.toString()+'_Display').innerHTML = '<b>00:00:00:00</b>'
		    }
		}
		//update timer9			
			
		//calc timer 10
		totalSec10--;
		
		
		
		var sec10 = totalSec10;		
		
		//alert(sec1);
		
		var day10 = parseInt(sec10 / 86400);
		sec10 = sec10 % 86400;
		
		//alert(day1);
		
		var hrs10 = parseInt(sec10 / 3600);
		var hrs10value = hrs10.toString();
		if (hrs10 < 10)
		{
		    hrs10value = '0' + hrs10.toString();
		}
		sec10 = sec10 % 3600;
		
		//alert(hrs1 );
		
		var min10= parseInt(sec10 / 60);
		var min10value = min10.toString();
		if (min10 < 10)
		{
		    min10value = '0' + min10.toString();
		}
		
		sec10 = sec10 % 60;		
		sec10 = parseInt(sec10);
		
		var sec10value = sec10.toString();			
		if (sec10 < 10)
		{
		    sec10value = '0' + sec10.toString();
		}
		if(totalSec10>0)
		{
		    if(document.getElementById(timer_Id10.toString()+'_Display') != null)
		    {
		        document.getElementById(timer_Id10.toString()+'_Display').innerHTML = '<b>' + day10.toString() + ':' + hrs10value + ':' + min10value + ':' + sec10value + '</b>'
		    }
		}
		else
		{
		    if(document.getElementById(timer_Id10.toString()+'_Display') != null)
		    {
		        document.getElementById(timer_Id10.toString()+'_Display').innerHTML = '<b>00:00:00:00</b>'
		    }
		}
		//update timer10			
			

		//calc timer 11
		totalSec11--;
		
		
		
		var sec11 = totalSec11;		
		
		//alert(sec1);
		
		var day11 = parseInt(sec11 / 86400);
		sec11 = sec11 % 86400;
		
		//alert(day1);
		
		var hrs11 = parseInt(sec11 / 3600);
		var hrs11value = hrs11.toString();
		if (hrs11 < 10)
		{
		    hrs11value = '0' + hrs11.toString();
		}
		sec11 = sec11 % 3600;
		
		//alert(hrs1 );
		
		var min11= parseInt(sec11 / 60);
		var min11value = min11.toString();
		if (min11 < 10)
		{
		    min11value = '0' + min11.toString();
		}
		
		sec11 = sec11 % 60;		
		sec11 = parseInt(sec11);
		
		var sec11value = sec11.toString();			
		if (sec11 < 10)
		{
		    sec11value = '0' + sec11.toString();
		}
		if(totalSec11>0)
		{
		    if(document.getElementById(timer_Id11.toString()+'_Display') != null)
		    {
		        document.getElementById(timer_Id11.toString()+'_Display').innerHTML = '<b>' + day11.toString() + ':' + hrs11value + ':' + min11value + ':' + sec11value + '</b>'
		    }
		}
		else
		{
		    if(document.getElementById(timer_Id11.toString()+'_Display') != null)
		    {
		        document.getElementById(timer_Id11.toString()+'_Display').innerHTML = '<b>00:00:00:00</b>'
		    }
		}
		//update timer11			
			
			
		//calc timer 12
		totalSec12--;
		
		
		
		var sec12 = totalSec12;		
		
		//alert(sec1);
		
		var day12 = parseInt(sec12 / 86400);
		sec12 = sec12 % 86400;
		
		//alert(day1);
		
		var hrs12 = parseInt(sec12 / 3600);
		var hrs12value = hrs12.toString();
		if (hrs12 < 10)
		{
		    hrs12value = '0' + hrs12.toString();
		}
		sec12 = sec12 % 3600;
		
		//alert(hrs1 );
		
		var min12= parseInt(sec12 / 60);
		var min12value = min12.toString();
		if (min12 < 10)
		{
		    min12value = '0' + min12.toString();
		}
		
		sec12 = sec12 % 60;		
		sec12 = parseInt(sec12);
		
		var sec12value = sec12.toString();			
		if (sec12 < 10)
		{
		    sec12value = '0' + sec12.toString();
		}
		if(totalSec12>0)
		{
		    if(document.getElementById(timer_Id12.toString()+'_Display') != null)
		    {
		        document.getElementById(timer_Id12.toString()+'_Display').innerHTML = '<b>' + day12.toString() + ':' + hrs12value + ':' + min12value + ':' + sec12value + '</b>'
		    }
		}
		else
		{
		    if(document.getElementById(timer_Id12.toString()+'_Display') != null)
		    {
		        document.getElementById(timer_Id12.toString()+'_Display').innerHTML = '<b>00:00:00:00</b>'
		    }
		}
		//update timer12			
			

		//calc timer 13
		totalSec13--;
		
		
		
		var sec13 = totalSec13;		
		
		//alert(sec1);
		
		var day13 = parseInt(sec13 / 86400);
		sec13 = sec13 % 86400;
		
		//alert(day1);
		
		var hrs13 = parseInt(sec13 / 3600);
		var hrs13value = hrs13.toString();
		if (hrs13 < 10)
		{
		    hrs13value = '0' + hrs13.toString();
		}
		sec13 = sec13 % 3600;
		
		//alert(hrs1 );
		
		var min13= parseInt(sec13 / 60);
		var min13value = min13.toString();
		if (min13 < 10)
		{
		    min13value = '0' + min13.toString();
		}
		
		sec13 = sec13 % 60;		
		sec13 = parseInt(sec13);
		
		var sec13value = sec13.toString();			
		if (sec13 < 10)
		{
		    sec13value = '0' + sec13.toString();
		}
		if(totalSec13>0)
		{
		    if(document.getElementById(timer_Id13.toString()+'_Display') != null)
		    {
		        document.getElementById(timer_Id13.toString()+'_Display').innerHTML = '<b>' + day13.toString() + ':' + hrs13value + ':' + min13value + ':' + sec13value + '</b>'
		    }
		}
		else
		{
		    if(document.getElementById(timer_Id13.toString()+'_Display') != null)
		    {
		        document.getElementById(timer_Id13.toString()+'_Display').innerHTML = '<b>00:00:00:00</b>'
		    }
		}
		//update timer13			
			

		//calc timer 14
		totalSec14--;
		
		
		
		var sec14 = totalSec14;		
		
		//alert(sec1);
		
		var day14 = parseInt(sec14 / 86400);
		sec14 = sec14 % 86400;
		
		//alert(day1);
		
		var hrs14 = parseInt(sec14 / 3600);
		var hrs14value = hrs14.toString();
		if (hrs14 < 10)
		{
		    hrs14value = '0' + hrs14.toString();
		}
		sec14 = sec14 % 3600;
		
		//alert(hrs1 );
		
		var min14= parseInt(sec14 / 60);
		var min14value = min14.toString();
		if (min14 < 10)
		{
		    min14value = '0' + min14.toString();
		}
		
		sec14 = sec14 % 60;		
		sec14 = parseInt(sec14);
		
		var sec14value = sec14.toString();			
		if (sec14 < 10)
		{
		    sec14value = '0' + sec14.toString();
		}
		if(totalSec14>0)
		{
		    if(document.getElementById(timer_Id14.toString()+'_Display') != null)
		    {
		        document.getElementById(timer_Id14.toString()+'_Display').innerHTML = '<b>' + day14.toString() + ':' + hrs14value + ':' + min14value + ':' + sec14value + '</b>'
		    }
		}
		else
		{
		    if(document.getElementById(timer_Id14.toString()+'_Display') != null)
		    {
		        document.getElementById(timer_Id14.toString()+'_Display').innerHTML = '<b>00:00:00:00</b>'
		    }
		}
		//update timer14			
			


		//calc timer 15
		totalSec15--;
		
		
		
		var sec15 = totalSec15;		
		
		//alert(sec1);
		
		var day15 = parseInt(sec15 / 86400);
		sec15 = sec15 % 86400;
		
		//alert(day1);
		
		var hrs15 = parseInt(sec15 / 3600);
		var hrs15value = hrs15.toString();
		if (hrs15 < 10)
		{
		    hrs15value = '0' + hrs15.toString();
		}
		sec15 = sec15 % 3600;
		
		//alert(hrs1 );
		
		var min15= parseInt(sec15 / 60);
		var min15value = min15.toString();
		if (min15 < 10)
		{
		    min15value = '0' + min15.toString();
		}
		
		sec15 = sec15 % 60;		
		sec15 = parseInt(sec15);
		
		var sec15value = sec15.toString();			
		if (sec15 < 10)
		{
		    sec15value = '0' + sec15.toString();
		}
		if(totalSec15>0)
		{
		    if(document.getElementById(timer_Id15.toString()+'_Display') != null)
		    {
		        document.getElementById(timer_Id15.toString()+'_Display').innerHTML = '<b>' + day15.toString() + ':' + hrs15value + ':' + min15value + ':' + sec15value + '</b>'
		    }
		}
		else
		{
		    if(document.getElementById(timer_Id15.toString()+'_Display') != null)
		    {
		        document.getElementById(timer_Id15.toString()+'_Display').innerHTML = '<b>00:00:00:00</b>'
		    }
		}
		//update timer15			
			

		//calc timer 16
		totalSec16--;
		
		
		
		var sec16 = totalSec16;		
		
		//alert(sec1);
		
		var day16 = parseInt(sec16 / 86400);
		sec16 = sec16 % 86400;
		
		//alert(day1);
		
		var hrs16 = parseInt(sec16 / 3600);
		var hrs16value = hrs16.toString();
		if (hrs16 < 10)
		{
		    hrs16value = '0' + hrs16.toString();
		}
		sec16 = sec16 % 3600;
		
		//alert(hrs1 );
		
		var min16= parseInt(sec16 / 60);
		var min16value = min16.toString();
		if (min16 < 10)
		{
		    min16value = '0' + min16.toString();
		}
		
		sec16 = sec16 % 60;		
		sec16 = parseInt(sec16);
		
		var sec16value = sec16.toString();			
		if (sec16 < 10)
		{
		    sec16value = '0' + sec16.toString();
		}
		if(totalSec16>0)
		{
		    if(document.getElementById(timer_Id16.toString()+'_Display') != null)
		    {
		        document.getElementById(timer_Id16.toString()+'_Display').innerHTML = '<b>' + day16.toString() + ':' + hrs16value + ':' + min16value + ':' + sec16value + '</b>'
		    }
		}
		else
		{
		    if(document.getElementById(timer_Id16.toString()+'_Display') != null)
		    {
		        document.getElementById(timer_Id16.toString()+'_Display').innerHTML = '<b>00:00:00:00</b>'
		    }
		}
		//update timer16			
			


		//calc timer 17
		totalSec17--;
		
		
		
		var sec17 = totalSec17;		
		
		//alert(sec1);
		
		var day17 = parseInt(sec17 / 86400);
		sec17 = sec17 % 86400;
		
		//alert(day1);
		
		var hrs17 = parseInt(sec17 / 3600);
		var hrs17value = hrs17.toString();
		if (hrs17 < 10)
		{
		    hrs17value = '0' + hrs17.toString();
		}
		sec17 = sec17 % 3600;
		
		//alert(hrs1 );
		
		var min17= parseInt(sec17 / 60);
		var min17value = min17.toString();
		if (min17 < 10)
		{
		    min17value = '0' + min17.toString();
		}
		
		sec17 = sec17 % 60;		
		sec17 = parseInt(sec17);
		
		var sec17value = sec17.toString();			
		if (sec17 < 10)
		{
		    sec17value = '0' + sec17.toString();
		}
		if(totalSec17>0)
		{
		    if(document.getElementById(timer_Id17.toString()+'_Display') != null)
		    {
		        document.getElementById(timer_Id17.toString()+'_Display').innerHTML = '<b>' + day17.toString() + ':' + hrs17value + ':' + min17value + ':' + sec17value + '</b>'
		    }
		}
		else
		{
		    if(document.getElementById(timer_Id17.toString()+'_Display') != null)
		    {
		        document.getElementById(timer_Id17.toString()+'_Display').innerHTML = '<b>00:00:00:00</b>'
		    }
		}
		//update timer17			
			

		//calc timer 18
		totalSec18--;
		
		
		
		var sec18 = totalSec18;		
		
		//alert(sec1);
		
		var day18 = parseInt(sec18 / 86400);
		sec18 = sec18 % 86400;
		
		//alert(day1);
		
		var hrs18 = parseInt(sec18 / 3600);
		var hrs18value = hrs18.toString();
		if (hrs18 < 10)
		{
		    hrs18value = '0' + hrs18.toString();
		}
		sec18 = sec18 % 3600;
		
		//alert(hrs1 );
		
		var min18= parseInt(sec18 / 60);
		var min18value = min18.toString();
		if (min18 < 10)
		{
		    min18value = '0' + min18.toString();
		}
		
		sec18 = sec18 % 60;		
		sec18 = parseInt(sec18);
		
		var sec18value = sec18.toString();			
		if (sec18 < 10)
		{
		    sec18value = '0' + sec18.toString();
		}
		if(totalSec18>0)
		{
		    if(document.getElementById(timer_Id18.toString()+'_Display') != null)
		    {
		        document.getElementById(timer_Id18.toString()+'_Display').innerHTML = '<b>' + day18.toString() + ':' + hrs18value + ':' + min18value + ':' + sec18value + '</b>'
		    }
		}
		else
		{
		    if(document.getElementById(timer_Id18.toString()+'_Display') != null)
		    {
		        document.getElementById(timer_Id18.toString()+'_Display').innerHTML = '<b>00:00:00:00</b>'
		    }
		}
		//update timer18			
			






			
			
			
			
			
				
//		if(totalSec == 0)
//			stopclock();
		
	}
// End -->
		
			
			
			
			
			
			
			
			

