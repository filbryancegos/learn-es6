import _ from 'lodash';
import * as callback  from './js/helpers/callback';
import { getPostsone, createPostone } from './js/helpers/promises';
//import { fetchUsers } from './js/helpers/fetch';
import { constName } from './js/helpers/const';
import { letModulus } from './js/helpers/let';
//import * as arrow from './js/helpers/arrow';
import { fucntionParameters } from './js/helpers/functionparameters';
import { destructuring } from './js/helpers/destructuring';
import { shorthand } from './js/helpers/shorthand';
import { spread } from './js/helpers/spread';
//import * as rock from './js/helpers/rock';
// import { fetchapi } from './js/helpers/fetchapi';
import storage  from './js/helpers/storage'

storage.put('name','bryan')
.then(value => {
  const val = value;
  console.log(val)
})
.catch(err => {
  console.log("failed to set value")
})

storage.get('name')
.then(value => {
  console.log(value)
})
.catch(err => {
  console.log("failed to get value")
})

import './style.css';
import './sass/main.scss';

import * as apps from './js/apps';

const sum = apps.sum(12,12);


const string = 'the quick brown fox jump over the lazy dog';

// console.log(apps.trim(string));
// console.log(sum);

const a = ['bryan','egos','eking']
const b = ['eking','brutos','amang'];
const all = [...a,...b];
// console.log(all);

const [fname,lname] = ['bryan','egos'];
// console.log(fname);

const amang = {
  ek: 'bryans',
  brt: 'egoss'
}

const {ek,brt} = amang;
//console.log(ek);
//console.log(brt);


//callback
const newpost = {
  title: 'post four', content:'the quick brown fox jump over the lazy dog four'
}
callback.createPosts(newpost,callback.getPosts)

//promises
createPostone({title: 'post five', content: 'the quick brown fox jump over the lazy dog five'})
    .then(getPostsone)
    .catch(err => console.log(err))

//fetch
//fetchUsers();

// constant
//constName();

// let 
//letModulus();

// arrow function
//arrow.localStoragearrow();

//function Parameters
//fucntionParameters();

//shorthand object properties
//shorthand();

//Object destructuring
//destructuring();

//spread operator
//spread();


















