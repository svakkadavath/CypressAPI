/// <reference types="Cypress" />
describe("Test Suite", function () {
  it("Verify github repo creation", function () {
    cy.request({method:"POST", url:"http://api.github.com/repos/svakkadavath/demo/content/f1/file.txt", headers:
      {
        "Content-Type" : "application/vnd.github.v3+json",
        "Authorization" : ""
       },
       body:{
        "message": "my commit message",
        "committer": {
          "name": "svakkadavath",
          "email": "samyukthashine@gmail.com"
        },
        "content": "base64encoded"
      }
    }).then(function (response) {
    //  expect(response.body).to.have.property("Msg", "successfully added");
      expect(response.status).to.equals(200);
    });
  });
  it("Verify deleting a repo from github", function () {
    cy.request({method:"DELETE", url:"http://api.github.com/repos/svakkadavath/demo", headers:
      {
        "Content-Type" : "application/vnd.github.v3+json",
        "Authorization" : "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"
       },
       owner: 'svakkadavath',
       repo: 'demo'
    }).then(function (response) {
  
      expect(response.status).to.equals(200);
    });
  });
  
});


// 
