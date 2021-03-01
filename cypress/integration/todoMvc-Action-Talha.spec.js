/// <reference types = "cypress" />

//import { TodoPage } from "../Page-Objects/ToDo-Page"
import { nav, AddToDo, ValidateToDoText} from "../Page-Objects/ToDo-Page"

// it('should navigate to TodoMvc', () => {
//     cy.visit("http://todomvc-app-for-testing.surge.sh/")
// })

//arrow function and using the function word itself. it is same thing.

// it('should navigate to TodoMvc 2nd func', function() {
//     cy.visit("http://todomvc-app-for-testing.surge.sh/this-will-fail-nows")
// })

// it('should be able to add new ToDo to the list', () => {
//          cy.visit("http://todomvc-app-for-testing.surge.sh/")
//         //cy.visit("http://todomvc-app-for-testing.surge.sh/?delay-new-todo=3000") //having 3s delay

//        // cy.visit("http://todomvc-app-for-testing.surge.sh/?delay-new-todo=5000") //will fail since default timeout is of 4000ms

//          //cy.get('.new-todo').type("talha talha")
//         // cy.get('.new-todo', {timeout: 6000}).type("talha {enter}") //overriding the default timeout from 4000ms by 6000ms

//         cy.get('.new-todo').type("talha {enter}")
//         // cy.get('.toggle').click()
//         // cy.contains("Clear completed").click()
//         cy.get('label').should('have.text', 'talha')
//         cy.get('.toggle').should('not.be.checked')
//         cy.get('.toggle').click()
//         cy.get('label').should('have.css', 'text-decoration-line', 'line-through') //check if strike through
//         cy.contains('Clear').click()
        
//         //checks if there is nothing in the text box, it will fail if I comment the containts(clear).click 
//             //as it will have the descendants
//         cy.get('.todo-list').should('not.have.descendants','li') 
//      })


    describe('todo Actions', () =>  //grouping the tests
    {
       // const ToDo = new TodoPage()
        beforeEach(() =>
        {
            //cy.visit("http://todomvc-app-for-testing.surge.sh/")
           // cy.get('.new-todo', {timeout: 6000}).type("talha {enter}")
         //  ToDo.nav()
           //ToDo.AddToDo('Bla bla talha')
           nav()
           AddToDo('Bla bla talha')
        } )

     it('should be able to add new ToDo to the list', () => 
     {
        //cy.get('label').should('have.text', 'talha')
        //ToDo.ValidateToDoText(0,'Bla bla talha')
        ValidateToDoText(0,'Bla bla talha')
        cy.get('.toggle').should('not.be.checked')
        
     })

     it('should mark a todo as Completed', () => 
     {
        cy.get('.toggle').click()
        cy.get('label').should('have.css', 'text-decoration-line', 'line-through')
    })

    it('should clear Completed ToDos', () => 
    {
        cy.get('.toggle').click()
        cy.contains('Clear').click()
        cy.get('.todo-list').should('not.have.descendants','li')
    })
})