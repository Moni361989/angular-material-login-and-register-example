describe("template spec", () => {
  before(async () => {
    await cy.fixture("login.json").as("loginData");
    cy.visit("http://localhost:4200/public/login");
  });

  beforeEach(() => {});

  it("user data to login", () => {
    cy.get("#mat-input-0").type(loginData.email);
    cy.get("#mat-input-1").type(loginData.password);

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
