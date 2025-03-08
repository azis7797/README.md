// find area of rectangle
function  area rectangle (length = 5, widht = 3){
    return length * with;
}
console.log ("area of rectangle is:" + area rectangle())
// find diameter of circumference, and area of circle
function circumference (radius = 5){
    let diameter = 2 * radius;
    let circumference = 2 * Math.PI * radius;
    let area = Math.PI * radius * radius;
    return {diameter, circumference, area};
}
let circle = circlePropertis (5);
console. log ("diameter of circle is:" + circle.diameter);
console .log ("circumference of circle is;" + circle.circumference);
//find angles of triangle if two angles are given
function getThirdAngle (angle1 = 80, angle2 = 65){
    return 180 - (angle1 + angle2);
}
console.log ("third angle of triangle is:" + getThirdAngle());
//get difference beetwen dates in days
function getDifferenceInDays (date1 = new Date(2024-03-19), date2 = new Date(2024-03-21)){
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}

console.log ("difference in days:"+ getDifferenceInDays(date1, datte2));
//print your name initials in uppercase
function getInitials (name = "Nur Azis"){} {
    const nameArr = name.split("");
    let initials ="";
    nameArr.forEach((char, idex))=>{
        if (chahr === " "){
            initials += nameArr[index +1].toUpperCase();
        
        }
    }
}
console.log ("initials are*"+ getInitials());
run to output the result
node tugas.js
//output
area of rectangle is:15
diameter of circle is:10
circumference of circle is:31.41592653589793
third angle of triangle is:35
difference in days:2
initials are:NA