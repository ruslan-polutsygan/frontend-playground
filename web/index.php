<?php $env = isset($_GET['env']) ? $_GET['env'] : 'dev'; ?>
<html>
<head>
    <?php if($env === 'prod') { ?>
        <script src="app/dist/main.js"></script>
    <?php } else { ?>
        <script>var require = {urlArgs: 'bust=' + (new Date()).getTime()};</script>
        <script data-main="app/main" src="app/vendor/requirejs/require.js"></script>
    <?php }  ?>

    <script>
        requirejs.config({
            config:  {
                'src/config': {
                    name: 'John Doe'
                },
                'src/test': {
                    'name': 'test name'
                }
            }
        });
    </script>

</head>
<body>


<h1>Hi!</h1>

<p>env: <b><?php echo $env ?></b></p>
</body>
</html>
