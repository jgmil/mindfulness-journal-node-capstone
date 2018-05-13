let user = "";
let userLoggedIn = false;

//functions, variables and object definitions


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
    $("#log-in-link").hide();
    $("#view-entries").hide();
    $("#landing").hide();
    $("#log-out-link").show();
    $(".journal-entries").show();
    $("#create-account-nav-link").hide();
    $("#new-entry").show();
};

function displayLanding() {
    $("#log-out-link").hide();
    $("log-in-link").show();
    $("#landing").show();
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
});

$(document).on("submit", "#create-account-form", function (event) {
    event.preventDefault();
    console.log("create account hit");
    const fname = $('#new-first-name').val();
    const uname = $('#new-username').val();
    const pw = $('#new-password').val();
    const confirmPw = $('#confirm-password').val();
    if (pw !== confirmPw) {
        alert('Passwords must match!');
    } else {
        const newUserObject = {
            username: uname,
            firstName: fname,
            password: pw
        };
        console.log(newUserObject);
        $.ajax({
                type: 'POST',
                url: '/users/create',
                dataType: 'json',
                data: JSON.stringify(newUserObject),
                contentType: 'application/json'
            })
            .done(function (result) {
                console.log(result);
                displayDashboard();
                //                newUserToggle = true;
                //                alert('Thanks for signing up! You may now sign in with your username and password.');
                //                showSignInPage();
            })
            .fail(function (jqXHR, error, errorThrown) {
                console.log(jqXHR);
                console.log(error);
                console.log(errorThrown);
            });
    }
});

$(document).on('click', '#view-entries', function (event) {
    event.preventDefault();
    alert("Are you sure? Your entry will be lost.");
});

$(document).on('click', '#new-entry', function (event) {
    event.preventDefault();
    $(".journal").siblings().hide();
    $(".journal").show();
    $("#view-entries").show();
    $("#new-entry").hide();
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

$(document).on("submit", "#log-in", function (event) {
    event.preventDefault();
    const inputUname = $('#username').val();
    const inputPw = $('#passwordInput').val();
    // check for spaces, empty, undefined
    if ((!inputUname) || (inputUname.length < 1) || (inputUname.indexOf(' ') > 0)) {
        alert('Invalid username');
    } else if ((!inputPw) || (inputPw.length < 1) || (inputPw.indexOf(' ') > 0)) {
        alert('Invalid password');
    } else {
        const unamePwObject = {
            username: inputUname,
            password: inputPw
        };
        console.log(unamePwObject);
        $.ajax({
                type: "POST",
                url: "/users/signin",
                dataType: 'json',
                data: JSON.stringify(unamePwObject),
                contentType: 'application/json'
            })
            .done(function (result) {
                console.log(result);
                displayDashboard();
                userLoggedIn = true;
                $("#log-in-link").hide();
                $("#loggedInUser").val(result.username);
            })
            .fail(function (jqXHR, error, errorThrown) {
                console.log(jqXHR);
                console.log(error);
                console.log(errorThrown);
                alert('Invalid username and password combination. Pleae check your username and password and try again.');
            });
    };
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

$(document).on("submit", ".journal-entry", function (event) {
    event.preventDefault();
    console.log("journal submit");
    const date = new Date();
    const intention = $('#intention').val();
    const mood = $('#mood').val();
    const medType = $('#meditation-type').val();
    const medLength = $('#length').val();
    const feeling = $('#feeling').val();
    const notes = $('#notes').val();
    const reflection = $('#reflection').val();
    const gratitude = $('#gratitude').val();
    const user = $("#loggedInUser").val();
    const newEntryObject = {
        user: user,
        date: date,
        intention: intention,
        mood: mood,
        medType: medType,
        medLength: medLength,
        feeling: feeling,
        notes: notes,
        reflection: reflection,
        gratitude: gratitude
    };
    console.log(newEntryObject);
    $.ajax({
            type: 'POST',
            url: '/entry/create',
            dataType: 'json',
            data: JSON.stringify(newEntryObject),
            contentType: 'application/json'
        })
        .done(function (result) {
            console.log(result);
            displayDashboard();
        })
        .fail(function (jqXHR, error, errorThrown) {
            console.log(jqXHR);
            console.log(error);
            console.log(errorThrown);
        });
    displayDashboard();
});

$(document).on("click", "#log-in-link", function (event) {
    event.preventDefault();
    displayLanding();
});

$(document).on("click", "#home", function (event) {
    if (userLoggedIn == true) {
        displayDashboard();
    } else {
        displayLanding();
    };
});
