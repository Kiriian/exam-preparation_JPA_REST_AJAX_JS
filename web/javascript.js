$(window).load(function (URL) {
    $('path').click(function ()
    {
        var id = $(this).attr('id');
        $('path').css("fill", "#c0c0c0");
        $(this).css("fill", "#FF0000");
        var URL = "http://restcountries.eu/rest/v1/alpha?codes=" + id;
        LoadCountry(URL);
    });

    var xmlhttp;
    function loader(url, cfunc)
    {
        xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = cfunc;
        xmlhttp.open("GET", url, true);
        xmlhttp.send();
    }

    var JSONObjects;
    function LoadCountry(URL)
    {
        loader(URL, function ()
        {
            if (xmlhttp.readyState === 4 && xmlhttp.status === 200)
            {
                JSONObjects = JSON.parse(xmlhttp.responseText);
                $('#info').text(JSON.stringify(JSONObjects));
            }
        });
    }
});



