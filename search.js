// Mergesort + Quicksort

function binarySearch(arr, num) {
   
   var begin = 0,
       end = arr.length-1;
   
   while ( begin <= end ) {
      
      mid = Math.round((begin + end) / 2);
      
      if (arr[mid] < num) {
         begin = mid + 1;
      }
      
      else if ( arr[mid] == num ) {
         return mid;
      } else {
         end = mid - 1;        
      }
   }
   return -1;   
}


function shiftArrSearch(shiftArr, num) {
   
   var arr = [];
   var originalFirst = getOrigFirst(shiftArr);
   
   if ( num >= shiftArr[0] ) {
      
      arr = shiftArr.slice(0, originalFirst-1);
      
      return binarySearch(arr,num);
      
   }
   else {
      var n = shiftArr.length;
      arr = shiftArr.slice(originalFirst-1, n-1);
      return binarySearch(arr, num);
   }
   
}

function getOrigFirst(arr) {
   var begin = 0;
   var end = arr.length;
   
   while (begin <= end) {
      mid = Math.round((begin+end)/2);
      if (mid == 0 || (arr[mid] < arr[mid-1]) ) {
         return mid;
      }
      if( arr[mid] > arr[0]) { 
         begin = mid + 1
      }
      else {
         end = mid -1;
      }
   }
   
   return 0;
}

// O(log n);

// http://bigocheatsheet.com/

// log(16) = 4
// binarySearch([9, 12, 17, 2, 4, 5], 5);

// pallindrome
function pallindrome(string) { 
   var reverseString = '';
   for (var i= string.length -1; i >= 0; i--) {
      reverseString += string[i];
   }
   console.log(reverseString);

   if (string == reverseString)
      return true; 
   else
      return false;
}
