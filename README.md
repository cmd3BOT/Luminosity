<p align="center">
  <img src="https://res.cloudinary.com/cmd3bot/image/upload/v1624820642/Luminosity/183f875c4d964caa3fe6bc802d7d7f91.png" alt="UI" width='300'>
</p>

# Luminosity

Remote repository for [Luminosity](http://luminosity-dev.herokuapp.com/) - The Complete Modern Blogging Platform. <br>
  
## Features
  - Read Articles of various topics
  - Explore Content and follow other users
  - Use a Web Friendly interface to create posts
  - Comment and React on articles
  - Bookmark and save articles 
  - Customize Profile
  - Dark Mode option
  - Public API (Dev.)
  
<br>
<p align = "center">
  <img src = "https://res.cloudinary.com/cmd3bot/image/upload/v1624821106/Luminosity/e1758d997027b68c2a640fb0c65b96c9.png"/>
</p>
<p align = "center"><b>Create Drafts and Articles</b></p>
<br>
<p align = "center">
  <img src = "https://res.cloudinary.com/cmd3bot/image/upload/v1628588453/Luminosity/93b5b94326a535be9c6f3585991aaa94.png">
</p>
<p align = "center"><b>Explore Articles</b></p>

<br>
<p align = "center">
  <img src = "https://res.cloudinary.com/cmd3bot/image/upload/v1628588995/Luminosity/wxzarom0lbokjcipwwba.png">
</p>
<p align = "center"><b>Manage Your Profile</b></p>

## Design 

The project implements *MVC [Model-View-Controller]* design pattern. The project has been built upon a [Custom Framework](https://github.com/cmd3BOT/PHP-MVC-Framework). 

![MVC Structure](https://cdn.educba.com/academy/wp-content/uploads/2019/04/what-is-mvc-design-pattern.jpg)

> Model–view–controller (usually known as MVC) is a software design pattern commonly used for developing user interfaces that divides the related program logic into three interconnected elements. This is done to separate internal representations of information from the ways information is presented to and accepted from the user.

**Model**

The Model component corresponds to all the data-related logic that the user works with. This can represent either the data that is being transferred between the View and Controller components or any other business logic-related data. For example, a Customer object will retrieve the customer information from the database, manipulate it and update it data back to the database or use it to render data.

**View**

The View component is used for all the UI logic of the application. For example, the Customer view will include all the UI components such as text boxes, dropdowns, etc. that the final user interacts with.

**Controller**

Controllers act as an interface between Model and View components to process all the business logic and incoming requests, manipulate data using the Model component and interact with the Views to render the final output. For example, the Customer controller will handle all the interactions and inputs from the Customer View and update the database using the Customer Model. The same controller will be used to view the Customer data.

A common example is [ASP.NET MVC](https://dotnet.microsoft.com/apps/aspnet/mvc)

## Project Structure
  
``application/``
  Contains Backend and Application Logic
  - **Config** - Contains Configuration Files for project
  - **Libraries** - Contains Basic Libraries used by classes and other units.
    - See ``Core.php`` for URL Router logic
  - **Controllers**
    - **Ajax Controllers**: Internal API request logic
    - **Controller Traits**: Config values for controllers
    - **View Controllers**: Load correct page with data 
  - **Helpers** - Helper Files for common methods used across the application
  - **SQL** - Contains SQL Dump and Procedures for Models
  - **Views** - Each Controller has a seperate view folder containing files for a specific page [default index]
  - **Vendor** - Packages used in PHP
  - **Bootstrap.php** - Setup Environment, start session and intanstiate autoloader

``/public``
  Application frontend
  - **index.php**: Entry File
 
 ``root/.htaccess``
  Route Requests through Public folder
  
 Packages used:
  - [PHP Mailer](https://github.com/PHPMailer/PHPMailer)
  - [HTML Purifier](https://github.com/ezyang/htmlpurifier)
  - [Quill JS](https://github.com/quilljs/quill)

 ## Requirements
  - PHP Version ≥ 7.0
  - Composer Package Management
  - MySQL Drivers
 
 ## Setup Luminosity 
 
 Follow the Installation [Guide](https://github.com/cmd3BOT/Luminosity/blob/main/INSTALLATION.md) to set up Luminosity.

## Contributing
  You may open an issue [here](https://github.com/cmd3BOT/Luminosity/issues)
