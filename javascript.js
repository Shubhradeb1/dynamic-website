document.addEventListener("DOMContentLoaded", function () {
    let quotes = 
    [
        "Client-Side Scripting: JavaScript is a client-side scripting language, enabling dynamic content updates and interactivity in web browsers. It allows you to create responsive and interactive user interfaces.",

        "Front-End Frameworks: Many popular front-end frameworks and libraries, such as React, Angular, and Vue.js, are built using JavaScript. Learning JS is foundational for working with these frameworks.",

        "Full-Stack Development: With Node.js, JavaScript can also be used for server-side development. This makes it possible for developers to work on both the client and server sides of applications, making them full-stack developers.",

        "Cross-Platform Development: JavaScript can be used to develop cross-platform mobile applications using frameworks like React Native or Ionic.",

        "JavaScript developers are in high demand in the job market. Proficiency in JavaScript opens up opportunities for roles in web development, full-stack development, and even in emerging technologies like serverless architecture.",

        
    ];






let dynamic = document.getElementById("changeText");
let random = Math.floor(Math.random() * quotes.length);
let newText = quotes[random]; 
dynamic.textContent = newText;
});

