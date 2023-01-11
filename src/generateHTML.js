function generateHTML(managerArray, engineerArray, internArray){
   return ` <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
      crossorigin="anonymous"
    />
    <title>My Team</title>
  </head>
  <body>
    <nav class="navbar bg-success mb-4">
    <div class="d-flex container-fluid justify-content-center">
        <span class="navbar-brand fs-1 h1 m-3">My Team</span>
    </div>
    </nav>

    <div class="d-flex flex-wrap justify-content-center>
    
    ${generateTeam(managerArray, engineerArray, internArray)}
    
    </div>
    <script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
    crossorigin="anonymous"
  ></script>
</body>
</html>
    `
}

function generateTeam(managerArray, engineerArray, internArray){
    function createManager (manager) {
        return `  <div class="card m-3" style="width: 18rem">
        <div class="card-body">
          <h2 class="card-title">Manager Name: ${manager.getname()}</h2>
          <p class="card-text">Manager</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${manager.getid()}</li>
          <li class="list-group-item">
            <a href="#" class="card-link">Email: ${manager.getemail()}</a>
          </li>
          <li class="list-group-item">
            Office Number: ${manager.getOfficeNumber()}
          </li>
        </ul>
      </div>`
    };
    function createEngineer (engineer) {
        return `  <div class="card m-3" style="width: 18rem">
        <div class="card-body">
          <h2 class="card-title">Engineer Name: ${engineer.getname()}</h2>
          <p class="card-text">Engineer</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${engineer.getid()}</li>
          <li class="list-group-item">
            <a href="mailto:${engineer.getemail()}" class="card-link">Email: ${engineer.getemail()}</a>
          </li>
          <li class="list-group-item">
            <a href="https://github.com/${engineer.getgithub()}" class="card-link">Github: ${engineer.getgithub()}</a>
          </li>
        </ul>
      </div>`
    };
    function createIntern (intern) {
        return `  <div class="card m-3" style="width: 18rem">
        <div class="card-body">
          <h2 class="card-title">Intern Name: ${intern.getname()}</h2>
          <p class="card-text">Intern</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${intern.getid()}</li>
          <li class="list-group-item">
            <a href="mailto:${intern.getemail()}" class="card-link">Email: ${intern.getemail()}</a>
          </li>
          <li class="list-group-item"> School: ${intern.getschool()}
          </li>
        </ul>
      </div>`
    };

    let HTML = ''
    HTML += createManager(managerArray[0])
    for (i=0; i < engineerArray.length; i++){
        HTML += createEngineer(engineerArray[i])
    }
    for (i=0; i<internArray.length; i++){
        HTML += createIntern (internArray[i])
    }
    return HTML
}


module.exports = generateHTML