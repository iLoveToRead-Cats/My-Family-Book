var album = [
    "https://lh3.googleusercontent.com/proxy/rO7I3q118lurIrBdea1yq7K5FlnbCHaLTImaWz_EPBYG4hVZvGS2mFm_acDkouQaikV_iw0WIHmF086jRwR4uS0jkXPe5LU3886rd-h8HQ",

    "https://lh3.googleusercontent.com/proxy/G8GTUSE3w4SjQDQEBlmoSKqaEV-JqklaexxE-EGBTKbGRV6slcYa0qbdtswaGYtUeN-CENTqAdUL9G28yyI8hDPkvoQ6i-vlhER0e-RbbUoX0HHePAw4_LCPs2Vrkaj4pwiBaONeMgff6b6pauCbppdsqLWb",

    "https://lh3.googleusercontent.com/proxy/B-QNQbduWYfPjksCbEFVHV2qtE3HO047oflB4onbGqshBDMRpK9xfj8CE6L9FWfJP45aV-H9glqlLdyOuf9SLZpN",

    "https://lh3.googleusercontent.com/proxy/e2x-ls3Pi3PGWZ9YJ90iET2ELhXd9H5oOpZBRBXTCT6var3loErpDOas-U8Zs5ryAWq_gn_Jd317_rdAxgolJ31i",

    "https://www.pngitem.com/pimgs/m/14-147060_clip-art-african-american-girl-png-download-african.png"
];

var text = [
    "Dad", "Mom", "Younger Sister", "Baby Sister", "Me"
];

var i = 0;

function move() {

    if (i == 6) {
        i = 0;
    }

    i++;
    document.getElementById("name").innerHTML = text[i];
    document.getElementById("photos").src = album[i];

}
