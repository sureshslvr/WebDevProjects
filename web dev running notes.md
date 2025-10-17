====================================
        HTML
====================================
# Basic Web Development Notes:

## 1. Tools for Coding
- **VS Code Extensions:**
  - **Live Server:** Shows your webpage updates instantly when you save.
  - **Prettier:** Automatically arranges your code to look neat and easy to read.

## 2. HTML Structure Basics
- Every HTML page starts with `<!DOCTYPE html>` which tells the browser to expect an HTML5 document.
- An HTML document mainly contains **two parts**:
  - `<head>`: Hidden part for metadata, like page title and SEO info.
  - `<body>`: The visible part shown on the website.
- To quickly create a basic webpage in VS Code, type `!` or `html:5` and press Enter.

## 3. What Are Tags?
- Think of tags as special labels in **angled brackets `< >`** used to tell the browser how to display content.
- Tags usually come in pairs:
  - **Opening tag**: `<tagname>`
  - **Closing tag**: `</tagname>`
- Some tags are **self-closing**, meaning they don’t need a closing tag, like `<br>`, `<hr>`, and `<img>`.

## 4. Important Tags to Know
- **Headings:** `<h1>` to `<h6>`
  - `<h1>` is the biggest heading; `<h6>` is the smallest.
- **Paragraph:** `<p>` wraps blocks of text.
- **Text Style:**
  - `<b>` makes text bold.
  - `<i>` makes text italic.
- **Special Formatting:**
  - `<sup>` for superscript (e.g., 2<sup>2</sup> means 2 squared).
  - `<sub>` for subscript (e.g., H<sub>2</sub>O).
- **Line Break:** `<br>` starts a new line without adding extra space like paragraphs.
- **Horizontal Line:** `<hr>` draws a dividing line.

## 5. Lists
- **Ordered List (`<ol>`):** Numbered list — each item inside `<li>`.
- **Unordered List (`<ul>`):** Bulleted list — each item inside `<li>`.

## 6. Metadata and SEO in `<head>`
- `<meta>` tags provide information such as page description and keywords to help search engines understand your page.
- The `<title>` tag sets the page’s name shown on the browser tab.

