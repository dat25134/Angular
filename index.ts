function getAPI(){
    let q = $('#search').val();
    $.ajax({
        url: "https://api.github.com/search/repositories?q="+q,
        dataType: 'json',
        method: 'get',
        success: function(data):void{
            console.log(data);
            document.getElementById('listItem').innerHTML = listItem(data.items);
        }
    });
}

function listItem(data){
    let item = '<div>';
    item+="<h5> Có "+ (data.length) +" kết quả tìm kiếm</h5>"
    console.log(data);
    $.each(data,function(i,v){    
        item += `<div>
            <h2> ${v.name}</h2> 
            <p> ID: ${v.id} </p>    
        </div>`;
    });
    item+= '</div>';
    return item;
}