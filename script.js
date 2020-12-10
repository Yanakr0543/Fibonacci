n = prompt("Enter n", 10);
var F = [0, 1];
if (n<=2) {
    array = F.splice(0, n);
}
else { 
  for (i = 0; i < n - 2; i++) {
   F.push(F[F.length - 1] + F[F.length - 2]); 
}
 var array = F;}
document.write(array);
console.log(n, array);