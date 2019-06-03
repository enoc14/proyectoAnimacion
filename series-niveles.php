<?php 
$title = "Series";
include('header-paciente.php');
?>

<script>
    window.name = "series-niveles";   
</script>

<div id="sub-page-content" class="clearfix margin-top-30">

    <div class="container" style="padding-top: 25px;">

        <h2 class="light bordered main-title">Juego de <span>Series</span></h2>

        <div class="row" id="divSeries">
            <div class="col-sm-12">
                <button class="bloque" onclick="window.location.href = 'series-nivel1.php'">Nivel 1</button>
                <button class="bloque" onclick="window.location.href = 'series-nivel2.php'">Nivel 2</button>
                <button class="bloque" onclick="window.location.href = 'series-nivel3.php'">Nivel 3</button>
            </div>
        </div>

    </div>
</div>

<?php 
include('footer.php');
?>