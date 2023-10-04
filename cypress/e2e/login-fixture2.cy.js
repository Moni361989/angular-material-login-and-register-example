describe("template spec", () => {
  before("passes", () => {
    cy.visit("http://localhost:4200/public/login");
  });

  it("user data to login", () => {
    cy.fixture("login.json").then((loginData) => {
      cy.get("#mat-input-0").type(loginData.email);
      cy.get("#mat-input-1").type(loginData.password);
    });

    cy.get(".mat-button-wrapper").click();
  });
});

/*describe("template spec", () => {
   
  });

function sumVal (num1, num2, additionalAction) {
  additionalAction();
  return num1 + num2;
};

sumVal(13,27,() =>{
  console.log('Hola');
});*/
