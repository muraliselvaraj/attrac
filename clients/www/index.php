<!DOCTYPE html>
<html>
    <head>
        <?php include('required-files.php'); ?>
    </head>
    <body>
        <?php include('templates.php'); ?>
        <div data-role="page" class="" id="index">
            <script type="text/javascript">
                $('#index').on('pageshow', function(e, ui){
                    appendLocations();
                });
            </script>
            <div data-role="content" class="ui-content page-contents container">
                <div class="attrac-content">
                    <?php include('login-header.php'); ?>
                    <div class="select-elements">
                        <div class="location-dd">
                            <select name="select-choice-0" id="location-select-menu" data-corners="false" class="location-drop-down" onchange="renderInstitutes()">
                                
                            </select>
                        </div>
                        <div class="institution-dd">
                            <select name="" id="institution-select-menu" data-corners="false" class="institution-drop-down" disabled> <!--data-native-menu="false" -->
                                <option value="" selected>Institute</option>
                            </select>
                        </div>
                    </div>
                </div>    
            </div>
        </div>
        <script type="text/javascript" src="cordova.js"></script>
    </body>
</html>
