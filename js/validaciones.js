function camposCorrectos({ titulo, linkTrailer }) {
    if (titulo == "" || titulo.trim() == "") {
      swal({
        title: "Error!",
        text: "El titulo no puede estar vacio",
        imageUrl: "https://ekiensnews.com/wp-content/uploads/2022/03/Oscars-Will-Smith-slaps-Chris-Rock-over-Jada-Pinkett-Smith-scaled.jpg",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image"
      });
      return false;
    }
    if (linkTrailer == "" || linkTrailer.trim() == "") {
      swal({
        title: "Error!",
        text: "El link del trailer no puede estar vacio",
        imageUrl: "https://ekiensnews.com/wp-content/uploads/2022/03/Oscars-Will-Smith-slaps-Chris-Rock-over-Jada-Pinkett-Smith-scaled.jpg",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image"
      });
      return false;
    }
    return true;
  }