alert("dont trust me i'm bad and wicked!")
let choice=confirm("dont trust me i'm bad and wicked!")
let x =prompt("dont trust me i'm bad and wicked!")
if(choice){
    alert(x)
}

function checkifnumber(N) {
    if (typeof N=='number'){
        console.log(N + 'is a number')
    }
    
}



function checkifnumber(wise) {
    if (typeof (wise)=='number') {
        console.log(`${wise} is a number`);
    } else{
        console.log(`${wise} is not a number`)
    }
    
}

checkifnumber(66)
checkifnumber("win")





function healthcodition(heartbeat) {
if (heartbeat<=40) {
    console.log("you are sick");
}
else if (heartbeat<=70) {
    console.log("you are normal");
}
else{
    console.log("you are great");
}
}
healthcodition(99)



function decodeColor( code ) {
    switch( code) {
	case 1:
		console.log( 'Red' );
		break;
	case 2:
		console.log( 'Yellow' );
		break;
	case "x":
		console.log( 'Green' );
		break;
	default:
		console.log( 'Unknown code' );
	}
}

decodeColor(1)




function decodeColor( code ) {
    switch( code) {
	case 1:
		console.log( 'Red' );
		// break;
	case 2:
		console.log( 'Yellow' );
		// break;
	case "x":
		console.log( 'Green' );
		// break;
	default:
		return 'Unknown code'
	}
}

// let mine=decodeColor(1)





function decodeColor( code ) {
    switch( code) {
	case 1:
		console.log( 'Red' );
		return(red)
	case 2:
		console.log( 'Yellow' );
		return(Yellow)
	case "x":
		console.log( 'Green' );
		return(Green)
	default:
		return 'Unknown code'
	}
}

let mine=decodeColor(1)
console.log(mine);



function name(a,b) {
	if (a+b>=100) {
		console.log(true);
	}
	else{
		console.log(false);
	}
}


let num=0
for ( el of object) {
	if (el=== true) {
		num++
	}
}
return num