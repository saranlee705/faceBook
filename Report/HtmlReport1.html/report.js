$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/feature/facebook.feature");
formatter.feature({
  "name": "User login The Page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Homepage",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user Launch The Url Of Application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.user_Launch_The_Url_Of_Application()"
});
formatter.result({
  "error_message": "java.io.FileNotFoundException: C:\\Users\\Admin\\eclipse-workspace1\\FaceBook\\src\\main\\java\\property\\FaceBook.properties (The system cannot find the path specified)\r\n\tat java.base/java.io.FileInputStream.open0(Native Method)\r\n\tat java.base/java.io.FileInputStream.open(FileInputStream.java:216)\r\n\tat java.base/java.io.FileInputStream.\u003cinit\u003e(FileInputStream.java:157)\r\n\tat property.ConfigurationReader.\u003cinit\u003e(ConfigurationReader.java:12)\r\n\tat property.ConfigurationHelper.getInstance(ConfigurationHelper.java:7)\r\n\tat com.stepdefinition.stepdefinition.user_Launch_The_Url_Of_Application(stepdefinition.java:33)\r\n\tat ✽.user Launch The Url Of Application(src/test/java/com/feature/facebook.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user Enter The Email Id or Phone Number Into Such Field",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.user_Enter_The_Email_Id_or_Phone_Number_Into_Such_Field()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user Enter The Password Into Password Field",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.user_Enter_The_Password_Into_Password_Field()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user Click The Login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.user_Click_The_Login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user Click The Create Account button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.user_Click_The_Create_Account_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user Enter Their First Name In Such Field",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.user_Enter_Their_First_Name_In_Such_Field()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user Enter Their Surname Name In Such Field",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.user_Enter_Their_Surname_Name_In_Such_Field()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user Enter Their Mobile Number or Email Id In Such Field",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.user_Enter_Their_Mobile_Number_or_Email_Id_In_Such_Field()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user Enter Their New Password In Such Field",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.user_Enter_Their_New_Password_In_Such_Field()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user Select Their DOB  In Such Field",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.user_Select_Their_DOB_In_Such_Field()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user Click Their Gender In Such Field",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.user_Click_Their_Gender_In_Such_Field()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user Click The SignUp button In Such Field",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.user_Click_The_SignUp_button_In_Such_Field()"
});
formatter.result({
  "status": "skipped"
});
});