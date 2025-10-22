# 📝 Advanced DOM Manipulation Exercise

## Goal

Build an interactive Dynamic Task List App to practice advanced DOM manipulation concepts.

By completing this lab, you will:

- Dynamically add and remove elements

- Use template cloning for reusable UI blocks

- Handle user interactions efficiently with event delegation

- Track metadata with data-* attributes

- Optimize DOM updates

## Lab Challenge

Your task is to create a Dynamic Task List with the following features:

### Add Tasks

- Users should be able to type a task in the input field and click Add Task.

- Each task should be created using the `<template>` in the HTML.

- Optionally store metadata (e.g., ID or timestamp) using data-* attributes.

### Mark Tasks as Completed

- Clicking on a task toggles its completed state.

- Use event delegation on the parent `<ul>` to handle this efficiently, even for dynamically added tasks.

### Delete Tasks

- Each task has a delete button. Clicking it should remove the task from the DOM.

### Clear Completed Tasks

- Clicking Clear Completed removes all tasks that are marked as completed.

- Optional Enhancements (Challenge Yourself)

- Animate tasks when added or removed.

- Apply different styles dynamically for completed tasks.

- Use DocumentFragment when adding multiple tasks at once to optimize DOM updates.


## ⚡ Tips (without giving the solution)

Think about how to clone the template for new tasks.

Consider listening on the `<ul>` parent instead of each task individually.

Use dataset to store information about each task without affecting the HTML.
***Remember:*** creating elements repeatedly can be optimized using DocumentFragment.

## 📚 Files you’ll use

**lab/index.html** → HTML structure with task template

**lab/style.css** → Optional styles

**lab/exercise.js** → Starter JS for your lab

## 💡 Tips: 
- Try the tasks before looking at the solution.

- Use the starter JS (lab/exercise.js) to implement the exercise in your browser.

Happy coding!