var number = [1, 400, 12, 45,6,34,10000]

var i = 0;
var total = 0;

while(i<number.length)
{
  total = total + number[i]
  i++;
}

console.log(`total : ${total}`);
