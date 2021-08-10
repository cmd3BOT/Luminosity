# Installation

 Packages used:
  - [PHP Mailer](https://github.com/PHPMailer/PHPMailer)
  - [HTML Purifier](https://github.com/ezyang/htmlpurifier)
  - [Quill JS](https://github.com/quilljs/quill)

 ## Requirements
  - PHP Version >= 7.0
  - Composer package management (optional)
  - MySQL drivers
 
 ## Setup Luminosity 
 
 Follow the given steps to setup Luminosity yourself.  <br>

  ### 1. Setup Project
  - Clone project in htdocs directory using <br><br>
    ```
    git clone git@github.com:cmd3BOT/Luminosity.git
    ```
    Your directory should as such ```C:\<xampp or any other stack>\htdocs\Luminosity```
    <br><br>
    **Rename** `application/Config/Config.example.php` **to** ``Config.php``
    <br><br>
  - When hosting Luminosity typically the URL would not contain the folder name and only the host name. 
    Therefore, we can change the environment in Config.php from ``local`` to ``prod``.  <br><br>
    ```php
    define("ENVIRONMENT", "local");

    $basePath = ENVIRONMENT === "local" ? '/'.basename(dirname(__DIR__, 2)) : '';
    define('BASE_FOLDER', $basePath); 

    /**
     * Set URLROOT for application.
     * Note: Host name should not have trailing slashes.
     * Eg: https://luminosity-dev.herokuapp.com or http://localhost
     */
    define('URLROOT', "http://<hostname>".BASE_FOLDER); 
    ```
  
  ### 2. App Configurations
   Setup app configurations in the Config file carefully to avoid unexpected errors <br>
 
  - Add SMTP Mail details to app. <br><br>
    To setup using Gmail
    ```php
    define("SMTP_HOST", 'smtp.gmail.com');
    define("SMTP_USERNAME", 'username@gmail.com');
    define("SMTP_MAIL", 'username@gmail.com');
    define("SMTP_PASSWORD", 'password');
    define("SMTP_PORT", 587); // default mail port
    ```    
    Using Gmail requires [access from less secure apps](https://myaccount.google.com/lesssecureapps)
    <br>
    More options: [Sendgrid](http://sendgrid.com/), [Mailjet](https://www.mailjet.com/feature/smtp-relay/)
    
  - Create an [IP Quality Score](https://www.ipqualityscore.com/create-account) account for email validation API token.
    ```php
    define('EMAIL_API_TOKEN', '...');
    ```
  - Cloudinary has been used as image host for application. Cloudinary works in default ``demo`` mode as given. Creating your own [cloud](https://cloudinary.com/users/register/free) will allow only validated images from your cloud on the application. Images Allowed Extensions can be set in the console at ``settings/uploads/<UPLOAD_PRESET>/Upload Control``
    
    Reference [Upload API](https://cloudinary.com/documentation/image_upload_api_reference)
    ```php
    // Default values for demo cloud
    define('IMG_CLOUD_NAME', 'demo');
    define('IMG_UPLOAD_URL', 'https://api.cloudinary.com/v1_1/'.IMG_CLOUD_NAME.'/image/upload');
    define('IMG_API_KEY', '');
    define('IMG_API_PRESET', 'docs_upload_example_us_preset');
    ```

  ### 3. Setup Database
  Use MySQL database for the application. 
  
  - Add database credentials to the Config file
    ```php
    define("DB_HOST", "localhost");
    define("DB_USER", "root");
    define("DB_PASS", "");
    define("DB_NAME", "luminosity");
    ```
  - Create a database ``luminosity`` and load [``application/SQL/dump.sql``](https://github.com/cmd3BOT/Luminosity/blob/main/application/SQL/dump.sql)
  
## Issues
  In case of a problem you can open an [issue](https://github.com/cmd3BOT/Luminosity/issues)
  