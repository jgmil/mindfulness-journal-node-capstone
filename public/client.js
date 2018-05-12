let user = "";
let userLoggedIn = false;

//functions, variables and object definitions



function newEntry() {
    $(".journal").siblings().hide();
    $(".journal").show();
    $("#view-entries").show();
    $("#new-entry").hide();
};

function editEntry() {
    //populate journal entry page with info
    //update entry in database
    //notification that it worked
    //display dashboard reflecting changed entry
    alert("Your journal has been updated.")
    displayDashboard;
};

function deleteEntry() {
    //delete entry in database
    //notification that it worked
    //display dashboard reflecting changes
    alert("Your entry has been deleted.")
    displayDashboard;
};

function displayDashboard() {
    //get user information to display their journal
    $(".dashboard").siblings().hide();
    $(".dashboard").show();
    $("#view-entries").hide();
    $("#landing").hide();
    $("#log-out-link").show();
    $(".journal-entries").show();
    $("#create-account-nav-link").hide();
    $("#new-entry").show();
    $("#log-in-link").show();
};

function createAccount() {
    event.preventDefault();
    console.log("creating an account");
    //validate inputs and check user info against existing
    //create their account in database
    //take them to their dashboard
    displayDashboard();
};

function displayLanding() {
    $("#log-out-link").hide();
    $("log-in-link").show();
    $(".create-account").hide();
    $("#about").siblings().not("button").hide();
    $(".dashboard").hide();
    $(".journal").hide();
    $(".journal-entries").hide();
    $(".edit-journal").hide();
};

//functions, variables and object definitions usage and triggers
$(document).ready(function () {
    displayLanding();
});

$(document).on('click', '#create-account-nav-link', function (event) {
    event.preventDefault();
    $("#create-account").siblings().hide();
    $("#create-account").show();
    $("#landing").hide();
    createAccount();
});

$(document).submit("#create-account", function (event) {
    event.preventDefault();
    displayDashboard();
});

//$("#create-account").submit(function () {
//    event.preventDefault();
//    displayDashboard();
//});

$(document).on('click', '#view-entries', function (event) {
    event.preventDefault();
    alert("Are you sure? Your entry will be lost.");
});

$(document).on('click', '#new-entry', function (event) {
    event.preventDefault();
    console.log("newEntry");
    newEntry();
});

$(document).on('click', '.update', function (event) {
    event.preventDefault();
    console.log("editEntry");
    editEntry();
});

$(document).on('click', '.delete', function (event) {
    event.preventDefault();
    console.log("delete entry");
    deleteEntry();
});

$(document).on('click', '#log-out-link', function (event) {
    event.preventDefault();
    location.reload();
});

$(document).submit("#log-in", function (event) {
    event.preventDefault();
    user = $("#username").val();
    let userPassword = $("#passwordInput").val();
    userLoggedIn = true;
    console.log(user);
    console.log(userPassword);
    displayDashboard();
    $("#log-in-link").hide();
});

$(document).on('click', '#about-button', function (event) {
    event.preventDefault();

    $("#about").siblings().not("button").hide();
    $("#about").show();
});

$(document).on('click', '#about-mindfulness-button', function (event) {
    event.preventDefault();
    $("#mindfulness-description").siblings().not("button").hide();
    $("#mindfulness-description").show();
});

$(document).on('click', '#benefits-button', function (event) {
    event.preventDefault();
    $("#benefits").siblings().not("button").hide();
    $("#benefits").show();
});

$(document).on('click', '#resources-button', function (event) {
    event.preventDefault();
    $("#resources").siblings().not("button").hide();
    $("#resources").show();
});

$(document).on('click', '#info-link', function (event) {
    event.preventDefault();
    $(".info").show();
    $(".info").siblings().hide();
    $("#landing").hide();
});

$(document).submit(".journal-entry", function (event) {
    event.preventDefault();
    console.log("journal submit");
    //post new entry
    //get entries and display dashboard with journal
    displayDashboard();
});

$(document).on("click", "#log-in-link", function (event) {
    event.preventDefault();
    //log in the user
    displayLanding();
});

$(document).on("click", "#home", function (event) {
    if (userLoggedIn == true) {
        displayDashboard();
    } else {
        displayLanding();
    };
});
