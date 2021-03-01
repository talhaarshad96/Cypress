/// <reference types = "cypress" />

//import * as toDo from "../Page-Objects/ToDo-Page"
import { nav, AddToDo, ValidateToDoText} from "../Page-Objects/ToDo-Page"

describe('Visuals', () =>  //grouping the tests
{
   //set APPLITOOLS_API_KEY='pqfW4iFCTNprMeppE99YxTe1105HYbB0RAT99FQ4UWnyWac110';
    before(() => nav() )
    //before(() => cy.visit("http://todomvc-app-for-testing.surge.sh/?different-title-color") )

    beforeEach(() => cy.eyesOpen({appName: 'TAU TodoMVC', batchName: 'HEY TALHA!',
    browser: [
      {name: 'chrome', width: 1024, height: 768},
      {name: 'chrome', width: 800, height: 600},
      {name: 'firefox', width: 1024, height: 768},
      {deviceName: 'iPhone X'},
    ]
   }))

    afterEach(() => cy.eyesClose())

    it('should look good', () => 
     {
        cy.eyesCheckWindow('empty todo list')
        AddToDo('Bla bla talha1')
        AddToDo('Bla bla talha2')
        AddToDo('Bla bla talha3')  
        cy.eyesCheckWindow('3 todo list') 
        cy.get(`.todo-list li:nth-child(${0 + 1}) .toggle`).click()  
        cy.eyesCheckWindow('mark completed')    
     })
})