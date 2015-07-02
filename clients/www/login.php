<!DOCTYPE html>
<html>
    <head>
        <?php include('required-files.php'); ?>
    </head>
    <body>
        <?php include('templates.php'); ?>
        <div data-role="page" class="" id="login-page">
            <div data-role="content" class="ui-content page-contents container">
                <div class="attrac-content">
                    <?php include('login-header.php'); ?>
                    <div class="user-login-options">
                        <h1 class="login-btn-header">User ID</h1>
                        <input type="text" name="username" id="username" value="" class="login-input-box" autocomplete="off" data-corners="false">
                        <h1 class="login-btn-header">Password</h1>
                        <input type="password" name="password" id="password" value="" class="login-input-box" autocomplete="off" data-corners="false">
                        <div class="login-btn" id="login-btn">
                            Login
                        </div>
                    </div>
                </div>    
            </div>
        </div>
        <script type="text/javascript" src="cordova.js"></script>
    </body>
</html>
