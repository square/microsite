---
permalink: /mobile-interview-project/
title: "Mobile Take-Home Project"
author_profile: false
header:
  overlay_image: /assets/images/block-header.png
---

# Hello!

Thank you for choosing to interview at Block! We are so excited for you and we hope that you have a great experience with us.

This site outlines the info and guidelines you’ll need to complete Block’s Mobile Take-Home Project: an employee directory app.

You’ll have a week to complete the question – the actual engineering work should take about 4-5 hours, and you can split this across the week however you see fit (all at once, over a few days, etc). If you have any questions during the process, please share them with your recruiting contact and we’ll get back to you ASAP.

Good luck!

# Overview

Build an employee directory app that shows a list of employees from the provided endpoint.

The app should display a list (or any kind of collection view!) which shows all the employees returned from the JSON endpoint described below. Each item in the view should contain a summary of the employee, including their photo, name, and team at minimum. You may add more information to the summary if you want, or sort employees in any fashion you’d like – sort and group by name, team, etc.

There should be some UX to reload the employee list from within the app at any time. The UX can be done in any way you want: a button, pull-to-refresh, etc.

If there is any additional UI/UX you would like to add, feel free to do so! We only ask that you please do not build any more screens than this list. Do not worry about building custom controls or UI elements – using system-provided, standard elements is totally fine.

Be sure to appropriately handle the normal variety of errors when querying an endpoint. The app should display useful loading, empty, and error states where appropriate. If images fail to load, displaying a placeholder is fine.

One extra thing we ask is that you please ensure you do not use more network bandwidth than necessary – load expensive resources such as photos on-demand only.

The employee list should not be persisted to disk. You can reload it from the network on each app launch and when refresh is requested — but no more often than that unintentionally. (Android developers in particular should take care not to make redundant network calls when the phone is rotated, or when memory is low).

Images, however, should be cached on disk so as to not waste device bandwidth. You may use an open source image caching solution, or write your own caching. Do not rely upon HTTP caching for image caching.

Note that photos at a given URL will never change. Once one is loaded, you do not need to reload the photo. If an employee’s photo changes, they will be given a new photo URL.

Tests should be provided for the app. We do not expect 100% code coverage, so please use your best judgment for what should be tested. We’re also interested only in unit tests. Feel free to skip snapshot or app tests.

# Details

## JSON Endpoints

