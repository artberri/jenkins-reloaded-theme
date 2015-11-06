# Jenkins Reloaded Theme

You have probably arrived here because you think that the official Jenkins UI is horrible, me too. This is my attempt to improve it a bit.

![Screenshoot](/screenshot.png?raw=true "Screenshoot")

## Installation 

1. Install the [JQuery Plugin][jquery]

1. Install the [Simple Theme Plugin][simple]

1. Click `Manage Jenkins`

1. Click `Configure System` and scroll down to `Theme`

1. Fill the `URL of theme CSS` field with `https://cdn.rawgit.com/artberri/jenkins-reloaded-theme/master/dist/reloaded.css`

1. Fill the `URL of theme JS` field with `https://cdn.rawgit.com/artberri/jenkins-reloaded-theme/master/dist/reloaded.min.js`

1. Click `Save`

## Customization

To customize this plugin the best way is to make a [fork](https://help.github.com/fork-a-repo/) and make there any custom modification. 

### Development Environment Setup

To make sure, that the following instructions work, please install the following dependencies on you machine:

- Node.js
- npm
- Git
- Ruby and rubygems

If you install node through the binary installation file, **npm** will be already there.

When **npm** is installed, use it to install the needed npm global packages:

- grunt-cli `npm install -g grunt-cli`

When **rubygems** is installed, use it to install the needed global gems:

- bundler `gem install bundler`

To get the source of `jenkins-reloaded-theme` clone the git repository via:

````
$ git clone https://github.com/<your-username>/jenkins-reloaded-theme.git
````

This will clone the complete source to your local machine. Navigate to the project folder and install all needed grunt dependencies via **npm**:

````
$ npm install
````

Install also compass and the sass linter gems via **bundler**:

````
$ bundle install
````

`jenkins-reloaded-theme` is now installed and ready to be customized.

### Building

`jenkins-reloaded-theme` comes with a few **grunt tasks** which help you to automate the development process. The following grunt tasks are provided:

#### `grunt`

Running `grunt` without any parameters, will execute the default task: `serve`.

#### `grunt lint`

Executes the javascript (`eslint`) and the sass (`scss_lint`) linters to make sure that your code follow the conventions.

#### `grunt test`

Right now is an alias of `grunt lint`.

#### `grunt serve`

It's a useful task that will create a web server and will build the project with any change you make (`connect` + `watch`).

#### `grunt build`

You only have to use this task, if you want to generate a production ready build of `jenkins-reloaded-theme`. This task will also **lint** the source.

### Installing your custom theme

You need to push the changes to your fork and follow the installation intruction replacing the URLs with these:

* `https://cdn.rawgit.com/<your-username>/jenkins-reloaded-theme/master/dist/reloaded.css`
* `https://cdn.rawgit.com/<your-username>/jenkins-reloaded-theme/master/dist/reloaded.min.js`

## Credits

* [RawGit][rawgit]
* [Roboto Font][roboto]
* Icons made by [Freepik](http://www.freepik.com) and [Icon Works](http://www.flaticon.com/authors/icon-works) from [www.flaticon.com](http://www.flaticon.com) is licensed by [CC BY 3.0](http://creativecommons.org/licenses/by/3.0/)

## Links

* [Contribution Guidelines](/CONTRIBUTING.md)
* [License](/LICENSE)

[jquery]: https://wiki.jenkins-ci.org/display/JENKINS/jQuery+Plugin
[simple]: https://wiki.jenkins-ci.org/display/JENKINS/Simple+Theme+Plugin
[roboto]: https://www.google.com/fonts/specimen/Roboto
[rawgit]: http://rawgit.com/
