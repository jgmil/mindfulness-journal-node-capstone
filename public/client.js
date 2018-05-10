let user = "";

//functions, variables and object definitions
function showInfo() {
    $("#about-button").click(function () {
        $("#about").siblings().not("button").hide();
        $("#about").show();
    });
    $("#about-mindfulness-button").click(function () {
        $("#mindfulness-description").siblings().not("button").hide();
        $("#mindfulness-description").show();
    });
    $("#benefits-button").click(function () {
        $("#benefits").siblings().not("button").hide();
        $("#benefits").show();
    });
    $("#resources-button").click(function () {
        $("#resources").siblings().not("button").hide();
        $("#resources").show();
    });
    $("#info-link").click(function () {
        $(".info").show();
    });
};

function logIn() {
    $("#log-in-button").click(function () {
        event.preventDefault();
        user = $("#username").val();
        let userPassword = $("#passwordInput").val();
        console.log(user);
        console.log(userPassword);
        displayDashboard();
    });
    //validate inputs
    //validate user info with database
    //take user to their homescreen:
};

function newEntry() {
    $(".journal").siblings().hide();
    $(".journal").show();
    $("#view-entries").show();
    $("#new-entry").hide();
    $("#view-entries").click(function () {
        alert("Are you sure? Your entry will be lost.");
    });
    $(".journal-submit").click(function () {
        event.preventDefault();
        //post new entry
        //get entries and display dashboard with journal
        displayDashboard;
    });
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
    $("#new-entry").click(function () {
        newEntry();
    });
    $("#update").click(function () {
        editEntry();
    });
    $("#delete").click(function () {
        deleteEntry();
    });
    $("#log-out-link").click(function () {
        logOut();
    });
};

function createAccount() {
    $("#create-account-nav-link").click(function () {
        $("#create-account").siblings().hide();
        $("#create-account").show();
        $("#landing").hide();
    });
    $("#create-account-button").click(function () {
        event.preventDefault();
        displayDashboard();
    });
    //validate inputs and check user info against existing
    //create their account in database
    //take them to their dashboard
};

function logOut() {
    user = "";
    displayLanding();
};

function displayLanding() {
    $("#log-out-link").hide();
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
    showInfo();
    createAccount();
    logIn();
});
