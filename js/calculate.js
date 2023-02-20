document.getElementById('blog').addEventListener('click',function(){
    window.location.href = "blog.txt"
})

document.getElementById('btn-triangle').addEventListener('click',function(){
    const w = getInputFieldValueById('triangle-w');
    console.log(w);
    const l = getInputFieldValueById('triangle-l');
    const triangle ='1 Triangle ' + 0.5 * w * l;
    
    setTextElementValueById('area-calculate',triangle);
    
})

document.getElementById('btn-rectangle').addEventListener('click',function(){
    const w = getInputFieldValueById('rectangle-w');
    const l = getInputFieldValueById('rectangle-l');
    const rectangle = '2 Rectangle ' + w * l;
    setTextElementValueById('area-calculate',rectangle);
    
})


document.getElementById('btn-parallelogram').addEventListener('click',function(){
    const b = getInputFieldValueById('parallelogram-b');
    const h = getInputFieldValueById('parallelogram-h');
    const parallelogram = '3 Parallelogram ' + b * h;
    setTextElementValueById('area-calculate',parallelogram);
    
})

document.getElementById('btn-rhombus').addEventListener('click',function(){
    const d1 = getInputFieldValueById('rhombus-d1');
    const d2 = getInputFieldValueById('rhombus-d2');
    const rhombus = '4 Rhombus ' + d1 * d2;
    setTextElementValueById('area-calculate',rhombus);
    
})

document.getElementById('btn-pentagon').addEventListener('click',function(){
    const p = getInputFieldValueById('pentagon-p');
    const b = getInputFieldValueById('pentagon-b');
    const pentagon = '5 Pentagon ' + 0.5*p * b;
    setTextElementValueById('area-calculate',pentagon);
    
})

document.getElementById('btn-ellipse').addEventListener('click',function(){
    const a = getInputFieldValueById('ellipse-a');
    const b = getInputFieldValueById('ellipse-b');
    const ellipse = '6 Ellipse ' + 3.1416*a * b;
    setTextElementValueById('area-calculate',ellipse);
    
})