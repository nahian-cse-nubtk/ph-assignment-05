**Some Question and Answer**

**Q-1:**

**What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?**

**Answer:**

The main difference are getElementById is used when we want a single element by the unique id of it, but getElementByClassName returns all elements with the given class in a live collection that updates if the DOM changes. On the other hand, querySelector and querySelectorAll are more usefull because they accept any valid CSS selector. querySelector gives us only the first matching element. But the querySelectorAll returns all the mathches in a static list that does not update automatically.

**Q-2:**

**How do you create and insert a new element into the DOM?**

**Answer:**

The process of creating and insertion a new element into the DOM is  below;

Create and adding process:

1.Firstly, we have to create an element like :

const div = document.createElement(“div”);

2.Secondly, we have to add contents or attributes into it, like:

div. textContent = “ crating DOM element”;

div.setAttribute(“card-container”);

Process of insert an element into the DOM:

To insert an element into the DOM we can use some method. The method and their works are below.

1.parent.appendChild(div);  this method is used to add element at the end.

2.parent.prepend(div); this method is used to add element at the begging.

3.parent.insertBefore(div, referenceNode); this method is used to add element before another element.

4.parent.append(div); this method is used to add multiple elements. That is used in the present time.

**Q-3:**

**What is Event Bubbling and how does it work?**

**Answer:**

Event bubbling in JavaScript is a mechanism where an event triggered on a child element propagates upward through its ancestors in the DOM. It allows parent element to respond to events triggered by their child elements.

How it works:

1.An event that occurs on the innermost element(the target element).

2.The event triggers handlers on that element first.

3.Then, it bubbles up to its parent elements, triggering any handlers on them.

4.This process continues up the DOM tree until it reaches the <html> element.

5.Bubbling can be stopped by using the method: event.stopPropagation();

**Q-4:**

**What is Event Delegation in JavaScript? Why is it useful?**

**Answer:**

Event delegation is a technique in JavaScript where a single event listener is attached to a parent element instead of attaching event listeners to multiple child elements. When an event occurs on a child element, the event bubbles up the DOM tree, and the parent element's event listener handles the event based on the target element.

This is useful for the following reasons:

**Improved performance:** Attaching a single event listener is more efficient than attaching multiple event listeners to individual elements, especially for large or dynamic lists. This reduces memory usage and improves overall performance.

**Simplified event handling:** With event delegation, you only need to write the event handling logic once in the parent element's event listener. This makes the code more maintainable and easier to update.

**Dynamic element support:** Event delegation automatically handles events for dynamically added or removed elements within the parent element. There's no need to manually attach or remove event listeners when the DOM structure changes

**Q-5:**

**What is the difference between preventDefault() and stopPropagation() methods?**

**Answer:**

Difference between preventDefault() vs stopPropagation() Methods:

Key differences are identified below;

preventDefault() Method:

1.Prevent the default action of browsers taking on that event.

2.It is a method present in the Event interface.

3.Its syntax is : event.preventDefault();

4.This method does not take any parameters

5.It does not return value

6.Its uses the DOM version of DOM Level 3 Events

stopPropagation() Method:

1.Prevent further propagation of current events by parent or child elements.

2.This method is also present in the Event interface.

3.Its syntax is : event.stopPropagation();

4.This method also does not take any arguments in its definition

5.It does not have any return type

6.Its uses the DOM version of DOM Level 2 Events
