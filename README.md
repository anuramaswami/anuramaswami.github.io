# Anu Ramaswami Website Documentation
This documentation is meant to provide all the resources and information you need to edit Anu's website. You are able to edit this README documentation file just as any other file, as detailed in the [Editing Website](#editing-website) section. If you are lost in the files, the [Website Structure](#website-structure) section details where to find files.

### Sections
* [Core Resources](#core-resources)
* [Website Structure](#website-structure)
* [Editing Website](#editing-website)
* [Understanding Website Code](#understanding-website-code)
* [Domain Name and Hosting](#domain-name-and-hosting)

### Core Resources
* [Github](https://github.com) - Website files hosted here, edits made here
* [Network Solutions](https://www.networksolutions.com/index.jsp) - Domain name provider
* [CloudFlare](https://www.cloudflare.com) - Free DNS, security, and speed support
* [Bootstrap](https://getbootstrap.com) - HTML, CSS, JavaScript web framework used extensively throughout website
* [Jekyll](https://jekyllrb.com/docs/home/) - Static templating engine utilized for site maintainability

### Website Structure
This section details where to find website files.
#### _includes
* Any files used in more than one page are kept here. 
* Example: footer and navigation. 
* Edits to these files change multiple pages
#### _layouts
* These files provide basic structure of web pages.
* Tells each file where to include navigation, page content, and footer
* The home page extends 'home.html'
* All other pages extend 'page.html'
* Edits to 'page.html' will change all pages except home page
#### css, images, js
* css
	* Any custom edits to website look made here
* images
	* All website photos kept here
* js
	* Any custom edits to website behavior made here
#### collaborators, projects
* All files under collaborators dropdown found in respective folder
* All files under projects dropdown found in respective folder
#### 404.md
* This page is displayed when a link to a nonexistent file on this website is followed
#### CNAME
* Used in collaboration with Cloudflare for domain name.
* DON'T EDIT (unless you are changing domain names)
#### README.md
* You are reading off this file right now! Any changes to the documentation can be made here
#### _config.yml
* This is the configuration file for Anu's website, as required by Jekyll.
* DON'T EDIT (unless you are changing domain names or want to mess with the website core)
#### index.html, any other html files in main view
* index.html
	* This is the home page for Anu's website.
* All other html files in main view
	* Corresponds with file name to page on Anu's website.

### Editing Website
#### What files should I edit?
* 95% of the time, only edit the following files (there may be new files added or different file names that this documentation is not updated on)
	* index.html (Home page)
	* news-and-media.html (News and Media page)
	* publications.html (Publications page)
	* any files in 'projects' folder
	* any files in 'collaborators' folder
#### How do I edit a file?
1. Login to [github](https://github.com/anuramaswami/anuramaswami.github.io) (you're probably already here)
2. Go to file you wish to edit (file structure explained [here](website-structure))
3. Click on the edit button ![alt text](https://anuramaswami.github.io/images/readme/edit-button.png "Edit Button")
	* Page view of edit button
![alt text](https://anuramaswami.github.io/images/readme/how-to-edit-1.png "How to edit part 1")
	* Up close page view of edit button
![alt text](https://anuramaswami.github.io/images/readme/how-to-edit-2.png "How to edit part 2")
4. Make changes
5. Go to bottom of page, give brief description of changes you made, and press the 'commit changes' button

### Understanding Website Code
This website is built with HTML, CSS, and JavaScript. Bootstrap is used extensively in the HTML. Jekyll is used for website maintainability. Most edits you will make will be to the HTML. Bootstrap is used extensively in the HTML for the look and feel of the website. There is some custom CSS and JavaScript as well.
#### HTML, CSS, JavaScript
* HTML
	* HTML makes up the content (words, pictures, etc) of a webpage. [HTML Wiki](https://en.wikipedia.org/wiki/HTML)
	* Most edits you will make will be to the HTML. [HTML Cheatsheet](http://htmlcheatsheet.com)
* CSS
	* CSS determines how the website looks [CSS Wiki](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
	* On this website, styling is mainly done in HTML with bootstrap classes.
	* Some custom styles written in css folder. [CSS Cheatsheet](http://htmlcheatsheet.com/css/)
* JavaScript
	* JavaScript makes websites interactive. Example: the navigation bar uses it. [JS Wiki](https://en.wikipedia.org/wiki/JavaScript)
	* Like CSS, almost all JavaScript is done in HTML with bootstrap classes.
	* Some custom JavaScript may be written in js folder. [JS Cheatsheet](http://htmlcheatsheet.com/js/)
#### Bootstrap
* Bootstrap is a library for quickly developing beautiful websites [Bootstrap Documentation](https://getbootstrap.com/docs/4.0/getting-started/introduction/)
* It provides CSS and JavaScript classes, used extensively in this website's HTML.
* If you really want to understand Bootstrap, [here is a medium length Lynda course](https://www.lynda.com/Bootstrap-tutorials/Bootstrap-4-Essential-Training/372545-2.html)
* [Here is a bootstrap cheatsheet](https://hackerthemes.com/bootstrap-cheatsheet/)
#### Jekyll
* Jekyll is a static site generator
	* In English: Jekyll allows this website to be broken up into maintainable chunks.
* Jekyll is not too important to this website, but if you want to learn more, [here is the documentation](https://jekyllrb.com/docs/home/)
#### Markdown
* Markdown is an easy to read formatting language used in the ReadMe file. [Wiki Reference] (https://en.wikipedia.org/wiki/Markdown)
* Cheatsheet on markdown code. [Markdown Cheatsheet] (https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#lists)

### Domain Name and Hosting
This section explains how these files hosted on GitHub translate to 'anuramaswami.com'
#### How does it work?
* The domain name 'anuramaswami.com' was purchased through [Network Solutions](https://www.networksolutions.com/index.jsp)
* On Network Solutions, domain points to [CloudFlare](https://www.cloudflare.com), which is used for free DNS, speed, and security support.
* CloudFlare points to [Github Pages](https://pages.github.com), where this site is actually hosted by Github.
#### Wow, you suck at explaining this
* Well, this is kind of complicated. Here are some resources to understand this better.
	* [Fairly easy-to-understand guide on the process I tried to explain](https://medium.freecodecamp.org/an-illustrated-guide-for-setting-up-your-website-using-github-cloudflare-5a7a11ca9465)
	* [Help: Using a custom domain with Github Pages](https://help.github.com/articles/using-a-custom-domain-with-github-pages/)
	* Simply google the question you have, there are many resources to understand Github Pages, CloudFlare, and Network Solutions

