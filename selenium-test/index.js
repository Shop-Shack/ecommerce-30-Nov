require('chromedriver');
const {Builder, By, Key, until, WebElement} = require("selenium-webdriver");



async function example(){
    let driver = await new Builder().forBrowser("chrome").build();
    // await driver.get("http://www.google.com");
    // await driver.get("http://localhost:3000/register");
    // // await driver.findElement(By.name('q')).sendKeys('Selenium', Key.RETURN);
    // await driver.findElement(By.name('reg_name')).sendKeys('Srushti', Key.RETURN);
    // await driver.findElement(By.name('reg_email')).sendKeys('srushant23324@gmail.com', Key.RETURN);
    // await driver.findElement(By.name('reg_pass')).sendKeys('123', Key.RETURN);
    // await driver.findElement(By.name('reg_pass_conf')).sendKeys('123', Key.RETURN);
    
    // await driver.get("http://localhost:3000/login");
    // await driver.findElement(By.name('log_email')).sendKeys('srushant23324@gmail.com', Key.RETURN);
    // await driver.findElement(By.name('log_pass')).sendKeys('123', Key.RETURN);

    await driver.get("http://localhost:3000/");
    let shopNow = await driver.wait(until.elementLocated(By.id('shopNowText')), 30000);
    await shopNow.click();
    
    // await driver.get("http://localhost:3000/shop");
    let wCard = await driver.wait(until.elementLocated(By.id('women-card')), 30000);
    await wCard.click();
    
    
    
    
    
    // await driver.get("http://localhost:3000/women");
    let product = await driver.wait(until.elementLocated(By.id('P60547907')), 30000);
    
    await driver.actions()
      .scroll(0, 0, 0, 150, product)
      .perform()

    await product.click();
    
    //Product Page
    let add = await driver.wait(until.elementLocated(By.className('add')), 30000);
    let proceedToPurchase = await driver.wait(until.elementLocated(By.className('proceed-to-purchase')), 30000);
    let size = await driver.wait(until.elementLocated(By.id('M')), 30000);
    
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



    await driver.wait(until.elementLocated((By.name('checkout_name'))),30000).sendKeys('Srushti Haryan', Key.RETURN);
    await driver.wait(until.elementLocated((By.name('checkout_phoneno'))),30000).sendKeys('9898989898', Key.RETURN);
    await driver.wait(until.elementLocated((By.name('checkout_email'))),30000).sendKeys('9898989898', Key.RETURN);
    await driver.wait(until.elementLocated((By.name('checkout_addr'))),30000).sendKeys('Kandivali, Mumbai-400101, Maharashtra', Key.RETURN);
    // await driver.findElement(By.name('checkout_button')).click();

    
    
    await promise; // wait until the promise resolves (*)
    let checkoutButton = await driver.wait(until.elementLocated((By.name('checkout_button'))), 30000);
    checkoutButton.click();

    
    
    // driver.findElement(By.linkText('Women')).click();
    // driver.findElement(By.cssSelector("div[name='women-card']")).click();
    // driver.findElement(By.id("kids-card")).click();
    
    

}

example();