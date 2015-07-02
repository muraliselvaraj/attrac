<!DOCTYPE html>
<html>
    <head>
        <?php include('required-files.php'); ?>
    </head>
    <body>
        <?php include('templates.php'); ?>
        <div data-role="page" class="" id="login-option">
            <div data-role="content" class="ui-content page-contents container">
                <div class="attrac-content">
                    <?php include('login-header.php'); ?>
                    <div class="user-login-options">
                        <h1 class="login-btn-header">Login</h1>
                        <div class="user-login-opt-btn" id="login-student-btn">
                            Student
                        </div>
                        <div class="user-login-opt-btn" id="login-faculty-btn">
                            Faculty
                        </div>
                        <div class="user-login-opt-btn" id="login-parent-btn">
                            Parent / Guadian
                        </div>
                    </div>
                </div>    
            </div>
        </div>
        <script type="text/javascript" src="cordova.js"></script>
    </body>
</html>
