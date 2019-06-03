<?php 
    $title = "Perfil Paciente";
    include "header-paciente.php" 
?>
//Nombre de esta pagina
<script>
    window.name = "perfil-paciente"
</script>
<div id="sub-page-content" class="clearfix margin-top-30">

    <div class="container" style="padding-top: 25px;">

        <h2 class="light bordered main-title">Editar <span>Perfil</span></h2>

        <div class="row" id="divPerfil">
            
            <div class="col-md-8 col-md-offset-3 padding-bottom-60 clearfix">
                <div class="doctors-img">
                    <img src="images/hombre.png" class="responsive-img" alt="Paciente">
                </div>
                <div class="doctors-detail">
                    <input type="text" placeholder="San Martin Gutierrez Miguel Angel" disabled/>
                    <input type="text" placeholder="11 años" disabled/>
                    <input type="email" placeholder="sanma@algo.com" disabled/>
                    <input type="number" placeholder="8332331835"/>
                    <input type="password" placeholder="************" disabled/>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-8 col-md-offset-6">
                <a class="btn btn-success" href="#">Guardar</a>
            </div>
        </div>
    </div>
</div>

<?php include "footer.php" ?>