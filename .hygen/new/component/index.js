module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: 'input',
        name: 'componentName',
        message: 'What is the component name?'
      },
      {
        type: 'confirm',
        name: 'generateSpec',
        message: 'Do u want to create .spec file?',
      },
      {
        type: 'input',
        name: 'dir',
        message: 'Where is the directory(Optional)',
      },
    ];

    return inquirer
      .prompt(questions)
      .then(answers => {
        const { componentName, dir } = answers;
        const path = `${dir ? dir + '/' : ''}${componentName}`;
        const absPath = `src/components/${path}`;
        return { ...answers, absPath };
      });
  },
};
