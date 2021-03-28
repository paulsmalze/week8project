$(document).ready(function(){
    $(".RandomUser").click(function(){
        //console.log('inside the click')
        var number = $("input").val();
        $("input").val("");
        $.ajax({
            url:`https://randomuser.me/api/?results=${number}`,
            dataType:"json",
            success: (function(res){

            $('.users').html(`
            <img src="${res.results[0].picture.large}">
            <h3>${res.results[0].name.first} ${res.results[0].name.last}</h3>
            <h4>${res.results[0].dob.age}</h4>
            <h4>${res.results[0].email}</h4>
            <h4>${res.results[0].location.street.number} ${res.results[0].location.street.name} ${res.results[0].location.city} ${res.results[0].location.country} ${res.results[0].location.postcode}</h4>
            `)
            })
            
        })
    })
})