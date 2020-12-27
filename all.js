
$("#stop_propa").on("click", function (e) {
    e.stopPropagation();
})

var shoplist = {};
shoplist.list = [
];


var item_html = "<tr id={{id}}><td>{{num}}. {{item}}</td><td>{{set}}</td><td>{{price}}</td><td><a><i class='fas fa-trash text-muted' aria-hidden='true' style='cursor: pointer;'></i></a></td></tr>";
var total_html = "<tr><td>總價</td><td></td><td>{{price}}</td></tr>";

function showlist() {
    $("#items_list").html("");
    var total_price = 0;
    var total_set = 0;
    for (var i = 0; i < shoplist.list.length; i++) {
        var item = shoplist.list[i];
        total_price += item.price;
        total_set += item.set;
        var item_id = "buyitem_" + i;
        var current_item_html = item_html.replace("{{num}}", i + 1).replace("{{item}}", item.name).replace("{{id}}", item_id).replace("{{price}}", "$" + item.price).replace("{{set}}", item.set + "組");
        $("#items_list").append(current_item_html);
        $("#" + item_id).click(
            function () {
                remove_item(item_id);
            }
        );
    };
    var current_total_html = total_html.replace("{{price}}", "$" + total_price);
    $("#items_list").append(current_total_html);
    $("#cart_num").text(total_set);
    window.sessionStorage.setItem("data", JSON.stringify(shoplist.list));
}
// showlist();

var F = function (name, set, price) {
    const idList = shoplist.list.map(item => Object.values(item)[0]);
    if (idList.indexOf(name) == -1) {
        shoplist.list.push({
            name: name,
            set: set,
            price: price * set
        });
    }
    else {
        shoplist.list[idList.indexOf(name)].set += set;
        shoplist.list[idList.indexOf(name)].price += price * set;
    }
    showlist();
}

$("#addbtn").click(function () {
    F($("#p_name").text(), parseInt($("#input_set").val(), 10), parseInt($("#p_price").text(), 10));
});
$("#addbtn2").click(function () {
    F($("#p_name2").text(), parseInt($("#input_set2").val(), 10), parseInt($("#p_price2").text(), 10));
});
$("#addbtn3").click(function () {
    F($("#p_name3").text(), parseInt($("#input_set3").val(), 10), parseInt($("#p_price3").text(), 10));
});
$("#addbtn4").click(function () {
    F($("#p_name4").text(), parseInt($("#input_set4").val(), 10), parseInt($("#p_price4").text(), 10));
});
$("#addbtn5").click(function () {
    F($("#p_name5").text(), parseInt($("#input_set5").val(), 10), parseInt($("#p_price5").text(), 10));
});
$("#addbtn6").click(function () {
    F($("#p_name6").text(), parseInt($("#input_set6").val(), 10), parseInt($("#p_price6").text(), 10));
});
$("#addbtn7").click(function () {
    F($("#p_name7").text(), parseInt($("#input_set7").val(), 10), parseInt($("#p_price7").text(), 10));
});
$("#addbtn8").click(function () {
    F($("#p_name8").text(), parseInt($("#input_set8").val(), 10), parseInt($("#p_price8").text(), 10));
});
$("#addbtn9").click(function () {
    F($("#p_name9").text(), parseInt($("#input_set9").val(), 10), parseInt($("#p_price9").text(), 10));
});
$("#addbtn10").click(function () {
    F($("#p_name10").text(), parseInt($("#input_set10").val(), 10), parseInt($("#p_price10").text(), 10));
});
$("#addbtn11").click(function () {
    F($("#p_name11").text(), parseInt($("#input_set11").val(), 10), parseInt($("#p_price11").text(), 10));
});
$("#addbtn12").click(function () {
    F($("#p_name12").text(), parseInt($("#input_set12").val(), 10), parseInt($("#p_price12").text(), 10));
});
$("#addbtn13").click(function () {
    F($("#p_name13").text(), parseInt($("#input_set13").val(), 10), parseInt($("#p_price13").text(), 10));
});
$("#addbtn14").click(function () {
    F($("#p_name14").text(), parseInt($("#input_set14").val(), 10), parseInt($("#p_price14").text(), 10));
});

function remove_item(id) {
    shoplist.list.splice(id, 1);
    showlist();
}
