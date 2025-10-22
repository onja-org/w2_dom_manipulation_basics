# 🌳 Advanced DOM Manipulation Lesson

In this lesson, you’ll learn how JavaScript can efficiently interact with, modify, and optimize the DOM.
Advanced DOM manipulation is key to building fast, interactive web pages that react instantly to user actions without reloading.

### 1️⃣ Working with Multiple Elements

Sometimes you want to select or update many elements at once:

![Select Multiple Elements](/assets/selecting-multiple-elements.png)

Why it’s useful:
You can update multiple parts of the page in one go — for example, highlight all completed tasks or hide inactive sections.


💡 Tip: querySelectorAll() returns a NodeList that can be looped through just like an array.

### 2️⃣ Efficient DOM Updates

Adding elements one by one can slow down your page. Instead, use DocumentFragment:

![DOm Update](/assets/efficient-dom-update.png)


Why it’s useful:
Reduces the number of reflows and repaints, making large DOM updates faster and smoother.

### 3️⃣ Using Templates for Reusable Elements

HTML `<template>` tags allow you to create reusable content blocks:

![Reusable Elements HTML](/assets/reusing-template-html.png)


![Reusable Elements JS](/assets/reusing-template-js.png)


Why it’s useful:
Easily create multiple similar UI elements without duplicating HTML.

### 4️⃣ Dynamic Attributes & Datasets

Use attributes and data-* to store and manage dynamic info:

![Dynamic Attribute](/assets/dynamic-attr.png)


Why it’s useful:
Datasets let you attach hidden information to elements — perfect for IDs, timestamps, or state tracking.


### 5️⃣ Event Delegation

Instead of attaching an event listener to every element, listen on a common parent:

![Event Delegation](/assets/event-delegation.png)


Why it’s useful:
One listener can handle all current and future elements, making your code more efficient and maintainable.


💡 Tip: Always check e.target to know which element was actually clicked.

### 6️⃣ DOM Navigation in Complex Structures

Move around the DOM tree using:

- parentElement → go up

- children → get all direct child elements

- nextElementSibling / previousElementSibling → move sideways

Why it’s useful:
Find and manipulate related elements dynamically — for example, deleting a list item from a button click.

### 7️⃣ Optimizing DOM Manipulation

Tips for faster DOM updates:

- Minimize DOM reads/writes inside loops

- Batch updates using DocumentFragment or requestAnimationFrame

- Cache selectors — don’t call querySelector repeatedly

Why it’s useful:
Improves performance, especially for pages with frequent updates or animations.


### 🧠 Summary of Advanced Concepts

![Summary](/assets/summary.png)