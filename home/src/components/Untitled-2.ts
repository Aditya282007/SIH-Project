interface MyCustomObj{
    a: number
    b: number
}
function add(obj: MyCustomObj){
    return obj.a + obj.b
}

const r = add({
    a: 1,
    b: 2
});
console.log(r);
