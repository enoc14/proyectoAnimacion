<?php 
	$url = explode("/",$_SERVER["REQUEST_URI"])[2];
?>
<!DOCTYPE html>
<html lang="es" class="no-js">

<head>
    <base href="" />
    <!-- Basic Page Needs

     ================================================== -->

    <meta charset="utf-8">

    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">

    <link rel="icon" type="image/png" href="images/favicon.png">

    <title><?php echo $title?></title>

    <meta name="description" content="">

    <meta name="keywords" content="">

    <meta name="author" content="">


    <!-- Mobile Specific Metas
    
     ================================================== -->

    <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0">

    <meta name="format-detection" content="telephone=no">


    <!-- Web Font
	 ============================================= -->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700,800" rel="stylesheet">


    <!-- CSS
    
     ================================================== -->


    <!-- Theme Color
	============================================= -->
    <link rel="stylesheet" id="color" href="css/green.css">


    <!-- Medicom Style
	============================================= -->
    <link rel="stylesheet" href="css/medicom.css">


    <!-- This page
	============================================= -->
    <link href="css/revolution_style.css" rel="stylesheet">
    <link href="css/settings.css" rel="stylesheet">
    <link href="css/estilos.css" rel="stylesheet">


    <!-- Bootstrap
	============================================= -->
    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" id="color" href="css/main.css">
    <link rel="stylesheet" id="color" href="css/toast.css">


    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
    <![endif]-->



    <!-- Header Scripts
    
    ================================================== -->

    <script src="js/modernizr-2.6.2.min.js"></script>
    <script src="js/sweetalert.min.js"></script>


</head>

<body class="fixed-header">

    <script type="text/javascript">
    var pageName = window.location.pathname.split("/")[2];
    </script>

    <!-- Document Wrapper
		============================================= -->
    <div id="wrapper" class="clearfix">


        <!-- Header
		============================================= -->
        <header id="header" class="medicom-header medical-nav">

            <!-- Top Row
			============================================= -->
            <div class="solid-row"></div>

            <div class="container">


                <!-- Primary Navigation
				============================================= -->
                <nav class="navbar navbar-default" role="navigation">

                    <!-- Brand and toggle get grouped for better mobile display
					============================================= -->

                    <div class="navbar-header">

                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#primary-nav">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>

                        <a class="navbar-brand" href="index.html"><img src="images/logo-green.png" alt="" title=""></a>

                        <p class="text-center" style="margin-bottom: 0px;">Hola <b>Paciente 1</b></p>

                    </div>


                    <div class="collapse navbar-collapse navbar-right" id="primary-nav">

                        <ul class="nav navbar-nav">

                            <li class="<?php if($url == "informacion-paciente.php") echo "active"; ?>">
                                <a href="informacion-paciente.php"><i class="fa fa-info-circle"></i>Información</a>
                            </li>

                            <li class="<?php if($url == "actividades-paciente.php") echo "active"; ?>">
                                <a href="actividades-paciente.php"><i class="fa fa-puzzle-piece"></i>Actividades</a>
                            </li>

                            <li class="<?php if($url == "perfil-paciente.php") echo "active"; ?>">
                                <a href="perfil-paciente.php"><i class="fa fa-user"></i>Perfil</a>
                            </li>
                        </ul>

                    </div>

                </nav>

            </div>

        </header>