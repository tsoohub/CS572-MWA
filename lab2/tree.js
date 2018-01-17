const tree = {
    name: "home",
    files: ["notes.txt", "todo.txt"],
    subFolders: [
        {
            name: "payroll",
            files: ["paper.pdf", "funds.csv"],
            subFolders: []
        },
        {
            name: "misc",
            files: ["summer1.jpg", "summer2.jpg", "summer3.jpg"],
            subFolders: [
                {
                    name: "logs",
                    files: ["logs1", "logs2", "logs3", "logs4"],
                    subFolders: []
                }]
        }]
};

const find = file => tree => {
   
    if (tree.files.filter(fi => fi == file).length != 0)
        return true;

    for (const folder of tree.subFolders) {
        if (find(file)(folder))
            return true;
    }
    return false;
};

console.log(find("paper.pdf")(tree)); // true 
console.log(find("randomfile")(tree)); // false
