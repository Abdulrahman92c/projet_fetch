class Controller {
    async loadContent() {
        console.log("loaded");

        const result = await fetch("./api/voiture.json", {
            cache: 'no-cache'
        });

        const data = await result.json();
        const el = document.querySelector("section ul");
        console.log(el);

        /* iteration pour afficher les noms */

        for (let index of data) {
            console.log(`${index.marque} ${index.annee} ${index.image}`);
            el.innerHTML += `<li>Marque : ${index.marque}</li>
                            <li>Année : ${index.annee}</li>
                            <li>Type : ${index.type}</li>
                            <li>Etat : ${index.etat}</li>
                            <li>Description : ${index.description}</li>
                            <li> <img src ="${index.image}" alt="${index.marque}"></li>`;
        }
    
        // Récupère l'année courante
    const currentYear = new Date().getFullYear();
    // Met à jour le contenu du span
    document.querySelector("footer p").textContent = currentYear + " - Abdulrahman Chahdi";
    }
};

export const newController = new Controller();
