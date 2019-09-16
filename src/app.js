import _ from 'lodash';
import * as callback from './js/helpers/callback';
import { getPostsone, createPostone } from './js/helpers/promises';
import { fetchUsers } from './js/helpers/fetch';
import { constName } from './js/helpers/const';
import { letModulus } from './js/helpers/let';
import * as arrow from './js/helpers/arrow';
import { fucntionParameters } from './js/helpers/functionparameters';
import { destructuring } from './js/helpers/destructuring';
import { shorthand } from './js/helpers/shorthand';
import { spread } from './js/helpers/spread';
import * as rock from './js/helpers/rock';
import './style.css';
import './sass/main.scss';

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
fetchUsers();

// constant
constName();

// let 
letModulus();

// arrow function
arrow.localStoragearrow();

//function Parameters
fucntionParameters();

//shorthand object properties
shorthand();

//Object destructuring
destructuring();

//spread operator
spread();


















