# Anu Ramaswami Website Documentation
This documentation is meant to provide all the resources and information you need to edit Anu's website. You are able to edit this README documentation file just as any other file, as detailed in the [Editing Website](#editing-website) section

### Sections
* [Core Resources](#core-resources)
* [Website Structure](#website-structure)
* [Editing Website](#editing-website)
* [Understanding Website Code](#understanding-website-code)
* [Domain Name and Hosting Explanation](#domain-name-and-hosting-explanation)

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
3. Click on the edit button ![alt text](https://anuramaswami.com/images/readme/edit-button.png "Edit Button")
![alt text](https://anuramaswami.com/images/readme/how-to-edit-1.png "How to edit part 1")
![alt text](https://anuramaswami.com/images/readme/how-to-edit-2.png "How to edit part 2")

### Understanding Website Code
This website is built with HTML, CSS, and JavaScript. It is extensively written in HTML. Any custom CSS and JavaScript provided with
* [What is Markdown?] (https://en.wikipedia.org/wiki/Markdown)
* [Markdown CheatSheet] (https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#lists)

### Domain Name and Hosting Explanation

