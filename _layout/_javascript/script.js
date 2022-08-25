'use strict';
// ! *********** FOR LESSONS NAMES *********** //
// ? *********** FOR REGULAR COMMENTS *********** //
const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const name = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bgs_text = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 1500);

function getData() {
  header.innerHTML = '<img src="https://source.unsplash.com/random" alt="" />';

  title.innerHTML = 'Does you know?';
  excerpt.innerHTML = 'Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet consectetur asdfasfsdipisicing elit. Magni, sed!';

  profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/27.jpg" alt="" />';

  name.innerHTML = 'Luis G';
  date.innerHTML = 'Oct, 08 2022';

  animated_bgs.forEach(function (bg) {
    bg.classList.remove('animated-bg');
  });

  animated_bgs_text.forEach(function (bgText) {
    bgText.classList.remove('animated-bg');
  });
}
