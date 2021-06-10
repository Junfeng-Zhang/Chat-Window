const popup = document.querySelector('.chat-popup'); // 获取整个聊天显示区
const chatBtn = document.querySelector('.chat-btn'); // 获取聊天按钮
const submitBtn = document.querySelector('.submit'); // 获取发送信息按钮
const chatArea = document.querySelector('.chat-area'); // 获取聊天内容显示区
const inputEle = document.querySelector('input'); // 获取输入框
const emojiBtn = document.getElementById("emoji-btn"); // 获取表情按钮
const picker = new EmojiButton(); // 获取表情符号的筛选


// 表情符选择
window.addEventListener('DOMContentLoaded', () => {

    picker.on('emoji', emoji => {
        document.querySelector('input').value += emoji;
    });

    emojiBtn.addEventListener('click', () => {
        picker.togglePicker(emojiBtn);
    });
});

// 聊天按钮切换显示栏
chatBtn.addEventListener('click', () => {
    popup.classList.toggle('show',);
})

// 发送功能
submitBtn.addEventListener('click', ()=> {
    let userInput = inputEle.value;
    // console.log(userInput);  在控制台测试 用户是否能实现发送功能

    // 声明自己的输入
    let temp = `<div class="out-msg">
    <span class="my-msg">${userInput}</span>
    <img src="images/spider.jpg" class="avatar">
    </div>`;

    chatArea.insertAdjacentHTML("beforeend", temp); // 自己的输入内容是显示在下面
    inputEle.value = ''; // 信息发送完毕之后，输入框的内容清空
});