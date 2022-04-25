# Tambourine-page
 
Welcome to the Front End Test, I’ve put a lot of effort in the test and the documentation. Here is the architecture description and other technical details.
 
## How run project?
 
Clone the project, open a terminal in the root folder and run the next script to install all the dependencies. 
 
 ```
npm i
```
 
To run the server for development, execute 
```
npm run dev
``` 
this script watches the files and compiles the template engine (pug), the styles pre-processor (sass) and the JavaScript transpiler (babel). 
 
The previous script will wait for changes in the code, to open a local server you can run 
```
npm run serve
```
Now, you can go to `http://localhost:8080/` and check this site.
 
## Architecture
 
The architecture of this project is based on 3 different tools: HTML, SASS and vanilla JS. Everything is compiled using Gulp.js through npm scripts. 
 
The content of the page is placed in a JSON structure that is passed to the template engine to generate the final HTML. This makes all the content simple to change and more organized.
 
## Templates
 
The page is built using components. Technically these are mixins from pug, it allows the code to be more structured and scale easily. There is a defined name convention, all the templates starting with ´_´ (e.g _slider.pug) are considered components and the other templates are pages. 
 
### Styles Preprocessor
 
The solution is using sass as a preprocessor of css, because this helps to reduce code, and allows to create mixins, variables and logic. Each component has its own sass file containing the styles, the file name convention for the components is to start with ´_´ (e.g _slider.sass).
 
It also uses two breakpoints `mediaMin` and `mediaLarge`, the values can be found in `_variables.scss`.
 
### Images
 
On the web there is a need to use smaller and lighter images, I used `tinypng` to reduce the weight of the images so they are processed faster in the browser.
 
The icons are rendered directly in the HTML as SVG code to save additional HTTP requests and make the site load faster.
 
#### Accessibility and usability
 
Accessibility and usability were taken into account by using semantic HTML for the navigation. It not only improves the score for SEO but also renders a more clean and solid HTML. The keyboard navigation is also important for people with vision problems, so the slider can be used with the arrows of the keyboard and the tab navigation was tested and ensured to work properly.
 
#### Responsive 

Since the main purpose of the page is to book a reservation, for Mobile I considered a full-width stick button to make it easy to access to the user. The wide space, the contrast and the animation bring a nice experience to make the access easy to the user.
#### Public version
 
The public version of the site is using the Github Pages since it is the free version of an static server in the git client I chose: `https://oscarlarrotta07.github.io/tambourine-page/build/`.