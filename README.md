![](http://i.imgur.com/drZ8ghd.png)

## Quickstart boilerplate to build web & hybrid mobile apps using AT&T API [![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

<a href="https://github.com/prabhutech/sensocloud/zipball/master">
  <img src="https://lh5.googleusercontent.com/-QYRVFFig8fI/U0xzuHnAWbI/AAAAAAAAEBM/qU5rHrPvpOI/w840-h272-no/Screenshot+2014-04-14+19.46.12.png" height="68">
</a> 

> [AT&T API](https://developer.att.com/apis) service with bootstrap, angularjs, cordova and other goodies - lets you quickly set up a web & hybrid mobile app project


------
### Who is this for?
* Maybe you're already using AngularJS for mobile/web and you need consume AT&T API as a Service.
* Maybe you are a Sensoplex hardware developer who want to consume its data through cloud.
* Maybe you're at a hackathon, and you need to quickly launch a web or a mobile app that needs AT&T API service layer.


------

### Why we made this



We wanted to simplify the process of setting up the dev environment for consuming [AT&T API](https://developer.att.com/apis). This boilerplate is a quickstart for developing AngularJS based web & hybrid mobile apps consuming AT&T API Service. It comes with powerful build system to get you started in minutes. Let us know what we can improve.

This is a by-product of [Closer](http://www.hackathon.io/closer), a product we built for [Wearables Hackathon](http://www.eventbrite.com/e/wearables-tickets-10876924173) using AT&T and Sensoplex, open-sourcing it with the hope that some or all of it will be useful to someone.


------
### Features
* AngularJS wrapper for the **AT&T API**
* Bootstrap 3.0
* Grunt build system to help optimize and automate several aspects of your workflow
* Cordova to deploy your code as mobile application (iOS and Android)
* …and lots more


------

### Installation Instructions

1. Install node - http://nodejs.org/
1. Install grunt v0.4.x - http://gruntjs.com/getting-started
1. Install bower `npm install -g bower`
1. Install coffee-script `npm install -g coffee-script`
1. Make sure you have compass installed (http://compass-style.org/install/)
1. Make sure you are running the latest version of Node (we can't assure you this is gonna work on older versions of Node)
1. Clone this repo `git clone git@github.com:prabhutech/sensocloud.git`
1. `cd sesocloud`
1. `npm install`
1. `bower install`
1. `grunt server` - builds and fires up the local node server on localhost:3000
1. Visit http://localhost.com:9000 to develop your site
1. To compress and optimize your application, run `grunt build`. It will concatenate, obfuscate, and minify your JavaScript, HTML, and CSS files and copy over the resulting assets into the `www/` directory so the compressed version can be used with Cordova.

------

### Workflow
The included Grunt build system provides sensible defaults to help optimize and automate several aspects of your workflow when developing hybrid-mobile apps using AT&T API.

#### Managing libraries with Bower
Install a new front-end library using `bower install --save` to update your `bower.json` file. If you want to add more new libraries supported by [`bower.io`](http://bower.io/search/) For example, to install font-awesome, you would do:
```
bower install font-awesome --save
```
This way, when the Grunt [`bower-install`](https://github.com/stephenplusplus/grunt-bower-install#grunt-bower-install) task is run it will automatically inject your front-end dependencies inside the `bower:js` block of your `app/index.html` file.

#### Manually adding libraries
If a library you wish to include is not registered with Bower or you wish to manually manage third party libraries, simply include any CSS and JavaScript files you need **inside** your `app/index.html` [usemin](https://github.com/yeoman/grunt-usemin#blocks) `build:js` or `build:css` blocks but **outside** the `bower:js` or `bower:css` blocks (since the Grunt task overwrites the Bower blocks' contents).

#### Local browser development
Running `grunt serve` enhances your workflow by allowing you to rapidly build apps without having to constantly re-run your platform simulator. Since we spin up a `connect` server with `watch` and `livereload` tasks, you can freely edit your CSS (or SCSS/SASS files if you chose to use Compass), HTML, and JavaScript files and changes will be quickly reflected in your browser.

#### Building assets for Cordova
Once you're ready to test your application in a simulator or device, run `grunt cordova` to copy all of your `app/` assets into `www/` and build updated `platform/` files so they are ready to be emulated / run by Cordova.

To compress and optimize your application, run `grunt build`. It will concatenate, obfuscate, and minify your JavaScript, HTML, and CSS files and copy over the resulting assets into the `www/` directory so the compressed version can be used with Cordova.

#### Cordova commands
To make our lives a bit simpler, the `cordova` library has been packaged as a part of this generator and delegated via Grunt tasks. To invoke Cordova, simply run the command you would normally have, but replace `cordova` with `grunt` and `spaces` with `:` (the way Grunt chains task arguments).

For example, lets say you want to add iOS as a platform target for your app
```
grunt platform:add:ios
```
and emulate a platform target
```
grunt emulate:ios
```
or add a plugin by specifying either its full repository URL or namespace from the [Plugins Registry](http://plugins.cordova.io)
```
grunt plugin:add:https://git-wip-us.apache.org/repos/asf/cordova-plugin-device.git
grunt plugin:add:org.apache.cordova.device
grunt plugin:add:org.apache.cordova.network-information
```

### Initial Walkthrough
To help you hit the ground running, let's walk through an example workflow together. 

We'll start by running our app in a browser so we can make a few changes.
```
grunt serve
```
Play around with livereload by changing some of the styles in `app/styles/main.css` or HTML in one of the files in `app/templates/`. When you're ready, lets go ahead and build the assets for Cordova to consume and also spot check that we didn't bork any code during the build process. We can do that with another handy Grunt task that runs the build process and then launches a `connect` server for use to preview the app with our built assets.
```
grunt serve:dist
```
If everything looks good the next step is to add a platform target and then emulate our app. In order for us to launch the iOS simulator from the command line, we'll have to install the `ios-sim` package. (If you forget to do this, Cordova will kindly remind you).
```
npm install -g ios-sim
grunt platform:add:ios
grunt emulate:ios
```
You may have realized that when the Grunt build process is run, it triggers the Cordova build system as well, so you end up with a beautifully packaged mobile app in a single command.

### Testing Your App
To lessen the pain of testing your application, this generator configures your project with a handful of libraries that will hopefully make testing your application, dare I say, more enjoyable.

### Unit Tests
The foundation of our testing solution is built using [Karma](http://karma-runner.github.io/) which was created by the AngularJS team and is all around awesome. Inside of your generated `karma.conf.js` file you will find some basic configuration settings. Notice that we're using [Mocha](http://visionmedia.github.io/mocha/) to structure our tests and pulling in [Chai](http://chaijs.com/), a slick assertion library. You can easily drop Chai and replace Mocha with [Jasmine](http://jasmine.github.io/) depending on your preference.

Undo your modification and ensure that all tests are passing before continuing on.

**Note** Depending on which starter template you picked, your tests may start off failing.

### Wrapping it up
If you made it this far then congratulations! You're now up and running with the gorgeous web & mobile application powered by AT&T API Service and AngularJS with grunt, an intelligent workflow and sophisticated build system - all facilitated by the addition of just a few commands!

### Ripple Emulator
**Be Advised**: [Ripple](http://ripple.incubator.apache.org/) is under active development so expect support for some plugins to be missing or broken.

Add a platform target then run `grunt ripple` to launch the emulator in your browser.
```
grunt platform:add:ios
grunt ripple
```

Now go edit a file and then refresh your browser to see your changes. (Currently experimenting with livereload for Ripple)


### Special Thanks To
* The pioneers behind [Yeoman](http://yeoman.io/) for building an intelligent workflow management solution.
* The [AngularJS Generator](https://github.com/yeoman/generator-angular) projects for inspiration.


### License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
