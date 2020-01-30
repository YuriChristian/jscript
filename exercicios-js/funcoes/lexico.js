const val = 'Global'
function a(){
    console.log(val) //'Global'
}

function b(){
    const val = 'jaajh'
    a()//'Global'
    
}
b()
