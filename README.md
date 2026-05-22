# Wu-Hung Hsiao - Personal Portfolio (Project 1)

**Author:** [Wu-Hung Hsiao]([Insert Link to your Homepage or GitHub Profile Here])  
**Class Link:** [CS 5610 Web Development]([Insert Link to Canvas or Class Website Here])

## Project Objective
In this assignment, we are implementing a personal homepage using vanilla HTML5, CSS3, and ES6+. This is a front-end only static site, avoiding backend frameworks and large UI component libraries (like React or Vue). All custom JavaScript is written in ES6 modules.

The project features a **creative addition**: A dynamic "Filterable Certifications List" on the *Certifications* page (`extra.html`), using vanilla JavaScript to filter Cloud, Data/AI, and Process certifications smoothly via DOM manipulation.

## Links (Submission Requirements)
* **Deployed URL (GitHub Pages)**: [Insert Link Here]
* **Presentation (Google Slides)**: [Insert Public Link Here]
* **Video Demonstration**: [Insert YouTube/Video Link Here]

## Screenshot
*(Ensure you take a screenshot of your live site and replace the path below. Gifs are preferred!)*
![Homepage Screenshot/Gif](./images/screenshot.gif)

## Tech Requirements
* Vanilla HTML5 & CSS3
* Bootstrap 5 (Navbar & Grid Utilities)
* Custom CSS Layouts (Flexbox & CSS Grid)
* Google Fonts (Inter)
* Relative & Absolute Positioning
* ES6+ JavaScript (Modules)
* No Backend or heavy frontend frameworks (like React/Vue)

## Instructions to Build
Since this is a static website, no complex build tools are required.
1. Clone the repository to your local machine.
2. Open the project folder in VSCode.
3. Install the **Live Server** extension.
4. Right-click on `index.html` and select **"Open with Live Server"**.
5. Alternatively, run any simple static server (e.g., `npx serve .` or `python3 -m http.server 8000`).

## Pages
| Page | URL | Description |
|------|-----|-------------|
| Home Page | `index.html` | Professional summary, education timeline, and work experience. |
| Skills & Projects | `skills.html` | Responsive grid showcasing tech stack and portfolio. |
| Certifications | `extra.html` | Interactive Vanilla JS Filterable List. |

## AI Tool Usage
**Describe the use of GenAI tools if any. Provide what models were used, versions, prompts, and how it was used.**

I used AI (Gemini 3.1 Pro via AntiGravity IDE) primarily to assist in developing the "Certifications" page (`extra.html`) and its associated features. My workflow was as follows:

1. **Data Sourcing:** I downloaded my personal LinkedIn profile as a PDF document.
2. **Content Extraction & Feature Generation:** I provided the PDF to the AI and used the following prompt to generate the HTML layout and the Vanilla JavaScript filtering logic (`js/activities.js`):

   **Prompt Used:**
   > *"Here is my LinkedIn profile exported as a PDF. Please extract my real certifications and professional achievements. Using this data, generate an HTML page (`extra.html`) with a clean, academic layout. Include a Vanilla JavaScript feature that allows users to dynamically filter my achievements by category (e.g., Cloud, AI & Data, Process). Do not use jQuery, only use ES6 modules and Vanilla JS."*

This workflow allows anyone to easily generate a highly personalized, interactive page based on their own LinkedIn data while strictly adhering to the project's vanilla JavaScript constraints.

## License
MIT License
