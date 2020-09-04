function getAPI() {
    var q = $('#search').val();
    $.ajax({
        url: "https://api.github.com/search/repositories?q=" + q,
        dataType: 'json',
        method: 'get',
        success: function (data) {
            console.log(data);
            document.getElementById('listItem').innerHTML = listItem(data.items);
        }
    });
}
function listItem(data) {
    var item = '<div>';
    item += "<h5> Có " + (data.length) + " kết quả tìm kiếm</h5>";
    console.log(data);
    $.each(data, function (i, v) {
        item += "<div>\n            <h2> " + v.name + "</h2> \n            <p> ID: " + v.id + " </p>    \n        </div>";
    });
    item += '</div>';
    return item;
}
