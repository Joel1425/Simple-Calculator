const {Builder, By, Key} = require ("selenium-webdriver");
var should = require("chai").should(); // for should assertion using chai
require("geckodriver")
describe("Operations on calculator", function(){
    it ("Successfully adds two numbers!",async function(){
        let driver = await new Builder().forBrowser("firefox").build(); // launching driver
        await driver.get("file:///Users/joel/Desktop/Simple-Calculator/index.html") // hitting site
        await driver.findElement(By.id("8"),Key.RETURN).click();   // pressing first number 
        await driver.findElement(By.id("+"),Key.RETURN).click();   // pressing add operator
        await driver.findElement(By.id("9"),Key.RETURN).click();   // pressing second number 
        await driver.findElement(By.id("="),Key.RETURN).click();   // pressing equal to operator 
        //assert part
        let output = await driver.findElement(By.id("output-value")).getText();
        output.should.equal("17"); // assert using chai
        await driver.quit(); // quitting the browser
    });

    it ("Successfully subtracts two numbers!",async function(){
        let driver = await new Builder().forBrowser("firefox").build(); // launching driver
        await driver.get("file:///Users/joel/Desktop/Simple-Calculator/index.html") // hitting site
        await driver.findElement(By.id("3"),Key.RETURN).click();   // pressing first number 
        await driver.findElement(By.id("0"),Key.RETURN).click();   // pressing first number 
        await driver.findElement(By.id("-"),Key.RETURN).click();   // pressing subtract operator
        await driver.findElement(By.id("5"),Key.RETURN).click();   // pressing second number 
        await driver.findElement(By.id("="),Key.RETURN).click();   // pressing equal to operator 
        //assert part
        let output = await driver.findElement(By.id("output-value")).getText();
        output.should.equal("25"); // assert using chai
        await driver.quit(); // quitting the browser
    });

    it ("Successfully multiplies two numbers!",async function(){
        let driver = await new Builder().forBrowser("firefox").build(); // launching driver
        await driver.get("file:///Users/joel/Desktop/Simple-Calculator/index.html") // hitting site
        await driver.findElement(By.id("1"),Key.RETURN).click();   // pressing first number 
        await driver.findElement(By.id("2"),Key.RETURN).click();   // pressing first number 
        await driver.findElement(By.id("*"),Key.RETURN).click();   // pressing multiply operator
        await driver.findElement(By.id("8"),Key.RETURN).click();   // pressing second number 
        await driver.findElement(By.id("="),Key.RETURN).click();   // pressing equal to operator 
        //assert part
        let output = await driver.findElement(By.id("output-value")).getText();
        output.should.equal("96"); // assert using chai
        await driver.quit(); // quitting the browser
    });

    it ("Successfully divides two numbers!",async function(){
        let driver = await new Builder().forBrowser("firefox").build(); // launching driver
        await driver.get("file:///Users/joel/Desktop/Simple-Calculator/index.html") // hitting site
        await driver.findElement(By.id("5"),Key.RETURN).click();   
        await driver.findElement(By.id("6"),Key.RETURN).click();   // pressing first number 
        await driver.findElement(By.id("/"),Key.RETURN).click();   // pressing divide operator
        await driver.findElement(By.id("7"),Key.RETURN).click();   // pressing second number 
        await driver.findElement(By.id("="),Key.RETURN).click();   // pressing equal to operator 
        //assert part
        let output = await driver.findElement(By.id("output-value")).getText();
        output.should.equal("8"); // assert using chai
        await driver.quit(); // quitting the browser
    });
});