We have provided an endpoint, which when called, returns a dictionary containing a JSON array, containing employee information for a fictitious list of employees. Each item in the array represents an employee.

 * [https://s3.amazonaws.com/sq-mobile-interview/employees.json](https://s3.amazonaws.com/sq-mobile-interview/employees.json)

There are also other endpoints you can call to simulate error states such as malformed employees, and an empty employee list:

 * [https://s3.amazonaws.com/sq-mobile-interview/employees_malformed.json](https://s3.amazonaws.com/sq-mobile-interview/employees_malformed.json)
 * [https://s3.amazonaws.com/sq-mobile-interview/employees_empty.json](https://s3.amazonaws.com/sq-mobile-interview/employees_empty.json)

If any employee is malformed, it is fine to invalidate the entire list of employees in the response - there is no need to exclude only malformed employees.

If there are no employees to show, the app should present an empty state view instead of an empty list.

There is no pagination API - the endpoint returns the full list of employees. The endpoint is also not authenticated.

## JSON Structure

|**Key**|**Type**|**Required?**|**Notes**|
| :- | :- | :- | :- |
|uuid|string|yes|The unique identifier for the employee. Represented as a UUID.|
|full\_name|string|yes|The full name of the employee.|
|phone\_number|string|no|The phone number of the employee, sent as an unformatted string (eg, 5556661234).|
|email\_address|string|yes|The email address of the employee.|
|biography|string|no|A short, tweet-length (~300 chars) string that the employee provided to describe themselves.|
|photo\_url\_small|string|no|The URL of the employee’s small photo. Useful for list view.|
|photo\_url\_large|string|no|The URL of the employee’s full-size photo.|
|team|string|yes|The team they are on, represented as a human readable string.|
|employee\_type|enum <br/>(FULL\_TIME, PART\_TIME, CONTRACTOR)|yes|How the employee is classified.|

```json
    {
      "employees" : [
        {
          "uuid" : "some-uuid",
          "full_name" : "Eric Rogers",
          "phone_number" : "5556669870",
          "email_address" : "erogers.demo@squareup.com",
          "biography" : "A short biography describing the employee.",
          "photo_url_small" : "https://some.url/path1.jpg",
          "photo_url_large" : "https://some.url/path2.jpg",
          "team" : "Seller",
          "employee_type" : "FULL_TIME",
        },
        ...
      ]
    }
```

# Other Details

## Use What You Know

We’re looking to see you at your best – as such, please use the language and frameworks you’re most comfortable with on your chosen mobile platform. This means that if you’re most proficient with Objective-C or Java, use that – don’t feel pressured to use Swift or Kotlin!

Similarly, don’t feel pressured to use SwiftUI, Compose, and/or other libraries and techniques that you are unfamiliar with. We’re not going to prefer answers in one language over another, but we will expect you to be comfortable and proficient with your choices.

## Show Us Your Strengths

As you’re working on your app, feel free to focus your time and energy on your areas of expertise. If you’re a really great architect, focus on that. If you’re really great at building UI, focus on that. We really want to see what you’re best at.

Let us know what you’re particularly proud of or what you focused on in the README.

## Show Us Your Best Code Too

We definitely want to value your time, but we’re also evaluating you based on this app! So please do try to write code that you’d be comfortable sharing with your coworkers, or shipping to production.

We want to see what working with you is like! If there are things you might do differently, please let us know in your README.

## Include a README!

We've provided a README template that we'd like you to include in your source code and fill out. We hope that this will help us more accurately evaluate your project. Make a file called README.md in the root of your project folder and fill this template out!

```markdown
## Build tools & versions used

## Steps to run the app

## What areas of the app did you focus on?

## What was the reason for your focus? What problems were you trying to solve?

## How long did you spend on this project?

## Did you make any trade-offs for this project? What would you have done differently with more time?

## What do you think is the weakest part of your project?

## Did you copy any code or dependencies? Please make sure to attribute them here!

## Is there any other information you’d like us to know?
```

# Submitting The Final Project

Please zip up the project and email it to your recruiter. This can be either flat files, or a git repo containing your development history.

Please be sure to remove unnecessary build or generated files, as these can greatly increase the size of the zip file. During evaluation we will build your app from source. If you use git, you can run `git clean -fdx` to delete the uncommitted files.

# 🏢 Onsite Interview Additions

When you come in for your virtual onsite interview, you will work with two engineers over the course of two pair programming sessions (1 hour each) to add more functionality to your application. **Because of this, please don’t build more features than we outline here!**

During the interview, the interviewer will also ask you about architecture choices you made while building the app. Please be prepared to answer these questions as they come up!

# FAQ

 * Q) **What are you looking for? What is the right answer?**

There isn’t one right answer! We’re really looking to see how you approach the problem.

Very broadly, we’re looking at the quality, structure, maintainability, testability of your code, how well you’ve captured all the requirements, how well the app runs and behaves, and what your strengths in mobile app development are.

We really want to see what “production-ready” mobile code looks like to you. If you had to compromise for the sake of speed, let us know in your README like you would in a PR review!

 * Q) **How long should I spend on the solution / how long should the solution take?**

We estimate the solution should take 4-5 hours. Many candidates say they took around 5 hours. Feel free to split up this time as best works for you. If you really enjoy the project, feel free to spend some more time, but we do ask that you stop after 8 hours to avoid spending too much time.

If there are more changes you wanted to include but didn’t have time to, please do let us know in the README!

 * Q) **Do I need to worry about separate mobile and tablet UIs?**

