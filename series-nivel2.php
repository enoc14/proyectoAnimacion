<?php 
$title = "Nivel 2";
include('header-paciente.php');
?>

<script>
    window.name = "series_nivel2";   
</script>

<div id="sub-page-content" class="clearfix margin-top-30">

    <div class="container" style="padding-top: 25px;">

        <h2 class="light bordered main-title">Nivel <span>2</span></h2>

        <div class="row">
            <div class="col-sm-12">
                <h1>TU PUNTAJE ES: <span id="puntaje"></span></h1>
            </div>
            <div class="col-sm-8" id="juego">
            </div>
            <div class="col-sm-4">
                <button id="play">Inciar Juego</button>
                <button id="refresh">Refresh</button>
            </div>
        </div>
        <div id="toast">
            <div id="img"><span id="iconToast" class="fa"></span></div>
            <div id="desc"></div>
        </div>
    </div>
</div>

<?php 
include('footer.php');
?>