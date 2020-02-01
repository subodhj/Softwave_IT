// click on search button
$('#search-btn').click(function() {
    let username = $('#search-box').val();
    let profileURL = `https://api.github.com/users/${username}`;
    $.ajax({
        method : 'GET',
        url : profileURL,
        dataType : 'json',
        success : function(data) {
            displayProfile(data);
        }
    });
});

// keyup event
$('#search-box').keyup(function () {
    let username = $('#search-box').val();
    let profileURL = `https://api.github.com/users/${username}`;
    $.ajax({
        method : 'GET',
        url : profileURL,
        dataType : 'json',
        success : function(data) {
            displayProfile(data);
        }
    });
});

// display profile
let displayProfile = function(profile) {
    $('#profile_name').text(profile.name);
    $('#profile_image').attr('src',profile.avatar_url);
    let detailsList = `<ul class="list-group">
                            <li class="list-group-item">
                                NAME : ${profile.name}
                            </li>
                            <li class="list-group-item">
                                BIO : ${profile.bio}
                            </li>
                            <li class="list-group-item">
                                COMPANY : ${profile.company}
                            </li>
                            <li class="list-group-item">
                                BLOG : ${profile.blog}
                            </li>
                            <li class="list-group-item">
                                LOCATION : ${profile.location}
                            </li>
                            <li class="list-group-item">
                                Followers : ${profile.followers}
                            </li>
                            <li class="list-group-item">
                                GitHub URL : <a href="${profile.html_url}" target="_blank">Click Here</a>
                            </li>
                        </ul>`;
    $('#details-column').empty().append(detailsList);
};
