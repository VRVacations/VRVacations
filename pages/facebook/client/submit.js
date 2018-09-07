Template.submit.events({
  "click #submit"(event, instance){
    var profile = Profiles.findOne({owner:Meteor.userId()});
    console.log(Profiles.find().count());
    var now = new Date();
    var text = instance.$("#fb-posttext").val();
    var postLocation = instance.$("#fb-postloc").val();
    var postTitle = instance.$("#fb-posttitle").val();
    var postName = instance.$("#fb-postname").val();
if(postTitle == "") {
  alert("Please give your post a name. (It makes it easier for you to locate it in the future!)")
}
else if (postName=="") {
  alert("Please provide a link to your VR!")
}
else if (postLocation=="") {
  alert("Please provide a location for your VR!")
}
    else{
      console.log(Profiles.findOne({owner:Meteor.userId()}));
      var post = {
        owner:Meteor.userId(),
        name:Profiles.findOne({owner:Meteor.userId()}).name,
        createdAt: now,
        text: text,
        location: postLocation,
        title: postTitle,
        filename: postName,
      };
      console.dir(post);
      Posts.insert(post);
      alert('Your post has been submitted! Go check it out in your feed.')

    }
    }

})
Template.multi_file_upload.addEventListener
$('#multi_file_upload').change(function(e) {
    var file_id = e.target.id;

    var file_name_arr = new Array();
    var process_path = site_url + 'public/uploads/';

    for (i = 0; i < $("#" + file_id).prop("files").length; i++) {

        var form_data = new FormData();
        var file_data = $("#" + file_id).prop("files")[i];
        form_data.append("file_name", file_data);

        if (check_multifile_logo($("#" + file_id).prop("files")[i]['name'])) {
            $.ajax({
                //url         :   site_url + "inc/upload_image.php?width=96&height=60&show_small=1",
                url: site_url + "inc/upload_contact_info.php",
                cache: false,
                contentType: false,
                processData: false,
                async: false,
                data: form_data,
                type: 'post',
                success: function(data) {
                    // display image
                }
            });
        } else {
            $("#" + html_div).html('');
            alert('We only accept JPG, JPEG, PNG, GIF and BMP files');
        }

    }
});

function check_multifile_logo(file) {
    var extension = file.substr((file.lastIndexOf('.') + 1))
    if (extension === 'jpg' || extension === 'jpeg' || extension === 'gif' || extension === 'png' || extension === 'bmp') {
        return true;
    } else {
        return false;
    }
}
