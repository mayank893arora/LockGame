$(document).ready(function()
{
    var ourSecretNumber;
    $('input[type="number"]').css({
        color:'white',
        fontSize:'3em',
        width:'60px',
        border:'1px solid black',
        backgroundColor:'black',
        textAlign:'center'
    })
$('button').click(openLock);
function openLock()
{
    
    var win=0;
console.log(ourSecretNumber);
    for (let index = 0; index <3; index++) {
        var guessno=$('input[type="number"]').eq(index);
        var result=checkNumber(guessno.val(),ourSecretNumber[index]);
        guessno.css({backgroundColor: result.backgrd});
        if(result.chcker)
        {
            win++;
        }
    }
   
    if(win===3)
    {
        $('#start').show();
        $('.message').html('You got it<br>'+ourSecretNumber);
    }
    
}

function checkNumber(a,b)
{
    var response={};
    if(a>b){
        response.chcker=false;
        response.backgrd='red';
    }
    if(b>a){
        response.chcker=false;
        response.backgrd='blue';
    }
    if(a==b)
    {
        response.chcker=true;
        response.backgrd='green'
    }
    return response;
}

    $('#output').hide();
    $('#start').click(startGame);
    function startGame()
    {
        ourSecretNumber=Math.floor(Math.random()*(999-100+1)+100).toString();
        $('#start').hide();
        $('#output').show();
        for (let index = 0; index < ('input[type="number"]').length; index++) {
            $('input[type="number"]').eq(index).val('5');  
        }
        $('.message').html('Red Background guess is low : Blue background Guess is high');
    }
    $('.btn').css({
        backgroundColor:'black',
        color:'white',
        width:'160px',
        fontSize:'1.5em',
        padding:'15px',
        margin:'25px auto 0px',
        border:'1px solid black',
        textAlign:'center'
    })
    $('#output').css({
        backgroundColor:'#333',
        width:'300px',
        padding:'15px',
        border:'1px solid black',
        textAlign:'center'
    })
    $('.btn-p').css({
        backgroundColor:'black',
        fontSize:'1.5em',
        color:'white',
        width:'300px',
        padding:'15px',
        border:'1px solid black',
        textAlign:'center'
    })
    
    $('.message').css({
        backgroundColor:'black',
        color:'white',
        width:'300px',
        padding:'15px',
        border:'1px solid black',
        textAlign:'center'
    })

    

})