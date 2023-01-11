const Manager = require ('./lib/Manager')
const Engineer = require ('./lib/Engineer');
const Intern = require ('./lib/Intern');
const inquirer = require ('inquirer');
const generateHTML = require ('./src/generateHTML');
const fs = require ('fs');
const path = require ('path');

const managerArray = []
const engineerArray = []
const internArray = []

inquirer.prompt ([
    {
        type: 'input',
        message: "What is the Manager's name?",
        name: 'name',
    },
    {
        type: 'input',
        message: "What is the Manager's ID?",
        name: 'id',
    },
    {
        type: 'input',
        message: "What is the Manager's email?",
        name: 'email',
    },
    {
        type: 'input',
        message: "What is the Manager's office number?",
        name: 'officenumber',
    }
])
.then(answers => {
    const manager = new Manager (answers.name, answers.id, answers.email, answers.officenumber)
    managerArray.push(manager)
    createTeam();
})

function createTeam () {
    inquirer.prompt ([
        {
            type: 'list',
            message: "Which team member would you like to make next?",
            name: 'choice',
            choices: ['Engineer', 'Intern', 'Done']
        }
    ]).then (answers => {
        if (answers.choice === 'Engineer') {
            createEngineer()
        } else if (answers.choice === 'Intern'){
            createIntern()
        } else fs.writeFileSync(path.join(__dirname, "/dist/team.html"), generateHTML(managerArray, engineerArray, internArray), 'utf-8');
    })
}

function createEngineer (){
    inquirer.prompt ([
        {
            type: 'input',
            message: "What is the Engineer's name?",
            name: 'name',
        },
        {
            type: 'input',
            message: "What is the Engineers's ID?",
            name: 'id',
        },
        {
            type: 'input',
            message: "What is the Engineer's email?",
            name: 'email',
        },
        {
            type: 'input',
            message: "What is the Engineer's github?",
            name: 'github',
        }
    ])
    .then(answers => {
        const engineer = new Engineer (answers.name, answers.id, answers.email, answers.github)
        engineerArray.push(engineer)
       createTeam();
    })
}

function createIntern (){
    inquirer.prompt ([
        {
            type: 'input',
            message: "What is the Intern's name?",
            name: 'name',
        },
        {
            type: 'input',
            message: "What is the Intern's ID?",
            name: 'id',
        },
        {
            type: 'input',
            message: "What is the Intern's email?",
            name: 'email',
        },
        {
            type: 'input',
            message: "What is the Intern's school?",
            name: 'school',
        }
    ])
    .then(answers => {
        const intern = new Intern (answers.name, answers.id, answers.email, answers.school)
        internArray.push(intern)
       createTeam();
    })
}