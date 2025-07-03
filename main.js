/*
 * @Author: rain l0802_69@qq.com
 * @Date: 2025-07-03 15:31:13
 * @LastEditors: rain l0802_69@qq.com
 * @LastEditTime: 2025-07-03 15:55:44
 * @FilePath: /WEB-Front/ex1/scripts/main.js
 * @Description: 这是默认设置,请设置customMade, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
*/
const myHeading = document.querySelector("h1");
const myButton = document.querySelector("button");
const myImage = document.querySelector("img");

// 1. 图片点击切换
myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "imgs/1120.jpeg") {
    myImage.setAttribute("src", "imgs/20190320122144_vljsr.jpg");
  } else {
    myImage.setAttribute("src", "imgs/1120.jpeg");
  }
};

// 2. 设置用户名函数
function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName(); // 如果用户取消或留空，重新提示
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `You're cool, ${myName}`;
  }
}

// 3. 页面加载时检查是否已存储用户名
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

// 4. 点击按钮重新设置用户名
myButton.onclick = function () {
  setUserName();
};



// document.querySelector("html").addEventListener("click", function () {
//   alert("别戳我，我怕疼！");
// });