## 7. Learning Resources
- For detailed info, examples, and exploring new HTML tags, use [MDN Web Docs](https://developer.mozilla.org).

***


========================================================================
day 4...........

## **1. Image Tag**

* `<img>` is a **self-closing tag**.
* Attributes:

  * `src` → path to the image file
  * `alt` → alternate text shown if the image is not found

```html
<img src="image.jpg" alt="Description of image">
```

---

## **2. Anchor Tag (`<a>`)**

* Used to **link to webpages, sections, or internal pages**.
* Attributes:

  * `href` → URL or section id
  * `target="_blank"` → opens link in a new tab

```html
<a href="https://www.facebook.com" target="_blank">Facebook</a>
<a href="#section1">Go to Section</a>
<p id="section1"></p>
```

---

## **3. Block vs Inline Elements**

| Type   | Behavior                                  | Examples                                                |
| ------ | ----------------------------------------- | ------------------------------------------------------- |
| Block  | Takes full width, starts on a new line    | `<div>`, `<p>`, `<h1>`–`<h6>`, `<section>`, `<article>` |
| Inline | Takes width as needed, stays in same line | `<span>`, `<a>`, `<img>`, `<input>`                     |

> **Tip:** Inline-block elements behave like inline but allow width & height (e.g., `<button>`, `<img>`).

---

## **4. Semantic Tags**

* Provide meaning to content for **readability and SEO**.
* Examples: `<header>`, `<footer>`, `<section>`, `<main>`, `<aside>`, `<nav>`

---

## **5. Special Characters**

* Use HTML entities to display special characters.

```html
<p>&copy; 2025 Your Name</p>
<p>&reg; Registered Trademark</p>
<p>&hearts; Heart symbol</p>
```

---

## **6. Tables**

* Structure tabular data.

```html
<table>
  <caption>Employee Details</caption>
  <tr>
    <th>Name</th>
    <th>Age</th>
    <th>Department</th>
  </tr>
  <tr>
    <td>John</td>
    <td>25</td>
    <td>Marketing</td>
  </tr>
  <tr>
    <td>Mary</td>
    <td colspan="2">HR & Admin</td>
  </tr>
</table>
```

* `<caption>` → table title
* `<tr>` → table row
* `<th>` → table header
* `<td>` → table data
* `colspan` → merge multiple columns

---
============================================================
day 5..........

## **7. Forms (`<form>`)**

* Used to **collect data from users**.
* Attributes:

  * `action` → URL or page where form submits
  * `method` → GET, POST, DELETE, UPDATE

```html
<form action="submit.php" method="post">
  <input type="text" placeholder="Username">
  <input type="password" placeholder="Password">
  <input type="radio" name="gender" value="male"> Male
  <input type="radio" name="gender" value="female"> Female
  <input type="checkbox" name="agree"> I agree
  <input type="file" accept="image/*">
  <button type="submit">Submit</button>
</form>
```

---

## **8. Input Types**

| Type     | Purpose                                      |
| -------- | -------------------------------------------- |
| text     | Free text input                              |
| password | Hidden input                                 |
| radio    | Select one option (same `name` for group)    |
| checkbox | Select multiple options                      |
| file     | Upload files (`accept="image/*"` for images) |
| email    | Email input                                  |
| number   | Numeric input                                |
| date     | Date picker                                  |
| color    | Color picker                                 |
| url      | Web address                                  |
| tel      | Telephone number                             |
| range    | Slider control                               |

* **Label tag:** Use `<label for="id">` for accessibility

```html
<label for="username">Username:</label>
<input type="text" id="username">
```

---

## **9. Div Tag (`<div>`)**

* Used to **group elements** and structure content.
* Commonly used with forms and layout sections.

---

## **10. Media Tags**

* **Video Tag**

```html
<video width="400" controls>
  <source src="video.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
```

* **Audio Tag**

```html
<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  Your browser does not support the audio tag.
</audio>
```

* Attributes: `controls`, `autoplay`, `loop`, `muted`

---

# 🧩 **Remaining HTML Topics (Day 5 - Advanced Basics)**

---

## **1. `<textarea>` – Multi-line Input Field**

Used when users need to enter **long text** such as comments, descriptions, or messages.

### Example:

```html
<form>
  <label for="message">Your Message:</label><br>
  <textarea id="message" name="message" rows="4" cols="50" placeholder="Type your message here..."></textarea>
</form>
```

### Key Points:

* Supports **multiple lines** of text.
* Attributes:

  * `rows` → number of visible text lines.
  * `cols` → width of the textarea.
  * `placeholder` → hint text.
  * You can also make it **non-resizable** using CSS (`resize: none;`).

---

## **2. `<select>` and `<option>` – Dropdown List**

Used to create a **drop-down menu** where users can choose one (or multiple) options.

### Example:

```html
<form>
  <label for="country">Select Country:</label>
  <select id="country" name="country">
    <option value="india">India</option>
    <option value="usa">USA</option>
    <option value="uk">UK</option>
    <option value="australia">Australia</option>
  </select>
</form>
```

### Key Points:

* Each `<option>` inside `<select>` represents one item.
* To allow **multiple selections**, add `multiple`:

  ```html
  <select multiple>
  ```
* Use `selected` attribute to set default value.

---

## **3. `<fieldset>` and `<legend>` – Group Related Form Fields**

Used to **group related inputs together** for better organization and readability.

### Example:

```html
<form>
  <fieldset>
    <legend>Personal Information</legend>
    <label for="name">Name:</label>
    <input type="text" id="name"><br><br>
    <label for="email">Email:</label>
    <input type="email" id="email">
  </fieldset>
</form>
```

### Key Points:

* `<fieldset>` draws a box around related form elements.
* `<legend>` acts as a **title** or **label** for that group.

---

## **4. `<datalist>` – Input Suggestions**

Used to **provide predefined suggestions** to an `<input>` field while still allowing free text input.

### Example:

```html
<form>
  <label for="browser">Choose your browser:</label>
  <input list="browsers" id="browser" name="browser">
  <datalist id="browsers">
    <option value="Chrome">
    <option value="Firefox">
    <option value="Edge">
    <option value="Safari">
    <option value="Opera">
  </datalist>
</form>
```

### Key Points:

* Works with `<input list="id">`
* User can either **type freely** or **choose from list**.
* Helpful for **search boxes or quick forms**.

---

## **5. `<iframe>` – Embed External Webpages**

Used to **embed another webpage or content** (like YouTube videos, maps, etc.) inside your page.

### Example:

```html
<iframe src="https://www.example.com" width="400" height="300" title="Example Website"></iframe>
```

### Key Points:

* Common uses: embedding **YouTube videos**, **Google Maps**, or **external tools**.
* Important attributes:

  * `src` → source URL
  * `width`, `height` → size
  * `title` → accessibility
  * `frameborder="0"` → remove border
  * `allowfullscreen` → for videos

---

## **6. Form Validation Attributes**

These attributes ensure users **enter valid data** before submitting a form.

| Attribute     | Description              | Example                                      |
| ------------- | ------------------------ | -------------------------------------------- |
| `required`    | Field must be filled     | `<input type="text" required>`               |
| `maxlength`   | Limit characters         | `<input type="text" maxlength="10">`         |
| `pattern`     | Accepts regex patterns   | `<input type="text" pattern="[A-Za-z]{3,}">` |
| `readonly`    | Visible but not editable | `<input type="text" value="Fixed" readonly>` |
| `disabled`    | Grayed out and skipped   | `<input type="text" disabled>`               |
| `min` / `max` | Numeric range limits     | `<input type="number" min="1" max="100">`    |

> 💡 **Tip:** Browser automatically validates `email`, `url`, `number`, etc. based on input type.

---

## **7. HTML5 Semantic Elements for Multimedia**

Helps describe **media content** meaningfully — improves **SEO and accessibility**.

### Example:

```html
<figure>
  <img src="nature.jpg" alt="Beautiful Nature">
  <figcaption>Fig 1: A scenic mountain view at sunrise.</figcaption>
</figure>
```

### Key Points:

* `<figure>` wraps an image, chart, video, etc.
* `<figcaption>` adds a caption or description.
* Keeps images and captions **semantically linked**.

---

====================================
        CSS
====================================
---
css day1
---

## **1. What is CSS?**

CSS (Cascading Style Sheets) is used to **add colors, layout, and styling** to your HTML skeleton — it controls how the webpage looks and feels.

### 💡 Example:

```css
h1 {
  color: red;
  background-color: yellow;
}
```

---

## **2. CSS Syntax**

Each CSS rule follows this structure:

```css
selector {
  property: value;
}
```

### Example:

```css
p {
  font-size: 16px;
  color: blue;
}
```

✅ **Selector** → targets which HTML element to style
✅ **Property** → defines what to change
✅ **Value** → defines how to change it

---

## **3. How to Add CSS to a Webpage**

There are **3 types of CSS**:

### 🟢 1. Inline CSS

CSS is written **directly inside the HTML tag** using the `style` attribute.

```html
<h1 style="color: red; background-color: yellow;">Inline CSS Example</h1>
```

🔸 Used for **quick fixes**
🔸 ❌ Not recommended for large projects

---

### 🟣 2. Internal CSS

CSS is written **inside the `<style>` tag** within the `<head>` section of the HTML file.

```html
<head>
  <style>
    h1 {
      color: blue;
      background-color: lightgray;
    }
  </style>
</head>
```

🔸 Useful for **small webpages or testing**
🔸 Affects only that single HTML file

---

### 🔵 3. External CSS

CSS is written in a **separate `.css` file** and linked to the HTML file using `<link>` tag in `<head>`.

```html
<link rel="stylesheet" href="style.css">
```

```css
/* style.css */
h1 {
  color: green;
  background-color: beige;
}
```

✅ **Best Practice** → Used in **real-world projects** for better structure and reusability.

---

## **4. Types of CSS Selectors**

Selectors decide **which HTML element(s)** will be styled.

### 🔹 1. Universal Selector

Applies styles to **all elements** on the page.

```css
* {
  font-family: Arial, sans-serif;
  color: darkgray;
}
```

---

### 🔹 2. Element Selector

Targets a **specific HTML tag**.

```css
h1 {
  color: red;
}
p {
  font-size: 18px;
}
```

---

### 🔹 3. Class Selector

Used to style **multiple elements** that share the same class.

```html
<h1 class="title">Welcome</h1>
<p class="title">This is CSS Class Example</p>
```

```css
.title {
  color: blue;
  text-align: center;
}
```

🔸 Prefix class selectors with a **dot (.)**
🔸 A class **can be reused** multiple times

---

### 🔹 4. ID Selector

Used to style a **unique element** with a specific `id`.

```html
<h1 id="main-heading">Hello World</h1>
```

```css
#main-heading {
  color: purple;
  background-color: lightblue;
}
```

🔸 Prefix id selectors with a **hash (#)**
🔸 **ID must be unique** — used for one specific element

---

## **5. Selector Priority (Specificity Order)**

When multiple selectors target the same element, the **priority order** decides which style applies.

| Priority   | Selector Type      | Example          | Symbol |
| ---------- | ------------------ | ---------------- | ------ |
| 🥇 Highest | ID Selector        | `#idname`        | `#`    |
| 🥈 Second  | Class Selector     | `.classname`     | `.`    |
| 🥉 Third   | Element Selector   | `p`, `h1`, `div` | —      |
| 🏅 Lowest  | Universal Selector | `*`              | `*`    |

### Example:

```css
* { color: blue; }
h1 { color: green; }
.nani { color: orange; }
#name { color: red; }
```

Result → If all apply to one element, **red** (ID selector) wins.

---

## **6. Linking External CSS**

To connect your external CSS file to your HTML:

```html
<link rel="stylesheet" href="style.css">
```

✅ Place inside `<head>`
✅ File extension must be `.css`

---

## **7. CSS Naming Tip**

When naming classes and IDs, use **meaningful names**:

* ✅ `.header`, `.main-content`, `.footer`
* ❌ `.box1`, `.div2`, `.xyz`

---
# 🎨 **CSS Day 2 – Text Styling & Colors**
---

## 💻 **1. Introduction**

In today’s session, we focused on **text styling properties** and **color representations** in CSS.
These properties help improve the readability, design, and visual hierarchy of a webpage.

---

## ✍️ **2. Text Styling Properties**

| **Property**      | **Description**                                            | **Example**                           |
| ----------------- | ---------------------------------------------------------- | ------------------------------------- |
| `font-family`     | Defines the type of font or typography.                    | `font-family: 'Poppins', sans-serif;` |
| `font-style`      | Defines the font style – *normal*, *italic*, or *oblique*. | `font-style: italic;`                 |
| `font-weight`     | Controls how bold or light the text appears.               | `font-weight: bold;`                  |
| `line-height`     | Adjusts the vertical spacing between lines of text.        | `line-height: 1.5;`                   |
| `letter-spacing`  | Sets the space between each character.                     | `letter-spacing: 2px;`                |
| `text-align`      | Aligns the text inside its container.                      | `text-align: center;`                 |
| `text-transform`  | Controls the capitalization of text.                       | `text-transform: uppercase;`          |
| `text-decoration` | Adds decorative lines to text.                             | `text-decoration: underline;`         |
| `text-shadow`     | Adds shadow effects to text.                               | `text-shadow: 2px 2px 5px gray;`      |

---

## 🌈 **3. Color Representation in CSS**

CSS allows you to add colors in multiple formats to suit different needs and design systems.

| **Format**       | **Example**                    | **Description**                                    |
| ---------------- | ------------------------------ | -------------------------------------------------- |
| **Named Colors** | `color: red;`                  | Uses predefined color names like red, blue, green. |
| **RGB**          | `color: rgb(255, 0, 0);`       | Red, Green, Blue values range from 0–255.          |
| **HEX**          | `color: #ff0000;`              | Hexadecimal representation of RGB values.          |
| **RGBA**         | `color: rgba(255, 0, 0, 0.5);` | Adds transparency (alpha value) from 0 to 1.       |
| **HSL**          | `color: hsl(0, 100%, 50%);`    | Hue (0–360°), Saturation (%), Lightness (%).       |

---

## 🧠 **4. Practical Example**

```html
<!DOCTYPE html>
<html>
<head>
  <title>Text Styling Example</title>
  <style>
    h1 {
      font-family: 'Poppins', sans-serif;
      font-weight: bold;
      text-align: center;
      text-transform: uppercase;
      color: #ff5733;
      text-shadow: 2px 2px 5px #999;
    }
    p {
      font-size: 18px;
      line-height: 1.6;
      letter-spacing: 1px;
      color: rgba(0, 0, 0, 0.8);
    }
  </style>
</head>
<body>
  <h1>Welcome to CSS Styling</h1>
  <p>Learning how to make text beautiful with CSS properties and color formats!</p>
</body>
</html>
```

---

## 🎯 **5. Key Takeaways**

✅ CSS makes your web pages visually appealing and readable.
✅ Text styling helps create a clear content hierarchy.
✅ Different color formats give flexibility and control in design.
✅ Combining shadows, spacing, and fonts can greatly enhance the UI feel.

---


## 🎨 **CSS Day 3 Notes – Box Model, Div Tag & Background Styling**

### 📦 **1. CSS Box Model**

Every HTML element is treated as a rectangular box.
It defines how space and layout are handled in webpages.

| Layer       | Description                                 |
| ----------- | ------------------------------------------- |
| **Content** | The actual text or image inside the box     |
| **Padding** | Space between the content and the border    |
| **Border**  | The visible outline around the padding      |
| **Margin**  | Space between the element and its neighbors |

🧩 **Example:**

```css
div {
  width: 200px;
  padding: 15px;
  border: 3px solid black;
  margin: 10px;
}
```

---

### ⚙️ **2. Box-Sizing Property**

Controls how total width and height of an element are calculated.

* **content-box (default):**
  Only content area is included in width & height; padding & border add extra space.

* **border-box:**
  Includes padding & border within the defined width & height. Easier for layouts.

```css
div {
  box-sizing: border-box;
}
```

---

### 🧱 **3. Div Tag**

* `<div>` is a **block-level container** used to group HTML elements together.
* Helps in structuring layouts and applying collective CSS styling.

```html
<div class="container">
  <h2>My Section</h2>
  <p>This is inside a div.</p>
</div>
```

---

### 🌆 **4. Background Styling**

Adds visual appeal to webpages.

| Property              | Description           | Example                             |
| --------------------- | --------------------- | ----------------------------------- |
| `background-color`    | Sets background color | `background-color: lightblue;`      |
| `background-image`    | Adds image            | `background-image: url('bg.jpg');`  |
| `background-repeat`   | Controls repetition   | `no-repeat`, `repeat-x`, `repeat-y` |
| `background-size`     | Controls fit          | `cover`, `contain`, `100% 100%`     |
| `background-position` | Aligns image          | `center`, `top left`                |

---

### 🌈 **5. CSS Gradients**

Used to create smooth color transitions.

**Linear Gradient:**

```css
background: linear-gradient(to right, blue, green);
```

**Radial Gradient:**

```css
background: radial-gradient(circle, orange, white);
```

---

✅ **Summary:**

* Understood how box model controls element spacing.
* Learned to use `<div>` effectively.
* Practiced background color, images, and gradients for design.

---

## 💡 **CSS Day 4 Notes – Fonts, Positioning, z-index, Transform & Flexbox**

### 🔤 **1. Fonts in CSS**

Fonts control the appearance and readability of text.

| Property      | Description         | Example                           |
| ------------- | ------------------- | --------------------------------- |
| `font-family` | Sets typeface       | `font-family: Arial, sans-serif;` |
| `font-size`   | Defines size        | `font-size: 16px;`                |
| `font-weight` | Thickness           | `font-weight: bold;`              |
| `font-style`  | Style               | `font-style: italic;`             |
| `line-height` | Space between lines | `line-height: 1.5;`               |

💡 Tip: Use `rem` units for responsive font sizing.

---

### 📍 **2. Position Property**

Controls how elements are placed in the layout.

| Type       | Behavior                                              |
| ---------- | ----------------------------------------------------- |
| `static`   | Default (normal flow)                                 |
| `relative` | Moves slightly from its normal position               |
| `absolute` | Positions relative to nearest parent                  |
| `fixed`    | Stays fixed while scrolling                           |
| `sticky`   | Acts static until a certain scroll point, then sticks |

🧩 **Example:**

```css
.box {
  position: absolute;
  top: 20px;
  right: 10px;
}
```

---

### 🧱 **3. z-index (Stacking Order)**

Determines which element appears on top when overlapping.
Works only with positioned elements.

```css
.card {
  position: relative;
  z-index: 10;
}
.modal {
  position: fixed;
  z-index: 1000;
}
```

---

### 🔄 **4. Transform Property**

Used for visual effects and animations.

| Function          | Description   | Example                             |
| ----------------- | ------------- | ----------------------------------- |
| `translate(x, y)` | Moves element | `transform: translate(20px, 10px);` |
| `rotate(angle)`   | Rotates       | `transform: rotate(15deg);`         |
| `scale(x, y)`     | Resizes       | `transform: scale(1.1);`            |
| `skew(x, y)`      | Tilts         | `transform: skew(10deg, 5deg);`     |

✨ Add smooth transitions:

```css
button {
  transition: transform 0.3s ease;
}
button:hover {
  transform: scale(1.05);
}
```

---

### 🧩 **5. Flexbox (Flexible Box Layout)**

Used for responsive and aligned layouts.

📦 **Activate Flexbox:**

```css
.container {
  display: flex;
}
```

📏 **Main Properties:**

| Property          | Purpose                  | Example                            |
| ----------------- | ------------------------ | ---------------------------------- |
| `justify-content` | Align items horizontally | `center`, `space-between`          |
| `align-items`     | Align items vertically   | `center`, `flex-start`, `flex-end` |
| `flex-direction`  | Row or column layout     | `row`, `column`                    |
| `gap`             | Space between elements   | `gap: 10px;`                       |

---

✅ **Summary:**

* Learned text styling with fonts and units.
* Understood positioning types and stacking order.
* Explored transform & transitions for animations.
* Practiced Flexbox for responsive layouts.

---
# 🌐 **CSS – Day 5: Flexbox Layout**

## 🎯 **What is Flexbox?**

Flexbox (**Flexible Box Layout**) is a CSS layout module that helps arrange elements easily in **rows or columns**, and distribute space **evenly** among them — making layouts more **responsive** and **clean**.

---

## 🧭 **Main Concepts**

Flexbox works along **two axes**:

* **Main Axis (Horizontal / X-axis)** → controlled by `justify-content`
* **Cross Axis (Vertical / Y-axis)** → controlled by `align-items`

---

## ⚙️ **Basic Setup**

To use Flexbox, set the parent container to:

```css
.container {
  display: flex;
}
```

This makes all direct child elements **flex items**.

---

## 🧩 **Core Flexbox Properties**

### 🔹 **1. justify-content (Main Axis Alignment)**

Aligns flex items **horizontally**.

```css
justify-content: flex-start; /* Default - items start from left */
justify-content: center;     /* Items move to center horizontally */
justify-content: flex-end;   /* Items move to right */
justify-content: space-between; /* Equal space between items */
justify-content: space-around;  /* Equal space around each item */
```

---

### 🔹 **2. align-items (Cross Axis Alignment)**

Aligns items **vertically** (along the cross axis).

```css
align-items: flex-start;  /* Top aligned */
align-items: center;      /* Vertically centered */
align-items: flex-end;    /* Bottom aligned */
```

---

### 🔹 **3. flex-direction**

Defines the **direction** of the main axis.

```css
flex-direction: row;    /* Default – horizontal */
flex-direction: column; /* Vertical – main and cross axis swap */
```

---

### 🔹 **4. flex-wrap**

Prevents elements from shrinking when they exceed container width.

```css
flex-wrap: wrap;   /* Moves extra items to the next line */
flex-wrap: nowrap; /* Keeps items in one line */
```

---

### 🔹 **5. gap**

Adds spacing between flex items.

```css
gap: 20px;
```

---

### 🔹 **6. border & background**

Used to add design and visual boundaries.

```css
border: 3px dotted white;
background-color: lightblue;
```

---

## 🚫 **Avoiding Shrinking Issues**

When items shrink undesirably:

* Use `flex-wrap: wrap;` on the parent
* Or set `flex-shrink: 0;` on child elements

---

## 🧱 **Important Note**

All Flexbox properties like `justify-content`, `align-items`, and `gap` should always be applied to the **parent container**, not the individual boxes.

---

## 🧩 **Task Practiced**

🛒 Created an **Amazon-like product cart** using images and text:

* Used `display: flex;` for horizontal arrangement
* Applied `gap`, `justify-content`, and `align-items` for spacing and alignment
* Ensured responsiveness with `flex-wrap`

---

## 📘 **Notes – CSS Day 6 (Pseudo-Classes, Transitions & Animations)**

### 🧩 **Pseudo-Classes**

Used to style elements based on user actions or element state.

```css
button:hover { background-color: blue; color: white; }
input:focus { border-color: red; }
li::after { content: " welcome"; }
```

* `:hover` → when user moves mouse over element
* `:focus` → when element is active (e.g., input box clicked)
* `::before` / `::after` → adds content before or after (requires `content` property)

---

### 🎞 **Transitions**

Used to make property changes happen smoothly (animated style changes).
Syntax:

```css
transition: property duration timing-function delay;
```

Examples:

```css
button {
  background-color: red;
  color: black;
  transition: all linear 1s;
}
button:hover {
  background-color: green;
}
```

**Common timing functions:**

* `linear` → constant speed
* `ease-in` → starts slow
* `ease-out` → ends slow
* `ease-in-out` → slow start and end
* `cubic-bezier()` → custom motion

---

### 🔄 **Transform Property**

Used to move, rotate, resize, or skew elements.

```css
transform: translate(100px, 100px); /* move */
transform: rotate(30deg);           /* rotate */
transform: scale(1.5);              /* resize */
transform: skew(10deg, 20deg);      /* tilt */
```

---

### 🌈 **Animations**

Used to define complex movement or style changes over time.
Syntax:

```css
animation: name duration timing-function delay iteration-count direction fill-mode;
```

Example:

```css
.box {
  width: 200px;
  height: 200px;
  background-color: red;
  animation: wow 5s ease-in-out infinite;
}
@keyframes wow {
  from { background-color: red; }
  to { background-color: green; }
}
---

### 📘 **CSS Day 7 – Units & Practice Task**

#### 🧠 **Topic Covered: CSS Units**

CSS units define how size and spacing are measured in a webpage. They help in creating flexible, consistent, and responsive layouts.

---

### 🔹 **Types of CSS Units**

#### **1. Absolute Units**

* **px (pixels)** – Fixed-size unit.
  Example: `width: 200px;` → Always 200 pixels wide, regardless of screen size.

#### **2. Relative Units**

Units that depend on another value (like the parent element or viewport).

**a. % (Percentage)**

* Relative to the parent element.
  Example:
  If parent width = 200px and child = `width: 50%;` → Child = 100px.
* Recommended for responsive layouts.

**b. em & rem**

* **1em = 16px (by default)**
* **em** – Depends on **parent’s font size**
* **rem** – Depends on **root (HTML tag)** font size
  Example:
  If parent font-size = 50px → `2em = 100px`
  If root font-size = 16px → `2rem = 32px`

**c. vh / vw (Viewport Height & Width)**

* **1vh = 1% of viewport height**
* **1vw = 1% of viewport width**
* Used for full-screen responsive designs.
  Example:
  `height: 100vh;` → Element takes full screen height.
  `width: 100vw;` → Element takes full screen width.

---

### 💡 **Best Practice**

✅ Use `%`, `em`, `rem`, `vh`, and `vw` for responsive design.
❌ Avoid using only `px` for layouts – it doesn’t scale across devices.

---

### 🧩 **Self-Practice Task**

**Goal:** Build a simple, single-page “Product Showcase” webpage applying all learned concepts so far.

#### **Concepts Used:**

* HTML structure (head, body, headings, paragraphs)
* Images with alt text
* Anchors (internal & external)
* Forms (search/contact)
* CSS Selectors (universal, element, class, id)
* Box Model (margin, padding, border, box-sizing)
* Units (px, %, em, rem, vh, vw)
* Flexbox (display: flex, gap, flex-wrap, justify-content, align-items)
* Animations for visual effects

---