Feel free to focus on either mobile or tablet, but please note in the README which one you were focused on so we can test on the proper device.

 * Q) **What quality should the code in the final app be?**

Treat the code as if you’re merging it to your main branch in a real app.

So, please try to take as few shortcuts and use as few hacks as possible. If you do need to take some shortcuts for the sake of time, please note so in a code comment and the README.

We’re looking for code as close to the real world as possible, so please utilize best practices for architecture and testability, and tell us in the README if you had to compromise.

 * Q) **Do I need to worry about future extensibility?**

Nope! Focus on solving the problem at hand. If generalizing / abstracting a problem makes it easier to solve, or helps you test it, go for it! But generally, do not worry about this.

 * Q) **Can I look at Google / Stack Overflow / my current app / etc while working on this?**

Definitely! Please utilize as many Google searches and Stack Overflow searches as needed. We want your work on this project to mirror “real” development as closely as possible.

That being said, please do not bulk copy and paste large sections of code from 3rd party sources, as this would defeat the purpose of the evaluation. If you do copy in code, please note as such in your README.

 * Q) **Can I utilize code I’ve written for my personal / side projects?**

Do feel free to copy in (or pull in as a dependency) utility functions, classes, types (etc) you usually bring into your personal projects, as long as you wrote them. Please note which code is copied in your README.

Please do not use code from previous/current employers, for IP/legal reasons :-)

 * Q) **What programming languages can I use?**

Please utilize Java or Kotlin for Android, or Objective-C or Swift for iOS.
Do not feel pressured or required to use Swift or Kotlin if you’ve primarily worked in Objective-C or Java in the past – use whatever you’re most comfortable with! For context, Square still has plenty of Objective-C and Java, and will for some time.

For this project, please do not utilize cross-platform SDKs such as React Native, Flutter, Phonegap, Cordova, etc.

 * Q) **Can I use 3rd party frameworks and libraries?**

Sure – feel free to use frameworks and libraries you’d consider essential in your application development process. These might include your preferred frameworks and libraries for handling dependency injection, network requests, JSON deserialization, etc.

If you copy 3rd party framework or library source files into your project, make sure that you attribute them in the relevant section of the README.

And of course, using 1st-party frameworks that come with iOS or Android are fine!

 * Q) **What build systems & build tooling should I use?**

Please utilize platform-standard build systems and tooling. If you decide to use tooling such as CocoaPods or Bazel to assist in project configuration and set up, or any other tooling that might make it hard for us to run your code from the IDE or command line, please explain in your README how to get the app up and running.

 * Q) **Does UI design / UI appearance matter?**

Do not worry about building custom controls. Using standard system UI controls are totally fine.

There’s no need to make the UI look amazing, but if that’s a strength of yours, definitely please show us!

 * Q) **Does on-device performance matter?**

Sort of: phones and tablets are pretty fast these days, so there’s no need to prematurely optimize anything or do microbenchmarks. Please do try to make sure that there aren’t any problems when using the app (like dropped frames, freezing).

That being said, do consider network usage: we will want to lazy load images in order to avoid wasting the user’s data plan, and not call the employee list service more than necessary.

 * Q) **For iOS, can I use xibs and storyboards?**

Feel free to utilize xibs and storyboards – however note that we generally do not use them at Block.

 * Q) **Can I use SwiftUI (iOS) or Compose (Android)?**

Feel free to do so. We are adopting Compose now on Android! However, note that we do not (yet) write code in Swift UI at Block.

 * Q) **Is there a minimum SDK version or deployment target we should use?**

There is none, so feel free to use what you’re comfortable with, or what you think makes sense.

For Android, ideally the minimum will be between 16 and 26.

For iOS, Block apps support iOS 12 and later. Any version after that is fine.

 * **Q) Something else not covered here?**

Write to your recruiter and we’ll get back to you ASAP!

# _Best of luck!_
