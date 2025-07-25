const mainnav = document.querySelector(".navigation");
const nav = document.querySelector("nav");
const hambutton = document.querySelector("#menu");

hambutton.addEventListener("click", () => {
    nav.classList.toggle("show");
    navigation.classList.toggle("show");
    menuButton.classList.toggle("show");
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
    },
    {
        templeName: "Veracruz City Mexico",
        location: "Veracruz City, Mexico",
        dedicated: "2000, July, 9",
        area: 10700,
        imageUrl:
            "https://www.churchofjesuschrist.org/imgs/48446444a7b8d2d2aebe3e3cfc2706d7b026a464/full/3840%2C/0/default",
    },
    {
        templeName: "Cobán Guatemala",
        location: "Cobán Alta Verapaz, Guatemala",
        dedicated: "2024, June, 9",
        area: 8772,
        imageUrl:
            "https://www.churchofjesuschrist.org/imgs/4b129a33b4b311ee9c99eeeeac1e820ae5a7a3bb/full/3840%2C/0/default",
    },
    {
        templeName: "San José Costa Rica",
        location: "San José, Costa Rica",
        dedicated: "2000, June, 4",
        area: 10700,
        imageUrl:
            "https://www.churchofjesuschrist.org/imgs/6861111d8046c6d22f1f4d4f4fc0676b1e532028/full/3840%2C/0/default",
    },
];

createTempleCards(temples);

const oldTemplesLink = document.querySelector("#oldTemples");
const newTemplesLink = document.querySelector("#newTemples");
const largeTemplesLink = document.querySelector("#largeTemples");
const smallTemplesLink = document.querySelector("#smallTemples");
const allTemplesLink = document.querySelector("#allTemples");

oldTemplesLink.addEventListener("click", () => {
    createTempleCards(
        temples.filter((temple) => {
            const dedicatedYear = parseInt(temple.dedicated.split(",")[0]);
            return dedicatedYear < 1900;
        })
    );
});

newTemplesLink.addEventListener("click", () => {
    createTempleCards(
        temples.filter((temple) => {
            const dedicatedYear = parseInt(temple.dedicated.split(",")[0]);
            return dedicatedYear >= 2000;
        })
    );
});

largeTemplesLink.addEventListener("click", () => {
    createTempleCards(
        temples.filter((temple) => {
            return temple.area > 90000;
        })
    );
});

smallTemplesLink.addEventListener("click", () => {
    createTempleCards(
        temples.filter((temple) => {
            return temple.area < 10000;
        })
    );
});

allTemplesLink.addEventListener("click", () => {
    createTempleCards(temples);
});

function createTempleCards(filteredTemples) {
    document.querySelector(".container").innerHTML = "";
    filteredTemples.forEach((temple) => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedicated = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedicated.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".container").appendChild(card);
    });
}
