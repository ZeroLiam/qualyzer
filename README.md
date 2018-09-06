# qualyzer
Qualitative Analyzer of social media trends and topics, made in React and using the free template MobApp from ColorLib. 

## [View Demo](https://qualyzerapp.netlify.com/)


## Content
* [Description - Qualyzer SS18](#description)
* [Challenge](#challenge)
* [Approach, Tech & Frameworks](#approach)
* [References](#references)

---
# [Description - Qualyzer SS18](#description)
Social media is an ubiquitous environment. Qualyzer was born as a tool to complete a research paper for a class, Research Methods for Human-Computer Interaction. The study aimed to identify the influence of social media in the health of a group, specifically people with gender dysphoria, and the existence of tools for analysis that can make observational research possible in social media environments. The long term goal of the study is to suggest technologies that can identify needs to be addressed by public health programs, since I believe that technology must be more human-centered nowadays.

## Link to [repo](https://github.com/ZeroLiam/qualyzer)

Hello! Please feel free to comment/ask/send me a message in case of any questions. Thanks!

## Concept
Is it possible to do ethnographic research in online environments? What kind of tools are available, and where can we do our observations? Since social media is a central hub of our culture and communications, I decided to give it a shot in all apps available. With the technology available is not hard to "observe" the feelings of the people about a certain topic, and the time/place of their online posts can give us a social snapshot of the topic. Open application programming interfaces (APIs) can make it easier to look for a topic, its trends, what people say, when and where. The technology is there, the observation methods are there, so why not put them together? Why not use this availability without invading privacy of users?

In order to observe a topic, rather than its agents, Tumblr is the perfect social media. The authors remain anonymous as long as they can (hiding behind a username), and only the last universal posts under a hashtags will be retrieved. Give it a shot and try Qualyzer; if you find that it's breaching a rule or it's too buggy, please let me know; I don't want to invade personal space, just to show that online ethnography is possible.

# [Challenge](#challenge)
The topic of gender dysphoria very intimate for some folks; although it was offered an incentive for their participation, some people decided that it was too personal to share that experience. Therefore, due to the lack of participants for the study, another research method needed to be implemented. Qualyzer was a custom made analytics tool for social media, in the form of an ethnographic tool for online media.

Qualyzer tries to pull the data from social media APIs, but in this early version it only supports Tumblr. Other social media require a paid account and/or application, which was not granted on time for this study. Qualyzer is published at the link [https://qualyzerapp.netlify.com/](https://qualyzerapp.netlify.com/), and limited by 5000 requests per day.

# [Approach, Tech & Frameworks](#approach)

### Approach
In short, Qualyzer grabs the top posts for a topic, makes a polar graph by the type of posts found, and the samples of each post. The goal is to have an overview of the tag on a specific date by showing the data as a posts (limited to 20 due to the Tumblr API). The user is responsible to read and analyze the posts by themselves. The user interface for Qualyzer is very simple: a query can be performed by filling data on the fields for (hash)Tag (for the topic to search), Date (the date for the posts to search), and Post Amount (available from 1 to 20). A query is formulated as "Find **AMOUNT OF POSTS** for the topic **TOPIC** before the date **DATE**".
![Query](http://www.liselot.de/assets/img/projects/qualyzer/preferredpronounquery.png)

Qualyzer categorizes the result of the query just as Tumblr, per the use of their API. However, this app focuses on part of the content retrieved from the API, especially the raw content of the post. On the API call, the Qualyzer application requests the name of the blog, direct link to retrieved post, type of post, content (as raw or html), and the list of tags. All that information is sorted and put together in the visual form of a card via CSS and rendered in JavaScript using the React framework.

For example, a query about "preferred pronoun" made for August 8th can be seen below. The result is a polar graph and the resulting posts as sticky notes on the web design.
![Polar Result](http://www.liselot.de/assets/img/projects/qualyzer/preferredpronounpolar.png)
![Posts Result](http://www.liselot.de/assets/img/projects/qualyzer/preferredpronounres1.png)

### Tech Needed
The technology for Qualyzer is provided in the front-end by the React framework for JavaScript, and the netlify service for the publishing and back-end. The source for the app comes from [Tumblr’s API version 2](https://www.tumblr.com/ docs/en/api/v2). The total development took approximately three days, trying to improve searching features and trying to integrate other social media (like Twitter) with no avail.

### Development Frameworks
* **JavaScript/HTML/CSS**
* **ReactJS** is a powerful modular user-interface library that is robust and stable for web apps. My go-to choice on JavaScript frameworks due to its modularity and robustness.
* **Libraries** D3.js was used for the polar graph. Other libraries such as _jQuery_ and _lodash_ were used to write this code faster, since I was working with JSON objects and this needed to be iterated faster.

### Screenshots

![Landing Page](http://www.liselot.de/assets/img/projects/qualyzer/qualyzer.png)
![Results](http://www.liselot.de/assets/img/projects/qualyzer/qualyzer_res.png)
---

# [References](#references)
Visit the Qualyzer app on netlify: [https://qualyzerapp.netlify.com/](https://qualyzerapp.netlify.com/).
