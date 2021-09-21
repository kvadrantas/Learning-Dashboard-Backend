//*************************************
// VAR IS FUNCTION SCOPED NOT GLOBAL SCOPED - declared in function it will not be seen in main scope
// meanwhile var declared in block will be seen in main
// let and const is block scoped
// var is not block socped
//*************************************
function test() {
    var bbb = 3;
    let bbb1 = 4
   if (2 > 1) {
    var aaa = 5;
    let aaa1 = 6
    // b = 2;
    console.log('IFO VIDUJE', bbb, aaa, bbb1, aaa1);
} 
    console.log('FUNKCIJOS VIDUJE', bbb)
    // console.log('FUNKCIJOS VIDUJE', bbb, aaa, bbb1, aaa1);       //aaa1 is not defined
}
test();
// console.log('UZ FUNKCIJOS', bbb, aaa);       //bbb is not defined


// ---------------------
{
    var ccc = 3;
    const ddd = 9;
    function test2() {

    }
}
console.log(ccc);
console.log(test2());
// console.log(ddd);        //ddd is not defined
