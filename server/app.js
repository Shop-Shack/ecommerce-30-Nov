const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const user_det = require("./models/user_credentials");
const order_det = require("./models/order_details");
const { cs } = require("date-fns/locale");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const auth = require("./middleware/auth");
const { google } = require("googleapis");
const nodemailer = require("nodemailer");

// const sgMail = require("@sendgrid/mail");
const API_KEY =
  "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";

app.use(cors());

const CLIENT_ID =
  "731656192661-0rq0p0cth3s6cpe3rll6f7jbh26lctev.apps.googleusercontent.com";
const CLIENT_SECRET = "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";

let ACCESS_TOKEN;
const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  "http://localhost:3000"
);

// sgMail.setApiKey(API_KEY);

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

const connectDb = () => {
  mongoose.connect(
    "mongodb+srv://MD:MD2022@shopsackcluster.ersgwpa.mongodb.net/ShopShack",
    { useNewUrlParser: true }
  );
  console.log("Connected to the database ");
};

connectDb();

var database = mongoose.connection;

let email, password, confPassword, name, userToken;

app.get("/", (req, res) => {
  // console.log("Hello, The homepage is displayed...");
  const token = req.cookies.jwt;
  const verifyUser = jwt.verify(token, "shop.shack.madmanrush.spit.ac.in");
  // console.log(verifyUser);

  // console.log(`cookies: ${req.cookies.jwt}`);
  return res.json({ message: "Hello, This is homepage!", ...verifyUser });
});

app.get("/women", (req, res) => {
  res.json({ message: "Women's page is displayed" });
  console.log(`Hello, The women's page is displayed...`);
});

app.put("/register:id", (req, res) => {
  let userCred = new user_det();
  console.log("put on id: " + req.params.id);

  let newvalues = {
    $set: {
      email_id: `${req.body.reg_email}`,
    },
  };

  database
    .collection("usercredentials")
    .updateOne(
      { _id: `ObjectId('${req.params.id}')` },
      newvalues,
      (err, res) => {
        if (err) throw err;
        console.log("1 document updated");
      }
    );

  userCred = req.body;

  res.send(userCred); // Return the updated course
});

app.patch("/update/:name", (req, res) => {
  console.log(req.params.name);

  var myquery = { name: req.params.name };
  var newvalues = { $set: { email_id: req.body.reg_email } };
  database
    .collection("usercredentials")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      database.close();
    });
});

app.post("/register", (req, res) => {
  const { body } = req;

  var credential = new user_det();

  if (body.reg_pass === body.reg_pass_conf) {
    email = req.body.reg_email;
    password = req.body.reg_pass;
    confPassword = req.body.reg_pass_conf;
    name = req.body.reg_name;

    try {
      const token = jwt.sign(
        { email: email },
        "shop.shack.madmanrush.spit.ac.in"
      );
      console.log(token);
      userToken = token;
      credential.tokens.push({ token: userToken });

      res.cookie("jwt", token, {
        expires: new Date(Date.now() + 120000),
        httpOnly: true,
      });

      console.log(`This is a cookie register${req.cookies.jwt}`);

      // console.log(cookie);
    } catch (err) {
      console.log(err);
    }

    credential.email_id = email;
    credential.password = password;
    credential.name = name;
    credential.confirm_password = confPassword;

    database
      .collection("usercredentials")
      .find({ email_id: email })
      .toArray(function (err, items) {
        if (err) {
          console.log(err);
        }
        if (items.length == 0) {
          if (password !== confPassword) {
            res.redirect("/register");
          } else {
            database
              .collection("usercredentials")
              .insertOne(credential, (err, collection) => {
                if (err) {
                  console.log(err);
                  throw err;
                }

                console.log("Record inserted successfully");
              });

            res.redirect("/login");
          }
        } else {
          console.log("Email ID exists");
          return res.redirect("/register");
        }
      });
  } else {
    res.redirect("/register");
  }

  console.log({ ...req.body });
});

