import $ from "jquery";
const _ = require('lodash');


$( document ).ready(function() {
    let count = 0;

    function updateCounter() {
        count++;
        $('#count').text(`${count} clicks on the button`);
    }
    $('body').append(
        '<p>Holberton Dashboard</p>',
        '<p>Dashboard data for the students</p>',
        '<button>Click here to get started</button>',
        '<p id=\'count\'></p>',
        '<p>Copyright - Holberton School</p>'
    );
    $('button').on('click', _.debounce(updateCounter, 500));
});
