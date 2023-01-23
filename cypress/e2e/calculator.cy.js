describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })


// Do the number buttons update the display of the running total?
  it('should update the runing total display', () => {
    cy.get('#number3').click()
    cy.get('#number5').click()
    cy.get('.display').should('contain', '35')
  })


// Do the arithmetical operations update the display with the result of the operation?
  it('should update the display with add operation', () => {
    cy.get('#number2').click()
    cy.get('#operator_add').click()
    cy.get('#number4').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '6')
  })

  it('should update the display with subtract operation', () => {
    cy.get('#number8').click()
    cy.get('#operator-subtract').click()
    cy.get('#number3').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '5')
  })

  it('should update the display with multiply operation', () => {
    cy.get('#number3').click()
    cy.get('#operator-multiply').click()
    cy.get('#number6').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '18')
  })

  it('should update the display with divide operation', () => {
    cy.get('#number2').click()
    cy.get('#number7').click()
    cy.get('#operator-divide').click()
    cy.get('#number3').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '9')
  })


// Can multiple operations be chained together?
  it('should be able to chain multiple operations together', () => {
    cy.get('#number6').click()
    cy.get('#operator-multiply').click()
    cy.get('#number4').click()
    cy.get('#operator-subtract').click()
    cy.get('#number3').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '21')
  })


// Is the output as expected for a range of numbers (for example, positive, negative, decimals and very large numbers)?
  it('should show a positive number', () => {
    cy.get('#number6').click()
    cy.get('#operator-multiply').click()
    cy.get('#number4').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '24')
  })

  it('should show a negative number', () => {
    cy.get('#number4').click()
    cy.get('#operator-subtract').click()
    cy.get('#number6').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '-2')
  })

  it('should show a decimal number', () => {
    cy.get('#number5').click()
    cy.get('#operator-divide').click()
    cy.get('#number2').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '2.5')
  })

  it('should show a very large number', () => {
    cy.get('#number1').click()
    cy.get('#number0').click() 
    cy.get('#number0').click() 
    cy.get('#number0').click() 
    cy.get('#operator-multiply').click()
    cy.get('#number1').click()
    cy.get('#number0').click()
    cy.get('#number0').click()
    cy.get('#number0').click() 
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '1000000')
  })

// What does the code do in exceptional circumstances? Specifically, if you divide by zero, what is the effect? Write a test to describe what you'd prefer to happen, and then correct the code to make that test pass (you will need to modify the Calculator model to meet this requirement).
  it('should show an error if dividing by zero', () => {
    cy.get('#number5').click()
    cy.get('#operator-divide').click()
    cy.get('#number0').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', 'error')
  })

})