app.post("/login", (req, res) => {
  let name, email, userToken;
  var credential = new user_det();

  const userGoogdata = req.body;
  console.log(userGoogdata);

  if (userGoogdata.userIsGoog) {
    credential.email_id = userGoogdata.email;
    credential.name = userGoogdata.name;
    email = userGoogdata.email;
    name = userGoogdata.name;
    credential.userIsGoog = userGoogdata.userIsGoog;
    ACCESS_TOKEN = req.body.access_token;
    console.log("in post/login" + ACCESS_TOKEN);

    // const message = {
    //   to: "madhura.chitale@spit.ac.in",
    //   from: "manushree.dubey@spit.ac.in",
    //   subject: "Login confirmation",
    //   text: "Thank you for logging in to ShopShack. Happy Shopping :)",
    //   html: "<h1>Hello from Shop Shack<h1>",
    // };

    // sgMail
    //   .send(message)
    //   .then((response) => console.log(response))
    //   .catch((error) => console.log(error.msg));

    let mailTransporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "srushti.haryan@spit.ac.in",
        pass: "qiapbwwhfhncloyr",
      },
    });

    let mailDetails = {
      from: "srushti.haryan@spit.ac.in",
      to: email,
      subject: "Welcome to Shop.Shack community.",
      text: "Thank you connecting with us. Happy Shopping! :)",
    };

    mailTransporter.sendMail(mailDetails, function (err, data) {
      if (err) {
        console.log("Error Occurs" + err);
      } else {
        console.log("Email sent successfully");
      }
    });
    database
      .collection("usercredentials")
      .find({ email_id: email })
      .toArray(function (err, items) {
        if (err) {
          console.log(err);
        }

        if (items.length == 0) {
          database
            .collection("usercredentials")
            .insertOne(credential, (err, collection) => {
              if (err) {
                console.log(err);
                throw err;
              }
              console.log("google user Record inserted successfully");

              //mail sendgrid API used her

              // const message = {
              //   to: email,
              //   from: "manushree.dubey@spit.ac.in",
              //   subject: "Login confirmation",
              //   text: "Thank you for logging in to ShopShack. Happy Shopping :)",
              //   html: "<h1>Hello from Shop Shack<h1>",
              // };

              // sgMail
              //   .send(message)
              //   .then((response) => console.log("email sent"))
              //   .catch((error) => console.log(error.msg));

              let redir = { redirect: "/", ...userGoogdata };
              return res.json(redir);
            });
        } else {
          console.log("This google user is existing");
          let redir = { redirect: "/" };
          return res.json(redir);
        }
      });
  } else {
    const { body } = req;
    email = req.body.log_email;
    password = req.body.log_pass;

    database
      .collection("usercredentials")
      .find({ email_id: email, password: password })
      .toArray(function (err, items) {
        if (err) {
          console.log(err);
        }
        if (items.length == 0) {
          console.log("not found");
          res.redirect("/login");
        } else {
          try {
            const token = jwt.sign(
              { email: email },
              "shop.shack.madmanrush.spit.ac.in"
            );
            console.log(token);
            userToken = token;
            credential.tokens.push({ token: userToken });
            res.cookie("jwt", token, {
              expires: new Date(Date.now() + 120000),
              httpOnly: true,
            });

            console.log(`This is a cookie login ${req.cookies.jwt}`);

            res.redirect("/");
          } catch (err) {
            console.log(err);
          }
        }
      });
  }
});

app.post("/post", (req, res) => {
  console.log("Connected to React");
  res.redirect("/");
});

var cname;
var cphone;
var cemail;
var caddr;
var cquantity; //:}
var csize; //:}
var cproduct_name; //:}
var cproductimg;
var cproductcate;
var ctotal_cost;

app.post("/product/:id", (req, res) => {
  cquantity = req.body.quantity;
  csize = req.body.size;
  cproduct_name = req.body.title;
  cproductimg = req.body.url;
  ctotal_cost = req.body.price;

  console.log(cquantity, csize, cproduct_name);
});

