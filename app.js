var time = 1000*60*10,                  //set change interval [Millisecond]
    fixedName = '青木バズーカ';               //set your fixed name

function changeName(){
    var fs = require('fs');
    fs.readFile('./extensions.csv', 'utf8', function (err, text) {
        var Twitter = require('twitter');
        
        var extensions = text.split(','),
            lng = extensions.length,
            num = Math.floor(Math.random()*lng),
            myname = fixedName + extensions[num];
        
        var client = new Twitter({                              //set yours!
            consumer_key: '',
            consumer_secret: '',
            access_token_key: '',
            access_token_secret: ''
        });
        
        client.post('account/update_profile', {name: myname},  function(error, tweet, response){
            if(error) throw error;
            console.log('changed to "'+myname+'" .');
        });
    });
}

setInterval(changeName, time);