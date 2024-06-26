#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const toDos = [];
console.log(chalk.bold.yellow("Welcome to Your Todo List!"));
let condition = true;
while (condition) {
    const addOrRemove = await inquirer.prompt([
        {
            name: "action",
            type: "list",
            message: "What do you want to do?",
            choices: ["Add Task", "Remove Task", "Exit"]
        }
    ]);
    if (addOrRemove.action === "Add Task") {
        const addTask = await inquirer.prompt([
            {
                name: "todo",
                type: "input",
                message: "Enter the task to add:"
            }
        ]);
        const confirmAdd = await inquirer.prompt([
            {
                name: "confirm",
                type: "confirm",
                message: `Do you want to add "${addTask.todo}" to your todos?`
            }
        ]);
        if (confirmAdd.confirm) {
            toDos.push(addTask.todo);
            console.log(chalk.bold.green(`Task "${addTask.todo}" added successfully!`));
        }
        else {
            console.log(chalk.yellow("Task addition canceled."));
        }
    }
    else if (addOrRemove.action === "Remove Task") {
        if (toDos.length === 0) {
            console.log(chalk.yellow("No tasks to remove."));
        }
        else {
            const removedTask = toDos.pop();
            console.log(chalk.bold.green(`Removed task: ${removedTask}`));
        }
    }
    else {
        condition = false;
    }
    console.log(chalk.bold.green("Your Todos:"));
    toDos.forEach((todo, index) => {
        console.log(chalk.blue(`${index + 1}. ${todo}`));
    });
}
;
console.log(chalk.bold.yellow("Enjoy completing your tasks!"));