let title, url, price, size, quantity;
app.post("/checkout/:id", async (req, res) => {
  let productID = req.params.id;
  title = req.body.title;
  url = req.body.url;
  price = req.body.price;
  size = req.body.size;
  quantity = req.body.quantity;
  console.log(req.body);
  console.log();

  // del_date.setDate(del_date.getDate() + 30);
  //set calendar
  // var starttime = "09:00";
  // var endtime = "11:00";
  // var startdate = new Date();
  // var enddate = startdate + 2;
  // var orderPlaceddate = enddate + "T" + starttime + ":00+05:30";
  // var orderDeliverydate = enddate + "T" + endtime + ":00+05:30";

  // orderPlaceddate = orderPlaceddate.replaceAll(":", "");
  // orderPlaceddate = orderPlaceddate.replaceAll("-", "");
  // orderPlaceddate = orderPlaceddate.replaceAll(".", "");

  // orderDeliverydate = orderDeliverydate.replaceAll(":", "");
  // orderDeliverydate = orderDeliverydate.replaceAll("-", "");
  // orderDeliverydate = orderDeliverydate.replaceAll(".", "");

  const eventStartTime = new Date();
  const eventEndTime = new Date();

  eventEndTime.setDate(eventEndTime.getDate() + 2);
  eventStartTime.setDate(eventStartTime.getDate() + 2);

  eventEndTime.setMinutes(eventEndTime.getMinutes() + 40);

  console.log(ACCESS_TOKEN);
  // console.log(access_token);
  oauth2Client.setCredentials({ access_token: ACCESS_TOKEN });
  const calendar = google.calendar("v3");
  const response = await calendar.events.insert({
    auth: oauth2Client,
    calendarId: "primary",
    requestBody: {
      summary: "ShopShack product delivery",
      description:
        "This is to remind you that your order arrives today, please ensure that the order will be received. Happy Shopping!",
      // location: location,
      colorId: 6,
      start: {
        dateTime: eventStartTime,
        timeZone: "Asia/Kolkata",
      },
      end: {
        dateTime: eventEndTime,
        timeZone: "Asia/Kolkata",
      },
    },
  });

  console.log("The event is created");
});

app.post("/checkout", (req, res) => {
  console.log(req.body);
  // res.send(req.body);
  cname = req.body.checkout_name;
  cphone = req.body.checkout_phoneno;
  cemail = req.body.checkout_email;
  caddr = req.body.checkout_addr;
  var orders = new order_det();

  cquantity = quantity;
  csize = size;
  cproduct_name = title;

  console.log(cname, title, csize);
  cproductimg = url;
  ctotal_cost = price;

  orders.username = name;
  orders.product_name = cproduct_name;
  // orders.product_cateogry = cproductcate;
  orders.product_img = cproductimg;
  orders.quantity = cquantity;
  orders.size = csize;
  orders.name = cname;
  orders.phone_number = cphone;
  orders.email = cemail;
  orders.address = caddr;
  orders.dateOfBuy = convertDate(new Date());
  // orders.dateOfDelivery;
  orders.totalPrice = ctotal_cost;

  console.log(orders);
  database.collection("orderdatas").insertOne(orders, (err, collection) => {
    if (err) {
      console.log(err);
      throw err;
    }

    console.log("Order Data inserted successfully");
    res.redirect("/");
  });
});

function convertDate(str) {
  var date = new Date(str),
    mnth = ("0" + (date.getMonth() + 1)).slice(-2),
    day = ("0" + date.getDate()).slice(-2);
  console.log([date.getFullYear(), mnth, day].join("-"));
  return [date.getFullYear(), mnth, day].join("-");
}

// app.post("/post", (req, res) => {
//   console.log("Connected to React");
//   res.redirect("/");
// });

app.listen(PORT, console.log(`Server started on port ${PORT}`));
