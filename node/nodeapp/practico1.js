var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    var url = req.url;
    var post1    = "https://external.faep7-1.fna.fbcdn.net/safe_image.php?d=AQDK-zWnIHBITHHC&w=500&h=261&url=https%3A%2F%2Fblog.us.playstation.com%2Ftachyon%2Fsites%2F3%2F2020%2F04%2F49786316857_f57dcac4ea_ka.jpg&cfs=1&ext=jpg&_nc_hash=AQAhaLXUtGkPszUx";
    var post2    = "https://external.faep7-1.fna.fbcdn.net/safe_image.php?d=AQBk29HkDbbNcIhC&w=500&h=261&url=https%3A%2F%2Fi.ytimg.com%2Fvi%2F0t5XAvFMS40%2Fmaxresdefault.jpg&cfs=1&sx=0&sy=17&sw=1280&sh=668&ext=jpg&_nc_hash=AQBrMUe9AWnBsxKw";
    var post3    = "https://external.faep7-1.fna.fbcdn.net/safe_image.php?d=AQB5cYI3aDaAEnh3&w=500&h=261&url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FRl-sJqxmmz0%2Fmaxresdefault.jpg&cfs=1&sx=0&sy=17&sw=1280&sh=668&ext=jpg&_nc_hash=AQBM4G4rep6ASLl7";
    var profile  = "https://scontent.faep7-1.fna.fbcdn.net/v/t1.0-9/76897222_2636224256468145_4246619209926180864_n.jpg?_nc_cat=106&_nc_sid=09cbfe&_nc_oc=AQl16n6AKs_9j3g9zYrY2eOVgzdHcbu8_mVcT-_QbhehsYPVHqFoIrqmWuI-X_oEVbg&_nc_ht=scontent.faep7-1.fna&oh=dfb43c127126414f72a8f257268205f5&oe=5EC4417C";

    if(url ==='/settings'){
        res.write('<h1>Settings us page<h1>');
        res.write("<img style='height: 100px' src='" + profile + "'/>");
        res.write('<h3>Nombre: Alex<h3>');
        res.write('<h3>Apellido: Villecco<h3>');
        res.write('<h3>Fecha de nacimiento: 01/09/89<h3>');
    } else{
        res.write('<h1>RollingBook<h1>');
        res.write('<h3>Bienvenido, Alex Villecco<h3>');
        res.write('<h2>Publicaciones:<h2>');

        res.write("<img src='" + post1 + "'/>");
        res.write('<h3>Dos Años con God of War<h3>');

        res.write("<img src='" + post2 + "'/>");
        res.write('<h3>RASTACUANDO - LA ROMPE IMPROVISANDO!!<h3>');

        res.write("<img src='" + post3 + "'/>");
        res.write('<h3>Minimalismo (Trailer con subtítulos en Español)<h3>');
    }
    res.end();
    
    }).listen(3000, function(){
        console.log("server start at port 3000");
});