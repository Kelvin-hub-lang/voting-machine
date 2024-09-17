document.addEventListener('DOMContentLoaded', function() {
    const wardSelect = document.getElementById('ward');
    const aspirantsContainer = document.getElementById('aspirants-container');

    // Sample aspirants data
    const aspirants = {
        "silibwet": [
            { name: "Collins Kipngetich Rono", photo: "images/collins.jpg" },
            { name: "Sharon Cherotich", photo: "images/sharon.jpg" },
            { name: "Ebeneza Kimutai Bett", photo: "images/ebeneza.jpg" },
            { name: "Japhet Yegon", photo: "images/japhet.jpg" }
        ],
        "ndaraweta": [
            { name: "Hassan Kiptoo", photo: "images/hassan.jpg" },
            { name: "Victor Kiplangat (Moi)", photo: "images/victor.jpg" }
        ],
        "chesoen": [
            { name: "Agatha Chepkemoi", photo: "images/agatha.jpg" }
        ],
        "mutarakwa": [
            { name: "Mr. Joho Ronald", photo: "images/joho.jpg" },
            { name: "Kiprotich Langat Borowo", photo: "images/kiprotich.jpg" }
        ],
        "longisa": [
            { name: "Emmanuel Kipngeno", photo: "images/emmanuel.jpg" },
            { name: "Kelvin James", photo: "images/kelvin.jpg" },
            { name: "Benjamin Ngeno", photo: "images/benjamin.jpg" }
        ],
        "kembu": [
            { name: "Kipkirui Sang Benard", photo: "images/benard.jpg" },
            { name: "Tonui", photo: "images/tonui.jpg" }
        ],
        "chemaner": [
            { name: "Amos Koech", photo: "images/amos.jpg" },
            { name: "Kipyegon Rono", photo: "images/kipyegon.jpg" }
        ],
        "merigi": [
            { name: "Korir Cheruiyot Benjamin", photo: "images/korir.jpg" },
            { name: "Patrick Kirui", photo: "images/patrick.jpg" },
            { name: "Josphat Kipkemoi", photo: "images/josphat.jpg" },
            { name: "Jalody Cherono", photo: "images/jalody.jpg" },
            { name: "Brian Kipkorir Yegon", photo: "images/brian.jpg" }
        ],
        "kipreres": [
            { name: "Kiplangat Koech Hillary", photo: "images/hillary.jpg" },
            { name: "Nehemiah Cheruiyot", photo: "images/nehemiah.jpg" },
            { name: "Nicholas Kiprotich Langat", photo: "images/nicholas.jpg" },
            { name: "Kiprotich Vincent", photo: "images/vincent.jpg" },
            { name: "Felix Cheruyot", photo: "images/felix.jpg" }
        ],
        "sigor": [
            { name: "Setek Mtoto WA Baba", photo: "images/setek.jpg" },
            { name: "Joan Chemutai", photo: "images/joan.jpg" }
        ],
        "kongasis": [
            { name: "Leonard Kiprotich Misik", photo: "images/leonard.jpg" },
            { name: "Emanuel", photo: "images/emanuel.jpg" },
            { name: "Zephenia Kenwaa", photo: "images/zephenia.jpg" }
        ],
        "chebunyo": [
            { name: "Geofry Bett", photo: "images/geofry.jpg" },
            { name: "Nosh Kibet", photo: "images/nosh.jpg" },
            { name: "Geoffrey Bett", photo: "images/geoffrey.jpg" },
            { name: "Koech Benvictor", photo: "images/koech.jpg" },
            { name: "Noah Yegon", photo: "images/noah.jpg" },
            { name: "Paul Rotich", photo: "images/paul.jpg" }
        ],
        "nyongores": [
            { name: "Kiplangat Kirui", photo: "images/kiplangat.jpg" },
            { name: "Kiplangat Kilel Robert", photo: "images/kilel.jpg" },
            { name: "Faith Chepkemoi", photo: "images/faith.jpg" },
            { name: "Festus Ngeno", photo: "images/festus.jpg" },
            { name: "Benson Koech", photo: "images/benson.jpg" },
            { name: "Kiplangat Rotich Peter", photo: "images/rotich.jpg" },
            { name: "Frankline Bett", photo: "images/frankline.jpg" },
            { name: "Collins Kipkurui", photo: "images/collins_2.jpg" },
            { name: "Kipkorir Koech Sosten", photo: "images/koseten.jpg" },
            { name: "Evans Cheruyot Bett", photo: "images/evans.jpg" },
            { name: "Kipkoech Chelule", photo: "images/kipkoech.jpg" },
            { name: "Amos Kiplangat Kirui", photo: "images/amos_2.jpg" },
            { name: "Cheruyot Clement", photo: "images/clement.jpg" },
            { name: "Chebet Korir", photo: "images/chebet.jpg" },
            { name: "Thomas Ngetich", photo: "images/thomas.jpg" },
            { name: "Ronald Ruto", photo: "images/ronald.jpg" },
            { name: "Abraham Kiprotich Korir", photo: "images/abraham.jpg" },
            { name: "Gedion Cheruyot", photo: "images/gedion.jpg" },
            { name: "Millicent Chepkorir", photo: "images/millicent.jpg" },
            { name: "Shadrack Kibet", photo: "images/shadrack.jpg" },
            { name: "Duncan Kipngeno", photo: "images/duncan.jpg" },
            { name: "Vincent Kiprotich", photo: "images/vincent_2.jpg" }
        ],
        "siongiroi": [
            { name: "Elkana Kipngeno Malema", photo: "images/elkana.jpg" },
            { name: "Cheptoyot Weldon", photo: "images/cheptoyot.jpg" }
        ],
        "ndanai_abosi": [
            { name: "Kiprotich Cheruiyot", photo: "images/kiprotich_2.jpg" }
        ],
        "kipsonoi": [
            { name: "Collins Kipkorir", photo: "images/collins_3.jpg" }
        ],
        "kapletundo": [],
        "chemagel": [
            { name: "Debra", photo: "images/debra.jpg" }
        ],
        "manaret_rongena": [
            { name: "Vincent Kipkoech Korir", photo: "images/vincent_3.jpg" }
        ],
        "kimulot": [],
        "mogogosiek": [],
        "boito": [
            { name: "Nicholus Kipkemoi", photo: "images/nicholus.jpg" }
        ],
        "embomos": [
            { name: "Mathew Maritim", photo: "images/mathew.jpg" }
        ],
        "chepchabas": [],
        "singorwet": []
    };

    // Populate aspirants based on ward selection
    wardSelect.addEventListener('change', function() {
        const ward = this.value;
        aspirantsContainer.innerHTML = '';

        if (aspirants[ward]) {
            aspirants[ward].forEach(aspirant => {
                const div = document.createElement('div');
                div.className = 'aspirant';
                div.innerHTML = `
                    <h3>${aspirant.name}</h3>
                    <img src="${aspirant.photo}" alt="${aspirant.name}" width="100">
                    <p>${aspirant.name}</p>
                    <input type="radio" name="aspirant" value="${aspirant.name}" required> Vote for this aspirant
                `;
                aspirantsContainer.appendChild(div);
            });
        } else {
            const div = document.createElement('div');
            div.className = 'no-aspirants';
            div.innerHTML = '<p>No aspirants for this ward.</p>';
            aspirantsContainer.appendChild(div);
        }
    });

    // Form validation
    document.querySelector('form').addEventListener('submit', function(event) {
        const ward = wardSelect.value;
        const aspirant = document.querySelector('input[name="aspirant"]:checked');

        if (!ward || !aspirant) {
            alert("Please select a ward and an aspirant.");
            event.preventDefault();
        }
    });

    // Fetch results every 30 seconds
    function fetchResults() {
        fetch('results.php')
            .then(response => response.text())
            .then(data => {
                document.getElementById('results-container').innerHTML = data;
            });
    }

    setInterval(fetchResults, 30000); // Fetch results every 30 seconds
});

