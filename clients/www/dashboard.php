<!DOCTYPE html>
<html>
    <head>
        <?php include('required-files.php'); ?>
    </head>
    <body>
        <?php include('templates.php'); ?>
        <div data-role="page" class="" id="dashboard-page">
            <div data-role="content" class="ui-content user-page-contents container-fluid">
                <?php include('dashboard-header.php'); ?>
                <div class="page-body-contents">
                    <div class="dashboard-grid-menu-lists row">
                        <div class="grid-menu-list col-xs-4 col-sm-4">
                            <div class="list-opt-text">ATTENDANCE</div>
                        </div>
                        <div class="grid-menu-list col-xs-4 col-sm-4">
                            <div class="list-opt-text">MARKS MEMO</div>
                        </div>
                        <div class="grid-menu-list col-xs-4 col-sm-4">
                            <div class="list-opt-text">FEEDBACK</div>
                        </div>
                    </div>
                    <div class="dashboard-grid-menu-lists row">
                        <div class="grid-menu-list col-xs-4 col-sm-4">
                            <div class="list-opt-text">CLASS TIME TABLE</div>
                        </div>
                        <div class="grid-menu-list col-xs-4 col-sm-4">
                            <div class="list-opt-text">EXAM TIME TABLE</div>
                        </div>
                        <div class="grid-menu-list col-xs-4 col-sm-4">
                            <div class="list-opt-text">SUGGESTION BOX</div>
                        </div>
                    </div>
                    <div class="dashboard-grid-menu-lists row">
                        <div class="grid-menu-list col-xs-4 col-sm-4">
                            <div class="list-opt-text">PREVIOUS QUESTION PAPPERS</div>
                        </div>
                       <!--  <div class="grid-menu-list">
                            <div class="list-opt-text">MARKS MEMO</div>
                        </div>
                        <div class="grid-menu-list">
                            <div class="list-opt-text">FEEDBACK</div>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
        <script type="text/javascript" src="cordova.js"></script>
    </body>
</html>
