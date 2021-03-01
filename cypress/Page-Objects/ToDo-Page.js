//export class TodoPage
//{
    export function  nav()
    {
        cy.visit("http://todomvc-app-for-testing.surge.sh/")
    }

    export function AddToDo(toDoText)
    {
        cy.get('.new-todo').type(toDoText + "{enter}")
    }

    export function ValidateToDoText(todoIndex, expectedText)
    {
        cy.get(`.todo-list li:nth-child(${todoIndex + 1}) label`).should('have.text', expectedText) // there is difference in '' & ``
    }
//}