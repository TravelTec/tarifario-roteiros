<div class="wrap">
	<h1 class="wp-heading-inline">Registro de solicitações</h1><br>

	<?php  
		global $wpdb; 

		// CREATE TABLE IF NOT EXISTS wpsites_solicitacoes (
		//     id INT AUTO_INCREMENT PRIMARY KEY,
		//     roteiro VARCHAR(255) NOT NULL, 
		//     hotel VARCHAR(255) NOT NULL, 
		//     apto VARCHAR(255) NOT NULL, 
		//     regime VARCHAR(255) NOT NULL, 
		//     desc_pax VARCHAR(255) NOT NULL, 
		//     cliente VARCHAR(255) NOT NULL, 
		//     telefone VARCHAR(255) NOT NULL, 
		//     email VARCHAR(255) NOT NULL, 
		//     horario DATETIME NOT NULL
		// )    

		$result = $wpdb->get_results ( "SELECT * FROM wpsites_solicitacoes ORDER BY horario DESC"); 



	?>

	<table class="wp-list-table widefat fixed striped table-view-list posts">
	    <thead>
	        <tr>
	            <th scope="col" id="shortcode" class="manage-column column-shortcode">Pacote</th>  
	            <th scope="col" id="pedido" class="manage-column column-shortcode">Pedido</th>  
	            <th scope="col" id="nome" class="manage-column column-title column-primary sortable desc">Cliente</th> 
	            <th scope="col" id="observacoes" class="manage-column column-title column-primary sortable desc">Observações</th>
	            <th scope="col" id="date" class="manage-column column-date sortable asc">Data</th>
	        </tr>
	    </thead>
	    <tbody id="the-list">
	    	<?php for ($i=0; $i < count($result); $i++) {  ?>
		        <tr id="post-<?=$i?>" class="iedit author-self level-0 post-<?=$i?> type-tarifario status-publish hentry">
		        	<?php  
 						
 						$id = $result[$i]->roteiro;
						$result_post = $wpdb->get_resultS ( "SELECT * FROM wpsites_posts WHERE ID = '$id'");  

		        	?>
		            <td class="shortcode column-shortcode" data-colname="Shortcode"><a href="/wp-admin/post.php?post=<?=$id?>&action=edit"><span style="font-size:17px;font-weight: 700"><?= $result_post[0]->post_title; ?></span></a><br><?= $result[$i]->hotel; ?><br><strong>Apto: </strong><?= $result[$i]->apto; ?><br><strong>Regime:</strong> <?= $result[$i]->regime; ?>
		            </td>
		            <td class="shortcode column-shortcode" data-colname="Nome" style="padding-left: 0"><strong>Pax: </strong><?= $result[$i]->desc_pax; ?><br><strong>Período: </strong><?= $result[$i]->periodo; ?><br><br><strong>Total: </strong> <?= $result[$i]->total; ?>
		            </td>
		            <td class="shortcode column-shortcode" data-colname="Nome" style="padding-left: 0">
		                 <?= $result[$i]->cliente; ?><br>
		                 <?= $result[$i]->telefone; ?><br>
		                 <?= $result[$i]->email; ?>
		            </td>
		            <td class="shortcode column-shortcode" data-colname="E-mail" style="padding-left: 0">
		                 <?= $result[$i]->observacoes; ?>
		            </td>
		            <td class="shortcode column-shortcode" data-colname="Data" style="padding-left: 0"><?= date("d/m/Y", strtotime($result[$i]->horario)); ?> às <?= date("H:i:s", strtotime($result[$i]->horario)); ?></td>
		        </tr>
		    <?php } ?>
	    </tbody>
	    <tfoot>
	        <tr>
	            <th scope="col" id="shortcode" class="manage-column column-shortcode">Pacote</th>  
	            <th scope="col" id="pedido" class="manage-column column-shortcode">Pedido</th>  
	            <th scope="col" id="nome" class="manage-column column-title column-primary sortable desc">Cliente</th> 
	            <th scope="col" id="observacoes" class="manage-column column-title column-primary sortable desc">Observações</th>
	            <th scope="col" id="date" class="manage-column column-date sortable asc">Data</th>
	        </tr>
	    </tfoot>
	</table>
</div>