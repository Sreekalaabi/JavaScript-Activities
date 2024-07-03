let array=["Dairy Milk","Kit Kat","Alpenliebe","Milky bar","Candyman","Munch","Perk","Kinder joy","Poppins"]
document.getElementById('fvr').textContent="My favorite candy is :"+ (array[1]);

array.push("Kopiko")
document.getElementById('add').textContent="The new array is: "+ (array);

array.pop()
document.getElementById('pop').textContent="The new array after pop an element: "+ (array);

delete array[0]
array.splice(0,1)
document.getElementById('delete').textContent="The new array after delete is: "+ (array);

let a=array.shift()
document.getElementById('shift').textContent="The new array after shift is: "+ (array);

let newArray=array.slice(3,6)
document.getElementById('slice').textContent="The new array after slice is:"+(newArray);

let isPresent = array.includes("Galaxy");
document.getElementById('includes').textContent="The array includes Galaxy is:"+(isPresent);

let sortedArray= array.sort()
document.getElementById('sort').textContent="The sorted array:"+(sortedArray);

let reverseArray= array.reverse();
document.getElementById('reverse').textContent="The reverse array:"+(reverseArray);
