# Nya-Sneaker
## Overviews
A **React-based** sneaker-selling e-commerce website</br>
### [Full Demo](https://nya-sneakers.herokuapp.com/) </br>
> Loading may need to take a while

![full-demo](/Screenshot/full-demo1.png)
</br>
## Getting Started
### Prerequisite

 - [Node.js](https://nodejs.org/en/download/) <br/>
	Node.js version: 14.15.0+ is recommended <br/>
	To check the version installed, open a terminal window and entering the following: <br />
	`$ node -v`
 - [Yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable)</br>
    >Instead of npm, I use yarn as a package manager
 - Google Firebase <br/>
	 [How to use Firebase JavaScript SDK in your web app](https://firebase.google.com/docs/web/setup#with-npm_1)
	 > Make sure to finish Step 1 and 2 before proceeding
### Dependencies
	
 - Install dependencies
  Open a terminal cd Nya-Sneaker project directory, run  `yarn install`
  >Note: Google Firebase is included in package.json file
 
### Environment Setup
 - Initialize Firebase</br>
   [How to use Firebase JavaScript SDK in your web app](https://firebase.google.com/docs/web/setup#with-npm_1)
   >  Please follow Step 3 to replace the existing Firebase config object located in src\firebase\firebase.util.js with  your [Firebase config object](https://support.google.com/firebase/answer/7015592#zippy=,in-this-article) 

### Run it!
 - Run the app: </br>
 `yarn start`
 -  It should then be running on  [http://127.0.0.1:3000/](http://127.0.0.1:3000/)  (Press CTRL+C to quit)
## Demo
 - Sign up
  <br><br/>
  ![Sign-up](/Screenshot/Sign-up.gif)
 - Login
   <br><br/>
	 - custom form login
	   <br><br/>
	   ![Login-form](/Screenshot/Login-form.gif)
	 - SSO via Google
	   <br><br/>
	   ![SSO](/Screenshot/SSO.gif)
 - Select items
   <br><br/>
   ![Item-selecting](/Screenshot/Select-item.gif)
 - Modify cart
   <br><br/>
   ![cart-Modifying](/Screenshot/Modify-cart.gif)
 - Pay
   <br><br/>
   ![Pay](/Screenshot/pay.gif)
