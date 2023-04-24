
// bài 1
function reverseString() {
    // Lấy giá trị của thẻ input
    var str = document.getElementById("input").value;
    // Tạo biến để lưu chuỗi đã đảo ngược
    var reversedStr = "";
    // Lặp qua từng ký tự trong chuỗi theo thứ tự ngược lại
    for (var i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i]; // Ghi đè ký tự vào biến reversedStr
    }
    // Hiển thị kết quả trong thẻ p có id là "output"
    document.getElementById("output").innerHTML = reversedStr;
  }


  // bài 2

  function capitalize() {
    var str = document.getElementById("str").value; // Lấy giá trị chuỗi từ thẻ input
    var words = str.split(" ");
    for (var i = 0; i < words.length; i++) {
      var firstLetter = words[i][0];
      var restOfWord = words[i].slice(1);
      words[i] = firstLetter.toUpperCase() + restOfWord;
    }
    var capitalizedStr = words.join(" ");
    document.getElementById("result").innerHTML = capitalizedStr; // Đưa kết quả lên trang web
  }

  // bài 3

  function removeDuplicates() {
    var inputArr = document.getElementById("arr").value; // Lấy giá trị chuỗi từ thẻ input
    var arr = inputArr.split(/[ ,]+/); // Chuyển chuỗi thành mảng, dấu phân cách là khoảng trắng hoặc dấu phẩy
    var result = [];
    for (var i = 0; i < arr.length; i++) {
      if (result.indexOf(arr[i]) === -1) {
        result.push(arr[i]);
      }
    }
    document.getElementById("result").innerHTML = "Mảng ban đầu: " + inputArr + "<br>Mảng sau khi xóa các phần tử trùng: " + result.join(", "); // Đưa kết quả lên trang web
  }

  // bài 4

  function sortArray() {
    var inputArr = document.getElementById("arr").value; // Lấy giá trị chuỗi từ thẻ input
    var arr = inputArr.split(/[ ,]+/); // Chuyển chuỗi thành mảng, dấu phân cách là khoảng trắng hoặc dấu phẩy
    for (var i = 1; i < arr.length; i++) {
      var key = parseFloat(arr[i]); // Chuyển giá trị của phần tử thành số và gán vào key
      var j = i - 1;
      while (j >= 0 && parseFloat(arr[j]) > key) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = key;
    }
    document.getElementById("result").innerHTML = "Mảng ban đầu: " + inputArr + "<br>Mảng sau khi sắp xếp: " + arr.join(", "); // Đưa kết quả lên trang web
  }

  // bài 5