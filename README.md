# Frontend coding challenge - Escape

## Context

This challenge is close to a real tasks we expect from frontend developers at Escape: being able to imagine an user interface and bring it to life using a frontend framework, and a given API.

## Task

We have built a very simple banking-like API, and created a javascript client for it. 

Your task: 
Design, and code a Single Page App UI that allows *at least* a registered user to

* Log himself in
* Show his transactions and search through them
* Create new transactions

Using the API we made available.

## Deliverable

We expect a clonable git repository (Like on github or gitlab), with the source code and instruction on how to start the frontend locally - if it's more complicated than `npm install && npm run dev`. 

You should send the link of the repository to tristan@escape.tech and antoine@escape.tech

You can pick the frontend framework of your choice (Namely Angular, React, or Vue).

You are welcome to join any design files or drawings you used before starting to code - though it is up to you to decide creating mockups or not considering the timeframe.

## Ressources
* The Qontoz banking API javascript client (client.js)
* Examples of API usage (examples.spec.js)
* Your favorite frontend boilerplate
* Any javascript library you need on npm

## Evaluation

We will take into account
* Usability
* Code quality
* Design (We value perfectly mastered simplicity as well as original experimentations - don't hesitate to be creative)

## How to use the client script ?

Run
```bash=
npm install
npm run test
```

Inside the repository. It will launch the `examples.spec.js` file which contain examples on how to use the client script to communicate with the API.

To use it in your project, you can simply copy paste the client script inside your repository. be sure to install axios as a dependency.

## Notes

The banking API is far from being perfect, it is actually quite vulnerable to security flaws. That's on purpose: we also use it for cybersecurity recruitements challenges, in which candidates have to find all it's security vulnerabilities.
