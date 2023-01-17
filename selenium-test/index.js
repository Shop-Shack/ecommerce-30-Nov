require('chromedriver');
const {Builder, By, Key, until, WebElement} = require("selenium-webdriver");



async function example(){
    let driver = await new Builder().forBrowser("chrome").build();
    // await driver.get("http://www.google.com");
    // await driver.get("http://localhost:3000/register");
    // // await driver.findElement(By.name('q')).sendKeys('Selenium', Key.RETURN);
    // await driver.findElement(By.name('reg_name')).sendKeys('Matt Long', Key.RETURN);
    // await driver.findElement(By.name('reg_email')).sendKeys('zeke828@gmail.com', Key.RETURN);
    // await driver.findElement(By.name('reg_pass')).sendKeys('12345', Key.RETURN);
    // await driver.findElement(By.name('reg_pass_conf')).sendKeys('12345', Key.RETURN);
    // console.log('\x1b[92m Register Test Successful! Test Case: Passed \x1b[0m');
    
    await driver.get("http://localhost:3000/");
    await driver.findElement(By.name('log_email')).sendKeys('zeke828@gmail.com', Key.RETURN);
    await driver.findElement(By.name('log_pass')).sendKeys('12345', Key.RETURN);
    let login = await driver.wait(until.elementLocated(By.name('login-btn')), 300000);
    await login.click();
    


    // await driver.get("http://localhost:3000/home");
    
    try{
      let shopNow = await driver.wait(until.elementLocated(By.id('shopNowText')), 20000);
    shopNow.getText().then(function(s) {
      console.log(s);
      if(s==='Shop Now'){

        console.log('\x1b[92m Login Test Successful! Test Case: Passed \x1b[0m');
      }else{
        
      }
       
    });
    await shopNow.click();

    }catch(e){
    console.log('\x1b[31m Login Test Failed! Test Case: Failed \x1b[0m');
return;
    }
    
    
    
    // await driver.get("http://localhost:3000/shop");
    let wCard = await driver.wait(until.elementLocated(By.id('women-card')), 300000);
    await wCard.click();
    
    
    
    
    
    // await driver.get("http://localhost:3000/women");
    let product = await driver.wait(until.elementLocated(By.id('P60547907')), 300000);
    
    await driver.actions()
      .scroll(0, 0, 0, 150, product)
      .perform()

    await product.click();
    
    //Product Page
    let add = await driver.wait(until.elementLocated(By.className('add')), 300000);
    let proceedToPurchase = await driver.wait(until.elementLocated(By.className('proceed-to-purchase')), 300000);
    let size = await driver.wait(until.elementLocated(By.id('M')), 300000);
    
    let quant = 2;
    for(let i = 0; i<quant; i++){

    await add.click();

    }

    
    await driver.actions({async:true})
    .move(size,0,15)    
    await size.click();

    // driver.sleep(3000);

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Hello World!"), 6000)
      });
    
      let result = await promise; // wait until the promise resolves (*)

    await proceedToPurchase.click();

    
    
    await driver.wait(until.elementLocated((By.name('checkout_name'))),300000).sendKeys('Matt Long', Key.RETURN);

    let promise2 = new Promise((resolve, reject) => {
      setTimeout(() => resolve("Hello World!"), 6000)
    });
  
    let result2 = await promise2; // wait until the promise resolves (*)

    await driver.wait(until.elementLocated((By.name('checkout_phoneno'))),300000).sendKeys('9898989898', Key.RETURN);

    let promise3 = new Promise((resolve, reject) => {
      setTimeout(() => resolve("Hello World!"), 6000)
    });
  
    let result3 = await promise3; // wait until the promise resolves (*)
    await driver.wait(until.elementLocated((By.name('checkout_email'))),300000).sendKeys('zeke828@gmail.com', Key.RETURN);

    let promise4 = new Promise((resolve, reject) => {
      setTimeout(() => resolve("Hello World!"), 20000)
    });
  
    let result4 = await promise4; // wait until the promise resolves (*)
    await driver.wait(until.elementLocated((By.name('checkout_addr'))),300000).sendKeys('Kandivali, Mumbai-400101, Maharashtra', Key.RETURN);
    // await driver.findElement(By.name('checkout_button')).click();

    
    
    let checkoutButton = await driver.wait(until.elementLocated((By.name('checkout_button'))), 300000);
    checkoutButton.click();
    
    //checkout ka link dikha rha hai

    let promise5 = new Promise((resolve, reject) => {
      setTimeout(() => resolve("Hello World!"), 20000)
    });
  
    let result5 = await promise5; // wait until the promise resolves (*)
    

    try {
      
      let elem = driver.wait(until.elementLocated((By.className('message'))));
       elem.getText().then(function(s) {
         console.log(s);
         if(s==='Thank you, your order has been place'){
   
           console.log('\x1b[92m  Order Place Test Successful! Test Case: Passed \x1b[0m ')
         }else{

           console.log('\x1b[31m Order Place Test Failed! Test Case: Failed \x1b[0m');
         }
        
      });
    } catch (error) {
      
    }
    

    
    
    // driver.findElement(By.linkText('Women')).click();
    // driver.findElement(By.cssSelector("div[name='women-card']")).click();
    // driver.findElement(By.id("kids-card")).click();
    
    

}

example();