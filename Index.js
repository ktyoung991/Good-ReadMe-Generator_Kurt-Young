var inquirer = require('inquirer');
var fs = require('fs');

inquirer
  .prompt([
    {
        type: 'input',
        name: 'ProjectName',
        message: 'This is the examplefirst name please!!',
    },
    {
        type: 'input',
        name: 'second',
        message: 'Please give a brief description',
    }
  ])
  .then(function(answers) {
    console.log('what is this ??', answers);
    
    var readMeString = `
        Title ${answers.first}
        Description ${answers.second}`

    fs.writeFile('readMe.md', readMeString, function (err) {
        if (err) throw err;
        console.log('Saved!');
      });

  })