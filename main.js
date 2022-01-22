name_of_student_array=[];

function submit(){
    var name_1=document.getElementById("name_one").value;
    name_of_student_array.push(name_1);
    console.log(name_of_student_array);
    document.getElementById("display_name").innerHTML=name_of_student_array; 
}

function sorting(){
    name_of_student_array.sort();
    var remove_commas_one=name_of_student_array.join(" ");
    console.log(remove_commas_one);
    document.getElementById("display_name_with_sort").innerHTML=remove_commas_one;
}

function show(){
var remove_commas_two=name_of_student_array.join(" ");
    console.log(remove_commas_two);
    document.getElementById("display_name_without_commas").innerHTML=remove_commas_two;
}

function searching(){
    var search=document.getElementById("s1").value;
    var found=0;
    for(var j=0;j<name_of_student_array.length;j++){
        if(search==name_of_student_array[j]){
            found=found+1;
        }
    }
    document.getElementById("search_list").innerHTML="name found "+found+" times";
}