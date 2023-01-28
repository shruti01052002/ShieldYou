import { wait } from './utils.js';

const proxy = 'https://tranquil-waters-17051.herokuapp.com/';
const endpoint = 'https://raw.githubusercontent.com/rebeccaestes/yoga_api/master/yoga_api.json';
const form = document.querySelector('form.search');
const posesGrid = document.querySelector('.wrapper .poses');


// data = array of all 46 poses
async function fetchPoses() {
    const res = await fetch(`${proxy}${endpoint}`);
    const data = await res.json();
    return data;
}


// add property target_bodypart to all objects 
// in array data of [mind, heart, legs, neck, arms] randomnly
var bodyparts = ['mind', 'heart', 'legs', 'neck', 'arms', 'back', 'core', 'chest'];
var target_bodypart;


function getBodyparts(object) {
    object.target_bodypart = `${bodyparts[Math.floor(Math.random() * 7)]}`;
    // return object[target_bodypart];
}


//return array of objects having common property as target_bodypart

async function handleSubmit(event) {
    event.preventDefault();
    const el = event.currentTarget;
    console.log(form.query.value);
    fetchAndDisplay(form.query.value);
}

async function fetchAndDisplay(query) {
    form.submit.disabled = true;
    const allPoses = await fetchPoses();
    wait(1000);
    var objects = Object.create(allPoses);
    for (let i = 0; i < objects.length; i++) {
        getBodyparts(objects[i]);
        console.log(objects[i]);
    }
    form.submit.disabled = false;

    var result = [];
    for (let i = 0; i < objects.length; i++) {
        if (objects[i].target_bodypart === query) {
            console.log(objects[i]);
            result.push(objects[i]);
        }
    }
    displayPoses(result);
}

async function displayPoses(poses) {
    console.log('👩‍🎓 We are on it!! Creating HTML');
    const html = poses.map(
        pose => `<div class="pose">
        <h2>${pose.sanskrit_name}</h2>
        <h4>Target body part : ${pose.target_bodypart}</h4>
        <p>${pose.english_name}</p>
        ${pose.img_url &&
            `<img src="${pose.img_url}" alt="${pose.title}"/>`}
        <a href="#">Watch video lesson ↪</a>
        </div>`
    );
    posesGrid.innerHTML = html.join('');
}

form.addEventListener('submit', handleSubmit);

// on page load initialize it with 'mind' as query for user to get familiar
fetchAndDisplay('mind');
