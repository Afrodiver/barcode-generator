function generate(){

    let type =
        document.getElementById("type").value;

    let text =
        document.getElementById("text").value;

    let scale =
        document.getElementById("scale").value;


    let url =
        `/barcode?type=${type}&text=${encodeURIComponent(text)}&scale=${scale}`;


    document.getElementById("barcode").src=url;

}



function download(format){

    let type =
        document.getElementById("type").value;

    let text =
        document.getElementById("text").value;

    let scale =
        document.getElementById("scale").value;


    window.open(
        `/barcode?type=${type}&text=${encodeURIComponent(text)}&scale=${scale}&format=${format}`
    );

}
