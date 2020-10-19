container = document.querySelector(".container");
wrapper = document.querySelector(".wrapper");
body=document.querySelector("body");
container.onclick = function()
{
	wrapper.classList.toggle("wrapper_color_red");
	body.classList.toggle("wrapper_color_red");
}

function ValidName()
{	
    var itog = false;
	var name = document.getElementById('userName').value;
    if (/^[A-Za-zа-яА-ЯёЁ]+$/i.test(name) == false) 
    {
    	output = "Имя введено не коректно. Используйте только латиницу или кириллицу";
    	
    }
    else
    {
		output = '';
		itog = name;
    }
    document.getElementById('messName').innerHTML = output;
    return itog;  	
}

function ValidPassword()
{	
    var itog = false;
	var password = document.getElementById('userPassword').value;
    if (/^[A-Za-z0-9]+$/i.test(password) == false)
    {
    	output = "Пароль введён не коректно (Qwerty123)";
    	// return 1;
    }
    else
    {
    	itog = password;
   		output = '';
    }
    document.getElementById('messPass').innerHTML = output;
     return itog;
}
function ValidEmail()
{	
    var itog = false;
	var mail = document.getElementById('email').value;
    if (/^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i.test(mail) == false)
    {
    	output = "eMail введён не коректно (example@mail.ru)";
    	   	
    }
    else 
    {   	
    	output = '';
    	itog = mail;
    }
    document.getElementById('messEmail').innerHTML = output;
    return itog;
}

function sendJson()
{
    if (ValidName()!=false & ValidPassword() != false & ValidEmail()!=false)
    {
        var data = JSON.stringify({ "name": ValidName(), "password": ValidPassword(), "email": ValidEmail() });

        var request = new XMLHttpRequest();
        function reqReadyStateChange() 
        {
            if (request.readyState == 4) 
            {
                var status = request.status;
                if (status == 200) 
                {
                    document.getElementById("output").innerHTML=request.responseText;
                }
            }
        }
        // строка с параметрами для отправки
        request.open("GET", "http://localhost:8080/postdata.php?"+data);
        request.onreadystatechange = reqReadyStateChange;
        request.send();
    }
}
