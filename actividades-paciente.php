<?php
session_start();
if($_SESSION['tipo'] != 'paciente')
    header("Location:index.php");  
$namePaciente = $_SESSION['nombre'];
//$tipoPaciente = $_SESSION['tipo'];
//$emailPaciente = $_SESSION['correo'];
$title = "Actividades Paciente";
include('header-paciente.php');
?>
<script>
    window.name = "actividades-paciente"
</script>
<!-- Sub Page Content
			============================================= -->
<div id="sub-page-content" class="clearfix margin-top-50">

    <div class="container">
        <h2 class="light bordered">IR A <span>ACTIVIDADES</span></h2>
        <!-- BEGIN GALLERY SECTION -->

        <section class="gallery no-padding">

            <div id="Container-gallery">

                <ul class="three-column-gallery clearfix">

                    <li class="mix doctors">

                        <div class="gallery-item">
                            <div class="gallery-item-thumb">
                                <span class="overlay"></span>
                                <img src="images/juegoSeries2.png" alt="">
                            </div>
                            <div class="gallery-item-info">
                                <p><a href="series-niveles.php">SERIES DE COLORES</a><span>*Juego Nuevo</span></p>
                            </div>
                        </div>

                    </li>
                    <li class="mix doctors">

                        <div class="gallery-item">
                            <div class="gallery-item-thumb">
                                <span class="overlay"></span>
                                <img src="images/coming-soon.jpg" alt="">
                            </div>
                            <div class="gallery-item-info">
                                <p><a href="#.">OPERACIONES ARITMÉTICAS</a><span>Proximamente...</span></p>
                            </div>
                        </div>

                    </li>
                    <li class="mix doctors">

                        <div class="gallery-item">
                            <div class="gallery-item-thumb">
                                <span class="overlay"></span>
                                <img src="images/coming-soon.jpg" alt="">
                            </div>
                            <div class="gallery-item-info">
                                <p><a href="#.">RELACION IMAGEN - SONIDO</a><span>Proximamente...</span></p>
                            </div>
                        </div>

                    </li>
                </ul>

            </div>

        </section><!-- END GALLERY SECTION -->

    </div>

</div>
<!--end sub-page-content-->


<?php include "footer.php" ?>