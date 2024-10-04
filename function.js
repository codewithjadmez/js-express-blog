const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'blog.json');

function readJsonFile() {
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
}

function writeJsonFile(data) {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

function ajouterBlog(titre, description) {
    const jsonData = readJsonFile();
    const nouveauBlog = { titre, description };
    jsonData.blog.push(nouveauBlog);
    writeJsonFile(jsonData);
}

function supprimerBlog(titre) {
    const jsonData = readJsonFile();
    jsonData.blog = jsonData.blog.filter(blog => blog.titre !== titre);
    writeJsonFile(jsonData);
}

function modifierBlog(titre, nouveauTitre, nouvelleDescription) {
    const jsonData = readJsonFile();
    const blog = jsonData.blog.find(blog => blog.titre === titre);
    if (blog) {
        blog.titre = nouveauTitre || blog.titre;
        blog.description = nouvelleDescription || blog.description;
        writeJsonFile(jsonData);
    }
}

function afficherBlog(titre) {
    const jsonData = readJsonFile();
    if (titre) {
        const blog = jsonData.blog.find(blog => blog.titre === titre);
        if (blog) {
            return `Le titre est : ${blog.titre}\n la description est : ${blog.description}`;
        } else {
            return `Le blog avec le titre "${titre}" n'existe pas.`;
        }
    }
}

function afficherBlogs() {
    const jsonData = readJsonFile();
    return jsonData.blog.map(blog => `Le titre est : ${blog.titre}\nEt la description est : ${blog.description}`).join('\n\n');
}

module.exports = {
    ajouterBlog,
    supprimerBlog,
    modifierBlog,
    afficherBlog,
    afficherBlogs
};
